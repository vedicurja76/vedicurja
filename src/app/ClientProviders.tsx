"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/features/shared/contexts/LanguageContext";
import LenisSmoothScroll from "@/features/shared/components/global/LenisSmoothScroll";
import PageTransition from "@/features/shared/components/global/PageTransition";
import { GlobalSoundProvider } from "@/features/shared/components/global/GlobalSoundProvider";
import AnimatedFavicon from "@/features/shared/components/global/AnimatedFavicon";
import ScrollProgress from "@/features/shared/components/global/ScrollProgress";
import Footer from "@/features/shared/components/Footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <GlobalSoundProvider>
          <ScrollProgress />
          <LenisSmoothScroll>
            <PageTransition>
              <div className="vedic-ambient-bg" aria-hidden="true" />
              <AnimatedFavicon />
              {children}
            </PageTransition>
          </LenisSmoothScroll>
          <Footer />
        </GlobalSoundProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
