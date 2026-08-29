import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EndorsementCarousel({ endorsements }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === endorsements.length - 1 ? 0 : current + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [endorsements.length]);

  const goToSlide = (index) => setActiveIndex(index);
  const prevSlide = () => setActiveIndex((current) => (current === 0 ? endorsements.length - 1 : current - 1));
  const nextSlide = () => setActiveIndex((current) => (current === endorsements.length - 1 ? 0 : current + 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Carousel Track */}
      <div className="relative min-h-[400px] md:min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center"
          >
            <div className="flex flex-col items-center gap-12">
              <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-stone-200 border border-stone-100">
                <Quote size={32} strokeWidth={1} />
              </div>
              
              <blockquote className="max-w-4xl">
                <p className="text-3xl md:text-4xl font-headline font-light italic leading-tight text-soma-forest tracking-tight">
                  "{endorsements[activeIndex].quote}"
                </p>
              </blockquote>

              <div className="space-y-3">
                <div className="text-[11px] font-bold text-soma-forest uppercase tracking-[0.4em]">{endorsements[activeIndex].author}</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">{endorsements[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-12 mt-16">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 hover:text-soma-forest hover:border-soma-forest transition-all group"
          aria-label="Previous endorsement"
        >
          <ChevronLeft size={18} strokeWidth={1.2} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Dots */}
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 max-w-[80vw]">
          {endorsements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === activeIndex 
                  ? 'w-4 md:w-8 h-1 bg-soma-forest' 
                  : 'w-1.5 h-1 bg-stone-200 hover:bg-stone-400'
              }`}
              aria-label={`Go to endorsement ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 hover:text-soma-forest hover:border-soma-forest transition-all group"
          aria-label="Next endorsement"
        >
          <ChevronRight size={18} strokeWidth={1.2} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
