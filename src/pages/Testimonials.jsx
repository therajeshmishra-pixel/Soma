import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { endorsements } from '../data/endorsements';
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Assign each testimonial an outcome tag for HR scannability
const withOutcome = endorsements.map((e, i) => ({
  ...e,
  outcome: [
    'Individual client · physiological awareness',
    'Long-term TCS associate · strength & stamina',
    'COEP Tech / TCS · discipline & physical conditioning',
    'Individual client · chronic knee pain relief',
    'SAP Labs India · sustained fitness practice',
    'TCS · yoga adoption & daily practice',
    'TCS · stress management & work-life balance',
    'Halliburton / TCS · sceptic-to-practitioner conversion',
    'IBM / TCS · embedded daily wellness guidance',
    'TCS Fellow · institutional wellness programme',
    'TCS Research · individual care & proactive guidance',
    'CEAT / TCS TRDDC · 10-year ongoing relationship',
    'AccelTree Software · organisational wellbeing',
    'TCS Research · Chief Scientist · holistic challenge support',
    'Sony Research India · community building & trust',
    'TCS · posture & flexibility development',
    'HP Direct · knowledge depth & human connection',
    'Amdocs India · corporate life context & individual guidance',
    'Deutsche Bank / TCS TRDDC · 2-year embedded coaching',
    'Google / TCS · energy & engagement restoration',
  ][i],
}));

// Featured three — highest professional weight for the top section
const featured = [withOutcome[1], withOutcome[3], withOutcome[12]]; // Arun, Souvik, Shanth
const remaining = withOutcome.filter((_, i) => ![1, 3, 12].includes(i));

const CARD_THEMES = [
  { center: 'bg-gradient-to-br from-amber-50/90 to-rose-50/90', bg: 'bg-gradient-to-br from-amber-50/40 to-rose-50/40' },
  { center: 'bg-gradient-to-br from-cyan-50/90 to-blue-50/90', bg: 'bg-gradient-to-br from-cyan-50/40 to-blue-50/40' },
  { center: 'bg-gradient-to-br from-emerald-50/90 to-teal-50/90', bg: 'bg-gradient-to-br from-emerald-50/40 to-teal-50/40' },
  { center: 'bg-gradient-to-br from-indigo-50/90 to-violet-50/90', bg: 'bg-gradient-to-br from-indigo-50/40 to-violet-50/40' },
  { center: 'bg-gradient-to-br from-orange-50/90 to-amber-50/90', bg: 'bg-gradient-to-br from-orange-50/40 to-amber-50/40' },
  { center: 'bg-gradient-to-br from-rose-50/90 to-pink-50/90', bg: 'bg-gradient-to-br from-rose-50/40 to-pink-50/40' },
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize, isMobile }) => {
  const isCenter = position === 0;
  const theme = CARD_THEMES[testimonial.colorIndex % CARD_THEMES.length];

  // Calculate card dimensions dynamically
  const width = cardSize;
  const height = isMobile ? 390 : cardSize * 1.08;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out ${
        isCenter 
          ? `z-10 ${theme.center} backdrop-blur-xl border border-white shadow-[0_16px_60px_rgba(120,113,108,0.15)] rounded-[40px]` 
          : `z-0 ${theme.bg} backdrop-blur-md border border-white/40 hover:bg-white/60 hover:border-cyan-200/50 rounded-[40px]`
      }`}
      style={{
        width: width,
        height: height,
        transform: isMobile 
          ? `
            translate(-50%, -50%)
            translateX(${position === 0 ? 0 : position * 14}px)
            translateY(${position === 0 ? -12 : 8}px)
            rotate(${position === 0 ? 0 : position * 2}deg)
            scale(${position === 0 ? 1 : 0.94})
          `
          : `
            translate(-50%, -50%) 
            translateX(${(width / 1.5) * position}px)
            translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
            rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
          `,
        opacity: isMobile
          ? (position === 0 ? 1 : Math.abs(position) === 1 ? 0.6 : 0)
          : (Math.abs(position) <= 2 ? 1 : 0),
        pointerEvents: Math.abs(position) > (isMobile ? 1 : 2) ? 'none' : 'auto',
      }}
    >
      <div className={`flex flex-col h-full p-6 sm:p-8 md:p-10 transition-opacity duration-500 ${isMobile && !isCenter ? 'opacity-0' : 'opacity-100'}`}>
        <Quote size={28} className={`${isCenter ? 'text-amber-500' : 'text-amber-300/60'} mb-4 sm:mb-5 transition-colors duration-500 flex-shrink-0`} />
        
        <p className={`text-sm sm:text-base md:text-[17px] leading-relaxed italic mb-4 sm:mb-6 font-light flex-grow transition-colors duration-500 overflow-y-auto scrollbar-hide ${
          isCenter ? 'text-stone-800' : 'text-stone-600 line-clamp-[6]'
        }`}>
          "{testimonial.quote}"
        </p>
        
        <div className={`border-t pt-4 sm:pt-5 transition-colors duration-500 flex-shrink-0 ${
          isCenter ? 'border-stone-300/50' : 'border-stone-200/30'
        }`}>
          <div className={`font-bold text-sm sm:text-base ${isCenter ? 'text-stone-900' : 'text-stone-700'}`}>
            {testimonial.author}
          </div>
          <div className={`text-xs sm:text-sm mt-0.5 ${isCenter ? 'text-stone-600' : 'text-stone-500'}`}>
            {testimonial.role}
          </div>
          <div className="text-[9px] sm:text-[10px] font-bold text-stone-400 mt-0.5">
            {testimonial.company}
          </div>
          <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mt-3 transition-all duration-500 ${
            isCenter ? 'text-cyan-700 opacity-100' : 'text-transparent opacity-0'
          }`}>
            {testimonial.outcome}
          </div>
        </div>
      </div>
    </div>
  );
};

