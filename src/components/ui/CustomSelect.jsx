import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomSelect({ options, value, onChange, placeholder, name, className = "", containerClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full font-inter ${containerClassName}`} ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`w-full min-h-[44px] px-5 py-3.5 rounded-2xl bg-white border ${isOpen ? 'border-sky-400 ring-4 ring-sky-500/30' : 'border-stone-200'} transition-all cursor-pointer flex items-center justify-between text-sm focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-400 ${className}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? 'text-soma-forest' : 'text-stone-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`material-symbols-outlined text-sky-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          expand_more
        </span>
      </div>
      <input type="hidden" name={name} value={value || ''} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-[100] left-0 right-0 mt-2 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xl shadow-sky-900/5 overflow-y-auto max-h-[240px]"
            role="listbox"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-5 py-4 hover:bg-sky-50/50 transition-colors cursor-pointer text-sm ${value === option.value ? 'bg-sky-50 text-sky-900 font-bold' : 'text-stone-700 font-normal'}`}
                role="option"
                aria-selected={value === option.value}
                tabIndex={0}
                onKeyDown={(e) => {
                   if (e.key === 'Enter' || e.key === ' ') {
                     e.preventDefault();
                     handleSelect(option.value);
                   }
                }}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
