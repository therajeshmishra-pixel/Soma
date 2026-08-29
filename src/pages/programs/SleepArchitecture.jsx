import { useState, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../../components/ui/motion-wrappers';
import { 
  BrainCircuit, 
  Clock4, 
  Wind, 
  Moon, 
  Check, 
  ChevronDown, 
  ArrowRight, 
  Activity,
  Heart,
  Zap,
  ShieldCheck,
  ChevronRight,
  BatteryCharging,
  Eye,
  Calendar,
  Monitor
} from 'lucide-react';

const CHALLENGES = [
  { 
    Icon: BrainCircuit, 
    badge: 'Mental Load', 
    title: 'Your mind feels exhausted. But your body refuses to switch off.', 
    desc: 'You lie down tired, yet the mind continues replaying conversations, unfinished tasks, future worries, or random thoughts that refuse to settle. Sometimes sleep comes late. Sometimes it breaks at 2 or 3am. Sometimes the body sleeps, but the mind never fully rests. You wake up tired even after “sleeping.”',
    color: 'from-violet-500 to-indigo-500',
    bg: 'bg-violet-50'
  },
  { 
    Icon: Wind, 
    badge: 'Somatic Patterns', 
    title: 'Your breathing changes at night without you realising it.', 
    desc: 'Shallow breathing, chest breathing, subtle tension in the jaw, neck, or abdomen — these patterns quietly keep the system in a state of alertness. Most people never notice them until someone helps them observe carefully.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50'
  },
  { 
    Icon: Clock4, 
    badge: 'Circadian Disruption', 
    title: 'Your body clock feels out of rhythm.', 
    desc: 'Late-night alertness. Difficulty waking. Energy crashes during the day. Dependency on podcasts, scrolling, melatonin, or background noise just to fall asleep. These are often signs of a system struggling to regulate itself consistently.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50'
  }
];

const APPROACH_PILLARS = [
  { id: 1, label: 'Nervous System', icon: Zap, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { id: 2, label: 'Breathing Patterns', icon: Wind, color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { id: 3, label: 'Physical Tension', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { id: 4, label: 'Mental Overstimulation', icon: BrainCircuit, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 5, label: 'Emotional Carrying', icon: Heart, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { id: 6, label: 'Behavioural Rhythms', icon: Clock4, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

const CURRICULUM = [
  { 
    week: 'Weeks 1–2', 
    title: 'Phase 1 — Rhythm Awareness', 
    desc: 'The first phase focuses on observation. Together, we begin understanding your current sleep patterns, stress responses, breathing tendencies, evening habits, mental overstimulation patterns, and physical holding patterns in the body.', 
    outcome: 'Most people realise for the first time that sleep difficulties are connected to much more than “not being able to sleep.”',
    gradient: 'from-amber-400 to-rose-400'
  },
  { 
    week: 'Weeks 3–5', 
    title: 'Phase 2 — Regulation', 
    desc: 'This phase introduces carefully guided therapeutic practices designed to help the system gradually settle. Depending on your needs, this may include breath regulation, therapeutic movement, nervous system calming, and recovery-oriented routines.', 
    outcome: 'The goal is not sedation. The goal is regulation. Meaningful shifts occur: softer breathing, easier sleep onset, fewer wake-ups.',
    gradient: 'from-rose-400 to-indigo-400'
  },
  { 
    week: 'Weeks 6–8', 
    title: 'Phase 3 — Deep Rest Integration', 
    desc: 'This final phase focuses on helping these changes become sustainable in real life. You build a personalised framework that supports deeper recovery, long-term consistency, and realistic evening structure.', 
    outcome: 'The intention is not dependency on the programme. It is helping you leave with tools and understanding you can continue using independently.',
    gradient: 'from-indigo-400 to-sky-400'
  },
];

const FAQS = [
  { q: 'Is this a group programme or private therapy?', a: 'The core programme is conducted in small cohorts to create structure and continuity, while still allowing personal attention. Optional one-to-one therapeutic support may also be available.' },
  { q: 'Is this conducted online or offline?', a: 'The programme is currently conducted online, allowing participants to join comfortably from home.' },
  { q: 'What if I miss a session?', a: 'Where possible, recordings and guidance materials are provided so you can continue without losing continuity.' },
  { q: 'How much daily practice is expected?', a: 'The programme is designed realistically for working adults. Most daily practices range between 20–30 minutes.' },
  { q: 'Do I need prior yoga experience?', a: 'No prior yoga experience is required. The practices are adapted carefully to individual needs and comfort levels.' },
  { q: 'What happens after the 8 weeks?', a: 'You leave with a clearer understanding of your personal sleep patterns, along with practical tools and practices designed to support long-term regulation and recovery.' },
];

const EXHAUSTION_EFFECTS = [
  { name: 'Energy', delay: 0 },
  { name: 'Focus', delay: 0.1 },
  { name: 'Patience', delay: 0.2 },
  { name: 'Mood', delay: 0.3 },
  { name: 'Digestion', delay: 0.4 },
  { name: 'Work Performance', delay: 0.5 },
  { name: 'Emotional Resilience', delay: 0.6 }
];

const FORMAT_ITEMS = [
  '8-week guided programme',
  'Small, carefully curated cohorts',
  'Optional 1:1 therapeutic support',
  'Online sessions',
  'Structured weekly guidance',
  'Simple home practices between sessions',
  'Resources and recordings for continued practice'
];

const RIGHT_FOR_YOU = [
  'your sleep feels light, fragmented, or inconsistent',
  'stress continues into the night',
  'you wake feeling unrefreshed',
  'your mind stays active at bedtime',
  'you feel physically tired but mentally alert',
  'you are looking for a calmer, sustainable approach rather than quick fixes'
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

export default function SleepArchitecture() {
  const [openFaq, setOpenFaq] = useState(0);
  const methodologyRef = useRef(null);

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden">
      <SEO 
        title="Sleep Therapy Programme | SOMA" 
        description="When sleep keeps slipping away, Soma helps you understand why. An 8-week therapeutic programme for deep restoration." 
        canonical="https://www.somamukherjee.com/programs/sleep" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">Sleep Therapy</span>
        </nav>
      </section>

      {/* HERO SECTION: Dynamic & Visual */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <AnimatedBlob className="top-10 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/40 to-violet-300/40 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300/40 to-amber-200/40 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8 md:mb-12 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700">Sleep Therapy Programme</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  When sleep keeps slipping away, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-400 italic">Soma helps you understand why.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-indigo-200/50 mb-10 space-y-6">
                  <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">
                    An 8-week therapeutic programme for people who are tired of being tired — designed to uncover the patterns behind restless nights, unsettled breathing, and waking up unrefreshed.
                  </p>
                  <div className="text-lg text-stone-500 leading-relaxed italic font-light space-y-4">
                    <p>Not another collection of sleep tips.</p>
                    <p>Not a quick fix.</p>
                    <p>A thoughtful, structured process that helps your system gradually return to rest.</p>
                    <p className="pt-4 font-medium text-stone-600">Private. Calm. Personalised to how your body and mind are actually responding.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Sleep Therapy" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-indigo-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-rose-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/Photos/Sleep_Architecture_Image.png" 
                    alt="Restorative sleep practice" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent z-0"></div>
                  
                  {/* Floating Elements on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-200 mb-2">The Goal</p>
                    <p className="text-lg font-headline italic">Biological Restoration</p>
                  </motion.div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* THE FORGOTTEN ART OF REST - Cinematic Dark Section */}
      <section className="py-24 lg:py-32 bg-soma-forest text-white relative overflow-hidden">
        <AnimatedBlob className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-headline leading-[1.1]"
          >
            Sleep is not something you force. <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-rose-300 drop-shadow-lg">It is something your system allows.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <FadeInLeft>
              <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                <p>Most people struggling with sleep are not “doing sleep wrong.”</p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                  <p className="font-normal text-indigo-200 italic text-xl">They are carrying a nervous system that has forgotten how to settle.</p>
                </div>
                <p>
                  The body stays alert long after the day has ended. Thoughts continue looping at night. Breathing becomes shallow without noticing. Fatigue builds quietly over time.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="space-y-8">
                <p className="text-lg text-stone-300 font-light">
                  Many people adapt to this for years. Until exhaustion starts affecting:
                </p>
                <div className="flex flex-wrap gap-3">
                  {EXHAUSTION_EFFECTS.map((effect, idx) => (
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
                <p className="font-normal text-indigo-200 pt-4 text-lg italic border-t border-white/10 mt-8">
                  Soma’s work begins by understanding these patterns carefully — not by rushing toward temporary solutions.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* DISCOMFORT SECTION (YOU MAY RECOGNISE SOME OF THIS) - Multicolored Cards */}
      <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="soma-container max-w-screen-2xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h5 className="mb-6 text-stone-400">Subjective Signs</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest max-w-4xl mx-auto">
              You may recognise <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">some of this.</span>
            </h2>
          </div>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-8">
            {CHALLENGES.map((c, i) => (
              <StaggerItem key={i}>
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} rounded-[48px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  <div className="soma-card h-full flex flex-col focus-within:ring-2 focus-within:ring-indigo-500 focus-within:outline-none border-none hover:-translate-y-3 transition-all duration-500 bg-white shadow-xl relative z-10 p-10 md:p-12 overflow-hidden">
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
        <AnimatedBlob className="top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInLeft>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-soma-forest leading-[1.1] mb-10">
                What makes <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Soma's approach</span> different?
              </h2>
              <div className="space-y-8 text-lg text-stone-600 font-light leading-relaxed mb-12">
                <p>
                  Most sleep programmes focus only on sleep habits. Soma works more deeply — mapping the hidden relationships that keep your system in overdrive.
                </p>
                <p>
                  Her approach combines therapeutic yoga, somatic awareness, breath-based regulation, and years of working with people navigating high mental load and chronic stress.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-stone-50 to-stone-100 rounded-[32px] border border-stone-200 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400"></div>
                <p className="text-soma-forest font-medium italic text-xl leading-relaxed">
                  "This is not rigid wellness advice. And it is not mystical language wrapped in soft aesthetics. It is calm, observant, practical therapeutic work."
                </p>
              </div>
            </FadeInLeft>

            {/* Infographic Grid */}
            <FadeInRight>
              <div className="relative">
                <div className="absolute inset-0 bg-stone-50/50 rounded-[64px] border border-stone-100 shadow-2xl -rotate-2 scale-105 -z-10"></div>
                <div className="bg-white rounded-[64px] p-8 md:p-12 shadow-xl border border-stone-50 relative z-10 grid grid-cols-2 gap-4 md:gap-6">
                  {/* Center connective element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-8 border-stone-50">
                    <Moon size={32} className="text-soma-forest" strokeWidth={1} />
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
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* HOW THE PROGRAMME WORKS (VISUAL TIMELINE CURRICULUM) */}
      <section ref={methodologyRef} className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        {/* Dark Mode Animated Backgrounds */}
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
        <AnimatedBlob className="bottom-0 -left-1/4 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <h5 className="mb-6 text-stone-400">The Curriculum</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">How the 8-week journey works.</h2>
            <p className="text-xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed">
              Sustainable sleep restoration rarely happens through intensity. It happens through <span className="font-medium text-white italic">consistency, regulation, and understanding.</span>
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <h5 className="mb-6 md:mb-8 text-indigo-600 relative z-10">Programme Format</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-8 relative z-10">Designed to feel supportive, not overwhelming.</h3>
                
                <div className="p-6 bg-stone-50 rounded-3xl mb-12 relative z-10 flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <Clock4 size={20} />
                  </div>
                  <p className="text-stone-600 font-light text-lg">
                    Time commitment: <br className="sm:hidden"/> <span className="font-semibold text-soma-forest">20–30 minutes</span> of daily personal practice, alongside weekly sessions.
                  </p>
                </div>
                
                <div className="space-y-6 relative z-10 mt-auto">
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
              <div className="h-full bg-gradient-to-br from-rose-50 to-amber-50 p-10 md:p-16 rounded-[48px] shadow-xl border border-white flex flex-col relative overflow-hidden">
                <h5 className="mb-6 md:mb-8 text-rose-600">Considerations</h5>
                <h3 className="text-4xl font-headline text-soma-forest italic mb-10">Is this programme right for you?</h3>
                
                <ul className="space-y-6 mb-12 flex-1">
                  {RIGHT_FOR_YOU.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-5 text-stone-700 font-light text-lg leading-relaxed bg-white/40 p-4 rounded-2xl">
                      <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-rose-200/50 mt-auto">
                  <div className="flex items-start gap-5 bg-white/60 p-6 rounded-3xl">
                    <ShieldCheck size={28} className="text-stone-400 shrink-0" strokeWidth={1.5} />
                    <p className="text-[13px] text-stone-600 font-light leading-relaxed italic">
                      This programme is not positioned as medical treatment or emergency care for severe sleep disorders. Individuals with clinical sleep conditions should continue appropriate medical guidance alongside therapeutic support.
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
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-soma-forest italic">
            A more personal kind of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">therapeutic support.</span>
          </h2>
          <div className="text-xl text-stone-600 space-y-6 font-light leading-relaxed px-4">
            <p>Sleep difficulties are deeply personal.</p>
            <p>Many people feel embarrassed by how much it affects them. Others have spent years quietly managing exhaustion without speaking about it.</p>
            <p className="font-medium text-soma-forest italic">
              Soma creates a space that is calm, respectful, and non-performative — where people do not need to pretend they are functioning better than they actually are.
            </p>
          </div>
          
          <div className="mt-20 relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-200 to-rose-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                I had reached a point where I was exhausted all day but still unable to properly rest at night. What changed for me was not just sleep itself — it was understanding how constantly alert my system had become. The process felt thoughtful, gentle, and surprisingly practical.
              </p>
              <div className="flex flex-col items-center mt-12 gap-2">
                <div className="w-12 h-[2px] bg-indigo-200 mb-2"></div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Client Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white pb-32 relative border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-0 relative z-10">
          <div className="text-center mb-20">
            <h5 className="mb-6 text-stone-400">Clarifications</h5>
            <h2 className="text-soma-forest italic text-4xl md:text-5xl font-headline">Frequently Asked Questions.</h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-stone-50 rounded-[32px] hover:bg-stone-100/80 transition-colors duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
                >
                  <span className={`text-xl font-headline italic pr-8 transition-colors ${openFaq === i ? 'text-indigo-600' : 'text-soma-forest group-hover:text-indigo-600'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: openFaq === i ? 180 : 0, color: openFaq === i ? '#4f46e5' : '#a8a29e' }}
                    className="transition-colors shrink-0 bg-white p-3 rounded-full shadow-sm"
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-stone-600 font-light leading-relaxed text-lg border-t border-stone-200 pt-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Massive Visual Anchor */}
      <section className="pt-12 pb-24 lg:pb-32 soma-container text-center -mt-16 relative z-20">
        <div className="bg-stone-900 rounded-[64px] p-12 md:p-24 lg:p-32 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-10 backdrop-blur-md border border-white/20">
              <Moon size={24} className="text-indigo-300" strokeWidth={1.5} />
            </div>
            <h2 className="text-[12px] font-bold text-indigo-300 uppercase tracking-[0.4em] mb-10">Final Invitation</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-headline text-white mb-10 leading-[1.1] italic">
              Begin with understanding, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-rose-300">not force.</span>
            </h3>
            <p className="text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Better sleep rarely begins with trying harder. <br className="hidden sm:block"/>
              It begins when the body no longer feels the need to stay alert.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact?purpose=Sleep Therapy" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-rose-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
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
