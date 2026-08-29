import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat, DrawLine } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Curriculum', 'Pricing', 'FAQs'];

const FAILURES = [
  { icon: 'bolt', title: 'Sympathetic Overdrive', desc: 'Neurological recalibration of the "always-on" state common in high-stakes environments, addressing disrupted cortisol curves and sleep latency.' },
  { icon: 'schedule', title: 'Circadian Phase Latency', desc: 'Clinical resynchronization of the biological clock for professionals navigating international time zones and irregular work cycles.' },
  { icon: 'respiratory_rate', title: 'Respiratory Load Dysfunction', desc: 'Addressing upper-airway resistance and diaphragmatic inefficiency that degrades sleep quality and neural recovery.' },
  { icon: 'vitals', title: 'Vagal Tone Degradation', desc: 'Addressing the systemic failure of autonomic reset, leading to chronic fatigue, morning brain fog, and diminished cognitive edge.' },
];

const PHASES = [
  { week: 'Phase 1 - Weeks 1–4', title: 'Vagal Tone Baseline', desc: 'Neurological mapping of autonomic response. Identification of sympathetic hyperarousal triggers and implementation of the initial recalibration protocol.' },
  { week: 'Phase 2 - Weeks 5–8', title: 'Circadian Resynchronization', desc: 'Precision thermal regulation and metabolic timing to re-anchor the circadian oscillator. Optimization of the melatonin-cortisol sequence.' },
  { week: 'Phase 3 - Weeks 9–12', title: 'Structural Recovery Logic', desc: 'Finalizing the sleep blueprint. Integrating structural and neurological protocols to ensure permanent regulatory balance under high-pressure conditions.' },
];

