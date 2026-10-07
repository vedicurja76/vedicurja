'use client';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';
import Reveal from '@/features/shared/components/ui/Reveal';
import { useMagnet } from '@/features/shared/hooks/useMagnet';

export default function VirtualConsultCTA() {
  const bi = useBi();
  const [ctaRef, ctaStyle] = useMagnet<HTMLAnchorElement>({ radius: 110, strength: 0.22 });
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal duration={700}>
            <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
              <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                  {bi("Can't Visit In Person?", 'क्या आप व्यक्तिगत रूप से नहीं आ सकते?')}
                </h2>
                <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8">
                  {bi('Book a secure virtual consultation with AstroVastu Expert KK Nagaich — screen sharing, real‑time analysis, and personalised remedies from anywhere in the world.', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच के साथ एक सुरक्षित वर्चुअल परामर्श बुक करें — स्क्रीन शेयरिंग, वास्तविक समय विश्लेषण, और दुनिया के कहीं से भी व्यक्तिगत उपचार।')}
                </p>
                <Link
                  href="/bookings"
                  ref={ctaRef}
                  style={ctaStyle}
                  className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg"
                >
                  {bi('Book Virtual Consultation →', 'वर्चुअल परामर्श बुक करें →')}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @keyframes heroLoop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
