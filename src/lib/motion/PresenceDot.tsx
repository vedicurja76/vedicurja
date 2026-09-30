'use client';

export function PresenceDot({ count, label = 'online' }: { count?: number; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-presence-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      {count !== undefined && (
        <span className="text-xs text-[var(--color-text-muted)] font-medium">
          {count} {label}
        </span>
      )}
    </div>
  );
}
