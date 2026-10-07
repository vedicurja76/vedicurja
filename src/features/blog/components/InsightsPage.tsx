'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import BlogCard from '@/features/blog/components/BlogCard';
import CategoryFilter from '@/features/blog/components/CategoryFilter';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { BlogPost } from '@/types/admin';

export default function InsightsPage() {
  const { items: posts, loading } = useRealtimeContent<BlogPost>('blog_posts');
  const publishedPosts = posts.filter(p => p.is_published);
  const categories = useMemo(() => ['All', ...Array.from(new Set(publishedPosts.map(p => p.category)))], [publishedPosts]);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All' ? publishedPosts : publishedPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* Hero section – simple, elegant */}
        <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-vastu-parchment">
          <div className="container mx-auto px-6 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-sacred-saffron uppercase tracking-[0.3em] text-sm font-semibold"
            >
              Wisdom from the Vedic Tradition
            </motion.span>
            <AnimatedText
              as="h1"
              text="Vastu Shastra & Astrology Guides"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-nidra-indigo mt-4 mb-4"
            />
            <GradientText 
              text="Ancient Knowledge for Modern Living" 
              className="font-serif text-xl sm:text-2xl md:text-3xl block" 
            />
            <p className="text-base text-nidra-indigo/60 max-w-2xl mx-auto mt-4">
              Explore articles on Vastu Shastra, numerology, and Vedic astrology — written by AstroVastu Expert KK Nagaich.
            </p>
          </div>
        </section>

        {/* Category filter – simple, elegant */}
        <section className="py-8 border-b border-prakash-gold/10">
          <div className="container mx-auto px-6">
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />
          </div>
        </section>

        {/* Blog grid – elegant cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filteredPosts.length === 0 ? (
              <p className="text-center text-nidra-indigo/60 py-20">No articles found in this category.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
