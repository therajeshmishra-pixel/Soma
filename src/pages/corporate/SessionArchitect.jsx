import { useState, useMemo, useEffect } from 'react';
import SEO from '../../components/SEO';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Monitor,
  Users,
  CheckCircle2,
  Info,
  Clock,
  Download,
  Mail,
  ChevronRight,
  LayoutPanelTop,
  Activity,
  ShieldCheck,
  FileText,
  MoveHorizontal,
  BrainCircuit,
  Wind,
  ArrowRight,
  ChevronDown,
  Copy,
  Link as LinkIcon,
  Calendar
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat } from '../../components/ui/motion-wrappers';

// --- DATA & CONFIG ---

const ISSUES = [
  { id: 'stress_burnout', icon: ShieldCheck, label: 'Stress & Burnout', priority: ['breathwork', 'meditation'] },
  { id: 'posture_pain', icon: MoveHorizontal, label: 'Poor Posture / Back Pain', priority: ['stretching', 'posture_reset'] },
  { id: 'low_energy', icon: Activity, label: 'Low Energy / Fatigue', priority: ['energy_activation', 'breathwork'] },
  { id: 'anxiety_overload', icon: BrainCircuit, label: 'Anxiety / Mental Overload', priority: ['breathwork', 'meditation'] },
  { id: 'focus', icon: LayoutPanelTop, label: 'Lack of Focus', priority: 'meditation' },
  { id: 'sleep', icon: Clock, label: 'Sleep Issues', priority: 'relaxation' },
  { id: 'screen_fatigue', icon: Monitor, label: 'Screen Fatigue', priority: 'meditation' },
  { id: 'sedentary', icon: Activity, label: 'Stiff Body / Sedentary', priority: ['stretching', 'posture_reset'] },
];

const MODALITIES = [
  { id: 'posture_reset', icon: MoveHorizontal, label: 'Posture Reset', color: 'bg-emerald-500', textColor: 'text-white', group: 1 },
  { id: 'stretching', icon: MoveHorizontal, label: 'Stretching', color: 'bg-teal-500', textColor: 'text-white', group: 1 },
  { id: 'breathwork', icon: Wind, label: 'Breathwork', color: 'bg-sky-500', textColor: 'text-white', group: 2 },
  { id: 'energy_activation', icon: Activity, label: 'Energy Activation', color: 'bg-amber-500', textColor: 'text-white', group: 2 },
  { id: 'meditation', icon: BrainCircuit, label: 'Meditation', color: 'bg-indigo-500', textColor: 'text-white', group: 3 },
  { id: 'relaxation', icon: Sparkles, label: 'Relaxation / Recovery', color: 'bg-purple-500', textColor: 'text-white', group: 3 },
];

const DURATIONS = [20, 30, 40, 60];

// --- LOGIC ENGINE ---

