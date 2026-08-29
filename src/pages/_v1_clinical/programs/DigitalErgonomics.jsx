import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat, DrawLine } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Curriculum', 'Pricing', 'FAQs'];

const CONDITIONS = [
  { icon: 'back_hand', title: 'Carpal Tunnel Syndrome', desc: 'Nerve glide sequences and tendon spacing exercises to reduce median nerve compression at the transverse carpal ligament.' },
  { icon: 'accessibility_new', title: 'Tech-Neck', desc: 'Cervical spine realignment protocols to counter forward head posture caused by prolonged screen use.' },
  { icon: 'repeat', title: 'Repetitive Strain Injury (RSI)', desc: 'Systemic approach to RSI through tissue load management - balancing microtrauma accumulation against recovery capacity.' },
  { icon: 'chair', title: 'Lower Back Compression', desc: 'Long-term sedentary work leads to significant lumbar disc pressure. Our protocol integrates pelvic tilt correction and psoas release.' },
];

const CURRICULUM = [
  { week: 'Module 1', title: 'Cervical Alignment', desc: 'Focusing on the suboccipital muscles and upper trapezius. Corrective maneuvers neutralize the "head-forward" shift caused by monitor use.', keyExercise: 'Deep Neck Flexor Activation', equipment: 'Resistance Band / Wall' },
  { week: 'Module 2', title: 'Wrist & Forearm Decompression', desc: 'Targeting the flexor carpi ulnaris and radialis. Myofascial release techniques designed for use with standard office equipment.', keyExercise: 'Neural Gliding Protocol', equipment: 'Therapy Ball / Desk Surface' },
  { week: 'Module 3', title: 'Core Integration for Sedentary Work', desc: 'Developing "active sitting" habits. Training the deep transverse abdominis to provide a stable foundation, preventing spinal slump.', keyExercise: 'Transverse Abdominis Breathing', equipment: 'Foam Roller / Floor' },
];

