'use client';
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  once?: boolean;
  margin?: string;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside' | 'span' | 'figure';
  style?: CSSProperties;
}

const directionMap: Record<RevealProps['direction'] & string, string> = {
  up: 'translate3d(0, var(--rv-y, 24px), 0)',
  down: 'translate3d(0, calc(var(--rv-y, 24px) * -1), 0)',
  left: 'translate3d(var(--rv-y, 24px), 0, 0)',
  right: 'translate3d(calc(var(--rv-y, 24px) * -1), 0, 0)',
  fade: 'translate3d(0, 0, 0)',
};

export default function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 600,
  direction = 'up',
  once = true,
  margin = '-40px',
  className = '',
  as: Tag = 'div',
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: margin, threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, margin]);

  const motionStyle: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'translate3d(0,0,0)' : directionMap[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: shown ? 'auto' : 'opacity, transform',
    ['--rv-y' as string]: `${y}px`,
    ...style,
  };

  const baseProps = { className, style: motionStyle };

  if (Tag === 'section') return <section {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</section>;
  if (Tag === 'article') return <article {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</article>;
  if (Tag === 'header') return <header {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</header>;
  if (Tag === 'footer') return <footer {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</footer>;
  if (Tag === 'main') return <main {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</main>;
  if (Tag === 'aside') return <aside {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</aside>;
  if (Tag === 'span') return <span {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</span>;
  if (Tag === 'figure') return <figure {...baseProps} ref={ref as React.Ref<HTMLElement>}>{children}</figure>;
  return <div {...baseProps} ref={ref}>{children}</div>;
}
