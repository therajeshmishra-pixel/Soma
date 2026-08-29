import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, AnimatedBadge } from '../components/ui/motion-wrappers';
import CustomSelect from '../components/ui/CustomSelect';
import { useInquiry } from '../hooks/useInquiry';
import { Send, CheckCircle2, User, Mail, MessageSquare, MapPin, Globe, ShieldCheck, Sparkles, Leaf, Sun, Wind, Heart } from 'lucide-react';

export default function Contact() {
  const { submitInquiry, status } = useInquiry("Contact Form - Soma Mukherjee Wellness");
  const [searchParams] = useSearchParams();
  const initialPurpose = searchParams.get('purpose') || 'Personal Yoga Guidance';

  const [formData, setFormData] = useState({
    name: '',
    purpose: initialPurpose,
    message: '',
    meetingMode: 'Pune (In-Person)'
  });

  // Sync purpose if URL changes
  useEffect(() => {
    const purposeParam = searchParams.get('purpose');
    if (purposeParam) {
      setFormData(prev => ({ ...prev, purpose: purposeParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Contact | SOMA" 
        description="Discover Contact programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/contact" 
      />
      {/* Breadcrumb Section */}
      <section className="soma-section-tight soma-container pt-8 md:pt-12 pb-2 text-center">
        <FadeIn className="max-w-screen-2xl mx-auto">
          <h5>
            <Sparkles size={16} className="text-amber-600" aria-hidden="true" />
            Let's Begin a Conversation
          </h5>
          <h1 className="text-soma-forest mb-6 md:mb-12 italic">
            Write to <br /> <span className="text-rose-500">Soma.</span>
          </h1>
          <p className="text-stone-700 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed font-normal italic">
            "Whether you're looking for personal therapeutic guidance, support for your leadership team, or simply want to say hello - Soma would love to hear from you." 
          </p>
        </FadeIn>
      </section>

      {/* Main Content Section */}
      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 soma-container">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-24 lg:gap-40 items-start">
          
          {/* Left Column - Profile */}
          <FadeIn className="w-full lg:w-4/12 flex flex-col order-2 lg:order-1 lg:sticky lg:top-40">
            <div className="relative group mb-10 md:mb-16 rounded-[48px] overflow-hidden shadow-2xl shadow-sky-900/10 border border-slate-100 w-1/2 mx-auto lg:w-3/4">
              <img 
                src="/Photos/Soma_Studio2.png"
                alt="Soma Mukherjee" 
                className="w-full aspect-[3/4] object-cover object-top contrast-[1.05] brightness-[1.02] transition-transform duration-[3000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent mix-blend-overlay transition-opacity duration-1000 opacity-50 group-hover:opacity-0" />
            </div>
            
            <div className="space-y-10 md:space-y-16">
              <div>
                <h2 className="text-soma-forest mb-4 italic">Soma Mukherjee</h2>
                <h5 className="text-amber-600 border-l-2 border-amber-300 pl-6 ml-1">Yoga Guide & Wellness Therapist</h5>
              </div>
              
              <div className="bg-gradient-to-r from-white to-amber-50/30 border border-amber-100 p-8 md:p-16 rounded-[48px] md:rounded-[64px] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-amber-400 transition-transform duration-1000 -translate-y-full group-hover:translate-y-0" />
                <p className="text-3xl font-headline italic text-soma-forest leading-[1.1] tracking-tight">
                  "Every journey begins with a first breath. I'm here whenever you're ready to take yours."
                </p>
              </div>
              
              <div className="flex items-center gap-6 md:gap-8 p-6 md:p-10 bg-white rounded-[32px] md:rounded-[40px] border border-amber-100 shadow-sm">
                <ShieldCheck size={32} className="text-amber-500" strokeWidth={1.5} aria-hidden="true" />
                <h5 className="text-stone-700 italic">
                  YCB Senior Evaluator · Ministry of Ayush
                </h5>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Contact Form */}
          <FadeIn className="w-full lg:w-8/12 order-1 lg:order-2" delay={0.2}>
              <div className="soma-card bg-white border border-slate-100 p-8 md:p-10 lg:p-14 h-full flex flex-col justify-between shadow-xl shadow-sky-900/5">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[140px] -mr-64 -mt-64 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-10 md:mb-16">
                   <div>
                      <h3 className="text-soma-forest mb-4 italic">Reach Out</h3>
                      <h5 className="text-sky-600">Warm & Confidential</h5>
                   </div>
                   <div className="hidden sm:block">
                      <div className="w-14 h-14 rounded-full border border-sky-100 flex items-center justify-center text-sky-500 bg-sky-50/50">
                         <MessageSquare size={20} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                   </div>
                </div>
                
                <form className="space-y-10 md:space-y-12" onSubmit={submitInquiry}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    <div className="space-y-4">
                      <label htmlFor="name" className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-500 ml-1">
                        <User size={14} strokeWidth={1.5} className="text-sky-500" aria-hidden="true" /> Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="How shall Soma address you?" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-[24px] px-6 py-4 text-base text-soma-forest placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-400 transition-all duration-300 font-normal italic"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="email" className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-500 ml-1">
                        <Mail size={14} strokeWidth={1.5} className="text-sky-500" aria-hidden="true" /> Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email || ''}
                        onChange={handleChange}
                        placeholder="Your best contact email" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-[24px] px-6 py-4 text-base text-soma-forest placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-400 transition-all duration-300 font-normal italic"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-500 ml-1">
                        <ShieldCheck size={14} strokeWidth={1.5} className="text-sky-500" aria-hidden="true" /> How Can Soma Help?
                      </label>
                      <CustomSelect 
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        placeholder="Select a service..."
                        className="!rounded-[24px] !bg-slate-50 !border-slate-200 !px-6 !py-4 !h-auto !text-base !italic !font-normal"
                        options={[
                          { value: 'Personal Yoga Guidance', label: 'Personal Yoga Guidance' },
                          { value: 'Sleep Architecture', label: 'Sleep Architecture' },
                          { value: 'Cognitive Calm', label: 'Cognitive Calm' },
                          { value: 'Ergonomics Wellness', label: 'Ergonomics Wellness' },
                          { value: 'Metabolic Resilience', label: 'Metabolic Resilience' },
                          { value: 'Executive Sanctuary', label: 'Executive Sanctuary' },
                          { value: 'Corporate Wellness Programme', label: 'Corporate Wellness Programme' },
                          { value: 'A Free Wellness Check-In Chat', label: 'A Free Wellness Check-In Chat' },
                          { value: 'Something Else', label: 'Something Else' }
                        ]}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label htmlFor="message" className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-500 ml-1">
                      <Heart size={14} strokeWidth={1.5} className="text-sky-500" aria-hidden="true" /> Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6" 
                      placeholder="Share as little or as much as feels comfortable..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-[24px] px-6 py-4 text-base text-soma-forest placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-400 transition-all duration-300 resize-none font-normal leading-relaxed italic"
                    ></textarea>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    <label className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400 block ml-1">Preferred Mode</label>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                      {[
                        { id: 'Pune (In-Person)', icon: MapPin },
                        { id: 'Online (Anywhere)', icon: Globe }
                      ].map((mode) => (
                        <label 
                          key={mode.id}
                          className={`flex-1 min-h-[44px] rounded-[40px] p-8 md:p-10 flex items-center justify-center gap-4 md:gap-6 cursor-pointer transition-all duration-500 border focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 ${formData.meetingMode === mode.id ? 'bg-sky-100/50 text-sky-900 border-sky-300 shadow-md' : 'bg-slate-50 border-slate-200 hover:border-sky-200'}`}
                        >
                          <input 
                            type="radio" 
                            name="meetingMode" 
                            value={mode.id}
                            checked={formData.meetingMode === mode.id}
                            onChange={handleChange}
                            className="opacity-0 absolute" 
                          />
                          <mode.icon size={26} className={formData.meetingMode === mode.id ? 'text-sky-600' : 'text-slate-400'} strokeWidth={1.5} aria-hidden="true" />
                          <span className="text-lg font-headline italic tracking-tight">{mode.id}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 md:pt-10">
                    <button 
                      type="submit" 
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full min-h-[44px] bg-sky-600 text-white font-bold tracking-[0.2em] uppercase text-xs py-4 md:py-5 rounded-full hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-6 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-sky-900/10"
                    >
                      {status === 'idle' && (
                        <>Send Your Message <Send size={18} strokeWidth={1.5} aria-hidden="true" /></>
                      )}
                      {status === 'loading' && 'Sending...'}
                      {status === 'success' && <>Message Sent <CheckCircle2 size={18} strokeWidth={1.5} aria-hidden="true" /></>}
                      {status === 'error' && 'Error Sending. Try Again.'}
                    </button>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 text-center mt-8 md:mt-12 italic">
                      Always Private & Confidential
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="h-8 md:h-10" />
    </main>
  );
}
