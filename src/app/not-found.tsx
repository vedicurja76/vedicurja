'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';

export default function NotFoundPage() {
  return (
    <>
      <SoundController />
      <Header />
      
        <main className="relative z-10 pt-32 pb-20 min-h-screen bg-vastu-parchment">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-4xl text-center mb-8">404 - Page Not Found</h1><p className="text-center">The page you are looking for does not exist.</p>
          </div>
        </main>
      
    </>
  );
}
