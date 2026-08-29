import { useState, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../../components/ui/motion-wrappers';
import { 
  BrainCircuit, 
  Wind, 
  Activity,
  Heart,
  Zap,
  Eye,
  Check, 
  ChevronDown, 
  ArrowRight, 
  Clock4,
  Layers,
  Sparkles,
  Waves,
  Brain
} from 'lucide-react';

const INTERNAL_FEELINGS = [
  'mentally crowded',
  'emotionally thin',
  'easily overstimulated',
  'unable to fully recover',
  'quietly disconnected from themselves'
];

const DISAPPEARANCES = [
  { name: 'Patience shortens', delay: 0 },
  { name: 'Reading becomes harder', delay: 0.1 },
  { name: 'Silence becomes uncomfortable', delay: 0.2 },
  { name: 'Decisions feel heavy', delay: 0.3 },
  { name: 'Focus breaks faster', delay: 0.4 },
  { name: 'Mental recovery takes longer', delay: 0.5 }
];

const BACKGROUND_PROCESSES = [
  { 
    Icon: Layers, 
    badge: 'Mental Loops', 
    title: 'Background thinking.', 
    desc: 'The mind continuously processes unfinished tasks, simulated conversations, and hypothetical scenarios long after the actual event has passed.',
    color: 'from-sky-500 to-indigo-500',
    bg: 'bg-sky-50'
  },
  { 
    Icon: Heart, 
    badge: 'Emotional Weight', 
    title: 'Emotional processing.', 
    desc: 'Carrying the unspoken tension, relational friction, and affective demands of the day without a designated space to release them.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50'
  },
  { 
    Icon: Eye, 
    badge: 'Constant Alertness', 
    title: 'Invisible vigilance.', 
    desc: 'A nervous system that remains slightly activated: checking, anticipating, preparing, and carrying. A mind that never fully exhales.',
    color: 'from-violet-500 to-fuchsia-500',
    bg: 'bg-violet-50'
  }
];

const APPROACH_PILLARS = [
  { id: 1, label: 'Mental Overload', icon: BrainCircuit, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { id: 2, label: 'Breathing Behaviour', icon: Wind, color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { id: 3, label: 'Bodily Tension', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { id: 4, label: 'Nervous Activation', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 5, label: 'Emotional Accumulation', icon: Heart, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { id: 6, label: 'Sensory Overstimulation', icon: Eye, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

const CURRICULUM = [
  { 
    week: 'Weeks 1–2', 
    title: 'Phase 1 — Noticing What Has Become Normal', 
    desc: 'Most people arrive thinking the problem is poor focus or lack of discipline. Underneath that are deeper patterns: constant cognitive switching, prolonged nervous system activation, emotional carrying, and breath restriction.', 
    outcome: 'You recognise how your system has adapted to overload without realising it. This is often unexpectedly emotional, realising how long you have functioned in survival mode.',
    gradient: 'from-sky-400 to-emerald-400'
  },
  { 
    week: 'Weeks 3–5', 
    title: 'Phase 2 — Creating Space Inside the System', 
    desc: 'This phase introduces carefully paced therapeutic practices designed to reduce internal congestion rather than increase effort. Restorative movement, sensory decompression, therapeutic breathwork, and structured quietness.', 
    outcome: 'Not productivity hacks. You begin noticing clearer thinking, deeper exhalation, and calmer evenings because the system stopped carrying the same level of invisible load.',
    gradient: 'from-emerald-400 to-teal-400'
  },
  { 
    week: 'Weeks 6–8', 
    title: 'Phase 3 — Building a More Sustainable Rhythm', 
    desc: 'The final phase focuses on integration. Not into an ideal wellness lifestyle, but into real life. Work, responsibilities, and deadlines still exist, but your relationship to those demands changes.', 
    outcome: 'You leave with personalised recovery frameworks, healthier cognitive boundaries, and greater internal spaciousness. The goal is no longer living in permanent mental compression.',
    gradient: 'from-teal-400 to-indigo-400'
  },
];

const RIGHT_FOR_YOU = [
  'feel mentally “full” all the time',
  'struggle to mentally switch off',
  'feel overstimulated by constant input',
  'experience brain fog under stress',
  'feel emotionally flattened by cognitive overload',
  'have normalised chronic mental tension'
];

const FORMAT_ITEMS = [
  '8-week guided process',
  'Small cohorts with a calm pace',
  'No performative vulnerability',
  'Online sessions',
  'Gentle between-session practices',
  'Optional private support available'
];

// Animated Blob Component for liveness
const AnimatedBlob = ({ className }) => (
  <motion.div 
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.1, 0.9, 1],
      borderRadius: ["40%", "60%", "30%", "40%"]
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className={`absolute ${className}`}
  />
);

export default function CognitiveCalm() {
  const methodologyRef = useRef(null);

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      <SEO 
        title="Cognitive Calm Programme | SOMA" 
        description="For minds that have been carrying too much for too long. A therapeutic programme to help the system remember what steadiness feels like." 
        canonical="https://www.somamukherjee.com/programs/cognitive" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span className="text-stone-300">/</span>
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <span className="text-stone-300">/</span>
          <span className="text-stone-900">Cognitive Calm</span>
        </nav>
      </section>

      {/* HERO SECTION: Dynamic & Visual */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <AnimatedBlob className="top-10 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-sky-300/30 to-emerald-300/30 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/30 to-indigo-200/30 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-8 md:mb-12 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">Cognitive Calm Programme</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  For minds that have been carrying <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-400 italic">too much for too long.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-sky-200/50 mb-10 space-y-6">
                  <div className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal space-y-2">
                    <p>Not every exhausted person looks exhausted.</p>
                    <p>Some people continue functioning remarkably well while internally feeling:</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {INTERNAL_FEELINGS.map((feeling, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/60 backdrop-blur-md border border-stone-200 text-stone-600 rounded-full text-sm font-medium shadow-sm">
                        {feeling}
                      </span>
                    ))}
                  </div>
                  <div className="text-lg text-stone-500 leading-relaxed italic font-light pt-6 space-y-4">
                    <p>Cognitive Calm is Soma’s therapeutic programme for people whose minds have been in a prolonged state of mental load, overstimulation, and internal pressure.</p>
                    <p>Not to optimise performance.</p>
                    <p>To help the system remember what steadiness feels like again.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Cognitive Calm" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-sky-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Inquire Privately <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                  <button 
                    onClick={scrollToMethodology}
                    className="min-h-[56px] px-10 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-white focus:outline-none transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 shadow-sm"
                  >
                    See How It Works
                  </button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInRight>
              <div className="relative group lg:w-4/5 lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-emerald-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/Photos/Mental_Space_Image.png" 
                    alt="Cognitive restoration and space" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback abstract gradient if image fails */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex-col items-center justify-center text-stone-300">
                    <Waves size={64} strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent z-0"></div>
                  
                  {/* Floating Elements on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-200 mb-2">The Goal</p>
                    <p className="text-lg font-headline italic">Internal Spaciousness</p>
                  </motion.div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* THE DISAPPEARANCES - Cinematic Dark Section */}
      <section className="py-24 lg:py-32 bg-soma-forest text-white relative overflow-hidden">
        <AnimatedBlob className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-headline leading-[1.1]"
          >
            The outside world often calls this “stress.” <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300 drop-shadow-lg">But many people experience it differently.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <FadeInLeft>
              <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                <div className="space-y-4">
                  <p>As if the mind never truly closes.</p>
                  <p>As if attention has become fragmented.</p>
                  <p>As if rest no longer reaches where the tiredness actually lives.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm mt-6">
                  <p className="font-normal text-sky-200 italic text-xl space-y-2">
                    <span className="block">Most people do not notice cognitive fatigue when it begins.</span>
                    <span className="block">They notice what disappears because of it.</span>
                  </p>
                </div>
                <p className="mt-6">
                  The body is present. But attention feels scattered across too many invisible places at once.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="space-y-8">
                <p className="text-lg text-stone-300 font-light space-y-2">
                  <span className="block">Many people adapt to this slowly. Especially high-functioning people.</span>
                  <span className="block">The exhaustion becomes so normal that they stop recognising it as exhaustion.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {DISAPPEARANCES.map((effect, idx) => (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: effect.delay }}
                      key={idx} 
                      className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white hover:text-soma-forest transition-colors cursor-default shadow-lg"
                    >
                      {effect.name}
                    </motion.span>
                  ))}
                </div>
                <div className="font-normal text-teal-200 pt-4 text-lg italic border-t border-white/10 mt-8 space-y-2">
                  <p>This programme is not built around productivity.</p>
                  <p>Because exhausted minds do not need more optimisation.</p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* THE BACKGROUND NOISE - Multicolored Cards */}
      <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="soma-container max-w-screen-2xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h5 className="mb-6 text-stone-400">The Invisible Load</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest max-w-4xl mx-auto">
              Even during pauses, something <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">continues running underneath.</span>
            </h2>
          </div>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-8">
            {BACKGROUND_PROCESSES.map((c, i) => (
              <StaggerItem key={i}>
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} rounded-[48px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  <div className="soma-card h-full flex flex-col focus-within:ring-2 focus-within:ring-sky-500 focus-within:outline-none border-none hover:-translate-y-3 transition-all duration-500 bg-white shadow-xl relative z-10 p-10 md:p-12 overflow-hidden">
                    {/* Decorative Background Blob inside card */}
                    <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${c.bg} blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
                    
                    <div className={`w-16 h-16 rounded-[24px] ${c.bg} flex items-center justify-center mb-8 shadow-sm relative z-10`}>
                      <c.Icon size={28} className="text-soma-forest group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-transparent bg-clip-text bg-gradient-to-r ${c.color}`}>{c.badge}</h4>
                    <h3 className="text-2xl font-headline text-soma-forest mb-6 italic leading-tight relative z-10">{c.title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm font-light relative z-10">{c.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SOMA'S APPROACH - INFOGRAPHIC LAYOUT */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <AnimatedBlob className="top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Infographic Grid */}
            <FadeInLeft>
              <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
                <div className="absolute inset-0 bg-stone-50/50 rounded-[64px] border border-stone-100 shadow-2xl rotate-2 scale-105 -z-10"></div>
                <div className="bg-white rounded-[64px] p-8 md:p-12 shadow-xl border border-stone-50 relative z-10 grid grid-cols-2 gap-4 md:gap-6">
                  {/* Center connective element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-8 border-stone-50">
                    <Brain size={36} className="text-soma-forest" strokeWidth={1} />
                  </div>
                  
                  {APPROACH_PILLARS.map((pillar) => (
                    <div key={pillar.id} className="p-6 md:p-8 bg-stone-50/80 rounded-[32px] flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all duration-300 relative z-10 border border-transparent hover:border-stone-100">
                      <div className={`w-14 h-14 rounded-full ${pillar.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon size={24} className={pillar.color} strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-soma-forest mt-2">
                        {pillar.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-soma-forest leading-[1.1] mb-10">
                  What makes Soma <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">notice differently?</span>
                </h2>
                <div className="space-y-8 text-lg text-stone-600 font-light leading-relaxed mb-12">
                  <p>
                    Most approaches to mental wellbeing focus purely on thought management. Soma pays attention to the deeper systemic relationships.
                  </p>
                  <p>
                    Because cognition does not happen separately from the body carrying it. This is why people sometimes say: <span className="italic">“I cannot think clearly anymore,”</span> or <span className="italic">“My brain feels noisy.”</span>
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-stone-50 to-stone-100 rounded-[32px] border border-stone-200 shadow-inner relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400"></div>
                  <p className="text-soma-forest font-medium italic text-xl leading-relaxed">
                    "These are not always motivation problems. Often, they are regulation problems. And regulation changes differently than motivation does. Quietly. Gradually. Physiologically."
                  </p>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* HOW THE PROGRAMME WORKS (VISUAL TIMELINE CURRICULUM) */}
      <section ref={methodologyRef} className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        {/* Dark Mode Animated Backgrounds */}
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
        <AnimatedBlob className="bottom-0 -left-1/4 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <h5 className="mb-6 text-stone-400">The Curriculum</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">How the process unfolds.</h2>
            <p className="text-xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed">
              Cognitive Calm is intentionally gentle. Not because the work is light. Because <span className="font-medium text-white italic">overloaded systems respond poorly to force.</span>
            </p>
          </div>

          <div className="relative border-l-2 border-stone-800 ml-4 md:ml-12 lg:ml-24 pb-12">
            {CURRICULUM.map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                key={i} 
                className="relative pl-12 md:pl-20 mb-20 md:mb-32 last:mb-0"
              >
                {/* Timeline Dot with Glow */}
                <div className={`absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-stone-900 border-4 border-stone-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20`}>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${m.gradient} shadow-[0_0_15px_currentColor]`}></div>
                </div>
                
                {/* Connecting glowing line segment active state */}
                <div className={`absolute top-8 -left-[2px] w-[2px] h-full bg-gradient-to-b ${m.gradient} opacity-20`}></div>

                <div className="bg-stone-800/40 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-stone-700/50 shadow-2xl group hover:border-stone-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className={`px-6 py-2 rounded-full bg-stone-900/80 border border-stone-700 text-[10px] font-bold uppercase tracking-[0.3em] inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${m.gradient}`}>
                      {m.week}
                    </div>
                    <h4 className="text-3xl md:text-4xl text-white font-headline italic leading-tight">{m.title}</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
                    <div className="flex flex-col justify-center">
                      <p className="text-stone-300 text-lg leading-relaxed font-light">
                        {m.desc}
                      </p>
                    </div>
                    <div className="bg-stone-900/50 p-6 md:p-8 rounded-[24px] border border-stone-800/50 flex flex-col justify-center">
                      <p className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-4">The Shift</p>
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${m.gradient} text-base md:text-lg font-medium leading-relaxed italic`}>
                        "{m.outcome}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT & RIGHT FOR YOU SECTION - Glassmorphism */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden z-20">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-stone-900 to-transparent opacity-5" />
        <AnimatedBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Format */}
            <FadeInLeft>
              <div className="h-full bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <h5 className="mb-6 md:mb-8 text-teal-600 relative z-10">The Experience</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-8 relative z-10">A quieter kind of recovery.</h3>
                
                <div className="p-6 bg-stone-50 rounded-3xl mb-12 relative z-10 flex items-center gap-6 border border-stone-100">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-teal-500 shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <p className="text-stone-600 font-light text-lg">
                    Some people do not need intensity. They need permission for the nervous system to stop holding everything so tightly.
                  </p>
                </div>
                
                <div className="space-y-6 relative z-10 mt-auto">
                  {FORMAT_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group">
                      <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mt-1 shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-stone-700 text-lg font-light tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            {/* Right for you */}
            <FadeInRight>
              <div className="h-full bg-gradient-to-br from-sky-50 to-emerald-50 p-10 md:p-16 rounded-[48px] shadow-xl border border-white flex flex-col relative overflow-hidden">
                <h5 className="mb-6 md:mb-8 text-sky-600">Considerations</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-10">Who this programme resonates with:</h3>
                
                <ul className="space-y-6 mb-12 flex-1">
                  {RIGHT_FOR_YOU.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-5 text-stone-700 font-light text-lg leading-relaxed bg-white/40 p-4 rounded-2xl border border-white/50">
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-sky-200/50 mt-auto">
                  <div className="flex items-start gap-5 bg-white/60 p-6 rounded-3xl border border-white/50">
                    <p className="text-[14px] text-stone-700 font-normal leading-relaxed italic">
                      Especially suited for professionals in demanding cognitive work, technology/corporate environments, caregivers, educators, and emotionally responsible personalities.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* A MORE PERSONAL KIND OF THERAPEUTIC SUPPORT */}
      <section className="py-24 lg:py-32 soma-container text-center relative">
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="mt-20 relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-teal-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-teal-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                I did not realise how mentally compressed I had become until the programme created moments where my mind finally felt spacious again. Nothing dramatic happened overnight. But slowly, everything inside felt less crowded.
              </p>
              <div className="flex flex-col items-center mt-12 gap-2">
                <div className="w-12 h-[2px] bg-teal-200 mb-2"></div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Client Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Massive Visual Anchor */}
      <section className="pt-12 pb-24 lg:pb-32 soma-container text-center -mt-16 relative z-20">
        <div className="bg-stone-900 rounded-[64px] p-12 md:p-24 lg:p-32 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-sky-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-10 backdrop-blur-md border border-white/20">
              <Sparkles size={24} className="text-sky-300" strokeWidth={1.5} />
            </div>
            <h2 className="text-[12px] font-bold text-sky-300 uppercase tracking-[0.4em] mb-10">Final Invitation</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-headline text-white mb-10 leading-[1.1] italic">
              Clarity is not always <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">something you chase.</span>
            </h3>
            <p className="text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Sometimes it returns naturally when the system <br className="hidden sm:block"/>
              no longer feels under constant pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact?purpose=Cognitive Calm" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-50 to-teal-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Inquire Privately <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
