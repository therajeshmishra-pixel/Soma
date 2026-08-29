import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat, DrawLine, HoverCard } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Methodology', 'ROI', 'FAQs'];

const FAILURES = [
  { icon: 'trending_down', title: 'Executive Burnout Loop', desc: 'Addressing the physiological breakdown of leadership teams under sustained high-stakes pressure and "always-on" expectations.' },
  { icon: 'groups_3', title: 'Team Cohesion Decay', desc: 'Neurological misalignment within leadership units that leads to friction, cognitive stall, and diminished strategic agility.' },
  { icon: 'psychology_alt', title: 'Decision Fatigue Load', desc: 'Calibrating the biological bandwidth of decision-makers to restore metabolic efficiency and long-range foresight.' },
  { icon: 'security_update_good', title: 'Institutional Fragility', desc: 'Transforming fragile organizational stressors into homeostatic resilience patterns across the senior internal ecosystem.' },
];

const PHASES = [
  { week: 'Phase 1 - Weeks 1–4', title: 'Diagnostic Neural Mapping', desc: 'Baseline assessment of organizational stress-points. Identifying the physiological origin of team-level cognitive stall.' },
  { week: 'Phase 2 - Weeks 5–8', title: 'Tactical Autonomic Reset', desc: 'Implementation of the Soma-Worksheet protocols for shared team resilience. Syncing the collective nervous system for high-performance cohesion.' },
  { week: 'Phase 3 - Weeks 9–12', title: 'Homeostatic Leadership Logic', desc: 'Permanent integration of resilience architecture into the institutional culture. Autonomic sovereignty for all management levels.' },
];

