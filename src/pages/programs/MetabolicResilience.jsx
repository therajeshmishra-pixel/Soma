import { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, FadeIn } from '../../components/ui/motion-wrappers';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  Activity,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const DEPL_SIGNS = [
  'Energy becomes less reliable.',
  'Recovery takes longer.',
  'Stress affects the body faster.',
  'Digestion becomes less predictable.',
  'Sleep restores less than it should.'
];

const FIRST_SIGNS = [
  'reduced morning readiness',
  'heavier afternoons',
  'dependence on stimulation to stay functional',
  'slower recovery after stress',
  'digestive inconsistency',
  'energy that no longer feels stable across the day'
];

const METABOLISM_REFLECTS = [
  'how efficiently the body recovers',
  'how well it processes nourishment',
  'how the nervous system regulates stress',
  'how stable energy production remains under pressure',
  'how adaptable the body stays across time'
];

const OFTEN_NOTICE = [
  {
    title: 'Energy feels inconsistent',
    desc: 'You may still perform well, but the system no longer feels dependable throughout the day.'
  },
  {
    title: 'Stress affects the body more visibly',
    desc: 'Sleep, digestion, appetite, weight, and energy all become more reactive under pressure.'
  },
  {
    title: 'Recovery weakens',
    desc: 'Rest helps temporarily, but the body no longer rebounds with the same efficiency.'
  },
  {
    title: 'Digestion feels less cooperative',
    desc: 'Meals sit differently. Comfort changes. The body seems slower to settle into true repair and absorption.'
  },
  {
    title: 'Caffeine begins replacing restoration',
    desc: 'Stimulation starts compensating for biological recovery rather than supporting it.'
  }
];

const INTEGRATES = [
  'yoga therapy',
  'somatic intelligence',
  'nervous-system regulation',
  'digestive support',
  'recovery physiology',
  'sustainable metabolic rhythms'
];

const CHRONIC_STRESS_EFFECTS = [
  'digestion becomes less efficient',
  'recovery becomes shallower',
  'inflammation patterns may increase',
  'energy regulation becomes unstable',
  'restorative processes weaken'
];

const INCLUDES = [
  'weekly live guided somatic sessions',
  'personalized metabolic review',
  'digestive and recovery support',
  'vitality movement library',
  'structured integration guidance',
  'daily 1:1 text support'
];

const RELEVANT_FOR = [
  'feel persistently underpowered',
  'experience unstable energy',
  'notice digestive changes under stress',
  'recover more slowly than before',
  'feel biologically depleted despite functioning externally',
  'are seeking a more serious and sustainable approach to metabolic wellbeing'
];

const PARTICULARLY_FOR = [
  'high-responsibility professionals',
  'individuals under chronic stress',
  'people with demanding cognitive workloads',
  'those who have normalised low-grade depletion for years'
];

const WHAT_THIS_IS_NOT = [
  'a weight-loss challenge',
  'a restrictive food system',
  'a metabolic “hack”',
  'a rapid transformation protocol',
  'a detox culture programme',
  'a body-image intervention'
];

const FAQS = [
  { q: 'Is this a weight-loss programme?', a: 'No. The programme focuses on metabolic resilience, recovery physiology, digestive steadiness, and sustainable energy regulation.' },
  { q: 'Is gut health part of the work?', a: 'Where relevant, the programme may thoughtfully include digestive-supportive strategies involving prebiotic nourishment, probiotic awareness, and nervous-system regulation — always within a grounded therapeutic framework.' },
  { q: 'Is the programme personalised?', a: 'Yes. The structure remains intimate specifically so the work can adapt to the individual’s metabolic patterns and recovery needs.' },
  { q: 'Can this complement medical care?', a: 'Yes, where appropriate. Existing health conditions and treatments should always be discussed privately before beginning.' }
];

// Animated Blob Component
const AnimatedBlob = ({ className }) => (
  <motion.div 
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.1, 0.9, 1],
      borderRadius: ["40%", "60%", "30%", "40%"]
    }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className={`absolute ${className}`}
  />
);

