import { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat } from '../../components/ui/motion-wrappers';
import { Shield, Users, ShieldCheck, Brain, ArrowRight, ChevronRight, ChevronDown, Lock, Heart, Sparkles } from 'lucide-react';

const CHALLENGES = [
  { icon: Lock, title: 'Nowhere Safe to Exhale', desc: 'Inside a busy organisation it can feel impossible to speak honestly about the pressure, the doubt, or the weight of responsibility.' },
  { icon: Users, title: 'Carrying the Team\'s Wellbeing', desc: 'Leaders often absorb the stress of their whole team - with no one looking out for them in return. The Connection offers that support.' },
  { icon: ShieldCheck, title: 'A Truly Neutral Space', desc: 'Soma holds no ties to your HR or leadership. What is shared in The Connection stays entirely private - always.' },
  { icon: Brain, title: 'Losing the Spark', desc: 'When the joy and energy for your work begins to fade, The Connection helps you find your way back to yourself and your purpose.' },
];

const PHASES = [
  { step: 'Phase 01', title: 'An Unhurried Conversation', desc: 'The Connection begins with a long, open conversation between you and Soma - no agenda, no notes shared, simply a chance to be honest.' },
  { step: 'Phase 02', title: 'Your Own Private Practice', desc: 'Soma shapes a personal practice - breathwork, yoga therapy, and guided reflection - tailored entirely around what you need.' },
  { step: 'Phase 03', title: 'An Evolving Relationship', desc: 'The Connection grows with you. Soma adjusts the practice with care over time, remaining a consistent, trusted presence.' },
];

const FAQS = [
  { q: 'Is this the same as an EAP?', a: 'No. The Connection is a genuine relationship - ongoing, deeply personal, and shaped around you specifically. Soma is a practitioner, not a service.' },
  { q: 'Will anything be shared with HR?', a: 'Never. The Connection operates with absolute confidentiality. Soma holds no reporting relationship with any organisation.' },
  { q: 'How often would we meet?', a: 'Typically fortnightly - but this is flexible and shaped around your schedule. The Connection is designed to be a source of ease.' },
  { q: 'Who is The Connection for?', a: 'Anyone who carries significant responsibility - leaders, managers, and entrepreneurs who feel the weight of their work.' },
];

