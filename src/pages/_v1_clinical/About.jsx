import TestimonialsEditorial from '../components/ui/editorial-testimonial';
import { endorsements } from '../data/endorsements';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '../components/ui/motion-wrappers';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-12 bg-soma-off-white">
      {/* Hero Section - Market Positioning */}
      <section className="relative px-8 pt-4 pb-20 lg:py-32 overflow-hidden bg-white">
        <FadeIn className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soma-gold/5 text-soma-gold text-[10px] font-bold tracking-[0.2em] uppercase">
              Clinical Recovery Specialist
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8 font-bold">
              25 Years at the <span className="italic text-soma-gold">Intersection</span> of Science and Institutional Service.
            </h1>
            <p className="text-lg text-slate-500 font-inter leading-relaxed max-w-xl mb-10">
              Bridging the gap between Somatic Wisdom and Modern Institutional Rigor. A dedicated methodology for the systemic evolution of professional wellness and individual physiological vitality.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto text-center signature-gradient text-white px-8 py-4 rounded-xl font-inter font-bold text-sm hover:opacity-90 transition-all active:scale-95 shadow-xl">
                Book a One-on-One Protocol Consultation
              </Link>
              <Link to="/assessment" className="w-full sm:w-auto text-center bg-white text-slate-800 px-8 py-4 rounded-xl font-inter font-bold text-sm border border-slate-200 hover:border-soma-gold transition-all active:scale-95">
                Start Clinical Intake Assessment
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-end">
            <div className="relative group rounded-[32px] overflow-hidden">
              <div className="absolute -inset-4 bg-soma-gold/5 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img alt="Portrait of Soma Mukherjee, Clinical Recovery Specialist" className="relative w-full max-w-lg aspect-[4/5] object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" src="/Photos/SomaN2.png"/>
            </div>
          </div>
        </FadeIn>
      </section>
      
      {/* Academic Core - The Expertise Pillar */}
      <section className="bg-slate-50 py-24 px-8 border-y border-slate-200">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-8">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-inter font-bold text-soma-gold uppercase tracking-[0.2em] mb-4">Foundation</p>
              <h2 className="font-headline text-4xl text-slate-900 mb-6 font-bold tracking-tight">The Academic Core.</h2>
              <p className="text-slate-500 font-inter leading-relaxed">A multidisciplinary foundation combining clinical behavioral intervention with the precise mechanics of somatic science and physiological alignment.</p>
            </div>
            <StaggerContainer className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl flex flex-col justify-between h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-soma-gold/10 transition-colors">
                      <span className="material-symbols-outlined text-soma-gold text-3xl">architecture</span>
                    </div>
                    <h3 className="font-headline text-xl mb-3 text-slate-900 font-bold">Post-Graduate Somatic Architecture</h3>
                    <p className="text-sm text-slate-500 font-inter leading-relaxed">Advanced study of neuromuscular recalibration, respiratory load science, and the neurobiology of systemic stillness.</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-soma-gold text-sm">verified</span>
                    <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-slate-400">Master's in Yoga Science</span>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl flex flex-col justify-between h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-soma-gold/10 transition-colors">
                      <span className="material-symbols-outlined text-soma-gold text-3xl">psychology</span>
                    </div>
                    <h3 className="font-headline text-xl mb-3 text-slate-900 font-bold">Systemic Stress Mapping</h3>
                    <p className="text-sm text-slate-500 font-inter leading-relaxed">Clinical therapeutic training focused on behavior modification, autonomic regulation, and systemic intervention strategies for high-output environments.</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-soma-gold text-sm">verified</span>
                    <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-slate-400">Psychological Counseling</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-[32px] flex flex-col md:flex-row items-center justify-between text-white border border-white/5 mt-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-soma-gold/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-opacity group-hover:opacity-100" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 md:mb-0 text-center md:text-left relative z-10 w-full md:w-auto">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover:scale-105 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl text-soma-gold">verified_user</span>
              </div>
              <div>
                <h3 className="font-headline text-2xl md:text-4xl mb-2 font-bold tracking-tight">Premier Clinical Evaluator Status</h3>
                <p className="text-soma-champagne/90 text-xl font-inter">YCB Level 3 · Lead Evaluator & Teacher</p>
              </div>
            </div>
            
            <div className="md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 flex flex-col items-center md:items-end w-full md:w-auto relative z-10 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-soma-gold mb-6 block font-inter">Clinical Infrastructure</span>
              <p className="text-sm text-slate-400 max-w-[240px] text-center md:text-right leading-relaxed font-inter font-light">
                Certified by the <br/><strong className="text-white font-bold">Ministry of Ayush, Govt. of India</strong> for professional clinical governance.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Institutional Legacy - The Authority Pillar */}
      <section className="py-32 px-8 overflow-hidden bg-white">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-soma-gold font-bold tracking-[0.3em] text-[10px] uppercase block mb-4 font-inter">Chronicle of Authority</span>
              <h2 className="font-headline text-5xl lg:text-6xl text-slate-900 leading-[1.05] font-bold tracking-tight">The Institutional Legacy.</h2>
            </div>
            <div className="text-right hidden lg:block">
              <div className="text-8xl font-headline font-bold text-slate-100 tracking-tighter">2001–2024</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
            <div className="space-y-32">
              {/* Entry 1 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pr-20 mb-12 md:mb-0 md:text-right">
                  <span className="text-soma-gold font-bold text-xl block mb-2 font-inter">2001 - 2010</span>
                  <h4 className="font-headline text-3xl font-bold text-slate-900 mb-6 tracking-tight">Institutional Framework Design</h4>
                  <p className="text-slate-500 font-inter leading-relaxed max-w-md md:ml-auto">Architecting systemic wellness frameworks at **TCS Pune**. Developing the early clinical blueprints for large-scale leadership support and resilience training during India's rapid IT expansion.</p>
                </div>
                <div className="w-4 h-4 bg-soma-gold rounded-full z-10 ring-8 ring-soma-gold/5 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-20">
                  <div className="rounded-[24px] overflow-hidden border border-slate-100 shadow-sm max-w-md group-hover:shadow-xl transition-all duration-700">
                    <img alt="Corporate Strategic Intervention" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6I_Sywfv_D4Yc1YbuRIaWWWGD5Lwlxa_TnYz8-jURJqp7gMp2qEo-Ve-U8Z9kbzzpkO1kKpjkPCtFnGR_jCeV6jxXZUKaWWc1oivyGHEdgf9EcFIuVZ6qy0NXpUw1xmtnNjtF4gISopiefhA4aEjSak2WZG0FZnbO7ortnLstupM9fCZZHkuzIGdmKsV5d_j6Q3ifDbjhwLobdpozuB0x61yXbGDEwU0rFejgcon7lzmNY2h4it_gRgC_bY3z7hv9zxEZSm31JCZ"/>
                  </div>
                </div>
              </div>
              {/* Entry 2 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pr-20 order-2 md:order-1 flex md:justify-end">
                  <div className="rounded-[24px] overflow-hidden border border-slate-100 shadow-sm max-w-md group-hover:shadow-xl transition-all duration-700">
                    <img alt="Global Leadership Strategic Recalibration" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6QrmV7lEavWsrfTydN27cZncT-QDUU36CfVNmXD6wKPaYL3Gn6pNtBBaekz3ElT8OIcDTzbzvn_ryr2xyha8NgJTFKoSMjb68MWxVEQIfyJSeQxZJDX3_KHyw7E2NsbEkD_aVkxpPVViIVLukJZZ4KNQptXCkezo9NCrQq89ci1oWa-2IT7rrrJ49BmjCdP1SXZvi25q3C0UKA5qzZo1glgNLO0APWKo4U3Mhm4uJfyV3TAxDbAn7arNxz7guGuq2TcAHRhuB_Pl"/>
                  </div>
                </div>
                <div className="w-4 h-4 bg-soma-gold rounded-full z-10 ring-8 ring-soma-gold/5 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-20 order-1 md:order-2 mb-12 md:mb-0">
                  <span className="text-soma-gold font-bold text-xl block mb-2 font-inter">2011 - 2024</span>
                  <h4 className="font-headline text-3xl font-bold text-slate-900 mb-6 tracking-tight">Strategic Intervention at Scale</h4>
                  <p className="text-slate-500 font-inter leading-relaxed max-w-md font-light">Pioneering clinical recovery for global leadership cohorts. Delivering high-precision resilience architecture for **Google, IBM, SAP, Sony, and Halliburton**, focusing on systemic burnout resolution and Autonomic reset.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Peer Validation - The Trust Pillar */}
      <section className="bg-slate-50 py-32 px-8 text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
             <span className="inline-block px-4 py-1.5 bg-soma-gold/5 text-soma-gold text-[10px] font-bold tracking-[0.2em] uppercase rounded-full cursor-default font-inter">Professional Credibility</span>
            <h2 className="font-headline text-4xl lg:text-6xl mb-6 font-bold tracking-tight text-slate-900">Clinical Peer Endorsements.</h2>
            <div className="w-24 h-1 bg-soma-gold mx-auto"></div>
          </div>
          <div className="bg-white text-slate-900 rounded-[40px] overflow-hidden shadow-xl border border-slate-100">
            <TestimonialsEditorial testimonials={endorsements} />
          </div>
        </div>
      </section>

      {/* Institutional Impact Awards */}
      <section className="py-32 px-8 bg-white border-b border-slate-100">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-emerald-700 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 font-inter">National Recognition</p>
            <h2 className="font-headline text-5xl text-slate-900 mb-4 font-bold tracking-tight">Institutional Impact Awards</h2>
            <p className="text-slate-500 font-inter max-w-lg mx-auto leading-relaxed">Acknowledged excellence in Somatic Discipline and Technical Evaluation at the highest institutional levels.</p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="h-full p-12 bg-slate-50 rounded-[32px] flex flex-col items-center text-center border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm ring-1 ring-slate-200 group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-soma-gold text-3xl">emoji_events</span>
                </div>
                <h4 className="font-headline text-xl mb-3 font-bold text-slate-900">National Somatic Champion</h4>
                <p className="text-sm text-slate-500 font-inter leading-relaxed">Highest honors for somatic discipline and clinical execution at the national evaluation level.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full p-12 bg-slate-50 rounded-[32px] flex flex-col items-center text-center border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm ring-1 ring-slate-200 group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-soma-gold text-3xl">military_tech</span>
                </div>
                <h4 className="font-headline text-xl mb-3 font-bold text-slate-900">State Leadership Honors</h4>
                <p className="text-sm text-slate-500 font-inter leading-relaxed">Recognized for significant contributions to the development of Systemic Resilience frameworks in Maharashtra.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full p-12 bg-slate-50 rounded-[32px] flex flex-col items-center text-center border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm ring-1 ring-slate-200 group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-soma-gold text-3xl">workspace_premium</span>
                </div>
                <h4 className="font-headline text-xl mb-3 font-bold text-slate-900">Institutional Impact Award</h4>
                <p className="text-sm text-slate-500 font-inter leading-relaxed">For exceeding institutional wellness benchmarks through two decades of strategic clinical intervention.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </FadeIn>
      </section>

      {/* CTA Section - Dual-Path Funnel */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto rounded-[48px] overflow-hidden relative signature-gradient shadow-2xl">
          <div className="relative z-10 py-32 px-12 text-center max-w-4xl mx-auto">
            <p className="text-soma-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-8 font-inter">Intake Pipeline</p>
            <h2 className="font-headline text-4xl lg:text-6xl text-white mb-8 leading-[1.05] font-bold tracking-tight">Begin Your Personal Path <br/>to Systemic Recovery.</h2>
            <p className="text-soma-champagne/80 mb-16 text-xl font-inter font-light max-w-2xl mx-auto">Direct access to 25 years of institutional expertise. Clinical consultations are available for discerning individuals and corporate leadership.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="w-full md:w-auto px-12 py-5 bg-white text-emerald-900 rounded-xl font-inter font-bold text-lg hover:bg-soma-gold/5 transition-all shadow-xl">
                Book a One-on-One Protocol Consultation
              </Link>
              <Link to="/assessment" className="w-full md:w-auto px-12 py-5 bg-emerald-900/40 backdrop-blur-md text-white border border-white/20 rounded-xl font-inter font-bold text-lg hover:bg-emerald-900/60 transition-all">
                Start Clinical Intake Assessment
              </Link>
            </div>
          </div>
          {/* Background Decorative patterns */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full -ml-64 -mb-64 blur-[120px]"></div>
        </div>
      </section>
    </main>
  );
}
