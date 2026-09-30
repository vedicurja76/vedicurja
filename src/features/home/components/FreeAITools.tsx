'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FreeToolCard3D } from '@/features/tools/shared/components/FreeToolCard3D';
import KundaliLuxurySVG from '@/features/tools/shared/components/KundaliLuxurySVG';
import HoroscopeLuxurySVG from '@/features/tools/shared/components/HoroscopeLuxurySVG';
import NameSuggestionLuxurySVG from '@/features/tools/shared/components/NameSuggestionLuxurySVG';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { useBi } from '@/lib/i18n/Bilingual';

export function FreeAITools() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const toolIcons = [
    { key: 'ai_astrology', icon: <KundaliLuxurySVG />, href: '/free-tools/ai-astrology', color: '#22D3EE' },
    { key: 'daily_horoscope', icon: <HoroscopeLuxurySVG />, href: '/free-tools/daily-horoscope', color: '#7B2FBE' },
    { key: 'name_suggestion', icon: <NameSuggestionLuxurySVG />, href: '/free-tools/name-suggestion', color: '#E8B960' },
  ];

  const astroCard = { id: 'astro', tool_key: 'ai_astrology', title: 'Free AI Astrology & Kundli', titleHi: 'निःशुल्क AI ज्योतिष व कुंडली', description: 'Instant Vedic rashi, numerology & AI reading', descriptionHi: 'तत्काल वैदिक राशि, अंकशास्त्र व AI पठन' };

  const { items } = useRealtimeContent<any>('free_tools', 'order_index');
  const dbTools = items.length ? items.filter((t: any) => t.is_published) : [
    { id: '2', tool_key: 'daily_horoscope', title: 'Daily Horoscope', titleHi: 'दैनिक राशिफल', description: 'Your 12‑Rashi forecast updated every morning', descriptionHi: 'प्रतिदिन सुबह अपडेट होने वाली आपकी 12 राशियों की भविष्यवाणी' },
    { id: '3', tool_key: 'name_suggestion', title: 'Name Suggestion', titleHi: 'नाम सुझाव', description: 'Auspicious syllables based on 27 Nakshatras', descriptionHi: '27 नक्षत्रों पर आधारित शुक्षाक्षर' },
  ];
  const tools = [astroCard, ...dbTools];

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-24 md:py-32 bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-primary)]"
    >
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center font-serif text-4xl md:text-5xl text-nidra-indigo mb-4">
          {bi('Begin Your Journey Free', 'निःशुल्क अपनी यात्रा आरंभ करें')}
        </motion.h2>
        <p className="text-center text-nidra-indigo/60 max-w-2xl mx-auto mb-16">
          {bi('Experience authentic Vedic AI – no signup required', 'प्रामाणिक वैदिक AI का अनुभव करें – बिना साइनअप के')}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {tools.map((tool: any) => {
            const iconData = toolIcons.find(i => i.key === tool.tool_key);
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-sm"
              >
                <FreeToolCard3D
                  name={tool.titleHi ? bi(tool.title, tool.titleHi) : tool.title}
                  description={tool.descriptionHi ? bi(tool.description, tool.descriptionHi) : tool.description}
                  icon={iconData?.icon || '🔮'}
                  href={iconData?.href || `/free-tools/${tool.tool_key}`}
                  color={iconData?.color || '#FF9933'}
                />
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-sm font-medium text-nidra-indigo/70">★ 4.9</span>
                  <span className="text-sm text-nidra-indigo/50">•</span>
                  <span className="text-sm text-nidra-indigo/70">{bi('2.5k+ reports', '2.5k+ रिपोर्ट')}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
export default FreeAITools;
