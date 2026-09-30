'use client';
import Link from 'next/link';
export function LearnVastuTeaser() {
  return (
    <section className="py-24 bg-[var(--color-bg-elevated)] text-center">
      <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mb-4">Master the Sacred Science of Vastu</h2>
      <p className="text-nidra-indigo/60 max-w-2xl mx-auto mb-8">Online courses taught by AstroVastu Expert KK Nagaich.</p>
      <Link href="/learn-vastu" className="luxury-button">Browse Courses</Link>
    </section>
  );
}
export default LearnVastuTeaser;
