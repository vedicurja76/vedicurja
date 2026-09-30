export const springs = {
  gentle: { type: 'spring' as const, stiffness: 100, damping: 20 },
  snappy: { type: 'spring' as const, stiffness: 300, damping: 25 },
  bouncy: { type: 'spring' as const, stiffness: 200, damping: 12 },
  soft: { type: 'spring' as const, stiffness: 80, damping: 18 },
  card: { type: 'spring' as const, stiffness: 260, damping: 22 },
} as const;

export const easings = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  outExpo: [0.16, 1, 0.3, 1] as const,
} as const;
