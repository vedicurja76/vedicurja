'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useBi } from '@/lib/i18n/Bilingual';

export default function VirtualConsultPage() {
  const bi = useBi();
  const benefits = ['60‑Min Personalised Session','Screen‑Share Floor Plan Analysis','Post‑Session Written Report','Global Accessibility','Confidential & Secure','Flexible Scheduling'];
  const benefitsHi = ['60 मिनट का व्यक्तिगत सत्र','स्क्रीन-शेयर से फ्लोर प्लान विश्लेषण','सत्र के बाद लिखित रिपोर्ट','विश्वभर सुलभता','गोपनीय और सुरक्षित','लचीली शेड्यूलिंग'];
  return (<>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Vedic Application', 'वैदिक प्रयोग')}</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Virtual Consult', 'वर्चुअल परामर्श')}</span></h1>
          <p className="text-lg text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4">{bi('Live one‑on‑one video consultation — the full depth of Vastu guidance, from anywhere in the world.', 'लाइव एक-से-एक वीडियो परामर्श — दुनिया के किसी भी स्थान से वास्तु मार्गदर्शन की समग्र गहराई।')}</p>
          <p className="text-sm text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi('100M+ views, 80K+ followers — AstroVastu Expert KK Nagaich personally conducts every session.', '10 करोड़+ व्यूज़, 80 हज़ार+ फॉलोअर्स — एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच स्वयं हर सत्र संचालित करते हैं।')}</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Book Virtual Session', 'वर्चुअल सत्र बुक करें')}</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />
      <section className="py-20 bg-[var(--color-bg-elevated)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Your Journey', 'आपकी यात्रा')}</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('How Virtual Consultation Works', 'वर्चुअल परामर्श कैसे काम करता है')}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[{step:'01',title:'Book a Slot',titleHi:'स्लॉट बुक करें',desc:'Choose your time via the booking form — flexible IST slots for global timezones',descHi:'बुकिंग फॉर्म से अपना समय चुनें — वैश्विक टाइमज़ोन के लिए लचीले IST स्लॉट'},{step:'02',title:'Share Details',titleHi:'विवरण साझा करें',desc:'Upload computerized layout plan, photos, and specific concerns before the session',descHi:'सत्र से पहले कंप्यूटराइज़्ड लेआउट प्लान, फोटो और विशेष चिंताएं अपलोड करें'},{step:'03',title:'Video Call',titleHi:'वीडियो कॉल',desc:'60‑minute secure video call — Acharya analyzes your space via screen share',descHi:'60 मिनट की सुरक्षित वीडियो कॉल — आचार्य स्क्रीन-शेयर से आपके स्थान का विश्लेषण करते हैं'},{step:'04',title:'Receive Report',titleHi:'रिपोर्ट प्राप्त करें',desc:'Post‑session PDF report with all doshas, remedies, and step‑by‑step plan',descHi:'सत्र के बाद सभी दोष, उपचार और चरण-दर-चरण योजना वाली PDF रिपोर्ट'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi(s.title, s.titleHi)}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{bi(s.desc, s.descHi)}</p></motion.div>))}
          </div>
          <div className="text-center"><h3 className="font-serif text-2xl text-nidra-indigo mb-6">{bi('Benefits', 'लाभ')}</h3><div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">{benefits.map((b,i)=>(<div key={b} className="p-4 bg-vastu-stone/20 rounded-xl text-sm text-nidra-indigo/70">{bi(b, benefitsHi?.[i])}</div>))}</div></div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--color-hero-fg)] mb-4">Book Your Virtual Session</h2>
          <p className="text-[var(--color-hero-fg)]/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally conducted by AstroVastu Expert KK Nagaich.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Now →</Link>
        </div>
      </section>
    
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