const FAQS = [
  { q: 'Do I need special equipment at home?', a: 'No specialized equipment is required. Most exercises use a therapy ball, resistance band, and desk surface - items available in any office. We provide a curated equipment list upon enrollment.' },
  { q: 'Is this suitable for existing RSI injuries?', a: 'Yes, provided the RSI has been assessed by a physician and is not in an acute inflammatory phase. Our protocols are designed as adjunctive therapy.' },
  { q: 'What is the time commitment?', a: '30-minute desk-side intervention sessions per week, structured for integration into a workday. Daily micro-practices take 5–10 minutes.' },
  { q: 'Can this be accessed via corporate HSA/FSA benefits?', a: 'Yes. This program qualifies as a clinical ergonomic intervention and is eligible for HSA/FSA reimbursement. Documentation provided.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function DigitalErgonomics() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-2 bg-soma-off-white min-h-screen font-inter">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/programs" className="hover:text-emerald-700 transition-colors">Programs</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold">Digital Ergonomics</span>
        </nav>
      </motion.div>

      <section className="relative overflow-hidden font-inter border-b border-slate-100/50">
        <div className="grid lg:grid-cols-2 min-h-[480px] relative">
          {/* Mobile/iPad Hero Image Background */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            <img src="/Photos/DigitalErgonomics.png" alt="Digital Ergonomics" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-soma-off-white/60 via-soma-off-white/90 to-soma-off-white" />
          </div>

          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-10 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-3">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-soma-gold rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.18em]">Pillar 03 · Physical Recovery</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4 uppercase relative z-20">
              Digital Ergonomics: <br /><span className="text-soma-gold font-bold italic">Engineering Effortless Performance.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base text-slate-500 font-inter leading-relaxed max-w-lg mb-6">
              A high-utility clinical intervention for the sedentary professional. Restore cervical alignment and mitigate repetitive strain through evidence-based biomechanics. Every protocol vetted by licensed physical therapists.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mb-8">
              <AnimatedStat value="8 Weeks" label="Full structural rehabilitation window." delay={0.45} />
              <div className="w-px h-10 bg-slate-200" />
              <AnimatedStat value="30 min" label="Desk-side sessions, per week." delay={0.55} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="px-6 py-3 signature-gradient text-white rounded-lg font-inter font-bold text-sm hover:opacity-90 transition-all inline-block shadow-lg">Enroll in Program</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/assessment" className="px-6 py-3 bg-white text-slate-800 rounded-lg font-inter font-bold text-sm border border-slate-200 hover:border-emerald-300 transition-colors inline-block">Take Diagnostic</Link>
              </motion.div>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block overflow-hidden rounded-l-[40px]">
            <img src="/Photos/DigitalErgonomics.png" alt="Digital Ergonomics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-soma-off-white via-transparent to-transparent" />
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
                      layoutId="dig-tab-pill"
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
          <motion.section key="ov" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <div className="mb-12">
              <motion.p initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-[10px] font-inter font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">Therapeutic Focus</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl font-headline font-bold text-slate-900 tracking-tight">Our curriculum targets the physiological stressors of the digital environment.</motion.h2>
              <DrawLine delay={0.3} className="h-px bg-slate-200 mt-6 w-24" />
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
              {CONDITIONS.map((c) => (
                <StaggerItem key={c.title}>
                  <motion.div whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-sm h-full font-inter">
                    <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.4 }} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 font-bold">
                      <span className="material-symbols-outlined text-[20px] text-slate-600 font-bold">{c.icon}</span>
                    </motion.div>
                    <h3 className="text-lg font-headline font-bold text-slate-900 mb-2">{c.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-bold">{c.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-10 border border-slate-100/80 shadow-sm font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-6">Access Model</p>
              <div className="grid md:grid-cols-2 gap-8 font-inter">
                <div>
                  <div className="text-2xl font-headline font-bold text-slate-900 mb-2">Flexible Access</div>
                  <p className="text-sm text-slate-500 font-bold">Live stream + on-demand library. Designed to slot into any work schedule without disruption.</p>
                </div>
                <StaggerContainer className="space-y-3" stagger={0.08}>
                  {['Licensed physical therapist oversight', 'Corporate-friendly scheduling', 'HSA / FSA eligible reimbursement', 'Digital Ergonomics E-Booklet included'].map((f) => (
                    <StaggerItem key={f}>
                      <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3">
                        <motion.span whileHover={{ scale: 1.2 }} className="material-symbols-outlined text-[16px] text-emerald-600 font-bold">verified</motion.span>
                        <span className="text-sm text-slate-700 font-bold">{f}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          </motion.section>
        )}

        {activeTab === 'Curriculum' && (
          <motion.section key="cu" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">Curriculum</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">A phased approach to structural integrity - extremities to core.</h2>
            </div>
            <StaggerContainer className="space-y-6 font-inter" stagger={0.15}>
              {CURRICULUM.map((m, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 6, boxShadow: '0 16px 40px rgba(0,0,0,0.07)' }} className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-sm font-inter">
                    <div className="flex items-start gap-6 font-inter">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 300, delay: i * 0.1 }} className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</motion.div>
                      <div className="flex-1 font-inter">
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.15em] mb-1">{m.week}</div>
                        <h3 className="text-xl font-headline font-bold text-slate-900 mb-3">{m.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4 font-bold">{m.desc}</p>
                        <div className="flex gap-4 font-inter">
                          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-50 rounded-xl px-4 py-3">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">Key Exercise</div>
                            <div className="text-xs font-bold text-slate-700">{m.keyExercise}</div>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-50 rounded-xl px-4 py-3">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">Equipment</div>
                            <div className="text-xs font-bold text-slate-700">{m.equipment}</div>
                          </motion.div>
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
          <motion.section key="pr" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">Corporate-Friendly Plan</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">Reduce absenteeism through proactive ergonomic care.</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 font-inter">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="lg:col-span-2 bg-white rounded-2xl p-10 border border-slate-100/80 shadow-sm font-inter">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">8-Week Program</div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }} className="text-6xl font-headline font-bold text-slate-900 mb-1">$750</motion.div>
                <div className="text-sm text-slate-400 mb-8 font-bold">Corporate billing available. HSA / FSA eligible.</div>
                <StaggerContainer className="space-y-3 mb-8" stagger={0.08}>
                  {['Full 8-Week Program Access', 'Live stream + On-demand Library', 'Direct Q&A with Clinical Leads', 'Digital Ergonomics E-Booklet', 'Corporate Billing Documentation'].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <motion.span whileHover={{ scale: 1.2 }} className="material-symbols-outlined text-[16px] text-emerald-600 font-bold">verified</motion.span>
                        <span className="text-sm text-slate-700 font-bold">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-900 transition-colors font-inter">Enroll Now</Link>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-emerald-900 rounded-2xl p-8 text-white font-inter">
                <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.18em] mb-4">Reimbursement</p>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, delay: 0.3 }} className="text-2xl font-headline font-bold mb-2">HSA / FSA</motion.div>
                <p className="text-emerald-200 text-sm font-bold mb-6">Eligible. Documentation provided for corporate and individual claims.</p>
                <div className="border-t border-emerald-700 pt-6">
                  <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.15em] mb-2">Format</p>
                  <p className="text-sm text-emerald-100 font-bold">Flexible live stream + on-demand. No schedule disruption.</p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {activeTab === 'FAQs' && (
          <motion.section key="faq" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-4xl mx-auto font-inter">
            <div className="mb-12">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">Common Questions</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">Frequently asked questions</h2>
            </div>
            <StaggerContainer className="space-y-3" stagger={0.1}>
              {FAQS.map((faq, i) => (
                <StaggerItem key={i}>
                  <motion.div layout className="bg-white rounded-2xl border border-slate-100/80 shadow-sm overflow-hidden font-inter">
                    <motion.button onClick={() => setOpenFaq(openFaq === i ? null : i)} whileHover={{ backgroundColor: 'rgba(236,253,245,0.5)' }} className="w-full flex items-center justify-between px-8 py-5 text-left font-inter">
                      <span className="font-bold text-slate-800 text-[15px]">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="material-symbols-outlined text-[20px] text-slate-400 flex-shrink-0 ml-4 font-bold">expand_more</motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-8 pb-6 font-inter"><p className="text-sm text-slate-500 leading-relaxed font-bold">{faq.a}</p></div>
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

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-900 py-20 px-6 lg:px-16 font-inter">
        <div className="max-w-3xl mx-auto text-center font-inter">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.18em] mb-4">Restore Your Structure</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-4xl font-headline font-bold text-white mb-4 tracking-tight">Restore your physical operating system.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="text-slate-400 mb-8 text-sm font-bold">Desk-side. Flexible. Clinically overseen.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="block px-10 py-4 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors font-inter">Enroll Now</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/programs" className="flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-colors font-inter">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> All Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
