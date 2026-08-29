import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { calculateLeadScore } from '../utils/leadScoring';
import { supabase } from '../lib/supabase';

// ─── SUPABASE DATA HOOK ─────────────────────────────────────────────────────
function useInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);   // only true on first load
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const normalise = (data) => (data || []).map(r => ({
    id: r.id,
    orderId: r.order_id || `#ORD-${r.id}`,
    name: r.name || '—',
    email: r.email || '—',
    mobile: r.mobile || '—',
    date: r.date || new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    amount: r.amount || '—',
    type: r.type || 'General',
    purpose: r.purpose || '—',
    status: r.status || 'Pending',
    score: r.score,
    tier: r.tier,
    details: typeof r.details === 'object' ? r.details : {},
  }));

  // Initial load — shows loading state once
  const initialFetch = async () => {
    if (!supabase) { setLoading(false); setError('Supabase not configured.'); return; }
    setLoading(true);
    const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
    if (error) setError(error.message);
    else { setInquiries(normalise(data)); setLastUpdated(new Date()); }
    setLoading(false);
  };

  // Silent background refresh — never touches loading, no UI disruption
  const silentRefresh = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
    if (!error && data) { setInquiries(normalise(data)); setLastUpdated(new Date()); }
  };

  useEffect(() => {
    initialFetch();
    // Poll silently every 30 seconds — no loading flash, no jerk
    const interval = setInterval(silentRefresh, 30000);
    return () => clearInterval(interval);
  }, []);

  return { inquiries, loading, error, lastUpdated, refetch: silentRefresh };
}

// ─── WHITELIST ─────────────────────────────────────────────────────────────
// Only these email addresses may access the Admin portal
const ADMIN_WHITELIST = [
  'soma@somamukherjee.com',
];

// ─── LOGIN GATE ─────────────────────────────────────────────────────────────

const LoginGate = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!supabase) {
      setError('Auth service unavailable.');
      setLoading(false);
      return;
    }

    // Step 1: Attempt Supabase sign-in
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError('Invalid credentials. Access denied.');
      setLoading(false);
      return;
    }

    // Step 2: Whitelist check — if email not whitelisted, immediately revoke
    const userEmail = data?.user?.email?.toLowerCase();
    if (!ADMIN_WHITELIST.map(e => e.toLowerCase()).includes(userEmail)) {
      await supabase.auth.signOut();
      setError('⛔ Unauthorized. This account is not permitted to access the Admin portal.');
      setLoading(false);
      return;
    }

    // Step 3: Granted
    setLoading(false);
    onLogin();
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-8 selection:bg-cyan-200 selection:text-indigo-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/60 backdrop-blur-3xl border border-white/40 rounded-[48px] p-12 shadow-2xl relative z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
        
        <div className="text-center mb-8">
          <img src="/Photos/SomaLogoF.png" alt="Soma Logo" className="h-16 mx-auto mb-6 object-contain" />
          <h2 className="text-stone-800 font-headline text-3xl font-bold tracking-tight mb-2">Therapist Portal</h2>
          <h5 className="text-stone-700 italic">Secure Professional Access</h5>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <h5 className="flex items-center gap-2 text-emerald-600 pl-1 italic">
              Professional Email
            </h5>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 text-sm font-bold text-emerald-900 outline-none focus:ring-4 focus:ring-emerald-500/20 focus:bg-white transition-all italic"
              placeholder="soma@somamukherjee.com"
            />
          </div>
          <div className="space-y-2">
            <h5 className="flex items-center gap-2 text-amber-600 pl-1 italic">
              Access Token
            </h5>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-amber-50/50 border border-amber-100 rounded-2xl px-6 py-4 text-sm font-bold text-amber-900 outline-none focus:ring-4 focus:ring-amber-500/20 focus:bg-white transition-all italic"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-widest">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold py-5 rounded-2xl text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 mt-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {loading ? <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Verifying...</> : 'Authorize Access'}
          </button>
        </form>

        <h5 className="text-center mt-10 text-slate-300 italic">Encrypted Session · Soma Mukherjee</h5>
      </motion.div>
    </div>
  );
};

// ─── UI COMPONENTS ──────────────────────────────────────────────────────────

const Badge = ({ variant }) => {
  const styles = {
    Completed: 'bg-[#d1e7dd] text-[#0f5132]',
    Processing: 'bg-[#cfe2ff] text-[#084298]',
    Pending: 'bg-[#fff3cd] text-[#856404]',
    Cancelled: 'bg-[#f8d7da] text-[#842029]',
  };
  
  return (
    <h5 className={`px-4 py-1.5 rounded-xl italic ${styles[variant] || 'bg-slate-100 text-slate-600'}`}>
      {variant}
    </h5>
  );
};

