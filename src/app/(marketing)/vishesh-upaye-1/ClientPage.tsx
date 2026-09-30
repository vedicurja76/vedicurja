'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/features/shared/components/Header';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

/* ------------------------------------------------------------------ */
/*  Video URLs & config                                               */
/* ------------------------------------------------------------------ */
const PRIMARY_URL =
  'https://klisyllxqmgjaybdkhym.supabase.co/storage/v1/object/public/vedicvastuurja/vedicvastuurja.mp4';
const FALLBACK_URL =
  'https://github.com/nikhilsinghstudy999-wq/vedicurjavastu-dome/releases/download/v1/vedicvastuurja.mp4';

const MAX_RETRIES = 3;           // primary attempts
const MAX_FALLBACK_RETRIES = 2;  // fallback attempts
const RETRY_BASE_DELAY_MS = 1000;

/* ------------------------------------------------------------------ */
/*  Retry helper with exponential backoff + jitter                     */
/* ------------------------------------------------------------------ */
function retryWithBackoff(
  attempt: number,
  fn: () => void,
  baseDelay = RETRY_BASE_DELAY_MS
) {
  const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000;
  setTimeout(fn, delay);
}

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */
export default function VisheshUpayePage() {
  const bi = useBi();
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [usingFallback, setUsingFallback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect if the video can play (to remove loading spinner)
  const handleCanPlay = useCallback(() => {
    setLoading(false);
    setCanPlay(true);
  }, []);

  const handleError = useCallback(() => {
    if (!videoRef.current) return;
    const maxRetries = usingFallback ? MAX_FALLBACK_RETRIES : MAX_RETRIES;
    const nextRetry = retryCount + 1;

    if (nextRetry <= maxRetries) {
      setRetryCount(nextRetry);
      setError(false);
      retryWithBackoff(nextRetry, () => {
        if (videoRef.current) videoRef.current.load();
      });
    } else if (!usingFallback) {
      // Switch to fallback URL
      console.warn('[VidPage] Primary exhausted, switching to fallback.');
      setUsingFallback(true);
      setRetryCount(0);
      const source = videoRef.current.querySelector('source');
      if (source) {
        source.src = FALLBACK_URL;
        videoRef.current.load();
      }
    } else {
      // Both failed
      setError(true);
      setLoading(false);
    }
  }, [retryCount, usingFallback]);

  // Manual retry (user clicks button)
  const manualRetry = useCallback(() => {
    setError(false);
    setRetryCount(0);
    setUsingFallback(false);
    setLoading(true);
    setCanPlay(false);
    if (videoRef.current) {
      const source = videoRef.current.querySelector('source');
      if (source) source.src = PRIMARY_URL;
      videoRef.current.load();
    }
  }, []);

  // Start loading indicator as soon as component mounts
  useEffect(() => {
    // If video already loaded (e.g. from cache), set loading false
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setLoading(false);
      setCanPlay(true);
    }
  }, []);

  return (
    <>
      {/* ─── Preload & Preconnect hints ───────────────────── */}
      <Head>
        <link rel="preconnect" href="https://klisyllxqmgjaybdkhym.supabase.co" />
        <link rel="dns-prefetch" href="https://klisyllxqmgjaybdkhym.supabase.co" />
        <link
          rel="preload"
          href={PRIMARY_URL}
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
        {/* Also hint the fallback for later use */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="dns-prefetch" href="https://github.com" />
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-elevated)] to-[var(--color-bg-primary)]">
        {/* ═══════ Hero ═══════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-accent-indigo)] to-[var(--color-hero-1)] py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,185,96,0.15),transparent_70%)]" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-accent-gold)]/20 rounded-full mb-6 border border-[var(--color-accent-gold)]/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--color-accent-gold)] rounded-full animate-pulse" />
              <span className="text-[var(--color-accent-gold)] font-semibold tracking-[0.2em] uppercase text-sm">
                {bi('Special Remedies', 'विशेष उपाय')}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-hero-fg)] font-bold mb-6 leading-tight">
              {bi('Vishesh Upaye-1', 'विशेष उपाय-1')}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-2xl mx-auto mb-8">
              {bi('Powerful remedies rooted in ancient Vedic wisdom', 'प्राचीन वैदिक ज्ञान पर आधारित शक्तिशाली उपाय')}
            </p>
            <div className="flex justify-center gap-3 text-sm text-[var(--color-hero-fg)]/50">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {bi('Authentic Method', 'प्रमाणिक विधि')}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {bi('Instant Impact', 'तुरंत प्रभाव')}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                {bi('Confidential', 'गोपनीय')}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
        </section>

        {/* ═══════ Video Player ═══════ */}
        <section className="container mx-auto px-4 -mt-8 relative z-10 max-w-4xl">
          <div className="bg-[var(--color-bg-elevated)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--color-accent-gold)]/20 p-1">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black">
              {/* Loading spinner */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[var(--color-accent-gold)] border-t-transparent rounded-full animate-spin" />
                    <p className="text-white/80 text-sm">{bi('Loading video…', 'वीडियो लोड हो रहा है...')}</p>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${canPlay ? 'opacity-100' : 'opacity-0'}`}
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="auto"
                playsInline
                onCanPlay={handleCanPlay}
                onError={handleError}
                crossOrigin="anonymous"
              >
                <source src={PRIMARY_URL} type="video/mp4" />
                {bi('Your browser does not support the video tag.', 'आपका ब्राउज़र वीडियो टैग सपोर्ट नहीं करता।')}
              </video>

              {/* Error overlay */}
              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 text-white p-6 z-20">
                  <svg className="w-12 h-12 mb-4 text-[var(--color-accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-lg mb-4">{bi('Video could not be loaded', 'वीडियो लोड नहीं हो सका')}</p>
                  <button
                    onClick={manualRetry}
                    className="px-6 py-2 bg-[var(--color-accent-gold)] text-black font-semibold rounded-full hover:bg-[#d4a84c] transition"
                  >
                    {bi('Retry', 'पुनः प्रयास करें')}
                  </button>
                </div>
              )}

              {/* Retry indicator (small) */}
              {retryCount > 0 && !error && (
                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-20">
                  {usingFallback ? bi('Fallback', 'फ़ॉलबैक') : bi('Primary', 'प्राथमिक')} • {bi('Attempt', 'प्रयास')} {retryCount}/{usingFallback ? MAX_FALLBACK_RETRIES : MAX_RETRIES}
                </div>
              )}
            </div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-400">
            {bi('👆 The complete method is demonstrated in the video above', '👆 उपरोक्त वीडियो में पूर्ण विधि दिखाई गई है')}
          </p>
        </section>

        {/* ═══════ Benefits ═══════ */}
        <section className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Benefits', titleHi: 'लाभ', desc: 'Happiness, peace and prosperity in life', descHi: 'जीवन में सुख, शांति और समृद्धि का आगमन' },
              { title: 'Method', titleHi: 'विधि', desc: 'Simple yet effective Vedic process', descHi: 'सरल एवं प्रभावी वैदिक प्रक्रिया' },
              { title: 'Timing', titleHi: 'समय', desc: 'Quick results with regular practice', descHi: 'नियमित अभ्यास से शीघ्र परिणाम' }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--color-bg-elevated)] p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[var(--color-accent-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--color-accent-gold)] text-xl font-serif">{i+1}</span>
                </div>
                <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">{bi(item.title, item.titleHi)}</h3>
                <p className="text-gray-500">{bi(item.desc, item.descHi)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ CTA ═══════ */}
        <section className="container mx-auto px-4 py-16 max-w-3xl text-center">
          <div className="bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-primary)] rounded-3xl p-10 border border-[var(--color-accent-gold)]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-gold)]/5 rounded-bl-full" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-4 relative">
              {bi('Contact Us for the Complete Solution', 'संपूर्ण समाधान हेतु संपर्क करें')}
            </h2>
            <p className="text-gray-500 mb-8 relative">
              {bi('Our experts will resolve your personal concern', 'हमारे विशेषज्ञ आपकी व्यक्तिगत समस्या का समाधान प्रदान करेंगे')}
            </p>
            <Link
              href="/bookings"
              className="relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-saffron)] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg group"
            >
              {bi('Book a Consultation', 'परामर्श बुक करें')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
