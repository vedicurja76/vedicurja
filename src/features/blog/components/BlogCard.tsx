'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/admin';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/insights/${post.slug}`} className="block h-full">
        <div className="relative h-full bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl overflow-hidden border border-prakash-gold/20 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
          {/* Category badge – elegant gold gradient */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-prakash-gold/90 to-sacred-saffron/90 text-white shadow-md">
              {post.category}
            </span>
          </div>

          {/* Image area */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--color-hero-2)]/5 to-prakash-gold/5">
            {post.featured_image ? (
              <img 
                src={post.featured_image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-prakash-gold/30 flex items-center justify-center">
                  <span className="text-3xl font-serif text-prakash-gold/50">ॐ</span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-2 text-xs text-nidra-indigo/50 mb-3">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.read_time} min read
              </span>
              <span className="w-1 h-1 rounded-full bg-prakash-gold/40" />
              <span>By {post.author_name || 'AstroVastu Expert KK Nagaich'}</span>
            </div>

            <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2 line-clamp-2 group-hover:text-prakash-gold transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-nidra-indigo/60 line-clamp-3 mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center text-prakash-gold text-sm font-medium">
              Read More
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
