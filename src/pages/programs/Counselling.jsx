import { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, FadeInUp, StaggerContainer, StaggerItem, FadeIn } from '../../components/ui/motion-wrappers';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck,
  ChevronRight,
  Heart,
  Wind,
  Globe,
  Leaf,
  Clock,
  Sun,
  Lock,
  MessageSquare,
  Shield
} from 'lucide-react';
import { useInquiry } from '../../hooks/useInquiry';

const HERO_INTERNAL = [
  'emotionally crowded',
  'mentally exhausted',
  'physically tense',
  'unable to fully rest',
  'disconnected from clarity',
  'quietly overwhelmed by life they are still managing successfully'
];

const EVERYDAY_LIFE_SIGNS = [
  'sleep becoming lighter',
  'patience becoming shorter',
  'focus becoming harder',
  'emotional resilience reducing',
  'recovery taking longer',
  'overstimulation becoming constant',
  'internal pressure becoming difficult to explain'
];

const STILL_DOING = [
  'Still working.',
  'Still parenting.',
  'Still showing up.',
  'Still appearing “fine.”'
];

const THINK_ISSUE_IS = [
  'stress',
  'burnout',
  'anxiety',
  'overwhelm',
  'lack of discipline',
  'inability to switch off'
];

const CAREFULLY_AT = [
  'nervous-system overload',
  'emotional accumulation',
  'prolonged vigilance',
  'cognitive fatigue',
  'suppressed exhaustion',
  'lifestyle pressure patterns',
  'relational stress',
  'digital overstimulation',
  'the physical effects of psychological carrying'
];

const SKILLED_AT = [
  'masking exhaustion',
  'intellectualising emotions',
  'functioning through depletion',
  'minimising stress',
  'staying composed while internally overloaded'
];

const RESPONDING_UNDERNEATH = [
  'breathing patterns',
  'nervous-system pacing',
  'cognitive overload',
  'emotional guarding',
  'bodily tension',
  'recovery fatigue',
  'mental fragmentation'
];

const DO_NOT_NEED = [
  'perfect language',
  'a formal diagnosis',
  'a complete explanation of yourself',
  'certainty about what support you need'
];

const STEP_2 = [
  'pressure rhythms',
  'nervous-system responses',
  'fatigue patterns',
  'emotional carrying',
  'behavioural adaptations',
  'possible root contributors'
];

const STEP_3 = [
  'greater understanding',
  'practical next steps',
  'therapeutic direction',
  'and a clearer sense of what your system may need moving forward'
];

const REALLY_SEEKING = [
  'the ability to exhale properly again',
  'mental spaciousness',
  'emotional steadiness',
  'relief from carrying everything internally',
  'better recovery',
  'less nervous-system urgency',
  'feeling more connected to themselves',
  'support that feels intelligent and human'
];

const RESONATES_WITH = [
  'feel emotionally or mentally overloaded',
  'are carrying prolonged stress privately',
  'feel disconnected from rest',
  'are struggling with clarity or emotional steadiness',
  'feel exhausted beneath competence',
  'are functioning externally while internally overwhelmed',
  'want a thoughtful and psychologically grounded first conversation'
];

const INCLUDING = [
  'professionals',
  'caregivers',
  'leaders',
  'founders',
  'high-responsibility individuals',
  'emotionally burdened personalities',
  'people navigating life transitions or invisible exhaustion'
];

const INTENTIONALLY_FEEL = [
  'calm',
  'confidential',
  'non-performative',
  'emotionally safe',
  'psychologically intelligent',
  'free from wellness theatrics'
];

const INCLUDES = [
  'private video consultation',
  'confidential intake process',
  'therapeutic direction',
  'optional ongoing support',
  'personalised recommendations',
  'practical recovery pathways'
];

