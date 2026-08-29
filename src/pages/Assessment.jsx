import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProtocolEnquiryModal from '../components/ProtocolEnquiryModal';
import { StaggerContainer, StaggerItem, FadeIn, AnimatedBadge } from '../components/ui/motion-wrappers';
import { Activity, Brain, BedDouble, Heart, BatteryCharging, ArrowRight, ChevronLeft, ShieldCheck, Sparkles, X, Fingerprint } from 'lucide-react';

const ASSESSMENT_MODULES = [
  {
    title: 'Inner Rhythm Index',
    description: 'Understand your current energy flow and systemic fatigue mapping.',
    icon: Activity,
    color: { 
      bg: 'bg-emerald-600', 
      from: 'from-emerald-500', 
      to: 'to-emerald-700', 
      glow: 'bg-emerald-400/20',
      shadow: 'shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]',
      hoverShadow: 'hover:shadow-[0_20px_30px_-10px_rgba(16,185,129,0.5)]',
      accent: 'emerald',
      lightBg: 'bg-emerald-50',
      textAccent: 'text-emerald-100',
      borderAccent: 'border-emerald-500/50'
    },
    questions: [
      'Observe your current energy: Do you feel mentally heavy, as if clarity is out of reach?',
      'Reflect on your working day: Does the load feel disproportionate to your capacity?',
      'As you leave your work: Does your mind struggle to release its hold on the day\'s tasks?',
      'Direct your attention to your body: Is there a lingering tension in your neck or shoulders?',
      'Notice your rhythm: Do you experience sudden dips in your vitality as the day passes?',
      'Observe your alertness: Is your nervous system fixed in a state of constant vigilance?',
      'Consider your movement: Do you bypass periods of rest despite a clear need for stillness?',
      'In moments of quiet: Does your mind continue to churn with unresolved thoughts?',
      'Scan your internal pressure: Is there a sense of urgency even when no deadlines exist?',
      'Notice the small things: Do minor tasks feel strangely taxing to your system?'
    ],
    interpretations: [
      { max: 8, state: 'Controlled Load', meaning: 'You are managing stress effectively', level: 'good' },
      { max: 16, state: 'Accumulating Load', meaning: 'Early nervous system fatigue', level: 'warning' },
      { max: 24, state: 'Overloaded System', meaning: 'Recovery mechanisms weakening', level: 'danger' },
      { max: 40, state: 'Chronic Stress State', meaning: 'System stuck in survival mode', level: 'critical' }
    ]
  },
  {
    title: 'Calm & Clarity Scan',
    description: 'Assess your nervous system reactivity and emotional ease.',
    icon: Brain,
    color: { 
      bg: 'bg-sky-600', 
      from: 'from-sky-500', 
      to: 'to-sky-700', 
      glow: 'bg-sky-400/20',
      shadow: 'shadow-[0_8px_20px_-4px_rgba(14,165,233,0.4)]',
      hoverShadow: 'hover:shadow-[0_20px_30px_-10px_rgba(14,165,233,0.5)]',
      accent: 'sky',
      lightBg: 'bg-sky-50',
      textAccent: 'text-sky-100',
      borderAccent: 'border-sky-500/50'
    },
    questions: [
      'Observe your inner state: Do you notice a sense of restlessness emerging without an obvious cause?',
      'Reflect on your thoughts: Do you find yourself dwelling on the complexity of small situations?',
      'Notice your baseline: Is there a persistent shadow of unease in your daily experience?',
      'Attend to your heart: Do you notice it quickening even during moments of mild reflection?',
      'Scan the horizon: Do you find yourself anticipating difficult outcomes before they arrive?',
      'Seek stillness: Does your system resist relaxation even in a naturally calm environment?',
      'Observe your pace: Is there an internal sense of being rushed through your life?',
      'Notice your breath: Has it become shallow or restricted in its natural flow?',
      'Reflect on your choices: Do you avoid certain paths because they feel emotionally taxing?',
      'Consider your clarity: Does the process of decision-making feel heavier than it once did?'
    ],
    interpretations: [
      { max: 8, state: 'Stable Regulation', meaning: 'System functioning well', level: 'good' },
      { max: 16, state: 'Mild Anxiety Activation', meaning: 'Early signs of dysregulation', level: 'warning' },
      { max: 24, state: 'Persistent Anxiety Pattern', meaning: 'Needs intervention', level: 'danger' },
      { max: 40, state: 'High Anxiety State', meaning: 'Immediate attention required', level: 'critical' }
    ]
  },
  {
    title: 'Restorative Sleep Analysis',
    description: 'Understand your sleep patterns and recovery quality.',
    icon: BedDouble,
    color: { 
      bg: 'bg-indigo-600', 
      from: 'from-indigo-500', 
      to: 'to-indigo-700', 
      glow: 'bg-indigo-400/20',
      shadow: 'shadow-[0_8px_20px_-4px_rgba(79,70,229,0.4)]',
      hoverShadow: 'hover:shadow-[0_20px_30px_-10px_rgba(79,70,229,0.5)]',
      accent: 'indigo',
      lightBg: 'bg-indigo-50',
      textAccent: 'text-indigo-100',
      borderAccent: 'border-indigo-500/50'
    },
    questions: [
      'Reflect on your evening: Do you find the transition into sleep takes longer than you desire?',
      'Notice your night: Is your rest punctuated by moments of wakefulness?',
      'Observe your awakening: Do you find yourself entering the day without a sense of renewal?',
      'Attend to your mind at night: Do your thoughts keep you tethered to the waking world?',
      'Reflect on your rituals: Do screens become a bridge you cross before trying to rest?',
      'Notice your daylight hours: Does a mist of sleepiness linger over your activities?',
      'Consider your rhythm: Has your sleep cycle lost its natural, predictable anchor?',
      'Observe your dawn: Do you find yourself awake before your system is truly ready?',
      'Scan your feelings toward rest: Is there a subtle anxiety surrounding the act of sleeping?',
      'Reflect on the hours kept: Do you feel unrecovered even when the duration seems adequate?'
    ],
    interpretations: [
      { max: 8, state: 'Restorative Sleep', meaning: 'System functioning well', level: 'good' },
      { max: 16, state: 'Mild Sleep Disturbance', meaning: 'Early signs of disruption', level: 'warning' },
      { max: 24, state: 'Disrupted Sleep Cycle', meaning: 'Needs intervention', level: 'danger' },
      { max: 40, state: 'Chronic Insomnia Pattern', meaning: 'Immediate attention required', level: 'critical' }
    ]
  },
  {
    title: 'Emotional Balance Index',
    description: 'Evaluate resilience, presence, and daily satisfaction markers.',
    icon: Heart,
    color: { 
      bg: 'bg-amber-600', 
      from: 'from-amber-500', 
      to: 'to-amber-700', 
      glow: 'bg-amber-400/20',
      shadow: 'shadow-[0_8px_20px_-4px_rgba(245,158,11,0.4)]',
      hoverShadow: 'hover:shadow-[0_20px_30px_-10px_rgba(245,158,11,0.5)]',
      accent: 'amber',
      lightBg: 'bg-amber-50',
      textAccent: 'text-amber-100',
      borderAccent: 'border-amber-500/50'
    },
    questions: [
      'Observe your day: Do you find a natural satisfaction in the flow of your routine?',
      'Notice your emotional core: Is there a sense of stability that anchors your responses?',
      'Reflect on the small: Do you find joy in the subtle details of your experience?',
      'Scan your connections: Do you feel a genuine resonance with those around you?',
      'Reflect on your morning: Do you feel a gentle pull toward the day\'s possibilities?',
      'Notice your sense of meaning: Is there a quiet purpose that guides your actions?',
      'Observe your headspace: Does it feel light and unburdened by shadowed weight?',
      'Consider setbacks: Do you find your system returns to balance with ease?',
      'Notice your presence: Are you truly here, in this moment, as it unfolds?',
      'Reflect on your outlook: Does a sense of positivity emerge without conscious effort?'
    ],
    reversed: true,
    interpretations: [
      { max: 8, state: 'Low Emotional State', meaning: 'Immediate attention required', level: 'critical' },
      { max: 16, state: 'Fluctuating State', meaning: 'Needs intervention', level: 'danger' },
      { max: 24, state: 'Balanced State', meaning: 'Early signs of stability', level: 'warning' },
      { max: 40, state: 'High Emotional Resilience', meaning: 'System functioning well', level: 'good' }
    ]
  },
  {
    title: 'Fatigue & Recovery Score',
    description: 'Diagnose energy depletion and cellular recovery status.',
    icon: BatteryCharging,
    color: { 
      bg: 'bg-purple-600', 
      from: 'from-purple-500', 
      to: 'to-purple-700', 
      glow: 'bg-purple-400/20',
      shadow: 'shadow-[0_8px_20px_-4px_rgba(168,85,247,0.4)]',
      hoverShadow: 'hover:shadow-[0_20px_30px_-10px_rgba(168,85,247,0.5)]',
      accent: 'purple',
      lightBg: 'bg-purple-50',
      textAccent: 'text-purple-100',
      borderAccent: 'border-purple-500/50'
    },
    questions: [
      'Reflect on your recovery: Do you still feel a weight of fatigue even after a night of rest?',
      'Notice your physical form: Does it feel heavy or slow to respond to your intent?',
      'Scan your vital reserves: Is there a noticeable absence of physical dynamism?',
      'Attend to your mental focus: Does it feel as though it depletes with unusual speed?',
      'Reflect on your fuel: Do you find yourself relying on stimulants to invite alertness?',
      'Observe your evening: Does it take a long time for your system to land after work?',
      'Scan your motivation: Is there a reluctance toward activity or engagement?',
      'Notice your decline: Do you feel a significant fading of energy as sunset approaches?',
      'Reflect on movement: Do you find yourself avoiding physical expression of vitality?',
      'Scan for burnout: Do you notice your system signaling a need for deep, structural rest?'
    ],
    interpretations: [
      { max: 8, state: 'Good Recovery', meaning: 'System functioning well', level: 'good' },
      { max: 16, state: 'Mild Fatigue', meaning: 'Early signs', level: 'warning' },
      { max: 24, state: 'Recovery Deficit', meaning: 'Needs intervention', level: 'danger' },
      { max: 40, state: 'Burnout Zone', meaning: 'Immediate attention required', level: 'critical' }
    ]
  }
];

