import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function AboutHero() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50 flex flex-col lg:block lg:min-h-[65vh]">
      {/* Founder Portrait Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-[55vh] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%] lg:h-full z-0 order-1 lg:order-none"
      >
        <img
          src="/Photos/SomaStanding.png"
          alt="Soma Mukherjee"
          className="w-full h-full object-cover object-[center_top] contrast-[1.05]"
        />
        
        {/* Gradients to blend with background */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-amber-50 to-transparent hidden lg:block" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-amber-50 to-transparent lg:hidden" />
        
        {/* Soft vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.05)_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16 pt-6 pb-12 lg:py-24 order-2 lg:order-none flex lg:items-center lg:min-h-[65vh]">
        <div className="max-w-xl">
          <motion.div {...up(0.1)} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-amber-200 bg-white/80 backdrop-blur-sm shadow-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm font-bold text-amber-700 uppercase tracking-[0.2em]">About Soma Mukherjee</span>
          </motion.div>

          <motion.h1 {...up(0.2)} className="font-headline text-5xl lg:text-7xl font-normal text-soma-forest leading-[1.05] tracking-tight mb-8">
            She notices what <br />
            <span className="text-rose-500 italic">others miss.</span>
          </motion.h1>

          <motion.p {...up(0.3)} className="text-lg md:text-xl text-stone-700 font-inter font-normal leading-relaxed mb-5 max-w-lg">
            She helps people understand what their body has been trying to say for years.
          </motion.p>

          <motion.p {...up(0.35)} className="text-base text-stone-500 font-inter font-light leading-relaxed mb-10 max-w-lg">
            Through careful observation, therapeutic insight, and over two decades of experience, Soma helps individuals and organisations restore clarity, resilience, and wellbeing from the inside out.
          </motion.p>

          <motion.div {...up(0.4)} className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 min-h-[44px] px-10 py-5 bg-amber-500 text-soma-forest rounded-full font-bold text-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all shadow-xl shadow-amber-500/20 group"
            >
              Write to Soma <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-3 min-h-[44px] px-10 py-5 bg-white text-soma-forest border border-amber-200 rounded-full font-bold text-sm hover:bg-amber-50 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all shadow-sm"
            >
              The practices
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Fade bands */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-amber-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-rose-50/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