function allocateSession(state) {
  const { issues, modalities, duration } = state;

  if (issues.length === 0 || modalities.length === 0) return null;

  const scores = {};
  MODALITIES.forEach(m => scores[m.id] = 0);

  issues.forEach(issueId => {
    const issue = ISSUES.find(i => i.id === issueId);
    if (!issue) return;
    if (Array.isArray(issue.priority)) {
      issue.priority.forEach(p => {
        if (scores.hasOwnProperty(p)) scores[p] += 1;
      });
    } else {
      if (scores.hasOwnProperty(issue.priority)) scores[issue.priority] += 1;
    }
  });

  const minPerActivity = 5;
  const theoreticalMax = Math.floor(duration / minPerActivity);

  let activeInBlueprint = modalities
    .map(mId => ({ id: mId, score: scores[mId] || 0, group: MODALITIES.find(m => m.id === mId).group }))
    .sort((a, b) => b.score - a.score || a.group - b.group)
    .slice(0, theoreticalMax)
    .map(m => m.id);

  let remainingTime = duration;
  const allocation = {};

  activeInBlueprint.forEach(mId => {
    const mod = MODALITIES.find(m => m.id === mId);
    const min = mod.group === 1 ? Math.min(10, Math.floor(duration / activeInBlueprint.length)) : 5;
    allocation[mId] = min;
    remainingTime -= min;
  });

  if (remainingTime > 0) {
    const totalScore = activeInBlueprint.reduce((acc, mId) => acc + (scores[mId] || 1), 0);
    activeInBlueprint.forEach(mId => {
      const weight = (scores[mId] || 1) / (totalScore || 1);
      const extra = Math.floor(remainingTime * weight);
      allocation[mId] += extra;
    });
  }

  const timeline = [];
  [1, 2, 3].forEach(groupNum => {
    activeInBlueprint
      .map(mId => MODALITIES.find(mod => mod.id === mId))
      .filter(mod => mod.group === groupNum)
      .forEach(mod => {
        if (allocation[mod.id]) {
          timeline.push({
            type: mod.id,
            duration: allocation[mod.id],
            label: mod.label,
            config: mod
          });
        }
      });
  });

  const hrBenefitsMap = new Map();

  if (issues.includes('stress_burnout') && issues.includes('anxiety_overload')) {
    hrBenefitsMap.set('mental_resilience', {
      title: 'Mental Resilience',
      story: 'Research links chronic workplace stress to a 23% increase in medical leave claims and a 15–20% drop in decision quality. This protocol directly targets cortisol dysregulation and sympathetic nervous system overload — the physiological drivers of burnout. Teams that maintain a 30-minute weekly reset practice show measurable HRV improvement within 4 weeks.'
    });
  } else if (issues.includes('stress_burnout') || issues.includes('anxiety_overload')) {
    hrBenefitsMap.set('mental_resilience', {
      title: 'Mental Resilience',
      story: 'By addressing high mental load and anxiety, we help shift your team from a state of "fight-or-flight" into calm, sustainable execution, reducing the risk of burnout.'
    });
  }

  if (issues.includes('posture_pain') && (issues.includes('screen_fatigue') || issues.includes('sedentary'))) {
    hrBenefitsMap.set('ergonomic_relief', {
      title: 'Ergonomic Relief',
      story: "Musculoskeletal complaints account for 34% of all workplace sick days in India's IT sector. Desk-based RSI and cervical strain are the leading cause of productivity loss among software professionals over 35. This protocol addresses the specific postural patterns created by 8+ hours at a workstation — reducing pain scores and preventing the escalation to clinical injury."
    });
  } else if (issues.includes('posture_pain') || issues.includes('sedentary')) {
    hrBenefitsMap.set('ergonomic_relief', {
      title: 'Ergonomic Relief',
      story: 'Targeting physical stiffness and sedentary habits reduces the risk of repetitive strain injuries, lowering healthcare costs and keeping your workforce agile.'
    });
  }

  if (issues.includes('focus') && issues.includes('low_energy')) {
    hrBenefitsMap.set('sustained_output', {
      title: 'Consistent performance & lower burnout risk',
      story: 'Cognitive fatigue costs the average knowledge worker 2.1 productive hours per day — equivalent to losing one full working day per week. This protocol uses breathwork sequencing and micro-recovery practices to restore prefrontal cortex function, improving sustained attention and reducing the decision fatigue that peaks in the 2–4pm window.'
    });
  } else if (issues.includes('low_energy') || issues.includes('focus') || issues.includes('screen_fatigue')) {
    hrBenefitsMap.set('sustained_output', {
      title: 'Consistent performance & lower burnout risk',
      story: 'Combating fatigue and scattered focus restores depleted energy reserves, turning sluggish afternoons into periods of high-quality, sustained productivity.'
    });
  }
  if (issues.includes('sleep')) {
    hrBenefitsMap.set('sleep_recovery', {
      title: 'Recovery & Retention',
      story: 'Improving sleep quality directly impacts daily performance, ensuring employees return to work fully recovered and feeling supported.'
    });
  }

  if (allocation.posture_reset || allocation.stretching) {
    if (!hrBenefitsMap.has('ergonomic_relief')) {
      hrBenefitsMap.set('physical_restoration', {
        title: 'Physical Restoration',
        story: 'Directly untangling the physical toll of desk work keeps your team pain-free and physically agile throughout the work week.'
      });
    }
  }

  if (allocation.energy_activation || allocation.breathwork) {
    if (!hrBenefitsMap.has('sustained_output')) {
      hrBenefitsMap.set('metabolic_reset', {
        title: 'Metabolic Reset',
        story: 'Oxygenating the brain and stimulating circulation provides a natural, sustainable energy lift without the crash of caffeine.'
      });
    }
  }

  if (allocation.meditation || allocation.relaxation) {
    if (!hrBenefitsMap.has('mental_resilience') && !hrBenefitsMap.has('sleep_recovery')) {
      hrBenefitsMap.set('cognitive_recovery', {
        title: 'Cognitive Recovery',
        story: 'Providing guided mental rest quiets workplace noise, allowing the mind to detach from distractions and sustain high-level focus.'
      });
    }
  }

  const hrBenefits = Array.from(hrBenefitsMap.values());

  const issueNames = issues.map(i => ISSUES.find(x => x.id === i)?.label.toLowerCase()).filter(Boolean);
  const modalityNames = activeInBlueprint.map(m => MODALITIES.find(x => x.id === m)?.label).filter(Boolean);

  const formatList = (list) => {
    if (list.length === 0) return '';
    if (list.length === 1) return list[0];
    if (list.length === 2) return `${list[0]} and ${list[1]}`;
    return `${list.slice(0, -1).join(', ')}, and ${list[list.length - 1]}`;
  };

  let synergyText = '';
  if (issueNames.length > 0 && modalityNames.length > 0) {
    synergyText = `By integrating ${formatList(modalityNames)}, this session plan is specifically engineered to combat ${formatList(issueNames)}. This strategic alignment translates targeted physical & nervous system recovery into measurable, sustainable workforce performance.`;
  } else if (issueNames.length > 0) {
    synergyText = `This custom session plan is specifically engineered to combat ${formatList(issueNames)}, translating targeted physical & nervous system recovery into measurable workforce performance.`;
  } else if (modalityNames.length > 0) {
    synergyText = `By integrating ${formatList(modalityNames)}, this session plan provides a powerful, multi-modal intervention to optimize your team's daily output and resilience.`;
  } else {
    synergyText = 'This comprehensive protocol addresses your team\'s specific bottlenecks, providing a complete wellness reset for optimal daily execution.';
  }

  let priceMin = 0;
  let priceMax = 0;
  let teamSizeInt = parseInt(state.teamSize) || 0;
  if (teamSizeInt > 0) {
    if (state.mode === 'single') {
      priceMin = 35000;
      priceMax = 50000;
    } else {
      priceMin = 220000;
      priceMax = 300000;
    }
  }
  const price = { min: priceMin, max: priceMax, hasSize: teamSizeInt > 0 };

  const title = (allocation.stretching > 15 || allocation.posture_reset > 15) ? "Physical Restoration Blueprint" : "Recovery & Performance Session";

  return { title, timeline, hrBenefits, synergyText, duration, activeInBlueprint, price };
}