const StaggerTestimonials = ({ items }) => {
  const [cardSize, setCardSize] = useState(440);
  const [isMobile, setIsMobile] = useState(false);
  const [testimonialsList, setTestimonialsList] = useState(
    items.map((item, i) => ({ ...item, tempId: item.id || i, colorIndex: i }))
  );

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance in pixels required to trigger a swipe
  const minSwipeDistance = 50;

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleMove(1); // Swipe left loads next testimonial
    } else if (isRightSwipe) {
      handleMove(-1); // Swipe right loads previous testimonial
    }
  };

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const mobileStatus = width < 640;
      setIsMobile(mobileStatus);
      
      if (width >= 1024) {
        setCardSize(440);
      } else if (width >= 768) {
        setCardSize(390);
      } else if (width >= 640) {
        setCardSize(360);
      } else {
        // dynamic sizing on mobile with 48px horizontal buffer
        setCardSize(Math.min(320, width - 48));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: isMobile ? 500 : 640 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = index - Math.floor(testimonialsList.length / 2);
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
            isMobile={isMobile}
          />
        );
      })}
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-stone-600 hover:bg-white hover:text-cyan-700 hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-stone-600 hover:bg-white hover:text-cyan-700 hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <main className="bg-transparent min-h-screen font-inter selection:bg-emerald-200 selection:text-emerald-950 overflow-x-hidden relative text-stone-900">
      <SEO
        title="Client Testimonials | SOMA"
        description="20 named testimonials from TCS professionals, scientists, engineers, and company leaders who have worked with Soma Mukherjee over more than a decade."
        canonical="https://www.somamukherjee.com/testimonials"
      />

      {/* Ambient Canvas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#faf9f6]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,1)_0%,rgba(247,242,232,0.82)_42%,rgba(246,249,244,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,transparent_0%,rgba(166,138,86,0.18)_32%,transparent_64%),linear-gradient(240deg,transparent_10%,rgba(26,51,41,0.12)_48%,transparent_80%)]" />
      </div>

      {/* Breadcrumb */}
      <div className="px-5 sm:px-6 md:px-12 pt-8 border-b border-white/50 pb-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
            <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <span className="text-stone-300">/</span>
            <Link to="/about" className="hover:text-amber-700 transition-colors">About</Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-600">Client Testimonials</span>
          </nav>
        </div>
      </div>

      {/* Boxless Editorial Hero */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 md:px-12 relative overflow-hidden">
        {/* Floating gradient orbs specifically for the hero */}
        <div className="absolute top-0 right-0 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-bl from-cyan-200/30 via-blue-100/20 to-transparent rounded-full blur-[80px] md:blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 mb-8 md:mb-12 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-800"
          >
            <span className="w-8 md:w-12 h-[1px] bg-cyan-800/40" />
            {endorsements.length} Named Endorsements
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-[110px] font-headline text-stone-900 leading-[0.95] mb-12 tracking-tight max-w-5xl"
          >
            What changed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 italic">after the work.</span>
          </motion.h1>
          
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-32 items-end mt-12 md:mt-24">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-stone-600 text-lg md:text-2xl leading-relaxed font-light max-w-3xl"
            >
              Every testimonial here is named, with role and employer stated. These are professionals from TCS Research, IBM, Google, Deutsche Bank, Sony Research, SAP, Halliburton, and COEP — people whose professional credibility is on record and who chose to attach their name to this.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8 md:gap-16"
            >
              <div>
                <div className="text-5xl md:text-7xl font-headline text-stone-900 mb-2 md:mb-3">20</div>
                <div className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Named<br/>Testimonials</div>
              </div>
              <div className="w-[1px] h-16 md:h-24 bg-stone-200" />
              <div>
                <div className="text-5xl md:text-7xl font-headline text-stone-900 mb-2 md:mb-3">10<span className="text-cyan-600 text-3xl md:text-5xl">+</span></div>
                <div className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Years avg.<br/>relationship</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Testimonials - Boxless Editorial Flow */}
      <section className="py-20 md:py-32 px-5 sm:px-6 md:px-12 relative border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-16 lg:gap-32">
          
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-5 md:mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-600/40" />
              Principal Records
            </div>
            <h2 className="text-2xl md:text-4xl font-headline text-stone-900 leading-tight">
              The foundational relationships that define the practice.
            </h2>
          </div>

          {/* Flowing text blocks (NO BOXES) */}
          <div className="flex flex-col gap-24 md:gap-40">
            {featured.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative"
              >
                <Quote size={80} className="text-stone-100 absolute -top-12 -left-8 md:-left-12 -z-10 transform -rotate-12" />
                <p className="text-xl md:text-3xl lg:text-4xl leading-[1.6] md:leading-[1.4] text-stone-800 font-light italic mb-8 md:mb-12 relative z-10">
                  "{item.quote}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                  <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-gradient-to-br from-stone-50 to-stone-200 flex items-center justify-center font-bold text-base md:text-lg text-stone-500 shadow-inner flex-shrink-0">
                    {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-base md:text-lg">{item.author}</div>
                    <div className="text-stone-500 text-xs md:text-sm mt-0.5">{item.role}</div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 md:mt-3">
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">{item.company}</span>
                      <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">{item.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Record — Carousel */}
      <section className="py-20 md:py-32 px-5 sm:px-6 md:px-12 relative border-t border-stone-200/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/20 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-headline text-stone-900 mb-4 md:mb-6">
              The Full Client Record
            </h2>
            <p className="text-stone-500 text-base md:text-xl font-light">
              Explore {remaining.length} further individual accounts and outcomes.
            </p>
          </div>

          <StaggerTestimonials items={remaining} />
        </div>
      </section>

      {/* Immersive Full-Bleed CTA (No Card) */}
      <section className="mt-12 relative overflow-hidden">
        <div className="bg-stone-900 text-white rounded-t-[48px] md:rounded-t-[100px] py-24 md:py-40 px-5 sm:px-6 md:px-12 relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-cyan-900/40 via-blue-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h2 className="text-3xl md:text-6xl lg:text-[80px] font-headline mb-6 md:mb-10 leading-[1.05]">
              Every one of these people started with a conversation.
            </h2>
            <p className="text-stone-400 text-lg md:text-2xl leading-relaxed font-light mb-10 md:mb-16 max-w-2xl mx-auto">
              Write to Soma directly. She reads everything and responds personally within one business day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-white hover:bg-cyan-50 text-stone-900 px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all shadow-xl group hover:scale-105"
            >
              Start the conversation
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="h-12 md:h-16 bg-transparent" />
    </main>
  );
}
