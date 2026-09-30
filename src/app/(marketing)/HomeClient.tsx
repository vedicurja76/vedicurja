'use client';
import { lazy } from 'react';
import { SoundController } from '@/features/shared/components/SoundController';
import Header from '@/features/shared/components/Header';
import { CosmicHero } from '@/features/home/components/CosmicHero';
import InstagramReelsShowcase from '@/features/home/components/InstagramReelsShowcase';
import { AcharyaVow } from '@/features/home/components/AcharyaVow';
import { SacredServices } from '@/features/home/components/SacredServices';
import { FreeAITools } from '@/features/home/components/FreeAITools';
import { VirtualConsultCTA } from '@/features/home/components/VirtualConsultCTA';
import { FinalCTA } from '@/features/home/components/FinalCTA';

const GlobalPresence = lazy(() => import('@/features/home/components/GlobalPresence'));
const SacredArchives = lazy(() => import('@/features/home/components/SacredArchives'));
const SocialMediaFeed = lazy(() => import('@/features/home/components/SocialMediaFeed'));
const SocialCommunityShowcase = lazy(() => import('@/features/home/components/SocialCommunityShowcase'));
const FAQSection = lazy(() => import('@/features/testimonials/components/FAQSection'));

export default function HomeClient() {
  return (
    <>
      <SoundController />
      <Header />

      <main style={{ position: 'relative' }} className="relative bg-vastu-parchment">
        <CosmicHero />
        <InstagramReelsShowcase />
        <AcharyaVow />
        <SacredServices />
        <div id="free-tools"><FreeAITools /></div>
        <VirtualConsultCTA />
        <GlobalPresence />
        <SacredArchives />
        <SocialMediaFeed />
        <SocialCommunityShowcase />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}
