'use client';
// Static community badge – no animations for faster loading
import { useBi } from '@/lib/i18n/Bilingual';
export function CommunityCounter3D() {
  const bi = useBi();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-[var(--color-bg-glass)] backdrop-blur-md px-6 py-3 rounded-full border border-prakash-gold/40 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="text-prakash-gold text-xl">✦</span>
          <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-hero-fg)] drop-shadow-2xl">107k+</span>
          <span className="text-[var(--color-hero-fg)]/80 text-base uppercase tracking-wider">{bi('Community', 'समुदाय')}</span>
          <span className="text-prakash-gold text-xl">✦</span>
        </div>
      </div>
    </div>
  );
}
export default CommunityCounter3D;
