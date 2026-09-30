'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

const faqs = [
  { q: 'What is Vastu Shastra?', a: 'Vastu Shastra is the ancient Indian science of architecture and spatial harmony, balancing the five elements for well‑being and prosperity.',
    qHi: 'वास्तु शास्त्र क्या है?', aHi: 'वास्तु शास्त्र प्राचीन भारतीय वास्तुकला एवं स्थानिक सामंजस्य का विज्ञान है, जो पाँच तत्वों को संतुलित कर कल्याण और समृद्धि प्रदान करता है।' },
  { q: 'How does virtual consultation work?', a: 'You share your floor plan via screen share, and AstroVastu Expert KK Nagaich provides real‑time analysis and remedies.',
    qHi: 'वर्चुअल परामर्श कैसे काम करता है?', aHi: 'आप स्क्रीन-शेयर के माध्यम से अपना फ्लोर प्लान साझा करते हैं, और एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच वास्तविक समय में विश्लेषण एवं उपचार प्रदान करते हैं।' },
  { q: 'Are remedies destructive?', a: 'No. We focus on simple, non‑invasive corrections using colors, elements, and symbols.',
    qHi: 'क्या उपचार विनाशकारी हैं?', aHi: 'नहीं। हम रंगों, तत्वों और प्रतीकों का उपयोग करके सरल, गैर-आक्रामक सुधार पर ध्यान केंद्रित करते हैं।' },
  { q: 'How long does a consultation take?', a: 'Typically 60‑90 minutes for residential, 2 hours for commercial.',
    qHi: 'परामर्श में कितना समय लगता है?', aHi: 'आमतौर पर आवासीय के लिए 60‑90 मिनट, और व्यावसायिक के लिए 2 घंटे।' },
  { q: 'Do I need to be present?', a: 'Yes, you will guide Acharya through your space via video call.',
    qHi: 'क्या मेरा उपस्थित होना ज़रूरी है?', aHi: 'हाँ, आप वीडियो कॉल के माध्यम से आचार्य को अपने स्थान का मार्गदर्शन करेंगे।' },
  { q: 'Can Vastu help my business?', a: 'Absolutely. Proper alignment can improve productivity, reduce conflicts, and attract clients.',
    qHi: 'क्या वास्तु मेरे व्यापार में मदद कर सकता है?', aHi: 'बिल्कुल। सही संरेखण उत्पादकता बढ़ा सकता है, संघर्ष घटा सकता है और ग्राहक आकर्षित कर सकता है।' },
  { q: 'Is Vastu scientific?', a: 'Modern studies validate many Vastu principles, particularly regarding thermal comfort and energy flow.',
    qHi: 'क्या वास्तु वैज्ञानिक है?', aHi: 'आधुनिक अध्ययन कई वास्तु सिद्धांतों की पुष्टि करते हैं, विशेष रूप से तापीय आराम और ऊर्जा प्रवाह के संबंध में।' },
  { q: 'What if I rent my home?', a: 'Vastu affects tenants too. Simple remedies can be applied without structural changes.',
    qHi: 'अगर मैं अपना घर किराए पर रखता/रखती हूँ तो?', aHi: 'वास्तु किराएदारों पर भी असर डालता है। संरचनात्मक बदलाव के बिना सरल उपचार किए जा सकते हैं।' },
];

export default function FAQSection() {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(f => {
    const q = (hi ? f.qHi : f.q).toLowerCase();
    const a = (hi ? f.aHi : f.a).toLowerCase();
    const term = searchQuery.toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  return (
    <section className="py-24 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="font-serif text-4xl text-center text-nidra-indigo mb-4">{hi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</h2>
        <p className="text-center text-nidra-indigo/60 mb-8">{hi ? 'वास्तु शास्त्र के बारे में सब कुछ जो आपको जानना आवश्यक है' : 'Everything you need to know about Vastu Shastra'}</p>

        <input
          type="text"
          placeholder={hi ? 'प्रश्न खोजें...' : 'Search FAQs...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-3 mb-8 rounded-full border border-prakash-gold/30 bg-[var(--color-bg-glass)] text-nidra-indigo placeholder:text-nidra-indigo/40 focus:outline-none focus:border-prakash-gold"
        />

        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-vastu-stone/20 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-4 text-left flex justify-between items-center"
              >
                <span className="font-medium text-nidra-indigo">{hi ? faq.qHi : faq.q}</span>
                <span className="text-2xl text-prakash-gold">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 pt-0 text-nidra-indigo/70 border-t border-prakash-gold/20">{hi ? faq.aHi : faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {filteredFaqs.length === 0 && (
          <p className="text-center text-nidra-indigo/60 py-8">{hi ? 'कोई प्रश्न नहीं मिला। कोई अन्य खोज आज़माएँ।' : 'No FAQs found. Try a different search.'}</p>
        )}
      </div>
    </section>
  );
}
