import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, AnimatedBadge, DrawLine } from '../../components/ui/motion-wrappers';

const TABS = ['Overview', 'Process', 'Intake', 'FAQs'];

const SYMPTOMS = [
  { icon: 'battery_low', title: 'Lingering Fatigue', desc: "I'm tired even when I haven't done much. Sleep feels performative rather than restorative." },
  { icon: 'radar', title: 'Hyper-Vigilance', desc: "My mind doesn't switch off. I am constantly scanning for the next requirement or failure." },
  { icon: 'trending_down', title: 'Diminished Edge', desc: 'Tasks that used to be second nature now require significant cognitive effort and willpower.' },
];

const STEPS = [
  { number: '01', title: 'Explain Your State', desc: 'Share your experience without filter or medical jargon. We listen for the friction - for the precise points where your system is leaking energy.', icon: 'chat_bubble' },
  { number: '02', title: 'Identify the Reality', desc: 'We map your symptoms against biomarkers and lifestyle patterns to find the root physiological cause - not a label, but a legible data architecture.', icon: 'manage_search' },
  { number: '03', title: 'Receive Clear Direction', desc: 'Receive a precise, actionable roadmap to exit the cycle of diminishing returns. No ambiguity. No indefinite process.', icon: 'my_location' },
];

const FAQS = [
  { q: 'Do I need a diagnosis to book a session?', a: 'No. The entire premise of this service is that you may not have a clinical label - only a felt sense that something is off. That is more than enough to begin. We specialise in translating ambiguous tension into clinical clarity.' },
  { q: 'What happens in the first session?', a: 'The 30-minute complimentary session is a structured intake conversation. You speak. We listen, identify patterns, and provide immediate next steps - whether or not you choose to continue with us.' },
  { q: 'Is this therapy or counselling?', a: 'It is an integrative clinical intake process. Soma Mukherjee brings 25 years of expertise in somatic, psychological, and physiological frameworks. Sessions draw from all three disciplines to identify the most precise root cause.' },
  { q: 'How is this different from seeing a regular therapist?', a: "We don't just work with the mind. We examine the body's regulatory systems - sleep, autonomic response, metabolic function - alongside the psychological presentation. If standard therapy hasn't yielded clarity, this approach often reveals what was missed." },
  { q: 'Is the session confidential?', a: 'Absolutely. All sessions are held under strict clinical confidentiality. No records are shared with your employer or any third party.' },
];

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function Counselling() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', experience: '', duration: '', goal: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="pt-8 bg-white min-h-screen text-slate-800 font-inter">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-6 lg:px-16 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-inter text-slate-400">
          <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/programs" className="hover:text-slate-600 transition-colors">Programs</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-slate-600 font-bold">Counselling</span>
        </nav>
      </motion.div>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="grid lg:grid-cols-2 min-h-[580px]">
          <FadeInLeft className="flex flex-col justify-center px-6 lg:px-16 py-16 max-w-3xl relative z-10">
            <AnimatedBadge delay={0.1} className="inline-flex items-center gap-2 mb-6">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-emerald-600 rounded-full inline-block" />
              <span className="text-[10px] font-inter font-bold text-emerald-700 uppercase tracking-[0.18em]">Clinical Counselling · Talk About What's Not Working</span>
            </AnimatedBadge>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-5xl lg:text-6xl font-headline font-bold text-slate-900 tracking-tight leading-[1.05] mb-4">
              Talk About<br /><span className="italic text-emerald-700 font-normal">What's Not Working.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-600 font-inter leading-relaxed max-w-lg mb-5">
              You don't need the right words. We help you translate ambiguous tension into clinical clarity.
            </motion.p>
            <motion.blockquote initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.42, duration: 0.5 }} className="border-l-2 border-emerald-500/30 pl-5 mb-8">
              <p className="text-slate-500 font-inter italic text-sm font-bold">"The first step to precision recovery is acknowledging the friction."</p>
            </motion.blockquote>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: 'video_call', label: '30-Min Free Session' },
                { icon: 'lock', label: 'HIPAA Compliant' },
                { icon: 'calendar_month', label: 'No Obligation' },
              ].map((chip, i) => (
                <motion.div key={chip.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }} whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 shadow-sm border border-slate-100 font-inter">
                   <span className="material-symbols-outlined text-[18px] text-emerald-600 font-bold">{chip.icon}</span>
                  <span className="text-sm font-bold text-slate-800">{chip.label}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3">
              <motion.a href="#intake" onClick={() => setActiveTab('Intake')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-6 py-3 signature-gradient text-white rounded-lg font-inter font-bold text-sm hover:opacity-90 transition-opacity shadow-lg inline-block text-center">Book Free 30-Minute Session</motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/programs" className="px-6 py-3 bg-white text-slate-800 rounded-lg font-inter font-bold text-sm border border-slate-200 hover:border-emerald-300 transition-colors inline-block">All Programs</Link>
              </motion.div>
            </motion.div>
          </FadeInLeft>
          <FadeInRight className="relative hidden lg:block">
            <img src="/Photos/SomaCoun.png" alt="Clinical Counselling Session" className="w-full h-full object-cover" />
          </FadeInRight>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex gap-0">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`relative px-6 py-4 text-sm font-inter font-bold transition-colors duration-200 ${activeTab === tab ? 'text-emerald-700' : 'text-slate-400 hover:text-slate-700'}`}>
              {tab}
              {activeTab === tab && <motion.div layoutId="coun-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.section key="ov" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter">
            <div className="mb-12">
              <motion.p initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">If This Sounds Like You...</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl font-headline font-bold text-slate-900 tracking-tight max-w-2xl">Subjective discomfort is clinical data. We help you see the physiological architecture behind your symptoms.</motion.h2>
              <DrawLine delay={0.3} className="h-px bg-slate-200 mt-6 w-24" />
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-16">
              {SYMPTOMS.map((s) => (
                <StaggerItem key={s.title}>
                  <motion.div whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.07)' }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="bg-slate-50 rounded-2xl p-8 border border-transparent hover:border-emerald-100 h-full">
                    <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.4 }} className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-[20px] text-emerald-700 font-bold">{s.icon}</span>
                    </motion.div>
                    <h3 className="text-lg font-headline font-bold text-slate-900 mb-3">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-bold">{s.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-emerald-900 rounded-2xl p-10 text-white relative overflow-hidden font-inter">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.18em] mb-6">Clinical Philosophy</p>
              <motion.blockquote initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-xl font-headline font-bold leading-relaxed mb-4 relative z-10">
                "We don't treat symptoms in isolation. We reconstruct the sequence of physiological events that led to the friction you are experiencing. Language is a starting point, not the destination."
              </motion.blockquote>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-white font-bold">person</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Soma Mukherjee</div>
                  <div className="text-xs text-emerald-200/70 font-bold">Clinical Lead, SOMA Counselling</div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {activeTab === 'Process' && (
          <motion.section key="proc" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto font-inter text-slate-800">
            <div className="mb-12">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">We Translate Your Experience Into Patterns</p>
              <h2 className="text-4xl font-headline font-bold tracking-tight">A three-stage clinical intake process.</h2>
              <p className="text-slate-500 mt-3 max-w-lg font-bold">No diagnosis required. No preparation needed. Just your honest account of what's happening.</p>
            </div>
            <StaggerContainer className="space-y-6 mb-16" stagger={0.15}>
              {STEPS.map((step, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ x: 6, boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }} className="bg-slate-50 rounded-2xl p-8 border border-transparent hover:border-emerald-100">
                    <div className="flex items-start gap-6 font-inter">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 300, delay: i * 0.1 }} className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-headline font-bold text-lg flex-shrink-0">{step.number}</motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 font-inter">
                          <motion.span whileHover={{ rotate: 15, scale: 1.1 }} className="material-symbols-outlined text-[18px] text-emerald-600 font-bold">{step.icon}</motion.span>
                          <h3 className="text-xl font-headline font-bold text-slate-900">{step.title}</h3>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed font-bold">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-50 rounded-2xl p-10 border border-slate-100 font-inter">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-6">Start With Clarity</p>
              <h3 className="text-2xl font-headline font-bold text-slate-900 mb-2">The first diagnostic session is complimentary.</h3>
              <p className="text-slate-500 text-sm mb-6 font-bold">No obligation to continue beyond what feels right.</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {['30-minute 1-on-1 video consultation', 'Clinical pattern identification', 'Immediate recovery next steps', 'No obligation to continue'].map((item) => (
                  <motion.div key={item} whileHover={{ x: 4 }} className="flex items-center gap-3">
                    <motion.span whileHover={{ scale: 1.2 }} className="material-symbols-outlined text-[16px] text-emerald-600 font-bold">check_circle</motion.span>
                    <span className="text-sm text-slate-700 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a href="#intake" onClick={() => setActiveTab('Intake')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-8 py-4 signature-gradient text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm">
                Begin My Intake
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </motion.a>
            </motion.div>
          </motion.section>
        )}

        {activeTab === 'Intake' && (
          <motion.section key="intake" id="intake" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="py-20 px-6 lg:px-16 max-w-5xl mx-auto font-inter">
            <div className="mb-12">
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-3">Clinical Intake</p>
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">The more precise you are, the more we can prepare for your session.</h2>
              <p className="text-slate-500 mt-3 max-w-lg text-sm font-bold">You don't need a perfect explanation. Just start.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6 font-inter">
                    {[
                      { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Full name' },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@company.com' },
                    ].map((field, i) => (
                      <motion.div key={field.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] block mb-2">{field.label}</label>
                        <input type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder}
                          className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-600 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] block mb-2">Describe Your Experience</label>
                    <textarea name="experience" value={form.experience} onChange={handleChange} rows={5}
                      placeholder="In your own words - what's not working? There is no need for clinical precision. Share what you feel, observe, and struggle with."
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-600 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none transition-colors resize-none" />
                  </motion.div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] block mb-2">How Long Has This Been Present?</label>
                      <select name="duration" value={form.duration} onChange={handleChange}
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-600 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none transition-colors appearance-none">
                        <option value="">Select duration</option>
                        <option>Less than 1 month</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>Over a year</option>
                      </select>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] block mb-2">What Would a Good Outcome Feel Like?</label>
                      <input type="text" name="goal" value={form.goal} onChange={handleChange} placeholder="In your own words..."
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-600 rounded-lg px-4 py-3 text-sm font-bold text-slate-800 outline-none transition-colors" />
                    </motion.div>
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 signature-gradient text-white rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-sm">
                    Begin My Intake
                  </motion.button>
                  <p className="text-[11px] font-bold text-slate-400 text-center uppercase tracking-[0.1em]">Fully confidential. HIPAA compliant. Zero obligation.</p>
                </form>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-5">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 font-inter">
                  <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.15em] mb-4">What To Expect</p>
                  <div className="space-y-4 font-inter">
                    {['A confidential, non-judgmental conversation', 'Pattern identification from clinical expertise', 'Specific next steps for your physiology', 'Zero pressure to commit to a program'].map((item) => (
                      <motion.div key={item} whileHover={{ x: 4 }} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600 mt-0.5 flex-shrink-0 font-bold">check_circle</span>
                        <span className="text-xs text-slate-500 leading-relaxed font-bold">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-emerald-800 rounded-2xl p-6 text-white font-inter">
                  <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.15em] mb-3">First Session</p>
                  <div className="text-4xl font-headline font-bold text-white mb-1">Free</div>
                  <p className="text-sm text-emerald-100 font-bold">30-minute video consultation. No strings.</p>
                </motion.div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 font-inter">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3">Compliance</p>
                  <div className="space-y-2">
                    {['HIPAA Compliant', 'End-to-End Encrypted', 'Zero Third-Party Sharing'].map((c) => (
                      <motion.div key={c} whileHover={{ x: 4 }} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600 font-bold">security</span>
                        <span className="text-xs text-slate-600 font-bold">{c}</span>
                      </motion.div>
                    ))}
                  </div>
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
                  <motion.div layout className="bg-slate-50 rounded-2xl border border-transparent overflow-hidden hover:border-emerald-100 font-inter">
                    <motion.button onClick={() => setOpenFaq(openFaq === i ? null : i)} whileHover={{ backgroundColor: 'rgba(0,0,0,0.015)' }} className="w-full flex items-center justify-between px-8 py-5 text-left font-inter">
                      <span className="font-bold text-slate-800 text-[15px]">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="material-symbols-outlined text-[20px] text-slate-400 flex-shrink-0 ml-4 font-bold">expand_more</motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-8 pb-6"><p className="text-sm text-slate-500 leading-relaxed font-bold">{faq.a}</p></div>
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

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-slate-50 border-t border-slate-100 py-20 px-6 lg:px-16 font-inter">
        <div className="max-w-3xl mx-auto text-center font-inter">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.18em] mb-4">You Don't Need a Perfect Explanation. Just Start.</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-4xl font-headline font-bold text-slate-900 mb-4 tracking-tight">Begin in absolute clarity.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="text-slate-500 mb-8 text-sm font-bold">30 minutes. Complimentary. No obligation to continue.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="#intake" onClick={() => setActiveTab('Intake')} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="block px-10 py-4 signature-gradient text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm text-center">
              Book Free Session
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/programs" className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-800 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> All Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