export default function MetabolicResilience() {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-emerald-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Metabolic Resilience | SOMA" 
        description="Restore biological steadiness, digestive resilience, and sustainable energy through a more intelligent understanding of how the body responds to stress and recovery." 
        canonical="https://www.somamukherjee.com/programs/metabolic" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">Metabolic Resilience</span>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <AnimatedBlob className="top-0 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/40 to-amber-200/40 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/40 to-stone-200/40 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 border border-stone-200 mb-8 md:mb-12 shadow-sm">
                  <Activity size={14} className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700">Metabolic Resilience</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  When the body stops recovering the way it once did, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 italic">discipline is rarely the real issue.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-stone-200 mb-10 space-y-6">
                  <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">
                    Some forms of depletion are obvious.<br/>
                    <span className="italic">Others arrive quietly.</span>
                  </p>
                  
                  <div className="bg-white/60 p-6 rounded-2xl border border-stone-100 mt-6">
                    <ul className="space-y-2">
                      {DEPL_SIGNS.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-600 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-lg text-stone-600 leading-relaxed pt-4">
                    Most people adapt gradually.<br/><br/>
                    <span className="italic font-medium text-stone-800">Until functioning itself begins to feel metabolically expensive.</span>
                  </p>
                  
                  <p className="text-lg text-stone-800 leading-relaxed font-medium pt-2">
                    Metabolic Resilience is Soma’s therapeutic programme for individuals seeking to restore biological steadiness, digestive resilience, and sustainable energy through a more intelligent understanding of how the body responds to stress, recovery, nourishment, and daily load.
                  </p>
                  
                  <p className="text-lg text-stone-500 italic leading-relaxed pt-2">
                    Not a detox.<br/>
                    Not a weight-loss programme.<br/>
                    Not metabolic hype.<br/><br/>
                    <span className="font-bold text-emerald-700">A structured, clinically thoughtful process for helping the body function more reliably again.</span>
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Metabolic Resilience" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-emerald-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Inquire Privately <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                  <Link 
                    to="/assessment" 
                    className="min-h-[56px] px-10 py-4 bg-white/80 backdrop-blur-md text-soma-forest border border-stone-200 rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                  >
                    Metabolic Assessment
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInRight>
              <div className="relative group lg:w-4/5 lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-amber-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/Photos/MetabolicResilience.png" 
                    alt="Metabolic Health" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent z-0"></div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE BODY LOSES RESILIENCE QUIETLY */}
      <section className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Section 1</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">The body loses resilience quietly</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeInLeft>
              <div className="space-y-6">
                <p className="text-2xl text-stone-300 font-light leading-relaxed">
                  Metabolic strain rarely begins where people think it does.
                </p>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mt-8 mb-8 space-y-2 text-stone-300 italic text-lg">
                  <p>For many individuals, the first signs are subtle:</p>
                </div>
                
                <ul className="space-y-4">
                  {FIRST_SIGNS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-emerald-200 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-8 h-full flex flex-col justify-center">
                <p className="text-xl text-stone-300 font-light leading-relaxed italic">
                  Nothing appears dramatically wrong.
                </p>
                <p className="text-xl text-stone-300 font-light leading-relaxed">
                  Yet the body gradually begins operating with less adaptability, less flexibility, and less reserve.
                </p>
                <p className="text-xl text-stone-300 font-light leading-relaxed">
                  Most people continue pushing through this phase for years.
                </p>
                <div className="bg-stone-800 p-8 rounded-[32px] border border-stone-700 mt-8">
                  <p className="text-2xl font-headline italic text-white leading-relaxed">
                    The body continues compensating — <span className="text-emerald-400">until compensation itself becomes exhausting.</span>
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT THIS PROGRAMME IS REALLY ADDRESSING */}
      <section className="py-24 bg-stone-50">
        <div className="soma-container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 2</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What This Programme Is Really Addressing</h2>
            <p className="text-2xl text-stone-600 font-light">Not just energy.<br/>The systems responsible for <span className="italic font-medium">producing and sustaining it.</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <FadeIn>
              <div className="bg-white p-10 rounded-[40px] shadow-soft border border-stone-100 h-full flex flex-col justify-center">
                <p className="text-2xl font-headline text-stone-800 mb-6 italic leading-relaxed">
                  Metabolic health is often reduced to weight, calories, or appearance.
                </p>
                <p className="text-xl text-stone-600">
                  But biologically, metabolism reflects something much deeper:
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-emerald-50 p-10 rounded-[40px] shadow-inner border border-emerald-100 h-full">
                <ul className="space-y-4 mb-8">
                  {METABOLISM_REFLECTS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xl text-emerald-900 font-medium italic">This programme works at that level.</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-headline text-stone-700 italic mb-6">The focus is not forcing outcomes.</p>
            <div className="inline-block p-8 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-xl text-soma-forest font-light leading-relaxed">
                <span className="font-medium text-emerald-700 italic">It is improving the conditions that allow the body to function with greater steadiness and less internal friction.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT PEOPLE OFTEN NOTICE */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <AnimatedBlob className="top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-amber-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.3em] mb-4">Section 3</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What People Often Notice</h2>
            <p className="text-2xl text-stone-600 font-light italic">The body begins communicating before it breaks down.</p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {OFTEN_NOTICE.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-50 p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 h-full">
                  <h3 className="text-xl font-headline text-soma-forest mb-4 italic">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-2xl font-headline text-stone-700 italic mb-4">These are rarely isolated symptoms.</p>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              They are often signs of a system operating under prolonged physiological strain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOMA’S APPROACH */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Section 4</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-white mb-8 italic">Soma’s Approach</h2>
            <p className="text-2xl text-stone-300 font-light italic">Soma works with metabolism as a lived biological experience.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <FadeInLeft>
              <div className="bg-stone-800 p-10 rounded-[40px] border border-stone-700 h-full">
                <p className="text-xl text-stone-300 mb-6 font-light">Most metabolic programmes focus aggressively on control.</p>
                <p className="text-3xl font-headline text-emerald-300 mb-10 italic">Soma focuses on regulation.</p>
                <p className="text-lg text-stone-300 mb-6">Her work integrates:</p>
                <ul className="space-y-3 mb-10">
                  {INTEGRATES.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 font-light">
                      <Check size={16} className="text-emerald-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-stone-700">
                  <p className="text-xl text-amber-200 italic font-medium leading-relaxed">
                    This matters because metabolism does not function independently from the nervous system carrying it.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="h-full flex flex-col justify-center space-y-8">
                <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800">
                  <p className="text-xl font-headline text-white mb-6">When the body remains chronically stressed:</p>
                  <ul className="space-y-4">
                    {CHRONIC_STRESS_EFFECTS.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-400 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                  <p>
                    For some individuals, the work may also thoughtfully explore the role of gut ecology — including gentle attention to prebiotic nourishment, probiotic support, and digestive environments that help the body absorb and regulate more effectively.
                  </p>
                  <div className="pl-6 border-l-2 border-stone-700 space-y-2 text-stone-400 italic">
                    <p>Not trend-driven supplementation.</p>
                    <p>Not biohacking language.</p>
                  </div>
                  <p className="text-xl text-emerald-400 font-medium italic">
                    Just clinically sensible support where appropriate.
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE 8-WEEK PROCESS */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
        <AnimatedBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 5</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-6 italic">The 8-Week Process</h2>
            <div className="flex flex-wrap justify-center gap-4 text-emerald-700 font-medium italic text-lg">
              <span>Structured restoration.</span>
              <span>Intelligent pacing.</span>
              <span>Sustainable outcomes.</span>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Phase 01 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-slate-200">Phase 01</span>
                  <span className="text-sm text-stone-500 font-bold tracking-widest uppercase ml-2 mt-2">Weeks 1–2</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Metabolic Awareness</h3>
              </div>
              <div className="space-y-6 text-xl text-stone-600 font-light relative z-10">
                <p>The first phase focuses on understanding how your body currently behaves under stress, nourishment, fatigue, and recovery.</p>
                <p className="font-medium text-stone-800">This includes observing:</p>
                <div className="flex flex-wrap gap-3">
                  {['energy fluctuations', 'digestive patterns', 'recovery rhythms', 'stress responses', 'nervous-system activation', 'metabolic fatigue indicators'].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-stone-600 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-lg text-stone-500 italic mb-2">The goal is not immediate correction. It is accurate understanding.</p>
                  <p className="text-lg font-medium text-soma-forest">Primary focus: reducing metabolic confusion and identifying energy-drain patterns.</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 02 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-emerald-100">Phase 02</span>
                  <span className="text-sm text-stone-500 font-bold tracking-widest uppercase ml-2 mt-2">Weeks 3–5</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Digestive Regulation & Recovery</h3>
              </div>
              <div className="space-y-6 text-xl text-stone-600 font-light relative z-10">
                <p>This phase supports the body’s ability to move more consistently into repair, absorption, and restoration states.</p>
                <p className="font-medium text-stone-800">Depending on the individual, this may include:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['restorative somatic sequences', 'parasympathetic activation', 'therapeutic breath regulation', 'digestive-supportive movement', 'recovery-oriented pacing', 'nourishment rhythms', 'gentle gut-support practices where appropriate'].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-base text-stone-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-lg font-medium text-emerald-900 mb-4">This is where many participants begin noticing:</p>
                  <ul className="space-y-2 text-emerald-800 text-base mb-6 italic">
                    <li>~ improved digestive comfort</li>
                    <li>~ steadier energy</li>
                    <li>~ reduced heaviness</li>
                    <li>~ calmer physiological responses after stress</li>
                    <li>~ improved metabolic steadiness</li>
                  </ul>
                  <p className="text-lg text-emerald-700 font-medium">Not dramatic transformation. A body becoming more cooperative again.</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 03 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="px-6 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-amber-100">Phase 03</span>
                  <span className="text-sm text-stone-500 font-bold tracking-widest uppercase ml-2 mt-2">Weeks 6–8</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Vitality & Biological Resilience</h3>
              </div>
              <div className="space-y-6 text-xl text-stone-600 font-light relative z-10">
                <p>The final phase focuses on long-term metabolic sustainability.</p>
                <p className="font-medium text-stone-800">The work begins integrating:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['steadier energy production', 'stronger recovery capacity', 'improved tolerance to ordinary stress', 'healthier metabolic pacing', 'greater biological resilience', 'sustainable vitality rhythms'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"/> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-8 bg-amber-50 rounded-3xl border border-amber-100 text-center">
                  <p className="text-2xl text-soma-forest font-headline italic leading-relaxed">
                    Not intensity.<br/>
                    <span className="text-amber-700">A body that functions with greater reliability under real life.</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6, 7 & 8 */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden z-20">
        <AnimatedBlob className="top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          
          {/* Section 6 - What it includes */}
          <div className="bg-stone-800/40 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-700 backdrop-blur-md mb-16">
            <h5 className="mb-4 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em]">Section 6</h5>
            <h3 className="text-4xl font-headline text-white italic mb-6">What The Programme Includes</h3>
            <p className="text-xl text-stone-300 font-light mb-10">A carefully held therapeutic process designed for depth rather than volume.</p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {INCLUDES.map((item, i) => (
                <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-stone-300">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-lg text-emerald-200 italic font-medium">
              The live structure is intentionally intimate so the process remains adaptive, precise, and personal rather than generalized.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Who This Work Is For */}
            <FadeInLeft>
              <div className="h-full bg-stone-950 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-800 flex flex-col relative overflow-hidden">
                <h5 className="mb-4 text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em]">Section 7</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6">Who This Work Is For</h3>
                
                <p className="text-xl text-stone-300 font-light mb-8">Metabolic Resilience is often relevant for individuals who:</p>
                <div className="space-y-4 mb-10">
                  {RELEVANT_FOR.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-stone-300 font-light">
                      <Check size={18} className="text-emerald-500 mt-1 shrink-0" /> {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-stone-800">
                  <p className="text-lg text-stone-400 mb-6 font-medium">Particularly relevant for:</p>
                  <ul className="space-y-3">
                    {PARTICULARLY_FOR.map((item, i) => (
                      <li key={i} className="text-stone-400 text-sm italic">~ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInLeft>

            {/* What This Is Not */}
            <FadeInRight>
              <div className="h-full bg-stone-800/80 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-700 flex flex-col relative overflow-hidden">
                <h5 className="mb-4 text-[10px] font-bold text-rose-400 uppercase tracking-[0.3em]">Section 8</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6">What This Is Not</h3>
                
                <p className="text-xl text-stone-300 font-light mb-8">This programme is intentionally not positioned as:</p>
                <div className="space-y-4 mb-10">
                  {WHAT_THIS_IS_NOT.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-rose-200 font-light italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></div> {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-stone-700">
                  <p className="text-xl text-emerald-300 font-medium leading-relaxed">
                    The work is centred around biological resilience, digestive steadiness, recovery capacity, and sustainable energy regulation.
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CLIENT REFLECTION */}
      <section className="py-24 soma-container text-center relative">
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-amber-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                The shift was not dramatic. It was steadier than that. My body began feeling more reliable again — calmer after meals, less reactive under stress, and more capable of sustaining energy throughout the day.
              </p>
              <div className="flex flex-col items-center mt-12 gap-2">
                <div className="w-12 h-[2px] bg-slate-300 mb-2"></div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Client Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="soma-section-tight soma-container pb-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-24">
            <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4">Clarifications</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest italic">FAQ</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group focus:outline-none"
                >
                  <span className={`text-xl font-headline italic ${activeFaq === i ? 'text-emerald-700' : 'text-stone-700 group-hover:text-emerald-600'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: activeFaq === i ? 180 : 0, color: activeFaq === i ? '#047857' : '#a8a29e' }}
                    className="transition-colors shrink-0 ml-4"
                  >
                    <ChevronDown size={24} strokeWidth={1.5} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-stone-600 text-lg font-light leading-relaxed">
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

      {/* FINAL CTA SECTION */}
      <section className="pt-24 pb-24 lg:pb-32 soma-container text-center relative z-20">
        <div className="bg-stone-900 rounded-[64px] p-12 md:p-20 lg:p-32 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-[12px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-10">Final Close</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-headline text-white mb-12 leading-[1.1] italic">
              A resilient body is not built through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">pressure alone.</span>
            </h3>
            
            <div className="space-y-6 text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              <p>It is built through recovery, regulation, nourishment, and steadiness repeated over time.</p>
              <p className="text-amber-200 italic font-medium">Metabolic Resilience exists to help restore that foundation.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact?purpose=Metabolic Resilience" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-amber-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Inquire Privately <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/assessment" 
                className="min-h-[64px] px-14 py-5 bg-stone-800/50 backdrop-blur-md text-white border border-stone-700 rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto flex items-center justify-center"
              >
                Begin Metabolic Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
