'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import { useBi } from '@/lib/i18n/Bilingual';

/* ------------------------------------------------------------------ */
/*  Instagram Reel 3D Card (same component as remedies)               */
/* ------------------------------------------------------------------ */
function ReelCard({ title, titleHi, reelUrl }: { title: string; titleHi?: string; reelUrl: string }) {
  const bi = useBi();
  return (
    <motion.a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, rotateY: 3, rotateX: -2 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className="group relative w-full max-w-sm mx-auto"
    >
      <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.3)] transition-shadow duration-500">
        <div className="relative rounded-[38px] bg-gradient-to-br from-[var(--color-bg-elevated)] via-[var(--color-bg-glass)] to-[var(--color-bg-glass)] backdrop-blur-xl p-8 h-[420px] flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron flex items-center justify-center mb-6 shadow-2xl">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-nidra-indigo font-bold mb-3 leading-snug">{bi(title, titleHi)}</h3>
          <p className="text-sm text-nidra-indigo/60 mb-8">{bi('Watch this sacred ritual', 'इस पवित्र अनुष्ठान को देखें')}</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg group-hover/btn:shadow-xl transition-shadow">
            {bi('Play Reel', 'रील चलाएं')} <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  YouTube Video Component                                           */
/* ------------------------------------------------------------------ */
function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-prakash-gold/30 bg-black">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Data                                                         */
/* ------------------------------------------------------------------ */
const ritualsReels = [
  { title: 'Dakshin Disha Rituals', titleHi: 'दक्षिण दिशा अनुष्ठान', url: 'https://www.instagram.com/reel/DX6RieCSJvF/' },
  { title: 'Magic Water Purification', titleHi: 'चमत्कारी जल शुद्धि', url: 'https://www.instagram.com/reel/DXuL6Tekq84/' },
  { title: 'Bramha Nabhi Activation', titleHi: 'ब्रह्मनाभि सक्रियण', url: 'https://www.instagram.com/reel/DW8EqslSCs_/' },
  { title: 'Bramha Nabhi Part 2', titleHi: 'ब्रह्मनाभि भाग 2', url: 'https://www.instagram.com/reel/DWfuDGMktfh/' },
  { title: 'Industrial Vastu Havan', titleHi: 'औद्योगिक वास्तु हवन', url: 'https://www.instagram.com/reel/DUKoiDgkog-/' },
];

export default function RitualsPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Sacred Puja & Havan', 'पवित्र पूजा एवं हवन')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-purple-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Vedic Rituals', 'वैदिक अनुष्ठान')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-10">
              {bi('Personalised Yantra Pran Pratishtha, Navagraha Shanti, Havan, and Anushthan – performed by AstroVastu Expert K.K. Nagaich himself.', 'व्यक्तिगत यंत्र प्राण प्रतिष्ठा, नवग्रह शांति, हवन और अनुष्ठान — एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा स्वयं संपन्न।')}
            </p>
            <Link href="/bookings" className="luxury-button text-lg px-10 py-5">{bi('Book a Ritual Consultation', 'अनुष्ठान परामर्श बुक करें')}</Link>
          </div>
        </section>

        <WhyChooseUs />

        {/* BIG FEATURED VIDEO – #1 ASTROLOGER ON INDIA NEWS */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-10">
              {bi('As Seen on', 'जैसा कि')} <span className="text-prakash-gold">India News</span>
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed videoId="fjUP13uEUi0" title="#1 Astrologer on India News in India" />
            </div>
            <p className="text-center text-nidra-indigo/60 mt-6 text-sm">
              {bi('AstroVastu Expert K.K. Nagaich – the #1 Astrologer on national television', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच — राष्ट्रीय टेलीविज़न पर नंबर 1 ज्योतिषी')}
            </p>
          </div>
        </section>

        {/* INSTAGRAM REELS GRID (3D cards) */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] to-vastu-parchment">
          <div className="container mx-auto px-4">
            <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-nidra-indigo mb-6">
              {bi('Ritual Reels – Sacred Demonstrations', 'अनुष्ठान रील — पवित्र प्रदर्शन')}
            </motion.h2>
            <p className="text-center text-nidra-indigo/60 mb-16 max-w-2xl mx-auto">
              {bi('Witness the power of authentic Vedic rituals performed live', 'प्रामाणिक वैदिक अनुष्ठानों की शक्ति का प्रत्यक्ष साक्षी बनें')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ritualsReels.map((reel, idx) => (
                <ReelCard key={idx} title={reel.title} titleHi={reel.titleHi} reelUrl={reel.url} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://www.instagram.com/vedicurja/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                {bi('Follow for More on Instagram →', 'और भी देखने के लिए Instagram पर फॉलो करें →')}
              </a>
            </div>
          </div>
        </section>

        {/* YOUTUBE VIDEOS SECTION (Ritual tutorials) */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-8">
              {bi('Ritual Tutorials & Guides', 'अनुष्ठान ट्यूटोरियल एवं गाइड')}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <YouTubeEmbed videoId="GdNr3bcUFdw" title="Vedic Ritual Guide 1" />
              <YouTubeEmbed videoId="q9UiVJamQpg" title="Vedic Ritual Guide 2" />
            </div>
            <div className="text-center mt-10">
              <a href="https://www.youtube.com/@vedicurja1589?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-prakash-gold text-nidra-indigo rounded-full font-semibold hover:bg-prakash-gold/10 transition-colors"
              >
                {bi('Subscribe for More Videos →', 'और वीडियो के लिए सब्सक्राइब करें →')}
              </a>
            </div>
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Experience the Transformative Power of Vedic Rituals', 'वैदिक अनुष्ठानों की परिवर्तनकारी शक्ति का अनुभव करें')}</h2>
            <p className="text-[var(--color-hero-fg)]/70 text-lg max-w-2xl mx-auto mb-8">
              {bi('Book a personal ritual with AstroVastu Expert K.K. Nagaich – 10M+ views, 107K+ followers.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच के साथ व्यक्तिगत अनुष्ठान बुक करें — 1 करोड़+ व्यूज़, 1.07 लाख+ फॉलोअर्स।')}
            </p>
            <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
              {bi('Schedule Your Ritual Session →', 'अपना अनुष्ठान सत्र शेड्यूल करें →')}
            </Link>
          </div>
        </section>
      
      <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
