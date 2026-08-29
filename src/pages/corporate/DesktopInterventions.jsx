import { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat } from '../../components/ui/motion-wrappers';
import { Eye, Accessibility, Gauge, BatteryWarning, ArrowRight, ChevronRight, ChevronDown, ShieldCheck, Monitor, Clock, Sunrise, Sun, Sunset, Sparkles } from 'lucide-react';

const CHALLENGES = [
  { icon: Eye, title: 'Tired Eyes by Mid-Morning', desc: 'Hours of screen time leave the eyes aching and focus blurring. Simple yoga practices can release this tension beautifully.', color: 'from-blue-400 to-cyan-400', bg: 'bg-blue-50' },
  { icon: Accessibility, title: 'Neck, Shoulders & Back', desc: 'The workstation quietly compresses the spine and strains the neck. Short, guided breaks can reverse this cycle gently.', color: 'from-amber-400 to-orange-400', bg: 'bg-amber-50' },
  { icon: Gauge, title: 'A Mind That Won\'t Settle', desc: 'When focus fractures, breathwork and brief mindfulness practices help the attention come home and truly rest.', color: 'from-violet-400 to-purple-400', bg: 'bg-violet-50' },
  { icon: BatteryWarning, title: 'Fading Energy', desc: 'The depletion that builds through the week is real. Micro-practices help sustain energy naturally, without caffeine.', color: 'from-rose-400 to-pink-400', bg: 'bg-rose-50' },
];

const TIMELINE = [
  { time: 'Morning - 09:00', title: 'A Gentle Start', desc: 'Beginning the day with intention rather than urgency. A short breathing practice to set a calm, clear tone.', color: 'bg-amber-400' },
  { time: 'Midday - 13:00', title: 'The Lunchtime Reset', desc: 'A mindful moment at the midpoint - stretching and re-centring to release what has built up through the morning.', color: 'bg-emerald-400' },
  { time: 'Close of Day - 17:00', title: 'Putting the Day Down', desc: 'A calming wind-down practice to help the mind transition out of work mode, so the evening belongs to rest.', color: 'bg-indigo-400' },
];

const FAQS = [
  { q: 'Is any equipment needed?', a: 'No. These practices are designed for an ordinary work environment - a chair, a desk, and a small corner of floor space are all that is needed.' },
  { q: 'How long does each practice take?', a: 'Micro-practices are between 60-90 seconds. The lunchtime session is around 10 minutes. Everything is designed to fit into your flow.' },
  { q: 'Can remote teams access this?', a: 'Yes, completely. All practices are available as on-demand recordings and through live online sessions.' },
  { q: 'Is this appropriate for everyone?', a: 'All practices are gentle and low-impact. Soma can adapt any practice to suit individual health needs or concerns.' },
];