const SCALE_LABELS = {
  0: 'Baseline Stillness',
  1: 'Soft Presence',
  2: 'Gentle Activation',
  3: 'Increasing Load',
  4: 'Systemic Overload'
};

const getDynamicState = (value) => {
  if (value === 0) return { label: 'Optimal Stillness', color: '#f59e0b', color2: '#fbbf24', shadow: 'rgba(245, 158, 11, 0.4)' };
  if (value === 1) return { label: 'Slight Activation', color: '#f43f5e', color2: '#fb7185', shadow: 'rgba(244, 63, 94, 0.4)' };
  if (value === 2) return { label: 'Moderate Load', color: '#fb923c', color2: '#fdba74', shadow: 'rgba(251, 146, 60, 0.4)' };
  if (value === 3) return { label: 'Accumulating Stress', color: '#be123c', color2: '#f43f5e', shadow: 'rgba(190, 18, 60, 0.4)' };
  return { label: 'Systemic Overload', color: '#7c2d12', color2: '#ea580c', shadow: 'rgba(124, 45, 18, 0.4)' };
};

const LivingOrb = ({ value }) => {
  const dynamic = getDynamicState(value);
  const isHighStress = value >= 3;

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
      <SEO 
        title="Assessment | SOMA" 
        description="Discover Assessment programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/assessment" 
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* The Breathing Core */}
        <motion.div
           animate={{
             scale: isHighStress ? [1, 1.05, 0.95, 1.05, 1] : [1, 1.08, 1],
           }}
           transition={{
             scale: { duration: isHighStress ? 0.4 : 4, repeat: Infinity, ease: "easeInOut" },
           }}
           className="relative z-10 flex items-center justify-center w-full h-full"
        >
          {/* Outer Luminous Pulse */}
          <motion.div 
            className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full blur-[30px] opacity-40 mix-blend-multiply"
            animate={{ 
              backgroundColor: dynamic.color,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* 3D Glass Sphere */}
          <motion.div
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full relative flex items-center justify-center overflow-hidden"
            animate={{ 
               background: `radial-gradient(circle at 30% 30%, ${dynamic.color2} 0%, ${dynamic.color} 50%, #1a1a1a 120%)`,
               boxShadow: `inset 0 10px 20px rgba(255,255,255,0.6), inset 0 -10px 20px rgba(0,0,0,0.4), 0 20px 40px ${dynamic.shadow}`
            }}
          >
             {/* Glossy Highlights */}
             <div className="absolute top-[10%] left-[15%] w-20 h-10 bg-white/60 rounded-full blur-[2px] rotate-[-30deg]" />
             <div className="absolute bottom-[10%] right-[15%] w-16 h-8 bg-black/20 rounded-full blur-[4px] rotate-[-30deg]" />
             
             {/* Dynamic Fluid Content */}
             <motion.div 
                className="absolute inset-0 rounded-full mix-blend-overlay opacity-60"
                style={{ background: `linear-gradient(45deg, ${dynamic.color2}, transparent)` }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Center Nucleus */}
             <motion.div 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/30 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] flex items-center justify-center z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
             </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Status Text Overlay */}
        <div className="absolute -bottom-16 text-center w-full">
           <motion.div 
              key={dynamic.label}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl sm:text-3xl font-headline text-soma-forest tracking-tight italic whitespace-nowrap"
           >
             {dynamic.label}
           </motion.div>
           <h5 className="text-stone-500 mt-2 italic">Biological Resonance</h5>
        </div>
      </div>
    </div>
  );
};