export default function TheConnection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-[#F8F7FF] min-h-screen font-inter selection:bg-indigo-200 selection:text-indigo-950 overflow-x-hidden">
      <SEO 
        title="TheConnection | SOMA" 
        description="Discover TheConnection programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/corporate/connection" 
      />
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pb-0 lg:pb-0">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/corporate" className="hover:text-stone-900 transition-colors">Corporate</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900">The Connection</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="soma-section-tight soma-container pb-0 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedBadge className="mb-10 inline-flex items-center px-5 py-2.5 rounded-full border border-indigo-200/50 bg-indigo-50/50 shadow-sm backdrop-blur-md">
              <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-[0.4em]">A Trusted Personal Practice</span>
            </AnimatedBadge>
            <h1 className="text-soma-forest mb-8 italic">
              A Safe <br />Space <br /> <span className="text-indigo-600">to Exhale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl mb-12 italic">
              "A private, ongoing relationship with Soma - a genuine space where those who carry the most can finally speak honestly, breathe deeply, and find their way back to themselves."
            </p>
            <div className="flex items-center gap-10 mb-12">
              <AnimatedStat value="Private" label="Confidential Space" />
              <div className="w-px h-10 opacity-10 bg-indigo-200" />
              <AnimatedStat value="Bespoke" label="Shaped for You" />
            </div>
            <Link to="/contact" className="soma-button-indigo">
              Write to Soma Privately
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-5 relative w-full">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[64px] overflow-hidden group lg:w-3/4 lg:ml-auto">
                <img className="w-full h-full object-cover grayscale-[30%] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0" alt="Personal Connection" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </FadeIn>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px] -z-10" />
          </div>
        </div>
      </section>

      {/* Leadership Care Section */}
      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 bg-white relative overflow-hidden rounded-[64px] mx-4 lg:mx-8">
        <div className="soma-container">
          <div className="mb-16 lg:mb-24 text-left max-w-3xl">
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.4em] block mb-6">Leadership Care</span>
            <h2 className="text-soma-forest mb-8 italic">What it feels like to <br /><span className="text-indigo-600">carry it all.</span></h2>
            <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed italic">"The Connection addresses the unique burden carried by those at the helm - with no one to turn to and no safe place to exhale."</p>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHALLENGES.map((item, i) => (
              <StaggerItem key={i} className="soma-card group hover:bg-indigo-950">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
                  <item.icon size={28} strokeWidth={1.2} className="text-indigo-600 group-hover:text-indigo-100 transition-colors" />
                </div>
                <h3 className="text-soma-forest mb-6 group-hover:text-white transition-colors italic leading-tight">{item.title}</h3>
                <p className="text-stone-500 text-base leading-relaxed group-hover:text-indigo-100/80 transition-colors font-light italic">"{item.desc}"</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="mb-16 lg:mb-24">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em] block mb-6 pl-4">The Journey</span>
          <h2 className="text-soma-forest mb-8 italic">How The Connection <br /><span className="text-indigo-600">unfolds with you.</span></h2>
        </div>
        
        <StaggerContainer className="space-y-8">
          {PHASES.map((p, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[48px] transition-all group flex flex-col md:flex-row gap-10 items-center duration-700">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-indigo-800 to-indigo-950 text-white flex flex-col items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-white/5" />
                  <span className="text-3xl font-headline italic relative z-10">0{i + 1}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.4em] mb-2 block">{p.step}</span>
                  <h3 className="text-soma-forest mb-4 italic group-hover:text-indigo-900 transition-all">{p.title}</h3>
                  <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl italic">"{p.desc}"</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Call to Action Section */}
      <section className="pt-0 pb-12 lg:pb-24 bg-white rounded-[64px] mx-4 lg:mx-8">
        <div className="soma-container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-[#F8F7FF] p-12 lg:p-16 rounded-[48px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-[100px] -mr-40 -mt-40 transition-colors duration-1000 group-hover:bg-indigo-300/30" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em] block mb-10">By Private Conversation</span>
                <h2 className="text-soma-forest mb-10 italic">A Private Start <br /><span className="text-indigo-600">to Something New.</span></h2>
                <p className="text-xl text-stone-500 font-light leading-relaxed mb-12 max-w-xl italic">"Soma shares investment details during your first, completely unhurried conversation - once she understands what you need."</p>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    'A personal relationship with Soma',
                    'Complete privacy - nothing shared',
                    'Flexible schedule for your life',
                    'Online or in-person in Pune',
                    'Practice evolves as you do'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span className="text-lg font-light text-stone-600 italic leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="soma-button-indigo">
                   Write to Soma to Begin
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-indigo-950 text-white p-12 lg:p-16 rounded-[48px] relative overflow-hidden flex flex-col justify-between shadow-indigo-950/20">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px] -mr-24 -mt-24" />
              <div className="relative z-10">
                <span className="text-indigo-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-10 block">Absolute Privacy</span>
                <h3 className="text-white mb-10 italic">Yours alone.</h3>
                <p className="text-lg text-indigo-100/80 font-light leading-relaxed mb-10 italic">"No reporting, no forms, no data shared. The Connection belongs to you entirely - Soma holds it with absolute care."</p>
              </div>
              <div className="bg-white/5 p-8 rounded-[32px] relative z-10 backdrop-blur-md">
                <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.4em] mb-4">Engagement Format</p>
                <p className="text-2xl font-headline italic">Online or <br />Pune Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.4em] block mb-6">Clarifications</span>
            <h2 className="text-soma-forest mb-8 italic text-center">Things people ask.</h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="soma-faq-item bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="soma-faq-trigger"
                >
                  <span className="text-xl font-headline text-soma-forest group-hover:italic transition-all group-hover:text-indigo-800">{faq.q}</span>
                  <ChevronDown size={18} className={`text-stone-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="soma-faq-content pt-0">
                        <div className="w-8 h-1 opacity-20 bg-indigo-200 mb-6 rounded-full" />
                        <p className="text-lg text-stone-500 font-light leading-relaxed italic">"{faq.a}"</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-white p-12 rounded-[56px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors duration-1000 group-hover:bg-indigo-100/50" />
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-16 h-16 bg-indigo-950 rounded-[20px] flex items-center justify-center shrink-0">
              <ShieldCheck size={28} strokeWidth={1} className="text-indigo-100" />
            </div>
            <div>
              <h3 className="text-soma-forest mb-1 italic">Accepting new connections</h3>
              <p className="text-stone-400 font-light italic">Write to Soma privately - the first conversation carries no obligation.</p>
            </div>
          </div>
          <Link to="/contact" className="soma-button-indigo relative z-10 whitespace-nowrap">
            Write to Soma
          </Link>
        </div>
      </section>

      {/* Footer Invitation */}
      <section className="pt-0 pb-12 lg:pb-24 bg-indigo-950 relative overflow-hidden text-center rounded-[64px] mx-4 lg:mx-8 mb-8">
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.4em] mb-12">A Quiet Invitation</p>
          <h2 className="text-white mb-12 italic font-normal text-6xl lg:text-8xl">Every leader deserves <br /><span className="text-indigo-400">a safe place to land.</span></h2>
          <p className="text-xl text-indigo-100/80 mb-12 font-light leading-relaxed italic">"The Connection is Soma's offer of genuine, personal, and completely private support - for anyone who carries more than they let on."</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="soma-button-outline">
              Write to Soma Privately
            </Link>
          </div>
        </div>
        
        {/* Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -ml-64 -mt-64 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full -mr-64 -mb-64 blur-[100px]" />
      </section>
    </main>
  );
}
