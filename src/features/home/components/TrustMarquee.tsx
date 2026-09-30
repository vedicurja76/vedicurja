'use client';

export function TrustMarquee() {
  const brands = [
    { name: 'Mahindra', logo: '/images/trust/mahindra.webp' },
    { name: 'TCS', logo: '/images/trust/tcs.webp' },
    { name: 'Adani', logo: '/images/trust/adani.webp' },
    { name: 'Times of India', logo: '/images/trust/toi.webp' },
    { name: 'P&G', logo: '/images/trust/pg.webp' },
    { name: 'Reliance', logo: '/images/trust/reliance.webp' },
    { name: 'Haldiram', logo: '/images/trust/haldiram.webp' },
    { name: 'Bajaj', logo: '/images/trust/bajaj.webp' },
  ];

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
      {/* Slow looping gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-hero-2)]/5 via-prakash-gold/10 to-sacred-saffron/5 bg-[length:400%_400%] animate-[trustGradient_12s_ease-in-out_infinite] rounded-[60px] mx-4 sm:mx-8" />


      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-nidra-indigo">
            Vastu Partners of{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
              India's Leading Brands
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-nidra-indigo/60">
            Guiding their spaces towards prosperity and harmony
          </p>
        </div>

        {/* Logo Grid – Images only, no text labels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="trust-card rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center"
              style={{
                animation: `trustFloat ${3 + i * 0.3}s ease-in-out infinite`,
                transformStyle: 'preserve-3d',
                perspective: 800,
              }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
              {/* No text label – strictly image only */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TrustMarquee;
