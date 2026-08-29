import { useState, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, FadeIn } from '../../components/ui/motion-wrappers';
import { 
  Briefcase, 
  Shield, 
  Zap, 
  Check, 
  ChevronDown, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  Users,
  ChevronRight,
  Eye,
  Activity,
  Layers,
  Wind
} from 'lucide-react';

const INTERNAL_BUT = [
  'recovery shortens',
  'attention becomes crowded',
  'the body stays alert longer than it should',
  'rest stops feeling fully restorative',
  'silence fills with unfinished thinking'
];

const SUBTLE_ADAPTATIONS = [
  'A jaw that never fully softens.',
  'Breathing that remains shallow during rest.',
  'A nervous system that anticipates before it relaxes.',
  'Attention that feels occupied even in silence.'
];

const CONSTANT_READINESS = [
  'emotionally available to everyone else',
  'mentally switched on beyond working hours',
  'physiologically unable to fully downshift'
];

const RELEVANT_FOR = [
  'founders',
  'CXOs',
  'senior leadership teams',
  'entrepreneurs',
  'high-responsibility professionals',
  'emotionally burdened decision-makers'
];

const EXPERIENCING = [
  'decision fatigue',
  'mental overcrowding',
  'emotional compression',
  'shallow recovery',
  'chronic overstimulation',
  'leadership isolation',
  'nervous-system exhaustion beneath competence'
];

const CARRIED_THROUGH = [
  'breath',
  'muscle tension',
  'vigilance patterns',
  'sleep quality',
  'nervous-system pacing',
  'cognitive fatigue',
  'emotional holding'
];

const PHASE_1_FOCUS = [
  'nervous-system assessment',
  'fatigue mapping',
  'recovery patterns',
  'cognitive overload',
  'stress physiology',
  'physical manifestations of pressure'
];

const PHASE_2_INCLUDE = [
  'nervous-system downregulation',
  'restorative breathwork',
  'therapeutic movement',
  'cognitive decompression',
  'emotional regulation support',
  'somatic recovery practices',
  'recovery pacing'
];

const PHASE_3_SUPPORTS = [
  'steadier internal pacing',
  'calmer decision-making',
  'improved recovery capacity',
  'healthier energetic boundaries',
  'more sustainable leadership rhythms',
  'deeper access to clarity and presence'
];

const STRUCTURED_TO_FEEL = [
  'calm',
  'confidential',
  'non-performative',
  'psychologically safe',
  'intellectually grounded',
  'operationally realistic'
];

const FORMAT_MAY_INCLUDE = [
  'private 1:1 sessions',
  'online or in-person engagement',
  'flexible scheduling',
  'between-session guidance',
  'tailored therapeutic support'
];

const NO_LIST = [
  'No organisational reporting.',
  'No wellness dashboards.',
  'No performance tracking systems.',
  'No public-facing participation.'
];

const WHAT_LEADERS_NOTICE = [
  'clearer internal pacing',
  'reduced background urgency',
  'improved nervous-system steadiness',
  'more spacious thinking',
  'less emotional friction',
  'deeper recovery',
  'calmer presence under pressure',
  'feeling less internally compressed'
];

const FAQS = [
  { q: 'Is this executive coaching?', a: 'No. Executive Sanctuary is a private somatic and therapeutic engagement focused on nervous-system recovery, internal steadiness, and the embodied effects of sustained responsibility.' },
  { q: 'Is this confidential?', a: 'Entirely. Privacy and discretion are central to the structure of the work.' },
  { q: 'Is this designed only for burnout?', a: 'No. Many individuals seek this work before reaching visible burnout. Often, the goal is preventing prolonged internal depletion from becoming more severe.' },
  { q: 'Can this fit into demanding schedules?', a: 'Yes. The engagement is designed around the realities of leadership life and high-responsibility environments.' },
];

// Animated Blob Component for liveness
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

