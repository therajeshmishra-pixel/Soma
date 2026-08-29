import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedBadge, AnimatedStat } from '../../components/ui/motion-wrappers';
import { Accessibility, Scale, BatteryWarning, ArrowRight, ChevronRight, ChevronDown, ShieldCheck, Heart, Sparkles, Building2 } from 'lucide-react';

const CHALLENGES = [
  {
    icon: Accessibility,
    title: "Bodies That Ache by Day's End",
    desc: "Sitting for long hours is hard on the spine, the hips, and the neck. Soma's gentle movement practices help the body find ease again without disrupting the day.",
  },
  {
    icon: Scale,
    title: "Stress That Won't Switch Off",
    desc: "When work pressure follows people home, the body and mind are never truly at rest. Soma's breathwork helps people genuinely switch off and recover.",
  },
  {
    icon: BatteryWarning,
    title: "Fading Energy and Motivation",
    desc: "When the spark for work dims, it's often a sign that people need more compassionate care. Soma helps restore that internal vitality through sustainable practice.",
  },
];

const PILLARS = [
  { id: '01', title: 'Posture & Body Ease', subtitle: 'Movement & Care', desc: 'Gentle yoga practices to release the tension that accumulates through a seated working day - helping the spine and shoulders find comfort.' },
  { id: '02', title: 'Breathing Through Stress', subtitle: 'Breathwork & Calm', desc: 'Simple, powerful breathing practices that help people step back from the edge of overwhelm - returning to steadiness and clarity.' },
  { id: '03', title: 'Yoga at Your Desk', subtitle: 'Desk-Side Practices', desc: 'Short, practical yoga sequences that work seamlessly within the working day - requiring only a chair, a desk, and a few willing minutes.' },
  { id: '04', title: 'Preventing Burnout', subtitle: 'Sustainable Energy', desc: 'Restorative practices that help high-pressure teams maintain their energy and creativity without reaching breaking point.' },
  { id: '05', title: 'Sleep, Rest & Vitality', subtitle: 'Nourishment & Rhythm', desc: 'Guidance on sleep, nourishment, and daily rhythms that support genuine long-term vitality - not just the ability to keep going.' },
];

const FORMATS = [
  { icon: Building2, title: 'On-Site Sessions', desc: 'Soma and her team come to your office - leading warm, guided sessions in a space you create together.' },
  { icon: Sparkles, title: 'Online Sessions', desc: 'Live and recorded sessions for remote and hybrid teams worldwide - accessible from anywhere.' },
  { icon: Heart, title: 'Bespoke Journeys', desc: 'A single immersive day, or a sustained monthly programme - shaped entirely around what your organisation needs.' },
];

const FAQS = [
  { q: 'Is this just another wellness perk?', a: 'No. Soma\'s approach is deeply personal and sustained. Rather than a one-off activity, this is a genuine practice that grows with your team over time.' },
  { q: 'How do we know if it has made a difference?', a: 'Soma focuses on the human experience. She uses open team reflection and regular conversations with leadership to understand the shift in culture and energy.' },
  { q: 'How long has Soma been doing this work?', a: 'Soma has worked in corporate wellbeing for over 25 years, including a 22-year tenure with TCS (2001 - 2023) supporting thousands of professionals.' },
  { q: 'Can this reach our global offices?', a: 'Yes. Through online delivery, Soma\'s practices can reach your teams worldwide. The warmth and quality translate beautifully to a digital format.' },
];

