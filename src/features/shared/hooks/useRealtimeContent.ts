'use client';
import { useState, useEffect, useRef } from 'react';

const staticData: Record<string, any[]> = {
  free_tools: [
    { id: '2', tool_key: 'daily_horoscope', title: 'Daily Horoscope', description: 'Your 12‑Rashi forecast, updated every morning', icon: '✦', color: '#7B2FBE', icon_type: 'svg', is_published: true, order_index: 2 },
    { id: '3', tool_key: 'name_suggestion', title: 'Name Suggestion', description: 'Auspicious syllables based on 27 Nakshatras', icon: '✨', color: '#E8B960', is_published: true, order_index: 3 },
  ],
  services: [
    { id: '1', title: 'Residential Vastu', description: 'Harmonise your home', benefits: ['Better Sleep','Family Harmony','Financial Flow'], icon: '🏠', color_gradient: '', is_published: true, order_index: 1 },
    { id: '2', title: 'Commercial Vastu', description: 'Align your business', benefits: ['Revenue Growth','Team Cohesion','Client Retention'], icon: '🏢', color_gradient: '', is_published: true, order_index: 2 },
    { id: '3', title: 'Land & Plot Selection', description: 'Auspicious foundations', benefits: ['Ideal Orientation','Soil Analysis','Future Prospects'], icon: '🌍', color_gradient: '', is_published: true, order_index: 3 },
  ],
  blog_posts: [
    { id: '1', title: 'The Science of Vastu', slug: 'science-of-vastu', excerpt: 'Ancient principles meet modern science.', category: 'Vastu Science', read_time: 5, author_name: 'AstroVastu Expert KK Nagaich', is_published: true, featured_image: '/images/blog/vastu-science.svg', content: '' },
    { id: '2', title: 'Numerology for Beginners', slug: 'numerology-beginners', excerpt: 'Secrets of numbers.', category: 'Numerology', read_time: 4, author_name: 'AstroVastu Expert KK Nagaich', is_published: true, content: '' },
    { id: '3', title: 'Remedies Without Demolition', slug: 'remedies-without-demolition', excerpt: 'Simple corrections.', category: 'Remedies', read_time: 6, author_name: 'AstroVastu Expert KK Nagaich', is_published: true, content: '' },
  ],
  testimonials: [
    { id: '1', client_name: 'Priya Malhotra', location: 'London, UK', content: 'Acharya\'s guidance transformed our home.', rating: 5, verified: true, is_published: true, order_index: 1 },
    { id: '2', client_name: 'James Whitmore', location: 'New York, USA', content: 'Revenue up 40% in months.', rating: 5, verified: true, is_published: true, order_index: 2 },
    { id: '3', client_name: 'Ananya Sharma', location: 'Dubai, UAE', content: 'My health improved dramatically.', rating: 5, verified: true, is_published: true, order_index: 3 },
  ],
  site_settings: [
    { key: 'footer_about', value: 'AstroVastu Expert – Ancient Wisdom. Modern Precision.' },
    { key: 'footer_copyright', value: '© 2026 AstroVastu Expert. All rights reserved.' },
  ],
};

export function useRealtimeContent<T>(table: string, orderBy: string = 'created_at', ascending: boolean = false) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        const data = staticData[table] || [];
        setItems(data as T[]);
        setLoading(false);
      }
    }, 500);
    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
  }, [table]);

  const refetch = () => {};
  return { items, loading, refetch };
}
