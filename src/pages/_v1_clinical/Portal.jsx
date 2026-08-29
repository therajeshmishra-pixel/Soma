import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '../components/ui/motion-wrappers';

export default function Portal() {
  return (
    <main className="pt-12 overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section className="relative px-8 lg:px-24 pt-4 pb-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        <FadeIn className="lg:w-1/2 z-10" delay={0.2}>
          <span className="inline-block text-soma-gold uppercase tracking-widest text-[10px] font-bold mb-6 bg-soma-gold/5 px-3 py-1 rounded-full font-inter">Clinical Precision</span>
          <h1 className="font-headline text-5xl lg:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            Precision Recovery for the <span className="italic font-normal text-soma-gold">Modern Body.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed max-w-xl mb-10 font-inter">
            A sophisticated diagnostic portal designed for elite physiological restoration. Quantify your nervous system load through clinical-grade assessment protocols.
          </p>
          <div className="flex items-center gap-6">
            <button className="signature-gradient text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 group font-inter">
              Launch Assessment Portal
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </FadeIn>
        {/* UI Mockup Area */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-container/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-container/30 blur-[100px] rounded-full"></div>
          <div className="relative bg-surface-container-lowest border border-outline-variant/20 rounded-[2.5rem] shadow-2xl p-6 w-[320px] h-[640px] transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden font-inter">
            <div className="flex justify-between items-center mb-8 px-2">
              <span className="material-symbols-outlined text-soma-gold">clinical_notes</span>
              <div className="w-8 h-8 rounded-full bg-surface-container-high"></div>
            </div>
            <div className="space-y-6">
              <div className="px-2">
                <h4 className="font-headline font-bold text-xl text-soma-gold">System Load</h4>
                <p className="text-xs text-slate-500 font-inter">Real-time physiological feedback</p>
              </div>
              <div className="h-48 w-full bg-surface-container-low rounded-xl relative overflow-hidden flex flex-col justify-end p-4">
                {/* SVG Graph Mockup */}
                <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 Q25,20 50,70 T100,30" fill="none" stroke="#c5a059" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  <path d="M0,100 L0,80 Q25,20 50,70 T100,30 L100,100 Z" fill="url(#grad)" opacity="0.1"></path>
                  <defs>
                    <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#c5a059" stopOpacity="1"></stop>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between items-end relative z-10">
                  <span className="text-2xl font-bold text-soma-gold">72%</span>
                  <div className="bg-soma-gold text-white text-[10px] px-2 py-0.5 rounded-full font-bold">OPTIMAL</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-surface-container-high rounded-lg font-inter">
                  <span className="text-[10px] text-slate-500 block">HRV Score</span>
                  <span className="text-sm font-bold">84 ms</span>
                </div>
                <div className="p-3 bg-surface-container-high rounded-lg font-inter">
                  <span className="text-[10px] text-slate-500 block">Cortisol</span>
                  <span className="text-sm font-bold">Regulated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="bg-surface-container-low py-24 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <img alt="scientific medical data visualization" className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfEjwnzbrs8E0d1Tks1L-gY6VeMIqcz2mIlz2Ka-0rPqEi7j_sY1UibfTu6HjIsw_csXh4MoLuDEFPp7VtxTwzNZIoUCX9jE4c4psI7HPyG6MkHi_F9mhBLz1vpZlRDZtdcDI7QdBPMXs06X2iXOL0qsN96yXPMga_Kf_CEifk6Fmk5DD57KoUxYKsZZ10vivVhscRLPC8xeNLdW-nSQ6fUvaI6U__TqSoZmqH79EmtMAcwDAKkVkW8JEK0HWsKlT8SJdOsoApsgxI"/>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl lg:text-5xl text-on-surface mb-8 leading-tight font-bold">
              A Holistic Approach to <br/><span className="text-soma-gold italic font-normal">Clinical Wellness.</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-12 font-inter">
              We move beyond symptomatic treatment. The SOMA Assessment integrates multi-dimensional data points-from neuromuscular response to metabolic rhythm-to create a unified map of your physical existence.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-soma-gold shadow-sm">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <div className="font-inter">
                  <h4 className="font-headline font-bold text-lg mb-2">Deep-Dive Diagnostic</h4>
                  <p className="text-slate-600 text-sm">Advanced proprietary algorithms analyze 50+ biomarkers to uncover underlying fatigue patterns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-soma-gold shadow-sm">
                  <span className="material-symbols-outlined">integration_instructions</span>
                </div>
                <div className="font-inter">
                  <h4 className="font-headline font-bold text-lg mb-2">Systemic Integration</h4>
                  <p className="text-slate-600 text-sm">Your data flows seamlessly into a customized recovery protocol tailored to your specific biomechanics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-8 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl text-on-surface mb-4 font-bold">Integrated Recovery Ecosystem</h2>
          <p className="text-secondary max-w-2xl mx-auto font-inter">Seamless tools designed to support the journey from high-performance stress to deep systemic rest.</p>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Card 1: Personalized Insights */}
          <StaggerItem className="md:col-span-8 group overflow-hidden h-full">
            <HoverCard className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-between relative border border-transparent hover:border-soma-gold/50 transition-all h-full">
              <div className="z-10 font-inter">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-soma-gold">psychology</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3">Personalized Insights (AI-assisted)</h3>
                <p className="text-secondary max-w-md">Our neural network correlates daily exertion with recovery quality to predict peak performance windows.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity">
                <img alt="minimalist neural network graph visualization" className="object-contain w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaVlnKW8_uAV__BGEGcQLaF5gK04Oj_13ZwHmbJsYVFbTaEuQRmcGfuEPe_AvWVXcS50GIbHZkOepDD6OhbP4jteFFh-DE9rne8YOl98r4EfqaoO020d0mAbL1sjDpfVrmjQp2gOt12Zh04h3gG_P5-SoGiKyQvsQSZDaEojGnEPkiNC9EiVJcrsd-Ixbt6OWOXWLkzsxM-9pjl-ein32BzGomWCFP1GwCnFEk7tT_n1A2ahuwe5YD7dcAoa9Qt7fk9rgFSeFbw2tr"/>
              </div>
            </HoverCard>
          </StaggerItem>
          {/* Card 2: Guided Practice */}
          <StaggerItem className="md:col-span-4 h-full">
            <HoverCard className="bg-soma-gold/5 rounded-2xl p-8 flex flex-col justify-between border border-soma-gold/20 h-full">
              <div className="font-inter">
                <div className="w-10 h-10 bg-soma-gold rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-white">self_improvement</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3 text-soma-gold">Guided Practice</h3>
                <p className="text-slate-600 text-sm">Curated somatic sequences tailored to your current load state.</p>
              </div>
              <button className="text-soma-gold font-bold flex items-center gap-2 group mt-8 font-inter">
                View Library <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
              </button>
            </HoverCard>
          </StaggerItem>
          {/* Card 3: Holistic Tracking */}
          <StaggerItem className="md:col-span-4 h-full">
            <HoverCard className="bg-surface-container-high rounded-2xl p-8 border border-transparent hover:border-soma-gold/20 transition-all h-full">
              <div className="font-inter">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-soma-gold">analytics</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3">Holistic Tracking</h3>
                <p className="text-secondary text-sm">Consolidate sleep, strain, and nutrition into a single clinical-grade dashboard.</p>
              </div>
            </HoverCard>
          </StaggerItem>
          {/* Card 4: Professional Integration */}
          <StaggerItem className="md:col-span-8 h-full">
            <HoverCard className="bg-surface text-on-surface rounded-2xl p-8 border-2 border-soma-gold/10 flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="md:w-3/5 font-inter">
                <div className="w-10 h-10 bg-soma-gold/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-soma-gold">groups</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3">Professional Integration (1-on-1)</h3>
                <p className="text-secondary text-sm">Directly connect your diagnostic data with world-class somatic practitioners for personalized oversight.</p>
              </div>
              <div className="md:w-2/5 flex -space-x-4">
                <img alt="professional therapist portrait" className="w-16 h-16 rounded-full border-4 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKMCAdWQUFKgla7Dj5HVqwfGVPOMGelNu6xCw1DtCYqkPJR-U2U4b90UYu-FaiCAJUvO5LiBCIldPz1zqMdnKvgv93f97ZW-OMOSl-fEDO-BwQwoaybDqp-5A0UybkogoMRyBQGfH894KhuqEFjPtYQti2gHzpCsqqeAqpDA-JkniSTnVl_ejauxOENEzeksWQ_yvtQCQIQo_zpzEFnWhiy2gq7MzQ5R8WYB6R6hTytmVZG8BDdMQyj0tDkjQcHMTFKooZXHWyCH7"/>
                <img alt="professional therapist portrait 2" className="w-16 h-16 rounded-full border-4 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9KoW5PKI6MbrzCoaKwmVEcqsdjCD5uygvEV6QRN3GBzcJ7pFrlsLY9Mwn7GrzdMLxFmnTI27JNILaLf6hKHI-9i3d67RDouaR30aD0s_OU0TIjtDomeAtIPJCj9-twB2xv6Re5yCiJDog2hE8JsfQD5r0n77ICaF0vDm9DCgkmpznbQI_l7wbdwjfahmc6bso3vBRbIvdB7hIqXs509he_qxCdLjfp_eDTrt2-91MOmRa2IJ2TuvsEpAJsoer3PV6-EupgIdHpOAI"/>
                <div className="w-16 h-16 rounded-full border-4 border-background bg-surface-container-highest flex items-center justify-center text-xs font-bold font-inter">+12</div>
              </div>
            </HoverCard>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div className="font-inter">
              <h2 className="font-headline text-4xl mb-8 leading-tight font-bold">From 25 Years of Practice to a <span className="italic">Single Interface.</span></h2>
              <div className="space-y-6">
                <p className="text-secondary leading-relaxed">
                  SOMA was birthed from decades of clinical fieldwork in musculoskeletal rehabilitation and nervous system regulation. We've distilled years of physical therapy, biofeedback training, and performance coaching into an elegant SaaS architecture.
                </p>
                <div className="flex items-center gap-4 text-soma-gold font-bold italic text-lg font-headline">
                  "The complexity of the human body, simplified for recovery."
                </div>
                <div className="pt-4">
                  <p className="font-bold text-sm uppercase tracking-widest text-slate-400 font-inter">Trusted By</p>
                  <div className="flex flex-wrap gap-8 mt-4 grayscale opacity-40">
                    <span className="text-xl font-headline font-bold text-slate-300">AESTHETICA</span>
                    <span className="text-xl font-headline font-bold text-slate-300">VERIDIAN</span>
                    <span className="text-xl font-headline font-bold text-slate-300">NOVA CLINIC</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 signature-gradient opacity-10 blur-3xl -rotate-12 transform scale-125"></div>
              <img alt="sophisticated luxury spa interior with soft natural lighting and natural stone textures" className="rounded-2xl shadow-xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8iX8IG_eyMxK8EMR2chJeeb52XyZ2KdWi-T5dG3XQDCoQD8WHlySHQ_3sg3yKjOUfMxd6n97t4p0V7tBo9CdFVeDM-fkmfo1U_VVZkI6xd47jbM_8RRTAd_T5QWZELEEU9N2XTUp-ZWXGOoGIZ6ak5Kb1lMjYrIM4-hrxWAehWxLu9u5L1xbckKSmYI8ZDDTkvnahMdLxB3mqYTW5J1v1VLOzBI72_LLT0USfdUN0UileHdNc89NlUTez85zjqMB9xVE-PPaRpgV"/>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 lg:px-24 text-center">
        <FadeIn className="max-w-3xl mx-auto bg-surface-container-lowest p-16 rounded-[2rem] border border-outline-variant/10 shadow-sm relative overflow-hidden font-inter">
          <div className="absolute top-0 right-0 w-32 h-32 signature-gradient opacity-5 rounded-full -mr-16 -mt-16"></div>
          <h2 className="font-headline text-4xl mb-6 font-bold">Ready to quantify your recovery?</h2>
          <p className="text-secondary mb-10 text-lg">Join the ecosystem of high-performers managing their vitality with clinical precision.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="signature-gradient text-white px-10 py-4 rounded-md font-bold text-lg font-inter">
              Begin Assessment
            </button>
            <button className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-md font-bold text-lg font-inter">
              Contact Sales
            </button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
