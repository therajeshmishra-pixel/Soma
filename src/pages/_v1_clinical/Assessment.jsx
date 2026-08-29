import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ASSESSMENT_MODULES = [
  {
    title: 'Stress Load Index',
    description: 'Measure your current physiological load and systemic fatigue.',
    icon: 'neurology',
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
    title: 'Anxiety Regulation Score',
    description: 'Assess nervous system reactivity and emotional anticipation.',
    icon: 'psychology',
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
    title: 'Insomnia Index',
    description: 'Analyze sleep architecture and recovery efficiency.',
    icon: 'bedtime',
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
    description: 'Evaluate resilience, presence, and daily satisfaction.',
    icon: 'mood',
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
    icon: 'battery_charging_full',
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
  1: 'Noticeable Presence',
  2: 'Shifting Equilibrium',
  3: 'Heightened Vigilance',
  4: 'Systemic Overload'
};

const getDynamicState = (value) => {
  if (value === 0) return { label: 'Optimal Stillness', color: '#b29267', bg: 'rgba(178, 146, 103, 0.05)' }; // SOMA Gold
  if (value === 1) return { label: 'Slight Activation', color: '#34d399', bg: 'rgba(52, 211, 153, 0.05)' };
  if (value === 2) return { label: 'Moderate Load', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.05)' };
  if (value === 3) return { label: 'Accumulating Stress', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.05)' };
  return { label: 'Systemic Overload', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.05)' };
};

const LivingOrb = ({ value }) => {
  const dynamic = getDynamicState(value);
  const isHighStress = value >= 3;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[340px] lg:min-h-[500px] relative mt-4 lg:mt-0">
      <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none overflow-hidden">
           <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        {/* Scan Rings */}
        <motion.div 
          className="absolute inset-0 border border-emerald-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-[15%] border border-white/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* The Breathing Core */}
        <motion.div
           animate={{
             scale: isHighStress ? [1, 1.02, 0.98, 1.02, 1] : [1, 1.08, 1],
             x: isHighStress ? [0, 1.5, -1.5, 1.5, 0] : 0,
             y: isHighStress ? [0, -1.5, 1.5, -1.5, 0] : 0,
           }}
           transition={{
             scale: { duration: isHighStress ? 0.3 : 6, repeat: Infinity, ease: "easeInOut" },
             x: { duration: 0.1, repeat: Infinity },
             y: { duration: 0.1, repeat: Infinity }
           }}
           className="relative z-10 flex items-center justify-center"
        >
          {/* Outer Luminous Pulse */}
          <motion.div 
            className="absolute w-64 h-64 rounded-full blur-[80px] opacity-20"
            animate={{ 
              backgroundColor: dynamic.color,
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full glass-morphism-impact border-white/10 relative overflow-hidden flex items-center justify-center"
            animate={{ backgroundColor: dynamic.bg }}
          >
            {/* Fluid Blobs */}
            <motion.div 
              className="absolute inset-8 rounded-full blur-[40px] opacity-40"
              animate={{ 
                backgroundColor: dynamic.color,
                borderRadius: ["30% 70% 70% 30%", "60% 40% 30% 70%", "30% 70% 70% 30%"],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Scanning Laser Beam */}
            <motion.div 
               className="absolute top-0 left-0 w-full h-[2px] bg-white/20 blur-[1px]"
               animate={{ top: ["0%", "100%", "0%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center Data Core */}
            <div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff] opacity-50" />
          </motion.div>
        </motion.div>

        {/* Orbiting Data Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full blur-[0.5px]"
            animate={{
              rotate: 360,
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              rotate: { duration: 15 + i * 8, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.5 }
            }}
            style={{ 
              top: '50%', 
              left: '50%',
              margin: '-0.5px',
              transformOrigin: `${100 + i * 15}px 0` 
            }}
          />
        ))}

        {/* Status Text */}
        <div className="absolute -bottom-20 lg:-bottom-24 text-center w-full z-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3 lg:mb-6">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] font-inter font-black tracking-[0.4em] uppercase text-white/30">Live Stream Diagnostics</span>
           </div>
           <motion.div 
              key={dynamic.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-serif-literary text-3xl sm:text-5xl text-white tracking-tighter"
           >
             {dynamic.label}
           </motion.div>
            <div className="text-[10px] font-inter font-bold text-emerald-500/50 uppercase tracking-[0.3em] mt-1 lg:mt-2">
              SOMA Neuro-mapping Active
            </div>
        </div>
      </div>
    </div>
  );
};

const GrowingBranch = ({ progress }) => {
  const leafCount = Math.floor(progress * 10);
  
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-48 h-12 flex items-center">
        {/* Main Branch Line */}
        <div className="absolute w-full h-[1px] bg-slate-200" />
        <motion.div 
          className="absolute h-[1px] bg-emerald-800 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Leaves */}
        <div className="absolute inset-0 flex justify-between items-center px-1">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${i < leafCount ? 'bg-emerald-800' : 'bg-slate-200'} transition-colors duration-500`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {i < leafCount && (
                <motion.div 
                   className="absolute -top-3 -left-1 w-3 h-4 border-l border-t border-emerald-800 rounded-tl-full opacity-40"
                   initial={{ opacity: 0, rotate: -20 }}
                   animate={{ opacity: 0.6, rotate: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <span className="font-serif-literary italic text-slate-400 text-sm">Phase {leafCount}/10</span>
    </div>
  );
};

export default function Assessment() {
  const [selectedModuleIdx, setSelectedModuleIdx] = useState(null);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);
  const [moduleScores, setModuleScores] = useState([]);
  const [view, setView] = useState('HUB'); // 'HUB', 'TEST', 'RESULTS'

  const resetToHub = () => {
    setSelectedModuleIdx(null);
    setActiveQuestionIdx(0);
    setCurrentValue(0);
    setIsInteracted(false);
    setModuleScores([]);
    setView('HUB');
  };

  const startTest = (idx) => {
    setSelectedModuleIdx(idx);
    setActiveQuestionIdx(0);
    setCurrentValue(0);
    setIsInteracted(false);
    setModuleScores([]);
    setView('TEST');
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
    <div className="min-h-screen mineral-gradient flex flex-col pt-8 lg:pt-16 pb-20 overflow-x-hidden relative selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {view === 'HUB' && (
          <motion.div 
            key="hub" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -30 }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
          >
            {/* Header: High Authority Tech */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span className="text-[10px] font-inter font-black text-white/50 uppercase tracking-[0.3em]">Full Clinical Diagnostic Suite</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-serif-literary text-white tracking-tight leading-[0.8] mb-6">
                  SOMA <br /><span className="italic text-soma-gold">Intake.</span>
                </h1>
              </div>
              <div className="lg:w-1/3 lg:pt-16">
                <p className="text-xl text-slate-400 font-inter font-medium leading-relaxed">
                  Welcome to the high-authority diagnostic portal. Select a neuro-somatic module to begin your deep-scan sequence.
                </p>
              </div>
            </div>

            {/* Hub Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ASSESSMENT_MODULES.map((module, idx) => (
                <motion.div 
                   key={idx} 
                   whileHover={{ y: -8, scale: 1.02 }} 
                   className="glass-morphism-impact p-12 rounded-[40px] transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden active:scale-95"
                   onClick={() => startTest(idx)}
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-600 transition-all duration-500 transform group-hover:rotate-12">
                    <span className="material-symbols-outlined text-soma-gold text-3xl group-hover:text-white transition-colors">{module.icon}</span>
                  </div>

                  <h3 className="text-3xl font-serif-literary text-white mb-4 group-hover:italic transition-all">{module.title}</h3>
                  <p className="font-inter text-slate-400 text-sm leading-relaxed mb-12 flex-grow">{module.description}</p>
                  
                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-inter font-black text-white/30 uppercase tracking-widest">Diagnostic Sequence</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="lg:col-span-1 glass-morphism-impact p-12 rounded-[40px] flex flex-col justify-between bg-emerald-950/20">
                 <p className="font-serif-literary text-2xl text-slate-300 italic leading-snug">
                   "Clinical accuracy begins where standard assessment ends."
                 </p>
                 <div className="mt-12 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                     <span className="material-symbols-outlined text-soma-gold">model_training</span>
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">SOMA Core Engine</p>
                     <p className="text-xs text-emerald-500 font-bold">Validated markers</p>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {view === 'TEST' && (
          <motion.div 
            key="test" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.05 }} 
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto px-6 relative z-10"
          >
            <div className="mb-4 lg:mb-20 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-8">
               <button onClick={resetToHub} className="group flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-white">close</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-white">Exit Sequence</span>
               </button>
               
               <div className="flex items-center gap-6">
                 <div className="text-right">
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Module Mapping</p>
                   <p className="text-white font-serif-literary italic">{ASSESSMENT_MODULES[selectedModuleIdx].title}</p>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <GrowingBranch progress={(activeQuestionIdx + 1) / 10} />
               </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="xl:col-span-12 2xl:col-span-7 order-2 2xl:order-1">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeQuestionIdx} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="glass-morphism-impact p-10 sm:p-20 rounded-[40px] sm:rounded-[60px] flex flex-col min-h-0 sm:min-h-[500px]"
                  >
                    <div className="mb-6 sm:mb-16">
                      <div className="flex items-center gap-4 mb-4 sm:mb-10">
                         <span className="w-10 sm:w-12 h-px bg-soma-gold/50" />
                         <span className="text-[10px] font-black text-soma-gold uppercase tracking-[0.2em] sm:tracking-[0.5em]">Inquiry {activeQuestionIdx + 1} of 10</span>
                      </div>
                      <h3 className="text-2xl sm:text-5xl font-serif-literary text-white leading-[1.1] tracking-tight">
                        {ASSESSMENT_MODULES[selectedModuleIdx].questions[activeQuestionIdx]}
                      </h3>
                    </div>
                    
                    <div className="mt-auto">
                       <div className="relative py-8 sm:py-16">
                          <input 
                            type="range" min="0" max="4" step="1" 
                            value={currentValue}
                            onChange={(e) => {
                              setCurrentValue(parseInt(e.target.value));
                              setIsInteracted(true);
                            }}
                            className="w-full accent-white h-[2px] bg-white/10 rounded-full cursor-pointer appearance-none outline-none"
                          />
                          <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 px-1 pointer-events-none">
                            {[0,1,2,3,4].map(v => (
                              <div key={v} className={`w-3 h-3 rounded-full transition-all duration-300 ${v <= currentValue ? 'bg-soma-gold shadow-[0_0_15px_#b29267]' : 'bg-white/10'}`} />
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mt-8 sm:mt-12">
                            <span className={`hidden sm:block ${currentValue === 0 ? 'text-emerald-500' : ''}`}>Threshold Baseline</span>
                            <span className="text-2xl font-serif-literary italic text-white lowercase tracking-tight mx-auto sm:mx-0">{SCALE_LABELS[currentValue]}</span>
                            <span className={`hidden sm:block ${currentValue === 4 ? 'text-red-500' : ''}`}>Maximum Intensity</span>
                          </div>
                       </div>

                       <motion.button 
                         onClick={handleNext} 
                         disabled={!isInteracted}
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className={`w-full rounded-2xl py-6 sm:py-8 mt-6 sm:mt-12 font-serif-literary text-2xl tracking-tight transition-all shadow-2xl ${
                           isInteracted 
                           ? 'bg-white text-emerald-950 font-bold shadow-white/10' 
                           : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                         }`}
                       >
                         {activeQuestionIdx === 9 ? 'Reveal Synthesis' : 'Validate & Continue'}
                       </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="xl:col-span-12 2xl:col-span-5 order-1 2xl:order-2 flex items-center justify-center py-12">
                <LivingOrb value={currentValue} />
              </div>
            </div>
          </motion.div>
        )}

        {view === 'RESULTS' && (
          <motion.div 
             key="results" 
             initial={{ opacity: 0, filter: 'blur(20px)' }} 
             animate={{ opacity: 1, filter: 'blur(0px)' }} 
             exit={{ opacity: 0 }}
             className="max-w-7xl mx-auto px-6 w-full py-12 relative z-10"
          >
            <ResultView scores={moduleScores} moduleIdx={selectedModuleIdx} onReset={resetToHub} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedCounter({ target, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count}</span>;
}

function ResultView({ scores, moduleIdx, onReset }) {
  const module = ASSESSMENT_MODULES[moduleIdx];
  const sum = scores.reduce((a, b) => a + b, 0);
  const result = module.interpretations.find(i => sum <= i.max) || module.interpretations[module.interpretations.length - 1];

  return (
    <div className="text-left font-serif-literary relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-28">
        <div className="lg:w-2/3">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">{module.title} Synthesis Report</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl text-white leading-[0.8] tracking-tight mb-10">
            Clinical <br /><span className="italic text-emerald-500">{result.state}.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic leading-snug max-w-3xl">
            {result.meaning}
          </p>
        </div>

        <div className="lg:w-1/3 pt-0 lg:pt-16 w-full">
          <div className="glass-morphism-impact p-16 rounded-[60px] flex flex-col items-center bg-emerald-950/20">
            <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">Load Index Analysis</div>
            <div className="text-9xl font-black text-white mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <AnimatedCounter target={sum} />
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-6">
               <motion.div initial={{ width: 0 }} animate={{ width: `${(sum / 40) * 100}%` }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
            </div>
            <div className="text-sm text-slate-500 italic font-medium">Validated markers across 40 parameters</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 flex flex-col gap-12">
          <div className="glass-morphism-impact p-16 rounded-[60px]">
            <h3 className="text-4xl text-white mb-10">Diagnostic Pattern Recognition</h3>
            <div className="space-y-8 text-slate-300 font-inter text-xl leading-relaxed">
              <p>The sequence identifies a system operating in a state of <strong className="text-white underline decoration-emerald-500 underline-offset-8 decoration-2">{result.state.toLowerCase()}</strong>. This configuration suggest metabolic demand is outpacing neuro-somatic recovery.</p>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5 flex gap-6 items-start">
                 <span className="material-symbols-outlined text-emerald-500 text-3xl">insights</span>
                 <p className="text-lg italic">Clinical Recommendation: Transition to "Sanctuary" protocols within 4 hours to stabilize cardiac-coherence markers.</p>
              </div>
            </div>
            
            <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {scores.map((score, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/5 px-4 rounded-xl transition-all">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Marker {i+1}</span>
                  <span className="text-sm italic text-slate-400 font-medium">{SCALE_LABELS[score]}</span>
                  <div className={`w-2 h-2 rounded-full ${score > 2 ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
           <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-morphism-impact p-12 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex-grow"
           >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8">Executive Action</h4>
              <p className="text-3xl mb-12 italic leading-tight">Elevate to "Executive Sanctuary" for deep-structural neuro-restoration.</p>
              <button className="w-full bg-emerald-500 text-slate-900 py-6 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Initiate Protocol
              </button>
           </motion.div>
           
           <button onClick={onReset} className="w-full py-8 glass-morphism-impact rounded-[40px] font-black text-[10px] text-white uppercase tracking-[0.4em] hover:bg-white/5 transition-all text-center">
              Terminate & Reset Terminal
           </button>
        </div>
      </div>
    </div>
  );
}
