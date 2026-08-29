import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ── Easing presets ────────────────────────────────────────────
const EASE_OUT = [0.21, 0.47, 0.32, 0.98];
const EASE_SPRING = { type: "spring", stiffness: 380, damping: 28 };
const EASE_SPRING_SOFT = { type: "spring", stiffness: 200, damping: 22 };

// ── Base fade + lift ──────────────────────────────────────────
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.75, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Directional fades ─────────────────────────────────────────
export const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInBottom = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Stagger container + item ──────────────────────────────────
export const StaggerContainer = ({ children, className = "", stagger = 0.12 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      visible: { transition: { staggerChildren: stagger } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", id, onClick }) => (
  <motion.div
    id={id}
    onClick={onClick}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Interactive hover card ────────────────────────────────────
export const HoverCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ x: 8 }}
    transition={EASE_SPRING}
    className={`rounded-[24px] p-10 shadow-sm transition-all hover:shadow-xl font-inter ${className.includes('bg-') ? '' : 'bg-white'} ${className}`}
  >
    {children}
  </motion.div>
);

// ── Premium Feature Card (Clinical Aesthetic) ─────────────
export const FeatureCard = ({ icon, title, desc, delay = 0, className = "" }) => (
  <motion.div 
    whileHover={{ x: 6 }}
    transition={EASE_SPRING}
    className={`bg-white rounded-[16px] p-5 shadow-sm transition-all hover:shadow-md flex items-start gap-4 font-inter h-full ${className}`}
  >
    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-800 mt-0.5">
      <span className="material-symbols-outlined text-[20px] font-bold">{icon}</span>
    </div>
    <div>
      <h3 className="text-xl font-headline font-bold text-[#8a6520] mb-1.5 leading-snug">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
  </motion.div>
);

// ── Animated stat number (counts up) ─────────────────────────
export const CountUp = ({ to, suffix = "", duration = 1.5, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useEffect(() => {
    return springVal.on("change", (v) => setDisplay(Math.round(v)));
  }, [springVal]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
};

// ── Pulsing icon circle ───────────────────────────────────────
export const PulseIcon = ({ icon, className = "" }) => (
  <motion.div
    animate={{ scale: [1, 1.08, 1] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className={className}
  >
    <span className="material-symbols-outlined">{icon}</span>
  </motion.div>
);

// ── Animated badge (bounces in) ───────────────────────────────
export const AnimatedBadge = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...EASE_SPRING_SOFT, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Animated stat block ───────────────────────────────────────
export const AnimatedStat = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE_OUT }}
  >
    <div className="text-3xl font-headline font-bold text-slate-900">{value}</div>
    <div className="text-xs font-inter text-slate-400 mt-0.5">{label}</div>
  </motion.div>
);

// ── Animated card with hover lift + glow ─────────────────────
export const AnimatedCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.65, delay, ease: EASE_OUT }}
    whileHover={{ y: -4, scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    transition={EASE_SPRING}
    className={`transition-shadow duration-300 hover:shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

// ── Line draw (horizontal rule that grows) ────────────────────
export const DrawLine = ({ className = "", delay = 0 }) => (
  <motion.div
    initial={{ scaleX: 0, originX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    className={className}
  />
);

// ── Floating chip ─────────────────────────────────────────────
export const FloatChip = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    animate={{ y: [0, -4, 0] }}
    className={className}
  >
    {children}
  </motion.div>
);
