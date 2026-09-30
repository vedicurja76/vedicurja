'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* 100% client-side, curated place list — no external geocoding API.
   Keyboard accessible combobox with fuzzy-ish starts/includes matching. */

const INDIAN_CITIES: string[] = [
  'Mumbai', 'Delhi', 'New Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune',
  'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar',
  'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur',
  'Kota', 'Guwahati', 'Chandigarh', 'Thiruvananthapuram', 'Bhubaneswar', 'Dehradun', 'Mysuru', 'Tiruchirappalli',
  'Gurugram', 'Noida', 'Greater Noida', 'Faridkot', 'Amroha', 'Aligarh', 'Moradabad', 'Bareilly', 'Gorakhpur',
  'Ayodhya', 'Mathura', 'Vrindavan', 'Haridwar', 'Rishikesh', 'Ujjain', 'Indore', 'Salem', 'Erode', 'Nellore',
  'Kochi', 'Kozhikode', 'Thrissur', 'Mangaluru', 'Hubballi', 'Belagavi', 'Davangere', 'Sholapur', 'Kolhapur',
  'Thane', 'Navi Mumbai', 'Gandhinagar', 'Rajasthan Jodhpur', 'Siliguri', 'Durgapur', 'Asansol', 'Jamshedpur',
  'Rourkela', 'Berhampur', 'Guntur', 'Warangal', 'Nizamabad', 'Karnal', 'Panipat', 'Sonipat', 'Rohtak', 'Hisar',
  'Bhiwani', 'Jhajjar', 'Muzaffarnagar', 'Saharanpur', 'Rampur', 'Firozabad', 'Mainpuri', 'Etawah', 'Jhansi',
  'Satna', 'Rewa', 'Gulbarga', 'Bidar', 'Hospet', 'Gulmarg', 'Shimla', 'Manali', 'Dharamshala', 'Kullu',
];

const WORLD_CITIES: string[] = [
  'Dubai', 'Abu Dhabi', 'Sharjah', 'Riyadh', 'Jeddah', 'Doha', 'Muscat', 'Kuwait City', 'Manama', 'Singapore',
  'Kuala Lumpur', 'Bangkok', 'London', 'Manchester', 'Toronto', 'Vancouver', 'New York', 'Chicago', 'Houston',
  'San Francisco', 'Sydney', 'Melbourne', 'Auckland', 'Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Stockholm',
  'Rome', 'Madrid', 'Warsaw', 'Moscow', 'Istanbul', 'Cairo', 'Lagos', 'Nairobi', 'Johannesburg', 'Cape Town',
];

const PLACES = Array.from(new Set([...INDIAN_CITIES, ...WORLD_CITIES]));

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function filterPlaces(q: string, limit = 8): string[] {
  const nq = normalize(q);
  if (!nq) return [];
  const starts = PLACES.filter(p => normalize(p).startsWith(nq));
  const contains = PLACES.filter(p => !normalize(p).startsWith(nq) && normalize(p).includes(nq));
  return [...starts, ...contains].slice(0, limit);
}

export default function PlaceAutocomplete({
  value,
  onChange,
  placeholder,
  id,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id?: string;
  label?: string;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => filterPlaces(query), [query]);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const select = (v: string) => {
    setQuery(v);
    onChange(v);
    setOpen(false);
    setActive(-1);
  };

  return (
    <div ref={boxRef} className="relative">
      {label && <label htmlFor={id} className="sr-only">{label}</label>}
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-nidra-indigo/40 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0Z" /><circle cx="12" cy="11" r="3" /></svg>
        <input
          id={id}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}-listbox`}
          aria-autocomplete="list"
          value={query}
          placeholder={placeholder}
          onChange={e => {
            setQuery(e.target.value);
            onChange(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive(i => Math.min(i + 1, results.length - 1)); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
            else if (e.key === 'Enter' && active >= 0 && results[active]) { e.preventDefault(); select(results[active]); }
            else if (e.key === 'Escape') { setOpen(false); setActive(-1); }
          }}
          className="w-full py-3 pl-11 pr-4 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo outline-none transition focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/25 placeholder:text-nidra-indigo/40"
        />
      </div>
      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            id={`${id}-listbox`}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-2xl border border-prakash-gold/25 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(26,42,58,0.25)] py-1.5"
          >
            {results.map((p, i) => {
              const idx = normalize(p).indexOf(normalize(query));
              const before = idx >= 0 ? p.slice(0, idx) : p;
              const hit = idx >= 0 ? p.slice(idx, idx + query.trim().length) : '';
              const after = idx >= 0 ? p.slice(idx + query.trim().length) : '';
              return (
                <li
                  key={p}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={e => { e.preventDefault(); select(p); }}
                  className={`mx-1.5 px-3 py-2 rounded-xl text-sm cursor-pointer flex items-center gap-2 ${i === active ? 'bg-prakash-gold/20 text-nidra-indigo' : 'text-nidra-indigo/80 hover:bg-prakash-gold/10'}`}
                >
                  <span className="text-prakash-gold/70 text-xs">📍</span>
                  <span>{before}<strong className="text-prakash-gold font-bold">{hit}</strong>{after}</span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
