import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '../components/ui/motion-wrappers';

export default function Programs() {
  return (
    <main className="pt-12 font-inter">
      {/* Hero Section */}
      <section className="px-8 pt-4 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-24">
          <div className="md:w-2/3">
            <span className="text-secondary tracking-widest text-xs uppercase font-bold mb-4 block">Precision Recovery</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-on-surface">
              Programs Designed for <span className="italic text-emerald-700">Sustained</span> Performance.
            </h1>
          </div>
          <div className="md:w-1/3 pb-4">
            <p className="text-secondary text-lg leading-relaxed border-l-2 border-primary-container pl-6 font-inter">
              Beyond the generic retreat. We offer a clinical framework for the modern executive, blending biological science with high-end recovery ergonomics.
            </p>
          </div>
        </div>
        
        {/* The Five Pillars Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Pillar 1: Sleep Architecture */}
          <StaggerItem id="sleep" className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px] md:h-auto md:aspect-auto">
            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 group-hover:scale-105 transition-transform duration-700" alt="luxury minimalist bedroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtMbFl70tDCa68V-jzku3oGbY-_nWVHkVETJZmIY9f1ATPl41j4ePzoFAY_EqNaaePeYaB3XINWi6kEpEg6GCtn9jiMOWiNqfpLdDqKwyS56nxughD7pCNrR4T37iwzwANd7HjRfg8UoJYMtKyUMoqNY4i0KmD2ePSviLoW9vnOTaqa5WIia_1omzJGlGWUjQ6shlDCGelRmoQ-CnhjFhgtV3RXbU414UZbQfJKo0aaN0PxZM-LBQ-OJpcgAz6IcMmV4SMuOQCCM3R"/>
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <HoverCard className="bg-white/90 backdrop-blur p-6 md:p-8 rounded-lg max-w-md">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Pillar 01</span>
                <h3 className="text-3xl font-headline font-bold mb-4 text-on-surface">Sleep Architecture</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 font-inter">Targeting chronic insomnia and circadian disruption through clinical sleep hygiene and neurological recalibration.</p>
                <a className="inline-flex items-center text-primary text-sm font-bold group font-inter" href="#">
                  Explore Treatment <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </HoverCard>
            </div>
          </StaggerItem>
          
          {/* Pillar 2: Cognitive Calm */}
          <StaggerItem id="cognitive" className="md:col-span-4 h-full">
            <HoverCard className="bg-secondary text-white p-10 rounded-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-primary-container font-bold text-xs uppercase tracking-widest mb-4 block">Pillar 02</span>
                <h3 className="text-3xl font-headline font-bold mb-6 leading-tight text-white">Cognitive Calm</h3>
                <p className="text-secondary-container text-sm leading-relaxed font-inter">Systematic reduction of decision fatigue and high-stakes anxiety using biofeedback and clinical mindfulness.</p>
              </div>
              <div className="mt-8">
                <span className="material-symbols-outlined text-4xl text-primary-container">psychology</span>
              </div>
            </HoverCard>
          </StaggerItem>
          
          {/* Pillar 3: Digital Ergonomics */}
          <StaggerItem id="digital" className="md:col-span-4 h-full">
            <HoverCard className="bg-surface-container-highest p-10 rounded-xl relative overflow-hidden group h-full">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Pillar 03</span>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Digital Ergonomics</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-10 font-inter">Advanced correction for RSI and executive postural strain through specialized physical rehabilitation.</p>
              <img className="absolute -bottom-10 -right-10 w-48 opacity-20 group-hover:rotate-6 transition-transform duration-500" alt="modern office chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChLF4jQcBAAuTy1iceRMzkkuBlZ3ZXJEJuE-kuI5BB6ZxTgXgkSqPacIW2MWeJQeeiGsxSlf06Dc24dV-tfy3pDdO247N4TNNna1un1YXt2f_jwKfQdjqiKbQp2EMdscTs37UY1qh135BzZEd26wDCqbss_ODHOzipt64YWkgj1N-hNB83F65Y3km2zylm9B6MhWKNV8Dj7MXcaDnV3Sph2pI-is8YGB8lZ5rLwHldcLjvUtDOtMBz4PMod9FxwBC5igiLyD1rjq0f"/>
            </HoverCard>
          </StaggerItem>
          
          {/* Pillar 4: Metabolic Resilience */}
          <StaggerItem id="metabolic" className="md:col-span-4 h-full">
            <HoverCard className="bg-white border border-outline-variant/30 p-10 rounded-xl h-full">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Pillar 04</span>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Metabolic Resilience</h3>
              <p className="text-secondary text-sm leading-relaxed font-inter">Precision nutrition and vitality monitoring designed to sustain high-performance output across time zones.</p>
              <div className="mt-12 flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-container"></div>
              </div>
            </HoverCard>
          </StaggerItem>
          
          {/* Pillar 5: Executive Sanctuary */}
          <StaggerItem id="sanctuary" className="md:col-span-4 h-full">
            <HoverCard className="bg-primary text-white p-10 rounded-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-inverse-primary font-bold text-xs uppercase tracking-widest mb-4 block">Pillar 05</span>
                <h3 className="text-3xl font-headline font-bold mb-6 leading-tight text-white">The Executive Sanctuary</h3>
                <p className="text-primary-fixed-dim text-sm leading-relaxed opacity-80 font-inter">Highly confidential, one-on-one clinical therapy for leadership at the highest levels of governance.</p>
              </div>
              <button className="mt-8 border border-inverse-primary/30 py-3 rounded text-sm font-bold hover:bg-inverse-primary hover:text-primary transition-colors font-inter">
                Request Private Consultation
              </button>
            </HoverCard>
          </StaggerItem>

          {/* Counselling: Talk About What's Not Working */}
          <StaggerItem id="counselling" className="md:col-span-12 h-full">
            <HoverCard className="bg-surface-container-lowest border border-outline-variant/20 p-10 rounded-xl h-full flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-2/3">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Counselling</span>
                <h3 className="text-3xl font-headline font-bold mb-4 leading-tight">Talk About What&#39;s Not Working</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 max-w-xl font-inter">You don&#39;t need the right words. We help you translate ambiguous tension into clinical clarity. The first 30-minute session is complimentary, confidential, and requires zero commitment.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="/programs/counselling" className="inline-flex items-center gap-2 text-primary text-sm font-bold group font-inter">
                    Book Free Session
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-3">
                {[{ icon: 'battery_low', label: 'Lingering Fatigue' }, { icon: 'radar', label: 'Hyper-Vigilance' }, { icon: 'trending_down', label: 'Diminished Edge' }].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container font-inter">
                    <span className="material-symbols-outlined text-[18px] text-primary">{item.icon}</span>
                    <span className="text-sm font-bold text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Delivery Model Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-8">Credible Approaches.<br/><span className="italic font-normal">No Quick Fixes.</span></h2>
              <div className="space-y-12">
                <HoverCard className="flex gap-6 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">rebase_edit</span>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2">Repeatable Systems</h4>
                    <p className="text-secondary text-sm leading-relaxed font-inter">Recovery shouldn't be a random event. We build protocols that integrate into your daily calendar seamlessly.</p>
                  </div>
                </HoverCard>
                <HoverCard className="flex gap-6 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2">Proven Results</h4>
                    <p className="text-secondary text-sm leading-relaxed font-inter">Leveraging 22 years of human performance data at TCS to refine our clinical interventions for modern work life.</p>
                  </div>
                </HoverCard>
                <HoverCard className="flex gap-6 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">link</span>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2">Seamless Integration</h4>
                    <p className="text-secondary text-sm leading-relaxed font-inter">No radical life changes required. Our modules are designed to work within the constraints of high-pressure careers.</p>
                  </div>
                </HoverCard>
              </div>
            </div>
            <div className="relative">
              <HoverCard className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-2xl">
                <img className="w-full h-full object-cover" alt="Soma Mukherjee - Clinical Director" src="/Photos/Soman7.PNG"/>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </HoverCard>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded shadow-xl border border-outline-variant/10 max-w-xs z-10 transition-transform hover:scale-105 duration-300">
                <p className="text-on-surface italic font-headline text-lg leading-relaxed">
                  "The goal isn't to remove the stress, but to expand the human capacity to recover from it."
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary font-inter">- SOMA Clinical Director</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 text-center bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8">Which Pillar Does Your Team Need?</h2>
          <p className="text-secondary text-lg mb-12 font-inter">Identify the core recovery deficit in your organization with a brief, evidence-based assessment.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="signature-gradient text-white px-10 py-4 rounded-md font-bold text-lg hover:opacity-90 shadow-xl transition-all font-inter">Download Pillar Menu</button>
            <button className="bg-surface-container-high text-on-secondary-container px-10 py-4 rounded-md font-bold text-lg border border-outline-variant/20 hover:bg-surface-container-highest transition-colors font-inter">Contact Expert Advisor</button>
          </div>
        </div>
      </section>
    </main>
  );
}
