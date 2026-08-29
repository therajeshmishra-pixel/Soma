"use client"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Building2, User, FileBadge2, Building, BookOpen, GraduationCap } from "lucide-react"

export default function ShaderShowcase() {
  const navigate = useNavigate()

  return (
    <div className="w-full relative overflow-hidden lg:min-h-[calc(100svh-200px)] bg-stone-50 flex flex-col lg:block">
      {/* Background Image Layer (Top on mobile, Right on desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative lg:absolute lg:inset-y-0 lg:left-1/2 w-full lg:w-1/2 h-[26svh] min-h-[210px] max-h-[270px] md:h-[35vh] md:max-h-none lg:h-full z-0 shrink-0"
      >
        <img 
          src="/Photos/Soma_PortraitB.jpeg" 
          alt="Soma Wellness Sanctuary" 
          className="w-full h-full object-cover object-[center_top] soma-hero-filter"
        />
        
        {/* Blend the left edge smoothly into the background on desktop */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-stone-50 to-transparent lg:block hidden" />
        
        {/* Blend the bottom edge smoothly into the background on mobile */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-stone-50 to-transparent lg:hidden block pointer-events-none" />
        
        {/* Amber glow accent */}
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#b29267]/10 rounded-full blur-[100px] pointer-events-none" />
      </motion.div>
      
      {/* Amber glow on the text side */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#b29267]/10 rounded-full blur-[120px] pointer-events-none animate-pulse hidden lg:block" />

      {/* Content Layer */}
      <main className="relative z-10 flex-none lg:flex lg:flex-col lg:justify-center px-5 md:px-8 lg:px-16 pt-4 pb-7 md:pb-10 lg:h-full lg:pt-8 lg:pb-8">
        <div className="max-w-7xl mx-auto w-full max-w-[calc(100vw-2.5rem)] lg:max-w-7xl">
          <div className="max-w-3xl w-full lg:max-w-[43rem]">
            {/* Tagline */}
            <motion.div
              initial={false}
              className="inline-flex max-w-full items-center gap-3 rounded-full border border-stone-900/10 bg-stone-900/5 px-4 py-2 backdrop-blur-md mb-4 md:mb-6"
            >
              <span className="w-2 h-2 bg-[#b29267] rounded-full animate-pulse" />
              <span className="text-stone-700 text-[10px] font-bold uppercase tracking-[0.3em] font-inter">
                Yoga therapy — Pune & online across India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={false}
              className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-stone-700 font-bold leading-[1.05] mb-4 md:mb-5 tracking-tight"
            >
              Your body has been 
              asking for help 
              <span className="italic font-normal text-[#8c704f]">for a long time.</span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={false}
              className="text-stone-600 text-base md:text-lg font-inter leading-relaxed max-w-xl mb-7 lg:mb-6 space-y-4"
            >
              <p>
                Back pain. Burnout. Broken sleep. A mind that will not switch off.
              </p>
              <p>
                Soma Mukherjee does not teach yoga as a class. She uses it to rebuild the body and nervous system that work and life have worn down. For more than 25 years, she has quietly walked professionals back towards health — step by step, week by week.
              </p>
              <p className="font-semibold text-stone-800">
                How would you like to start?
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={false}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 max-w-full mb-7 md:mb-9"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('corporate-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/corporate/architect');
                }}
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-emerald-800 text-white font-medium text-sm md:text-base transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3 font-inter hover:bg-emerald-900"
              >
                <Building2 size={18} />
                I represent a company
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('individual-programs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/programs');
                }}
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white/40 border border-stone-300 text-stone-700 font-medium text-sm md:text-base transition-all font-inter flex items-center justify-center gap-3 hover:bg-stone-100"
              >
                <User size={18} />
                I need this for myself
              </motion.button>
            </motion.div>

            {/* Proof Items */}
            <motion.div 
              initial={false}
              className="grid grid-cols-1 gap-2 text-left sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2 lg:flex-nowrap"
            >
              {[
                { icon: BookOpen, text: "Harvard Medical School" },
                { icon: GraduationCap, text: "Master's (MPM)" },
                { icon: FileBadge2, text: "Ayush Level 3" },
                { icon: Building, text: "22 years at TCS Pune" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[12px] md:text-[11px] text-stone-500 font-medium whitespace-nowrap">
                  <item.icon size={14} className="text-[#8c704f] shrink-0" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Ministry of Ayush Logo — credential badge, bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-5 right-5 lg:right-10 z-20 flex flex-col items-center gap-1.5 hidden md:flex"
      >
        <img
          src="/Photos/ayush-logo.png"
          alt="Yoga Certification Board, Ministry of Ayush, Govt. of India"
          className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-xl"
        />
        <p className="text-[9px] md:text-[10px] text-stone-800 font-bold uppercase tracking-[0.2em] text-center leading-tight">
          Yoga Certification Board
        </p>
        <p className="text-[8px] md:text-[9px] text-[#8c704f] font-bold uppercase tracking-[0.18em] text-center">
          Level 3 Certified
        </p>
      </motion.div>
    </div>
  )
}