const FAQS = [
  { q: 'Do I need a diagnosis before booking?', a: 'No. You do not need a label or formal diagnosis to begin.' },
  { q: 'Is this therapy?', a: 'Counselling & Care is a therapeutic, counselling-led process designed to help you understand your current state and determine the most supportive direction forward.' },
  { q: 'What happens during the first session?', a: 'You speak openly about what you have been experiencing while Soma carefully observes patterns, strain responses, and possible therapeutic directions.' },
  { q: 'Is this confidential?', a: 'Entirely. Privacy and discretion are central to the structure of the work.' },
  { q: 'Can ongoing support continue after the intake?', a: 'Yes. Depending on your needs, further therapeutic guidance or programme recommendations may be discussed.' }
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

export default function Counselling() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', experience: '', duration: '', goal: '' });
  const { submitInquiry, status } = useInquiry('Intake Form - Counselling Program');
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Counselling & Care | SOMA" 
        description="A deeply private therapeutic space for individuals seeking clarity, steadiness, emotional understanding, and meaningful direction." 
        canonical="https://www.somamukherjee.com/programs/counselling" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">Counselling & Care</span>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <AnimatedBlob className="top-0 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-rose-200/40 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-orange-200/40 to-yellow-100/40 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 border border-stone-200 mb-8 md:mb-12 shadow-sm">
                  <ShieldCheck size={14} className="text-amber-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700">Counselling & Care</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  For people who have been carrying too much <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500 italic">silently for too long.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-stone-200 mb-10 space-y-6">
                  <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">
                    Not every struggle looks visible from the outside.
                  </p>
                  
                  <div className="bg-white/60 p-6 rounded-2xl border border-stone-100 mt-6">
                    <p className="text-lg text-stone-800 font-medium mb-4">Some people continue functioning exceptionally well while internally feeling:</p>
                    <ul className="space-y-2">
                      {HERO_INTERNAL.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-600 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-lg text-stone-600 leading-relaxed pt-4">
                    Often, there is no dramatic breakdown.<br/><br/>
                    <span className="italic font-medium text-stone-800">Just a growing sense that something inside no longer feels sustainable the way it once did.</span>
                  </p>
                  
                  <p className="text-lg text-stone-800 leading-relaxed font-medium pt-2">
                    Counselling & Care is Soma’s deeply private therapeutic space for individuals seeking clarity, steadiness, emotional understanding, and meaningful direction — before exhaustion turns into collapse.
                  </p>
                  
                  <p className="text-lg text-stone-500 italic leading-relaxed pt-2">
                    Not generic advice.<br/>
                    Not surface-level motivation.<br/>
                    A thoughtful process of understanding what your system has been carrying, adapting to, and silently normalising over time.<br/><br/>
                    <span className="font-bold text-amber-600">Private. Grounded. Carefully held.</span>
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <a 
                    href="#intake" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-amber-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Begin Private Intake <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </a>
                  <a 
                    href="#process" 
                    className="min-h-[56px] px-10 py-4 bg-white/80 backdrop-blur-md text-soma-forest border border-stone-200 rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                  >
                    Understand The Process
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInRight>
              <div className="relative group lg:w-4/5 lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-rose-400 rounded-[64px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20 blur-2xl"></div>
                <div className="relative rounded-[64px] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white/40 bg-white/20 backdrop-blur-sm">
                  <img 
                    src="/counselling.jpg" 
                    alt="Consultation session" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent z-0"></div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 1 — MOST PEOPLE DO NOT SEEK SUPPORT */}
      <section className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Section 1</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">Most people do not seek support when the struggle begins</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeInLeft>
              <div className="space-y-6">
                <p className="text-2xl text-stone-300 font-light leading-relaxed">
                  They seek support when carrying it alone stops working.
                </p>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mt-8 mb-8 space-y-2 text-stone-300 italic text-lg">
                  <p>For some people, the signs are emotional.</p>
                  <p>For others, they are physical.</p>
                  <p>And for many, they appear quietly through everyday life:</p>
                </div>
                
                <ul className="space-y-4">
                  {EVERYDAY_LIFE_SIGNS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-rose-200 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-8 h-full flex flex-col justify-center">
                <p className="text-xl text-stone-300 font-light leading-relaxed">
                  Many people minimise these experiences because they are still functioning.
                </p>
                <div className="pl-6 border-l-2 border-stone-700 space-y-4">
                  {STILL_DOING.map((item, i) => (
                    <p key={i} className="text-lg text-amber-200 italic">{item}</p>
                  ))}
                </div>
                <div className="bg-stone-800 p-8 rounded-[32px] border border-stone-700 mt-8">
                  <p className="text-2xl font-headline italic text-white leading-relaxed">
                    But functioning and wellbeing are <span className="text-amber-400">not always the same thing.</span>
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT THIS SPACE IS REALLY FOR */}
      <section className="py-24 bg-stone-50">
        <div className="soma-container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 2</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What This Space Is Really For</h2>
            <p className="text-2xl text-stone-600 font-light">Not only understanding what you are feeling.<br/>Understanding <span className="italic font-medium">why</span> your system may be feeling this way.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <FadeIn>
              <div className="bg-white p-10 rounded-[40px] shadow-soft border border-stone-100 h-full">
                <h3 className="text-2xl font-headline text-stone-800 mb-6">People often arrive thinking the issue is:</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {THINK_ISSUE_IS.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 text-stone-600 rounded-full text-sm border border-slate-200 shadow-sm">{item}</span>
                  ))}
                </div>
                <p className="text-lg text-stone-500 italic mt-auto">
                  Sometimes those descriptions are correct.<br/>
                  Sometimes they are incomplete.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-amber-50 p-10 rounded-[40px] shadow-inner border border-amber-100 h-full">
                <h3 className="text-2xl font-headline text-soma-forest mb-6 italic">Soma’s work looks more carefully at:</h3>
                <ul className="space-y-4 mb-8">
                  {CAREFULLY_AT.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-headline text-stone-700 italic mb-6">Because the body and mind rarely struggle separately.</p>
            <div className="inline-block p-8 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-xl text-soma-forest font-light leading-relaxed">
                The goal is not simply to “feel better.”<br/>
                <span className="font-medium text-amber-700 italic">The goal is to understand the pattern clearly enough that real change becomes possible.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT MAKES SOMA’S APPROACH DIFFERENT */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <AnimatedBlob className="top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-rose-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-[10px] font-bold text-rose-600 uppercase tracking-[0.3em] mb-4">Section 3</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What Makes Soma’s Approach Different</h2>
            <p className="text-2xl text-stone-600 font-light italic">Soma listens for what most people have learned to hide.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <div className="space-y-8 text-xl text-stone-600 font-light leading-relaxed">
                <p>Many individuals have spent years adapting to pressure quietly.</p>
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                  <p className="text-lg font-medium text-stone-800 mb-6">High-functioning people especially become skilled at:</p>
                  <ul className="space-y-4">
                    {SKILLED_AT.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-600">
                        <Check size={16} className="text-slate-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-stone-900 text-white p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                
                <h3 className="text-3xl font-headline italic text-amber-200 mb-8 relative z-10">
                  Soma’s work is deeply observant.
                </h3>
                
                <p className="text-lg font-light leading-relaxed mb-8 relative z-10 text-stone-300">
                  She pays attention not only to what is being said — but how the system itself appears to be responding underneath it:
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  {RESPONDING_UNDERNEATH.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm text-stone-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-stone-700 relative z-10 space-y-4">
                  <p className="text-xl italic font-medium text-white leading-relaxed">
                    This is why many people describe the experience not as “being advised,” but as finally feeling accurately understood.
                  </p>
                  <p className="text-lg text-rose-300 italic">
                    Not judged.<br/>
                    Not rushed.<br/>
                    Not reduced to a diagnosis.
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE FIRST CONVERSATION */}
      <section id="process" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
        <AnimatedBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 4</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-6 italic">The First Conversation</h2>
            <p className="text-2xl text-stone-600 font-light">Calm. Private. Unhurried.</p>
            <p className="text-lg text-stone-500 mt-4">The intake process is designed to reduce confusion, not increase it.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 mb-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <h3 className="text-xl font-headline text-stone-800 shrink-0">You do not need:</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {DO_NOT_NEED.map((item, i) => (
                <span key={i} className="text-rose-600 font-medium italic text-sm">~ {item}</span>
              ))}
            </div>
            <p className="text-xl font-headline text-soma-forest italic mt-4 sm:mt-0 sm:ml-auto">You begin exactly where you are.</p>
          </div>

          <div className="space-y-12">
            
            {/* Step 01 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <span className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-slate-200">Step 01</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Share What Has Been Happening</h3>
              </div>
              <div className="space-y-6 text-xl text-stone-600 font-light relative z-10">
                <p className="font-medium italic text-stone-800">In your own words.</p>
                <p>Messy, incomplete, emotional, practical, uncertain — all of it is welcome.</p>
                <p>This is not a performance of self-awareness.<br/><span className="text-rose-600 font-medium italic">It is a space for honesty.</span></p>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <span className="px-6 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-amber-100">Step 02</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Understand The Pattern</h3>
              </div>
              <p className="text-xl text-stone-600 font-light mb-6 relative z-10">
                Soma begins identifying:
              </p>
              <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                {STEP_2.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-stone-600 text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 text-center relative z-10">
                <p className="text-xl text-amber-900 font-light italic leading-relaxed">
                  Often, people realise for the first time that what they considered “normal stress” has been affecting them far more deeply than they understood.
                </p>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center relative z-10">
                <span className="px-6 py-2 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-[0.3em] border border-sky-100">Step 03</span>
                <h3 className="text-3xl md:text-4xl font-headline text-soma-forest italic">Find A Clearer Direction</h3>
              </div>
              <p className="text-xl text-stone-600 font-light mb-8 relative z-10">
                You leave with:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10 relative z-10">
                {STEP_3.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"/> {item}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 text-center relative z-10">
                <p className="text-2xl text-soma-forest font-headline italic leading-relaxed">
                  Not overwhelming solutions.<br/>
                  <span className="text-sky-700">Just grounded clarity.</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 — WHAT PEOPLE ARE SEEKING & WHO RESONATES */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden z-20">
        <AnimatedBlob className="top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <AnimatedBlob className="bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* What people are seeking */}
            <FadeInLeft>
              <div className="h-full bg-stone-800/40 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-700 backdrop-blur-md flex flex-col relative overflow-hidden">
                <h5 className="mb-4 text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em]">Section 5</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6">What People Are Often Really Seeking</h3>
                <p className="text-xl text-stone-300 font-light mb-2">Not constant happiness.</p>
                <p className="text-xl text-stone-300 font-light mb-10 italic">Usually something much quieter.</p>
                
                <ul className="space-y-4 mb-10">
                  {REALLY_SEEKING.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-100 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div> {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-stone-700">
                  <p className="text-xl text-amber-300 italic font-medium leading-relaxed">
                    This is the kind of work Counselling & Care is designed for.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            {/* Who Resonates */}
            <FadeInRight>
              <div className="h-full bg-stone-950 p-10 md:p-16 rounded-[48px] shadow-2xl border border-stone-800 flex flex-col relative overflow-hidden">
                <h5 className="mb-4 text-[10px] font-bold text-rose-400 uppercase tracking-[0.3em]">Section 6</h5>
                <h3 className="text-4xl font-headline text-white italic mb-6">Who This Space Often Resonates With</h3>
                <p className="text-xl text-stone-300 font-light mb-8">People who:</p>
                
                <div className="space-y-4 mb-10">
                  {RESONATES_WITH.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-stone-300 font-light">
                      <Check size={18} className="text-rose-500 mt-1 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-stone-700">
                  <p className="text-lg text-stone-400 mb-6 font-medium">Including:</p>
                  <div className="flex flex-wrap gap-3">
                    {INCLUDING.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-stone-800 rounded-full text-stone-300 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8 — THE EXPERIENCE ITSELF & PRIVACY */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <AnimatedBlob className="top-1/2 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="soma-container max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            
            <FadeInLeft>
              <div className="space-y-8">
                <div className="mb-10">
                  <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 7</h5>
                  <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-4 italic">The Experience Itself</h2>
                  <p className="text-2xl text-stone-600 font-light">Thoughtfully structured. Deeply private.</p>
                </div>
                
                <div className="bg-white p-10 rounded-[40px] shadow-soft border border-stone-100">
                  <p className="text-lg text-stone-600 mb-6">This space is intentionally designed to feel:</p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {INTENTIONALLY_FEEL.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-stone-700 rounded-full text-sm border border-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg text-stone-600 mb-6">Includes:</p>
                  <ul className="space-y-4 mb-10">
                    {INCLUDES.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-stone-100 space-y-2 text-rose-600 font-medium italic">
                    <p>No generic frameworks.</p>
                    <p>No inflated promises.</p>
                    <p>No pressure to become someone else.</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-8">
                <div className="mb-10">
                  <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Section 8</h5>
                  <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-4 italic">Privacy & Confidentiality</h2>
                  <p className="text-2xl text-stone-600 font-light">Some conversations require complete discretion.</p>
                </div>
                
                <div className="bg-stone-900 p-10 rounded-[40px] shadow-2xl relative overflow-hidden text-white">
                  <div className="absolute -top-10 -right-10 text-stone-800 opacity-50">
                    <Lock size={120} strokeWidth={0.5} />
                  </div>
                  
                  <p className="text-xl font-light leading-relaxed mb-10 relative z-10 text-stone-300">
                    Everything shared within Counselling & Care is handled with seriousness and confidentiality.
                  </p>

                  <ul className="space-y-4 mb-12 relative z-10 text-rose-300 italic text-lg">
                    <li>No public participation.</li>
                    <li>No unnecessary exposure.</li>
                    <li>No emotional performance.</li>
                  </ul>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative z-10">
                    <p className="text-xl font-headline text-white leading-relaxed mb-4">
                      Just a carefully held private therapeutic space.
                    </p>
                    <p className="text-lg text-stone-400 font-light italic">
                      For many people, that alone becomes deeply relieving.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* SECTION 9 — CLIENT REFLECTION */}
      <section className="py-24 soma-container text-center relative">
        <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-[64px] rotate-2 group-hover:rotate-3 transition-transform duration-700 opacity-50 blur-xl"></div>
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[64px] shadow-2xl max-w-4xl mx-auto relative border border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-500/20 ring-8 ring-stone-50">
                <span className="text-6xl font-serif leading-none mt-6">"</span>
              </div>
              <p className="text-2xl md:text-4xl text-soma-forest font-headline italic leading-relaxed mt-4">
                I came in thinking I needed advice. What I actually needed was someone who could recognise how much pressure my system had been normalising for years. The conversation felt grounding in a way I did not expect.
              </p>
              <div className="flex flex-col items-center mt-12 gap-2">
                <div className="w-12 h-[2px] bg-slate-300 mb-2"></div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Client Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE FORM SECTION */}
      <section id="intake" className="py-12 lg:py-20 bg-soma-forest text-white rounded-[64px] mx-4 md:mx-6 lg:mx-10 relative overflow-hidden shadow-soft z-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full -mr-64 -mt-64 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full -ml-64 -mb-64 blur-[100px]" />
        <div className="max-w-screen-xl mx-auto relative z-10 px-6">
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 lg:p-20 rounded-[64px]">
            <div className="mb-10 md:mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-white mb-6 italic text-4xl md:text-5xl font-headline">Begin Your Intake.</h2>
              <p className="text-stone-300 text-xl font-normal italic leading-relaxed">"Share what feels relevant. There's no right or wrong way to express it."</p>
            </div>
            
            <form className="space-y-8 md:space-y-10 max-w-3xl mx-auto" onSubmit={submitInquiry}>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-4">
                  <h5 className="flex items-center gap-2 text-emerald-400 ml-6 italic">
                    <Leaf size={16} /> Full Name
                  </h5>
                  <input 
                    type="text" name="name" value={form.name} onChange={handleChange} 
                    placeholder="e.g. Alex Rivers"
                    className="w-full bg-white/5 rounded-full px-8 py-5 md:px-10 md:py-6 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all placeholder:text-stone-500 italic"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <h5 className="flex items-center gap-2 text-sky-400 ml-6 italic">
                    <Wind size={16} /> Email Address
                  </h5>
                  <input 
                    type="email" name="email" value={form.email} onChange={handleChange} 
                    placeholder="alex@example.com"
                    className="w-full bg-white/5 rounded-full px-8 py-5 md:px-10 md:py-6 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all placeholder:text-stone-500 italic"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="flex items-center gap-2 text-rose-400 ml-6 italic">
                  <Heart size={16} /> What You're Experiencing
                </h5>
                <textarea 
                  name="experience" value={form.experience} onChange={handleChange} rows={5}
                  placeholder="Share what you are feeling, observing, and struggling with..."
                  className="w-full bg-white/5 rounded-[40px] px-8 py-6 md:px-10 md:py-8 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-stone-500 italic"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full min-h-[64px] py-6 bg-amber-500 text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-950 transition-all disabled:opacity-50 group flex items-center justify-center gap-3 shadow-xl"
              >
                {status === 'idle' && (
                  <>Submit Confidential Request <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" /></>
                )}
                {status === 'loading' && 'Sending Request...'}
                {status === 'success' && 'Request Sent Successfully!'}
                {status === 'error' && 'Error Sending. Please try again.'}
              </button>
              <h5 className="text-center text-stone-400 pt-4 italic font-light">Private · Secure · Confidential</h5>
            </form>
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
                  <span className={`text-xl font-headline italic ${activeFaq === i ? 'text-amber-700' : 'text-stone-700 group-hover:text-amber-600'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: activeFaq === i ? 180 : 0, color: activeFaq === i ? '#b45309' : '#a8a29e' }}
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
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-[12px] font-bold text-amber-400 uppercase tracking-[0.4em] mb-10">Final Close</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-headline text-white mb-12 leading-[1.1] italic">
              You do not need to wait until things become unbearable <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">before seeking support.</span>
            </h3>
            
            <div className="space-y-6 text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              <p>Most people carry far more internally than others ever see.</p>
              <p className="text-amber-200 italic font-medium">Sometimes the first meaningful shift is simply being understood properly.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#intake" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-50 to-rose-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Begin Private Intake <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
