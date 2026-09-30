'use client';
import { useSound } from '@/features/shared/hooks/useSound';
import { useBi } from '@/lib/i18n/Bilingual';

export function SoundController() {
  const bi = useBi();
  const { isPlaying, isMuted, toggleAmbient, toggleMute } = useSound();

  return (
    <div className="om-sound-widget">
      <div className="flex flex-col items-center group/he select-none">
        <div className="relative z-0 h-16 -mb-2 transition-all duration-200 group-hover/he:h-0">
          <div className={`w-16 h-16 rounded-full border-4 border-prakash-gold flex items-center justify-center ${isPlaying && !isMuted ? 'animate-spin-slow' : ''}`}>
            <span className="text-2xl text-prakash-gold">ॐ</span>
          </div>
        </div>
        <div className="z-30 flex flex-col w-20 h-10 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-md group-hover/he:h-24 group-hover/he:w-48 rounded-2xl shadow-prakash-gold/20">
          <div className="flex flex-row items-center justify-center h-full gap-2">
            <button 
              onClick={toggleAmbient} 
              className="w-8 h-8 rounded-full bg-prakash-gold/20 flex items-center justify-center hover:bg-prakash-gold/40 transition"
              title={bi(isPlaying ? 'Pause ambient' : 'Play ambient', isPlaying ? 'एम्बिएंट रोकें' : 'एम्बिएंट चलाएँ')}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); toggleMute(); }} 
              onContextMenu={(e) => { e.preventDefault(); toggleMute(); }}
              className="w-8 h-8 rounded-full bg-prakash-gold/20 flex items-center justify-center hover:bg-prakash-gold/40 transition"
              title={bi(isMuted ? 'Unmute' : 'Mute (right-click)', isMuted ? 'आवाज़ चालू करें' : 'म्यूट (राइट-क्लिक)')}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SoundController;