// --- COMPONENTS ---

const ControlCard = ({ children, title, icon: Icon, color = 'from-stone-50 to-emerald-50' }) => (
  <div className={`bg-gradient-to-br ${color} rounded-[24px] p-6 mb-4 relative overflow-hidden`}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none" />
    <div className="flex items-center gap-3 mb-6 relative z-10">
      <div className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center text-stone-600 transition-transform duration-300">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <h3 className="text-[10px] font-bold text-stone-600 uppercase tracking-[0.3em]">{title}</h3>
    </div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function SessionArchitect() {
  const [state, setState] = useState({
    companyName: '',
    teamName: '',
    teamSize: '',
    mode: 'single',
    issues: ['stress_burnout'],
    modalities: ['stretching', 'breathwork', 'meditation'],
    duration: 30,
    format: 'desk'
  });

  const blueprint = useMemo(() => allocateSession(state), [state]);

  const toggleIssue = (id) => {
    setState(prev => ({
      ...prev,
      issues: prev.issues.includes(id)
        ? prev.issues.filter(i => i !== id)
        : [...prev.issues, id]
    }));
  };

  const toggleModality = (id) => {
    setState(prev => ({
      ...prev,
      modalities: prev.modalities.includes(id)
        ? prev.modalities.filter(m => m !== id)
        : [...prev.modalities, id]
    }));
  };

  const handleDownload = () => {
    window.print();
  };

  const [copyStatus, setCopyStatus] = useState('');
  
  const handleCopyLink = () => {
    // Generate a simple query string based on current state
    const params = new URLSearchParams({
      company: state.companyName,
      team: state.teamName,
      size: state.teamSize,
      mode: state.mode,
      duration: state.duration,
      format: state.format,
      issues: state.issues.join(','),
      modalities: state.modalities.join(',')
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  useEffect(() => {
    // Parse URL params on load
    const params = new URLSearchParams(window.location.search);
    if (params.toString().length > 0) {
      setState(prev => ({
        ...prev,
        companyName: params.get('company') || prev.companyName,
        teamName: params.get('team') || prev.teamName,
        teamSize: params.get('size') || prev.teamSize,
        mode: params.get('mode') || prev.mode,
        duration: params.get('duration') ? parseInt(params.get('duration')) : prev.duration,
        format: params.get('format') || prev.format,
        issues: params.get('issues') ? params.get('issues').split(',') : prev.issues,
        modalities: params.get('modalities') ? params.get('modalities').split(',') : prev.modalities
      }));
    }
  }, []);

  const handleEmail = () => {    const body = `Soma Session Blueprint: ${blueprint.title}\n\nDuration: ${blueprint.duration}m\n\nFlow:\n${blueprint.timeline.map(t => `- ${t.label}: ${t.duration}m`).join('\n')}`;
    window.location.href = `mailto:?subject=Soma Wellness Strategy&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-[#F8F7FF] min-h-screen flex flex-col font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden print:bg-white print:pt-0 print:h-auto print:overflow-visible concept-protected" onContextMenu={(e) => e.preventDefault()}>
      <SEO 
        title="Corporate Wellness Session Blueprint | Soma Mukherjee" 
        description="Discover SessionArchitect programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/corporate/architect" 
      />
      <style>{`
        @media print {
          @page { size: A4; margin: 10mm; }
          .print\\:hidden, header, footer, #announcement-bar, nav, .fixed, .z-50, button:not(.print-visible) { display: none !important; }
          main { background: white !important; padding: 0 !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; display: block !important; }
          .max-w-7xl { max-width: 100% !important; margin: 0 !important; width: 100% !important; }
          body { -webkit-print-color-adjust: exact; color: #000 !important; background: white !important; }
          .rounded-\\[80px\\], .rounded-\\[72px\\], .rounded-\\[48px\\] { border-radius: 12px !important; }
          .shadow-soft, .shadow-2xl { box-shadow: none !important; }
          .border-stone-200\\/50 { border: 1px solid #eee !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pb-6 lg:pb-10 print:hidden w-full flex justify-start text-left">
        <nav className="flex items-center justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/corporate" className="hover:text-stone-900 transition-colors">Corporate</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">Session Architect</span>
        </nav>
      </section>

      <section className="pt-0 pb-12 lg:pb-24 soma-container flex flex-col flex-1">
        {/* Header */}
        <header className="mb-6 text-left print:hidden bg-white rounded-[32px] p-6 lg:p-7">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AnimatedBadge className="bg-stone-50">
                  <span className="text-[9px] font-bold text-stone-500 uppercase tracking-[0.4em] pl-3">Institutional Protocol</span>
                </AnimatedBadge>
              </div>
              <h1 className="text-soma-forest mb-4 italic">
                Architect Your <span className="text-stone-400">Sequence.</span>
              </h1>
              <p className="text-sm text-stone-500 font-light leading-relaxed max-w-lg italic">
                "Tell us what your team is dealing with. Get a structured session plan you can implement next week."
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-[24px] p-6 flex-1 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                  <Info size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-2">Protocol Engine</h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed italic">
                    Select your team's specific <span className="font-bold text-emerald-700">Context</span> and preferred <span className="font-bold text-emerald-700">Interventions</span> below. The engine calculates a tailored sequence and clear narrative in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* PRINT HEADER */}
        <div className="hidden print:block mb-12 pb-12">
          <div className="flex justify-between items-end">
            <div>
              <img src="/Photos/SomaLogo1.svg" alt="SOMA" className="h-12 w-auto mb-6" />
              <h1 className="text-4xl font-headline text-soma-forest mb-2">Session Blueprint</h1>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Soma Mukherjee Wellness Protocol</p>
            </div>
            <div className="text-right text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Issued: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start flex-1 pb-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-4 print:hidden">
            <LayoutGroup>
              <ControlCard title="00. Team Details" icon={Users} color="from-stone-50 to-blue-50/30">
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] block mb-2">Company Name</label>
                    <input type="text" placeholder="e.g. Cognizant Technology Solutions" 
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      value={state.companyName} onChange={e => setState(p => ({...p, companyName: e.target.value}))} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] block mb-2">Team/Dept</label>
                      <input type="text" placeholder="e.g. Digital Services" 
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        value={state.teamName} onChange={e => setState(p => ({...p, teamName: e.target.value}))} />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] block mb-2">Team Size</label>
                      <input type="number" placeholder="e.g. 85" 
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        value={state.teamSize} onChange={e => setState(p => ({...p, teamSize: e.target.value}))} />
                    </div>
                  </div>
                </div>
              </ControlCard>

              <ControlCard title="01. Context" icon={ShieldCheck} color="from-stone-50 to-emerald-50/30">
                <div className="grid grid-cols-2 gap-2">
                  {ISSUES.map(issue => (
                    <button
                      key={issue.id}
                      onClick={() => toggleIssue(issue.id)}
                      className={`p-4 rounded-[20px] text-left transition-all duration-300 flex items-center justify-between group transform ${state.issues.includes(issue.id)
                          ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)] scale-[1.02]'
                          : 'bg-white text-stone-600 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-inner'
                        }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className={`p-2 rounded-xl transition-colors ${state.issues.includes(issue.id) ? 'bg-white/20' : 'bg-emerald-50'}`}>
                          <issue.icon size={16} strokeWidth={1.5} className={state.issues.includes(issue.id) ? 'text-white' : 'text-emerald-600'} />
                        </div>
                        <span className="text-[11px] font-bold tracking-tight uppercase leading-none">{issue.label}</span>
                      </div>
                      <div className={`w-2 h-2 rounded-full shadow-inner shrink-0 ${state.issues.includes(issue.id) ? 'bg-white animate-pulse' : 'bg-stone-200'}`} />
                    </button>
                  ))}
                </div>
              </ControlCard>

              <ControlCard title="02. Interventions" icon={Activity} color="from-stone-50 to-amber-50/30">
                <div className="grid grid-cols-2 gap-3">
                  {MODALITIES.map(mod => (
                    <button
                      key={mod.id}
                      onClick={() => toggleModality(mod.id)}
                      className={`p-4 rounded-[20px] text-left transition-all duration-300 flex items-center justify-between group transform ${state.modalities.includes(mod.id)
                          ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-[0_8px_20px_-4px_rgba(245,158,11,0.4)] scale-[1.02]'
                          : 'bg-white text-stone-600 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-inner'
                        }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className={`p-2 rounded-xl transition-colors ${state.modalities.includes(mod.id) ? 'bg-white/20' : 'bg-amber-50'}`}>
                          <mod.icon size={16} strokeWidth={1.5} className={state.modalities.includes(mod.id) ? 'text-white' : 'text-amber-600'} />
                        </div>
                        <span className="text-[11px] font-bold tracking-tight uppercase leading-none">{mod.label}</span>
                      </div>
                      {state.modalities.includes(mod.id) && <CheckCircle2 size={14} className="text-white shrink-0" />}
                    </button>
                  ))}
                </div>
              </ControlCard>

              <ControlCard title="03. Parameters" icon={Clock} color="from-stone-50 to-indigo-50/30">
                <div className="space-y-8">
                  <div className="flex justify-between items-center gap-6">
                    <div className="flex-1">
                      <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.3em] block mb-4">Duration</span>
                      <div className="grid grid-cols-4 gap-2">
                        {DURATIONS.map(d => (
                          <button
                            key={d}
                            onClick={() => setState(prev => ({ ...prev, duration: d }))}
                            className={`py-3 rounded-[14px] font-bold text-[11px] transition-all duration-300 transform ${state.duration === d
                              ? 'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-[0_8px_15px_-3px_rgba(79,70,229,0.3)]'
                              : 'bg-white text-stone-500 shadow-sm hover:text-indigo-600 hover:-translate-y-1 active:translate-y-0.5'
                              }`}
                          >
                            {d}m
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold text-fuchsia-400 uppercase tracking-[0.3em] block mb-4">Engagement Model</span>
                    <div className="flex gap-3 mb-6">
                      {[
                        { id: 'single', label: 'Single Session', icon: Clock },
                        { id: 'programme', label: '8-Week Programme', icon: Calendar }
                      ].map(f => (
                        <button
                          key={f.id}
                          onClick={() => setState(prev => ({ ...prev, mode: f.id }))}
                          className={`flex-1 p-3 rounded-[20px] text-left transition-all duration-300 flex items-center justify-center gap-3 transform ${state.mode === f.id
                              ? 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 text-white shadow-[0_8px_15px_-3px_rgba(217,70,239,0.3)]'
                              : 'bg-white text-stone-500 shadow-sm hover:text-fuchsia-600 hover:-translate-y-1 active:translate-y-0.5'
                            }`}
                        >
                          <f.icon size={14} strokeWidth={1.5} className={state.mode === f.id ? 'text-white' : 'text-fuchsia-400'} />
                          <span className="text-[10px] font-bold tracking-tight uppercase">{f.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-[0.3em] block mb-4">Environment</span>
                    <div className="flex gap-3">
                      {[
                        { id: 'desk', label: 'Desk-based', icon: Monitor },
                        { id: 'studio', label: 'Studio/Mat', icon: Users }
                      ].map(f => (
                        <button
                          key={f.id}
                          onClick={() => setState(prev => ({ ...prev, format: f.id }))}
                          className={`flex-1 p-4 rounded-[20px] text-left transition-all duration-300 flex items-center justify-center gap-4 transform ${state.format === f.id
                              ? 'bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-[0_8px_15px_-3px_rgba(225,29,72,0.3)]'
                              : 'bg-white text-stone-500 shadow-sm hover:text-rose-600 hover:-translate-y-1 active:translate-y-0.5'
                            }`}
                        >
                          <f.icon size={16} strokeWidth={1.5} className={state.format === f.id ? 'text-white' : 'text-rose-400'} />
                          <span className="text-[11px] font-bold tracking-tight uppercase">{f.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ControlCard>
            </LayoutGroup>
          </div>

          {/* Blueprint Display */}
          <div className="lg:col-span-7 print:col-span-12">
            <AnimatePresence mode="wait">
              {blueprint ? (
                <motion.div
                  key="blueprint"
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  className="bg-white rounded-[32px] p-8 lg:p-10 relative overflow-hidden group print:p-0 print:border-none print:shadow-none flex flex-col shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]"
                >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-teal-50 via-amber-50 to-rose-50 rounded-full blur-[80px] -mr-48 -mt-48 transition-all duration-1000 pointer-events-none opacity-50" />

                  <div className="relative z-10 flex flex-col">
                    <div className="flex flex-row justify-between items-start gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Protocol Architecture</span>
                          <div className="h-px w-16 opacity-10 bg-stone-100" />
                        </div>
                        {(state.companyName || state.teamName) && (
                          <div className="text-[13px] font-bold text-stone-500 mb-2 font-headline uppercase tracking-wide">
                            {state.companyName} {state.teamName && <span className="text-stone-400">· {state.teamName}</span>}
                          </div>
                        )}
                        <h2 className="text-soma-forest mb-2 italic leading-[0.9]">
                          {blueprint.title}
                        </h2>
                        {state.teamSize && (
                          <div className="text-[11px] font-medium text-stone-500 mb-4 bg-stone-100 inline-block px-3 py-1 rounded-full">
                            {state.teamSize} employees · Generated {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-6">
                          <ShieldCheck size={12} className="text-emerald-600" />
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700/60">Proprietary Soma Methodology &copy;</span>
                        </div>
                        <div className="flex items-center gap-3 print:hidden">
                          <div className="px-5 py-2 bg-gradient-to-r from-soma-forest to-stone-800 text-white rounded-full text-[9px] font-bold uppercase tracking-[0.2em] italic shadow-md">
                            Verified Outcome
                          </div>
                          <div className="px-5 py-2 bg-white text-stone-500 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm border border-stone-50">
                            {state.format} Optimised
                          </div>
                        </div>
                      </div>
                      <div className="bg-stone-50/50 backdrop-blur-sm p-6 rounded-[28px] text-center min-w-[130px] border border-white">
                        <div className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-2">Total Block</div>
                        <div className="text-4xl font-headline font-bold text-soma-forest italic leading-none">{blueprint.duration}<span className="text-xl text-stone-300 ml-1">m</span></div>
                      </div>
                    </div>

                    {/* Timeline Flow */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Sequence Matrix</h4>
                      </div>

                      <div className="flex gap-2.5 h-24 items-stretch mb-6 print:hidden">
                        {blueprint.timeline.map((block) => (
                          <motion.div
                            key={block.type}
                            layoutId={block.type}
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{
                              scaleY: 1,
                              opacity: 1,
                              width: `${(block.duration / blueprint.duration) * 100}%`
                            }}
                            className={`rounded-[20px] ${block.config.color} p-5 flex flex-col justify-between relative group/item overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-default`}
                          >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 blur-xl rounded-full -mr-8 -mt-8" />
                            <span className={`text-[10px] font-bold ${block.config.textColor} opacity-80 leading-none`}>{block.duration}m</span>
                            <span className={`text-[11px] font-bold ${block.config.textColor} uppercase tracking-[0.1em] leading-none truncate relative z-10`}>
                              {block.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Print Timeline */}
                      <div className="hidden print:block space-y-4 mb-8">
                        {blueprint.timeline.map((block) => (
                          <div key={block.type} className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-4">
                              <div className={`w-3 h-3 rounded-full ${block.config.color}`} />
                              <span className="text-sm font-bold text-soma-forest uppercase tracking-tight">{block.label}</span>
                            </div>
                            <span className="text-sm font-headline italic">{block.duration} Minutes</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Workforce Impact */}
                    <div className="space-y-6 mb-8">
                      <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Workforce Impact & Narrative</h4>

                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg font-medium leading-relaxed italic text-indigo-600"
                      >
                        "{blueprint.synergyText}"
                      </motion.p>

                      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 pt-4">
                        {blueprint.hrBenefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                              <h5 className="text-[10px] font-bold text-soma-forest uppercase tracking-[0.2em]">{benefit.title}</h5>
                            </div>
                            <p className="text-[11px] text-stone-500 leading-relaxed italic">
                              "{benefit.story}"
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Investment & Actions */}
                    <div className="pt-8 border-t border-stone-50">
                      {blueprint.price.hasSize && (
                        <div className="mb-6 bg-stone-50/50 p-5 rounded-2xl border border-stone-100">
                          <div className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">Estimated Investment</div>
                          <div className="text-2xl font-headline font-bold text-soma-forest italic">
                            ₹{blueprint.price.min.toLocaleString('en-IN')} – ₹{blueprint.price.max.toLocaleString('en-IN')}
                          </div>
                          <div className="text-xs text-stone-500 mt-1">
                            {state.mode === 'single' ? `Single session · ${state.teamSize} people` : `8-week programme · ${state.teamSize} people`}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link 
                          to={`/contact?purpose=Corporate%20Wellness%20Blueprint&company=${encodeURIComponent(state.companyName)}`}
                          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-[20px] font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 active:translate-y-0.5 shadow-md flex items-center justify-center gap-3"
                        >
                          Book this session for my team <ArrowRight size={14} />
                        </Link>
                        
                        <div className="flex gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                          <button
                            onClick={handleCopyLink}
                            className="shrink-0 px-6 py-4 bg-white text-stone-600 border border-stone-200 rounded-[20px] font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-stone-50 shadow-sm flex items-center justify-center gap-2"
                          >
                            <LinkIcon size={14} /> {copyStatus || 'Copy Link'}
                          </button>
                          <button
                            onClick={handleDownload}
                            className="shrink-0 px-6 py-4 bg-stone-900 text-white rounded-[20px] font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-stone-800 shadow-md flex items-center justify-center gap-2"
                          >
                            <Download size={14} /> PDF
                          </button>
                          <button
                            onClick={handleEmail}
                            className="shrink-0 px-6 py-4 bg-white text-stone-600 border border-stone-200 rounded-[20px] font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-stone-50 shadow-sm flex items-center justify-center gap-2"
                          >
                            <Mail size={14} /> Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[500px] flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-[32px] border border-white shadow-xl">
                  <div className="text-center">
                    <Sparkles className="text-stone-300 animate-pulse mx-auto mb-6" size={48} strokeWidth={1} />
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Awaiting Selection</p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {/* Implementation Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-gradient-to-r from-soma-forest to-stone-800 text-white p-8 rounded-[32px] relative overflow-hidden flex flex-row justify-between items-center gap-8 shadow-2xl print:hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-headline italic mb-3">Ready to Implement?</h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed italic max-w-md">
                  "Personally curated and delivered by Soma to ensure structural integrity, organizational alignment, and team safety."
                </p>
              </div>
              <Link to="/contact?purpose=Corporate Wellness Programme" className="px-8 py-4 bg-white text-soma-forest rounded-[20px] font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-stone-50 hover:-translate-y-1 active:translate-y-0.5 shadow-xl flex items-center justify-center gap-3 shrink-0">
                Request Strategy
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
