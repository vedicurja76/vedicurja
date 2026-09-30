import { RASHI, type RashiProfile } from '@/features/astrology/vedic';

/* ------------------------------------------------------------------
   Deterministic, 100% client-side daily horoscope generator.
   Output is seeded purely by (date + rashi), so the same day always
   reads the same for everyone and needs NO API / NO network. This is
   guidance-for-reflection, not fabricated planetary positions.
------------------------------------------------------------------ */

export type AreaText = { en: string; hi: string };

export interface DayHoroscope {
  rashi: RashiProfile;
  dateKey: string;
  headline: AreaText;
  overall: AreaText;
  love: AreaText;
  career: AreaText;
  health: AreaText;
  finance: AreaText;
  remedy: AreaText;
  luckyColor: AreaText;
  luckyNumber: number;
  luckyDirection: AreaText;
  compatibleWith: AreaText;
  moodScore: number; // 1–100 energy index for the day
}

const COLORS: AreaText[] = [
  { en: 'Saffron', hi: 'केसरिया' },
  { en: 'Golden Yellow', hi: 'सुनहरा पीला' },
  { en: 'Sea Green', hi: 'समुद्री हरा' },
  { en: 'Sky Blue', hi: 'आसमानी नीला' },
  { en: 'Off-white', hi: 'हल्का सफेद' },
  { en: 'Crimson Red', hi: 'गहरा लाल' },
  { en: 'Emerald Green', hi: 'पन्ना हरा' },
  { en: 'Royal Purple', hi: 'बादामी' },
  { en: 'Silver', hi: 'चाँदी' },
  { en: 'Coral Pink', hi: 'मूँजा गुलाबी' },
];

const DIRS: AreaText[] = [
  { en: 'North', hi: 'उत्तर' },
  { en: 'North-East (Ishan)', hi: 'उत्तर-पूर्व (ईशान)' },
  { en: 'East', hi: 'पूर्व' },
  { en: 'South-East (Agneya)', hi: 'दक्षिण-पूर्व (आग्नेय)' },
  { en: 'West', hi: 'पश्चिम' },
  { en: 'North-West (Vayavya)', hi: 'उत्तर-पश्चिम (वायव्य)' },
  { en: 'South (Nairitya)', hi: 'दक्षिण (नैऋत्य)' },
  { en: 'South-West (Nairitya)', hi: 'दक्षिण-पश्चिम (नैऋत्य)' },
];

const TONES: AreaText[] = [
  { en: 'a bright, active day', hi: 'चमकदार, सक्रिय दिन' },
  { en: 'a calm, reflective day', hi: 'शांत, चिंतनशील दिन' },
  { en: 'a day of steady progress', hi: 'स्थिर प्रगति का दिन' },
  { en: 'a surprising, eventful day', hi: 'आश्चर्यजनक, घटनापूर्ण दिन' },
  { en: 'a productive, focused day', hi: 'उपजाऊ, केंद्रित दिन' },
  { en: 'a warm, social day', hi: 'उष्ण, सामाजिक दिन' },
  { en: 'a day to slow down and reset', hi: 'धीमेपन व पुनःसंतुलन का दिन' },
];

const LOVE: AreaText[] = [
  { en: 'Communication with a loved one warms up — an honest word today settles an old doubt.', hi: 'प्रियजन से संवाद गर्मजोशी से भरा रहेगा — आज का एक सच्चा वचन पुरानी शंका दूर करता है।' },
  { en: 'Small gestures matter more than grand plans; a shared meal or walk strengthens bonds.', hi: 'छोटे-छोटे इशारे बड़े योजनाओं से अधिक मायने रखते हैं; साथ में भोजन या सैर बंधन मजबूत करती है।' },
  { en: 'Give space where it is needed — patience today prevents friction tomorrow.', hi: 'जहाँ आवश्यक हो वहाँ स्थान दें — आज का धैर्य कल की खींचतान रोकता है।' },
  { en: 'An old connection may resurface; respond with warmth but keep your boundaries clear.', hi: 'कोई पुराना संबंध फिर सामने आ सकता है; स्नेह से उत्तर दें पर सीमाएँ स्पष्ट रखें।' },
  { en: 'Heart matters find easy flow — good day to express appreciation you have been holding in.', hi: 'हृदय से जुड़े मामले सहज चलेंगे — दबाए हुए आभार व्यक्त करने का शुभ दिन।' },
  { en: 'Avoid decisions made in mood; speak after a pause and misunderstandings dissolve.', hi: 'मूड में निर्णय लेने से बचें; ठहराव के बाद बोलें, गलतफहमियाँ घुल जाती हैं।' },
  { en: 'Family energy is supportive — involve elders in a matter close to your heart.', hi: 'पारिवारिक ऊर्जा सहयोगी है — अपने हृदय के निकट मामले में बड़ों को शामिल करें।' },
];

