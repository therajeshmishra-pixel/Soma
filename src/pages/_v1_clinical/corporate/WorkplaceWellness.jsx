import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat, DrawLine, HoverCard } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Methodology', 'ROI', 'FAQs'];

const CHALLENGES = [
  { 
    icon: 'posture', 
    title: 'Systemic Stagnation', 
    desc: 'Prolonged sitting that leads to compromised spine health and chronic posture-related discomfort.' 
  },
  { 
    icon: 'balance', 
    title: 'Regulatory Imbalance', 
    desc: 'Chronic stress and burnout that bypass executive function and reduce cognitive flexibility.' 
  },
  { 
    icon: 'battery_very_low', 
    title: 'Metabolic Decline', 
    desc: 'Reduced energy and mental fatigue resulting from high-intensity billing cycles and screen-biological costs.' 
  },
];

const PILLARS = [
  { 
    id: '01', 
    title: 'Posture & Spine Health', 
    subtitle: 'Kinetic Baseline', 
    desc: 'Moving beyond ergonomic hardware to teach structural integrity through posture correction and neck/back pain prevention.' 
  },
  { 
    id: '02', 
    title: 'Stress Management', 
    subtitle: 'Physiological Regulation', 
    desc: 'Addressing stress as a regulatory issue. Utilizing breath-based techniques and vagal tone optimization to restore mental clarity.' 
  },
  { 
    id: '03', 
    title: 'Kinetic movement', 
    subtitle: 'Desktop Yoga', 
    desc: 'Short, practical micro-recovery patterns designed to reverse physical stiffness without disrupting the professional routine.' 
  },
  { 
    id: '04', 
    title: 'Burnout Prevention', 
    subtitle: 'Nervous System Regulation', 
    desc: 'Restorative protocols for high-pressure teams. Ensuring that high-performance doesn’t lead to systemic failure.' 
  },
  { 
    id: '05', 
    title: 'Lifestyle & Energy', 
    subtitle: 'Metabolic Resilience', 
    desc: 'Education on sleep architecture, recovery awareness, and building daily routines that support long-term vitality.' 
  },
];

const FORMATS = [
  { icon: 'location_on', title: 'On-site Sessions', desc: 'Direct, hands-on somatic training within your facility.' },
  { icon: 'platform', title: 'Digital Portals', desc: 'Live and recorded sessions for remote and hybrid teams.' },
  { icon: 'event_repeat', title: 'Strategic Intensives', desc: 'One-time workshops or weekly/monthly resilience modules.' },
];

