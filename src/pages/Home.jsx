import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem, AnimatedBadge } from '../components/ui/motion-wrappers';
import ShaderShowcase from '../components/ui/hero';
import { 
  Building2, User, Moon, Brain, Laptop, Activity, Leaf, Heart, 
  ArrowRight, PenTool, FileText, Calendar, Mail, Star, Building, Users, Lock, CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen font-inter overflow-x-hidden text-stone-900 relative selection:bg-emerald-200 selection:text-emerald-950">
      <SEO 
        title="SOMA | Soma Mukherjee Wellness & Therapy" 
        description="Soma Mukherjee brings Harvard Medical School stress-management training, a Master's in Personnel Management, Ayush Level 3 certification, and 22 years embedded at TCS to individual and corporate wellness work."
        canonical="https://www.somamukherjee.com/" 
        schema={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Soma Mukherjee Wellness & Therapy",
          "image": "https://www.somamukherjee.com/Photos/SomaLogo1.svg",
          "description": "Bespoke wellness programs and therapy rooted in 25 years of mastery and therapeutic insight.",
          "url": "https://www.somamukherjee.com/",
          "founder": {
            "@type": "Person",
            "name": "Soma Mukherjee",
            "jobTitle": "Yoga Therapist & Wellness Coach"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        }}
      />

      {/* Quiet editorial canvas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#faf9f6]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,1)_0%,rgba(247,242,232,0.82)_42%,rgba(246,249,244,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,transparent_0%,rgba(166,138,86,0.18)_32%,transparent_64%),linear-gradient(240deg,transparent_10%,rgba(26,51,41,0.12)_48%,transparent_80%)]" />
      </div>
      
      {/* 1. Hero Section */}
      <section className="w-full relative border-b border-stone-200/50">
        <ShaderShowcase />
      </section>

      {/* 2. Trust Strip */}
      <div className="flex flex-wrap md:flex-nowrap border-b border-white/50 bg-white/60 backdrop-blur-md">
        {[
          { val: "Harvard Medical School", label: "Training in stress and resilience" },
          { val: "Master’s (MPM)", label: "Personnel Management" },
          { val: "Ayush Level 3", label: "Yoga Certification Board" },
          { val: "22 Years", label: "Embedded as a wellness practitioner at TCS Pune" },
        ].map((t, i) => (
          <div key={i} className="flex-1 p-5 md:p-8 text-center border-r border-stone-200/30 last:border-r-0 min-w-[50%] md:min-w-0 border-b md:border-b-0 hover:bg-white/40 transition-colors">
            <div className="text-xl md:text-2xl font-headline text-stone-900 mb-1 leading-tight">{t.val}</div>
            <div className="text-xs md:text-sm text-stone-500 leading-tight font-medium">{t.label}</div>
          </div>
        ))}
      </div>



      {/* 4. The Problem (Resonance) */}
      <section id="audience-resonance" className="scroll-mt-[140px] py-12 md:scroll-mt-[130px] md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-rose-500">Who this is for</div>
              <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 leading-tight">
                Two ways people arrive here. One restorative way back.
              </h2>
            </div>
            <p className="max-w-2xl text-stone-600 text-lg leading-relaxed font-light lg:justify-self-end">
              Some come carrying an organisation. Some come carrying pain, fatigue, and sleep that will not return. Soma begins in the same place for both: with the body in front of her.
            </p>
          </div>

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FAFAF8] to-[#F4F6F2] shadow-[0_24px_80px_rgba(120,113,108,0.08)]">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="relative min-h-[340px] lg:min-h-[560px]">
                <img src="/Photos/Soma_Studio1.png" alt="Soma guiding a restorative therapy session" className="absolute inset-0 h-full w-full object-cover object-[center_28%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/78 via-stone-950/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">Somatic restoration</div>
                  <p className="max-w-md text-base leading-relaxed text-white/90 md:text-lg">
                    The work starts with what the body is already showing: fatigue, pain, pressure, broken sleep, stress — and the nervous system beneath it.
                  </p>
                </div>
              </div>

              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="grid gap-6">
                  <div className="group relative overflow-hidden rounded-[32px] border border-[#F4E3D0]/50 bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(120,113,108,0.04)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(120,113,108,0.08)]">
                    <div className="mb-6 flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FEF4E8] text-amber-700">
                        <Building2 size={20} />
                      </span>
                      <div>
                        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">HR & company leaders</div>
                        <h3 className="text-2xl md:text-3xl font-headline text-stone-900 leading-tight">
                          Your team is running on empty and you know it.
                        </h3>
                      </div>
                    </div>
                    <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                      Absenteeism is rising. Productivity is flat. The EAP no one uses is not enough. You need a wellness partner who has actually sat inside a tech company, not someone pitching from the outside. Soma spent 22 years embedded at TCS Pune. She understands what your teams face each day.
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-[32px] border border-[#D0F4F4]/50 bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(120,113,108,0.04)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(120,113,108,0.08)]">
                    <div className="mb-6 flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F8F8] text-teal-700">
                        <User size={20} />
                      </span>
                      <div>
                        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-teal-700">Individuals</div>
                        <h3 className="text-2xl md:text-3xl font-headline text-stone-900 leading-tight">
                          You have tried many things and your body is still not okay.
                        </h3>
                      </div>
                    </div>
                    <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                      The physio helped for a week. The app did not stick. The gym made it worse. Chronic pain, broken sleep, and a nervous system that feels permanently switched on are not willpower problems. They are physiological ones. Soma treats them that way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Audience Split */}
      <section className="grid md:grid-cols-2 relative z-20 border-b border-white/50">
        
        {/* Corporate Split */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-white/38 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/50 hover:bg-white/56 transition-colors duration-500 group relative overflow-hidden flex flex-col justify-center">
          {/* Subtle elegant hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-stone-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
              <Building2 size={28} strokeWidth={1.5} className="text-amber-600" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-5 max-w-xl">For companies & HR teams</h3>
            <p className="text-stone-600 leading-relaxed mb-10 max-w-md text-base md:text-lg font-light">
              Corporate wellness programmes for desk-bound employees: back pain, RSI, burnout, digital fatigue, cognitive exhaustion. On-site or virtual. Designed to fit your team size, budget, and goals.
            </p>
            <button onClick={() => { document.getElementById('corporate-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex w-fit items-center gap-3 bg-stone-900 text-white px-6 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-amber-600 transition-colors shadow-md group/btn">
              See corporate programmes <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Individual Split */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-white/38 backdrop-blur-xl hover:bg-white/56 transition-colors duration-500 group relative overflow-hidden flex flex-col justify-center">
          {/* Subtle elegant hover glow */}
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-stone-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <User size={28} strokeWidth={1.5} className="text-rose-500" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-5 max-w-xl">For individuals</h3>
            <p className="text-stone-600 leading-relaxed mb-10 max-w-md text-base md:text-lg font-light">
              One-on-one restorative yoga therapy for sleep disorders, chronic pain, metabolic conditions, cognitive fatigue, and emotional burnout. Most people begin with a free 15-minute discovery call.
            </p>
            <button onClick={() => { document.getElementById('individual-programs')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex w-fit items-center gap-3 bg-stone-900 text-white px-6 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-rose-500 transition-colors shadow-md group/btn">
              Explore individual therapy <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
      </section>

      {/* 6. Individual Programs */}
      <section id="individual-programs" className="scroll-mt-[140px] py-12 md:scroll-mt-[130px] md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 grid gap-8 md:mb-14 lg:grid-cols-[0.74fr_1fr] lg:items-end">
            <div>
              <AnimatedBadge className="mb-4 inline-flex px-4 py-1.5 rounded-full border border-rose-200 bg-white/50 backdrop-blur-md shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-rose-500">Individual therapy programmes</span>
              </AnimatedBadge>
              <h2 className="text-3xl md:text-5xl font-headline text-stone-900 mb-0 leading-tight">
                Six focused programmes.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic">Each built around one primary condition.</span>
              </h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed font-light lg:max-w-xl lg:justify-self-end">
              Each programme is a structured, restorative protocol — not a series of generic classes. Soma assesses your condition, designs your protocol, and tracks your progress across every session.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Moon, tag: "Specialist · Signature", name: "Sleep Architecture", 
                desc: "Restore deeper, more reliable sleep in 6 weeks — without medication. Targets nervous system patterns, not just the symptom.", 
                link: "/programs/sleep", 
                btnText: "Explore programme",
                colorText: "text-indigo-700", colorBg: "bg-indigo-600",
                cardBg: "bg-[#FDFBF7]",
                cardRadius: "rounded-[40px] rounded-tl-[120px]",
                imgRadius: "rounded-t-[40px] rounded-tl-[120px] rounded-br-[100px]",
                image: "/Photos/Sleepimage.png" 
              },
              { 
                icon: Brain, tag: "Individual · Corporate", name: "Cognitive wellness", 
                desc: "Sharper focus, reduced mental fatigue, and steadier clarity for people whose thinking has been dulled by overload and stress.", 
                link: "/programs/cognitive", 
                btnText: "Explore programme",
                colorText: "text-fuchsia-800", colorBg: "bg-[#8E61A1]",
                cardBg: "bg-[#F7EFE5]",
                cardRadius: "rounded-[40px] rounded-t-[140px]",
                imgRadius: "rounded-t-[140px] rounded-b-[60px]",
                image: "/Photos/CognitiveCalm.png" 
              },
              { 
                icon: Laptop, tag: "Individual · Corporate", name: "Digital wellness", 
                desc: "RSI, carpal tunnel, screen fatigue, desk posture — built specifically for IT professionals and knowledge workers who live at a screen.", 
                link: "/programs/digital", 
                btnText: "Explore programme",
                colorText: "text-amber-700", colorBg: "bg-[#D98E36]",
                cardBg: "bg-[#EAECE6]",
                cardRadius: "rounded-[40px] rounded-tr-[120px] rounded-bl-[80px]",
                imgRadius: "rounded-t-[40px] rounded-tr-[120px] rounded-b-[100px]",
                image: "/Photos/DigitalErgonomics.png" 
              },
              { 
                icon: Activity, tag: "Individual", name: "Metabolic health", 
                desc: "Therapeutic yoga for diabetes, thyroid conditions, and weight management — a 12-week protocol that works with the whole body, not just numbers on a report.", 
                link: "/programs/metabolic", 
                btnText: "Explore programme",
                colorText: "text-rose-700", colorBg: "bg-[#C25953]",
                cardBg: "bg-[#FDF5F5]",
                cardRadius: "rounded-[40px] rounded-br-[120px]",
                imgRadius: "rounded-t-[40px] rounded-bl-[100px]",
                image: "/Photos/MetabolicResilience.png" 
              },
              { 
                icon: Leaf, tag: "Individual · Retreat", name: "Sanctuary", 
                desc: "An immersive 1-day, weekend, or 3-day reset — physically, mentally, and neurologically. For times when small weekly changes do not feel like enough.", 
                link: "/programs/sanctuary", 
                btnText: "View retreat",
                colorText: "text-[#4A7C59]", colorBg: "bg-[#4A7C59]",
                cardBg: "bg-[#F0FDF4]",
                cardRadius: "rounded-[40px] rounded-tl-[80px] rounded-br-[80px]",
                imgRadius: "rounded-t-[40px] rounded-tl-[80px] rounded-b-[60px]",
                image: "/Photos/Executive_Sanctury.png" 
              },
              { 
                icon: Heart, tag: "Individual · Confidential", name: "Wellness counselling", 
                desc: "A safe, structured space for stress, anxiety, and emotional fatigue — through yoga-based wellness counselling. Private, steady, and yours.", 
                link: "/programs/counselling", 
                btnText: "Confidential enquiry",
                colorText: "text-sky-700", colorBg: "bg-[#4082A8]",
                cardBg: "bg-[#F0F8FF]",
                cardRadius: "rounded-[40px] rounded-tr-[100px] rounded-bl-[100px]",
                imgRadius: "rounded-t-[40px] rounded-tr-[100px] rounded-b-[80px]",
                image: "/Photos/SomaCoun.png" 
              },
            ].map((prog, i) => (
              <StaggerItem key={i} className="h-full">
                <Link to={prog.link} className={`group flex h-full flex-col overflow-hidden ${prog.cardBg} ${prog.cardRadius} transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(120,113,108,0.12)] shadow-md relative`}>
                  
                  {/* Organic Image Header */}
                  <div className={`relative h-64 w-full overflow-hidden ${prog.imgRadius} mb-6 transition-all duration-500`}>
                    <img src={prog.image} alt={`${prog.name} programme`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col px-8 pb-10">
                    <div className="mb-4">
                      <prog.icon size={26} strokeWidth={1.5} className={prog.colorText} />
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.15em] ${prog.colorText} mb-3`}>{prog.tag}</div>
                    <h3 className="text-3xl font-headline text-stone-900 mb-4">{prog.name}</h3>
                    <p className="text-stone-600 text-[15px] leading-relaxed mb-8 flex-grow font-light">{prog.desc}</p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${prog.colorBg} text-white transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                        <ArrowRight size={18} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-stone-800 transition-colors group-hover:text-stone-500">
                        {prog.btnText}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. TCS Proof */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white/84 backdrop-blur-xl border border-white rounded-[28px] p-6 md:p-8 shadow-xl shadow-amber-100/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-300/20 to-orange-300/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-300/20 to-pink-300/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-amber-600 mb-6">The proof that matters most</div>
              <h2 className="text-3xl md:text-5xl font-headline text-stone-900 leading-[1.1] mb-8 max-w-4xl">
                Soma was not hired to run a workshop at TCS.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 italic">She was embedded there for 22 years.</span>
              </h2>
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-16 max-w-4xl font-light">
                From 2001 to 2023, Soma worked inside TCS Pune as a full‑time wellness practitioner — five days a week, across every delivery centre. Not as an external vendor. Not as a quarterly speaker. As someone who understood the pressures, the deadlines, the RSI, the burnout, and the specific toll that enterprise technology work takes on the human body. This is not a claim. It is documented, lived, and verifiable.
              </p>
              <div className="mb-10 rounded-[24px] bg-stone-900 p-6 md:p-8 text-white shadow-xl">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">The six‑month TCS story</div>
                <p className="text-lg md:text-2xl font-headline leading-relaxed italic">
                  "What started as a brief six‑month wellness intervention at Tata Consultancy Services (TCS) in 2001 evolved into a 22‑year tenure. She helped weave stillness into the architecture of Pune’s IT boom, supporting the workforce through an era of constant acceleration."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                {[
                  { val: "22", label: "Years embedded at TCS Pune" },
                  { val: "5×", label: "Sessions per week across all centres" },
                  { val: "1,000+", label: "TCS professionals mentored" },
                ].map((stat, i) => (
                  <div key={i} className="border border-white/80 rounded-[22px] p-7 text-center bg-white/70 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-headline text-transparent bg-clip-text bg-gradient-to-br from-stone-900 to-stone-600 mb-3">{stat.val}</div>
                    <div className="text-sm font-bold text-stone-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 9. Corporate Suite */}
      <section id="corporate-section" className="scroll-mt-[140px] py-12 md:scroll-mt-[130px] md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 max-w-3xl md:mb-14">
            <AnimatedBadge className="mb-4 inline-flex px-4 py-1.5 rounded-full border border-violet-200 bg-white/50 backdrop-blur-md shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-violet-600">Corporate programmes</span>
            </AnimatedBadge>
            <h2 className="text-3xl md:text-5xl font-headline text-stone-900 mb-6 leading-tight">
              Five ways to bring Soma 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-rose-500 italic">inside your organisation</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              From a single wellness day to a quarterly retainer to private support for your senior leaders — each offering is designed for a different scale, budget, and business need.
            </p>
          </div>

          <div className="grid gap-8 mb-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="relative min-h-[340px] overflow-hidden rounded-[24px] border border-white/80 shadow-2xl shadow-violet-100/50 md:min-h-[360px] md:rounded-[28px]">
              <img src="/Photos/WorkPlaceWell.png" alt="Workplace wellness session" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/78 via-violet-950/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                <div className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100">
                  <Building2 size={16} />
                  Embedded wellness
                </div>
                <h3 className="mb-4 max-w-md text-3xl font-headline leading-tight text-white md:text-4xl">
                  Practical support for teams who spend their lives at a desk.
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/86 md:text-base">
                  Corporate work needs more than an annual wellness talk. It needs repeatable practices that fit the day people actually have.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { tag: "Workshop · One-time", name: "Strategic workshops", desc: "A 12-week structured wellbeing series — 90 min per session — covering breathwork, movement, and stress resilience. For teams of 20 to 200.", meta: "20-200 employees · On-site & virtual", icon: Users, accent: "border-amber-400", link: "/corporate/workshops", btnText: "Explore workshops", colorBg: "bg-amber-500" },
                { tag: "Programme · Ongoing", name: "Workplace wellness", desc: "The flagship offering — the same embedded model Soma ran at TCS for 22 years. Regular, recurring sessions woven into the working week.", meta: "All team sizes · Customised", icon: Building, accent: "border-teal-400", link: "/corporate/wellness", btnText: "View programme", colorBg: "bg-teal-500" },
                { tag: "Micro-practice · Daily", name: "Desktop interventions", desc: "90-second practices at the desk — morning, midday, and evening — designed for IT professionals who cannot leave their workstation. 15 minutes a day. Measurable in 4 weeks.", meta: "Per person pricing · Pune & remote", icon: Laptop, accent: "border-rose-400", link: "/corporate/desktop", btnText: "View interventions", colorBg: "bg-rose-500" },
                { tag: "Private · Leadership", name: "The Connection", desc: "Confidential, one-on-one wellness for senior leaders and executives. No HR reporting. No forms. No data shared. Just Soma and the person who carries the most.", meta: "For CHROs, VPs & senior leaders", icon: Lock, accent: "border-indigo-400", link: "/corporate/connection", btnText: "Explore The Connection", colorBg: "bg-indigo-500" },
              ].map((corp, i) => (
                <Link to={corp.link} key={i} className={`group flex flex-col rounded-[22px] border border-white/80 border-l-[5px] ${corp.accent} bg-white/78 py-6 pl-6 pr-5 shadow-[0_16px_50px_rgba(120,113,108,0.07)] backdrop-blur-xl transition-all duration-500 hover:bg-white hover:shadow-[0_22px_70px_rgba(120,113,108,0.12)] hover:-translate-y-1 md:py-7 md:pl-8 md:pr-7 cursor-pointer`}>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.05em] text-violet-500">{corp.tag}</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition-transform duration-500 group-hover:scale-110 shadow-sm border border-violet-100/50">
                      <corp.icon size={16} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-headline text-stone-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {corp.name}
                  </h3>
                  <p className="text-stone-600 text-[15px] leading-relaxed mb-6 font-light flex-grow">{corp.desc}</p>
                  
                  <div className="mt-auto">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-4">{corp.meta}</div>
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${corp.colorBg} text-white transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                        <ArrowRight size={18} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-stone-800 transition-colors group-hover:text-stone-500">
                        {corp.btnText}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Architect Tool Highlight - Vibrant */}
          <div
            className="bg-gradient-to-br from-rose-500 via-pink-500 to-violet-600 rounded-[40px] lg:rounded-[64px] p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-rose-500/30"
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-rose-100 mb-8 bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                <PenTool size={18} /> Unique to Soma
              </div>
              <h3 className="text-3xl md:text-5xl font-headline text-white mb-8 max-w-3xl leading-tight">
                The Session Architect — build your team’s blueprint in minutes
              </h3>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl font-light">
                Select your team’s pain points, choose the interventions that fit, set the duration — and Soma’s Architect generates a custom Neuro‑Somatic Reset Blueprint with a simple session sequence and a clear narrative you can share with your CHRO.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                {[
                  { num: "Step 1", label: "Select team challenges" },
                  { num: "Step 2", label: "Choose interventions" },
                  { num: "Step 3", label: "Set duration & format" },
                  { num: "Output", label: "Download blueprint" },
                ].map((step, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex-1 min-w-[160px] hover:bg-white/20 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-rose-200 mb-2">{step.num}</div>
                    <div className="text-sm md:text-base font-medium text-white">{step.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-rose-100 text-sm mb-10 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-white" />
                Institutional blueprint: <strong className="text-white font-medium ml-1">Included with consultation</strong> · Session sequence, clear narrative, and PDF
              </p>

              <div className="flex flex-wrap gap-5">
                <Link to="/corporate/architect" className="inline-flex items-center justify-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:scale-105 transition-transform shadow-xl">
                  <PenTool size={18} /> Launch the Architect
                </Link>
                <button className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-white/20 transition-colors backdrop-blur-md">
                  See an example
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-cyan-600 mb-6">What clients say</div>
          <h2 className="text-3xl md:text-4xl font-headline text-stone-900 mb-16 max-w-2xl leading-tight">
            Not what they thought of the sessions. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 italic">What changed after.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1 transition-all">
              <p className="text-stone-800 text-lg md:text-xl leading-relaxed italic mb-10 font-light">
                "I ran a half marathon at 58. I had never run a day in my life before working with Soma. I didn't think this body was capable of it. I was wrong."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 font-bold tracking-wider border border-cyan-100">RK</div>
                <div>
                  <div className="text-base font-bold text-stone-900 mb-1">Senior engineer, Pune</div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wide">Individual client · Metabolic programme</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all">
              <p className="text-stone-800 text-lg md:text-xl leading-relaxed italic mb-10 font-light">
                "I had not slept more than 4 hours at a stretch in two years. Within three weeks of working with Soma, I slept through the night. By week six, it was my new normal."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold tracking-wider border border-blue-100">SP</div>
                <div>
                  <div className="text-base font-bold text-stone-900 mb-1">Software architect, Pune</div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wide">Individual client · Sleep Architecture</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-rose-500 rounded-[32px] p-6 md:p-8 shadow-xl shadow-amber-500/20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-900/20 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />
            <p className="text-white text-xl md:text-3xl leading-relaxed italic mb-12 max-w-4xl relative z-10 font-light">
              "It has been a privilege to be Soma's student for more than a decade. She doesn't meet you where you are and leave you there. She takes you somewhere you didn't know you could reach — then makes it feel inevitable."
            </p>
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold tracking-wider border border-white/30 backdrop-blur-md shadow-inner">AM</div>
              <div>
                <div className="text-base font-bold text-white mb-1">Senior leader, TCS</div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-wide">Corporate & individual client · 10+ years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. About Soma */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-white/50 relative z-10 overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-emerald-100/60 to-teal-50/40 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-amber-100/50 to-rose-50/30 blur-[80px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800 mb-10">About Soma</div>

          {/* Main card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-[48px] shadow-2xl shadow-stone-200/60 overflow-hidden">
            {/* Inner gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-emerald-50/30 to-amber-50/40 pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-0">
              {/* Portrait column */}
              <div className="relative flex-shrink-0 p-6 md:p-8 flex flex-col items-center gap-6">
                {/* Decorative ring */}
                <div className="absolute inset-0 md:inset-auto md:top-8 md:left-8 md:right-8 rounded-[36px] bg-gradient-to-br from-emerald-100/60 to-teal-100/40 blur-xl pointer-events-none" />
                <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-[36px] overflow-hidden border-4 border-white shadow-2xl shadow-emerald-200/60 group">
                  <img
                    src="/Photos/Soma_PortraitB.jpeg"
                    alt="Soma Mukherjee"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
                </div>
                {/* Floating stat chips */}
                <div className="flex gap-3 flex-wrap justify-center">
                  <div className="bg-white border border-emerald-100 shadow-md shadow-emerald-100/50 rounded-2xl px-5 py-3 text-center">
                    <div className="text-xl font-headline font-bold text-stone-900">25+</div>
                    <div className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold mt-0.5">Years</div>
                  </div>
                  <div className="bg-white border border-rose-100 shadow-md shadow-rose-100/50 rounded-2xl px-5 py-3 text-center">
                    <div className="text-xl font-headline font-bold text-stone-900">22</div>
                    <div className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold mt-0.5">Yrs at TCS</div>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/60">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline text-stone-900 mb-4 leading-tight">Soma Mukherjee</h3>

                {/* Credential line */}
                <div className="text-[13px] font-medium text-stone-500 tracking-wide mb-8">
                  Harvard Medical School &middot; Master’s in Personnel Management &middot; Ayush Level 3 &middot; 22 years at TCS
                </div>

                <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 font-light max-w-xl">
                  Soma does not describe what she does as teaching yoga. She calls it <span className="font-semibold text-stone-800 italic">somatic restoration</span> — using the body's own systems to undo what overwork, stress, and modern life have done to it.
                </p>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-10 font-light max-w-xl">
                  She has spent 25 years refining this approach within one of India's most demanding enterprise environments. She is based in Pune. She works on-site and online. She responds to every enquiry personally.
                </p>

                {/* Divider + CTA */}
                <div className="flex items-center gap-6 flex-wrap">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 bg-stone-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-emerald-700 transition-colors shadow-md group/btn"
                  >
                    Read her full story
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-stone-400 text-xs">Based in Pune · Available online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Bottom CTA */}
      <section className="py-12 md:py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/50 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white rounded-[40px] lg:rounded-[64px] p-8 md:p-10 lg:p-12 shadow-2xl shadow-rose-100/50 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-amber-300/20 to-rose-300/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <AnimatedBadge className="mb-6 bg-white border border-rose-100 text-rose-500 shadow-sm inline-flex px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em]">
              Start here
            </AnimatedBadge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline text-stone-900 mb-8 leading-[1.1]">
              The first conversation is free.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic">What you learn from it might change how you think about your body and your work.</span>
            </h2>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl font-light">
              Book a free 15-minute call. No obligation, no sales pitch — just an honest conversation about what you or your team need, and whether Soma is the right person to help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="border border-white/80 rounded-[32px] p-8 md:p-10 bg-white shadow-sm hover:shadow-xl hover:shadow-rose-100/50 hover:-translate-y-1 transition-all">
                <div className="text-[11px] font-bold uppercase tracking-[0.05em] text-rose-500 mb-6 flex items-center gap-2">
                  <User size={16} /> For individuals
                </div>
                <h3 className="text-2xl font-headline text-stone-900 mb-4">Book a free discovery call</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed mb-10 font-light">
                  15 minutes. Soma listens to what is happening in your body and tells you honestly whether a programme will help — and which one.
                </p>
                <div className="space-y-4">
                  <Link to="/contact" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-6 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-md shadow-rose-200 hover:-translate-y-0.5">
                    <Calendar size={18} /> Book a free call
                  </Link>
                  <a href="mailto:contact@somamukherjee.com" className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-900 px-6 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-stone-50 transition-colors">
                    <Mail size={18} /> Send a message
                  </a>
                </div>
              </div>

              <div className="border border-white/80 rounded-[32px] p-8 md:p-10 bg-white shadow-sm hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1 transition-all">
                <div className="text-[11px] font-bold uppercase tracking-[0.05em] text-violet-500 mb-6 flex items-center gap-2">
                  <Building2 size={16} /> For HR & companies
                </div>
                <h3 className="text-2xl font-headline text-stone-900 mb-4">Request a corporate proposal</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed mb-10 font-light">
                  Share your team size, location, and what you are dealing with. Soma responds within one business day with a detailed, tailored proposal.
                </p>
                <div className="space-y-4">
                  <a href="mailto:contact@somamukherjee.com" className="w-full flex items-center justify-center gap-3 bg-stone-900 hover:bg-stone-800 text-white px-6 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-md shadow-stone-200 hover:-translate-y-0.5">
                    <FileText size={18} /> Request a proposal
                  </a>
                  <Link to="/corporate/architect" className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-900 px-6 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-stone-50 transition-colors">
                    <PenTool size={18} /> Build a blueprint
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12 md:h-16 bg-transparent" />
    </main>
  );
}
