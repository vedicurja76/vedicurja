'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LOADER_ROUTES = ['/services', '/free-tools'];
const DURATION = 2500; // 2.5 seconds

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (LOADER_ROUTES.includes(pathname)) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), DURATION);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0000]/95 backdrop-blur-xl"
        >
          <div className="relative w-[280px] h-[280px] flex items-center justify-center">
            <div id="planetTrail1" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div id="planetTrail2" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div id="planetTrail3" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div className="planets relative w-[100px] h-[100px] flex items-center justify-center">
              <div id="planet" className="absolute w-[10px] h-[10px] bg-white rounded-full" />
              <div id="star" className="absolute w-[50px] h-[50px] bg-[#FFAA00] rounded-full" />
              <div id="starShadow" className="absolute w-[50px] h-[20px] bg-[#FFAA00] rounded-full filter blur-[5px] opacity-30" />
              <div id="blackHoleDisk2" className="absolute w-[70px] h-[70px] rounded-full" />
              <div id="blackHole" className="absolute w-[50px] h-[50px] bg-black rounded-full outline outline-4 outline-[#FFAA00]" />
              <div id="blackHoleDisk1" className="absolute w-[68px] h-[68px] rounded-full" />
            </div>
          </div>
          <div className="absolute bottom-20 text-center">
            <span className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
              AstroVastu Expert
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
