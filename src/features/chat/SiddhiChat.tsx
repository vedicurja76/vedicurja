'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { getSiddhiReply, QUICK_PROMPTS, QUICK_PROMPTS_EN, type ChatAction, type ChatReply } from './engine';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  buttons?: ChatAction[];
}

const WELCOME: ChatReply = {
  text: 'नमस्ते 🙏 मैं सिद्धि हूँ — AstroVastu Expert की AI सहायिका। घर, दुकान, ऑफिस, कुंडली या किसी भी वास्तु समस्या के बारे में पूछिए — मैं सही दिशा और सही सेवा तक पहुँचाऊँगी।\n\nHello 🙏 I am Siddhi — your Vastu AI guide. Ask me anything about your space, and I will guide you to the right service.',
  buttons: [
    { label: '📅 Book Consultation', href: '/bookings', icon: '→', primary: true },
    { label: '🏠 Residential Vastu', href: '/services/residential', icon: '→' },
  ],
  source: 'rule',
};

let nextId = 1;

export default function SiddhiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ id: 0, role: 'assistant', text: WELCOME.text, buttons: WELCOME.buttons }]);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setInput('');
    setMessages(prev => [...prev, { id: nextId++, role: 'user', text }]);
    setTyping(true);
    try {
      const history = messages
        .filter(m => m.id !== 0)
        .slice(-10)
        .map(m => ({ role: m.role, content: m.text }));
      const reply = await getSiddhiReply(text, history);
      setMessages(prev => [...prev, { id: nextId++, role: 'assistant', text: reply.text, buttons: reply.buttons }]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: nextId++,
          role: 'assistant',
          text: t('chat.error'),
          buttons: [{ label: '📅 Book Now', href: '/bookings', icon: '→', primary: true }],
        },
      ]);
    } finally {
      setTyping(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 select-text">
      {/* ambient glow */}
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-prakash-gold/25 via-sacred-saffron/10 to-kumkuma-red/20 blur-2xl pointer-events-none" />

      <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-prakash-gold/25 bg-[rgba(10,16,32,0.72)] backdrop-blur-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)]">
        {/* header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[rgba(232,185,96,0.14)] to-transparent">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sacred-saffron via-prakash-gold to-kumkuma-red flex items-center justify-center text-xl shadow-lg shadow-prakash-gold/30">
              ॐ
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0a1020]">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <h3 className="font-serif text-lg text-[var(--color-hero-fg)] leading-tight">सिद्धि · Siddhi</h3>
              <span className="text-[10px] uppercase tracking-[0.18em] text-prakash-gold/90 font-semibold whitespace-nowrap">{t('chat.aiGuide')}</span>
            </div>
            <p className="text-xs text-[var(--color-hero-fg)]/60 truncate">{t('chat.online')} · {t('chat.onlineSub')}</p>
          </div>
        </div>

        {/* messages */}
        <div ref={scrollRef} data-lenis-prevent className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-[280px] max-h-[340px] siddhi-scroll">
          <AnimatePresence initial={false}>
            {messages.map(m =>
              m.role === 'user' ? (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-gradient-to-br from-prakash-gold to-sacred-saffron text-[#1A2A3A] font-medium text-sm shadow-lg shadow-prakash-gold/20 whitespace-pre-wrap">
                    {m.text}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[92%]">
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/[0.07] border border-white/10 text-[var(--color-hero-fg)]/90 text-sm leading-relaxed shadow-inner whitespace-pre-wrap">
                      {m.text}
                    </div>
                    {m.buttons && m.buttons.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {m.buttons.map((b, i) => (
                          <Link
                            key={i}
                            href={b.href}
                            className={
                              b.primary
                                ? 'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-prakash-gold to-sacred-saffron text-[#1A2A3A] shadow-md shadow-prakash-gold/25 hover:brightness-110 active:scale-95 transition'
                                : 'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.08] border border-prakash-gold/30 text-[var(--color-hero-fg)]/85 hover:bg-white/[0.14] active:scale-95 transition'
                            }
                          >
                            {b.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/[0.07] border border-white/10 inline-flex items-center gap-1.5">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-prakash-gold"
                    animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* quick prompts */}
        {messages.length <= 1 && !typing && (
          <div className="px-4 pb-3 flex gap-2 overflow-x-auto siddhi-scroll no-scrollbar" data-lenis-prevent>
            {(language === 'hi' ? QUICK_PROMPTS : QUICK_PROMPTS_EN).map(q => (
              <button
                key={q}
                onClick={() => send(q)}
                className="shrink-0 px-3.5 py-2 rounded-full text-xs font-medium bg-prakash-gold/10 border border-prakash-gold/30 text-[var(--color-hero-fg)]/85 hover:bg-prakash-gold/20 active:scale-95 transition"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* input */}
        <div className="px-4 pb-4 pt-1">
          <form
            onSubmit={e => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/15 pl-5 pr-1.5 py-1.5 focus-within:border-prakash-gold/60 transition"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t('chat.placeholder')}
              className="flex-1 bg-transparent outline-none text-sm text-[var(--color-hero-fg)] placeholder:text-[var(--color-hero-fg)]/40 min-w-0"
              aria-label="Ask Siddhi a Vastu question"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label={t('chat.send')}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron text-[#1A2A3A] flex items-center justify-center shadow-md shadow-prakash-gold/30 hover:brightness-110 active:scale-90 transition disabled:opacity-40 disabled:pointer-events-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
              </svg>
            </button>
          </form>
        </div>

        {/* footer */}
        <div className="px-5 py-2.5 border-t border-white/10 flex items-center justify-between bg-[rgba(255,255,255,0.02)]">
          <span className="text-[10px] text-[var(--color-hero-fg)]/45 tracking-wide">
            Siddhi by <span className="text-prakash-gold/80 font-semibold">Kalki Intelligence</span>
          </span>
          <span className="text-[10px] text-[var(--color-hero-fg)]/35">{t('chat.free')}</span>
        </div>
      </div>
    </div>
  );
}
