import { useState, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../../components/ui/motion-wrappers';
import { 
  Smartphone, 
  Wind, 
  Activity,
  Zap,
  Eye,
  Check, 
  ChevronDown, 
  ArrowRight, 
  Clock4,
  Layers,
  Sparkles,
  WifiOff,
  Focus,
  Brain
} from 'lucide-react';

const DIGITAL_STREAM = [
  'Notifications.',
  'Tabs.',
  'Messages.',
  'Meetings.',
  'Scrolling.',
  'Background noise.',
  'Information without pause.',
  'Attention without recovery.'
];

const AFFECTED_AREAS = [
  { name: 'Sleep depth', delay: 0 },
  { name: 'Ability to read a book', delay: 0.1 },
  { name: 'Patience with loved ones', delay: 0.2 },
  { name: 'Presence in real life', delay: 0.3 },
  { name: 'Baseline anxiety levels', delay: 0.4 },
  { name: 'Capacity for deep, uninterrupted thought', delay: 0.5 }
];

const DIGITAL_PATTERNS = [
  { 
    Icon: Smartphone, 
    badge: 'The Phantom Reach', 
    title: 'Your hand reaches for the phone before you consciously decide to.', 
    desc: 'You open a tab, forget why, and start scrolling. The device has become a reflex for avoiding minor discomfort, waiting, or silence.',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50'
  },
  { 
    Icon: Layers, 
    badge: 'The Fragmented Mind', 
    title: 'You struggle to hold attention on one thing for an hour.', 
    desc: 'Your brain feels conditioned to expect interruptions. Even when you try to focus, you feel an internal pull to check, refresh, or switch contexts.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50'
  },
  { 
    Icon: Zap, 
    badge: 'The Unsettled Evening', 
    title: 'You scroll to relax, but end up feeling more wired.', 
    desc: 'You lie in bed absorbing information, news, or videos. The body is physically resting, but the nervous system is absorbing high-intensity input when it should be down-regulating.',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50'
  }
];

const APPROACH_PILLARS = [
  { id: 1, label: 'Cognitive interruption', icon: Brain, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { id: 2, label: 'Sensory overload', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 3, label: 'Dopamine regulation', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { id: 4, label: 'Visual fatigue', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 5, label: 'Postural holding patterns', icon: Layers, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { id: 6, label: 'Nervous system down-shifting', icon: Wind, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

const CURRICULUM = [
  { 
    week: 'Weeks 1–2', 
    title: 'Phase 1 — Auditing the Digital Load', 
    desc: 'The first phase focuses on observation without judgment. Together, we map your specific digital patterns: morning routines, work interruption cycles, evening scrolling, and the underlying triggers that cause you to reach for input.', 
    outcome: 'You begin to see your technology use not as a personal failure, but as an acquired somatic pattern.',
    gradient: 'from-blue-400 to-indigo-400'
  },
  { 
    week: 'Weeks 3–5', 
    title: 'Phase 2 — Gradual Uncoupling', 
    desc: 'This phase introduces carefully guided practices designed to help the nervous system tolerate periods of non-stimulation. We explore therapeutic somatic techniques to down-shift the system without using screens, and methods to rebuild sustained focus.', 
    outcome: 'You start experiencing moments where you naturally prefer not to look at your phone. Your capacity for single-tasking begins to return.',
    gradient: 'from-indigo-400 to-violet-400'
  },
  { 
    week: 'Weeks 6–8', 
    title: 'Phase 3 — Intentional Architecture', 
    desc: 'This final phase focuses on building a sustainable digital environment for your real life. We create realistic boundaries, structured recovery periods, and healthier engagement strategies for when you do need to be online.', 
    outcome: 'You leave with a framework that allows you to engage with technology intentionally, rather than reflexively. You remember what an uncluttered mind feels like.',
    gradient: 'from-violet-400 to-fuchsia-400'
  },
];

const RIGHT_FOR_YOU = [
  'you feel continuously mentally distracted',
  'you use screens to numb out or avoid feelings',
  'you struggle to focus deeply on one task',
  'your sleep is impacted by evening device use',
  'you feel a background sense of urgency when away from your phone',
  'you want to regain control over your attention'
];

const FORMAT_ITEMS = [
  '8-week guided process',
  'Small, understanding cohorts',
  'No rigid “detox” rules',
  'Online sessions (ironically, but intentionally structured)',
  'Gentle offline practices',
  'Resources to support gradual shifts'
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

export default function DigitalCalm() {
  const methodologyRef = useRef(null);

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <SEO 
        title="Digital Calm Programme | SOMA" 
        description="Your mind was not designed to live this continuously connected. A therapeutic programme to rebuild a healthier relationship with attention and recovery." 
        canonical="https://www.somamukherjee.com/programs/digital" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span className="text-stone-300">/</span>
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <span className="text-stone-300">/</span>
          <span className="text-stone-900">Digital Calm</span>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <AnimatedBlob className="top-10 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/30 to-indigo-300/30 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-violet-300/30 to-fuchsia-200/30 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 md:mb-12 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">Digital Calm Programme</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  Your mind was not designed <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-400 italic">to live this continuously connected.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-blue-200/50 mb-10 space-y-6">
                  <div className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal space-y-2">
                    <p>Not every form of exhaustion comes from hard work.</p>
                    <p>Some of it comes from never fully leaving the stream.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {DIGITAL_STREAM.map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/60 backdrop-blur-md border border-stone-200 text-stone-600 rounded-full text-sm font-medium shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="text-lg text-stone-500 leading-relaxed italic font-light pt-6 space-y-4">
                    <p>Over time, the nervous system stops experiencing silence as normal.</p>
                    <p>Stillness begins to feel unfamiliar.<br/>Unstimulated moments feel uncomfortable.<br/>The mind starts reaching for input automatically — even when tired.</p>
                    <p className="pt-4 font-medium text-stone-600">Digital Calm is Soma’s therapeutic programme for people who feel mentally consumed, overstimulated, emotionally scattered, or internally restless from prolonged digital saturation.</p>
                    <p>Not to reject technology.<br/>But to rebuild a healthier relationship with attention, stimulation, and recovery.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Digital Calm" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-blue-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Inquire Privately <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInRight>
              <div className="relative group lg:w-4/5 lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-fuchsia-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/Photos/Digital_Ergonomics_Image.png" 
                    alt="Digital connection and internal calm" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex-col items-center justify-center text-stone-300">
                    <WifiOff size={64} strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent z-0"></div>
                  
                  {/* Floating Elements on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200 mb-2">The Goal</p>
                    <p className="text-lg font-headline italic">Healthy Engagement</p>
                  </motion.div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - Cinematic Dark Section */}
      <section className="py-24 lg:py-32 bg-soma-forest text-white relative overflow-hidden">
        <AnimatedBlob className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-headline leading-[1.1]"
          >
            Most people think their problem is screen time. <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 drop-shadow-lg">Usually, it is deeper than that.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <FadeInLeft>
              <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                <p>The real issue is often:</p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm mt-6">
                  <div className="font-normal text-blue-200 italic text-xl space-y-2">
                    <p>continuous cognitive interruption</p>
                    <p>absence of mental space</p>
                    <p>constant visual narrow-focus</p>
                    <p>the physiological cost of carrying a device that demands attention everywhere</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="space-y-8">
                <p className="text-lg text-stone-300 font-light space-y-2">
                  <span className="block">Many people adapt to this for years. Until the digital saturation starts affecting:</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {AFFECTED_AREAS.map((effect, idx) => (
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
                <div className="font-normal text-indigo-200 pt-4 text-lg italic border-t border-white/10 mt-8 space-y-2">
                  <p>Soma’s work begins by understanding these patterns carefully — not by prescribing rigid “digital detoxes” that fail within days.</p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* YOU MAY RECOGNISE SOME OF THIS */}
      <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="soma-container max-w-screen-2xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h5 className="mb-6 text-stone-400">Common Patterns</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest max-w-4xl mx-auto">
              You may recognise <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">some of this.</span>
            </h2>
          </div>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-8">
            {DIGITAL_PATTERNS.map((c, i) => (
              <StaggerItem key={i}>
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} rounded-[48px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  <div className="soma-card h-full flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none border-none hover:-translate-y-3 transition-all duration-500 bg-white shadow-xl relative z-10 p-10 md:p-12 overflow-hidden">
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
        <AnimatedBlob className="top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Infographic Grid */}
            <FadeInLeft>
              <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
                <div className="absolute inset-0 bg-stone-50/50 rounded-[64px] border border-stone-100 shadow-2xl rotate-2 scale-105 -z-10"></div>
                <div className="bg-white rounded-[64px] p-8 md:p-12 shadow-xl border border-stone-50 relative z-10 grid grid-cols-2 gap-4 md:gap-6">
                  {/* Center connective element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-8 border-stone-50">
                    <Focus size={36} className="text-soma-forest" strokeWidth={1} />
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
                  What makes Soma’s <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">approach different?</span>
                </h2>
                <div className="space-y-8 text-lg text-stone-600 font-light leading-relaxed mb-12">
                  <p>
                    Most digital wellness advice focuses purely on restriction: setting timers, deleting apps, putting the phone in another room.
                  </p>
                  <p className="font-semibold text-xl">
                    Soma focuses on regulation.
                  </p>
                  <p>
                    Because if the nervous system has become dependent on continuous stimulation to distract from underlying stress, simply removing the phone creates agitation.
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-stone-50 to-stone-100 rounded-[32px] border border-stone-200 shadow-inner relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400"></div>
                  <p className="text-soma-forest font-medium italic text-xl leading-relaxed">
                    “This is not an anti-technology programme. It is a therapeutic process for individuals who want to regain sovereignty over their attention, their time, and their internal quiet.”
                  </p>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* HOW THE PROCESS UNFOLDS */}
      <section ref={methodologyRef} className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
        <AnimatedBlob className="bottom-0 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <h5 className="mb-6 text-stone-400">How the process unfolds</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">Digital Calm is not about forcing yourself to disconnect.</h2>
            <p className="text-xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed">
              It is about gently training the system to feel safe in stillness again.
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
                <div className={`absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-stone-900 border-4 border-stone-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20`}>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${m.gradient} shadow-[0_0_15px_currentColor]`}></div>
                </div>
                
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

      {/* FORMAT & CONSIDERATIONS SECTION */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden z-20">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-stone-900 to-transparent opacity-5" />
        <AnimatedBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Format */}
            <FadeInLeft>
              <div className="h-full bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <h5 className="mb-6 md:mb-8 text-indigo-600 relative z-10">Programme Format</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-8 relative z-10">Designed to fit into a digitally demanding life.</h3>
                
                <div className="space-y-6 relative z-10 mt-auto pt-8">
                  {FORMAT_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mt-1 shrink-0">
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
              <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-16 rounded-[48px] shadow-xl border border-white flex flex-col relative overflow-hidden">
                <h5 className="mb-6 md:mb-8 text-blue-600">Considerations</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-10">Is this programme right for you?</h3>
                
                <ul className="space-y-6 mb-12 flex-1">
                  {RIGHT_FOR_YOU.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-5 text-stone-700 font-light text-lg leading-relaxed bg-white/40 p-4 rounded-2xl border border-white/50">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-blue-200/50 mt-auto">
                  <div className="flex items-start gap-5 bg-white/60 p-6 rounded-3xl border border-white/50">
                    <p className="text-[14px] text-stone-700 font-normal leading-relaxed italic">
                      (This programme is particularly beneficial for remote workers, creatives, and anyone whose profession requires prolonged digital engagement.)
                    </p>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* A CALMER KIND OF CONNECTION */}
      <section className="py-24 lg:py-32 soma-container text-center relative">
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-soma-forest italic">
            A calmer kind of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">connection.</span>
          </h2>
          <div className="text-xl text-stone-600 space-y-6 font-light leading-relaxed px-4">
            <p>We are the first generation navigating this level of constant cognitive demand.</p>
            <p>It is completely normal to feel overwhelmed by it.</p>
            <p className="font-medium text-soma-forest italic">
              Soma creates a non-judgmental space to explore this — recognising that many people rely on digital connection for their work, livelihoods, and social lives.
            </p>
          </div>
          
          <div className="mt-20 relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                I didn’t realise how much of my underlying anxiety was simply the result of never being offline. I hadn’t looked out a window without a podcast playing in years. This programme didn’t just help me reduce my screen time; it helped me relearn how to just be.
              </p>
              <div className="flex flex-col items-center mt-12 gap-2">
                <div className="w-12 h-[2px] bg-indigo-200 mb-2"></div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Client Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="pt-12 pb-24 lg:pb-32 soma-container text-center -mt-16 relative z-20">
        <div className="bg-stone-900 rounded-[64px] p-12 md:p-24 lg:p-32 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-10 backdrop-blur-md border border-white/20">
              <Focus size={24} className="text-blue-300" strokeWidth={1.5} />
            </div>
            <h2 className="text-[12px] font-bold text-blue-300 uppercase tracking-[0.4em] mb-10">Final Invitation</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-headline text-white mb-10 leading-[1.1] italic">
              Your attention is your life. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">It is time to choose where it goes.</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
              <Link 
                to="/contact?purpose=Digital Calm" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
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