const FAQS = [
  { q: 'Is this a standard "Team Building" workshop?', a: 'No. This is a clinical-grade physiological intervention. We focus on the neurological and metabolic foundations of high-performance teams, not generic soft-skills.' },
  { q: 'What is the commitment for senior leadership?', a: 'Weekly 90-minute intensive syncs. All modules are designed to be integrated directly into existing strategy sessions to minimize operational friction.' },
  { q: 'How do you measure Institutional ROI?', a: 'Through bi-weekly assessment benchmarks mapping Collective Focus Potential, Reduced Decision Friction, and Autonomic Recovery Vitals.' },
  { q: 'Can this be deployed globally?', a: 'Yes. Our methodology is designed for hybrid and international teams, with digital sync protocols that bridge different time zones and cultural contexts.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function StrategicWorkshops() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-2 bg-soma-off-white min-h-screen font-inter">
      {/* Breadcrumbs */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto font-inter">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/corporate" className="hover:text-emerald-700 transition-colors">Corporate</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold whitespace-nowrap overflow-hidden text-ellipsis">Strategic Workshops</span>
        </nav>
      </motion.div>

      {/* Hero Section - Standard Split Grid */}
      <section className="relative overflow-hidden font-inter border-b border-slate-100/50">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" alt="Corporate Strategy" className="w-full h-full object-cover grayscale opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-soma-off-white/60 via-soma-off-white/90 to-soma-off-white" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">Institutional Pillar CP-01</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4 relative z-20">
              Strategic Workshops: <br /><span className="text-soma-gold font-bold italic">Resilience for Leadership.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-500 font-inter leading-relaxed max-w-lg mb-8">
              We translate clinical physiological resets into strategic organizational power. A 12-week intensive for senior leadership teams ready to master collective focus.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mb-8 font-inter">
              <AnimatedStat value="90 Min" label="Weekly high-touch syncs" delay={0.45} />
              <div className="w-px h-10 bg-slate-200" />
              <AnimatedStat value="12 Wks" label="Integration protocol" delay={0.55} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 signature-gradient text-white rounded-xl font-inter font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Inquire for Intake</Link>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" alt="Corporate Strategy" className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000"/>
             <div className="absolute inset-0 bg-gradient-to-r from-soma-off-white via-soma-off-white/20 to-transparent" />
          </FadeInRight>
        </div>
      </section>

      {/* High-Authority Segmented Control Tabs */}
      <div className="sticky top-16 z-40 bg-soma-off-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-start">
          <div className="bg-slate-200/50 p-1.5 rounded-full flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 md:px-8 py-2.5 rounded-full text-[12px] font-inter font-bold uppercase tracking-[0.08em] transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="workshops-tab-pill"
                    className="absolute inset-0 bg-soma-stone rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.section key="overview" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">The Challenge</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none mb-8">Clinical Solutions for Institutional Stress.</h2>
              <DrawLine delay={0.3} className="h-0.5 bg-emerald-700 w-16" />
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-10 font-inter">
              {FAILURES.map((f, i) => (
                <StaggerItem key={i}>
                  <HoverCard className="p-10 bg-white border border-slate-100 rounded-[32px] h-full shadow-sm hover:shadow-xl transition-all duration-500 font-inter">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
                       <span className="material-symbols-outlined text-[28px] text-emerald-800 font-bold">{f.icon}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">{f.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm font-bold">{f.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}

        {activeTab === 'Methodology' && (
          <motion.section key="methodology" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Institutional Reset</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none">The 12-Week Strategic Blueprint.</h2>
            </div>
            <StaggerContainer className="space-y-8 font-inter" stagger={0.15}>
              {PHASES.map((p, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 8 }} className="bg-white rounded-[24px] p-10 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-100 flex flex-col md:flex-row gap-8 items-start font-inter">
                    <div className="w-14 h-14 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">{i + 1}</div>
                    <div className="font-inter">
                       <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 block">{p.week}</span>
                       <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">{p.title}</h3>
                       <p className="text-slate-500 leading-relaxed max-w-2xl font-bold">{p.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}

        {activeTab === 'ROI' && (
          <motion.section key="roi" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Institutional Models</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none">Investment Infrastructure.</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 font-inter">
               <div className="bg-slate-900 text-white p-12 lg:p-16 rounded-[48px] relative overflow-hidden group font-inter border border-white/5 shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                  <span className="text-soma-gold font-bold tracking-[0.15em] text-[10px] uppercase block mb-8 font-inter">Executive Track</span>
                  <h3 className="text-3xl font-headline font-bold mb-6 font-headline">Leadership Core Intensive</h3>
                  <p className="text-slate-400 font-light mb-12 font-inter font-light">Designed for C-suite and senior management teams focused on collective Autonomic Reset.</p>
                  <ul className="space-y-4 mb-12 font-inter font-light">
                     {['12 × Shared Strategy Syncs', 'Individual Autonomic Profiles', 'Priority Clinical Hotline', 'Quarterly ROI Audit'].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                         <span className="material-symbols-outlined text-soma-gold text-lg">check_circle</span>
                         {item}
                       </li>
                     ))}
                  </ul>
                  <Link to="/contact" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all shadow-xl font-inter">Request Executive Proposal</Link>
               </div>
               <div className="bg-white border border-slate-100 p-12 lg:p-16 rounded-[48px] shadow-lg flex flex-col justify-center font-inter">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Institutional Scaling</h4>
                  <div className="text-5xl font-headline font-bold text-slate-900 mb-6 tracking-tight">Modular <br/>Deployment.</div>
                  <p className="text-slate-500 font-inter font-light leading-relaxed mb-10">Scale the Soma methodology across your entire workforce through modular digital integration and management training pods.</p>
                  <div className="w-full h-px bg-slate-100 mb-10" />
                  <div className="flex items-baseline gap-2 mb-8 font-inter">
                     <span className="text-xs font-bold text-slate-400 uppercase">Engagement Model</span>
                     <span className="text-3xl font-headline font-bold text-slate-900">Custom Billed</span>
                  </div>
                  <Link to="/contact" className="text-emerald-700 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform font-inter text-sm">Inquire for Scaling Specs <span className="material-symbols-outlined">arrow_forward</span></Link>
               </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faqs" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-20 font-inter">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Technical Specs</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-8">Technical Queries.</h2>
            </div>
            <StaggerContainer className="space-y-4 font-inter" stagger={0.1}>
              {FAQS.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-[20px] border border-slate-100 overflow-hidden shadow-sm font-inter">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition-all font-inter"
                    >
                      <span className="font-bold text-slate-900 text-sm">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} className="material-symbols-outlined text-slate-400 font-bold">expand_more</motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="px-8 pb-8 font-inter font-bold">
                            <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Cohort Scarcity Footer */}
      <section className="bg-white py-12 px-6 lg:px-16 border-t border-slate-100 font-inter">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-8 rounded-[24px] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-6 font-inter">
               <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  <span className="material-symbols-outlined text-emerald-800">notifications_active</span>
               </div>
               <div>
                  <h5 className="font-headline font-bold text-slate-900 tracking-tight">Intake Availability</h5>
                  <p className="text-sm text-slate-500 font-inter font-light">Now accepting executive cohorts for the upcoming Institutional Reset cycle.</p>
               </div>
            </div>
            <div className="flex items-center gap-6 font-inter">
               <div className="text-right hidden sm:block font-inter">
                  <p className="text-[10px] uppercase font-bold text-emerald-700 tracking-widest">Enrollment Closes</p>
                  <p className="text-xl font-headline font-bold text-slate-900">Next window in 14 days</p>
               </div>
               <Link to="/contact" className="px-8 py-4 bg-emerald-800 text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg text-center font-inter">Secure Intake slot</Link>
            </div>
         </div>
      </section>

      {/* Bottom CTA Expansion */}
      <section className="bg-slate-950 py-32 px-6 lg:px-16 relative overflow-hidden border-t border-white/5 font-inter text-center font-inter">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 font-inter">
          <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-6 font-inter">Institutional Resilience</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 tracking-tight italic font-headline">Rebuild the ecosystem <br/>from the nervous system up.</h2>
          <p className="text-slate-400 mb-12 text-lg font-bold leading-relaxed font-inter">No generic wellness. Absolute clinical governance. Reclaim the institutional edge.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center font-inter">
            <Link to="/contact" className="px-12 py-5 signature-gradient text-white rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-2xl text-center font-inter">Request Private Briefing</Link>
            <Link to="/corporate" className="flex items-center justify-center gap-2 px-12 py-5 bg-white/5 text-white rounded-xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all text-center font-inter">
               <span className="material-symbols-outlined text-[18px]">arrow_back</span> Corporate Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
