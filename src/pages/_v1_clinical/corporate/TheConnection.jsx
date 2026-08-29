import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat, DrawLine, HoverCard } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Process', 'Engagement', 'FAQs'];

const FAILURES = [
  { icon: 'lock_person', title: 'Institutional Friction', desc: 'Addressing the physiological cost of navigating high-stakes corporate hierarchies and the neural load of sensitive decision-making.' },
  { icon: 'clinical_notes', title: 'Metabolic Isolation', desc: 'Mitigating the executive "silo effect" where performance stressors are compounding without an objective clinical dialogue.' },
  { icon: 'shield_locked', title: 'Data Sovereignty Risk', desc: 'Providing an absolute neutral ground for mental and physiological recovery outside the internal organizational data ecosystem.' },
  { icon: 'psychology', title: 'Autonomic Stall', desc: 'Restoring the ability to shift from high-stakes output to restorative dialogue through high-authority clinical partnership.' },
];

const PHASES = [
  { week: 'Stage 1 - Intake', title: 'Clinical Mapping', desc: 'A secure, clinical-first documentation of current physiological stressors. Establishing the baseline for autonomic recovery.' },
  { week: 'Stage 2 - Dialogue', title: 'Neutral Reset', desc: 'High-authority consultation with a SOMA performance steward. Translating institutional tension into actionable physiological recovery.' },
  { week: 'Stage 3 - Integration', title: 'Sovereignty Roadmap', desc: 'A bespoke framework for maintaining regulatory control and cognitive peak in sensitive professional environments.' },
];