export default function ExecutiveSanctuary() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Executive Sanctuary | SOMA" 
        description="A private space for leaders carrying sustained pressure. A deeply confidential space for recalibration." 
        canonical="https://www.somamukherjee.com/programs/sanctuary" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">Executive Sanctuary</span>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <AnimatedBlob className="top-0 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-sky-300/30 to-indigo-300/30 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-slate-300/30 to-zinc-200/30 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 md:mb-12 shadow-sm">
                  <ShieldCheck size={14} className="text-slate-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700">Executive Sanctuary</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  A private space for leaders carrying <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-slate-500 italic">sustained pressure.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-slate-200 mb-10 space-y-6">
                  <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">
                    High responsibility changes the nervous system quietly.
                  </p>
                  <p className="text-lg text-stone-500 leading-relaxed italic font-light pt-2">
                    The meetings continue.<br/>
                    The decisions continue.<br/>
                    Performance continues.
                  </p>
                  <div className="bg-white/60 p-6 rounded-2xl border border-stone-100 mt-6">
                    <p className="text-lg text-stone-800 font-medium mb-4">But internally:</p>
                    <ul className="space-y-2">
                      {INTERNAL_BUT.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-600 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-lg text-stone-600 leading-relaxed pt-4">
                    Most leaders learn how to function through this.<br/>
                    Very few have a space designed for recovery from it.
                  </p>
                  <p className="text-lg text-stone-800 leading-relaxed font-medium pt-2">
                    Executive Sanctuary is Soma’s private 1:1 therapeutic engagement for leaders, founders, and high-responsibility individuals seeking steadiness, clarity, and nervous-system restoration beneath sustained performance demands.
                  </p>
                  <p className="text-lg text-stone-500 italic leading-relaxed pt-2">
                    Not coaching.<br/>
                    Not executive optimisation.<br/>
                    A deeply confidential space for recalibration.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Executive Sanctuary" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Inquire Privately <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                  <Link 
                    to="/contact?purpose=Executive Consultation" 
                    className="min-h-[56px] px-10 py-4 bg-white/80 backdrop-blur-md text-soma-forest border border-stone-200 rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                  >
                    Executive Consultation
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInRight>
              <div className="relative group lg:w-4/5 lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-slate-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/Photos/Executive_Sanctury.png" 
                    alt="Executive presence" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex-col items-center justify-center text-stone-300">
                    <Shield size={64} strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent z-0"></div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE INVISIBLE COST OF LEADERSHIP */}
      <section className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.3em] mb-4">Section 1</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">The Invisible Cost of Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeInLeft>
              <div className="space-y-6">
                <p className="text-2xl text-stone-300 font-light leading-relaxed">
                  Leadership pressure is often carried physically before it is recognised mentally.
                </p>
                <p className="text-xl text-stone-400 font-light leading-relaxed">
                  The body adapts to prolonged responsibility in subtle ways.
                </p>
                <div className="pl-6 border-l-2 border-stone-700 mt-8 space-y-4">
                  {SUBTLE_ADAPTATIONS.map((item, i) => (
                    <p key={i} className="text-lg text-stone-300 italic">{item}</p>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-6">
                <p className="text-xl text-stone-300 font-light leading-relaxed mb-6">
                  Over time, many leaders begin living in a constant state of internal readiness:
                </p>
                <ul className="space-y-4 mb-10">
                  {CONSTANT_READINESS.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sky-200 font-light text-lg bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-stone-800 p-8 rounded-[32px] border border-stone-700">
                  <p className="text-2xl font-headline italic text-white leading-relaxed">
                    From the outside, this can look like resilience.<br/><br/>
                    <span className="text-sky-300">Internally, it often feels like carrying a system that never completely powers down.</span>
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHO THIS SPACE IS FOR */}
      <section className="py-24 bg-stone-50">
        <div className="soma-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 2</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">Who This Space is For</h2>
            <p className="text-2xl text-stone-600 font-light">For people who are still functioning — but no longer recovering properly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <FadeIn>
              <div className="bg-white p-10 rounded-[40px] shadow-soft border border-stone-100 h-full">
                <h3 className="text-2xl font-headline text-soma-forest mb-6 italic">Executive Sanctuary is particularly relevant for:</h3>
                <ul className="space-y-4">
                  {RELEVANT_FOR.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-600 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-100 p-10 rounded-[40px] shadow-inner border border-slate-200 h-full">
                <h3 className="text-2xl font-headline text-soma-forest mb-6 italic">Especially those experiencing:</h3>
                <div className="flex flex-wrap gap-3">
                  {EXPERIENCING.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-stone-700 rounded-full text-sm border border-slate-200 shadow-sm">{item}</span>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200">
                  <p className="text-lg text-soma-forest font-medium italic">
                    Not because they are incapable.<br/>
                    <span className="text-sky-700">Because sustained responsibility accumulates inside the body over time.</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SOMA'S APPROACH */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <AnimatedBlob className="top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-slate-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.3em] mb-4">Section 3</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">Soma’s Approach</h2>
            <p className="text-2xl text-stone-600 font-light">Soma works where leadership pressure actually lives.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <div className="space-y-6 text-xl text-stone-600 font-light leading-relaxed">
                <p>Most executive wellbeing approaches remain cognitive.</p>
                <p className="text-2xl font-headline text-soma-forest italic">Soma’s work is somatic.</p>
                <p>Because pressure is not experienced only through thought.</p>
                
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 mt-8 mb-8">
                  <p className="text-lg font-medium text-stone-800 mb-4">It is carried through:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {CARRIED_THROUGH.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-stone-600">
                        <Check size={16} className="text-sky-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  This is why many high-performing individuals continue feeling exhausted even after rest.<br/><br/>
                  <span className="font-medium text-soma-forest">The body remains braced long after the workday ends.</span>
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-stone-900 text-white p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                
                <p className="text-xl font-light leading-relaxed mb-10 relative z-10">
                  With over two decades inside high-performance corporate environments, Soma understands the difference between ordinary stress and sustained executive load.
                </p>
                
                <p className="text-2xl font-headline italic text-sky-200 mb-10 relative z-10">
                  Her approach is calm, observant, private, and psychologically precise.
                </p>
                
                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex items-center gap-3 text-stone-300 font-light"><div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div> No performance language.</li>
                  <li className="flex items-center gap-3 text-stone-300 font-light"><div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div> No exaggerated wellness culture.</li>
                  <li className="flex items-center gap-3 text-stone-300 font-light"><div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div> No forced vulnerability.</li>
                </ul>

                <div className="pt-8 border-t border-stone-700 relative z-10">
                  <p className="text-xl italic font-medium text-white">
                    Just intelligent therapeutic work designed for people carrying significant responsibility.
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE PROCESS */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
        <AnimatedBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 4</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-6 italic">The Process</h2>
            <p className="text-2xl text-stone-600 font-light">A structured but deeply personalised engagement.</p>
          </div>

          <div className="space-y-16">
            
            {/* Phase 01 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-slate-200">Phase 01</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Decompression</h3>
              </div>
              <p className="text-xl text-stone-600 font-light mb-8 leading-relaxed">
                The work begins with understanding how pressure is currently being carried. This phase focuses on:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {PHASE_1_FOCUS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"/> {item}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                <p className="text-xl text-soma-forest font-light italic leading-relaxed">
                  For many leaders, this is the first environment in a long time where the system no longer needs to remain defended.
                </p>
              </div>
            </motion.div>

            {/* Phase 02 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-sky-100">Phase 02</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Regulation & Recovery</h3>
              </div>
              <p className="text-xl text-stone-600 font-light mb-8 leading-relaxed">
                Once pressure patterns become clearer, Soma begins building a personalised therapeutic process. Depending on the individual, this may include:
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {PHASE_2_INCLUDE.map((item, i) => (
                  <span key={i} className="px-5 py-3 bg-stone-50 border border-stone-200 rounded-full text-stone-700 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 text-center">
                <p className="text-2xl text-soma-forest font-headline italic leading-relaxed">
                  The goal is not to increase output.<br/>
                  <span className="text-sky-700">It is to reduce internal friction.</span>
                </p>
              </div>
            </motion.div>

            {/* Phase 03 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-indigo-100">Phase 03</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Sustainable Leadership Rhythm</h3>
              </div>
              <p className="text-xl text-stone-600 font-light mb-8 leading-relaxed">
                The final phase focuses on long-term integration.<br/><br/>
                Because pressure may continue.<br/>
                But the way the body carries it can change significantly.
              </p>
              <p className="text-lg text-stone-500 font-medium mb-6">This phase supports:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {PHASE_3_SUPPORTS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"/> {item}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 text-center">
                <p className="text-2xl text-soma-forest font-headline italic leading-relaxed">
                  Not through force.<br/>
                  <span className="text-indigo-700">Through regulation.</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 — THE EXPERIENCE & CONFIDENTIALITY */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden z-20">
        <AnimatedBlob className="top-0 right-0 w-[600px] h-[600px] bg-slate-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Experience */}
            <FadeInLeft>
              <div className="h-full bg-stone-800/40 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-700 backdrop-blur-md flex flex-col relative overflow-hidden">
                <h5 className="mb-4 text-[10px] font-bold text-sky-400 uppercase tracking-[0.3em]">Section 5</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6">The Experience</h3>
                <p className="text-xl text-stone-300 font-light mb-10">Designed for privacy, depth, and discretion.</p>
                
                <p className="text-lg text-stone-400 mb-6">Executive Sanctuary is intentionally structured to feel:</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {STRUCTURED_TO_FEEL.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-stone-900 border border-stone-700 rounded-full text-stone-300 text-sm">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-stone-400 mb-6">Format may include:</p>
                <ul className="space-y-4 mb-10">
                  {FORMAT_MAY_INCLUDE.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sky-200 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></div> {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-stone-700">
                  <p className="text-xl text-white italic leading-relaxed">
                    Every engagement is personalised.<br/>
                    <span className="text-sky-300">Because no two leadership systems carry pressure in exactly the same way.</span>
                  </p>
                </div>
              </div>
            </FadeInLeft>

            {/* Confidentiality */}
            <FadeInRight>
              <div className="h-full bg-stone-950 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-800 flex flex-col relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-stone-800">
                  <Lock size={120} strokeWidth={0.5} />
                </div>
                <h5 className="mb-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] relative z-10">Section 6</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6 relative z-10">Confidentiality</h3>
                <p className="text-2xl text-stone-300 font-light mb-10 relative z-10">
                  Absolute discretion is fundamental to the work.
                </p>
                
                <ul className="space-y-6 mb-12 relative z-10">
                  {NO_LIST.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-rose-200 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 relative z-10">
                  <p className="text-xl text-stone-300 font-light leading-relaxed mb-6">
                    This is a private therapeutic relationship held with seriousness and confidentiality.
                  </p>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-xl text-white italic leading-relaxed">
                      For many leaders, privacy is not an extra feature.<br/>
                      <span className="text-slate-300">It is what allows honest recovery to happen at all.</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT LEADERS OFTEN NOTICE */}
      <section className="py-24 bg-stone-50">
        <div className="soma-container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.3em] mb-4">Section 7</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What Leaders Often Notice</h2>
            <p className="text-2xl text-stone-600 font-light">Not dramatic transformation. Something quieter.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {WHAT_LEADERS_NOTICE.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-lg text-stone-700 font-light">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center p-12 bg-white rounded-[40px] shadow-lg border border-stone-200">
            <p className="text-3xl text-soma-forest font-headline italic leading-relaxed">
              The work does not remove responsibility.<br/>
              <span className="text-sky-600">It changes the way responsibility is carried.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLIENT REFLECTION */}
      <section className="py-24 soma-container text-center relative">
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-slate-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-sky-600 to-slate-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-slate-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                What surprised me most was not relaxation. It was how much pressure my system had normalised without me recognising it. The work created a level of internal steadiness I had not experienced in years.
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
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group focus:outline-none"
                >
                  <span className={`text-xl font-headline italic ${openFaq === i ? 'text-sky-700' : 'text-stone-700 group-hover:text-sky-600'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: openFaq === i ? 180 : 0, color: openFaq === i ? '#0369a1' : '#a8a29e' }}
                    className="transition-colors shrink-0 ml-4"
                  >
                    <ChevronDown size={24} strokeWidth={1.5} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
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
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-sky-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-[12px] font-bold text-sky-300 uppercase tracking-[0.4em] mb-10">Final Close</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-headline text-white mb-12 leading-[1.1] italic">
              You do not need to collapse before recovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300">becomes important.</span>
            </h3>
            
            <div className="space-y-6 text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              <p>The body keeps carrying pressure until it is given a safer way to hold it.</p>
              <p className="text-sky-200 italic font-medium">Executive Sanctuary exists to create that space.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact?purpose=Executive Sanctuary" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-50 to-slate-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
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
