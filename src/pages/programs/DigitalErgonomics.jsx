import { useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, FadeIn } from '../../components/ui/motion-wrappers';
import { 
  Armchair,
  Activity,
  ArrowRight,
  Move,
  Eye,
  Check,
  BrainCircuit,
  Sparkles
} from 'lucide-react';

const WHAT_IT_UNDERSTANDS = [
  'Walking', 'Turning', 'Reaching', 'Breathing fully', 'Looking into distance', 'Recovering through movement'
];

const WHAT_IT_DOESNT = [
  'Collapsing toward screens', 'Fixed shoulders', 'Wrists repeating the same motion thousands of times', 'Eyes locked into artificial focus', 'Attention held under uninterrupted digital demand'
];

const THE_ADAPTATION = [
  'The neck moves forward to meet the screen.',
  'The shoulders begin carrying mental load physically.',
  'Breathing becomes smaller without notice.',
  'Eyes stop relaxing properly.',
  'The spine loses variation.',
  'The nervous system forgets how to downshift between tasks.'
];

const ERGONOMICS_MYTH = [
  'Buying a better chair', 'Raising the laptop', 'Fixing desk height', 'Sitting straighter'
];

const BODY_ORGANISES_AROUND = [
  'Uninterrupted screen focus', 'Repetitive movement', 'Cognitive pressure', 'Digital responsiveness', 'Lack of movement variation', 'Absence of recovery between tasks'
];

const WHY_PEOPLE_EXPERIENCE = [
  'Neck tightness by afternoon', 'Shoulder heaviness during meetings', 'Wrist irritation after typing', 'Tired eyes despite "good sleep"', 'Headaches without clear cause', 'Shallow breathing while working', 'Mental fatigue that feels strangely physical'
];

const SPECIFIC_EXHAUSTION = [
  'Physically still', 'Mentally overloaded', 'Visually fatigued', 'Emotionally compressed', 'Cognitively scattered'
];

const NOTICE_DURING = [
  'Back-to-back meetings', 'Deep laptop work', 'Prolonged multitasking', 'High responsiveness environments', 'Emotionally demanding digital work'
];

const PHASE_1_RECOGNISING = [
  'Habitual sitting patterns', 'Collapsed breathing mechanics', 'Visual fixation strain', 'Shoulder loading', 'Wrist and forearm compensation', 'Spinal fatigue patterns', 'Nervous system tension during work'
];

const PHASE_2_AFFECTS = [
  'Eye muscles', 'Attention rhythms', 'Breathing depth', 'Cognitive recovery', 'Mental pacing', 'Emotional regulation'
];

const PHASE_2_FEELINGS = [
  'Mentally noisy after screen work', 'Unable to deeply focus', 'Overstimulated by evening', 'Physically tired without physical activity'
];

const PHASE_2_PRACTICES = [
  'Ocular decompression', 'Breath regulation', 'Restorative movement', 'Postural release work', 'Nervous system downregulation', 'Visual transition practices', 'Workday recovery intervals'
];

const PHASE_3_BUILDING = [
  'Sustainable desk rhythms', 'Recovery transitions between tasks', 'Healthier focus cycles', 'Postural reset habits', 'Visual recovery rituals', 'Nervous system awareness during work', 'Realistic ergonomic structures'
];

const WHAT_PEOPLE_NOTICE = [
  'Shoulders resting lower naturally', 'Reduced neck compression', 'Easier breathing during work', 'Less eye heaviness', 'Calmer focus', 'Fewer tension headaches', 'Improved mental clarity', 'Reduced "wired but tired" feeling', 'Work feeling less physically expensive'
];

const RIGHT_FOR_YOU = [
  'Spend most of the day on screens', 'Experience recurring neck or shoulder tension', 'Feel mentally exhausted after digital work', 'Notice eye fatigue or visual heaviness', 'Struggle with repetitive strain patterns', 'Feel physically compressed by their workflow', 'Work in cognitively demanding environments'
];

const ESPECIALLY = [
  'Technology professionals', 'Designers', 'Developers', 'Corporate teams', 'Founders', 'Writers', 'Analysts', 'Remote workers', 'High-focus professionals'
];