const FAQS = [
  { q: 'Who is the program protocol designed for?', a: 'High-performing executives, tech founders, and professionals experiencing sympathetic overdrive, circadian phase latency, or systemic fatigue that has failed conventional interventions.' },
  { q: 'What is the commitment logic?', a: 'Two 60-minute clinical sync sessions per week. All somatic theory modules are designed for high-efficiency integration into a professional schedule.' },
  { q: 'Is this eligible for clinical reimbursement?', a: 'Documentation is provided for HSA/FSA eligibility. As a clinical-grade neurological recovery protocol, this program often qualifies for professional development or wellness coverage.' },
  { q: 'What are the diagnostic check-ins?', a: 'Bi-weekly biometric analysis and autonomic response mapping to ensure the protocol is moving according to the established recovery baseline.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function SleepArchitecture() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-2 bg-soma-off-white min-h-screen font-inter">
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/programs" className="hover:text-emerald-700 transition-colors">Programs</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold whitespace-nowrap overflow-hidden text-ellipsis">Sleep Architecture</span>
        </nav>
      </motion.div>

      {/* Hero */}
      <section className="relative overflow-hidden font-inter border-b border-slate-100/50">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="/Photos/Sleepn1.png" alt="Somatic architecture of sleep" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-soma-off-white/60 via-soma-off-white/90 to-soma-off-white" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">Pillar 02 · Sleep Science</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4 relative z-20">
              Sleep Architecture: <br /><span className="text-soma-gold font-bold">Neurological Recovery & Circadian Resynchronization.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-500 font-inter leading-relaxed max-w-lg mb-8">
              A high-authority 12-week clinical methodology for the intellectual athlete. We rebuild the neurological blueprint for rest through precision resynchronization.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mb-8 font-inter">
              <AnimatedStat value="12 Weeks" label="The clinical window for permanent neurological recalibration." delay={0.45} />
              <div className="w-px h-10 bg-slate-200" />
              <AnimatedStat value="2×/week" label="High-touch clinical sync sessions." delay={0.55} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/assessment" className="px-8 py-4 signature-gradient text-white rounded-xl font-inter font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Take Diagnostic</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="px-8 py-4 bg-white text-slate-800 rounded-xl font-inter font-bold text-sm border border-slate-200 hover:border-emerald-300 transition-colors inline-block">Enroll in Program</Link>
              </motion.div>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
            <img src="/Photos/Sleepn1.png" alt="Somatic architecture of sleep" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-soma-off-white via-soma-off-white/20 to-transparent" />
          </FadeInRight>
        </div>
      </section>

      {/* High-Authority Segmented Control Tabs */}
      <div className="sticky top-[80px] z-40 bg-soma-off-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-center md:justify-start">
            <div className="inline-flex bg-slate-200/50 p-1.5 rounded-full gap-1 min-w-max">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 md:px-12 py-3 rounded-full text-[12px] font-inter font-bold uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="sleep-tab-pill"
                      className="absolute inset-0 bg-soma-stone rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.section key="overview" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-16 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4">Addressed Failures</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight max-w-2xl leading-none">Mapping the physiological deficits of high-output professionals.</h2>
              <DrawLine delay={0.3} className="h-0.5 bg-emerald-700 mt-8 w-16" />
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16 font-inter">
              {FAILURES.map((f) => (
                <StaggerItem key={f.title}>
                  <motion.div whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} className="bg-white rounded-[24px] p-10 border border-slate-100 shadow-sm h-full flex flex-col items-start text-left font-inter">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 transition-colors group-hover:bg-emerald-50">
                      <span className="material-symbols-outlined text-[28px] text-emerald-800 font-bold">{f.icon}</span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-slate-900 mb-4">{f.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm font-bold">{f.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900 rounded-[32px] p-12 lg:p-16 text-white overflow-hidden relative border border-white/5 font-inter">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] -mr-48 -mt-48 font-bold" />
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-8 relative z-10 font-inter">Delivery Model Architecture</p>
              <div className="grid lg:grid-cols-3 gap-12 relative z-10 font-inter">
                {[
                  { title: 'Clinical Syncs', desc: 'High-touch, 1-on-1 somatic architecture sessions designed for neurological recalibration.', icon: 'person_outline' },
                  { title: 'Somatic Theory', desc: 'Self-paced neurological and biomechanical modules for cognitive integration and alignment.', icon: 'architecture' },
                  { title: 'Diagnostic Testing', desc: 'Bi-weekly check-ins mapping mobility, thermal regulation, and autonomic response.', icon: 'biotech' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start gap-4 font-inter">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-emerald-400 font-bold">{item.icon}</span>
                    </div>
                    <h4 className="text-lg font-headline font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}

        {activeTab === 'Curriculum' && (
          <motion.section key="curriculum" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-16 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4">Clinical Sequence</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight leading-none">The 12-week blueprint for permanent realignment.</h2>
            </div>
            <StaggerContainer className="space-y-6 font-inter" stagger={0.15}>
              {PHASES.map((p, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 8 }} className="bg-white rounded-[24px] p-10 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-100 flex flex-col md:flex-row gap-8 items-start font-inter">
                    <div className="w-14 h-14 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">{i + 1}</div>
                    <div className="font-inter">
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 font-inter">{p.week}</div>
                      <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">{p.title}</h3>
                      <p className="text-slate-500 leading-relaxed max-w-2xl font-bold">{p.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}

        {activeTab === 'Pricing' && (
          <motion.section key="pricing" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-16 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4">Investment Infrastructure</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight leading-none">High-Authority Clinical Enrollment.</h2>
              <p className="text-slate-500 mt-6 max-w-lg italic font-bold">"Efficiency is the byproduct of biological alignment."</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 font-inter">
              <div className="lg:col-span-2 bg-white rounded-[32px] p-12 border border-slate-100 shadow-xl overflow-hidden relative font-inter">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 font-bold" />
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 font-inter">All-Inclusive Protocol Access</div>
                <div className="text-7xl font-headline font-bold text-slate-900 mb-4 tracking-tighter">$1,200</div>
                <p className="text-sm text-slate-500 mb-12 font-bold">Full 12-week clinical governance and biometric integration.</p>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12 font-inter">
                  {['24 × Clinical Sync Sessions', 'Full Somatic Theory Library', '6 × Biometric Diagnostic Check-ins', 'Encrypted Performance Roadmap', 'Priority Clinical Access'].map((item) => (
                    <div key={item} className="flex items-center gap-3 font-inter">
                      <span className="material-symbols-outlined text-emerald-600 text-xl font-bold">check</span>
                      <span className="text-sm text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center py-5 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-emerald-900 transition-all shadow-xl font-inter">Apply for Protocol Intake</Link>
              </div>
              <div className="bg-emerald-900 rounded-[32px] p-10 text-white flex flex-col justify-between overflow-hidden relative font-inter">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-full -mr-24 -mt-24 blur-3xl font-bold" />
                <div className="font-inter">
                   <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-8 font-inter">Cohort Status</p>
                   <div className="text-6xl font-headline font-bold mb-4 font-headline">10 / 12</div>
                   <p className="text-emerald-100/70 text-sm leading-relaxed mb-12 font-bold font-inter">Enrollment is limited. Precision clinical oversight requires restricted cohort volume.</p>
                </div>
                <div className="border-t border-emerald-800 pt-8 font-inter">
                   <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-2 font-inter">Next Intake</p>
                   <p className="text-2xl font-bold font-headline">Beginning in 7 Days</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faqs" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-16 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4">Clinical Clarifications</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight leading-none">Technical queries.</h2>
            </div>
            <StaggerContainer className="space-y-4 font-inter" stagger={0.1}>
              {FAQS.map((faq, i) => (
                <StaggerItem key={i}>
                  <motion.div layout className="bg-white rounded-[20px] border border-slate-100 overflow-hidden shadow-sm font-inter">
                    <motion.button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition-colors font-inter">
                      <span className="font-bold text-slate-900 text-sm font-inter">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="material-symbols-outlined text-slate-400 font-bold">expand_more</motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                          <div className="px-8 pb-8 font-inter">
                            <p className="text-sm text-slate-500 leading-relaxed font-bold font-inter">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Cohort Scarcity Footer */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white py-12 px-6 lg:px-16 border-t border-slate-100 font-inter">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-8 rounded-[24px] border border-slate-100 font-inter">
            <div className="flex items-center gap-6 font-inter">
               <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse font-bold">
                  <span className="material-symbols-outlined text-emerald-800 font-bold">notifications_active</span>
               </div>
               <div>
                  <h5 className="font-headline font-bold text-slate-900">Current Intake Availability</h5>
                  <p className="text-sm text-slate-500 font-bold">Limited to 10 participants. Only 2 protocols remain for the upcoming cohort.</p>
               </div>
            </div>
            <div className="flex items-center gap-4 font-inter">
               <div className="text-right hidden sm:block font-inter">
                  <p className="text-[10px] uppercase font-bold text-emerald-700 tracking-widest font-inter">Enrollment Closes</p>
                  <p className="text-xl font-headline font-bold text-slate-900">Next intake begins in 7 days</p>
               </div>
               <Link to="/contact" className="px-8 py-4 bg-emerald-800 text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg font-inter">Secure Seat</Link>
            </div>
         </div>
      </motion.section>

      {/* Bottom CTA Expansion */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-950 py-32 px-6 lg:px-16 relative overflow-hidden font-inter border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none font-bold" />
        <div className="max-w-3xl mx-auto text-center relative z-10 font-inter">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-6 font-inter">Neurological Sovereignty</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 tracking-tight leading-none font-headline">Reclaim your neurological <br/>right to rest.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-400 mb-12 text-lg font-bold leading-relaxed font-inter">Implementing 12 weeks of clinical governance to ensure complete resynchronization. No generic fixes. Absolute precision.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 justify-center font-inter">
            <Link to="/assessment" className="px-12 py-5 bg-emerald-700 text-white rounded-xl font-bold text-base hover:bg-emerald-600 transition-all shadow-2xl font-inter text-center">Take Clinical Diagnostic</Link>
            <Link to="/programs" className="flex items-center justify-center gap-2 px-12 py-5 bg-white/5 text-white rounded-xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all font-inter text-center">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span> All Protocols
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
