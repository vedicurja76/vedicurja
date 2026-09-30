'use client';
import TestimonialCard from '@/features/testimonials/components/TestimonialCard';
import { googleReviews } from '@/data/googleReviews';

export function TestimonialsSlider() {
  // Use first 8 reviews for slider
  const displayReviews = googleReviews.slice(0, 8);

  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4">Words of Gratitude</h2>
          <p className="font-sans text-base sm:text-lg text-nidra-indigo/60 max-w-2xl mx-auto">
            Hear from those who have experienced the transformation
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayReviews.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSlider;
