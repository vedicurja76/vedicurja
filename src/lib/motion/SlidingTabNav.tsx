'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { springs } from './springPresets';

interface Tab {
  id: string;
  label: string;
}

interface SlidingTabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function SlidingTabNav({ tabs, activeTab, onTabChange, className = '' }: SlidingTabNavProps) {
  return (
    <div className={`relative inline-flex items-center gap-1 p-1.5 rounded-full glass-card !p-1 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 ${
            activeTab === tab.id
              ? 'text-[var(--color-hero-fg)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-accent-saffron)] to-[var(--color-accent-red)]"
              transition={springs.snappy}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
