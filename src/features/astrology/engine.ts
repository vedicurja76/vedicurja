import { computeVedic, type VedicResult } from './vedic';

const GROQ_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || '';
const AGNES_KEY = process.env.NEXT_PUBLIC_AGNES_API_KEY || '';
const CACHE_KEY = 'astro-read-cache-v1';
const CACHE_TTL = 1000 * 60 * 60 * 24 * 7; // 7 days

export interface AstroRead {
  profile: VedicResult;
  aiSummaryEn: string;
  aiSummaryHi: string;
  source: 'computed' | 'groq' | 'agnes';
}

interface CacheEntry { read: AstroRead; ts: number }

function readCache(): Record<string, CacheEntry> {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch { return {}; }
}
function writeCache(key: string, read: AstroRead) {
  try {
    const c = readCache();
    c[key] = { read, ts: Date.now() };
    const entries = Object.entries(c);
    if (entries.length > 60) {
      entries.sort((a, b) => a[1].ts - b[1].ts);
      for (const [k] of entries.slice(0, entries.length - 40)) delete c[k];
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(c));
  } catch { /* ignore */ }
}

function keyFor(name: string, dobISO: string): string {
  return `${name.trim().toLowerCase()}|${dobISO}`;
}

async function callLLM(baseUrl: string, apiKey: string, model: string, prompt: string): Promise<string> {
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6,
      max_tokens: 320,
    }),
    signal: AbortSignal.timeout(16000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const text: string = data?.choices?.[0]?.message?.content || '';
  if (!text.trim()) throw new Error('Empty completion');
  return text.trim();
}

/* Compose a genuinely useful summary from the deterministic profile,
   so the tool always gives value even without API keys. */
function localSummary(profile: VedicResult): { en: string; hi: string } {
  const { rashi, mulank, bhagyank } = profile;
  const en = `${rashi.en} (Surya-rashi) natives ruled by ${rashi.lord} carry ${rashi.traitsEn.slice(0, 3).join(', ').toLowerCase()} energy. Your Psychic number ${mulank.n} (${mulank.planet}) and Destiny number ${bhagyank.n} (${bhagyank.planet}) point to ${mulank.title} meets ${bhagyank.title}. Focus on ${rashi.careerEn.split('.')[0].toLowerCase()}. Wear ${rashi.color}, gift ${rashi.gemEn}, and favour numbers ${profile.luckyNumbers.join(', ')}. ${rashi.remedyEn}`;
  const hi = `${rashi.hi} (सूर्य राशि), ${rashi.lordHi} से शासित — आपमें ${rashi.traitsHi.slice(0, 3).join(', ')} की ऊर्जा है। आपका मूलांक ${mulank.n} (${mulank.planetHi}) व भाग्यांक ${bhagyank.n} (${bhagyank.planetHi}) — ${mulank.titleHi} व ${bhagyank.titleHi} का संगम। ${rashi.careerHi} रंग: ${rashi.colorHi}, रत्न: ${rashi.gemHi}, शुभ अंक: ${profile.luckyNumbers.join(', ')}। ${rashi.remedyHi}`;
  return { en, hi };
}

function buildPrompt(profile: VedicResult, name: string): string {
  const { rashi, mulank, bhagyank } = profile;
  return `You are a warm Vedic astrologer assisting Acharya KK Nagaich (AstroVastu Expert). Write a short, encouraging 2-part reading. First line in English (max 60 words), then a blank line, then the SAME reading in Hindi Devanagari (max 60 words). Base it ONLY on this computed data — do not invent planetary degrees or make dire predictions; no medical/legal/financial advice.
Name: ${name || 'friend'}
Surya-rashi: ${rashi.en} (${rashi.hi}), lord ${rashi.lord}, element ${rashi.element}
Psychic number (Mulank): ${mulank.n} — ${mulank.planet}
Destiny number (Bhagyank): ${bhagyank.n} — ${bhagyank.planet}
Traits: ${rashi.traitsEn.join(', ')}
Career affinity: ${rashi.careerEn}
Remedy: ${rashi.remedyEn}
Lucky numbers: ${profile.luckyNumbers.join(', ')}
End by suggesting a detailed Janma-kundli with Acharya for exact Moon-sign, Nakshatra & Dasha.`;
}

export async function getAstroRead(name: string, dobISO: string): Promise<AstroRead> {
  const dob = new Date(dobISO + 'T00:00:00');
  const profile = computeVedic({ dob, name });
  const local = localSummary(profile);
  const base: AstroRead = { profile, aiSummaryEn: local.en, aiSummaryHi: local.hi, source: 'computed' };

  const key = keyFor(name, dobISO);
  const cached = readCache()[key];
  if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.read;

  if (GROQ_KEY) {
    try {
      const text = await callLLM('https://api.groq.com/openai/v1', GROQ_KEY, 'llama-3.3-70b-versatile', buildPrompt(profile, name));
      const { en, hi } = splitReading(text, local);
      const read: AstroRead = { profile, aiSummaryEn: en, aiSummaryHi: hi, source: 'groq' };
      writeCache(key, read);
      return read;
    } catch { /* fall through */ }
  }
  if (AGNES_KEY) {
    try {
      const text = await callLLM('https://apihub.agnes-ai.com/v1', AGNES_KEY, 'agnes-2.5-flash', buildPrompt(profile, name));
      const { en, hi } = splitReading(text, local);
      const read: AstroRead = { profile, aiSummaryEn: en, aiSummaryHi: hi, source: 'agnes' };
      writeCache(key, read);
      return read;
    } catch { /* fall through */ }
  }

  writeCache(key, base);
  return base;
}

function splitReading(text: string, fallback: { en: string; hi: string }): { en: string; hi: string } {
  // Try to separate an English block and a Devanagari block.
  const dev = text.match(/[\u0900-\u097F][\s\S]*/);
  const latin = text.match(/^[^\u0900-\u097F]+/);
  const hi = dev ? dev[0].trim() : '';
  const en = latin ? latin[0].trim() : '';
  return {
    en: en || fallback.en,
    hi: hi || fallback.hi,
  };
}
