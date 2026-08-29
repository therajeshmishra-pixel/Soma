import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, DrawLine } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Protocol', 'Pricing', 'FAQs'];

const CONDITIONS = [
  { icon: 'psychology', title: 'Chronic Burnout', desc: 'Neural recalibration for cortisol-depleted systems and cognitive fatigue using somatic and breathwork-based recovery protocols.' },
  { icon: 'layers', title: 'Complex Stress', desc: 'Resolution of layered physiological patterns triggered by high-stakes decision making - addressing root neurological causes, not symptoms.' },
  { icon: 'trending_up', title: 'Performance Anxiety', desc: 'Somatic tools to maintain peak executive function under extreme atmospheric pressure, calibrated for zero public disclosure.' },
  { icon: 'device_reset', title: 'System Failure', desc: 'Holistic intervention for multi-system fatigue affecting sleep, digestion, and cognitive clarity - treated as an integrated physiological failure.' },
];

const PROTOCOL = [
  { step: 'Assessment', title: 'SOMA Diagnostic Assessment', desc: 'A comprehensive baseline analysis including HRV mapping, biomechanical analysis, and psychological stress profiling. No assumptions. Absolute data-driven precision.', bullets: ['Bio-Metrics', 'Yoga Therapy Scan', 'Psychological Baseline'] },
  { step: 'Intensives', title: 'Private One-on-One Intensives', desc: 'Two weekly 75-minute sessions delivered with absolute confidentiality at your private residence or our high-security clinical wing in Pune.', bullets: ['Pune In-Clinic: Elite private surgical-grade suites.', 'Private Residence: We bring the sanctuary to your space.'] },
  { step: 'Customization', title: 'Completely Customized', desc: 'No standard curricula. Your biology dictates the roadmap. Your executive context defines the pace. Your outcomes define success.', bullets: ['Tri-Modal Approach', 'Adaptive protocol revision every 2 weeks', 'Zero digital footprint policy'] },
];