const CAREER: AreaText[] = [
  { en: 'Your initiative is noticed by the right people — pitch the idea you have been sitting on.', hi: 'आपका पहल सही लोगों का ध्यान खींचती है — जो विचार आप पकड़े बैठे हैं, उसे रखें।' },
  { en: 'Focus beats speed today; finish one pending task before opening a new front.', hi: 'आज गति से अधिक ध्यान मायने रखता है; एक अधूरा कार्य पूरा करके ही नया मोड़ लें।' },
  { en: 'A colleague or client conversation turns favourable — keep it courteous and documented.', hi: 'किसी सहकर्मी/ग्राहक से बात अनुकूल मोड़ लेती है — विनम्र व लिखित रखें।' },
  { en: 'Do not over-commit; a realistic promise kept beats a big one deferred.', hi: 'अत्यधिक वचन न दें; यथार्थपूर्ण वादा निभाना बड़े टलने वाले वादे से बेहतर है।' },
  { en: 'Learning or upskilling pays off — a small course or note today compounds later.', hi: 'सीखना-निकारना फलदायी है — आज का छोटा पाठ/नोट आगे बढ़कर लौटता है।' },
  { en: 'Authority figures favour steady, humble effort over loud ambition today.', hi: 'आज अधिकारी वर्ग शोर भरे महत्वाकांक्षा से विनम्र, स्थिर प्रयास को प्रिय मानते हैं।' },
  { en: 'Watch the fine print before signing or spending — clarity now avoids rework later.', hi: 'हस्ताक्षर/व्यय से पूर्व सूक्ष्म शर्तें पढ़ें — आज की स्पष्टता बाद की दुबारा-मेहनत बचाती है।' },
];

const HEALTH: AreaText[] = [
  { en: 'Energy is high — channel it into movement rather than agitation.', hi: 'ऊर्जा उच्च है — उसे बेचैनी में नहीं, गतिविधि में लगाएँ।' },
  { en: 'Hydrate and breathe deliberately; a five-minute walk resets your mind.', hi: 'जल पर्याप्त पिएँ व सचेत श्वास लें; पाँच मिनट की सैर मन को रीसेट करती है।' },
  { en: 'Mind the sleep clock tonight — an early night sharpens tomorrow.', hi: 'आज रात नींद-घड़ी का ध्यान रखें — जल्दी सोना कल को तेज करता है।' },
  { en: 'Light, warm food suits you today; heavy meals will dull the afternoon.', hi: 'आज हल्का, गर्म भोजन अनुकूल है; भारी खाना दोपहर सुस्त करेगा।' },
  { en: 'A tension area (shoulders/neck/back) asks for gentle stretch or massage.', hi: 'तनाव वाला भाग (कंधा/गर्दन/रिढ़) हल्की स्ट्रेच व मालिश माँगता है।' },
  { en: 'Digestion is sensitive — regular meal times keep mood steady.', hi: 'पाचन संवेदनशील है — नियमित भोजन-समय मनोदशा स्थिर रखते हैं।' },
  { en: 'Sunlight and fresh air do more than caffeine today; step outside.', hi: 'आज धूप व ताजी हवा कैफीन से अधिक काम करती हैं; बाहर निकलें।' },
];

const FINANCE: AreaText[] = [
  { en: 'A practical saving idea appears — note it before it slips away.', hi: 'एक व्यावहारिक बचत का विचार आता है — छूटने से पहले नोट करें।' },
  { en: 'Good day to review expenses; small leaks cost more than big purchases.', hi: 'खर्च समीक्षा का शुभ दिन; छोटी रिसावें बड़ी खरीद से अधिक खर्च कराती हैं।' },
  { en: 'Avoid impulse buys after sunset — sleep on the decision.', hi: 'सूर्यास्त के बाद आवेश-खरीद से बचें — निर्णय पर रात भर सोच लें।' },
  { en: 'Money you expected arrives, or a pending amount gets clarified.', hi: 'प्रतीक्षित धन आता है, या कोई लंबित राशि स्पष्ट होती है।' },
  { en: 'Favourable for planning — set aside a fixed amount before spending.', hi: 'योजना हेतु अनुकूल — खर्च से पहले निश्चित राशि अलग रखें।' },
  { en: 'Lend or borrow carefully today; keep terms clear to protect the relationship.', hi: 'आज उधार-लेन-देन सावधानी से; संबंध बचाने हेतु शर्तें स्पष्ट रखें।' },
  { en: 'Income through honest effort is highlighted — shortcuts invite trouble.', hi: 'ईमानदार मेहनत की आय को बल है — शॉर्टकट झंझट लाते हैं।' },
];