const FAQS = [
  { q: 'Is this a standard EAP (Employee Assistance Program)?', a: 'No. Standard EAPs are often not equipped for the specific physiological and strategic load of high-performance executives. We provide clinical-grade performance stewardship.' },
  { q: 'How do you ensure absolute neutrality?', a: 'The Connection operates as a third-party clinical sanctuary. We hold no reporting lines into the organization, ensuring an objective, safe-space dialogue.' },
  { q: 'Is the data shared with HR?', a: 'Clinical data is held under strict sovereign protocols. The organization receives anonymized institutional resilience metrics only, with zero individual identification.' },
  { q: 'Who are the performance stewards?', a: 'Our stewards are clinical professionals specializing in autonomic regulation and high-stakes executive performance logic.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function TheConnection() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-2 bg-soma-off-white min-h-screen font-inter">
      {/* Breadcrumbs */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/corporate" className="hover:text-emerald-700 transition-colors">Corporate</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold whitespace-nowrap overflow-hidden text-ellipsis">The Connection</span>
        </nav>
      </motion.div>

      {/* Hero Section - Standard Split Grid */}
      <section className="relative overflow-hidden font-inter border-b border-slate-100/50">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200" alt="Sovereign Dialogue" className="w-full h-full object-cover grayscale opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-soma-off-white/60 via-soma-off-white/90 to-soma-off-white" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">Institutional Pillar CP-04</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4 relative z-20">
              The Connection: <br /><span className="text-soma-gold font-bold italic">Sovereign Performance Dialogue.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-500 font-inter leading-relaxed max-w-lg mb-8">
              A dedicated safe-space protocol for high-performance leaders. We translate institutional tension into actionable physiological recovery through absolute neutrality.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mb-8 font-inter">
              <AnimatedStat value="Neutral" label="Third-party dialogue" delay={0.45} />
              <div className="w-px h-10 bg-slate-200" />
              <AnimatedStat value="Secure" label="Confidential intake" delay={0.55} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 signature-gradient text-white rounded-xl font-inter font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Inquire for Private Intake</Link>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
             <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200" alt="Sovereign Dialogue" className="w-full h-full object-cover grayscale opacity-80" />
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
                    layoutId="connection-tab-pill"
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
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Institutional Stressors</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none mb-8">Clinical Neutrality in High-Stakes Environments.</h2>
              <DrawLine delay={0.3} className="h-0.5 bg-emerald-700 w-16" />
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-10 mb-16 font-inter">
              {FAILURES.map((f, i) => (
                <StaggerItem key={i}>
                  <HoverCard className="p-10 bg-white border border-slate-100 rounded-[32px] h-full shadow-sm hover:shadow-xl transition-all duration-500">
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

        {activeTab === 'Process' && (
          <motion.section key="process" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">The Interaction</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none">Stages of Sovereign Dialogue.</h2>
            </div>
            <StaggerContainer className="space-y-8 font-inter" stagger={0.15}>
              {PHASES.map((p, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 8 }} className="bg-white rounded-[24px] p-10 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-100 flex flex-col md:flex-row gap-8 items-start">
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

        {activeTab === 'Engagement' && (
          <motion.section key="engagement" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4 block">Safe-Space Models</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-none">Performance Stewardship.</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 font-inter">
              <div className="lg:col-span-2 bg-white rounded-[32px] p-12 border border-slate-100 shadow-xl overflow-hidden relative font-inter">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32" />
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Executive Retainer</div>
                <div className="text-6xl md:text-7xl font-headline font-bold text-slate-900 mb-4 tracking-tighter">Sovereign.</div>
                <p className="text-sm text-slate-500 mb-12 font-bold max-w-md">Absolute third-party performance stewardship for senior leadership committees.</p>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12 font-inter">
                  {['Unlimited 1-on-1 Dialogue', 'Monthly Resilience Audits', 'Emergency Reset Access', 'Biometric ROI Monitoring', 'Complete Neutrality Logic'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-soma-gold text-xl font-bold">verified_user</span>
                      <span className="text-sm text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center py-5 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-emerald-900 transition-all shadow-xl font-inter">Initiate Retainer Briefing</Link>
              </div>
              <div className="bg-emerald-900 rounded-[32px] p-10 text-white flex flex-col justify-between overflow-hidden relative font-inter shadow-2xl">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-full -mr-24 -mt-24 blur-3xl" />
                 <div>
                    <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-8">Safe-Space Logic</p>
                    <div className="text-5xl font-headline font-bold mb-4 font-headline">Neutral.</div>
                    <p className="text-emerald-100/70 text-sm leading-relaxed mb-12 font-bold">We operate outside of internal systems. No reporting lines. Absolute psychological sovereignty.</p>
                 </div>
                 <div className="border-t border-emerald-800 pt-8 font-inter">
                    <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-2">Security Standard</p>
                    <p className="text-2xl font-bold font-headline">Clinical Grade</p>
                 </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faqs" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-20 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.25em] mb-4">Ethics & Specs</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight mb-8">Technical Queries.</h2>
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
                          <div className="px-8 pb-8 font-inter">
                            <p className="text-sm text-slate-500 leading-relaxed font-bold">{faq.a}</p>
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
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-8 rounded-[24px] border border-slate-100">
            <div className="flex items-center gap-6 font-inter">
               <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  <span className="material-symbols-outlined text-emerald-800">lock_outline</span>
               </div>
               <div>
                  <h5 className="font-headline font-bold text-slate-900">Confidential Intake</h5>
                  <p className="text-sm text-slate-500 font-bold">Now accepting private performance stewardship intakes for the upcoming cycle.</p>
               </div>
            </div>
            <div className="flex items-center gap-6 font-inter">
               <div className="text-right hidden sm:block">
                  <p className="text-[10px] uppercase font-bold text-emerald-700 tracking-widest">Dialogue Status</p>
                  <p className="text-xl font-headline font-bold text-slate-900">Absolute Neutrality</p>
               </div>
               <Link to="/contact" className="px-8 py-4 signature-gradient text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg text-center font-inter">Initiate Dialogue</Link>
            </div>
         </div>
      </section>

      {/* Bottom CTA Expansion */}
      <section className="bg-slate-950 py-32 px-6 lg:px-16 relative overflow-hidden border-t border-white/5 font-inter text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 font-inter">
          <p className="text-[10px] font-bold text-soma-gold uppercase tracking-[0.3em] mb-6 font-inter">Sovereign Performance</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 tracking-tight italic font-headline">Every high-stakes career <br/>needs a neutral sanctuary.</h2>
          <p className="text-slate-400 mb-12 text-lg font-bold leading-relaxed font-inter">Protecting the professional ecosystem through clinical stewardship and absolute dialogue sovereignty.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center font-inter">
            <Link to="/contact" className="px-12 py-5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-slate-100 transition-all shadow-2xl font-inter">Contact Intake Specialist</Link>
            <Link to="/corporate" className="flex items-center justify-center gap-2 px-12 py-5 bg-white/5 text-white rounded-xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all font-inter">
               <span className="material-symbols-outlined text-[18px]">arrow_back</span> Corporate Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