export default function WorkplaceWellness() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Workplace Wellbeing Pune | Corporate Yoga & Wellness | Soma Mukherjee';
  }, []);

  return (
    <main className="bg-soma-cream min-h-screen font-inter selection:bg-emerald-100 selection:text-emerald-950 overflow-x-hidden">
      <SEO 
        title="WorkplaceWellness | SOMA" 
        description="Discover WorkplaceWellness programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/corporate/wellness" 
      />
      {/* Breadcrumb */}
      <section className="soma-section-tight soma-container pb-0 lg:pb-0">
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <Link to="/corporate" className="hover:text-stone-900 transition-colors">Corporate</Link>
          <ChevronRight size={10} className="text-stone-300" />
          <span className="text-stone-900 uppercase">Workplace Wellness</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="soma-section-tight soma-container pb-0 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedBadge className="mb-8 inline-flex items-center px-5 py-2.5 rounded-full border border-emerald-200/50 bg-emerald-50/50 shadow-sm backdrop-blur-md">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.4em]">Institutional Presence</span>
            </AnimatedBadge>
            <h1 className="text-soma-forest mb-6 italic">
              When People <br />Thrive, <br /> <span className="text-emerald-600">Everything Thrives.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl mb-10 italic">
              "A warm, people-first approach to wellbeing in the workplace - guided by Soma Mukherjee's 25 years of experience supporting global organisations."
            </p>
            <div className="flex items-center gap-8 mb-10">
              <AnimatedStat value="25 Years" label="Experience" />
              <div className="w-px h-10 bg-transparent" />
              <AnimatedStat value="TCS" label="Long-term Partner" />
            </div>
            <Link to="/contact?purpose=Corporate Wellness Programme" className="soma-button-emerald">
              Bring Soma to Your Team
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-5 relative w-full">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden group lg:w-3/4 lg:ml-auto">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Workplace Wellness" src="/Photos/WorkPlaceWell.png"/>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </FadeIn>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px] -z-10" />
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-16 pb-12 lg:pb-24 soma-container">
        <div className="bg-white rounded-[48px] p-8 lg:p-12 relative overflow-hidden">
          <div className="mb-12 lg:mb-16 text-left max-w-3xl">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] block mb-6">The Human Need</span>
            <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl">When the people <br /><span className="text-emerald-600">need more care.</span></h2>
            <p className="text-stone-500 font-light max-w-2xl leading-relaxed italic">"The most committed teams are ones that feel genuinely looked after. Soma's approach puts real people at the heart of the organisation."</p>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHALLENGES.map((item, i) => (
              <StaggerItem key={i} className="soma-card group hover:bg-emerald-900 border-none">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                  <item.icon size={24} strokeWidth={1.2} className="text-emerald-700 group-hover:text-emerald-100 transition-colors" />
                </div>
                <h4 className="text-soma-forest mb-4 group-hover:text-white transition-colors !not-italic font-headline text-2xl leading-tight">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed group-hover:text-emerald-100/80 transition-colors font-light italic">"{item.desc}"</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="mb-12 lg:mb-16">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.4em] block mb-6 pl-4">Five Areas of Practice</span>
          <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl">The pillars of <br /><span className="text-emerald-600">workplace wellbeing.</span></h2>
        </div>
        
        <StaggerContainer className="grid lg:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <StaggerItem key={i}>
              <div className="bg-white p-6 lg:p-10 rounded-[32px] transition-all group flex flex-col sm:flex-row items-start gap-8 duration-500">
                <div className="text-2xl font-headline font-bold text-emerald-900 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-[20px] flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 italic">
                  {p.id}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] mb-1 block">{p.subtitle}</span>
                  <h4 className="text-soma-forest mb-2 italic group-hover:text-emerald-900 transition-all !not-italic text-2xl font-headline">{p.title}</h4>
                  <p className="text-stone-500 font-light leading-relaxed italic">"{p.desc}"</p>
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
          className="mt-16 bg-emerald-950 rounded-[40px] p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <AnimatedBadge className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-emerald-100">
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] border-l border-emerald-400 pl-4">HR & Leadership Suite</span>
              </AnimatedBadge>
              <h4 className="text-white mb-6 italic !not-italic text-3xl font-headline">
                Architect Your <br /><span className="text-emerald-300">Wellness Strategy.</span>
              </h4>
              <p className="text-emerald-100/70 font-light leading-relaxed mb-8 italic">
                "Use our live system to build a session architecture that addresses your people's specific needs and operational constraints."
              </p>
              <div className="flex flex-wrap gap-4 text-[9px] font-bold text-emerald-400/80 uppercase tracking-[0.4em]">
                <span>Precision Rules</span>
                <span className="w-1 h-1 bg-emerald-700 rounded-full my-auto" />
                <span>Biological Sequencing</span>
                <span className="w-1 h-1 bg-emerald-700 rounded-full my-auto" />
                <span>Strategy Export</span>
              </div>
            </div>
            <Link to="/corporate/architect" className="bg-emerald-500 text-white px-10 py-5 rounded-[20px] font-bold text-[10px] uppercase tracking-[0.4em] shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_30px_-5px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:translate-y-0.5 transition-all whitespace-nowrap flex items-center gap-3">
              Launch Architect Tool
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* How Soma Works */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="mb-16">
          <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] mb-12 pl-6">Engagement Formats</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {FORMATS.map((f, i) => (
              <div key={i} className="p-8 rounded-[32px] group hover:bg-emerald-900 transition-colors bg-stone-50/30">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <f.icon size={22} strokeWidth={1.2} className="text-emerald-600 group-hover:text-emerald-100" />
                </div>
                <h4 className="text-soma-forest mb-4 italic !not-italic font-headline text-2xl group-hover:text-white transition-all">{f.title}</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed italic group-hover:text-emerald-100/70">"{f.desc}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-50/50 rounded-[48px] p-8 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.4em] block mb-8">Soma's Experience</span>
              <h2 className="text-soma-forest mb-6 italic text-4xl lg:text-5xl">25 Years of Caring <br /><span className="text-emerald-700">for People at Work.</span></h2>
              <p className="text-stone-600 font-light leading-relaxed mb-10 italic">"Soma's approach is not theoretical - it comes from a deep, genuine relationship with thousands of working professionals across two decades."</p>
              <div className="space-y-4">
                <div className="flex gap-6 bg-white p-6 rounded-[24px] group transition-all">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-900 font-bold text-[10px] tracking-widest italic group-hover:bg-emerald-900 group-hover:text-white transition-colors">TCS</div>
                  <div>
                    <h4 className="text-soma-forest mb-1 italic !not-italic font-headline text-lg">22 Years with TCS (2001 - 2023)</h4>
                    <p className="text-xs text-stone-500 font-light italic">Visiting multiple offices across Pune to lead dedicated sessions on desktop yoga and stress management for thousands of professionals.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white p-6 rounded-[24px] group transition-all">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                     <Heart size={20} className="text-emerald-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-soma-forest mb-1 italic !not-italic font-headline text-lg">Human-Centric Vision</h4>
                    <p className="text-xs text-stone-500 font-light italic">Combining Masters-level science with deep psychological understanding to reach the person behind the desk.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden relative aspect-square group">
                <img src="/Photos/SomaN4.png" alt="Soma Mukherjee" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-900 text-white p-6 rounded-[24px]">
                 <div className="text-3xl font-headline tracking-tighter mb-0.5 italic">1000+</div>
                 <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-emerald-200/80 whitespace-nowrap">Professionals Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.4em] block mb-6">Common Questions</span>
            <h2 className="text-soma-forest mb-6 italic text-center text-4xl lg:text-5xl">Organisational FAQ.</h2>
          </div>
          
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="soma-faq-item">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="soma-faq-trigger group"
                >
                  <span className="soma-faq-question text-soma-forest group-hover:text-emerald-800">{faq.q}</span>
                  <ChevronDown size={18} className={`text-stone-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-emerald-600' : ''}`} />
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

      {/* Footer CTA */}
      <section className="pt-0 pb-12 lg:pb-24 soma-container">
        <div className="soma-cta-banner flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-14 h-14 bg-emerald-900 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={24} strokeWidth={1} className="text-emerald-100" />
            </div>
            <div className="text-left">
              <h4 className="text-soma-forest mb-1 italic !not-italic text-2xl font-headline">"Care for people first. Everything follows."</h4>
              <p className="text-stone-500 text-sm font-light italic">Start with a conversation. Soma offers a genuine exploration call.</p>
            </div>
          </div>
          <Link to="/contact?purpose=Corporate Wellness Programme" className="soma-button-emerald whitespace-nowrap">
            Talk to Soma
          </Link>
        </div>
      </section>
    </main>
  );
}
