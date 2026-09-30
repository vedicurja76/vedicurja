'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AtomicLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Force minimum 3.5 seconds display
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0000]/95 backdrop-blur-xl"
        >
          <div className="loader">
            <div className="nucleus" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
