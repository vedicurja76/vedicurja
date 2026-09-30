'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';

const allServices = [
  { id:'residential', title:'Residential Vastu', titleHi:'आवासीय वास्तु', tagline:'Homes, Flats & Quarters', taglineHi:'मकान, फ्लैट व क्वार्टर', desc:'Silver · Gold · Luxury plans', descHi:'सिल्वर · गोल्ड · लक्ज़री प्लान', features:'Computerized layout audit, Remedies with/without demolition', featuresHi:'कम्प्यूटेड लेआउट ऑडिट, बिना तोड़-फोड़ उपाय', href:'/services/residential', image:'/images/services/residential.webp', accent:'#E8B960' },
  { id:'commercial', title:'Commercial Vastu', titleHi:'व्यावसायिक वास्तु', tagline:'Offices, Shops & Showrooms', taglineHi:'ऑफिस, दुकान व शोरूम', desc:'Silver · Gold · Luxury plans', descHi:'सिल्वर · गोल्ड · लक्ज़री प्लान', features:'Employee productivity audit, Cash counter & CEO cabin', featuresHi:'कर्मचारी उत्पादकता ऑडिट, कैश काउंटर व सीईओ केबिन', href:'/services/commercial', image:'/images/services/commercial.webp', accent:'#3B82F6' },
  { id:'industrial', title:'Industrial Vastu', titleHi:'औद्योगिक वास्तु', tagline:'Factories & Manufacturing', taglineHi:'फैक्ट्री व विनिर्माण', desc:'Silver · Gold · Luxury plans', descHi:'सिल्वर · गोल्ड · लक्ज़री प्लान', features:'Heavy machinery placement, Fire-safety & material flow', featuresHi:'भारी मशीनरी स्थानपन, अग्नि सुरक्षा व सामग्री प्रवाह', href:'/services/industrial', image:'/images/services/industrial.webp', accent:'#6366F1' },
  { id:'land', title:'Land Selection', titleHi:'भूमि चयन', tagline:'Auspicious Plot Analysis', taglineHi:'शुभ प्लॉट विश्लेषण', desc:'Silver · Gold · Luxury plans', descHi:'सिल्वर · गोल्ड · लक्ज़री प्लान', features:'Kamadahana soil testing, Slope & elevation audit', featuresHi:'कामधेनु मृदा परीक्षण, ढलान व ऊँचाई ऑडिट', href:'/services/land', image:'/images/services/land.webp', accent:'#10B981' },
  { id:'kundali', title:'Kundali Analysis', titleHi:'कुंडली विश्लेषण', tagline:'Vedic Nadi Jyotish', taglineHi:'वैदिक नाड़ी ज्योतिष', desc:'Basic · Premium plans', descHi:'बेसिक · प्रीमियम प्लान', features:'Shadbala & Vimshottari Dasha, Gemstone & Rudraksha', featuresHi:'षड्बल व विंशोत्तरी दशा, रत्न व रुद्राक्ष', href:'/services/kundali', image:'/images/services/placeholders/kundali.webp', accent:'#F59E0B' },
  { id:'numerology', title:'Numerology & Namakaran', titleHi:'अंक ज्योतिष व नामकरण', tagline:'Names + Mobile Numbers', taglineHi:'नाम + मोबाइल नंबर', desc:'Basic · Premium plans', descHi:'बेसिक · प्रीमियम प्लान', features:'Newborn, Business & Adult naming, Mobile number vibration audit', featuresHi:'नवजात, व्यापार व वयस्क नामकरण, मोबाइल नंबर कंपन ऑडिट', href:'/services/numerology-namakaran', image:'/images/services/placeholders/numerology-namakaran.webp', accent:'#2563EB' },
  { id:'virtual-consult', title:'Virtual Consult', titleHi:'वर्चुअल परामर्श', tagline:'Global Video Session', taglineHi:'ग्लोबल वीडियो सेशन', desc:'60-min personalised session', descHi:'60 मिनट का व्यक्तिगत सेशन', features:'Screen-share floor plan, Post-session written report', featuresHi:'स्क्रीन-शेयर फ्लोर प्लान, सेशन के बाद लिखित रिपोर्ट', href:'/bookings', image:'/images/services/placeholders/virtual-consult.webp', accent:'#0891B2' },
];