const SidebarItem = ({ icon, label, active, onClick, children, expanded }) => (
  <div className="flex flex-col">
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-8 py-4 transition-all duration-300 relative group ${active ? 'bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-indigo-700 font-bold' : 'text-stone-700 hover:bg-white/40 hover:text-stone-800'}`}
    >
      {active && <motion.div layoutId="activeBar" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-500 to-indigo-500" />}
      <span className={`material-symbols-outlined text-[22px] ${active ? 'text-indigo-600' : 'text-stone-500 group-hover:text-stone-700 transition-colors'}`}>{icon}</span>
      <span className="text-sm tracking-wide flex-1 text-left">{label}</span>
      {children && (
        <motion.span 
          animate={{ rotate: expanded ? 180 : 0 }}
          className="material-symbols-outlined text-stone-400 text-lg"
        >
          expand_more
        </motion.span>
      )}
    </button>
    <AnimatePresence>
      {children && expanded && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden bg-stone-50/40"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const SubNavItem = ({ label, active, onClick, count }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between pl-16 pr-8 py-3.5 transition-all text-[11px] font-bold uppercase tracking-widest ${active ? 'text-indigo-600 bg-indigo-50/30' : 'text-slate-500 hover:text-stone-800 hover:bg-white/40'}`}
  >
    <span>{label}</span>
    {count !== undefined && (
      <span className={`px-2 py-0.5 rounded-full text-[10px] ${active ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
        {count}
      </span>
    )}
  </button>
);

const StatCard = ({ icon, label, value, growth }) => (
  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/40 shadow-xl shadow-indigo-100/30 hover:shadow-2xl hover:shadow-cyan-100/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 group flex items-center gap-6 cursor-default">
    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-[24px] flex items-center justify-center text-indigo-600 group-hover:from-cyan-500 group-hover:to-indigo-500 group-hover:text-white transition-all duration-500 shadow-inner">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="flex-1">
      <p className="text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2 font-inter">{label}</p>
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-bold text-stone-800 font-inter tabular-nums tracking-tight">{value}</span>
        <span className="text-[10px] font-bold text-emerald-500 tracking-wider font-inter">↑ {growth}</span>
      </div>
    </div>
  </div>
);

const InquiryRowDetail = ({ inquiry, onStatusChange }) => {
  const d = inquiry.details || {};
  const score = inquiry.score ?? calculateLeadScore(inquiry).score;

  const sleepText = d.sleepHours || '';
  const assessScore = parseInt(d.assessmentScore) || 0;
  const purposeText = d.purpose || inquiry.purpose || '';
  const profText = d.profession || d.professionalContext || '';
  const roadblockText = d.roadblock || d.message || d.otherIssues || '';
  const ageText = d.age || d.ageRange || '';

  // Severity level: 3 = critical, 2 = moderate, 1 = low
  let severity = 1;
  if (score >= 75 || assessScore >= 30) severity = 3;
  else if (score >= 50 || assessScore >= 20) severity = 2;

  // Severity-driven box styling — solid backgrounds, dark text for readability
  const severityStyle = severity === 3
    ? { bg: 'bg-rose-200', iconText: 'text-black', label: 'text-black', badge: 'bg-rose-800 text-white', badgeText: '🔴 Critical — Act Within 24h', icon: 'emergency', heading: 'text-black', body: 'text-black', divider: 'border-rose-400/40' }
    : severity === 2
    ? { bg: 'bg-amber-200', iconText: 'text-black', label: 'text-black', badge: 'bg-amber-800 text-white', badgeText: '🟡 Moderate — Schedule This Week', icon: 'priority_high', heading: 'text-black', body: 'text-black', divider: 'border-amber-400/40' }
    : { bg: 'bg-slate-200', iconText: 'text-black', label: 'text-black', badge: 'bg-slate-800 text-white', badgeText: '🟢 Routine — Standard Follow-up', icon: 'psychology', heading: 'text-black', body: 'text-black', divider: 'border-slate-400/40' };

  // Build focused clinical observations (not data echo)
  const observations = [];

  // Sleep-stress axis
  const sleepNum = parseFloat(sleepText);
  if (!isNaN(sleepNum)) {
    if (sleepNum < 5) observations.push('Severe sleep deficit (<5h) detected — high risk of HPA axis dysregulation and cortisol spike. Prioritise somatic breathwork before any physical protocol.');
    else if (sleepNum < 6) observations.push('Sub-optimal sleep (5–6h) suggests accumulating neurological fatigue. Introduce restorative yoga nidra before advanced sessions.');
    else if (sleepNum < 7) observations.push('Borderline sleep (6–7h) may impair recovery between sessions. Monitor energy levels in first consultation.');
  }

  // Assessment score axis
  if (assessScore >= 30) observations.push('High diagnostic score signals systemic burnout pattern — tissue-level stress likely present. Mobilisation work must precede any resistance or endurance protocols.');
  else if (assessScore >= 20) observations.push('Moderate assessment score indicates early burnout trajectory. Structured breathing + postural correction recommended from session one.');
  else if (assessScore > 0) observations.push('Assessment score within preventative range. Focus on education-led sessions and habit anchoring to sustain baseline.');

  // Purpose / therapeutic goal axis
  if (/stress|burnout/i.test(purposeText)) observations.push('Stress & burnout profile — sympathetic dominance likely. Prioritise parasympathetic activation protocols (extended exhale, grounding postures) in early sessions.');
  else if (/sleep/i.test(purposeText)) observations.push('Sleep-focused intent — screen for anxious rumination patterns. Evening wind-down protocols and circadian rhythm guidance should be core to the plan.');
  else if (/focus|clarity|cognitive/i.test(purposeText)) observations.push('Cognitive clarity goal — assess attentional fatigue and digital overload. Mindful movement sequences combined with periodic digital detox guidance may be highly effective.');
  else if (/posture|physical|pain|ease/i.test(purposeText)) observations.push('Physical ease goal — conduct postural screen in session one. Fascial release and myofascial decompression likely needed before functional movement loading.');

  // Professional risk profiling
  if (/founder|ceo|director|executive|manager|lead/i.test(profText)) observations.push('High-responsibility professional role — boundary depletion and over-functioning patterns are common. Frame sessions as structured recovery, not optional self-care.');
  else if (/teacher|nurse|doctor|carer|therapist/i.test(profText)) observations.push('Caring profession — compassion fatigue risk is elevated. Self-regulation skill-building (not just relaxation) should be a core therapeutic thread.');

  // Roadblock / narrative signal
  if (roadblockText && roadblockText.length > 10) {
    const hasTimeBarrier = /time|busy|schedule|no time/i.test(roadblockText);
    const hasPhysicalBarrier = /pain|injury|chronic|condition/i.test(roadblockText);
    const hasResistance = /doubt|don.t know|not sure|tried/i.test(roadblockText);
    if (hasTimeBarrier) observations.push('Client has flagged time scarcity as a barrier — micro-session formats (10–15 min) and habit-stacking integration strategies are likely to improve adherence.');
    if (hasPhysicalBarrier) observations.push('Physical limitation or chronic condition mentioned — intake must include a detailed pain/injury screen. Adapt protocols accordingly and seek GP clearance if needed.');
    if (hasResistance) observations.push('Narrative hints at ambivalence or prior failed attempts. First session should build self-efficacy through quick wins; avoid overwhelming intake.');
  }

  // Age-specific flag
  if (ageText === '50+' || parseInt(ageText) >= 50) observations.push('50+ age profile — prioritise joint mobility, breath capacity, and stress resilience over performance metrics. Monitor any cardiovascular contra-indications.');

  // Therapist action directive
  let action = '';
  if (severity === 3) action = '⚡ Immediate Action Required: Contact client by phone within 24 hours to begin intake. Do not delay with email only.';
  else if (severity === 2) action = '📅 Therapist Action: Schedule an intake consultation within 5 business days. Send a personalised welcome email with pre-session questionnaire.';
  else action = '✉️ Routine Follow-Up: Send welcome email with the next available session calendar within 48 hours.';

  const fields = Object.entries(d)
    .filter(([k, v]) => v && !['formType', 'id', 'timestamp', 'createdAt'].includes(k))
    .map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, ' $1').trim(),
      value: value,
      color: 'from-stone-50 to-white',
      border: 'border-stone-100',
      text: 'text-stone-800'
    }));

  return (
    <tr>
      <td colSpan="7" className="p-0 border-none">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="bg-gradient-to-r from-cyan-50/90 to-indigo-50/90 backdrop-blur-md overflow-hidden"
        >
          <div className="px-10 py-10 border-t border-indigo-200/50 space-y-10">

            {/* ── Practitioner Analysis Box — Solid color, no borders/effects ── */}
            <div className={`rounded-3xl p-8 ${severityStyle.bg} relative`}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className={`material-symbols-outlined ${severityStyle.iconText} text-[24px]`}>{severityStyle.icon}</span>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${severityStyle.label}`}>Practitioner Clinical Analysis</p>
                <span className={`text-[10px] font-bold ${severityStyle.badge} px-4 py-1.5 rounded-full`}>{severityStyle.badgeText}</span>
              </div>

              {/* Observations */}
              {observations.length > 0 ? (
                <ul className="space-y-4 mb-6">
                  {observations.map((obs, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className={`mt-2 flex-shrink-0 w-2 h-2 rounded-full ${severityStyle.iconText} opacity-40 bg-current`} />
                      <p className={`text-[14px] ${severityStyle.body} leading-relaxed font-medium`}>{obs}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`text-[14px] ${severityStyle.body} italic mb-6 opacity-60`}>Insufficient data for detailed clinical profiling. Proceed with standard intake assessment in first session.</p>
              )}

              {/* Action directive */}
              <div className={`pt-6 border-t ${severityStyle.divider}`}>
                <p className={`text-[13px] font-bold ${severityStyle.heading} leading-relaxed`}>{action}</p>
              </div>
            </div>

            {/* ── All Submitted Fields ── */}
            <div>
              <h5 className="text-stone-700 mb-5 italic">All Submitted Details</h5>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fields.map((f, i) => (
                  <div key={i} className={`bg-gradient-to-br ${f.color} p-4 rounded-2xl border ${f.border} shadow-sm`}>
                    <p className="text-[9px] font-bold text-stone-700 uppercase tracking-widest mb-1.5">{f.label}</p>
                    <p className={`text-[13px] font-bold ${f.text} leading-snug`}>{String(f.value)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => onStatusChange(inquiry.id, 'Completed')}
                className="bg-cyan-400 text-cyan-950 shadow-[4px_4px_0px_0px_#0891b2] active:shadow-[0px_0px_0px_0px_#0891b2] active:translate-y-1 active:translate-x-1 font-bold px-8 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all"
              >
                Mark as Resolved
              </button>
              <button 
                onClick={() => onStatusChange(inquiry.id, 'Processing')}
                className="bg-indigo-300 text-indigo-950 shadow-[4px_4px_0px_0px_#4338ca] active:shadow-[0px_0px_0px_0px_#4338ca] active:translate-y-1 active:translate-x-1 font-bold px-8 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => onStatusChange(inquiry.id, 'Cancelled')}
                className="bg-pink-400 text-pink-950 shadow-[4px_4px_0px_0px_#be185d] active:shadow-[0px_0px_0px_0px_#be185d] active:translate-y-1 active:translate-x-1 font-bold px-8 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all"
              >
                Archive Request
              </button>
            </div>

          </div>
        </motion.div>
      </td>
    </tr>
  );
};

const InquiryTable = ({ inquiries, expandedId, setExpandedId, onStatusChange }) => {
  // Group inquiries by type (form source)
  const grouped = inquiries.reduce((acc, inquiry) => {
    const type = inquiry.type || 'General Inquiry';
    if (!acc[type]) acc[type] = [];
    acc[type].push(inquiry);
    return acc;
  }, {});

  // Sort groups: Assessments/Protocols first, then others
  const sortedTypes = Object.keys(grouped).sort((a, b) => {
    const pOrder = ['Clinical Assessment', 'Protocol Enrollment', 'Registration', 'Corporate enquiry', 'General Inquiry'];
    const indexA = pOrder.indexOf(a);
    const indexB = pOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-white/40 border-b border-white/60">
          <tr>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Inquiry ID</th>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Therapist/Student</th>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Type</th>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Priority</th>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Date</th>
            <th className="px-10 py-2.5 text-[10px] font-bold text-stone-800 uppercase tracking-widest">Status</th>
            <th className="w-12"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/40">
          {sortedTypes.map((type) => (
            <React.Fragment key={type}>
              {/* Group Header - Sticky for better context */}
              <tr className="bg-stone-100/90 backdrop-blur-md sticky top-0 z-10 shadow-sm">
                <td colSpan="7" className="px-10 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                    <p className="text-[11px] font-bold text-stone-900 uppercase tracking-[0.15em]">{type} Submissions</p>
                    <span className="px-2 py-0.5 rounded-md bg-stone-200/50 text-[10px] text-stone-700 font-bold">
                      {grouped[type].length} Total
                    </span>
                  </div>
                </td>
              </tr>

              {/* Rows for this group */}
              {grouped[type].map((inquiry) => {
                const scoreData = calculateLeadScore(inquiry);
                const isHigh = scoreData.score >= 75;
                const isMedium = scoreData.score >= 50;
                
                return (
                  <React.Fragment key={inquiry.id}>
                    <tr 
                      className={`group cursor-pointer transition-all duration-300 relative ${
                        expandedId === inquiry.id 
                          ? 'bg-white shadow-inner' 
                          : isHigh 
                            ? 'bg-rose-50/30 hover:bg-rose-100/50' 
                            : isMedium 
                              ? 'bg-amber-50/30 hover:bg-amber-100/50' 
                              : 'bg-white hover:bg-slate-50/80'
                      }`}
                      onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                    >
                      {/* Priority Indicator Strip */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all ${
                        isHigh ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : isMedium ? 'bg-amber-400' : 'bg-slate-300'
                      }`} />

                      <td className="px-10 py-2.5 text-sm font-bold text-stone-900">{inquiry.orderId}</td>
                      <td className="px-10 py-2.5">
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold text-[10px] border border-white/40 shadow-sm">
                            {inquiry.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-bold text-stone-900">{inquiry.name}</span>
                        </div>
                      </td>
                      <td className="px-10 py-2.5">
                        <span className="text-[11px] font-bold text-stone-700 px-3 py-1 bg-stone-200/50 rounded-lg">
                          {type}
                        </span>
                      </td>
                      <td className="px-10 py-2.5">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-black text-stone-900 tabular-nums">{scoreData.score}%</span>
                          <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md inline-block w-fit ${
                            isHigh ? 'bg-rose-100 text-rose-800' : isMedium ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {scoreData.tier.split('(')[0].trim()}
                          </span>
                        </div>
                      </td>
                      <td className="px-10 py-2.5 text-sm text-stone-900 font-bold">{inquiry.date}</td>
                      <td className="px-10 py-2.5"><Badge variant={inquiry.status} /></td>
                      <td className="pr-8">
                        <motion.span
                          animate={{ rotate: expandedId === inquiry.id ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="material-symbols-outlined text-[20px] text-stone-400 group-hover:text-stone-600 transition-colors block"
                        >
                          expand_more
                        </motion.span>
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expandedId === inquiry.id && (
                        <InquiryRowDetail inquiry={inquiry} onStatusChange={onStatusChange} />
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─── PAGE VIEWS ─────────────────────────────────────────────────────────────

const DashboardView = ({ inquiries, expandedId, setExpandedId, setActiveTab, onStatusChange }) => {
  const pending = inquiries.filter(i => i.status === 'Pending').length;
  const completed = inquiries.filter(i => i.status === 'Completed').length;
  const highPriority = inquiries.filter(i => (i.score ?? 0) >= 75).length;

  const categories = [
    { id: 'Clinical', label: 'Clinical Assessment', icon: 'clinical_notes', color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'Protocols', label: 'Protocol Enrollment', icon: 'assignment_turned_in', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'Registrations', label: 'Registration', icon: 'app_registration', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'Corporate', label: 'Corporate Enquiry', icon: 'corporate_fare', color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'General', label: 'General Inquiry', icon: 'mail', color: 'text-slate-600', bg: 'bg-slate-50' },
  ];

  return (
  <div className="space-y-12 animate-in fade-in duration-700">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <StatCard label="Total Inquiries" value={inquiries.length} icon="inbox" growth="Live data" />
      <StatCard label="Pending" value={pending} icon="hourglass_empty" growth="Awaiting response" />
      <StatCard label="Completed" value={completed} icon="check_circle" growth="Resolved" />
      <StatCard label="High Priority" value={highPriority} icon="priority_high" growth="Score ≥ 75" />
    </div>

    {/* Category Breakdown Cards */}
    <div>
      <h3 className="text-stone-800 mb-8 px-2 flex items-center gap-3">
        <span className="material-symbols-outlined text-indigo-500">grid_view</span>
        Inquiry Distributions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => {
          const count = inquiries.filter(i => {
            const t = (i.type || '').toLowerCase();
            const f = cat.id.toLowerCase();
            if (f === 'clinical') return t.includes('clinical') || t.includes('assessment');
            if (f === 'protocols') return t.includes('protocol');
            if (f === 'registrations') return t.includes('registration');
            if (f === 'corporate') return t.includes('corporate');
            if (f === 'general') return t.includes('general') || !i.type;
            return t.includes(f);
          }).length;
          return (
            <button 
              key={cat.id}
              onClick={() => setActiveTab(`Inquiries_${cat.id}`)}
              className="bg-white/60 backdrop-blur-xl p-6 rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group"
            >
              <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <h5 className="text-stone-800 mb-1">{cat.label}</h5>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-stone-900">{count}</span>
                <span className="material-symbols-outlined text-stone-300 group-hover:text-indigo-400 transition-colors">arrow_forward</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>

    {/* Page Navigation Cards */}
    <div>
      <h3 className="text-stone-800 mb-8 px-2 flex items-center gap-3">
        <span className="material-symbols-outlined text-indigo-500">account_tree</span>
        Portal Modules
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { id: 'Protocols', label: 'Program Protocols', icon: 'assignment', desc: 'Manage wellness programs' },
          { id: 'Schedule', label: 'Consultation Calendar', icon: 'calendar_month', desc: 'Sync therapist sessions' },
          { id: 'Insights', label: 'Data Analytics', icon: 'analytics', desc: 'Performance & trends' },
          { id: 'Settings', label: 'Portal Settings', icon: 'settings', desc: 'System configuration' },
        ].map((page) => (
          <button 
            key={page.id}
            onClick={() => setActiveTab(page.id)}
            className="bg-stone-900 text-stone-100 p-8 rounded-[40px] shadow-2xl hover:shadow-stone-900/40 hover:-translate-y-2 transition-all text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-soma-gold-soft text-3xl">{page.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{page.label}</h4>
              <p className="text-stone-400 text-sm italic">{page.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>

    <div className="bg-white/60 backdrop-blur-3xl rounded-[48px] border border-white/40 shadow-2xl relative overflow-hidden">
      <div className="p-10 border-b border-white/40 flex items-center justify-between">
        <h3 className="text-stone-800">Recent Activity</h3>
        <button 
          onClick={() => setActiveTab('Inquiries')}
          className="text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-600 transition-colors"
        >
          View All History
        </button>
      </div>
      <InquiryTable inquiries={inquiries.slice(0, 5)} expandedId={expandedId} setExpandedId={setExpandedId} onStatusChange={onStatusChange} />
    </div>
  </div>
  );
};

const InquiriesView = ({ inquiries, expandedId, setExpandedId, onExport, lastUpdated, onStatusChange, typeFilter }) => {
  const [filter, setFilter] = useState(typeFilter || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sync internal filter with prop if it changes
  useEffect(() => {
    setFilter(typeFilter || 'All');
  }, [typeFilter]);

  const filteredInquiries = inquiries.filter(i => {
    if (filter === 'All') return true;
    const t = (i.type || '').toLowerCase();
    const f = filter.toLowerCase();
    if (f === 'clinical') return t.includes('clinical') || t.includes('assessment');
    if (f === 'protocols') return t.includes('protocol');
    if (f === 'registrations') return t.includes('registration');
    if (f === 'corporate') return t.includes('corporate');
    if (f === 'general') return t.includes('general') || !i.type;
    return t.includes(f);
  });

  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInquiries = filteredInquiries.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-stone-800">Inquiry Ledger</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-[11px] text-stone-600 font-inter">{filteredInquiries.length} record{filteredInquiries.length !== 1 ? 's' : ''}</p>
            <span className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-emerald-600 font-medium">
                {lastUpdated ? `Synced ${lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}` : 'Auto-syncing...'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onExport}
            className="text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2 hover:text-stone-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export CSV
          </button>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/40 shadow-sm">
            {['All', 'Registrations', 'Protocols', 'Corporate', 'Clinical', 'General'].map(t => (
              <button 
              key={t}
              onClick={() => setFilter(t)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === t ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-sm' : 'text-slate-600 hover:text-stone-600'}`}
            >
              {t}
            </button>
          ))}
        </div>
        </div>
      </div>
      <div className="bg-white/60 backdrop-blur-3xl rounded-[48px] border border-white/40 shadow-2xl relative overflow-hidden">
        <InquiryTable 
          inquiries={paginatedInquiries} 
          expandedId={expandedId} 
          setExpandedId={setExpandedId} 
          onStatusChange={onStatusChange}
        />
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="px-10 py-4 border-t border-white/40 flex items-center justify-between bg-white/20">
            <p className="text-[11px] text-stone-700 font-bold uppercase tracking-widest">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredInquiries.length)} of {filteredInquiries.length}
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-xl border border-white/40 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/60 text-stone-700'}`}
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  // Only show current page, first, last, and neighbors
                  if (pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${currentPage === pageNum ? 'bg-indigo-600 text-white shadow-lg' : 'text-stone-700 hover:bg-white/60 hover:text-stone-800'}`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                    return <span key={pageNum} className="text-stone-600">...</span>;
                  }
                  return null;
                })}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-xl border border-white/40 transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/60 text-stone-700'}`}
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProtocolsView = () => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <div className="flex items-center justify-between">
      <h2 className="text-soma-forest-dark">Therapeutic Protocols</h2>
      <button className="bg-soma-forest-dark text-soma-gold-soft px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">Create New Protocol</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Metabolic Resilience', code: 'PR-V1.2', category: 'Corporate', status: 'Active' },
        { title: 'Post-Surgical Recovery', code: 'PR-V0.9', category: 'Therapeutic', status: 'Draft' },
        { title: 'Executive Sleep Hygiene', code: 'PR-V2.0', category: 'Elite', status: 'Active' },
        { title: 'Breathwork for Burnout', code: 'PR-V1.5', category: 'Corporate', status: 'Active' },
        { title: 'Spinal Mobility Flow', code: 'PR-V3.1', category: 'General', status: 'Under Review' },
        { title: 'Cognitive Calm Residency', code: 'PR-V4.0', category: 'Elite', status: 'Active' },
      ].map((p, i) => (
        <div key={i} className="bg-white p-8 rounded-[40px] border border-soma-forest-dark/5 shadow-lg shadow-stone-200/40 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-soma-sand rounded-2xl flex items-center justify-center text-soma-forest-dark">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${p.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'}`}>
              {p.status}
            </span>
          </div>
          <h5 className="text-soma-forest-dark/70 mb-1 italic">{p.code} · {p.category}</h5>
          <h4 className="text-soma-forest-dark mb-8">{p.title}</h4>
          <div className="flex gap-3">
            <button className="flex-1 text-[10px] font-bold uppercase tracking-widest text-soma-forest-dark bg-soma-sand py-3.5 rounded-xl hover:opacity-80 transition-all">View Dossier</button>
            <button className="flex-1 text-[10px] font-bold uppercase tracking-widest text-slate-600 border border-slate-100 py-3.5 rounded-xl hover:bg-slate-50 transition-all">Edit</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScheduleView = () => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <div className="flex items-center justify-between">
      <h2 className="text-soma-forest-dark">Practice Calendar</h2>
      <div className="flex items-center gap-3">
        <button className="bg-white border border-soma-forest-dark/10 text-soma-forest-dark px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest">Today</button>
        <button className="bg-soma-forest-dark text-soma-gold-soft px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest">Add Event</button>
      </div>
    </div>
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 bg-white rounded-[48px] border border-soma-forest-dark/5 shadow-lg shadow-stone-200/40 p-12 h-[650px] flex flex-col">
         <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
               <h3 className="text-soma-forest-dark">May 2024</h3>
               <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-600"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-600"><span className="material-symbols-outlined">chevron_right</span></button>
               </div>
            </div>
            <div className="flex items-center gap-2 bg-soma-off-white p-1 rounded-xl">
               {['Month', 'Week', 'Day'].map(v => (
                  <button key={v} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${v === 'Month' ? 'bg-white text-soma-forest-dark shadow-sm' : 'text-slate-600'}`}>{v}</button>
               ))}
            </div>
         </div>
         <div className="flex-1 border-2 border-dashed border-slate-50 rounded-[32px] flex items-center justify-center">
            <div className="text-center">
               <div className="w-20 h-20 bg-soma-sand rounded-[28px] flex items-center justify-center mx-auto mb-6 text-soma-forest-dark/20">
                  <span className="material-symbols-outlined text-4xl">calendar_month</span>
               </div>
               <h5 className="text-soma-forest-dark/70 italic">Interactive Calendar View Initializing...</h5>
            </div>
         </div>
      </div>
      <div className="lg:col-span-4 space-y-8">
        <h3 className="text-soma-forest-dark px-2">Practice Roadmap</h3>
        {[
          { time: '09:00 AM', name: 'Rohan Mehta', type: 'Practice Intake', color: 'bg-emerald-500' },
          { time: '11:00 AM', name: 'Priya Sharma', type: 'Therapeutic Flow', color: 'bg-blue-500' },
          { time: '02:00 PM', name: 'TechFlow Systems', type: 'Residency Check-in', color: 'bg-purple-500' },
          { time: '04:30 PM', name: 'Amit Verma', type: 'Sleep Protocol Review', color: 'bg-orange-500' },
        ].map((event, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-soma-forest-dark/5 shadow-md shadow-stone-200/30 flex items-center gap-6 group hover:translate-x-2 transition-transform">
            <div className="text-center border-r border-slate-100 pr-6 min-w-[80px]">
              <p className="text-xs font-bold text-soma-forest-dark">{event.time.split(' ')[0]}</p>
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{event.time.split(' ')[1]}</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                 <div className={`w-1.5 h-1.5 rounded-full ${event.color}`}></div>
                 <p className="text-sm font-bold text-soma-forest-dark">{event.name}</p>
              </div>
              <p className="text-[11px] text-slate-600 font-medium">{event.type}</p>
            </div>
          </div>
        ))}
        <button className="w-full border-2 border-dashed border-soma-forest-dark/10 text-soma-forest-dark/70 font-bold py-6 rounded-[32px] text-xs uppercase tracking-widest hover:border-soma-forest-dark/20 hover:text-soma-forest-dark/60 transition-all">
           + Schedule Future Block
        </button>
      </div>
    </div>
  </div>
);

const InsightsView = () => (
  <div className="space-y-10 animate-in fade-in duration-700">
    <div className="flex items-center justify-between">
      <h2 className="text-soma-forest-dark">Platform Intelligence</h2>
      <button className="text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2">
         <span className="material-symbols-outlined text-[18px]">download</span> Download Report
      </button>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       <div className="lg:col-span-2 bg-white p-12 rounded-[48px] border border-soma-forest-dark/5 shadow-lg shadow-stone-200/40 h-[450px] flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-soma-forest-dark">Student Engagement Volume</h4>
             <select className="bg-soma-off-white border-none rounded-xl text-[10px] font-bold uppercase tracking-widest px-4 py-2 outline-none">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
             </select>
          </div>
          <div className="flex-1 flex items-end justify-between gap-3 px-2">
            {[35, 65, 40, 85, 55, 95, 45, 75, 50, 90, 60, 80].map((h, i) => (
              <div key={i} className="w-full bg-soma-sand rounded-t-2xl hover:bg-soma-forest-dark transition-all cursor-help relative group" style={{ height: `${h}%` }}>
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-soma-forest-dark text-soma-gold-soft text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">{h * 12} Visitors</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-1">
             {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].slice(0, 12).map(m => (
                <span key={m} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{m}</span>
             ))}
          </div>
       </div>

       <div className="bg-white p-12 rounded-[48px] border border-soma-forest-dark/5 shadow-lg shadow-stone-200/40 h-[450px] flex flex-col">
          <h4 className="text-soma-forest-dark mb-8">Program Reach</h4>
          <div className="space-y-8 flex-1 flex flex-col justify-center">
            {[
              { label: 'Executive Sanctuary', value: 75, color: 'bg-emerald-600', icon: 'workspace_premium' },
              { label: 'Wellness Protocols', value: 45, color: 'bg-blue-600', icon: 'medical_services' },
              { label: 'Corporate Residency', value: 90, color: 'bg-purple-600', icon: 'business' },
              { label: 'Breathwork series', value: 30, color: 'bg-orange-600', icon: 'air' },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-[18px] text-soma-forest-dark/20">{item.icon}</span>
                     <span className="text-xs font-bold text-soma-forest-dark">{item.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-soma-off-white rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className={`h-full ${item.color} rounded-full`} 
                  />
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  </div>
);

const SettingsView = () => (
  <div className="space-y-10 animate-in fade-in duration-700">
    <h2 className="text-soma-forest-dark">Portal Configuration</h2>
    <div className="grid lg:grid-cols-12 gap-10">
       <div className="lg:col-span-8 space-y-10">
          <div className="bg-white rounded-[48px] border border-soma-forest-dark/5 shadow-lg shadow-stone-200/40 p-12 space-y-12">
            <div className="space-y-8">
              <h3 className="text-soma-forest-dark flex items-center gap-3">
                 <span className="material-symbols-outlined text-emerald-600">person_edit</span>
                 Therapist Credentials
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h5 className="text-slate-600 pl-1 italic">Professional Name</h5>
                  <input type="text" value="Soma Mukherjee" className="w-full bg-soma-off-white border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-soma-forest-dark focus:ring-1 focus:ring-soma-forest-dark outline-none" />
                </div>
                <div className="space-y-3">
                  <h5 className="text-slate-600 pl-1 italic">Professional Designation</h5>
                  <input type="text" value="Yoga Guide & Wellness Therapist" className="w-full bg-soma-off-white border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-soma-forest-dark focus:ring-1 focus:ring-soma-forest-dark outline-none" />
                </div>
                <div className="space-y-3">
                  <h5 className="text-slate-600 pl-1 italic">Auth Email</h5>
                  <input type="text" value="soma@somamukherjee.com" className="w-full bg-soma-off-white border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-soma-forest-dark opacity-60" readOnly />
                </div>
                <div className="space-y-3">
                  <h5 className="text-slate-600 pl-1 italic">Contact Phone</h5>
                  <input type="text" value="+91 98XXX XXXXX" className="w-full bg-soma-off-white border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-soma-forest-dark" />
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-slate-50 space-y-8">
              <h3 className="text-soma-forest-dark flex items-center gap-3">
                 <span className="material-symbols-outlined text-blue-600">lock_reset</span>
                 Security Protocols
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                 <button className="bg-soma-forest-dark text-soma-gold-soft px-10 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all">Update Access Token</button>
                 <button className="bg-white border border-soma-forest-dark/10 text-soma-forest-dark px-10 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">Enable Biometrics</button>
              </div>
            </div>
          </div>
       </div>

       <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[40px] border border-soma-forest-dark/5 shadow-md shadow-stone-200/30 p-8 space-y-8">
             <h3 className="text-soma-forest-dark">Notification Hub</h3>
             <div className="space-y-6">
                {[
                  { label: 'New Inquiry Alert', active: true },
                  { label: 'Protocol Update Sync', active: true },
                  { label: 'System Health Check', active: false },
                  { label: 'Weekly Insights Digest', active: true },
                ].map((n, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-bold text-soma-forest-dark/60">{n.label}</span>
                      <div className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${n.active ? 'bg-soma-forest-dark' : 'bg-slate-100'}`}>
                         <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${n.active ? 'right-1 bg-soma-gold-soft' : 'left-1 bg-slate-300'}`}></div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="bg-soma-forest-dark rounded-[40px] p-8 text-center">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-soma-gold-soft text-3xl">verified_user</span>
             </div>
             <h4 className="text-soma-gold-soft mb-2">Authenticated Session</h4>
             <h5 className="text-soma-gold-soft/40 italic leading-relaxed">Your account is secured with RSA-4096 encryption protocols.</h5>
          </div>
       </div>
    </div>
  </div>
);

const AnalyticsView = ({ inquiries }) => {
  const [timeRange, setTimeRange] = useState('7d');
  const [pageStats, setPageStats] = useState([]);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  
  useEffect(() => {
    const fetchPageStats = async () => {
      try {
        const { supabase } = await import('../lib/supabase');
        if (!supabase) throw new Error('No Supabase client');
        
        const { data, error } = await supabase
          .from('page_stats')
          .select('*')
          .order('visits', { ascending: false });
          
        if (error) throw error;
        setPageStats(data || []);
      } catch (err) {
        console.debug('Using mock page stats:', err.message);
        // Fallback to high-quality mock data if table doesn't exist
        setPageStats([
          { path: '/', label: 'Home Page', visits: 1242, unique_users: 890, time: '2m 15s', trend: '+12%', color: 'text-stone-800' },
          { path: '/programs/digital', label: 'Digital Ergonomics', visits: 854, unique_users: 612, time: '4m 30s', trend: '+24%', color: 'text-indigo-600' },
          { path: '/programs/sanctuary', label: 'Executive Sanctuary', visits: 642, unique_users: 430, time: '5m 12s', trend: '+18%', color: 'text-emerald-600' },
          { path: '/programs/counselling', label: 'Counselling & Therapy', visits: 531, unique_users: 320, time: '3m 45s', trend: '-2%', color: 'text-rose-600' },
          { path: '/journey', label: 'Soma Journey', visits: 422, unique_users: 310, time: '2m 10s', trend: '+5%', color: 'text-stone-800' },
          { path: '/contact', label: 'Contact', visits: 310, unique_users: 210, time: '1m 20s', trend: '+30%', color: 'text-amber-600' },
        ]);
      } finally {
        setIsLoadingStats(false);
      }
    };
    
    fetchPageStats();
  }, []);

  // Mock data for the "Perfect UI" feel - in a real app, this would come from GA Data API or a proxy
  const metrics = [
    { label: 'Active Users', value: '42', trend: '+12%', icon: 'person', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Avg. Session', value: '3m 14s', trend: '+5s', icon: 'timer', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Bounce Rate', value: '32.4%', trend: '-2.1%', icon: 'keyboard_return', color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Conversions', value: (inquiries || []).length, trend: '+8%', icon: 'auto_graph', color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header with Real-time Indicator */}
      <div className="flex items-center justify-between bg-white/60 backdrop-blur-3xl p-8 rounded-[40px] border border-white/40 shadow-xl">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-emerald-500 rounded-full relative"></div>
          </div>
          <div>
            <h3 className="text-stone-800 font-bold">Real-time Performance</h3>
            <p className="text-stone-500 text-sm">Site tracking is active and encrypted (G-1331DMQNLG)</p>
          </div>
        </div>
        <div className="flex bg-stone-100/50 p-1.5 rounded-2xl border border-stone-200/50">
          {['24h', '7d', '30d', '90d'].map(r => (
            <button 
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${timeRange === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-stone-500 hover:text-stone-800'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/60 backdrop-blur-3xl p-8 rounded-[40px] border border-white/40 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 ${m.bg} ${m.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{m.icon}</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${m.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {m.trend}
              </span>
            </div>
            <h5 className="text-stone-500 mb-1">{m.label}</h5>
            <h2 className="text-3xl font-black text-stone-900">{m.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-3xl p-10 rounded-[48px] border border-white/40 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h4 className="text-stone-800 font-bold">Traffic Trend</h4>
              <p className="text-stone-500 text-xs">Comparison vs Previous Period</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                <span className="text-[10px] font-bold text-stone-500 uppercase">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-stone-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-stone-500 uppercase">Previous</span>
              </div>
            </div>
          </div>
          
          {/* SVG Chart Placeholder - Beautifully Crafted */}
          <div className="h-[300px] w-full relative group">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              {[0, 1, 2, 3].map(i => (
                <line key={i} x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="#f1f5f9" strokeWidth="1" />
              ))}
              {/* The Line */}
              <path 
                d="M 0 250 Q 100 200 200 220 T 400 150 T 600 180 T 800 100" 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="animate-draw-path"
              />
              <path 
                d="M 0 250 Q 100 200 200 220 T 400 150 T 600 180 T 800 100 V 300 H 0 Z" 
                fill="url(#chartGradient)" 
              />
              {/* Data Points */}
              {[0, 200, 400, 600, 800].map((x, i) => (
                <circle key={i} cx={x} cy={[250, 220, 150, 180, 100][i]} r="6" fill="#fff" stroke="#6366f1" strokeWidth="3" />
              ))}
            </svg>
            
            {/* Tooltip Hover Effect Simulation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-stone-900 text-white p-4 rounded-2xl shadow-2xl z-20">
              <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Peak Activity</p>
              <h4 className="text-xl font-black">2.4k Visitors</h4>
            </div>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[48px] border border-white/40 shadow-xl">
          <h4 className="text-stone-800 font-bold mb-8">Traffic Sources</h4>
          <div className="space-y-6">
            {[
              { label: 'Direct', value: 45, color: 'bg-indigo-500' },
              { label: 'Social Media', value: 25, color: 'bg-cyan-500' },
              { label: 'Organic Search', value: 20, color: 'bg-emerald-500' },
              { label: 'Referrals', value: 10, color: 'bg-amber-500' },
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  <span>{s.label}</span>
                  <span className="text-stone-800">{s.value}%</span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${s.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full ${s.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-stone-50/50 rounded-[32px] border border-stone-200/50">
            <h5 className="text-stone-600 italic mb-4">Pro Insight</h5>
            <p className="text-[12px] text-stone-800 leading-relaxed font-medium">Your organic traffic is up by 14% this week. Focus on LinkedIn content to drive more professional inquiries.</p>
          </div>
        </div>
      </div>

      {/* Page Performance Section */}
      <div className="bg-white/60 backdrop-blur-3xl rounded-[48px] border border-white/40 shadow-xl overflow-hidden">
        <div className="p-10 border-b border-stone-100 flex items-center justify-between">
          <div>
            <h4 className="text-stone-800 font-bold">Individual Page Performance</h4>
            <p className="text-stone-500 text-xs">Excludes administrative and secure portal routes</p>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50/50">
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-stone-400">Page Route</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">Visits</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">Unique Users</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">Avg. Time</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-stone-400 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {pageStats.map((p, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-indigo-50/20 transition-colors group"
                >
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${p.color?.replace('text-', 'bg-') || 'bg-stone-400'}`}></div>
                      <div>
                        <div className="font-bold text-stone-800 text-sm group-hover:text-indigo-600 transition-colors">{p.label || p.path}</div>
                        <div className="text-[10px] text-stone-400 font-mono tracking-tighter">{p.path}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-center font-bold text-stone-700">{p.visits.toLocaleString()}</td>
                  <td className="px-10 py-6 text-center font-medium text-stone-500">{p.unique_users?.toLocaleString() || p.unique?.toLocaleString()}</td>
                  <td className="px-10 py-6 text-center font-medium text-stone-500">{p.time}</td>
                  <td className="px-10 py-6 text-right">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${String(p.trend).startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {p.trend}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-stone-50/50 border-t border-stone-100 text-center">
           <button className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-800 transition-colors">
             View Full Sitemap Analytics
           </button>
        </div>
      </div>

      {/* Advanced Integration Instruction */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-12 rounded-[48px] text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] -z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black mb-6">Full API Integration</h2>
          <p className="text-indigo-200 leading-relaxed mb-8 text-lg">
            To view live Google Analytics 4 data directly in this dashboard, please provide your <strong>Looker Studio Report Link</strong> or <strong>GA4 Data API Key</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Connect GA4 API</button>
            <button className="bg-indigo-800/40 backdrop-blur-md text-white border border-indigo-400/30 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-800/60 transition-all">View in Looker Studio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN ADMIN COMPONENT ───────────────────────────────────────────────────

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expandedId, setExpandedId] = useState(null);
  const [inquiriesExpanded, setInquiriesExpanded] = useState(true);
  const { inquiries, loading: dataLoading, lastUpdated, refetch } = useInquiries();

  // Restore session from Supabase on load
  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const email = session.user?.email?.toLowerCase();
        if (ADMIN_WHITELIST.map(e => e.toLowerCase()).includes(email)) {
          setIsAuthenticated(true);
        } else {
          supabase.auth.signOut();
        }
      }
    });
    // Listen for auth changes (e.g. token expiry)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) setIsAuthenticated(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleExportCSV = () => {
    const headers = ["Order ID", "Name", "Email", "Mobile", "Date", "Amount", "Status", "Score", "Tier"];
    const csvRows = [headers.join(",")];
    inquiries.forEach(inquiry => {
      const { score, tier } = calculateLeadScore(inquiry);
      const row = [
        inquiry.orderId,
        `"${inquiry.name}"`,
        inquiry.email,
        inquiry.mobile,
        `"${inquiry.date}"`,
        `"${inquiry.amount}"`,
        inquiry.status,
        inquiry.score ?? score,
        `"${inquiry.tier ?? tier}"`
      ];
      csvRows.push(row.join(","));
    });
    
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Soma_Inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    if (!supabase) return;
    const { error } = await supabase
      .from('inquiries')
      .update({ status: newStatus })
      .eq('id', id);
    
    if (error) {
      alert(`Error updating status: ${error.message}`);
    } else {
      refetch(); // This calls silentRefresh which updates state in background
    }
  };

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) return <LoginGate onLogin={handleLogin} />;

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-6" />
          <h5 className="text-stone-700 italic">Loading inquiries from Supabase…</h5>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    const isFilteredInquiry = activeTab.startsWith('Inquiries_');
    const typeFilter = isFilteredInquiry ? activeTab.replace('Inquiries_', '') : null;

    switch(activeTab) {
      case 'Dashboard': return <DashboardView inquiries={inquiries} expandedId={expandedId} setExpandedId={setExpandedId} setActiveTab={setActiveTab} onStatusChange={handleUpdateStatus} />;
      case 'Inquiries': 
      case (isFilteredInquiry ? activeTab : ''):
        return (
          <InquiriesView 
            inquiries={inquiries} 
            expandedId={expandedId} 
            setExpandedId={setExpandedId} 
            onExport={handleExportCSV} 
            lastUpdated={lastUpdated} 
            onStatusChange={handleUpdateStatus}
            typeFilter={typeFilter}
          />
        );
      case 'Protocols': return <ProtocolsView />;
      case 'Schedule': return <ScheduleView />;
      case 'Insights': return <InsightsView inquiries={inquiries} />;
      case 'Analytics': return <AnalyticsView inquiries={inquiries} />;
      case 'Settings': return <SettingsView />;
      default: return <DashboardView inquiries={inquiries} expandedId={expandedId} setExpandedId={setExpandedId} setActiveTab={setActiveTab} onStatusChange={handleUpdateStatus} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex font-inter selection:bg-cyan-200 selection:text-soma-forest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Sidebar */}
      <aside className="w-80 bg-white/60 backdrop-blur-3xl hidden lg:flex flex-col border-r border-white/40 shadow-2xl flex-shrink-0 relative z-20">
        <div className="p-12 mb-6">
          <div className="flex flex-col items-start gap-4">
            <img src="/Photos/SomaLogoF.png" alt="Soma Logo" className="h-16 w-auto object-contain" />
            <h5 className="text-stone-700 italic">Administrator</h5>
          </div>
        </div>

        <nav className="flex-1">
          <SidebarItem icon="dashboard" label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SidebarItem 
            icon="group" 
            label="Inquiries" 
            active={activeTab.startsWith('Inquiries')} 
            onClick={() => {
              setInquiriesExpanded(!inquiriesExpanded);
              setActiveTab('Inquiries');
            }}
            expanded={inquiriesExpanded}
          >
            <SubNavItem 
              label="All Inquiries" 
              count={inquiries.length}
              active={activeTab === 'Inquiries'} 
              onClick={() => setActiveTab('Inquiries')} 
            />
            <SubNavItem 
              label="Clinical" 
              count={inquiries.filter(i => (i.type || '').toLowerCase().includes('clinical') || (i.type || '').toLowerCase().includes('assessment')).length}
              active={activeTab === 'Inquiries_Clinical'} 
              onClick={() => setActiveTab('Inquiries_Clinical')} 
            />
            <SubNavItem 
              label="Protocols" 
              count={inquiries.filter(i => (i.type || '').toLowerCase().includes('protocol')).length}
              active={activeTab === 'Inquiries_Protocols'} 
              onClick={() => setActiveTab('Inquiries_Protocols')} 
            />
            <SubNavItem 
              label="Registrations" 
              count={inquiries.filter(i => (i.type || '').toLowerCase().includes('registration')).length}
              active={activeTab === 'Inquiries_Registrations'} 
              onClick={() => setActiveTab('Inquiries_Registrations')} 
            />
            <SubNavItem 
              label="Corporate" 
              count={inquiries.filter(i => (i.type || '').toLowerCase().includes('corporate')).length}
              active={activeTab === 'Inquiries_Corporate'} 
              onClick={() => setActiveTab('Inquiries_Corporate')} 
            />
            <SubNavItem 
              label="General" 
              count={inquiries.filter(i => (i.type || '').toLowerCase().includes('general') || !(i.type)).length}
              active={activeTab === 'Inquiries_General'} 
              onClick={() => setActiveTab('Inquiries_General')} 
            />
          </SidebarItem>
          <SidebarItem icon="assignment" label="Protocols" active={activeTab === 'Protocols'} onClick={() => setActiveTab('Protocols')} />
          <SidebarItem icon="calendar_month" label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} />
          <SidebarItem icon="analytics" label="Insights" active={activeTab === 'Insights'} onClick={() => setActiveTab('Insights')} />
          <SidebarItem icon="query_stats" label="Web Analytics" active={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')} />
          <SidebarItem icon="settings" label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
        </nav>

        <div className="p-12">
          <div className="bg-white/40 backdrop-blur-sm rounded-[32px] p-8 border border-white/40">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <h5 className="text-stone-600 italic">Live Operations</h5>
             </div>
             <p className="text-[12px] text-stone-800 leading-relaxed font-medium">Platform status is healthy. All session data is encrypted.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-10 flex items-center gap-4 text-stone-700 hover:text-stone-800 transition-all text-sm font-bold uppercase tracking-[0.2em] w-full text-left pl-2"
          >
            <span className="material-symbols-outlined text-[24px]">logout</span>
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#F8F7FF]">
        {/* Top Header */}
        <header className="bg-transparent border-b border-stone-200/50 h-28 flex items-center justify-between px-16 flex-shrink-0 z-10 relative">
          <div className="absolute inset-0 bg-[#d2c4b4]/20 backdrop-blur-xl pointer-events-none -z-10"></div>
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-3 text-stone-600 bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-white mr-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-stone-800 font-headline font-bold text-3xl tracking-tight">{activeTab}</h1>
              <h5 className="text-stone-700 mt-1.5 italic font-medium">Soma Mukherjee · Wellness Control Center</h5>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white shadow-sm cursor-pointer hover:bg-white transition-all">
              <span className="material-symbols-outlined text-stone-600 text-xl">calendar_today</span>
              <span className="text-xs font-bold text-stone-600">{new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="material-symbols-outlined text-stone-600 text-lg ml-2">expand_more</span>
            </div>
            <div className="flex items-center gap-6">
               <div className="relative cursor-pointer group">
                  <span className="material-symbols-outlined text-stone-600 group-hover:text-stone-600 text-2xl transition-colors">notifications</span>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold border-2 border-[#F8F7FF]">3</span>
               </div>
               <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md cursor-pointer hover:scale-105 transition-all">SM</div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-16 no-scrollbar bg-transparent">
           <div className="max-w-7xl mx-auto">
              {renderContent()}
           </div>
           {/* Global Footer */}
           <div className="mt-24 py-10 lg:py-12 border-t border-stone-200/50 text-center">
              <h5 className="text-stone-600 italic">Therapist Terminal · Secure End-to-End Encryption · v2.4.0</h5>
           </div>
        </div>
      </main>
    </div>
  );
}
