'use client';
export default function AuthorityBar() {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] border-b border-prakash-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 items-center text-[var(--color-hero-fg)]">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-1.48 1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.505 4.505 0 019.5 14z"/></svg>
            <div><p className="font-serif text-xl font-bold text-prakash-gold">10M+</p><p className="text-xs uppercase tracking-wider text-[var(--color-hero-fg)]/80">Views</p></div>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <div><p className="font-serif text-xl font-bold text-prakash-gold">107K+</p><p className="text-xs uppercase tracking-wider text-[var(--color-hero-fg)]/80">Followers</p></div>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <div><p className="font-serif text-xl font-bold text-prakash-gold">2L+</p><p className="text-xs uppercase tracking-wider text-[var(--color-hero-fg)]/80">Clients</p></div>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <div><p className="font-serif text-xl font-bold text-prakash-gold">50+</p><p className="text-xs uppercase tracking-wider text-[var(--color-hero-fg)]/80">Countries</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