function FlipCard({ service }: { service: typeof allServices[0] }) {
  const [flipped, setFlipped] = useState(false);
  const bi = useBi();
  return (
    <div className="relative w-full h-[420px] sm:h-[460px] perspective-[1200px] cursor-pointer group" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} onClick={() => setFlipped(!flipped)}>
      <motion.div className="absolute inset-0 rounded-[40px] shadow-2xl" style={{ transformStyle: 'preserve-3d', rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.7, ease: [0.23,1,0.32,1] }}>
        <div className="absolute inset-0 rounded-[40px] overflow-hidden flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className="h-48 overflow-hidden relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hero-2)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: service.accent }} />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[var(--color-bg-glass-hover)] via-[var(--color-bg-glass)] to-[var(--color-bg-glass)]">
            <h3 className="font-serif text-2xl text-nidra-indigo font-bold">{bi(service.title, service.titleHi)}</h3>
            <p className="text-sm text-nidra-indigo/60 mt-2">{bi(service.tagline, service.taglineHi)}</p>
            <span className="mt-4 text-xs font-medium px-4 py-1.5 rounded-full" style={{ backgroundColor: service.accent + '20', color: service.accent }}>{bi('Explore →', 'देखें →')}</span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[var(--color-bg-glass-hover)] via-[var(--color-bg-glass)] to-[var(--color-bg-glass)] backdrop-blur-xl border-2 flex flex-col" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: service.accent + '40' }}>
          <div className="px-6 py-4" style={{ backgroundColor: service.accent + '15' }}>
            <h4 className="font-serif text-xl text-nidra-indigo font-bold">{bi(service.title, service.titleHi)}</h4>
            <p className="text-xs text-nidra-indigo/60 mt-1">{bi(service.desc, service.descHi)}</p>
          </div>
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <p className="text-sm text-nidra-indigo/70">{bi(service.features, service.featuresHi)}</p>
          </div>
          <div className="px-6 py-4">
            <Link href={service.href} className="inline-flex items-center justify-center w-full py-3 rounded-full text-white font-medium text-sm hover:shadow-lg" style={{ backgroundColor: service.accent }} onClick={e => e.stopPropagation()}>
              {bi('Explore', 'देखें')} {bi(service.title, service.titleHi)} →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SacredServices() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const bi = useBi();
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  return (
    <motion.section ref={ref} style={isMounted ? { opacity, y } : undefined} className="py-24 md:py-32 bg-[var(--color-bg-elevated)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Sacred Services', 'पवित्र सेवाएं')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 leading-tight">
            {bi('Holistic Vastu Solutions for', 'संपूर्ण वास्तु समाधान —')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Every Aspect of Life', 'जीवन के हर पहलू के लिए')}</span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm sm:text-base">{bi('Rooted in authentic Vedic lineage – 100M+ views, 80K+ followers.', 'प्रामाणिक वैदिक परंपरा से जुड़े — 100M+ दर्शक, 80K+ फ़ॉलोअर्स।')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto place-items-center">
          {allServices.map(service => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full flex justify-center">
              <FlipCard service={service} />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block max-w-md w-full rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-sacred-saffron/30 to-kumkuma-red/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="rounded-[38px] bg-gradient-to-br from-[var(--color-hero-1)] to-[var(--color-accent-red)]/60 p-8 text-[var(--color-hero-fg)]">
              <svg className="w-12 h-12 mx-auto mb-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3 className="font-serif text-2xl mb-2">{bi('Full Kundali Analysis', 'संपूर्ण कुंडली विश्लेषण')}</h3>
              <p className="text-sm text-[var(--color-hero-fg)]/70 mb-2">{bi('100-Page Detailed Report by AstroVastu Expert K.K. Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नागाइच द्वारा 100-पेज विस्तृत रिपोर्ट')}</p>
              <div className="text-center mb-4">
                <span className="line-through text-[var(--color-hero-fg)]/50 text-xl mr-2"><span className="line-through text-[var(--color-hero-fg)]/50 text-xl mr-2">₹5,999</span> <span className="text-3xl font-bold text-prakash-gold"></span></span>
                <span className="text-prakash-gold text-4xl font-bold">₹999</span>
              </div>
              <a href={getWhatsAppLink('I want the full Kundali analysis report (₹999)')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-[#1A2A3A] font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                {bi('Get Report on WhatsApp →', 'रिपोर्ट WhatsApp पर पाएं →')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default SacredServices;
