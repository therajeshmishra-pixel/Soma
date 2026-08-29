import { Link } from 'react-router-dom';
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from '../components/ui/motion-wrappers';

export default function Corporate() {
  return (
    <main className="pt-12 font-inter bg-soma-off-white">
      {/* Hero Section */}
      <section className="relative lg:min-h-[870px] pt-12 lg:pt-0 flex items-center px-8 overflow-hidden bg-white">

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10 order-2 lg:order-1">
            <span className="inline-block text-soma-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-6 bg-soma-gold/5 px-3 py-1 rounded-full font-inter">For HR Leadership & Decision Makers</span>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
              Human-Centric <br/> Systems for <br/> <span className="italic text-soma-gold">High-Output</span> Teams.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10 font-inter font-light">
              Beyond superficial wellness. We build the physiological infrastructure required for sustained corporate performance and executive longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-inter">
              <button className="px-8 py-4 signature-gradient text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-xl font-inter">Request Executive Summary</button>
              <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-xl font-bold text-sm hover:border-emerald-300 transition-all font-inter">View Proof of Concept</button>
            </div>
          </div>
          <FadeIn className="w-full lg:col-span-6 relative flex justify-end order-1 lg:order-2" delay={0.2}>
            <HoverCard className="relative w-full max-w-lg aspect-[4/5] rounded-[32px] overflow-hidden mx-auto lg:mx-0">
              <img className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Soma Mukherjee - Corporate Wellness Strategist" src="/Photos/SomaS.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </HoverCard>
            {/* Overlapping Decorative Element */}
            <div className="absolute -bottom-12 -left-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl max-w-xs hidden xl:block border border-slate-100 shadow-xl transition-transform hover:scale-105 duration-300 z-20">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-800">monitoring</span>
                </div>
                <div className="text-sm font-bold text-slate-900 font-headline">Physiological ROI</div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-inter">Our framework shifts the focus from morale to measurable biological resilience across global teams.</p>
            </div>
          </FadeIn>
        </div>
        {/* Background Texture */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 bg-[radial-gradient(circle_at_center,_#059669_0%,_transparent_70%)]"></div>
      </section>

      {/* The Business Case */}
      <section className="py-24 px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold text-slate-900 mb-6 tracking-tight">The Business Case for Physiological Balance</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-inter leading-relaxed">Standard wellness initiatives fail because they address the symptom, not the system. We provide the architecture for organizational homeostasis.</p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StaggerItem className="group">
              <HoverCard className="p-10 bg-white rounded-2xl h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-soma-gold">psychology_alt</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">Beyond Motivation</h3>
                <p className="text-slate-500 leading-relaxed font-inter text-sm">Engagement is a biological state. We optimize the environments that allow cognitive focus to become the natural baseline.</p>
              </HoverCard>
            </StaggerItem>
            <StaggerItem className="group">
              <HoverCard className="p-10 bg-white rounded-2xl h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-soma-gold">speed</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">IT Impact</h3>
                <p className="text-slate-500 leading-relaxed font-inter text-sm">Reducing cognitive load through streamlined physiological interventions directly correlates with lower error rates in high-stakes environments.</p>
              </HoverCard>
            </StaggerItem>
            <StaggerItem className="group">
              <HoverCard className="p-10 bg-white rounded-2xl h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-emerald-800">account_balance_wallet</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">Sustainable ROI</h3>
                <p className="text-slate-500 leading-relaxed font-inter text-sm">Lowering burnout-induced turnover and healthcare premiums through preventative, clinical-grade ecosystem support.</p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions: Bento Grid Layout */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-soma-gold font-bold tracking-[0.3em] text-[10px] uppercase block mb-4 font-inter">Institutional Interventions</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-900 mb-4 tracking-tight leading-tight">Every Organizational Layer.</h2>
              <p className="text-slate-500 font-inter font-light">Precision-engineered programs designed to scale from the executive board to the global workforce.</p>
            </div>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            {/* Strategic Workshops */}
            <StaggerItem className="md:col-span-8 group">
              <Link to="/corporate/workshops" className="block h-full">
                <HoverCard className="bg-slate-900 rounded-[32px] overflow-hidden relative h-full group">
                  <img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Modern conference room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNMO8lG-DyZyDWjcO2Cwfhw1CBqXaCFgYfgDNRS6cgw1lh5QFYKrzbU4aOEX96k5eXbiuSPviDJJIQDMT2ejKI01ImvbDFzxVk0oWbR6JMGhNMBgzpNV3M_94VVAjVhSvYFuF1EBoc-hn-3LC3ofmMse3zmX0JLQ8kuI5RnVhLR0btvyNuzOlfuuLGNRwqqfN--NAvfX-JCuQLnhuWMpXYUZsr3CC4kuQOCMbkQ8ilV7H9v6j-M09XSevAHJPuGG0rfxp7wUTq25tx"/>
                  <div className="relative h-full p-12 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10">
                    <h3 className="text-3xl font-headline font-bold mb-2 text-white tracking-tight">Strategic Workshops</h3>
                    <p className="text-slate-300 max-w-sm font-inter font-light">Intensive modules for leaders on building resilience systems within their departments.</p>
                  </div>
                </HoverCard>
              </Link>
            </StaggerItem>
            {/* The Connection */}
            <StaggerItem className="md:col-span-4 group">
              <Link to="/corporate/connection" className="block h-full">
                <HoverCard className="bg-emerald-950 rounded-[32px] p-12 flex flex-col justify-between border border-soma-gold/20 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-soma-gold/5 rounded-full blur-[60px] -mr-24 -mt-24 transition-opacity group-hover:opacity-100" />
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative z-10 font-bold">
                    <span className="material-symbols-outlined text-soma-gold text-3xl font-bold">diversity_3</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-headline font-bold mb-4 text-white tracking-tight">The Connection</h3>
                    <p className="text-soma-champagne/70 text-sm leading-relaxed mb-8 font-inter font-light">Safe-space clinical dialogue for high-performance professionals to reset and recalibrate.</p>
                    <div className="text-soma-gold font-bold flex items-center gap-2 group text-sm hover:text-white transition-colors font-inter">
                      Explore Counseling 
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </HoverCard>
              </Link>
            </StaggerItem>
            {/* Desktop Interventions */}
            <StaggerItem className="md:col-span-4 group">
              <Link to="/corporate/desktop" className="block h-full">
                <HoverCard className="bg-white rounded-[32px] p-12 flex flex-col justify-between border border-slate-100 shadow-sm h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-emerald-800 text-3xl font-bold">laptop_mac</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-4 text-slate-900 tracking-tight">Desktop Interventions</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-inter font-light">Seamlessly integrated digital tools for micro-recovery throughout the working day.</p>
                  </div>
                </HoverCard>
              </Link>
            </StaggerItem>
            {/* Workplace Wellness Consulting */}
            <StaggerItem className="md:col-span-8 group">
              <Link to="/corporate/wellness" className="block h-full">
                <HoverCard className="bg-slate-50 rounded-[32px] overflow-hidden relative h-full border border-slate-100 group">
                  <div className="absolute inset-0 bg-[url('/Photos/Clinical-Governance.png')] bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <div className="relative h-full p-12 flex flex-col justify-end z-10">
                    <h3 className="text-3xl font-headline font-bold mb-2 text-slate-900 tracking-tight">Workplace Consulting</h3>
                    <p className="text-slate-500 max-w-md font-inter font-light">Environmental audits and spatial design aimed at reducing biological stressors in physical offices.</p>
                  </div>
                </HoverCard>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SaaS for HR */}
      <section className="py-24 px-8 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soma-gold/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2">
            <span className="text-soma-gold font-bold tracking-[0.2em] text-[10px] uppercase block mb-6 font-inter">Data-Driven Governance</span>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-8 tracking-tight leading-tight">Collective Nervous System.</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-inter font-light">Our HR dashboard provides the first real-time window into your organization's collective nervous system, enabling precision deployment of resources.</p>
            <ul className="space-y-10">
              <li className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-soma-gold group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl font-bold">insights</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2 tracking-tight">Population Insights</h4>
                  <p className="text-sm text-slate-400 font-inter font-light leading-relaxed">Anonymized, clinical-grade data mapping of organizational fatigue and recovery trends.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-soma-gold group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl font-bold">target</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2 tracking-tight">Precision Deployment</h4>
                  <p className="text-sm text-slate-400 font-inter font-light leading-relaxed">AI-driven recommendations for specific interventions based on team-level requirements.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-soma-gold group-hover:bg-soma-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl font-bold">analytics</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2 tracking-tight">Impact Quantified</h4>
                  <p className="text-sm text-slate-400 font-inter font-light leading-relaxed">Quantifiable metrics on the impact of SOMA interventions on productivity and retention.</p>
                </div>
              </li>
            </ul>
          </div>
          <FadeIn className="lg:w-1/2 relative" delay={0.2}>
            <div className="relative p-2 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img className="rounded-[24px] w-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Data dashboard interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjtSh349IyHCfzEkLv9eE2NuRUPYo1Jx9sGGbtDHwUXs-D8b5ffBAzOnIYoWRFJiNsk_OpGKN5tP2CTHx-Zv-MfhkPhNuXlAfcrPs0L_mzS7J-TemL-Uxex6TFH1_RLCy2r7FxgQdpzvK10l4sRXfCAN_7mkJpVV70pzE0KbMimMJiYoAbahJVTwgYzx04FA1Y4oSRjFye5LxWJo1yEoY1zkv8NoBt8RrvGy-yyvqXEo4C3Hh09xAMLc8icMIRm7qfIa2mz2o8ZrMT"/>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-10 -left-10 bg-soma-gold p-10 rounded-[24px] max-w-[260px] z-20 shadow-2xl transition-transform hover:scale-105 duration-300 font-inter">
              <div className="text-5xl font-headline font-bold mb-2 text-white tracking-tighter">22%</div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-relaxed">Reduction in reported high-stress incidents across pilot teams.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="md:w-1/3 text-left">
              <span className="text-soma-gold font-bold tracking-[0.3em] text-[10px] uppercase block mb-4 font-inter">Validation Pathway</span>
              <h2 className="text-3xl font-headline font-bold text-slate-900 mb-6 tracking-tight">Two Decades of Deployment.</h2>
              <p className="text-slate-500 italic font-inter text-lg leading-relaxed">"SOMA doesn't just offer wellness; they offer an architectural upgrade for human capital."</p>
            </div>
            <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-16 lg:gap-24 items-center font-inter">
              <div className="flex flex-col items-center group">
                <div className="text-3xl font-headline font-bold text-slate-300 group-hover:text-slate-900 transition-colors">TCS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-3 font-bold text-slate-400 font-inter">Proof of Concept</div>
              </div>
              <div className="w-px h-16 bg-slate-100 hidden md:block"></div>
              <div className="text-center group">
                <div className="text-4xl font-headline font-bold text-slate-900 mb-1 tracking-tight">50k+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 font-inter">Impacted</div>
              </div>
              <div className="w-px h-16 bg-slate-100 hidden md:block"></div>
              <div className="text-center group">
                <div className="text-4xl font-headline font-bold text-slate-900 mb-1 tracking-tight">98%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 font-inter">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto signature-gradient rounded-[48px] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-soma-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block font-inter">Intake Pipeline</span>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold mb-8 text-white tracking-tight leading-[1.05]">Is Your Organization <br/> <span className="italic font-normal">Built to Recover?</span></h2>
            <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto mb-16 font-inter font-light leading-relaxed">
              Connect with a SOMA architect to discuss how our ecosystem can be integrated into your existing leadership and HR frameworks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 font-inter">
              <button className="px-12 py-5 bg-white text-emerald-900 rounded-xl font-bold hover:bg-emerald-50 transition-all text-lg shadow-xl font-inter">Contact HR Strategy Team</button>
              <button className="px-12 py-5 bg-emerald-900/40 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-emerald-900/60 transition-all text-lg font-inter">Request Case Study</button>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full -ml-64 -mb-64 blur-[120px]" />
        </div>
      </section>
    </main>
  );
}
