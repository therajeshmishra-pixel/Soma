import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, CheckCircle2, Video, Lock, ShieldCheck, ArrowRight, User, Mail, MapPin, Briefcase, Calendar, Sparkles, Leaf, Wind, Sun, Heart } from 'lucide-react';
import CustomSelect from './ui/CustomSelect';
import { useInquiry } from '../hooks/useInquiry';

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    profession: '',
    purpose: '',
    otherIssues: '',
    healthConfirm: false
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-registration-modal', handleOpen);
    return () => window.removeEventListener('open-registration-modal', handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const { submitInquiry, status } = useInquiry("New Registration - Collective Stillness");
  const isSubmitting = status === 'loading';
  const isSuccess = status === 'success';

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setFormData({
          name: '', email: '', age: '', location: '', profession: '', purpose: '', otherIssues: '', healthConfirm: false
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98, 
      y: 10, 
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-soma-forest/40 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-6xl h-auto max-h-[90vh] bg-white rounded-[80px] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto border border-white/20"
          >
            {/* Close Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/50 border border-stone-100 text-stone-400 hover:text-soma-forest transition-all shadow-sm backdrop-blur-md"
            >
              <X size={20} strokeWidth={1.2} />
            </motion.button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 text-center py-32 px-12 bg-white flex flex-col items-center justify-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mb-10 border border-stone-100"
                >
                  <CheckCircle2 size={40} className="text-soma-forest" strokeWidth={1} />
                </motion.div>
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-soma-forest mb-6 tracking-tighter italic">Spot Secured.</h3>
                <p className="text-xl text-stone-500 font-light leading-relaxed max-w-md mx-auto italic">
                  Soma looks forward to seeing you. Check your email for the sanctuary access link and preparation guide.
                </p>
                <div className="mt-12 text-stone-300 text-[10px] font-bold uppercase tracking-[0.4em]">
                  Closing interface in a few seconds...
                </div>
              </motion.div>
            ) : (
              <>
                {/* Left Column: Context */}
                <div className="w-full md:w-[42%] bg-soma-cream p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-y-auto scrollbar-hide">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block">Collective Stillness</span>
                    <h3 className="font-headline text-5xl lg:text-7xl font-bold text-soma-forest mb-10 leading-[0.9] tracking-tighter italic">30 Minutes <br/>of Sanctuary.</h3>
                    
                    <p className="text-xl text-stone-500 font-light leading-relaxed mb-16 italic opacity-80 max-w-sm">
                      Ancient wisdom meets wellness science. A thrice-weekly return to ease, designed for the modern nervous system.
                    </p>

                    <div className="space-y-10">
                      {[
                        { icon: Sparkles, title: 'Structural Release', desc: 'Gentle yoga to release deep physical tension.' },
                        { icon: ShieldCheck, title: 'Clinical Breathwork', desc: 'Protocols to reset your nervous system in minutes.' },
                        { icon: Lock, title: 'Guided Recovery', desc: 'Mental stillness to clear burnout and restore focus.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-8 group cursor-default">
                          <div className="w-14 h-14 rounded-[22px] bg-white flex items-center justify-center shrink-0 shadow-soft group-hover:scale-110 transition-all duration-500 border border-stone-100">
                            <item.icon size={22} strokeWidth={1.2} className="text-soma-forest" />
                          </div>
                          <div>
                            <h4 className="font-headline text-2xl font-bold text-soma-forest mb-2 italic group-hover:text-stone-400 transition-colors">{item.title}</h4>
                            <p className="text-stone-500 text-sm font-light leading-relaxed opacity-80">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-20 pt-10 border-t border-stone-200 relative z-10">
                    <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Next Sanctuary Opening</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-soma-forest rounded-full animate-pulse" />
                      <p className="text-soma-forest font-bold text-xl font-headline italic">Coming Tuesday, 8:00 AM</p>
                    </div>
                    <div className="flex items-center gap-3 text-stone-400">
                      <Video size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Virtual Interface via Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="flex-1 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-start overflow-y-auto">
                  <div className="mb-12">
                    <h3 className="font-headline text-4xl font-bold text-soma-forest mb-4 tracking-tighter italic">Reserve Your Spot.</h3>
                    <p className="text-stone-500 font-light text-lg italic">Join the global community returning to themselves.</p>
                  </div>

                  <form onSubmit={submitInquiry} className="space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-emerald-800 uppercase tracking-widest ml-1">
                          <Leaf size={14} className="text-emerald-500" /> Full Name
                        </label>
                        <input 
                          required name="name" type="text" placeholder="Jane Doe" 
                          value={formData.name} onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all text-sm font-light italic" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-sky-800 uppercase tracking-widest ml-1">
                          <Wind size={14} className="text-sky-500" /> Email Address
                        </label>
                        <input 
                          required name="email" type="email" placeholder="jane@example.com" 
                          value={formData.email} onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-sky-50/50 border border-sky-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/20 focus:bg-white outline-none transition-all text-sm font-light italic" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-amber-800 uppercase tracking-widest ml-1">
                          <Sun size={14} className="text-amber-500" /> Age
                        </label>
                        <input 
                          name="age" type="text" placeholder="e.g. 34" 
                          value={formData.age} onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-amber-50/50 border border-amber-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/20 focus:bg-white outline-none transition-all text-sm font-light italic" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-indigo-800 uppercase tracking-widest ml-1">
                          <MapPin size={14} className="text-indigo-500" /> Location
                        </label>
                        <input 
                          name="location" type="text" placeholder="City, Country" 
                          value={formData.location} onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white outline-none transition-all text-sm font-light italic" 
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-purple-800 uppercase tracking-widest ml-1">
                          <Sparkles size={14} className="text-purple-500" /> Primary Focus
                        </label>
                        <CustomSelect 
                          name="purpose" value={formData.purpose}
                          onChange={(e) => handleChange({ target: { name: 'purpose', value: e.target.value } })}
                          placeholder="Select a goal..."
                          className="!rounded-[16px] !bg-purple-50/50 !border-purple-200 !py-4 !px-6 !h-auto !text-sm !italic !font-light focus-within:!ring-purple-500/20 focus-within:!border-purple-400"
                          options={[
                            { value: 'stress', label: 'Stress & Burnout' },
                            { value: 'sleep', label: 'Sleep Quality' },
                            { value: 'posture', label: 'Physical Ease' },
                            { value: 'focus', label: 'Mental Clarity' }
                          ]}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-rose-800 uppercase tracking-widest ml-1">
                          <Heart size={14} className="text-rose-400" /> Specific Needs
                        </label>
                        <textarea 
                          name="otherIssues" value={formData.otherIssues} onChange={handleChange} 
                          placeholder="How can Soma help you specifically?" 
                          className="w-full px-6 py-4 rounded-2xl bg-rose-50/50 border border-rose-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-500/20 focus:bg-white outline-none transition-all text-sm font-light min-h-[120px] resize-none italic" 
                        />
                      </div>
                      <div className="md:col-span-2 pt-2">
                        <label className="flex items-start gap-4 cursor-pointer group">
                          <div className="relative flex items-center mt-1">
                            <input 
                              required type="checkbox" name="healthConfirm" 
                              checked={formData.healthConfirm} onChange={handleChange}
                              className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-stone-200 bg-white transition-all checked:bg-soma-forest checked:border-soma-forest focus:outline-none"
                            />
                            <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                          </div>
                          <span className="text-[11px] text-stone-400 font-light leading-relaxed select-none group-hover:text-soma-forest transition-colors">
                            I confirm that I am in good physical health and assume full responsibility for my participation.
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-8">
                      <motion.button 
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full py-6 rounded-3xl bg-soma-forest text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-[#0F1C16] transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-4 group"
                      >
                        {isSubmitting ? 'Securing Spot...' : 'Complete Reservation'}
                        {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />}
                      </motion.button>
                      <div className="flex flex-col items-center gap-4 mt-8">
                        <div className="flex items-center gap-3 text-stone-300">
                           <ShieldCheck size={12} />
                           <p className="text-[9px] font-bold uppercase tracking-widest italic">Secure Sanctuary Connection</p>
                        </div>
                        <p className="text-[9px] text-stone-400 font-bold uppercase tracking-[0.2em] text-center max-w-xs leading-loose">
                          Access instructions will be sent to your registered email immediately.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