const REMEDY: AreaText[] = [
  { en: 'Light a diya at dusk and sit quietly for three breaths.', hi: 'संध्या पर दीपक जलाएँ व तीन श्वास तक मौन बैठें।' },
  { en: 'Offer water to a green plant in the east in the morning.', hi: 'सुबह पूर्व दिशा में किसी हरे पौधे को जल अर्पित करें।' },
  { en: 'Chant your Ishta-mantra for a minute before starting important work.', hi: 'महत्वपूर्ण कार्य आरंभ से पहले एक मिनट इष्ट-मंत्र जप करें।' },
  { en: 'Don’t let anyone eat in your kitchen empty — share a bite today.', hi: 'आज रसोई में किसी को खाली न जाने दें — एक निवाला बाँटें।' },
  { en: 'Declutter one drawer or shelf; clearing space clears energy.', hi: 'एक दराज़/शेल्फ का अतिरिक्त सामान हटाएँ; जगह खाली करना ऊर्जा खाली करता है।' },
  { en: 'Feed birds or a stray; small kindness steadies the day.', hi: 'पक्षियों व बेजुबान को चारा डालें; छोटी दया दिन को स्थिर करती है।' },
  { en: 'Write the day’s single priority on paper and keep it visible.', hi: 'दिन की एकमात्र प्राथमिकता कागज़ पर लिखकर सामने रखें।' },
  { en: 'Sprinkle a little sea-salt water at the main door for cleansing.', hi: 'प्रवेश द्वार पर थोड़ा सा जल-सेंट (समुद्री नमक) छिड़कें।' },
];

function hashStr(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function todayKey(d: Date = new Date()): string {
  const ymd = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return ymd;
}

export function generateDailyHoroscope(rashiKey: string, dateKey: string): DayHoroscope {
  const rashi = RASHI.find(r => r.key === rashiKey) || RASHI[0];
  const rng = mulberry32(hashStr(`${rashi.key}||${dateKey}`));
  const pick = <T,>(arr: T[]): T => arr[Math.floor(rng() * arr.length) % arr.length];
  const idx = (RASHI.findIndex(r => r.key === rashi.key) + 1);
  const tone = pick(TONES);
  const compatibleOffset = 1 + Math.floor(rng() * 11);
  const compatible = RASHI[(idx - 1 + compatibleOffset) % 12];
  return {
    rashi,
    dateKey,
    headline: {
      en: `Today is ${tone.en} for ${rashi.en}.`,
      hi: `${rashi.hi} — आज ${tone.hi} का दिन है।`,
    },
    overall: {
      en: `Your ruling planet ${rashi.lord} favours ${pick(['clear decisions', 'measured movement', 'honest dialogue', 'steady effort', 'quiet confidence', 'careful planning', 'compassionate action'])}. ${pick(['Momentum builds after midday.', 'Morning sets the tone — begin with intention.', 'Avoid reacting in haste; respond with clarity.', 'A small win early lifts the rest of the day.', 'Choose one thing to finish today, not five to start.', 'An unexpected word arrives — read between the lines.'])}`,
      hi: `आपके स्वामी ग्रह ${rashi.lordHi} ${pick(['निर्णय-स्पष्टता', 'संयमित गति', 'सच्चा संवाद', 'स्थिर परिश्रम', 'शांत आत्मविश्वास', 'सावधान योजना', 'दयापूर्ण कर्म'])} को प्रोत्साहित करते हैं। ${pick(['दोपहर के बाद गति बनेगी।', 'सुबह दिन का सुर तय करती है — संकल्प के साथ आरंभ करें।', 'जल्दबाज़ी में प्रतिक्रिया से बचें; स्पष्टता से उत्तर दें।', 'सुबह की एक छोटी जीत पूरे दिन को ऊपर उठाती है।', 'आज पाँच नए कार्य नहीं — एक कार्य पूर्ण करने का चयन करें।', 'एक अप्रत्याशित वाणी मिलती है — पंक्तियों के बीच का अर्थ पढ़ें।'])}`,
    },
    love: pick(LOVE),
    career: pick(CAREER),
    health: pick(HEALTH),
    finance: pick(FINANCE),
    remedy: pick(REMEDY),
    luckyColor: pick(COLORS),
    luckyNumber: 1 + Math.floor(rng() * 9),
    luckyDirection: pick(DIRS),
    compatibleWith: { en: `${compatible.en}`, hi: `${compatible.hi}` },
    moodScore: 55 + Math.floor(rng() * 42),
  };
}

export const ALL_RASHI = RASHI;

export function getRashiByKey(key: string): RashiProfile {
  return RASHI.find(r => r.key === key) || RASHI[0];
}

export function dateLabel(dateKey: string, bi: (en: string, hi: string) => string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const en = dt.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const hi = dt.toLocaleDateString('hi-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return bi(en, hi);
}