const EXPERIENCE_INCLUDES = [
  'Guided sessions', 'Ergonomic observations', 'Nervous system regulation practices', 'Visual recovery work', 'Therapeutic movement', 'Between-session micro-practices', 'Sustainable integration tools'
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

export default function ErgonomicsWellness() {
  const methodologyRef = useRef(null);

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      <SEO 
        title="Ergonomics Wellness | SOMA" 
        description="Your body was never designed to work like this for ten hours a day. A therapeutic immersion designed for high-screen environments." 
        canonical="https://www.somamukherjee.com/programs/digital" 
      />
      
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 relative z-20">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span className="text-stone-300">/</span>
          <Link to="/programs" className="hover:text-stone-900 transition-colors">Practices</Link>
          <span className="text-stone-300">/</span>
          <span className="text-stone-900">Ergonomics Wellness</span>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <AnimatedBlob className="top-10 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-300/30 to-orange-300/30 blur-[100px] -z-10 mix-blend-multiply" />
        <AnimatedBlob className="bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300/30 to-pink-200/30 blur-[100px] -z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>

        <div className="soma-container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <StaggerContainer>
              <StaggerItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-8 md:mb-12 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Ergonomics Wellness</span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-soma-forest mb-8 leading-[1.1]">
                  Your body was never designed to work like this <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-400 italic">for ten hours a day.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="pl-6 border-l-2 border-amber-200/50 mb-10 space-y-6">
                  <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">
                    The modern workday compresses the body in invisible ways.
                  </p>
                  <p className="text-lg text-stone-500 leading-relaxed italic font-light pt-2">
                    A 4-week therapeutic immersion designed for people living inside high-screen, high-focus work environments. Not productivity optimisation. Not posture policing. A deeper recalibration of how the body experiences work itself.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                  <Link 
                    to="/contact?purpose=Ergonomic Coaching" 
                    className="relative overflow-hidden group min-h-[56px] px-10 py-4 bg-soma-forest text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-amber-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">Apply For Coaching <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
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
                    src="/Photos/Ergonomics_Image.png" 
                    alt="Ergonomics and bodily stress" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 bg-stone-200" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex-col items-center justify-center text-stone-300">
                    <Armchair size={64} strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent z-0"></div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* THE STREAM - Contrast Block */}
      <section className="py-20 lg:py-32 bg-stone-100 relative overflow-hidden z-20">
        <div className="soma-container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            <FadeInLeft>
              <div className="space-y-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-amber-600 border-b border-amber-200 pb-4">The Human Body Understands:</p>
                <ul className="space-y-6">
                  {WHAT_IT_UNDERSTANDS.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-stone-700 text-xl font-light">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Move size={14} />
                      </div>
                      {item}.
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-8 bg-white p-10 rounded-[40px] shadow-xl border border-stone-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-rose-600 border-b border-rose-200 pb-4 relative z-10">It does not naturally understand:</p>
                <ul className="space-y-6 relative z-10">
                  {WHAT_IT_DOESNT.map((effect, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-stone-700 text-xl font-light">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <Activity size={14} />
                      </div>
                      {effect}.
                    </li>
                  ))}
                </ul>
                <div className="pt-8 mt-8 border-t border-rose-100 relative z-10">
                  <p className="text-xl text-soma-forest leading-relaxed italic">
                    Yet this has quietly become modern work.<br/>
                    And over time, the body adapts.<br/><br/>
                    <span className="font-headline text-3xl">Not gracefully.<br/>Strategically.</span>
                  </p>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* STRATEGIC ADAPTATION */}
      <section className="py-24 bg-white">
        <div className="soma-container max-w-4xl mx-auto text-center space-y-12">
          <ul className="space-y-4">
            {THE_ADAPTATION.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <li className="text-2xl md:text-3xl font-light text-stone-600 leading-relaxed italic">
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
          
          <FadeIn delay={0.6}>
            <div className="mt-16 p-10 bg-stone-50 rounded-[40px] inline-block border border-stone-100">
              <p className="text-2xl text-stone-600 font-light leading-relaxed">
                Most people call this <span className="font-headline text-3xl text-soma-forest italic">"normal work fatigue."</span><br/><br/>
                But the body experiences it differently.<br/>
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mt-4 block">As accumulation.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE PROBLEM IS RARELY POSTURE ALONE (Dark Cinematic) */}
      <section className="py-24 lg:py-32 bg-soma-forest text-white relative overflow-hidden">
        <AnimatedBlob className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-headline leading-[1.1] text-center mb-20"
          >
            The problem is rarely <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300 drop-shadow-lg">posture alone.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <FadeInLeft>
              <div className="space-y-8">
                <p className="text-xl text-stone-300 font-light leading-relaxed">
                  People often think ergonomics means:
                </p>
                <div className="flex flex-col gap-3 pl-6 border-l-2 border-stone-700">
                  {ERGONOMICS_MYTH.map((item, i) => (
                    <span key={i} className="text-lg text-stone-400 font-light">{item}</span>
                  ))}
                </div>
                <p className="text-2xl text-white font-headline italic pt-4">
                  Those things matter.<br/>
                  But most strain does not begin with furniture. <br/>
                  <span className="text-amber-300">It begins with prolonged adaptation.</span>
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="space-y-8">
                <p className="text-xl text-stone-300 font-light leading-relaxed">
                  The body slowly organising itself around:
                </p>
                <div className="flex flex-wrap gap-3">
                  {BODY_ORGANISES_AROUND.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-stone-800 rounded-full text-sm text-stone-300 border border-stone-700">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mt-8">
                  <p className="text-lg text-stone-300 font-light mb-6">This is why people experience:</p>
                  <ul className="space-y-3">
                    {WHY_PEOPLE_EXPERIENCE.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInRight>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
              The setup contributes.<br/>
              <span className="text-white font-headline text-4xl italic mt-4 block">But the deeper issue is how the body has learned to survive the setup.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SOMA'S APPROACH - Text Heavy Focus */}
      <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="soma-container max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.4em] block mb-6">What Makes Soma's Work Different</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-soma-forest leading-[1.1]">
              Because posture is <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">never just posture.</span>
            </h2>
          </div>

          <div className="space-y-12">
            <p className="text-2xl text-stone-600 font-light leading-relaxed">
              Most ergonomic advice treats the body mechanically. Adjust the chair. Fix the posture. Correct the angle.
            </p>
            <p className="text-2xl text-stone-600 font-light leading-relaxed">
              Soma works differently. <br/>
              <span className="font-medium text-stone-900">She pays attention to how the nervous system behaves inside digital work.</span>
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-8 pb-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100 flex items-center gap-4">
                <div className="w-2 h-10 rounded-full bg-amber-400 shrink-0" />
                <p className="text-xl text-soma-forest font-headline italic">A lifted shoulder may be stress.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100 flex items-center gap-4">
                <div className="w-2 h-10 rounded-full bg-rose-400 shrink-0" />
                <p className="text-xl text-soma-forest font-headline italic">A locked jaw may be cognitive overload.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100 flex items-center gap-4">
                <div className="w-2 h-10 rounded-full bg-sky-400 shrink-0" />
                <p className="text-xl text-soma-forest font-headline italic">A collapsed spine may be prolonged mental fatigue.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100 flex items-center gap-4">
                <div className="w-2 h-10 rounded-full bg-indigo-400 shrink-0" />
                <p className="text-xl text-soma-forest font-headline italic">A frozen gaze may be nervous system hyperfocus.</p>
              </div>
            </div>

            <p className="text-2xl text-stone-600 font-light leading-relaxed">
              The body is not separate from the way a person works, thinks, responds, or carries pressure.
            </p>
            <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100">
              <p className="text-2xl text-soma-forest leading-relaxed font-headline italic">
                That is why temporary ergonomic fixes often fail. The body returns to the same pattern because the system underneath the pattern never changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A VERY SPECIFIC EXHAUSTION */}
      <section className="py-20 bg-white">
        <div className="soma-container max-w-5xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-headline text-soma-forest mb-8 leading-tight">
              The modern workday compresses the body in invisible ways.
            </h3>
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">
              Most professionals today move less than the body expects — while processing more than the mind comfortably can. That combination creates a very specific kind of exhaustion:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {SPECIFIC_EXHAUSTION.map((item, i) => (
                <span key={i} className="px-6 py-3 bg-stone-50 border border-stone-200 rounded-full text-stone-700 font-medium">
                  {item}
                </span>
              ))}
            </div>
            
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">
              Many people notice this especially during:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {NOTICE_DURING.map((item, i) => (
                <span key={i} className="px-5 py-2 bg-rose-50 text-rose-800 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="inline-block p-12 bg-stone-900 rounded-[48px] shadow-2xl">
              <p className="text-3xl text-stone-300 font-light leading-relaxed italic">
                The body remains seated. <br/>
                But internally, the system stays braced. <br/>
                <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mt-6 block not-italic">Hour after hour.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CURRICULUM */}
      <section ref={methodologyRef} className="py-24 lg:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <AnimatedBlob className="top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
        <AnimatedBlob className="bottom-0 -left-1/4 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="soma-container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <h5 className="mb-6 text-stone-400">The Programme</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white italic drop-shadow-sm mb-10">How the process unfolds.</h2>
          </div>

          <div className="space-y-16">
            
            {/* PHASE 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-stone-800/40 backdrop-blur-md p-10 md:p-16 rounded-[48px] border border-stone-700 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-stone-900 text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] border border-amber-900">Week 1</span>
                <h3 className="text-3xl md:text-4xl font-headline text-white italic">Phase 1 — Postural Awareness & Ergonomic Mapping</h3>
              </div>
              <p className="text-xl text-stone-300 font-light mb-8 leading-relaxed">
                Most people are unaware of how many compensations the body has normalised. This phase focuses on recognising:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {PHASE_1_RECOGNISING.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/> {item}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-stone-900 rounded-3xl border border-stone-800 text-center">
                <p className="text-2xl text-stone-300 font-light italic leading-relaxed">
                  Not through criticism. Through observation.<br/>
                  The goal is not "perfect posture." It is restoring adaptability.<br/>
                  <span className="text-amber-400">A healthy body shifts naturally. A strained body freezes into efficiency.</span>
                </p>
              </div>
            </motion.div>

            {/* PHASE 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-stone-800/40 backdrop-blur-md p-10 md:p-16 rounded-[48px] border border-stone-700 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-stone-900 text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em] border border-rose-900">Week 2–3</span>
                <h3 className="text-3xl md:text-4xl font-headline text-white italic">Phase 2 — Nervous System & Visual Recovery</h3>
              </div>
              <p className="text-xl text-stone-300 font-light mb-8 leading-relaxed">
                This phase addresses one of the most ignored aspects of digital fatigue: The relationship between visual overload and nervous system activation. Continuous screen engagement affects:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {PHASE_2_AFFECTS.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-stone-900 border border-stone-700 rounded-full text-stone-400">{item}</span>
                ))}
              </div>
              <p className="text-xl text-stone-300 font-light mb-6">This is why people often feel:</p>
              <ul className="mb-10 space-y-3">
                 {PHASE_2_FEELINGS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-rose-300 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-stone-700">
                <p className="text-lg text-stone-400 mb-6 uppercase tracking-wider text-[11px] font-bold">Practices may include:</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {PHASE_2_PRACTICES.map((item, i) => (
                    <div key={i} className="text-stone-300 font-light flex items-center gap-2"><Check size={16} className="text-rose-500"/>{item}</div>
                  ))}
                </div>
                <p className="text-xl text-rose-300 font-headline italic">Not wellness rituals. Practical interventions for modern digital strain.</p>
              </div>
            </motion.div>

            {/* PHASE 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-stone-800/40 backdrop-blur-md p-10 md:p-16 rounded-[48px] border border-stone-700 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                <span className="px-6 py-2 rounded-full bg-stone-900 text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em] border border-sky-900">Week 4</span>
                <h3 className="text-3xl md:text-4xl font-headline text-white italic">Phase 3 — Sustainable Work Rhythms</h3>
              </div>
              <p className="text-xl text-stone-300 font-light mb-8 leading-relaxed">
                This final phase focuses on integration into real working life. Because the answer is not: "Stop using technology." The answer is learning how to work without continuously sacrificing the body to the workflow.
              </p>
              <p className="text-lg text-stone-400 mb-6 uppercase tracking-wider text-[11px] font-bold">Participants begin building:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {PHASE_3_BUILDING.map((item, i) => (
                  <div key={i} className="text-stone-300 font-light flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"/>{item}</div>
                ))}
              </div>
              <div className="p-8 bg-stone-900 rounded-3xl border border-stone-800">
                <p className="text-2xl text-sky-300 font-headline italic">Not idealistic routines. Usable ones.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT PEOPLE OFTEN NOTICE */}
      <section className="py-24 bg-stone-100">
        <div className="soma-container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-amber-600 mb-4">Outcomes</h5>
            <h2 className="text-4xl md:text-5xl font-headline text-soma-forest mb-8 italic">What people often notice</h2>
            <p className="text-2xl text-stone-600 font-light">The changes are usually subtle at first. Then difficult to ignore.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {WHAT_PEOPLE_NOTICE.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-lg text-stone-700 font-light">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center p-12 bg-white rounded-[40px] shadow-lg border border-stone-200">
            <p className="text-3xl text-soma-forest font-headline italic leading-relaxed">
              Not because the work changed.<br/>
              <span className="text-amber-600">Because the body stopped fighting the work all day.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FORMAT & RIGHT FOR YOU */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden z-20">
        <div className="max-w-screen-2xl mx-auto relative z-10 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Format */}
            <FadeInLeft>
              <div className="h-full bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-100 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <h5 className="mb-6 md:mb-8 text-amber-600 relative z-10">The Experience</h5>
                
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  <span className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700">Small cohorts.</span>
                  <span className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700">Calm pacing.</span>
                  <span className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700">No rigid posture perfectionism.</span>
                  <span className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700">No fear-based ergonomics.</span>
                </div>

                <h3 className="text-3xl font-headline text-soma-forest italic mb-8 relative z-10">Just intelligent therapeutic guidance designed for modern digital bodies.</h3>
                
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-6 mt-auto relative z-10">Includes:</p>
                <div className="space-y-4 relative z-10">
                  {EXPERIENCE_INCLUDES.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-1 shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-stone-600 text-lg font-light tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            {/* Right for you */}
            <FadeInRight>
              <div className="h-full bg-gradient-to-br from-stone-900 to-soma-forest p-10 md:p-16 rounded-[48px] shadow-xl border border-stone-800 flex flex-col relative overflow-hidden">
                <h5 className="mb-6 md:mb-8 text-amber-400">Considerations</h5>
                <h3 className="text-3xl font-headline text-white italic mb-10">Who this programme is designed for:</h3>
                
                <ul className="space-y-5 mb-12 flex-1">
                  {RIGHT_FOR_YOU.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-stone-300 font-light text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-stone-700 mt-auto">
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4">Especially:</p>
                  <div className="flex flex-wrap gap-2">
                    {ESPECIALLY.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/10 text-white rounded-md text-sm border border-white/10">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Massive Visual Anchor */}
      <section className="pt-24 pb-24 lg:pb-32 soma-container text-center relative z-20">
        <div className="bg-stone-900 rounded-[64px] p-12 md:p-20 lg:p-32 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full -mr-40 -mt-40 blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/20 to-transparent rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-[12px] font-bold text-amber-300 uppercase tracking-[0.4em] mb-10">The Real Issue</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-headline text-white mb-12 leading-[1.1] italic">
              Your body should not have to absorb <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">your workflow alone.</span>
            </h3>
            
            <div className="space-y-6 text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              <p>That is the real issue. <br/> Not the chair. Not the desk. Not the laptop.</p>
              <p>The absence of recovery inside the way modern work is happening.</p>
              <p className="text-amber-200 italic font-medium">This programme helps restore some of that recovery back into the system.<br/> Quietly. Practically. Intelligently.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact?purpose=Ergonomic Coaching" 
                className="relative overflow-hidden group/btn min-h-[64px] px-14 py-5 bg-white text-soma-forest rounded-full font-bold text-[13px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-50 to-rose-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Apply for Ergonomic Coaching <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
