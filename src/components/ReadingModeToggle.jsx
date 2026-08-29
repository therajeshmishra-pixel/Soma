import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReadingModeToggle() {
  const [isReadingMode, setIsReadingMode] = useState(false);
  const location = useLocation();

  // Pages to exclude from Reading Mode button
  const excludedPaths = [
    '/assessment',
    '/corporate/architect',
    '/contact',
    '/admin'
  ];

  const shouldShow = !excludedPaths.some(path => location.pathname.toLowerCase().startsWith(path));

  useEffect(() => {
    if (isReadingMode) {
      document.documentElement.classList.add('soma-reading-mode');
    } else {
      document.documentElement.classList.remove('soma-reading-mode');
    }
    
    // Clean up on unmount
    return () => {
      document.documentElement.classList.remove('soma-reading-mode');
    };
  }, [isReadingMode]);

  if (!shouldShow) {
    if (isReadingMode) setIsReadingMode(false); // Disable if navigating to excluded page
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={() => setIsReadingMode(!isReadingMode)}
        className={`fixed bottom-6 left-6 z-50 p-3.5 md:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isReadingMode 
            ? 'bg-[#F4E3D0] text-[#5e4b38] border border-[#d6c4b0]' 
            : 'bg-white/80 backdrop-blur-md text-stone-500 border border-stone-200/50 hover:bg-white hover:text-stone-800 hover:shadow-[0_8px_30px_rgba(120,113,108,0.12)]'
        }`}
        aria-label="Toggle Reading Mode"
        title="Toggle Reading Mode"
      >
        {isReadingMode ? <X size={22} className="group-hover:scale-110 transition-transform" /> : <BookOpen size={22} className="group-hover:scale-110 transition-transform" />}
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest py-2 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          {isReadingMode ? 'Exit Reading Mode' : 'Reading Mode'}
        </span>
      </motion.button>
    </AnimatePresence>
  );
}
