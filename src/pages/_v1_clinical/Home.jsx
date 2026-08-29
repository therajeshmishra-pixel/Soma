import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '../components/ui/motion-wrappers';
import ShaderShowcase from '../components/ui/hero';
import TestimonialsEditorial from '../components/ui/editorial-testimonial';
import { useNavigate } from 'react-router-dom';

const B2B_TESTIMONIALS = [
  {
    id: 1,
    quote: "SOMA redefined our approach to elite performance. We no longer see stress as a badge of honor, but as system load that requires clinical precision to manage.",
    author: "Arjun Mehta",
    role: "VP of Engineering",
    company: "TCS Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote: "The methodology provided our executive team with the biological data needed to sustain high-output decision making without the burnout tail-risk.",
    author: "Sarah Jenkins",
    role: "Chief People Officer",
    company: "Deloitte EMEA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote: "A structural transformation. The SOMA Pivot moved our developers from physiological stagnation to sustainable high-performance architecture.",
    author: "David Chen",
    role: "Head of Infrastructure",
    company: "Infosys Cloud",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-white font-inter">
      {/* Hero Section: Header Hierarchy H1 */}
      <section className="w-full">
        <ShaderShowcase />
      </section>
      
      {/* Problem Section: System Depletion Decoded */}
      <section className="bg-slate-50 py-32 px-8 border-y border-slate-100">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group rounded-[40px] overflow-hidden border border-slate-200 p-2 bg-white shadow-2xl">
                <img className="relative w-full aspect-square object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Biological system load mapping" src="/Photos/Balancing energy and stress dynamics.png"/>
                <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block font-inter">Problem Architecture</span>
              <h2 className="font-headline text-5xl lg:text-6xl text-slate-900 mb-8 leading-[1.05] tracking-tight font-bold">The High-Demand <br/>System Depletion.</h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed font-inter font-light">
                In high-velocity professional ecosystems, stress is often misclassified as a mental state. At SOMA, we decode it as <span className="text-emerald-800 font-bold">System Load</span>. Prolonged cognitive focus without physiological reset leads to <span className="text-emerald-800 font-bold">Chronic Depletion</span>-a state where the body's regulatory mechanisms default to failure.
              </p>
              <div className="grid gap-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-emerald-50 transition-colors duration-500">
                    <span className="material-symbols-outlined text-emerald-800 text-3xl font-bold">analytics</span>
                  </div>
                  <div className="font-inter">
                    <h4 className="font-headline font-bold text-slate-900 text-xl mb-2 tracking-tight">Physiological Stagnation</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">The structural toll of sedentary cognitive endurance on muscular and neural health.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-emerald-50 transition-colors duration-500">
                    <span className="material-symbols-outlined text-emerald-800 text-3xl font-bold">ecg_heart</span>
                  </div>
                  <div className="font-inter">
                    <h4 className="font-headline font-bold text-slate-900 text-xl mb-2 tracking-tight">Regulatory Dysfunction</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">Autonomic nervous system imbalances leading to invisible performance decay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Methodology Section: Clinical Architecture */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block font-inter">Institutional Governance</span>
            <h2 className="font-headline text-5xl text-slate-900 mb-8 font-bold tracking-tight">The SOMA Clinical Architecture.</h2>
            <p className="text-slate-500 text-xl font-inter font-light leading-relaxed">A phased transition from system depletion back to high-output regulatory balance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
             {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-px bg-slate-100" />
            
            {[
              { 
                step: '01', 
                title: 'Diagnostic Decoding', 
                desc: 'Mapping your physiological biomarkers and nervous system load to identify the precise points of energy leakage.' 
              },
              { 
                step: '02', 
                title: 'Structural Reset', 
                desc: 'Implementing clinical protocols to neutralize physical stagnation and restore autonomic nervous system flexibility.' 
              },
              { 
                step: '03', 
                title: 'Precision Resilience', 
                desc: 'Optimizing your biological operating system for sustainable, high-intensity professional output.' 
              }
            ].map((node, i) => (
              <div key={i} className="relative z-10 text-center group font-inter">
                <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-10 font-headline text-3xl font-bold group-hover:bg-emerald-800 transition-all duration-700 shadow-2xl ring-[12px] ring-white">
                  {node.step}
                </div>
                <h3 className="text-2xl font-headline font-bold text-slate-900 mb-6 tracking-tight">{node.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-light px-4">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section: H2 Precision Methodology */}
      <section className="py-32 px-8 bg-slate-50 border-y border-slate-100">
        <FadeIn className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block font-inter">Precision Recovery Methodology</span>
          <h2 className="font-headline text-5xl lg:text-6xl text-slate-900 mb-8 font-bold tracking-tight">The SOMA Pivot: Adaptive Restoration.</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-inter font-light leading-relaxed">A clinical framework built on biological restoration pillars, tailored for the intellectual athlete.</p>
        </FadeIn>
        
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <StaggerItem>
            <HoverCard className="bg-white p-12 rounded-[40px] group h-full border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:border-emerald-100 duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-emerald-50 transition-colors duration-500 font-bold">
                <span className="material-symbols-outlined text-4xl text-emerald-800 font-bold">architecture</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Biomechanical <br/>Realignment</h3>
              <p className="text-base text-slate-500 leading-relaxed font-inter font-light">Targeted clinical movement protocols designed to reverse the structural toll of high-intensity sedentary environments.</p>
            </HoverCard>
          </StaggerItem>

          <StaggerItem>
            <HoverCard className="bg-white p-12 rounded-[40px] group h-full border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:border-emerald-100 duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-emerald-50 transition-colors duration-500 font-bold">
                <span className="material-symbols-outlined text-4xl text-emerald-800 font-bold">vital_signs</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Neural Vagal <br/>Support Systems</h3>
              <p className="text-base text-slate-500 leading-relaxed font-inter font-light">Scientifically vetted respiratory protocols to shift the autonomic nervous system from vigilance to restoration in minutes.</p>
            </HoverCard>
          </StaggerItem>

          <StaggerItem>
            <HoverCard className="bg-white p-12 rounded-[40px] group h-full border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:border-emerald-100 duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-emerald-50 transition-colors duration-500 font-bold">
                <span className="material-symbols-outlined text-4xl text-emerald-800 font-bold">neurology</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Cognitive <br/>Architecture</h3>
              <p className="text-base text-slate-500 leading-relaxed font-inter font-light">Contextual behavioral coaching to integrate micro-recovery rituals into the high-performance executive workflow.</p>
            </HoverCard>
          </StaggerItem>

          <StaggerItem className="lg:col-span-2 h-full">
            <HoverCard className="bg-slate-900 p-12 lg:p-16 rounded-[48px] flex flex-col md:flex-row gap-16 items-center text-white shadow-2xl overflow-hidden relative group border border-white/5">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64 transition-opacity group-hover:opacity-100 pointer-events-none" />
              <div className="md:w-3/5 relative z-10 font-inter">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 font-bold">
                  <span className="material-symbols-outlined text-4xl text-emerald-400 font-bold">biotech</span>
                </div>
                <h3 className="font-headline text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">SOMA Clinical Assessment Portal</h3>
                <p className="text-emerald-100/70 text-lg leading-relaxed mb-12 font-inter font-light">Our proprietary diagnostic engine translates your biomarkers and lifestyle metrics into a personalized precision recovery roadmap.</p>
                <button 
                  onClick={() => navigate('/assessment')}
                  className="bg-white text-emerald-900 px-10 py-5 rounded-xl font-bold text-base flex items-center gap-3 hover:bg-emerald-50 transition-all font-inter shadow-xl"
                >
                  Start Diagnostic Assessment
                  <span className="material-symbols-outlined text-xl font-bold">arrow_forward</span>
                </button>
              </div>
              <div className="md:w-2/5 p-2 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-sm relative z-10 overflow-hidden">
                <img className="w-full rounded-[24px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="SOMA Data Analytics Portal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZmOofTwwGWLtzJ8bG4mEbKE1c0Iv4m_7dCV2KeeEecCiBBGF9I2uZIzrAYcJEMwcxL8izXCYmJPEpOErKNbN-VVKH0Y9b1FIRNih-_ECwMtkGmdvz2wJXU6d2BoodfWHUIOaM8hwGI2Ky5TTC3SQsHgZ6tTOaSl-a7qSAJSw3gL5t1vzk9CCJg9XgO4RPkSHr-XIDo0EB9pBuihUX-UcTWk1YWHW7KqDkN6VEWgNpDAbI35Hq6VYYwMSgzhngyP73I2bXbQM7jqTh"/>
              </div>
            </HoverCard>
          </StaggerItem>

          <StaggerItem>
            <HoverCard className="bg-white p-12 rounded-[40px] group h-full border border-slate-100 shadow-sm flex flex-col justify-center text-center duration-500">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10 font-bold">
                <span className="material-symbols-outlined text-4xl text-emerald-800 font-bold">workspace_premium</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Anchored in Research</h3>
              <p className="text-base text-slate-500 leading-relaxed font-inter font-light">Our methods are vetted by clinical neuro-physiologists and validated by research in elite human performance.</p>
              <div className="mt-10 pt-10 border-t border-slate-100 flex items-center justify-center gap-4 grayscale opacity-40">
              <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block font-inter">Institutional Governance</span>
              </div>
            </HoverCard>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Proof Section: The Corporate Trust */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold mb-20 font-inter">Validated by Institutional Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <span className="font-headline text-4xl font-bold text-slate-900 cursor-default">TCS</span>
            <span className="font-headline text-4xl font-bold text-slate-900 cursor-default">INFOSYS</span>
            <span className="font-headline text-4xl font-bold text-slate-900 cursor-default">WIPRO</span>
            <span className="font-headline text-4xl font-bold text-slate-900 cursor-default">HSBC</span>
            <span className="font-headline text-4xl font-bold text-slate-900 cursor-default">DELOITTE</span>
          </div>
        </div>
      </section>

      {/* Editorial Testimonials: E-E-A-T Signaling */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
           <div className="text-center mb-16 font-inter">
              <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block font-inter">Executive Validation</span>
              <h2 className="font-headline text-4xl font-bold text-slate-900 tracking-tight">The Clinical Advantage.</h2>
           </div>
           <div className="bg-white rounded-[48px] p-2 border border-slate-200 shadow-2xl">
             <TestimonialsEditorial testimonials={B2B_TESTIMONIALS} />
           </div>
        </div>
      </section>

      {/* Final CTA Section: Conversion Architecture */}
      <section className="py-32 px-8 bg-white">
        <FadeIn delay={0.2} className="max-w-6xl mx-auto signature-gradient rounded-[48px] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative z-10 font-inter">
            <span className="text-soma-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block font-inter">Precision Intake Pipeline</span>
            <h2 className="font-headline text-5xl lg:text-7xl text-white mb-10 leading-[1.05] font-bold tracking-tight">Ready to decode your <br/>high-performance physiology?</h2>
            <p className="text-emerald-50 text-xl mb-16 max-w-2xl mx-auto font-inter font-light leading-relaxed">
              Take the first step toward reclaiming regulatory balance. Begin your precision diagnostic intake to identify your system’s current physiological load.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 font-inter">
              <button 
                onClick={() => navigate('/assessment')}
                className="bg-white text-emerald-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-500 shadow-2xl font-inter min-w-[280px]"
              >
                Diagnostic Assessment
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-emerald-900/40 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-900/60 transition-all duration-500 shadow-xl font-inter min-w-[280px]"
              >
                Precision Intake
              </button>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full -ml-64 -mb-64 blur-[120px]"></div>
        </FadeIn>
      </section>
    </main>
  );
}

