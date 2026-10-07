'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

const reasons = [
  { icon: '🔮', title: 'Tantra + Vastu', titleHi: 'तंत्र + वास्तु', desc: 'Not just diagnosis — personally performed rituals, Yantra energisation, and Havan by a trained Tantra Sadhak.', descHi: 'केवल निदान नहीं — प्रशिक्षित तंत्र साधक द्वारा स्वयं संपन्न अनुष्ठान, यंत्र एनर्जीकरण और हवन।' },
  { icon: '📊', title: 'MBA + Ex‑CEO', titleHi: 'MBA + पूर्व सीईओ', desc: 'Every Vastu defect mapped to a business metric. Boardroom precision meets ancient wisdom.', descHi: 'हर वास्तु दोष व्यावसायिक मापदंड से जुड़ा। बोर्डरूम सटीकता और प्राचीन ज्ञान का संगम.' },
  { icon: '🕉️', title: '4th Gen Lineage', titleHi: '4 पीढ़ियों की परंपरा', desc: 'Inherited knowledge under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, Dr. Rajendra Jain.', descHi: 'डॉ. शिव वर्मा, डॉ. नरेंद्र सहसत्रबुद्धे, डॉ. राजेंद्र जैन के मार्गदर्शन में विरासत में मिला ज्ञान।' },
  { icon: '🌍', title: '10M+ Views', titleHi: '1 करोड़+ व्यूज़', desc: "India's most‑viewed digital Vastu expert across YouTube, Instagram, and Facebook.", descHi: 'YouTube, Instagram और Facebook पर भारत के सबसे अधिक देखे जाने वाले डिजिटल वास्तु विशेषज्ञ।' },
  { icon: '👥', title: '107K+ Followers', titleHi: '1.07 लाख+ फॉलोअर्स', desc: 'Largest Instagram following for any Indian Vastu authority. Trusted community.', descHi: 'किसी भी भारतीय वास्तु विशेषज्ञ की सबसे बड़ी Instagram फॉलोइंग। विश्वसनीय समुदाय।' },
  { icon: '✅', title: '2 Lakh+ Clients', titleHi: '2 लाख+ क्लाइंट्स', desc: 'Served across 50+ countries — from Ganga banks to Manhattan skyscrapers.', descHi: '50+ देशों में सेवा — गंगा किनारे से मैनहट्टन के गगनचुंबी इमारतों तक।' },
];

export default function WhyChooseUs() {
  const bi = useBi();
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Why Choose AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट को ही क्यों')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            {bi('The Deadly Combination No Other Expert Possesses', 'वह अनोखा संयोजन जो किसी अन्य विशेषज्ञ के पास नहीं')}
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            {bi('AstroVastu Expert KK Nagaich uniquely combines Tantra mastery, MBA‑grade business acumen, and 4th‑generation Vedic lineage — a trio unmatched by any other consultant in India.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच तंत्र विशेषज्ञता, MBA-स्तरीय व्यावसायिक सूझ और 4 पीढ़ियों की वैदिक परंपरा को अद्वितीय रूप से जोड़ते हैं — भारत में कोई अन्य सलाहकार इसका मुकाबला नहीं कर सकता।')}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi(r.title, r.titleHi)}</h3>
              <p className="text-sm text-nidra-indigo/60 leading-relaxed">{bi(r.desc, r.descHi)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