export default function DesktopInterventions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-transparent min-h-screen font-inter selection:bg-emerald-200 selection:text-emerald-950 overflow-x-hidden relative">
      <SEO 
        title="Desktop Interventions | SOMA" 
        description="Discover Desktop Interventions programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/corporate/desktop" 
      />

      {/* Playful Floating Ambient Orbs (Liquid Glass - Earthy Green & Beige) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#faf9f6]">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#e0e7d5]/80 to-[#f2e5c5]/80 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#f7eedc]/80 to-[#e3e9d4]/80 blur-[120px]" 
        />
      </div>

      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pb-0 lg:pb-0 pt-8">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full w-fit border border-white/80 shadow-sm">
          <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/corporate" className="hover:text-rose-500 transition-colors">Corporate</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-rose-600 uppercase">Desk-Side Yoga</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="soma-section-tight soma-container pb-0 relative mt-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedBadge className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-amber-100 border border-white/50 shadow-sm backdrop-blur-md px-5 py-2.5 rounded-full">
              <Sparkles size={14} className="text-rose-500" />
              <span className="text-[10px] font-bold text-rose-700 uppercase tracking-[0.4em]">Yoga at the Desk</span>
            </AnimatedBadge>
            <h1 className="text-stone-900 mb-6 font-headline leading-[1.1] text-5xl lg:text-7xl">
              Kindness <br />for the Body, <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 font-bold italic">
                Through the Day.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl mb-10">
              Short, playful, and gentle practices woven into the working day — helping your team arrive home feeling vibrant, not depleted.
            </p>
            <div className="flex items-center gap-8 mb-10 bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm w-fit">
              <AnimatedStat value="90 Sec" label="Micro-Practice" />
              <div className="w-px h-12 bg-stone-200" />
              <AnimatedStat value="Hybrid" label="Any Workplace" />
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-1">
              Bring This to Your Team
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-5 relative w-full">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden group lg:w-3/4 lg:ml-auto shadow-2xl shadow-rose-900/10 border-4 border-white">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Desk Yoga" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </FadeIn>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-400/30 to-amber-300/30 rounded-full blur-[80px] -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="pt-16 lg:pt-32 pb-12 lg:pb-24 soma-container">
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl shadow-stone-200/50 rounded-[48px] p-8 lg:p-16 relative overflow-hidden">
          <div className="mb-12 lg:mb-16 text-left max-w-3xl">
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.4em] block mb-6">Physiological Cost</span>
            <h2 className="text-stone-900 mb-6 font-headline text-4xl lg:text-6xl leading-tight">
              The quiet cost of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-rose-500 italic">the working day.</span>
            </h2>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map((item, i) => (
              <StaggerItem key={i} className="bg-white border border-stone-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full -mr-10 -mt-10" />
                
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} strokeWidth={1.5} className={`text-transparent bg-clip-text bg-gradient-to-br ${item.color} [&>path]:stroke-[url(#gradient-${i})]`} />
                  <svg width="0" height="0">
                    <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={`var(--tw-gradient-from)`} />
                      <stop offset="100%" stopColor={`var(--tw-gradient-to)`} />
                    </linearGradient>
                  </svg>
                </div>
                <h4 className="text-stone-900 mb-4 font-headline text-2xl leading-tight">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 15 Minutes Format Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden rounded-[48px] p-8 lg:p-16 border border-white shadow-lg shadow-rose-100/50">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-300/20 to-amber-300/20 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-300/20 to-cyan-300/20 rounded-full blur-[100px] -z-10" />
          
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <AnimatedBadge className="mb-6 bg-white border border-rose-100 text-rose-600 shadow-sm inline-flex mx-auto px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em]">
              Highly Popular Format
            </AnimatedBadge>
            <h2 className="text-stone-900 mb-6 font-headline text-center text-4xl lg:text-6xl leading-tight">
              15 Minutes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400 italic">Three Times a Week.</span>
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
              Our most requested framework. Designed specifically to anchor the workday without disrupting it—delivering targeted physiological support exactly when it's needed most.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[40px] group hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Sunrise className="text-amber-500" size={32} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] mb-4 block">Morning</span>
              <h4 className="text-stone-900 mb-4 font-headline text-3xl">Focus Start</h4>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-6 border border-amber-100">
                Activation
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                A grounded beginning to the day. We build focus and steady energy through breath and gentle movement—without the artificial spike.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[40px] group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Sun className="text-emerald-500" size={32} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] mb-4 block">Midday</span>
              <h4 className="text-stone-900 mb-4 font-headline text-3xl">Midday Reset</h4>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-6 border border-emerald-100">
                Recovery
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                The perfect pause to release accumulated tension. A physical and mental reset designed to restore clarity and sustain you.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[40px] group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:-rotate-12 transition-transform duration-500 shadow-inner">
                <Sunset className="text-indigo-500" size={32} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4 block">Evening</span>
              <h4 className="text-stone-900 mb-4 font-headline text-3xl">Evening Unwind</h4>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-700 mb-6 border border-indigo-100">
                Down-regulation
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                A dedicated practice to close the workday. Actively down-regulating the nervous system so you can leave work behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rhythm of Care Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="mb-12 lg:mb-16">
          <span className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.4em] block mb-6 pl-4">Rhythm of Care</span>
          <h2 className="text-stone-900 mb-6 font-headline text-4xl lg:text-6xl leading-tight">
            Three moments <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 italic">built into the day.</span>
          </h2>
        </div>
        
        <StaggerContainer className="space-y-6">
          {TIMELINE.map((p, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-stone-100 hover:border-violet-200 p-8 lg:p-10 rounded-[40px] transition-all group flex flex-col md:flex-row gap-10 items-center duration-500 hover:shadow-xl hover:shadow-violet-100/50">
                <div className={`w-20 h-20 rounded-[28px] ${p.color} text-white flex flex-col items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                  <span className="text-3xl font-headline font-bold">0{i + 1}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-2 block">{p.time}</span>
                  <h4 className="text-stone-900 mb-3 text-3xl font-headline">{p.title}</h4>
                  <p className="text-stone-500 font-light leading-relaxed max-w-2xl text-lg">{p.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Architect Bridge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 lg:p-16 rounded-[48px] bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-rose-500/20"
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] -mr-10 -mt-10" />
          
          <div className="max-w-2xl relative z-10 text-left">
            <AnimatedBadge className="mb-6 bg-white/20 text-white backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full inline-flex">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Design System Bridge</span>
            </AnimatedBadge>
            <h2 className="text-white mb-6 font-headline text-4xl lg:text-5xl leading-tight">
              Design a precise <br /><span className="text-rose-100 italic">desk-side session.</span>
            </h2>
            <p className="text-lg text-white/90 font-light leading-relaxed">
              Use our rules-driven engine to architect customized wellness strategies that fit your team's specific working rhythm.
            </p>
          </div>
          <Link to="/corporate/architect" className="relative z-10 bg-white text-rose-600 hover:bg-stone-50 px-12 py-5 rounded-full font-bold uppercase tracking-wider text-sm whitespace-nowrap shadow-xl hover:scale-105 transition-transform">
            Start Architect Tool
          </Link>
        </motion.div>
      </section>

      {/* Program Logistics */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-100 rounded-[48px] p-10 lg:p-16 flex flex-col justify-center group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor size={28} strokeWidth={1.5} className="text-amber-500" />
                </div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.4em]">Scalability</span>
            </div>
            <h4 className="text-stone-900 mb-6 font-headline text-4xl">For Everyone.</h4>
            <p className="text-stone-500 font-light leading-relaxed mb-10 text-lg">Soma's desk-side practices can be rolled out across your entire team - from onsite staff to remote workers - through guided live sessions and recordings.</p>
            <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.4em]">Investment</span>
              <span className="text-2xl font-headline text-amber-600 italic">Per Person Basis</span>
            </div>
          </div>

          <div className="bg-stone-900 rounded-[48px] p-10 lg:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-rose-900/20" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-amber-500/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <span className="text-rose-400 font-bold tracking-[0.4em] text-[11px] uppercase mb-8 block">What's Included</span>
              <h4 className="text-white mb-10 font-headline text-4xl leading-tight">Everything Your <br />Team Needs.</h4>
              <ul className="space-y-6 mb-12">
                {[
                  'Live & on-demand sessions',
                  'Team wellbeing overview reports',
                  'Direct support from Soma\'s team',
                  'Custom practices for your sector'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-stone-300">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 border border-rose-500/30">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                    </div>
                    <span className="text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-5 rounded-full font-bold text-sm tracking-wide uppercase transition-colors backdrop-blur-md">
                Write to Soma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-[0.4em] block mb-6">Clarifications</span>
            <h2 className="text-stone-900 mb-6 font-headline text-4xl lg:text-5xl">Things people ask.</h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className="font-headline text-xl text-stone-900 group-hover:text-cyan-600 transition-colors">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 shrink-0 ${openFaq === i ? 'bg-cyan-50 text-cyan-600' : 'bg-stone-50 text-stone-400 group-hover:bg-cyan-50 group-hover:text-cyan-500'}`}>
                    <ChevronDown size={20} className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-8 pb-8 pt-0 text-stone-500 leading-relaxed font-light text-lg border-t border-stone-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Invitation */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container mb-8">
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-rose-950 rounded-[64px] py-20 lg:py-32 px-8 md:px-20 relative overflow-hidden text-center shadow-2xl">
          <div className="max-w-4xl mx-auto relative z-10">
            <AnimatedBadge className="mb-8 bg-white/10 border border-white/20 text-rose-200 backdrop-blur-md px-6 py-2.5 rounded-full inline-flex mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">A Warm Invitation</span>
            </AnimatedBadge>
            <h2 className="text-white mb-10 font-headline text-5xl lg:text-7xl leading-tight">
              A few gentle moments <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 italic">change the day.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-rose-100/80 mb-14 font-light leading-relaxed max-w-3xl mx-auto">
              Short yoga and breathing practices, guided by Soma — woven quietly into the day, with warmth and with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-rose-500 text-stone-900 hover:text-white px-10 py-5 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-rose-500/40 hover:-translate-y-1 hover:scale-105 w-full sm:w-auto">
                Bring This to Your Team
              </Link>
            </div>
          </div>
          
          {/* Vibrant Orbs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/20 to-transparent rounded-full -ml-40 -mt-40 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-rose-500/20 to-violet-500/20 rounded-full -mr-40 -mb-40 blur-[100px] pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
