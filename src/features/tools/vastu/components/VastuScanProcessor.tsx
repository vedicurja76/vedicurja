'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

interface VastuZone { name: string; element: string; score: number; recommendation: string; }
interface Props { onAnalysisComplete: (zones: VastuZone[]) => void; }

const vastuZones = [
  { name: 'North', element: 'Water', idealScore: 85 }, { name: 'North‑East', element: 'Water', idealScore: 95 }, { name: 'East', element: 'Air', idealScore: 80 }, { name: 'South‑East', element: 'Fire', idealScore: 90 },
  { name: 'South', element: 'Earth', idealScore: 60 },
];
const elementRecommendations: Record<string, Record<string, string>> = {
  Water: { good: 'Excellent for meditation.', bad: 'Avoid fire elements.' },
  Fire: { good: 'Ideal for kitchen.', bad: 'Avoid water sources.' },
  Earth: { good: 'Perfect for master bedroom.', bad: 'Keep grounded.' },
  Air: { good: 'Great for living room.', bad: 'Avoid heavy structures.' },
};

export default function VastuScanProcessor({ onAnalysisComplete }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [orientation, setOrientation] = useState('North');
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles: File[]) => { const file = acceptedFiles[0]; const reader = new FileReader(); reader.onload = () => setImage(reader.result as string); reader.readAsDataURL(file); }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  const analyzeVastu = () => {
    if (!image) return; setLoading(true);
    const seed = orientation.charCodeAt(0) + (image.length % 100);
    const analyzed = vastuZones.map(zone => { const variance = Math.sin(seed * zone.name.length) * 15; const score = Math.min(98, Math.max(35, Math.round(zone.idealScore + variance))); const isGood = score >= 70; return { ...zone, score, recommendation: isGood ? elementRecommendations[zone.element].good : elementRecommendations[zone.element].bad }; });
    onAnalysisComplete(analyzed); setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div {...getRootProps()} className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition ${isDragActive ? 'border-prakash-gold bg-prakash-gold/10' : 'border-prakash-gold/30'}`}><input {...getInputProps()} /><p className="text-nidra-indigo/60">{isDragActive ? 'Drop your floor plan here' : 'Drag & drop a floor plan, or click to select'}</p></div>
      {image && (<div><img src={image} alt="Floor plan" className="w-full rounded-xl shadow-lg" /><select value={orientation} onChange={e => setOrientation(e.target.value)} className="mt-4 p-3 border border-prakash-gold/30 rounded-xl bg-[var(--color-bg-glass)] w-full">{['North','South','East','West','North‑East','North‑West','South‑East','South‑West'].map(d=><option key={d}>{d}</option>)}</select><button onClick={analyzeVastu} disabled={loading} className="mt-4 w-full luxury-button py-4 disabled:opacity-50">{loading ? 'Analyzing...' : 'Analyze Vastu (Free)'}</button></div>)}
    </div>
  );
}
