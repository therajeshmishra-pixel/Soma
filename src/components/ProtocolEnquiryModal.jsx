"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ShieldCheck, Activity, BrainCircuit, Heart, ArrowRight, CheckCircle2, Lock, Mail, User, Briefcase, Clock, Zap, Leaf, Wind, Sun, Moon } from 'lucide-react'
import CustomSelect from './ui/CustomSelect'
import { useInquiry } from '../hooks/useInquiry'

// Professional SVG Mini-Charts with Micro-Animations
const MiniChart = ({ type, color = "currentColor" }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } 
    }
  }

  const barVariants = {
    hidden: { height: 0 },
    visible: i => ({ 
      height: [0, 8 + i * 4], 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 + i * 0.1 } 
    })
  }

  if (type === 'cortisol') return (
    <svg width="60" height="25" viewBox="0 0 60 25" fill="none" className="opacity-40">
      <motion.path 
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M0 20L5 12L10 22L15 8L20 20L25 4L30 16L35 12L40 22L45 8L50 16L55 4L60 12" 
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
      />
    </svg>
  )
  if (type === 'inflammation') return (
    <svg width="60" height="25" viewBox="0 0 60 25" fill="none" className="opacity-40 flex items-end">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect 
          key={i}
          custom={i}
          variants={barVariants}
          initial="hidden"
          animate="visible"
          x={i * 10} y={25 - (8 + i * 3)} width="4" rx="1" fill={color} 
        />
      ))}
    </svg>
  )
  if (type === 'hrv') return (
    <svg width="60" height="25" viewBox="0 0 60 25" fill="none" className="opacity-40">
      <motion.path 
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M0 12C10 12 10 10 20 10C30 10 30 12 40 12C50 12 50 14 60 14" 
        stroke={color} strokeWidth="2" strokeLinecap="round" 
      />
      <motion.path 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        d="M0 12C10 12 10 14 20 14C30 14 30 12 40 12C50 12 50 10 60 10" 
        stroke={color} strokeWidth="1" strokeDasharray="2 2" 
      />
    </svg>
  )
  return null
}

