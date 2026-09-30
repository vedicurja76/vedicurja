'use client';
import { motion } from 'framer-motion';
import { useBi } from '@/lib/i18n/Bilingual';

const platforms = [
  { name: 'Instagram', handle: '@vedicurja', href: 'https://www.instagram.com/vedicurja/', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.376.13 3.934.427 2.684 1.677 1.434 2.927 1.137 4.37 1.08 6.045.02 7.325 0 7.733 0 12s.02 4.675.08 5.955c.057 1.675.354 3.118 1.604 4.368 1.25 1.25 2.693 1.547 4.368 1.604C7.325 23.98 7.733 24 12 24s4.675-.02 5.955-.08c1.675-.057 3.118-.354 4.368-1.604 1.25-1.25 1.547-2.693 1.604-4.368.06-1.28.08-1.688.08-5.955s-.02-4.675-.08-5.955c-.057-1.675-.354-3.118-1.604-4.368C20.073.427 18.63.13 16.955.08 15.675.02 15.267 0 12 0z"/><circle cx="12" cy="12" r="4" fill="white"/></svg>
  )},
  { name: 'Facebook', handle: 'AstroVastu Expert', href: 'https://www.facebook.com/krishna.nagaich.7/', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { name: 'YouTube', handle: '@vedicurja1589', href: 'https://www.youtube.com/@vedicurja1589', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
];

export default function SocialMediaFeed() {
  const bi = useBi();
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4">{bi('Vedic Connect', 'वैदिक कनेक्ट')}</h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">{bi('Join thousands of seekers on their journey with AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट के साथ अपनी यात्रा पर हज़ारों साधकों से जुड़ें')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((p) => (
            <motion.a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-[var(--color-bg-primary)] to-[var(--color-bg-elevated)] border border-prakash-gold/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-prakash-gold/20 to-sacred-saffron/20 flex items-center justify-center text-prakash-gold">{p.icon}</div>
              <h3 className="font-serif text-xl text-nidra-indigo">{p.name}</h3>
              <p className="text-sm text-nidra-indigo/60">{p.handle}</p>
              <span className="text-prakash-gold text-sm font-medium">{bi('Follow →', 'फॉलो करें →')}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
