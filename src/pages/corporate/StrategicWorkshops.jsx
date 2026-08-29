import { useState } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat } from '../../components/ui/motion-wrappers';
import { TrendingDown, Users, Brain, HeartHandshake, ArrowRight, ChevronRight, X, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

const CHALLENGES = [
  { icon: TrendingDown, title: 'When the Team Runs on Empty', desc: 'Burnout doesn\'t happen overnight - it builds quietly through long weeks, thin margins, and the gradual erosion of energy.' },
  { icon: Users, title: 'A Team That Feels Disconnected', desc: 'When pressure mounts, people pull inward. Soma\'s workshops create the warmth that helps teams come back together - genuinely.' },
  { icon: Brain, title: 'Exhausted Decision-Making', desc: 'When every choice feels heavy, it\'s often the body asking for a different rhythm. Soma helps leaders find that rhythm again.' },
  { icon: HeartHandshake, title: 'A Culture That Forgets People', desc: 'The most resilient organisations are ones where people feel genuinely cared for. Soma plants the seeds of a culture of care.' },
];

const PHASES = [
  { week: 'Weeks 1–4', title: 'Opening the Conversation', desc: 'No questionnaires - just Soma spending time with your team. Through guided movement and honest conversation, she listens to what the team truly needs.' },
  { week: 'Weeks 5–8', title: 'Building a Shared Practice', desc: 'A simple, shared yoga and breathwork practice begins to take root within the team - something they can return to together whenever pressure rises.' },
  { week: 'Weeks 9–12', title: 'Sustaining the Change', desc: 'The final phase is about making the practice last - embedding new habits, rhythms, and care for one another that continue long after.' },
];

const FAQS = [
  { q: 'Is this a standard team-building workshop?', a: 'Not at all. Soma does not use slides, icebreakers, or generic group activities. This is a real wellness practice, guided by a deeply experienced practitioner.' },
  { q: 'What does a typical session look like?', a: 'Each session is gentle, accessible, and shaped around who is in the room. Expect a mix of guided movement, breathwork, and open conversation.' },
  { q: 'How do you measure whether it has worked?', a: 'Soma focuses on the human experience. The clearest measurement is how the team itself reports feeling - and the observable changes in their energy.' },
  { q: 'Can this be delivered to a global or hybrid team?', a: 'Yes, absolutely. Soma facilitates both in-person sessions in Pune and online workshops for distributed teams worldwide.' },
];

export default function StrategicWorkshops() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-soma-cream min-h-screen font-inter selection:bg-amber-100 selection:text-amber-950 overflow-x-hidden">
      <SEO 
        title="Strategic Workshops | SOMA" 
        description="Discover Strategic Workshops programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/corporate/workshops" 
      />
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pb-0 lg:pb-0">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/corporate" className="hover:text-stone-900 transition-colors">Corporate</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900 uppercase">Workshops</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="soma-section-tight soma-container pb-0 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedBadge className="mb-8 inline-flex items-center px-5 py-2.5 rounded-full border border-amber-200/50 bg-amber-50/50 shadow-sm backdrop-blur-md">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-[0.4em]">Institutional Presence</span>
            </AnimatedBadge>
            <h1 className="text-soma-forest mb-6 italic">
              A Team That <br />Breathes Together, <br /> <span className="text-amber-600">Stays Together.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl mb-10 italic">
              "A 12-week interactive wellbeing workshop series for teams who want to do more than survive the pressure - they want to genuinely thrive together."
            </p>
            <div className="flex items-center gap-8 mb-10">
              <AnimatedStat value="90 Min" label="Per Session" />
              <div className="w-px h-10 bg-amber-200/50" />
              <AnimatedStat value="12 Weeks" label="Sustained Journey" />
            </div>
            <Link to="/contact?purpose=Corporate Wellness Programme" className="soma-button-amber">
              Speak with Soma
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-5 relative w-full">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden group lg:w-3/4 lg:ml-auto">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Team Workshop" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </FadeIn>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[140px] -z-10" />
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 soma-container">
        <div className="bg-white rounded-[48px] p-8 lg:p-12 relative overflow-hidden">
          <div className="mb-12 lg:mb-16 text-left max-w-3xl">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] block mb-6">The Catalyst</span>
            <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl">When pressure <br /><span className="text-amber-600">takes its toll.</span></h2>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map((item, i) => (
              <StaggerItem key={i} className="soma-card group hover:bg-amber-950 border border-stone-100/80 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                  <item.icon size={24} strokeWidth={1.2} className="text-amber-600 group-hover:text-amber-100 transition-colors duration-500" />
                </div>
                <h4 className="text-soma-forest mb-4 group-hover:text-white transition-colors duration-500 not-italic font-headline text-2xl leading-tight">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed group-hover:text-amber-100/80 transition-colors duration-500 font-light italic">"{item.desc}"</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Institutional Credentials Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="bg-white border border-stone-100 rounded-[48px] p-8 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left title column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] block mb-6">Institutional Authority</span>
              <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl leading-tight">
                Grounded in <br />
                <span className="text-amber-600">organizational reality.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-6 italic">
                "Wellness initiatives fail when they ignore corporate pressure. Soma's background bridges clinical practice with two decades of high-stakes corporate execution."
              </p>
              <div className="w-16 h-1 bg-amber-500 rounded-full" />
            </div>

            {/* Right credentials grid */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-stone-50/50 border border-stone-100 rounded-[24px] hover:shadow-sm transition-all duration-300">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] block mb-2">Corporate Legacy</span>
                <h4 className="text-soma-forest text-xl font-headline not-italic mb-3">22 Years Embedded at TCS</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light italic">
                  "Supporting Pune’s IT boom from 2001 to 2023, facilitating stress resilience directly within Tata Consultancy Services' campus architecture."
                </p>
              </div>

              <div className="p-6 bg-stone-50/50 border border-stone-100 rounded-[24px] hover:shadow-sm transition-all duration-300">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] block mb-2">Scientific Training</span>
                <h4 className="text-soma-forest text-xl font-headline not-italic mb-3">Harvard Medical School</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light italic">
                  "Postgraduate stress-management training, incorporating evidence-based clinical protocols into daily organizational workflows."
                </p>
              </div>

              <div className="p-6 bg-stone-50/50 border border-stone-100 rounded-[24px] hover:shadow-sm transition-all duration-300">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] block mb-2">Organizational Strategy</span>
                <h4 className="text-soma-forest text-xl font-headline not-italic mb-3">Master's in Personnel Management</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light italic">
                  "Specialized education in industrial relations and organizational psychology, structuring wellness to align with HR objectives."
                </p>
              </div>

              <div className="p-6 bg-stone-50/50 border border-stone-100 rounded-[24px] hover:shadow-sm transition-all duration-300">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em] block mb-2">Therapeutic Rigour</span>
                <h4 className="text-soma-forest text-xl font-headline not-italic mb-3">Ayush Level 3 Certification</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light italic">
                  "India's highest national certification in yoga therapy and wellness instruction, ensuring clinical safety and professional execution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="mb-12 lg:mb-16">
          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] block mb-6 pl-4">The Methodology</span>
          <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl">How the <br /><span className="text-amber-600">workshops unfold.</span></h2>
        </div>
        
        <StaggerContainer className="space-y-6">
          {PHASES.map((p, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-stone-100 p-6 lg:p-8 rounded-[32px] transition-all group flex flex-col md:flex-row gap-8 items-center duration-500 hover:shadow-sm">
                <div className="w-16 h-16 rounded-[20px] bg-amber-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-2xl font-headline italic">{i + 1}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-1 block">{p.week}</span>
                  <h4 className="text-soma-forest mb-2 group-hover:text-amber-900 transition-colors duration-500 not-italic text-2xl font-headline">{p.title}</h4>
                  <p className="text-stone-500 font-light leading-relaxed max-w-2xl italic">"{p.desc}"</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Program Details */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-amber-950 text-white rounded-[32px] lg:rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
            <span className="text-amber-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block">Core Structure</span>
            <h4 className="text-white mb-8 not-italic text-3xl font-headline">For Your Entire Team.</h4>
            <p className="text-amber-100/70 mb-10 font-light leading-relaxed italic">"Soma tailors every element - from session pace to content - to fit the people in the room."</p>
            
            <ul className="space-y-4 mb-10">
              {[
                '12 × guided group sessions with Soma',
                'Online or in-person (Pune based)',
                'Shaped around specific team culture',
                'Suitable for all wellness levels',
                'Leadership alignment included'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-amber-100/80">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>
                  <span className="text-base font-light italic">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/contact?purpose=Corporate Wellness Programme" className="soma-button-outline w-full justify-center">
              Inquire for Your Team
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <div className="soma-card bg-stone-50/50 border border-stone-100 p-8 lg:p-10 flex flex-col justify-center flex-grow group hover:shadow-md transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <Sparkles size={20} strokeWidth={1.2} className="text-amber-500" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.4em]">Scalable Solutions</span>
              </div>
              <h4 className="text-soma-forest mb-4 not-italic text-3xl font-headline group-hover:text-amber-600 transition-colors duration-500">Any size. Any sector.</h4>
              <p className="text-stone-500 font-light leading-relaxed mb-8 italic">"Whether your team is 10 or 1,000, Soma's approach can be adapted through digital delivery and management training to reach everyone."</p>
              <div className="pt-6 flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-700/30 uppercase tracking-[0.4em]">Investment</span>
                <span className="text-xl font-headline italic text-amber-900">Custom Quoted</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[32px] flex items-center justify-between gap-6 group transition-all">
              <div>
                  <h4 className="text-soma-forest mb-1 italic !not-italic font-headline text-xl">Need a strategy?</h4>
                  <p className="text-xs text-stone-400 font-light italic">Use our Architect tool to build your session.</p>
              </div>
              <Link to="/corporate/architect" className="w-12 h-12 bg-amber-900 rounded-[16px] flex items-center justify-center text-white shadow-[0_4px_12px_-2px_rgba(120,53,15,0.4)] hover:shadow-[0_8px_20px_-4px_rgba(120,53,15,0.6)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-inner transition-all">
                <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] block mb-6">Clarifications</span>
            <h2 className="text-soma-forest mb-6 italic text-center text-4xl lg:text-5xl">Common Questions.</h2>
          </div>
          
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="soma-faq-item">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="soma-faq-trigger group"
                >
                  <span className="soma-faq-question text-soma-forest group-hover:text-amber-800">{faq.q}</span>
                  <ChevronDown size={18} className={`text-stone-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="soma-faq-content">
                        <p className="soma-faq-answer">"{faq.a}"</p>
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
        <div className="soma-cta-banner flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-14 h-14 bg-amber-900 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={24} strokeWidth={1} className="text-amber-100" />
            </div>
            <div>
              <h4 className="text-soma-forest mb-1 italic !not-italic text-2xl font-headline">Workshop places available</h4>
              <p className="text-stone-500 text-sm font-light italic">Soma is accepting new team engagements for the coming quarter.</p>
            </div>
          </div>
          <Link to="/contact?purpose=Corporate Wellness Programme" className="soma-button-amber relative z-10 whitespace-nowrap">
            Contact Soma
          </Link>
        </div>
      </section>
    </main>
  );
}