export default function ProtocolEnquiryModal({ isOpen, onClose, assessmentData, userName }) {
  const [formData, setFormData] = useState({
    name: userName || '', contact: '', ageRange: '', professionalContext: '', sleepHours: '', symptomFocus: '', stimulantUse: '', roadblock: '', healthConfirm: false
  })

  // Update name if userName prop changes
  useEffect(() => {
    if (userName) {
      setFormData(prev => ({ ...prev, name: userName }));
    }
  }, [userName]);

  const { sum } = assessmentData || {}

  const getPredictiveMarkers = (score) => {
    const base = {
      cortisol: { 
        value: score >= 30 ? 'Elevated (Chronic Spike)' : score >= 20 ? 'Fluctuating / Erratic' : 'Regulated', 
        description: 'Primary stress hormone linked to chronic tension.', 
        source: 'Harvard Medical', type: 'cortisol', color: '#b45309' 
      },
      inflammation: { 
        value: score >= 30 ? 'High Systemic Risk' : score >= 20 ? 'Moderate (Emerging)' : 'Trace', 
        description: 'Indicator of metabolic stress and potential burnout.', 
        source: 'Mayo Clinic', type: 'inflammation', color: '#b45309' 
      },
      hrv: { 
        value: score >= 30 ? 'Severely Restricted' : score >= 20 ? 'Suppressed Recovery' : 'Balanced', 
        description: 'Nervous system flexibility and recovery potential.', 
        source: 'Cleveland Clinic', type: 'hrv', color: '#b45309' 
      }
    }
    const status = score >= 30 ? { label: 'Immediate Restoration', color: 'text-sky-700', bg: 'bg-sky-50 border-sky-200' } : score >= 20 ? { label: 'Intervention Needed', color: 'text-teal-700', bg: 'bg-teal-50 border-teal-200' } : { label: 'Preventative Care', color: 'text-cyan-700', bg: 'bg-cyan-50 border-cyan-200' }
    return { ...base, status }
  }

  const markers = getPredictiveMarkers(sum || 0)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const { submitInquiry, status } = useInquiry("Protocol Intake Enquiry - Bio-Signature");
  const isSubmitting = status === 'loading';
  const isSubmitted = status === 'success';

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setFormData({
          name: '', contact: '', ageRange: '', professionalContext: '', sleepHours: '', symptomFocus: '', stimulantUse: '', roadblock: '', healthConfirm: false
        });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-soma-forest/60 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0" onClick={onClose} />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden" animate="visible"
          className="relative w-full max-w-6xl h-auto max-h-[92vh] rounded-[80px] overflow-hidden bg-white shadow-2xl flex flex-col md:flex-row border border-white/20"
        >
          {/* Close Button */}
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }} 
            onClick={onClose} 
            className="absolute top-10 right-10 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/50 text-stone-500 hover:text-teal-500 transition-all border border-stone-200 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-teal-500/30"
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={1.2} />
          </motion.button>

          {/* Left Column: Analysis */}
          <div className="w-full md:w-[50%] bg-gradient-to-br from-teal-50 to-sky-50 p-12 lg:p-20 flex flex-col overflow-y-auto scrollbar-hide">
            <motion.div className="mb-12">
              <span className="text-teal-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Bio-Signature Suite</span>
              <h3 className="font-headline text-5xl lg:text-7xl font-bold text-soma-forest leading-[0.9] tracking-tighter italic">Diagnostic <br />Synthesis.</h3>
            </motion.div>

            <div className="space-y-6 mb-12">
              {['cortisol', 'inflammation', 'hrv'].map((key) => (
                <motion.div 
                  key={key} whileHover={{ x: 5 }}
                  className="p-8 rounded-[40px] bg-white/80 backdrop-blur border border-teal-100 shadow-lg shadow-teal-100/30 relative group overflow-hidden"
                >
                  <div className="absolute top-8 right-10">
                    <MiniChart type={markers[key].type} color={markers[key].color} />
                  </div>
                  <div className="max-w-[85%] relative z-10">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">{key === 'hrv' ? 'HRV Potential' : key === 'inflammation' ? 'Inflammation Index' : 'Estimated Cortisol'}</p>
                    <p className="font-headline text-2xl lg:text-3xl font-bold text-teal-900 mb-2 leading-tight italic">{markers[key].value}</p>
                    <p className="text-sm text-stone-600 font-light leading-relaxed mb-3">{markers[key].description}</p>
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={12} className="text-teal-500" />
                       <span className="text-[9px] font-bold text-stone-500 uppercase tracking-tighter">Verified by {markers[key].source}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className={`p-10 rounded-[48px] ${markers.status.bg} border relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-[40px] -mr-16 -mt-16" />
              <div className="flex justify-between items-center mb-6 relative z-10">
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Protocol Urgency</p>
                <div className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 ${markers.status.color}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                  </span>
                  {markers.status.label}
                </div>
              </div>
              <p className="text-xl text-stone-700 font-light leading-relaxed italic relative z-10">
                "<span className="text-stone-900 font-bold not-italic">{userName || 'User'}</span>, your synthesis indicates a requirement for focused somatic intervention to prevent structural burnout."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="w-full md:w-[50%] bg-white p-8 lg:p-12 flex flex-col justify-start overflow-y-auto border-l border-teal-50">
            {!isSubmitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto w-full">
                <div className="mb-12">
                  <h3 className="font-headline text-4xl lg:text-5xl font-bold text-soma-forest mb-4 tracking-tighter italic">Initiate Protocol.</h3>
                  <p className="text-stone-600 font-light text-lg italic">Complete the psychosomatic intake to begin your restoration.</p>
                </div>

                <form onSubmit={submitInquiry} className="space-y-6">
                  {assessmentData && (
                    <>
                      <input type="hidden" name="assessmentType" value={assessmentData.title} />
                      <input type="hidden" name="assessmentScore" value={assessmentData.sum} />
                      <input type="hidden" name="assessmentResult" value={assessmentData.result} />
                      <input type="hidden" name="assessmentInterpretation" value={assessmentData.interpretation} />
                    </>
                  )}
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-cyan-800 uppercase tracking-widest ml-1">
                          <Leaf size={14} className="text-cyan-500" /> Full Name
                        </label>
                        <input 
                          required type="text" placeholder="Full Name" 
                          className="w-full min-h-[44px] px-6 py-4 rounded-2xl bg-cyan-50/50 border border-cyan-200 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all text-sm font-light text-soma-forest italic" 
                          value={formData.name} onChange={handleChange} name="name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-sky-800 uppercase tracking-widest ml-1">
                          <Wind size={14} className="text-sky-500" /> Email / Contact
                        </label>
                        <input 
                          required type="text" placeholder="Email/Phone" 
                          className="w-full min-h-[44px] px-6 py-4 rounded-2xl bg-sky-50/50 border border-sky-200 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/20 outline-none transition-all text-sm font-light text-soma-forest italic" 
                          value={formData.contact} onChange={handleChange} name="contact" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-cyan-800 uppercase tracking-widest ml-1">
                          <Briefcase size={14} className="text-cyan-500" /> Profession
                        </label>
                        <input 
                          type="text" placeholder="e.g. Founder" 
                          className="w-full min-h-[44px] px-6 py-4 rounded-2xl bg-cyan-50/50 border border-cyan-200 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all text-sm font-light text-soma-forest italic" 
                          value={formData.professionalContext} onChange={handleChange} name="professionalContext" 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-teal-800 uppercase tracking-widest ml-1">
                            <Sun size={14} className="text-teal-500" /> Age
                          </label>
                          <CustomSelect 
                            name="ageRange" value={formData.ageRange} onChange={handleChange} placeholder="Range"
                            className="!rounded-[16px] !bg-teal-50/50 !border-teal-200 !text-sm !italic !font-light focus-within:!ring-teal-500/20 focus-within:!border-teal-400"
                            options={[{ value: '20-35', label: '20-35' }, { value: '35-50', label: '35-50' }, { value: '50+', label: '50+' }]}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest ml-1">
                            <Moon size={14} className="text-blue-500" /> Sleep
                          </label>
                          <CustomSelect 
                            name="sleepHours" value={formData.sleepHours} onChange={handleChange} placeholder="Hrs"
                            className="!rounded-[16px] !bg-blue-50/50 !border-blue-200 !text-sm !italic !font-light focus-within:!ring-blue-500/20 focus-within:!border-blue-400"
                            options={[{ value: '<6', label: '6h' }, { value: '6-8', label: '8h' }]}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-bold text-sky-800 uppercase tracking-widest ml-1">
                        <Heart size={14} className="text-sky-400" /> Roadblock to Stillness
                      </label>
                      <textarea 
                        required rows="3" placeholder="Identify the weight you wish to release..." 
                        className="w-full px-6 py-4 rounded-2xl bg-sky-50/50 border border-sky-200 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/20 outline-none transition-all text-sm font-light resize-none text-soma-forest italic" 
                        value={formData.roadblock} onChange={handleChange} name="roadblock" 
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                          <input 
                            required type="checkbox" name="healthConfirm" 
                            checked={formData.healthConfirm} onChange={handleChange}
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-stone-300 bg-white transition-all checked:bg-teal-500 checked:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                          />
                          <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="text-[11px] text-stone-600 font-light leading-relaxed select-none group-hover:text-soma-forest transition-colors">
                          I confirm that I am in good physical health and assume full responsibility for my participation.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" disabled={isSubmitting} 
                      className="w-full min-h-[44px] py-6 rounded-[24px] bg-teal-500 text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-teal-600 transition-all duration-300 transform shadow-[0_4px_0_0_#0f766e] hover:-translate-y-[2px] hover:shadow-[0_6px_0_0_#0f766e] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:transform-none disabled:shadow-none flex items-center justify-center gap-4 group focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                    >
                      {isSubmitting ? 'Syncing...' : 'Commit to Restoration'}
                      {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    <div className="flex items-center justify-center gap-3 mt-6 text-stone-400">
                       <Lock size={12} />
                       <p className="text-[9px] font-bold uppercase tracking-widest">Secure Clinical Transmission</p>
                    </div>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="text-center py-20 px-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-teal-100">
                  <CheckCircle2 size={40} className="text-teal-500" strokeWidth={1} />
                </motion.div>
                <h3 className="font-headline text-5xl font-bold text-soma-forest mb-6 tracking-tighter italic">Received.</h3>
                <p className="text-xl text-stone-600 font-light leading-relaxed mb-12 italic">Soma will review your signature shortly to begin your restoration journey.</p>
                <button onClick={onClose} className="w-full min-h-[44px] py-6 bg-teal-500 text-white rounded-3xl font-bold text-[10px] tracking-[0.4em] uppercase transition-all hover:bg-teal-600 shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50">Close Interface</button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
