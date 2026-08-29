import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge } from '../components/ui/motion-wrappers';
import { ArrowRight, Moon, Brain, Monitor, Zap, Shield, Sparkles, MessageCircle, Waves, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import ProgramDiscovery from '../components/ProgramDiscovery';

const PROGRAM_CARDS = [
  {
    id: 'sleep',
    title: 'Sleep Architecture',
    subtitle: 'Restoration',
    desc: 'Through yoga nidra and somatic breathwork, find your way back to deep, nourishing sleep.',
    link: '/programs/sleep',
    image: '/Photos/SleepArchitecture.png',
    span: 'md:col-span-8',
    icon: Moon,
  },
  {
    id: 'cognitive',
    title: 'Cognitive Calm',
    subtitle: 'Mind Wellness',
    desc: 'For minds that won\'t slow down. Gentle mindfulness to restore inner spaciousness.',
    link: '/programs/cognitive',
    span: 'md:col-span-4',
    icon: Brain,
  },
  {
    id: 'digital-calm',
    title: 'Digital Calm',
    subtitle: 'Nervous System',
    desc: 'For people who feel mentally consumed, overstimulated, or internally restless from prolonged digital saturation.',
    link: '/programs/digital-calm',
    span: 'md:col-span-4',
    icon: Zap,
  },
  {
    id: 'digital',
    title: 'Ergonomics Wellness',
    subtitle: 'Desk & Body',
    desc: 'Yoga for the sedentary professional. Stretches to ease the aches of modern life.',
    link: '/programs/digital',
    span: 'md:col-span-4',
    icon: Monitor,
  },
  {
    id: 'metabolic',
    title: 'Metabolic Resilience',
    subtitle: 'Vitality',
    desc: 'When fatigue feels constant. Soma guides you through lifestyle shifts to feel alive again.',
    link: '/programs/metabolic',
    span: 'md:col-span-4',
    icon: Activity,
  },
  {
    id: 'sanctuary',
    title: 'Executive Sanctuary',
    subtitle: 'One-on-One',
    desc: 'A private, deeply personal practice for leaders who need a quiet space to breathe.',
    link: '/programs/sanctuary',
    span: 'md:col-span-4',
    icon: Shield,
  }
];

export default function Programs() {
  return (
    <main className="bg-stone-50 min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest overflow-x-hidden">
      <SEO 
        title="Wellness Programs & Therapy | SOMA"
        description="Explore bespoke wellness programs including Sleep Architecture, Cognitive Calm, Digital Ergonomics, and Executive Sanctuary."
        canonical="https://www.somamukherjee.com/programs"
      />
      {/* Breadcrumb Section */}
      <section className="soma-section-tight soma-container pt-12 pb-0">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start mb-8 md:mb-20 lg:mb-32">
          <div className="lg:col-span-7">
            <StaggerContainer>
              <StaggerItem>
                <h5 className="mb-4 md:mb-8 lg:mb-12">
                  <Sparkles size={16} className="text-amber-600" aria-hidden="true" />
                  Institutional Practices
                </h5>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-soma-forest mb-6 md:mb-10 lg:mb-16">
                  Programmes for <br />
                  <span className="text-rose-500 italic">Lasting Wellbeing.</span>
                </h1>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="lg:col-span-5 pt-8 md:pt-16 lg:pt-32">
            <FadeIn delay={0.2}>
              <p className="text-stone-700 text-xl md:text-2xl leading-relaxed lg:pl-12 border-l-2 border-amber-200/60 font-normal italic">
                "Each programme is rooted in the wisdom of yoga and shaped around the realities of modern life. No quick fixes - just honest, caring, sustainable practice for the human condition."
              </p>
            </FadeIn>
          </div>
        </div>
        
        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10 md:mb-20 lg:mb-40">
          {PROGRAM_CARDS.map((p) => (
            <StaggerItem key={p.id} className={`${p.span} group`}>
              <Link to={p.link} className="block h-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-[64px]">
                <div className="soma-card h-full flex flex-col group/card relative overflow-hidden">
                  {p.image && (
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-all duration-1000 scale-110 group-hover:scale-100 pointer-events-none">
                      <img src={p.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 md:mb-8 lg:mb-12">
                      <p.icon size={32} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    
                    <h5 className="text-stone-400 mb-3 md:mb-4 lg:mb-6 italic">{p.subtitle}</h5>
                    <h3 className="text-soma-forest mb-4 md:mb-6 lg:mb-8 group-hover:text-rose-600 transition-colors italic leading-tight">{p.title}</h3>
                    <p className="text-stone-700 text-lg leading-relaxed mb-6 md:mb-8 lg:mb-12 max-w-sm font-normal italic">"{p.desc}"</p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-soma-forest text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-600 shadow-sm">
                        <ArrowRight size={18} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-soma-forest transition-colors group-hover:text-amber-600">
                        Explore this Practice
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}

          {/* Corporate Strategy Card */}
          <StaggerItem className="md:col-span-12">
            <div className="bg-soma-forest text-white p-8 md:p-16 lg:p-32 rounded-[64px] md:rounded-[80px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[140px] -mr-64 -mt-64 group-hover:bg-teal-500/20 transition-all duration-1000" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-6 mb-6 md:mb-8 lg:mb-12">
                    <div className="w-16 h-16 rounded-[24px] bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <Sparkles size={32} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h5 className="text-teal-400 block border-l-2 border-teal-800/50 pl-6 italic">HR & Leadership Strategy</h5>
                  </div>
                  <h2 className="mb-6 md:mb-8 lg:mb-10 text-white italic">
                    Tailor made <br />
                    <span className="text-teal-400 italic">wellness systems.</span>
                  </h2>
                  <p className="text-stone-300 text-xl md:text-2xl leading-relaxed mb-8 md:mb-12 lg:mb-16 max-w-2xl font-normal italic">
                    "A proprietary architectural framework for institutional leaders to design, sequence, and verify organizational wellness impact." 
                  </p>
                  <Link to="/corporate/architect" className="soma-button-primary">
                    Open Architect <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
                <div className="hidden lg:block">
                   <div className="w-80 h-80 border border-teal-500/20 rounded-full flex items-center justify-center relative bg-teal-900/10 backdrop-blur-sm">
                      <div className="w-64 h-64 border border-teal-400/20 rounded-full animate-pulse-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Waves size={80} className="text-teal-400 opacity-60" aria-hidden="true" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Counselling Card */}
          <StaggerItem className="md:col-span-12">
            <div className="bg-white border border-amber-100 p-8 md:p-16 lg:p-32 rounded-[64px] md:rounded-[80px] flex flex-col lg:flex-row items-center gap-10 lg:gap-24 shadow-lg shadow-amber-900/5 hover:shadow-2xl hover:border-amber-300 transition-all duration-700">
              <div className="lg:w-3/5">
                <h5 className="text-amber-600 mb-6 md:mb-8 lg:mb-10 block border-l-2 border-amber-200 pl-6 italic">Personal Guidance</h5>
                <h2 className="text-soma-forest mb-6 md:mb-8 lg:mb-10 italic">A Space to Talk About <span className="text-rose-500 italic">What's Hard.</span></h2>
                <p className="text-stone-700 text-xl md:text-2xl leading-relaxed mb-8 md:mb-12 lg:mb-16 max-w-2xl font-normal italic">
                  "You don't need the right words - or even to know exactly what's wrong. Soma simply listens, with warmth and a psychosomatic approach, without judgement." 
                </p>
                <Link to="/programs/counselling" className="inline-flex items-center gap-6 text-soma-forest font-bold group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2">
                  <span className="text-sm uppercase tracking-[0.2em] border-b-2 border-transparent group-hover:border-amber-500 pb-2 transition-colors duration-300">Learn About Counselling</span>
                  <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500 text-amber-600" aria-hidden="true" />
                </Link>
              </div>
              <div className="lg:w-2/5 flex flex-col gap-6 w-full">
                {[
                  'Persistent Tiredness',
                  'Feeling Overwhelmed',
                  'Loss of Joy or Motivation',
                  'Uncertain Transitions'
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between p-5 md:p-6 lg:p-8 rounded-[40px] bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all group">
                    <h4 className="text-soma-forest italic group-hover:text-amber-700">{item}</h4>
                    <Sparkles className="text-amber-300 group-hover:text-amber-500 transition-colors" size={24} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Programme Discovery Section */}
      <section className="px-4 md:px-6 lg:px-10 mb-10 md:mb-16 lg:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-amber-600 italic mb-3">Not Sure Where to Begin?</h5>
          <h2 className="text-soma-forest italic mb-4">Find your programme<br /><span className="text-rose-400 italic">in five quiet questions.</span></h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto font-normal italic leading-relaxed">
            "No forms, no pressure. Just a gentle conversation with yourself."
          </p>
        </div>
        <ProgramDiscovery />
      </section>

      {/* Philosophy Block Section */}
      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 bg-white border-y border-stone-100 rounded-[48px] md:rounded-[80px] mx-4 md:mx-6 lg:mx-10 shadow-lg shadow-stone-200/50 relative overflow-hidden mb-10 md:mb-16 lg:mb-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15),transparent_70%)]" />
        </div>
        <FadeIn className="max-w-6xl mx-auto relative z-10">
          <h5 className="text-amber-500 mb-6 md:mb-10 lg:mb-16 italic">Our Philosophy</h5>
          <h2 className="mb-8 md:mb-16 lg:mb-32 italic">
            Tradition. <br />
            <span className="italic text-rose-400">The Human Condition.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 lg:gap-32">
            {[
              { title: 'Sustainable', desc: 'Practices that fit into your existing routine, rather than demanding a new one.' },
              { title: 'Personal', desc: 'Guided by 25 years of real relationships and individualised yoga therapy.' },
              { title: 'Gentle', desc: 'Small, purposeful moments of presence that shift the trajectory of your day.' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-1 px-10 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 md:mb-8 lg:mb-10 group-hover:w-full transition-all duration-1000" />
                <h4 className="mb-4 md:mb-5 lg:mb-6 text-soma-forest group-hover:text-amber-700 transition-colors">{item.title}</h4>
                <p className="text-stone-600 text-lg leading-relaxed font-normal italic">"{item.desc}"</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="pt-0 pb-12 lg:pb-24 px-6 lg:px-12 text-center">
        <div className="soma-cta-banner">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/60 rounded-full blur-[120px] -mr-32 -mt-32" />
          <h5 className="text-amber-600 mb-4 md:mb-8 lg:mb-12 italic">Next Steps</h5>
          <h1 className="text-soma-forest mb-6 md:mb-10 lg:mb-16 italic">Not sure where <br className="hidden md:block" /> to start?</h1>
          <p className="text-stone-700 text-xl md:text-2xl mb-8 md:mb-16 lg:mb-24 max-w-3xl mx-auto leading-relaxed font-normal italic">
            "That's completely okay. Take Soma's short wellness check-in and she'll help you find the right place to begin your practice."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
            <Link to="/assessment" className="min-h-[44px] flex items-center justify-center px-8 md:px-16 py-6 md:py-8 bg-amber-500 text-soma-forest rounded-full font-bold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all shadow-2xl shadow-amber-500/20 uppercase tracking-[0.2em] text-sm">
              Start Wellness Check-In
            </Link>
            <Link to="/contact" className="min-h-[44px] flex items-center justify-center px-8 md:px-16 py-6 md:py-8 bg-white text-soma-forest border border-amber-200 rounded-full font-bold hover:bg-amber-50 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all shadow-sm uppercase tracking-[0.2em] text-sm">
              Write to Soma
            </Link>
          </div>
        </div>
      </section>

      <div className="h-8 md:h-10" />
    </main>
  );
}