const NameCaptureModal = ({ isOpen, onConfirm, onCancel, color }) => {
  const [name, setName] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
            onClick={onCancel}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[28px] shadow-2xl overflow-hidden border border-white/20 p-5 lg:p-6"
          >
            <div className={`absolute top-0 right-0 w-48 h-48 ${color.glow} rounded-full blur-[60px] -mr-24 -mt-24 opacity-50`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-5">
                <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm border border-stone-100">
                  <Fingerprint size={18} className={color.bg.replace('bg-', 'text-')} strokeWidth={1.5} />
                </div>
                <button onClick={onCancel} className="p-2 hover:bg-stone-50 rounded-full transition-colors">
                  <X size={20} className="text-stone-300" />
                </button>
              </div>
              
              <h2 className="text-2xl lg:text-3xl text-soma-forest mb-3 italic tracking-tight leading-[1.1]">
                Welcome to your <br />
                <span className={`${color.bg.replace('bg-', 'text-')} not-italic font-medium`}>Personalized</span> <br />
                Journey.
              </h2>
              
              <p className="text-sm text-stone-500 mb-5 font-light italic leading-relaxed max-w-md">
                "Before we map your system's rhythm, how should I address you?"
              </p>

              <div className="space-y-5">
                <div className="relative group">
                  <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-soma-forest transition-colors">Participant Name</label>
                  <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className={`w-full bg-transparent border-0 border-b-[1px] border-stone-200 py-2 text-lg lg:text-xl font-light italic placeholder:text-stone-200 focus:ring-0 transition-all duration-500 outline-none ${name ? color.bg.replace('bg-', 'text-') : 'text-soma-forest'} focus:border-soma-forest`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && name.trim()) {
                        onConfirm(name.trim());
                      }
                    }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    disabled={!name.trim()}
                    onClick={() => onConfirm(name.trim())}
                    className={`flex-grow py-3 rounded-xl font-bold text-[10px] tracking-[0.5em] uppercase transition-all duration-500 ${
                      name.trim() 
                      ? `${color.bg} text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] cursor-pointer` 
                      : 'bg-stone-100 text-stone-300 cursor-not-allowed'
                    }`}
                  >
                    Initiate Assessment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Assessment() {
  const [selectedModuleIdx, setSelectedModuleIdx] = useState(null);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);
  const [moduleScores, setModuleScores] = useState([]);
  const [view, setView] = useState('HUB'); // 'HUB', 'TEST', 'RESULTS'
  const [isProtocolModalOpen, setIsProtocolModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [pendingModuleIdx, setPendingModuleIdx] = useState(null);
  const [showNameModal, setShowNameModal] = useState(false);

  const resetToHub = () => {
    setSelectedModuleIdx(null);
    setActiveQuestionIdx(0);
    setCurrentValue(0);
    setIsInteracted(false);
    setModuleScores([]);
    setView('HUB');
  };

  const startTest = (idx) => {
    if (!userName) {
      setPendingModuleIdx(idx);
      setShowNameModal(true);
    } else {
      setSelectedModuleIdx(idx);
      setActiveQuestionIdx(0);
      setCurrentValue(0);
      setIsInteracted(false);
      setModuleScores([]);
      setView('TEST');
    }
  };

  const handleNameConfirm = (name) => {
    setUserName(name);
    setShowNameModal(false);
    if (pendingModuleIdx !== null) {
      setSelectedModuleIdx(pendingModuleIdx);
      setActiveQuestionIdx(0);
      setCurrentValue(0);
      setIsInteracted(false);
      setModuleScores([]);
      setView('TEST');
      setPendingModuleIdx(null);
    }
  };

  const handleNext = () => {
    if (!isInteracted) return;

    const updatedScores = [...moduleScores, currentValue];
    setModuleScores(updatedScores);

    if (activeQuestionIdx < ASSESSMENT_MODULES[selectedModuleIdx].questions.length - 1) {
      setActiveQuestionIdx(prev => prev + 1);
      setCurrentValue(0);
      setIsInteracted(false);
    } else {
      setView('RESULTS');
    }
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden concept-protected" onContextMenu={(e) => e.preventDefault()}>
      {/* Breadcrumb Section */}
      <section className="soma-section soma-container pt-12 pb-2">
        {view === 'HUB' && (
          <motion.div 
            key="hub" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -30 }}
            className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col pt-4 lg:pt-6 pb-12"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-16 gap-8">
              <div className="max-w-3xl">
                <h5 className="mb-6 md:mb-8">
                  <Sparkles size={14} className="text-stone-500" />
                  Wellness Diagnostic
                </h5>
                <h1 className="text-soma-forest mb-6 md:mb-8 italic">
                  The Soma <br /><span className="text-sky-500">Check-In.</span>
                </h1>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl italic">
                  "A high-fidelity mapping of your system's current state. Select a sequence to begin your therapeutic assessment."
                </p>
              </div>
            </div>

            {/* Hub Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ASSESSMENT_MODULES.map((module, idx) => {
                const style = module.color;

                return (
                <StaggerItem 
                   key={idx} 
                   className={`${style.bg} backdrop-blur-sm p-6 lg:p-8 rounded-[32px] lg:rounded-[40px] transition-all duration-500 transform cursor-pointer group flex flex-col h-full ${style.shadow} ${style.hoverShadow} hover:-translate-y-2 active:translate-y-0 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-stone-500/20 relative overflow-hidden isolate border border-white/10`}
                   onClick={() => startTest(idx)}
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       e.preventDefault();
                       startTest(idx);
                     }
                   }}
                >
                  {/* 3D Glass Highlights and Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent -z-10" />
                  <div className={`absolute top-0 right-0 w-64 h-64 ${style.glow} rounded-full blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000 -mr-20 -mt-20 -z-10`} />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-[40px] -z-10" />

                  <div className={`w-14 h-14 bg-white/95 rounded-[20px] flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700 shadow-lg`}>
                    <module.icon size={24} strokeWidth={1.5} className={`${style.bg.replace('bg-', 'text-')} transition-colors drop-shadow-sm`} />
                  </div>
                  <h3 className="text-white mb-3 italic tracking-tight">{module.title}</h3>
                  <p className={`${style.textAccent} text-base leading-relaxed mb-8 flex-grow font-light italic opacity-90 group-hover:opacity-100 transition-opacity`}>"{module.description}"</p>
                  
                  <div className={`flex items-center justify-between pt-6 border-t ${style.borderAccent} group-hover:border-white/30 transition-colors`}>
                    <h5 className="text-white/80 italic group-hover:text-white transition-colors">Begin Sequence</h5>
                    <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-transparent transition-all duration-500 shadow-sm bg-white/10`}>
                      <ArrowRight size={16} className="text-white group-hover:text-stone-900 transition-colors" />
                    </div>
                  </div>
                </StaggerItem>
              )})}

              <StaggerItem className="bg-gradient-to-br from-soma-forest to-[#0d1a14] p-5 lg:p-8 rounded-[24px] lg:rounded-[32px] flex flex-col justify-between text-white relative overflow-hidden shadow-2xl shadow-black/20 border-t border-white/10 h-full sm:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-stone-200/20 rounded-full blur-[80px] -mr-24 -mt-24" />
                <p className="text-lg lg:text-xl xl:text-2xl font-headline italic text-stone-300 leading-[1.2] relative z-10 tracking-tight">
                  "True wellness begins where self-observation <span className="text-white">meets expert care.</span>"
                </p>
                <div className="mt-4 lg:mt-6 flex items-center gap-4 relative z-10 border-t border-white/10 pt-4 lg:pt-6">
                  <div className="w-10 h-10 rounded-[16px] bg-white/10 flex items-center justify-center shrink-0">
                    <Fingerprint size={20} strokeWidth={1.5} className="text-stone-400" />
                  </div>
                  <div>
                    <h5 className="text-stone-400 italic">Psychosomatic Standard</h5>
                    <h5 className="text-white">Biometric Mapping</h5>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        )}

        {view === 'TEST' && (
          <motion.div 
            key="test" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.05 }} 
            className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col pt-4 lg:pt-8 pb-12"
          >
            {/* Nav */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4 shrink-0">
               <button onClick={resetToHub} className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur border border-stone-100 rounded-full hover:bg-white transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-stone-500/10 min-h-[44px]">
                  <X size={14} className="text-stone-500 group-hover:text-soma-forest" />
                  <h5 className="text-stone-500 group-hover:text-soma-forest italic">Exit Session</h5>
               </button>
               
               <div className="flex items-center gap-8">
                 <div className="text-right hidden sm:block">
                   <h5 className="text-stone-500 mb-1 italic">Current Focus</h5>
                   <h4 className="text-soma-forest italic">{ASSESSMENT_MODULES[selectedModuleIdx].title}</h4>
                 </div>
                 <div className="w-[1px] h-8 bg-stone-200/50 hidden sm:block" />
                 <div className="flex items-center gap-4">
                    <div className="w-32 lg:w-48 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                       <motion.div 
                           className={`h-full ${ASSESSMENT_MODULES[selectedModuleIdx].color.bg}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(activeQuestionIdx + 1) * 10}%` }}
                          transition={{ duration: 1, ease: "circOut" }}
                       />
                    </div>
                     <h5 className="text-stone-500 italic">{activeQuestionIdx + 1}<span className="text-stone-300 mx-1">/</span>10</h5>
                 </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeQuestionIdx} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`${ASSESSMENT_MODULES[selectedModuleIdx].color.bg} backdrop-blur p-6 lg:p-10 rounded-[32px] lg:rounded-[48px] ${ASSESSMENT_MODULES[selectedModuleIdx].color.shadow} relative overflow-hidden isolate border border-white/10`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent -z-10" />
                    <div className={`absolute top-0 right-0 w-80 h-80 ${ASSESSMENT_MODULES[selectedModuleIdx].color.glow.replace('/20', '/40')} rounded-full blur-[100px] -mr-40 -mt-40 -z-10`} />
                    
                    <div className="flex items-center gap-4 mb-8 md:mb-10 relative z-10">
                       <div className="w-12 h-1 bg-white rounded-full opacity-50" />
                       <h5 className="text-white/90 tracking-widest">Inquiry {activeQuestionIdx + 1}</h5>
                    </div>
                    
                    <h3 className="text-2xl lg:text-4xl font-inter font-medium text-white leading-tight mb-8 md:mb-14 tracking-wide relative z-10 italic">
                      "<span className="text-white/70 font-bold not-italic underline decoration-white/20 underline-offset-8">{userName}</span>, {ASSESSMENT_MODULES[selectedModuleIdx].questions[activeQuestionIdx].charAt(0).toLowerCase() + ASSESSMENT_MODULES[selectedModuleIdx].questions[activeQuestionIdx].slice(1)}"
                    </h3>
                    
                    <div className="space-y-8 md:space-y-10 relative z-10">
                       <div className="relative pt-4">
                          <div className="grid grid-cols-5 gap-3 lg:gap-4">
                            {[0, 1, 2, 3, 4].map(val => (
                              <button
                                key={val}
                                onClick={() => {
                                  setCurrentValue(val);
                                  setIsInteracted(true);
                                }}
                                className={`py-4 lg:py-6 rounded-[20px] lg:rounded-[24px] border border-white/10 text-center transition-all duration-500 transform flex flex-col items-center justify-center gap-1 ${currentValue === val
                                    ? 'bg-white text-stone-900 shadow-xl scale-[1.05] z-10'
                                    : 'bg-black/10 text-white/60 hover:bg-black/20 hover:text-white hover:scale-[1.02]'
                                  }`}
                              >
                                <span className="text-2xl lg:text-3xl font-headline font-bold italic">{val}</span>
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between mt-8 items-end border-t border-white/10 pt-6">
                            <h5 className="text-white/80 w-1/3 text-left font-bold uppercase tracking-widest">Baseline Stillness</h5>
                            <motion.div 
                               key={currentValue}
                               initial={{ scale: 0.9, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               className="text-white text-center w-1/3 px-2 font-inter font-bold text-lg"
                            >
                               {SCALE_LABELS[currentValue]}
                            </motion.div>
                            <h5 className="text-white/80 w-1/3 text-right font-bold uppercase tracking-widest">Systemic Overload</h5>
                          </div>
                       </div>

                       <motion.button 
                         onClick={handleNext} 
                         disabled={!isInteracted}
                         className={`w-full py-6 rounded-[24px] font-bold text-[10px] tracking-[0.5em] uppercase transition-all duration-500 transform min-h-[50px] focus:outline-none focus:ring-4 focus:ring-white/20 ${
                           isInteracted 
                           ? 'bg-white text-stone-900 shadow-2xl hover:-translate-y-1' 
                           : 'bg-white/10 text-white/20 cursor-not-allowed shadow-none'
                         }`}
                       >
                         {activeQuestionIdx === 9 ? 'Reveal Synthesis' : 'Confirm & Continue'}
                       </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="lg:col-span-5 h-full flex items-center justify-center pt-6 lg:pt-0">
                <LivingOrb value={currentValue} />
              </div>
            </div>
          </motion.div>
        )}

        {view === 'RESULTS' && (
          <motion.div 
             key="results" 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col pt-12 lg:pt-16 pb-24"
          >
            <div>
              <ResultView 
                scores={moduleScores} 
                moduleIdx={selectedModuleIdx} 
                userName={userName}
                onReset={resetToHub} 
                onInitiateProtocol={() => setIsProtocolModalOpen(true)}
              />
            </div>
          </motion.div>
        )}
      </section>

      <NameCaptureModal
        isOpen={showNameModal}
        color={pendingModuleIdx !== null ? ASSESSMENT_MODULES[pendingModuleIdx].color : ASSESSMENT_MODULES[0].color}
        onConfirm={handleNameConfirm}
        onCancel={() => setShowNameModal(false)}
      />

      <ProtocolEnquiryModal 
        isOpen={isProtocolModalOpen}
        onClose={() => setIsProtocolModalOpen(false)}
        userName={userName}
        assessmentData={selectedModuleIdx !== null ? {
          title: ASSESSMENT_MODULES[selectedModuleIdx].title,
          sum: moduleScores.reduce((a, b) => a + b, 0),
          result: (ASSESSMENT_MODULES[selectedModuleIdx].interpretations.find(i => moduleScores.reduce((a, b) => a + b, 0) <= i.max) || ASSESSMENT_MODULES[selectedModuleIdx].interpretations[ASSESSMENT_MODULES[selectedModuleIdx].interpretations.length - 1]).state,
          interpretation: (ASSESSMENT_MODULES[selectedModuleIdx].interpretations.find(i => moduleScores.reduce((a, b) => a + b, 0) <= i.max) || ASSESSMENT_MODULES[selectedModuleIdx].interpretations[ASSESSMENT_MODULES[selectedModuleIdx].interpretations.length - 1]).meaning
        } : null}
      />
    </main>
  );
}

const PROGRAM_RECOMMENDATIONS = [
  { 
    id: 0, 
    name: 'Metabolic Resilience', 
    path: '/programs/metabolic',
    reason: 'To address systemic energy depletion and restore cellular vitality.'
  },
  { 
    id: 1, 
    name: 'Cognitive Calm', 
    path: '/programs/cognitive',
    reason: 'To down-regulate nervous system reactivity and restore emotional ease.'
  },
  { 
    id: 2, 
    name: 'Sleep Architecture', 
    path: '/programs/sleep',
    reason: 'To recalibrate your circadian rhythm and ensure deep, structural rest.'
  },
  { 
    id: 3, 
    name: 'Counselling & Therapy', 
    path: '/programs/counselling',
    reason: 'To build emotional resilience and process underlying stressors.'
  },
  { 
    id: 4, 
    name: 'Executive Sanctuary', 
    path: '/programs/sanctuary',
    reason: 'A deep-immersion protocol designed to reverse burnout and restore high-level cognitive function.'
  }
];

function ResultView({ scores, moduleIdx, userName, onReset, onInitiateProtocol }) {
  const module = ASSESSMENT_MODULES[moduleIdx];
  const sum = scores.reduce((a, b) => a + b, 0);
  const result = module.interpretations.find(i => sum <= i.max) || module.interpretations[module.interpretations.length - 1];
  const recommendation = PROGRAM_RECOMMENDATIONS[moduleIdx];

  return (
    <div className="space-y-16 lg:space-y-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        <div className="max-w-3xl">
          <h5 className="mb-6 md:mb-8">
            <Sparkles size={14} className="text-teal-500" />
            {module.title} Synthesis
          </h5>
          <h1 className="text-soma-forest mb-4 italic leading-[1.1]">
            <span className={`${module.color.bg.replace('bg-', 'text-')} not-italic font-medium`}>{userName}</span>, <br />
            your system is in <span className={`${module.color.bg.replace('bg-', 'text-')}`}>{result.state}.</span>
          </h1>
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <ShieldCheck size={12} className="text-soma-gold" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-soma-gold/60">Proprietary Soma Methodology &copy;</span>
          </div>
          <p className="text-xl lg:text-2xl text-stone-600 italic leading-[1.2] font-light max-w-2xl">
            "{result.meaning}"
          </p>
        </div>

        <div className="w-full lg:w-4/12">
           <div className="bg-white/90 backdrop-blur border border-white p-10 lg:p-14 rounded-[48px] lg:rounded-[64px] shadow-xl shadow-stone-900/5 flex flex-col items-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-48 h-48 bg-sky-50 rounded-full blur-[60px] -mr-24 -mt-24 group-hover:bg-teal-50 transition-colors duration-1000" />
             <h5 className="text-stone-600 mb-6 md:mb-8 relative z-10 font-bold uppercase tracking-widest">Intensity Score</h5>
             <motion.div 
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5, ease: "circOut" }}
               className="text-7xl lg:text-8xl xl:text-9xl font-headline text-soma-forest leading-none mb-8 tracking-tighter relative z-10"
             >
               {sum}
             </motion.div>
             <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden mb-6 md:mb-8 relative z-10">
                <motion.div initial={{ width: 0 }} animate={{ width: `${(sum / 40) * 100}%` }} transition={{ duration: 2.5, ease: "expoOut" }} className={`h-full ${module.color.bg} ${module.color.shadow}`} />
             </div>
             <h5 className="text-stone-500 text-center relative z-10 font-medium tracking-wide">Aggregate across 40 biological markers</h5>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[40px] lg:rounded-[64px] p-8 lg:p-16 border border-stone-100 shadow-xl shadow-stone-200/50 h-full">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
               <div className={`w-12 h-1 ${module.color.bg} rounded-full`} />
               <h2 className="text-soma-forest italic">Pattern Analysis</h2>
            </div>
            <div className="space-y-8 text-stone-600 text-lg lg:text-xl leading-relaxed font-light italic">
              <p>"{userName}, your responses suggest a biological system currently navigating a state of <strong className={`${module.color.bg.replace('bg-', 'text-')} underline decoration-stone-200 underline-offset-[12px] not-italic`}>{result.state.toLowerCase()}</strong>. This specific pattern typically emerges when the restorative functions of the autonomic nervous system require focused, therapeutic attention."</p>
              
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="p-8 lg:p-10 bg-stone-50 rounded-[32px] lg:rounded-[48px] flex flex-col sm:flex-row gap-6 items-start border border-stone-100 relative overflow-hidden shadow-md shadow-stone-200/40"
              >
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-[40px] -mr-16 -mb-16" />
                 <div className="w-14 h-14 rounded-[20px] bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                    <Sparkles className={`${module.color.bg.replace('bg-', 'text-')}`} size={24} strokeWidth={1.5} />
                 </div>
                 <div className="flex-grow">
                    <p className="text-lg lg:text-xl italic text-stone-700 leading-relaxed relative z-10 mb-4">
                        Soma's Insight: "Based on this synthesis, I invite you, <span className={`${module.color.bg.replace('bg-', 'text-')} not-italic font-bold`}>{userName}</span>, to join our <Link to={recommendation.path} className={`${module.color.bg.replace('bg-', 'text-')} font-bold not-italic hover:underline underline-offset-4`}>{recommendation.name}</Link> program. {recommendation.reason}"
                    </p>
                    <Link to={recommendation.path} className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${module.color.bg.replace('bg-', 'text-')} hover:gap-4 transition-all duration-300`}>
                        Explore Program <ArrowRight size={14} />
                    </Link>
                 </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
               <button 
                  onClick={() => onReset()} 
                  className="group flex items-center justify-between p-8 rounded-[32px] bg-stone-50 hover:bg-stone-100 transition-all border border-stone-100 shadow-md shadow-stone-200/30 active:scale-95"
               >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Activity size={20} className="text-stone-400 group-hover:text-soma-forest transition-colors" />
                    </div>
                    <div className="text-left">
                      <h5 className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-1">Return Home</h5>
                      <h4 className="text-soma-forest italic">New Sequence</h4>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-stone-300 group-hover:translate-x-2 transition-all" />
               </button>
               
               <button 
                  onClick={onInitiateProtocol} 
                  className={`group flex items-center justify-between p-8 rounded-[32px] ${module.color.bg} shadow-xl shadow-stone-200 hover:-translate-y-1 transition-all active:scale-95`}
               >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Heart size={20} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h5 className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Expert Guidance</h5>
                      <h4 className="text-white italic">Request Protocol</h4>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-white group-hover:translate-x-2 transition-all" />
               </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6 lg:space-y-8">
           <div className="bg-soma-forest p-8 lg:p-10 rounded-[40px] lg:rounded-[48px] text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] -mr-16 -mt-16" />
              <h4 className="italic mb-8 relative z-10">Bio-Mechanical <br />Markers</h4>
              <div className="space-y-6 relative z-10">
                 {scores.map((s, i) => (
                   <div key={i} className="flex items-center justify-between group">
                      <h5 className="text-white/40 italic group-hover:text-white/60 transition-colors">Inquiry {i+1}</h5>
                      <div className="flex items-center gap-3">
                         <div className="w-20 lg:w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${(s/4)*100}%` }} transition={{ delay: 1 + (i*0.1) }} className="h-full bg-white/60" />
                         </div>
                         <span className="text-[10px] font-bold w-4">{s}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