const FAQS = [
  { q: 'Is this a standard "Wellness Perk"?', a: 'No. Standard wellness initiatives often fail because they address symptoms through external perks. We address the internal regulatory systems of the individual.' },
  { q: 'How do you measure Institutional ROI?', a: 'Through bi-weekly assessment benchmarks mapping Collective Focus Potential, Reduced Decision Friction, and Autonomic Recovery Vitals.' },
  { q: 'How long has this methodology been vetted?', a: 'Soma Mukherjee has spent 22 continuous years collaborating with Tata Consultancy Services (TCS), supporting thousands of associates globally.' },
  { q: 'Can this be scaled to global offices?', a: 'Yes. Our digital wellness portals and centralized clinical standards ensure consistent biological ROI regardless of the professional\'s location.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function WorkplaceWellness() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Workplace Wellness Pune | Corporate Clinical Yoga Therapy | SOMA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '25 years of clinical expertise in corporate burnout prevention and physiological recovery. Trusted by TCS and global IT leaders.');
    }
  }, []);

  return (
    <main className="pt-2 bg-soma-off-white min-h-screen font-inter">
      {/* Breadcrumbs */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto font-inter">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/corporate" className="hover:text-emerald-700 transition-colors">Corporate</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold whitespace-nowrap overflow-hidden text-ellipsis">Workplace Wellness</span>
        </nav>
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden font-inter border-b border-slate-100/50">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="/Photos/WorkPlaceWell.png" alt="Clinical Workplace Wellness" className="w-full h-full object-cover grayscale opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-soma-off-white/60 via-soma-off-white/90 to-soma-off-white" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">Institutional Pillar CP-02</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4 uppercase relative z-20">
              Workplace Wellness: <br /><span className="text-soma-gold font-bold italic lowercase italic">Architecting performance.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-500 font-inter leading-relaxed max-w-lg mb-8">
              Modern leadership requires more than engagement; it requires <span className="text-emerald-800 font-bold">physiological resilience</span>. We transition teams from high-load to a baseline of sustained excellence.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mb-8 font-inter">
              <AnimatedStat value="22 Yrs" label="Continuous TCS Legacy" delay={0.45} />
              <div className="w-px h-10 bg-slate-200" />
              <AnimatedStat value="Clinical" label="Prevention Architecture" delay={0.55} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 signature-gradient text-white rounded-xl font-inter font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Request Systems Audit</Link>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
             <img src="/Photos/WorkPlaceWell.png" alt="Clinical Workplace Wellness" className="w-full h-full object-cover grayscale opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-r from-soma-off-white via-soma-off-white/20 to-transparent" />
          </FadeInRight>
        </div>
      </section>

      {/* REFACTORED: High-Authority Segmented Control Tabs */}
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
                    layoutId="wellness-tab-pill"
                    className="absolute inset-0 bg-[#DED7C2] rounded-full"
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
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">The Business Case</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none mb-8">Physiological ROI for Organizations.</h2>
              <p className="text-slate-500 max-w-2xl leading-relaxed mb-8 font-bold">Employee health is the primary engine of organizational sustainability. Standard wellness initiatives often fail because they address symptoms rather than the individual’s internal regulatory systems.</p>
              <DrawLine delay={0.3} className="h-0.5 bg-emerald-700 w-16" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 font-inter">
              {CHALLENGES.map((c, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <span className="material-symbols-outlined text-[32px] text-emerald-800 mb-6 font-bold">{c.icon}</span>
                    <h3 className="text-xl font-headline font-bold text-slate-900 mb-4">{c.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">{c.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </motion.section>
        )}

        {activeTab === 'Methodology' && (
          <motion.section key="methodology" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Structured Interventions</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none">The 5 SOMA Pillars.</h2>
              <p className="text-slate-500 mt-6 font-bold">Vetted by 25 years of clinical expertise and two decades of IT deployment.</p>
            </div>
            <StaggerContainer className="grid lg:grid-cols-2 gap-8 font-inter">
              {PILLARS.map((p, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all flex items-start gap-8 group">
                    <div className="text-3xl font-headline font-bold text-emerald-700 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover:bg-emerald-900 group-hover:text-white transition-colors">{p.id}</div>
                    <div>
                       <span className="text-[10px] font-bold text-soma-gold uppercase tracking-[0.15em] mb-2 block">{p.subtitle}</span>
                       <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">{p.title}</h3>
                       <p className="text-slate-500 text-sm leading-relaxed font-bold">{p.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}

        {activeTab === 'ROI' && (
          <motion.section key="roi" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            {/* Formats Section */}
            <div className="mb-32">
              <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-6">Integration Models</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {FORMATS.map((f, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-700 mb-6 font-bold">{f.icon}</span>
                    <h4 className="text-lg font-headline font-bold text-slate-900 mb-3">{f.title}</h4>
                    <p className="text-slate-500 text-xs font-bold">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practitioner Bio */}
            <div className="bg-slate-900 text-white rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div>
                     <span className="text-soma-gold font-bold tracking-[0.2em] text-[10px] uppercase block mb-8">Pedigree & Legacy</span>
                     <h3 className="text-4xl lg:text-5xl font-headline font-bold mb-8 leading-tight">Vetted by Global <br />Leadership.</h3>
                     <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">Soma Mukherjee brings 25 years of clinical experience to the corporate bridge. Her methodology is not theoretical; it is a proven system for human capital management.</p>
                     <div className="space-y-6 mb-12">
                        <div className="flex gap-6">
                           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-soma-gold font-bold">TCS</div>
                           <div>
                              <p className="text-white font-bold mb-1">22 Years Collaboration</p>
                              <p className="text-slate-500 text-sm">Supporting thousands of TCS associates globally from the Pune IT hub.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-soma-gold material-symbols-outlined">school</div>
                           <div>
                              <p className="text-white font-bold mb-1">Academic Rigor</p>
                              <p className="text-slate-500 text-sm">Master’s in Yoga and Science of Living; PG Diploma in Psychological Counselling.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="relative group rounded-[40px] overflow-hidden border border-white/10 p-2 bg-white/5 shadow-2xl">
                     <img src="/Photos/SomaN4.png" alt="Soma Mukherjee Clinical Corporate Training" className="w-full aspect-square object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
               </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faqs" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-20 font-inter">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Strategic Alignment</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-8">Clinical Queries.</h2>
            </div>
            <StaggerContainer className="space-y-4 font-inter" stagger={0.1}>
              {FAQS.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-[20px] border border-slate-100 overflow-hidden shadow-sm font-inter">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition-all font-inter"
                    >
                      <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
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

      {/* Persuasion Footer */}
      <section className="bg-white py-12 px-6 lg:px-16 border-t border-slate-100 font-inter">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-12 rounded-[48px] border border-slate-100">
            <div className="max-w-xl">
               <h5 className="font-headline font-bold text-slate-900 tracking-tight text-3xl mb-4 italic">"Invest in the System, Not the Symptom."</h5>
               <p className="text-sm text-slate-500 font-bold leading-relaxed">Transition from reactive wellness to preventative architecture. We invite you to experience the SOMA methodology through a 30-minute complimentary Systems Audit.</p>
            </div>
            <div className="flex flex-col items-end gap-6 font-inter">
               <Link to="/contact" className="px-10 py-5 signature-gradient text-white rounded-xl font-bold text-base hover:scale-105 transition-all shadow-lg text-center font-inter">Request Organizational Audit</Link>
               <p className="text-[10px] uppercase font-bold text-emerald-700 tracking-[0.25em]">Global Facility Deployment</p>
            </div>
         </div>
      </section>

      {/* Bottom CTA Expansion */}
      <section className="bg-slate-950 py-32 px-6 lg:px-16 relative overflow-hidden border-t border-white/5 font-inter text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-[10px] font-bold text-soma-gold uppercase tracking-[0.3em] mb-6">Preventative Architecture</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 tracking-tight">Sustainable ROI through <br/>Physiological Mastery.</h2>
          <p className="text-slate-400 mb-12 text-lg font-bold leading-relaxed">Building institutional resilience for the next era of high-output leadership.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-12 py-5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-slate-100 transition-all shadow-2xl font-inter">Start Systems Audit</Link>
            <Link to="/corporate" className="flex items-center justify-center gap-2 px-12 py-5 bg-white/5 text-white rounded-xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all font-inter">
               <span className="material-symbols-outlined text-[18px]">arrow_back</span> Corporate Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
