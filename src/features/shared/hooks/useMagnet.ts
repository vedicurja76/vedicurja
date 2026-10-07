'use client';
import { useRef, useEffect, useState, type CSSProperties } from 'react';

interface MagnetOptions {
  /** Pull distance radius in pixels */
  radius?: number;
  /** Translation strength (0-1) */
  strength?: number;
  /** Disable on touch devices */
  respectTouch?: boolean;
}

/**
 * Premium micro-interaction: button/element subtly follows the cursor on hover.
 * Pure CSS transform — no re-renders, no animation library.
 * Skips on touch devices + respects prefers-reduced-motion.
 */
export function useMagnet<T extends HTMLElement = HTMLDivElement>(
  opts: MagnetOptions = {}
): [React.Ref<T>, CSSProperties] {
  const { radius = 80, strength = 0.25, respectTouch = true } = opts;
  const ref = useRef<T | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (reduceMotion || (respectTouch && isTouch)) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, [respectTouch]);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) return;
      const k = (1 - dist / radius) * strength;
      tx = dx * k;
      ty = dy * k;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      el.style.transform = '';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, radius, strength]);

  const style: CSSProperties = enabled
    ? { willChange: 'transform', transition: 'transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)' }
    : {};
  return [ref, style];
}