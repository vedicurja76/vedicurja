'use client';



import { motion } from 'framer-motion';

export default function ProcessSteps() {
  const steps = [
    { num: '01', title: 'Share Your Concern', desc: 'Tell us your pain points — no Vastu jargon needed. We speak your language.' },
    { num: '02', title: 'Detailed Audit', desc: 'AstroVastu Expert KK Nagaich personally analyses your space, floor plan, or birth chart.' },
    { num: '03', title: 'Precision Remedies', desc: 'Receive personalised, non‑destructive corrections with ritual execution if needed.' },
    { num: '04', title: 'Transformation', desc: 'Witness measurable improvements in health, wealth, relationships, and peace.' },
  ];

  return (
    <section className="bg-[var(--color-bg-elevated)] relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">How It Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Your Journey to Harmony</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative text-center p-6 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/20 shadow-lg"
              style={{ transformStyle: 'preserve-3d', perspective: 600 }}
            >
              <div className="text-5xl font-bold text-prakash-gold/30 mb-3">{step.num}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-nidra-indigo/60">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-prakash-gold text-2xl">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
