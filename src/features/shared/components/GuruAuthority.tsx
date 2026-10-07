'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/trust/mahindra.webp', alt: 'Mahindra' },
  { src: '/images/trust/tcs.webp', alt: 'TCS' },
  { src: '/images/trust/adani.webp', alt: 'Adani' },
  { src: '/images/trust/reliance.webp', alt: 'Reliance' },
  { src: '/images/trust/toi.webp', alt: 'Times of India' },
  { src: '/images/trust/bajaj.webp', alt: 'Bajaj' },
];

export default function GuruAuthority() {
  return (
    <section className="py-12 sm:py-16 bg-[var(--color-bg-elevated)] border-b border-prakash-gold/10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-8">
          Trusted by India's Most Respected Brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
