'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '@/features/blog/components/BlogCard';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { useBi } from '@/lib/i18n/Bilingual';

export default function SacredArchives() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const { items: posts } = useRealtimeContent<any>('blog_posts', 'published_at', false);
  const latestPosts = posts.filter((p: any) => p.is_published).slice(0, 3);

  return (
    <motion.section ref={ref} style={isMounted ? { y } : undefined} className="py-24 bg-gradient-to-b from-[var(--color-bg-primary)] to-vastu-parchment">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">{bi('From the Sacred Archives', 'पवित्र संग्रह से')}</h2>
            <p className="text-nidra-indigo/60 mt-2">{bi('Wisdom from the Vedic tradition', 'वैदिक परंपरा से ज्ञान')}</p>
          </div>
          <Link href="/insights" className="text-prakash-gold hover:underline font-medium">{bi('View all →', 'सभी देखें →')}</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post: any, i: number) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
