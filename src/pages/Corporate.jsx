import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge } from '../components/ui/motion-wrappers';
import { Presentation, Heart, Monitor, Building2, ArrowRight, ShieldCheck, HeartPulse, Brain, Zap, Fingerprint, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Corporate() {
  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Corporate Wellness & Resilience | SOMA"
        description="Bespoke corporate wellness, mental resilience, and digital ergonomics programs led by Soma Mukherjee: Harvard Medical School stress training, Master's in Personnel Management, Ayush Level 3, and 22 years at TCS."
        canonical="https://www.somamukherjee.com/corporate"
      />
      {/* Hero Section */}
      <section className="soma-section-tight soma-container pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 z-10">
            <h5 className="mb-6 md:mb-8">
              <Sparkles size={14} className="text-stone-400" />
              For People-First Organisations
            </h5>
            <h1 className="text-soma-forest mb-6 md:mb-8 italic">
              Bringing Stillness <br />& Strength <br /> <span className="text-stone-400">to Your Culture.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-xl mb-8 md:mb-12 italic">
              "When people feel well in their bodies and calm in their minds, everything at work goes better. Soma brings Harvard Medical School stress-management training, a Master's in Personnel Management, Ayush Level 3 certification, and 22 years embedded at TCS directly into your organisation."
            </p>
            <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
              {[
                { icon: BookOpen, label: 'Harvard Medical School' },
                { icon: GraduationCap, label: "Master's in Personnel Management" },
                { icon: ShieldCheck, label: 'Ayush Level 3' },
                { icon: Building2, label: '22 years at TCS' }
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-800 shadow-sm">
                  <item.icon size={14} className="text-amber-600" />
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <Link to="/contact" className="soma-button-primary">
                Book a Consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link to="/corporate/architect" className="soma-button-outline">
                Enter Architect Tool
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative w-full">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[64px] overflow-hidden group lg:w-3/4 lg:ml-auto">
                <img className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[3000ms] group-hover:scale-110" alt="Soma Mukherjee - Corporate Wellness" src="/Photos/SomaS.png"/>
                <div className="absolute inset-0 bg-soma-forest/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                whileHover={{ y: -8 }}
                className="absolute -bottom-10 -left-10 p-6 md:p-10 bg-soma-forest text-white rounded-[32px] max-w-[300px] z-20"
              >
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 bg-white/10 rounded-[12px] flex items-center justify-center">
                     <ShieldCheck size={20} className="text-stone-300" />
                   </div>
                   <h5 className="text-stone-500 italic">Integrity</h5>
                </div>
                <p className="text-base font-light text-stone-300 leading-relaxed italic">"Soma creates a culture of care that stays long after the session ends."</p>
              </motion.div>
            </FadeIn>
            
            {/* Background Luminous Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[140px] -z-10" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="soma-section-tight bg-white rounded-[48px] md:rounded-[64px] mx-4 lg:mx-8 relative overflow-hidden pb-0">
        <div className="soma-container">
          <div className="text-center mb-8 md:mb-16 lg:mb-24">
            <h2 className="text-soma-forest mb-4 md:mb-8 lg:mb-12 italic">Why Wellness Belongs <br /><span className="text-stone-400">in Every Workspace.</span></h2>
            <p className="text-xl lg:text-2xl text-stone-500 font-light max-w-4xl mx-auto leading-relaxed italic">
              "Standard perks and wellness apps don't reach the root of how people actually feel. Soma works with the whole person - their body, their breath, their stress - and the results ripple through everything."
            </p>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, title: "Happier Teams", desc: "When people feel cared for - when they're shown how to breathe, move, and pause - morale isn't something you manufacture. It emerges naturally." },
              { icon: Brain, title: "Clearer Minds", desc: "Breathwork and mindful movement have a direct effect on focus, decision-making, and the ability to stay calm under pressure." },
              { icon: Zap, title: "Lasting Energy", desc: "Instead of running on adrenaline and caffeine, teams learn to renew their energy naturally - reducing burnout and building resilience." }
            ].map((item, i) => (
              <StaggerItem key={i} className="soma-card group">
                <div className="w-14 h-14 bg-stone-50 rounded-[20px] flex items-center justify-center mb-6 lg:mb-10 group-hover:bg-soma-forest transition-all duration-700">
                  <item.icon size={28} strokeWidth={1.2} className="text-stone-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-soma-forest mb-3 md:mb-4 lg:mb-6 italic">{item.title}</h3>
                <p className="text-stone-500 text-lg leading-relaxed font-light italic">"{item.desc}"</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 soma-container">
        <div className="mb-8 md:mb-16 lg:mb-24">
          <h5 className="mb-6 md:mb-8">
            <Sparkles size={14} className="text-stone-400" />
            Program Architecture
          </h5>
          <h2 className="text-soma-forest mb-6 md:mb-8 italic">something for every <br /><span className="text-stone-400">layer of your team.</span></h2>
          <p className="text-xl lg:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl italic">"From the boardroom to the desktop, Soma meets people where they are."</p>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Presentation, badge: "Group Learning", title: "Workshops & Retreats", desc: "Half-day or full-day sessions bringing yoga, breathwork and mindfulness guidance to your leadership teams.", href: "/corporate/workshops" },
            { icon: Heart, badge: "Support Space", title: "The Connection", desc: "A warm, confidential space where your people can speak openly, breathe, and find their way back to themselves.", href: "/corporate/connection" },
            { icon: Monitor, badge: "Daily Practice", title: "Desk Yoga & Micro-Breaks", desc: "Simple, effective yoga stretches and breathing exercises designed for the desk - no mat required.", href: "/corporate/desktop" },
            { icon: Building2, badge: "Culture Design", title: "Wellness Consulting", desc: "Environmental design and cultural guidance to help you build workplaces where people genuinely thrive.", href: "/corporate/wellness" }
          ].map((item, i) => (
            <StaggerItem key={i}>
              <Link to={item.href} className="soma-card group flex flex-col h-full bg-white">
                <div className="flex justify-between items-start mb-6 md:mb-10 lg:mb-16">
                  <div className="w-14 h-14 bg-stone-50 rounded-[20px] flex items-center justify-center group-hover:bg-soma-forest group-hover:scale-110 transition-all duration-700">
                    <item.icon size={28} strokeWidth={1.2} className="text-stone-400 group-hover:text-white transition-colors" />
                  </div>
                  <h5 className="text-stone-400 italic mt-2">{item.badge}</h5>
                </div>
                <h3 className="text-soma-forest mb-3 md:mb-4 lg:mb-6 group-hover:text-rose-600 transition-colors italic leading-tight">{item.title}</h3>
                <p className="text-stone-500 text-lg lg:text-xl leading-relaxed mb-6 lg:mb-12 flex-grow font-light italic">"{item.desc}"</p>
                <div className="flex items-center justify-between pt-8">
                  <h5 className="text-stone-400 italic">Explore Detail</h5>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-soma-forest transition-all duration-500">
                    <ArrowRight size={18} className="text-stone-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* HR Support Section */}
      <section className="soma-section-tight bg-soma-forest text-white rounded-[48px] md:rounded-[64px] mx-4 lg:mx-8 relative overflow-hidden pb-12 lg:pb-24">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] -mr-80 -mt-80" />
        <div className="soma-container flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full mb-4 md:mb-6 lg:mb-10">
              <Sparkles size={14} className="text-stone-500" />
              <h5 className="text-stone-400 italic">Partnership</h5>
            </div>
            <h2 className="mb-6 md:mb-10 lg:mb-12 italic text-white">Understanding <br /><span className="text-stone-500">Your People.</span></h2>
            <p className="text-xl lg:text-2xl text-stone-400 font-light mb-8 md:mb-12 lg:mb-16 leading-relaxed italic">"Soma works closely with HR leaders to build programmes that genuinely meet people where they are."</p>
            
            <div className="space-y-12">
              {[
                { title: "Team Wellbeing Check-Ins", desc: "Regular pulse sessions to understand how your teams are feeling and where support is needed." },
                { title: "Tailored Programmes", desc: "Every organisation is different. Soma designs each programme around your specific needs." },
                { title: "Visible, Lasting Change", desc: "You'll notice the difference - in how people talk, how they interact, and how they show up." }
              ].map((point, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 w-14 h-14 bg-white/5 rounded-[20px] flex items-center justify-center text-stone-500 group-hover:bg-white group-hover:text-soma-forest transition-all duration-1000">
                    <span className="text-xl font-headline italic">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 md:mb-4 italic">{point.title}</h4>
                    <p className="text-base lg:text-lg text-stone-400 font-light leading-relaxed italic">"{point.desc}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative p-3 bg-white/5 rounded-[64px] backdrop-blur-sm overflow-hidden">
              <img className="rounded-[52px] w-full transition-transform duration-[3000ms] hover:scale-110" alt="Workplace wellness" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjtSh349IyHCfzEkLv9eE2NuRUPYo1Jx9sGGbtDHwUXs-D8b5ffBAzOnIYoWRFJiNsk_OpGKN5tP2CTHx-Zv-MfhkPhNuXlAfcrPs0L_mzS7J-TemL-Uxex6TFH1_RLCy2r7FxgQdpzvK10l4sRXfCAN_7mkJpVV70pzE0KbMimMJiYoAbahJVTwgYzx04FA1Y4oSRjFye5LxWJo1yEoY1zkv8NoBt8RrvGy-yyvqXEo4C3Hh09xAMLc8icMIRm7qfIa2mz2o8ZrMT"/>
            </div>
            
            {/* Stats Overlay */}
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="absolute -bottom-8 md:bottom-12 -left-8 md:left-12 bg-white p-6 md:p-10 rounded-[32px] md:rounded-[48px] text-soma-forest max-w-[260px] md:max-w-[300px]"
            >
              <div className="text-6xl font-headline mb-4 tracking-tighter leading-none italic">1000+</div>
              <h5 className="text-stone-400 italic leading-relaxed">Lives Touched across India's leading firms.</h5>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architect Tool Bridge */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container relative overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-4 md:mb-6 lg:mb-10">
              <Sparkles size={14} className="text-stone-400" />
              <h5 className="text-soma-forest italic">Proprietary Tool</h5>
            </div>
            <h2 className="text-soma-forest mb-6 md:mb-8 lg:mb-12 italic">Architect Your <br /><span className="text-stone-400">Wellness Strategy.</span></h2>
            <p className="text-xl lg:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl mb-6 md:mb-8 lg:mb-12 italic">
              "Use our live design system to build a session architecture that addresses your people's specific needs - from desk-based micro-breaks to deep metabolic restoration."
            </p>
            <Link to="/corporate/architect" className="soma-button-primary">
              Enter Platform Architect <ArrowRight size={24} />
            </Link>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="p-8 md:p-12 bg-white rounded-[48px] md:rounded-[64px] relative overflow-hidden group">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-100" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-100" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-100" />
                  </div>
                  <h5 className="text-stone-300 italic">Protocol Designer v1.0</h5>
               </div>
                <div className="space-y-6">
                  <div className="h-6 bg-stone-50 rounded-full w-3/4" />
                  <div className="h-6 bg-stone-50 rounded-full w-full" />
                  <div className="grid grid-cols-2 gap-6 pt-8">
                     <div className="h-16 bg-stone-50 rounded-[20px]" />
                     <div className="h-16 bg-stone-50 rounded-[20px]" />
                  </div>
                  <div className="pt-12">
                     <div className="h-24 bg-soma-forest rounded-[32px] flex items-center justify-center group-hover:scale-95 transition-transform duration-1000">
                        <Fingerprint size={40} strokeWidth={1} className="text-stone-500 animate-pulse" />
                     </div>
                  </div>
               </div>
                <div className="absolute -top-3 -right-3 bg-soma-forest text-white px-6 py-3 rounded-full italic">
                 <h5 className="text-white text-[10px]">New System</h5>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="pt-0 pb-12 lg:pb-24 bg-white">
        <div className="soma-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="md:w-1/3">
              <h5 className="text-stone-400 italic block mb-6">Proven Legacy</h5>
              <h2 className="text-soma-forest mb-4 md:mb-8 lg:mb-12 italic">A Presence in India's Workplaces Since 2001.</h2>
            </div>
            
            <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-10 md:gap-12 lg:gap-20 items-center">
              <div className="text-center group">
                <div className="text-6xl lg:text-7xl font-headline text-stone-200 group-hover:text-soma-forest transition-colors duration-1000 italic">TCS</div>
                <h5 className="mt-6 text-stone-400 italic">22 Years</h5>
              </div>
              <div className="w-px h-20 bg-stone-100/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-7xl lg:text-8xl font-headline text-soma-forest mb-2 tracking-tighter leading-none italic">1000+</div>
                <h5 className="text-stone-400 italic">Lives Touched</h5>
              </div>
              <div className="w-px h-20 bg-stone-100/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-7xl lg:text-8xl font-headline text-soma-forest mb-2 tracking-tighter leading-none italic">25+</div>
                <h5 className="text-stone-400 italic">Years Practice</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pt-0 pb-12 lg:pb-24 text-center">
        <div className="soma-cta-banner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-stone-50 rounded-full mb-6 md:mb-8 lg:mb-12 border border-stone-100">
              <Sparkles size={14} className="text-stone-500" />
              <h5 className="text-stone-500 italic">Final Synthesis</h5>
            </div>
            <h2 className="mb-6 md:mb-8 lg:mb-12 italic text-soma-forest">Ready to create a workplace <br /><span className="text-stone-500">people love to be in?</span></h2>
            <p className="text-xl lg:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16 font-light leading-relaxed italic">
              "Reach out to Soma directly for a genuine conversation about how wellness can become a living part of your culture."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/contact" className="px-10 md:px-16 py-6 md:py-8 bg-soma-forest text-white rounded-full font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-stone-800 transition-all shadow-lg">
                Write to Soma
              </Link>
              <button className="px-10 md:px-16 py-6 md:py-8 bg-white text-stone-500 border border-stone-200 rounded-full font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-stone-50 transition-all">
                Our Clients
              </button>
            </div>
          </div>
          
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-48 -mt-48 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-400/5 rounded-full -ml-48 -mb-48 blur-[120px]" />
        </div>
      </section>
    </main>
  );
}
