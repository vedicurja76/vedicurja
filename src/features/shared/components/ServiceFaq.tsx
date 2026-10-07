'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBi } from '@/lib/i18n/Bilingual';

interface Faq { q: string; a: string }

export default function ServiceFaq({ faqs, title }: { faqs?: Faq[]; title?: string }) {
  const bi = useBi();
  const [open, setOpen] = useState<number | null>(0);
  if (!faqs?.length) return null;

  return (
    <section className="py-16 sm:py-20 bg-[var(--color-bg-elevated)] border-t border-prakash-gold/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo text-center mb-10">
          {title ?? bi('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-prakash-gold/20 bg-white/60 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-nidra-indigo">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-prakash-gold text-2xl leading-none shrink-0">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-nidra-indigo/70 text-sm leading-relaxed border-t border-prakash-gold/10 pt-3">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