const FAQS = [
  { q: 'How is confidentiality maintained?', a: 'Zero digital record policy. All session notes are maintained in encrypted, non-cloud formats. No cross-referencing with corporate records. Your engagement with The Executive Sanctuary is known only to you and your assigned clinician.' },
  { q: 'How many participants are accepted?', a: 'Limited to 5 simultaneous enrollees globally to ensure maximum clinical focus and absolute discretion for each participant.' },
  { q: 'Can sessions be conducted at my residence or travel location?', a: 'Yes. We offer a private residence visit service and conduct sessions via high-security encrypted video for international locations. The Sanctuary travels with you.' },
  { q: 'What is the investment?', a: 'Pricing is provided during a private consultation. This reflects the bespoke nature of the program - no two protocols are the same. Contact us directly for a confidential consultation.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function ExecutiveSanctuary() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-2 bg-slate-950 min-h-screen text-white font-inter">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/programs" className="hover:text-slate-300 transition-colors">Programs</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-400 font-bold">The Executive Sanctuary</span>
        </nav>
      </motion.div>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="/Photos/Executive.png" alt="The Executive Sanctuary" className="w-full h-full object-cover object-right opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">The Peak of Care · Executive Sanctuary</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white tracking-tight leading-[1.05] mb-4 relative z-20">
              The Sanctuary: <br /><span className="text-soma-gold font-bold italic">Total Neuro-Somatic Restoration.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base text-slate-400 font-inter leading-relaxed max-w-lg mb-5">
              A private, data-driven restoration journey designed exclusively for high-performance individuals navigating the complexities of elite leadership.
            </motion.p>
            <motion.blockquote initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.42, duration: 0.5 }} className="border-l-2 border-amber-400/40 pl-5 mb-8">
              <p className="text-slate-300 font-inter italic text-base font-bold">"Restoration is the ultimate competitive advantage."</p>
            </motion.blockquote>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-6 mb-8 font-inter">
              <div>
                <div className="text-3xl font-headline font-bold text-white">12 Weeks</div>
                <div className="text-xs text-slate-500 mt-0.5 font-bold">Intensive bespoke protocol.</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div>
                <div className="text-3xl font-headline font-bold text-white">5 Only</div>
                <div className="text-xs text-slate-500 mt-0.5 font-bold">Maximum simultaneous enrollees.</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3 font-inter">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="px-6 py-3 signature-gradient text-white rounded-lg font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Request Private Consultation</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/programs" className="px-6 py-3 bg-white/5 text-slate-300 rounded-lg font-bold text-sm border border-white/10 hover:bg-white/10 transition-colors inline-block">All Programs</Link>
              </motion.div>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
            <img src="/Photos/Executive.png" alt="The Executive Sanctuary" className="w-full h-full object-cover object-right opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          </FadeInRight>
        </div>
      </section>

      {/* High-Authority Segmented Control Tabs (Dark Theme) */}
      <div className="sticky top-[80px] z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-4 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-center md:justify-start">
            <div className="inline-flex bg-slate-800/50 p-1.5 rounded-full gap-1 min-w-max">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 md:px-12 py-3 rounded-full text-[12px] font-inter font-bold uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab ? 'text-slate-950' : 'text-slate-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="exec-tab-pill"
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

      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.section key="ov" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12">
              <motion.p initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-[10px] font-bold text-amber-400/70 uppercase tracking-[0.18em] mb-3">Targeted Clinical Oversight</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl font-headline font-bold text-white tracking-tight">Addressing the silent systemic erosions of high-stakes environments.</motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 mt-3 max-w-lg font-bold">Through a clinical-integrative lens that protects your privacy as rigorously as it protects your health.</motion.p>
              <DrawLine delay={0.3} className="h-px bg-slate-700 mt-6 w-24" />
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-16 font-inter">
              {CONDITIONS.map((c) => (
                <StaggerItem key={c.title}>
                  <motion.div whileHover={{ y: -4, borderColor: 'rgba(148,163,184,0.3)' }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 h-full font-inter">
                    <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.4 }} className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-5 font-bold">
                      <span className="material-symbols-outlined text-[20px] text-slate-400 font-bold">{c.icon}</span>
                    </motion.div>
                    <h3 className="text-lg font-headline font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-bold">{c.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-900 rounded-2xl p-10 border border-slate-800 font-inter">
              <p className="text-[10px] font-bold text-amber-400/70 uppercase tracking-[0.18em] mb-6">Expert Confidentiality</p>
              <motion.blockquote initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-xl font-headline leading-relaxed italic mb-4 text-slate-300 font-bold">
                "The Executive Sanctuary is not just therapy; it is an architectural restoration of the human system. We work with individuals whose energy defines entire organizations. Our discretion is as precise as our protocol."
              </motion.blockquote>
              <div className="flex items-center gap-3 font-inter">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[16px] text-slate-400 font-bold">person</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Soma Mukherjee</div>
                  <div className="text-xs text-slate-500 font-bold">Lead Clinical Director, The Executive Sanctuary</div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {activeTab === 'Protocol' && (
          <motion.section key="pr" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12 font-inter">
              <p className="text-[10px] font-bold text-amber-400/70 uppercase tracking-[0.18em] mb-3">The Elite Protocol Architecture</p>
              <h2 className="text-4xl font-headline font-bold text-white tracking-tight">A triad of diagnostic precision, private intensity, and complete customization.</h2>
            </div>
            <StaggerContainer className="space-y-6 font-inter" stagger={0.15}>
              {PROTOCOL.map((p, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 6, borderColor: 'rgba(148,163,184,0.2)' }} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 font-inter">
                    <div className="flex items-start gap-6 font-inter">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 300, delay: i * 0.1 }} className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold text-sm flex-shrink-0">{i + 1}</motion.div>
                      <div className="flex-1 font-inter">
                        <div className="text-[10px] font-bold text-amber-400/60 uppercase tracking-[0.15em] mb-1">{p.step}</div>
                        <h3 className="text-xl font-headline font-bold text-white mb-3">{p.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4 font-bold">{p.desc}</p>
                        <div className="space-y-2 font-inter">
                          {p.bullets.map((b) => (
                            <motion.div key={b} whileHover={{ x: 4 }} className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[14px] text-amber-400/60 font-bold">check_circle</span>
                              <span className="text-xs text-slate-400 font-bold">{b}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.section>
        )}

        {activeTab === 'Pricing' && (
          <motion.section key="prc" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12 font-inter">
              <p className="text-[10px] font-bold text-amber-400/70 uppercase tracking-[0.18em] mb-3">The Elite Protocol</p>
              <h2 className="text-4xl font-headline font-bold text-white tracking-tight">Duration: 12-Week Intensive</h2>
              <p className="text-slate-400 mt-4 max-w-lg font-bold">Limited to 5 simultaneous enrollees for maximum clinical focus and absolute individual attention.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 font-inter">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="lg:col-span-2 bg-slate-900 rounded-2xl p-10 border border-slate-800 font-inter">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-2">12-Week Intensive</div>
                <div className="text-lg font-headline font-bold text-slate-300 mb-1">By Private Consultation</div>
                <div className="text-sm text-slate-500 mb-8 font-bold">Pricing reflects the fully bespoke nature of this engagement.</div>
                <StaggerContainer className="space-y-3 mb-8" stagger={0.08}>
                  {['24 Private 75-min Sessions', 'Comprehensive Diagnostic Assessment', 'Biometric Tracking Kit', '24/7 Concierge Support', 'Zero-Record Confidentiality Protocol'].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <motion.span whileHover={{ scale: 1.2 }} className="material-symbols-outlined text-[16px] text-amber-400/60 font-bold">check_circle</motion.span>
                        <span className="text-sm text-slate-300 font-bold">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact" className="block w-full text-center py-4 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-xl font-bold hover:bg-amber-500/30 transition-colors font-inter">Request Private Consultation</Link>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-b from-amber-900/20 to-slate-900 rounded-2xl p-8 border border-amber-400/20 font-inter">
                <p className="text-[10px] font-bold text-amber-400/60 uppercase tracking-[0.18em] mb-4">Enrollment</p>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, delay: 0.3 }} className="text-4xl font-headline font-bold text-white mb-2">5</motion.div>
                <p className="text-slate-400 text-sm font-bold mb-6">Maximum simultaneous enrollees. Global.</p>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-[10px] font-bold text-amber-400/60 uppercase tracking-[0.15em] mb-2">Confidentiality</p>
                  <p className="text-sm text-slate-400 font-bold">Zero digital record policy. Non-cloud encrypted session notes.</p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faq" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-12">
              <p className="text-[10px] font-bold text-amber-400/70 uppercase tracking-[0.18em] mb-3">Common Questions</p>
              <h2 className="text-4xl font-headline font-bold text-white tracking-tight">Frequently asked questions</h2>
            </div>
            <StaggerContainer className="space-y-3" stagger={0.1}>
              {FAQS.map((faq, i) => (
                <StaggerItem key={i}>
                  <motion.div layout className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden font-inter">
                    <motion.button onClick={() => setOpenFaq(openFaq === i ? null : i)} whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }} className="w-full flex items-center justify-between px-8 py-5 text-left font-inter">
                      <span className="font-bold text-slate-200 text-[15px]">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="material-symbols-outlined text-[20px] text-slate-500 flex-shrink-0 ml-4 font-bold">expand_more</motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-8 pb-6 font-inter"><p className="text-sm text-slate-400 leading-relaxed font-bold">{faq.a}</p></div>
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

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-900 border-t border-slate-800 py-20 px-6 lg:px-16 font-inter">
        <div className="max-w-3xl mx-auto text-center font-inter">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[10px] font-bold text-amber-400/60 uppercase tracking-[0.18em] mb-4">Private Access Only</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-4xl font-headline font-bold text-white mb-4 tracking-tight">Begin in absolute confidence.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="text-slate-400 mb-8 text-sm font-bold">5 enrollees. Zero public record. Bespoke architecture for elite physiology.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center font-inter">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="block px-10 py-4 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-xl font-bold hover:bg-amber-500/30 transition-colors font-inter text-center">Request Consultation</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/programs" className="flex items-center justify-center gap-2 px-10 py-4 bg-white/5 text-slate-300 rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-colors font-inter text-center">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> All Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
