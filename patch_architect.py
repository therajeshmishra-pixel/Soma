import re

with open('src/pages/corporate/SessionArchitect.jsx', 'r') as f:
    content = f.read()

# 1. Imports
content = content.replace("ChevronDown\n}", "ChevronDown,\n  Copy,\n  Link as LinkIcon,\n  Calendar\n}")

# 2. Add copy shareable link logic and state
state_match = "  const [state, setState] = useState({"
new_state = """  const [state, setState] = useState({
    companyName: '',
    teamName: '',
    teamSize: '',
    mode: 'single',"""
content = content.replace(state_match, new_state)

copy_func = """  const handleEmail = () => {
"""
new_copy_func = """  const [copyStatus, setCopyStatus] = useState('');
  
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

  const handleEmail = () => {"""
content = content.replace(copy_func, new_copy_func)

# 3. Text replacements
content = content.replace("Neuro-Somatic Reset", "Recovery & Performance Session")
content = content.replace("Architectural protocol", "Session plan")
content = content.replace("architectural protocol", "session plan")
content = content.replace("architectural sequence", "session plan")
content = content.replace("Somatic care", "Physical & nervous system recovery")
content = content.replace("somatic care", "physical & nervous system recovery")
content = content.replace(
    '"Translate workplace requirements into a precise, customized biological blueprint for your team\'s sustained output."',
    '"Tell us what your team is dealing with. Get a structured session plan you can implement next week."'
)
content = content.replace("SessionArchitect | SOMA", "Corporate Wellness Session Blueprint | Soma Mukherjee")

# 4. Typo
content = content.replace("} Optimized", "} Optimised")

# 5. ROI Dynamic Text in allocateSession
roi_old = """  if (issues.includes('stress_burnout') || issues.includes('anxiety_overload')) {
    hrBenefitsMap.set('mental_resilience', {
      title: 'Mental Resilience',
      story: 'By addressing high mental load and anxiety, we help shift your team from a state of "fight-or-flight" into calm, sustainable execution, reducing the risk of burnout.'
    });
  }
  if (issues.includes('posture_pain') || issues.includes('sedentary')) {
    hrBenefitsMap.set('ergonomic_relief', {
      title: 'Ergonomic Relief',
      story: 'Targeting physical stiffness and sedentary habits reduces the risk of repetitive strain injuries, lowering healthcare costs and keeping your workforce agile.'
    });
  }
  if (issues.includes('low_energy') || issues.includes('focus') || issues.includes('screen_fatigue')) {
    hrBenefitsMap.set('sustained_output', {
      title: 'Sustained Output',
      story: 'Combating fatigue and scattered focus restores depleted energy reserves, turning sluggish afternoons into periods of high-quality, sustained productivity.'
    });
  }"""

roi_new = """  if (issues.includes('stress_burnout') && issues.includes('anxiety_overload')) {
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
  }"""
content = content.replace(roi_old, roi_new)

# 6. Pricing logic
price_old = """  const durationExtra = (duration - 20) * 100;
  const modalityExtra = (activeInBlueprint.length - 1) * 500;
  const price = 5000 + durationExtra + modalityExtra;"""

price_new = """  let priceMin = 0;
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
  const price = { min: priceMin, max: priceMax, hasSize: teamSizeInt > 0 };"""
content = content.replace(price_old, price_new)

# 7. Step 0 inputs and Mode toggle
controls_section_old = """          {/* Controls */}
          <div className="lg:col-span-5 space-y-4 print:hidden">
            <LayoutGroup>
              <ControlCard title="01. Context" icon={ShieldCheck} color="from-stone-50 to-emerald-50/30">"""

controls_section_new = """          {/* Controls */}
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

              <ControlCard title="01. Context" icon={ShieldCheck} color="from-stone-50 to-emerald-50/30">"""
content = content.replace(controls_section_old, controls_section_new)

# Add Programme toggle
env_old = """                  <div>
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-[0.3em] block mb-4">Environment</span>
                    <div className="flex gap-3">"""

env_new = """                  <div>
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
                    <div className="flex gap-3">"""
content = content.replace(env_old, env_new)

# 8. Output rendering changes
# Company name display
title_old = """                        <h2 className="text-soma-forest mb-2 italic leading-[0.9]">
                          {blueprint.title}
                        </h2>"""
title_new = """                        {(state.companyName || state.teamName) && (
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
                        )}"""
content = content.replace(title_old, title_new)

# Action buttons
actions_old = """                    {/* Investment & Actions */}
                    <div className="pt-8 flex flex-row justify-between items-center gap-6 border-t border-stone-50">
                      <div>
                        <div className="text-xl md:text-2xl font-headline font-bold text-soma-forest leading-none italic mb-2">
                          <a href="mailto:contact@somamukherjee.com" className="hover:text-emerald-700 transition-colors">
                            Mail to contact@somamukherjee.com
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em]">
                          <ShieldCheck size={10} className="text-emerald-600" /> Institutional Inquiry
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={handleDownload}
                          className="px-8 py-4 bg-stone-900 text-white rounded-[20px] font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-stone-800 hover:-translate-y-1 active:translate-y-0.5 shadow-lg active:shadow-inner flex items-center justify-center gap-3"
                        >
                          <Download size={14} /> Download
                        </button>
                        <button
                          onClick={handleEmail}
                          className="px-8 py-4 bg-white text-stone-600 rounded-[20px] font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-stone-50 hover:-translate-y-1 active:translate-y-0.5 shadow-md active:shadow-inner flex items-center justify-center gap-3"
                        >
                          <Mail size={14} /> Email
                        </button>
                      </div>
                    </div>"""

actions_new = """                    {/* Investment & Actions */}
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
                    </div>"""
content = content.replace(actions_old, actions_new)

with open('src/pages/corporate/SessionArchitect.jsx', 'w') as f:
    f.write(content)

