import { FadeIn, HoverCard } from '../components/ui/motion-wrappers';

export default function Contact() {
  return (
    <main className="w-full relative font-inter bg-soma-off-white">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-24 px-8 text-center border-b border-slate-100">
        <FadeIn className="max-w-4xl mx-auto font-inter">
          <div className="flex justify-center mb-6 font-inter">
            <span className="inline-block px-4 py-1.5 bg-soma-gold/5 text-soma-gold text-[10px] font-bold tracking-[0.2em] uppercase rounded-full cursor-default font-inter">
              Connect Securely
            </span>
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-bold text-slate-900 mt-8 mb-8 leading-[1.05] tracking-tight">
            Begin Your <br /> <span className="italic text-soma-gold">SOMA</span> Integration.
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-inter font-light">
            Access high-authority medical recovery protocols. Our diagnostic approach ensures every step of your journey is engineered for physiological precision and cognitive restoration.
          </p>
        </FadeIn>
      </section>

      {/* Main Content Section - Two Columns */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Profile */}
          <FadeIn className="w-full lg:w-5/12 flex flex-col font-inter" direction="up">
            <div className="relative group mb-8 rounded-[32px] overflow-hidden">
              <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="/Photos/SomaContact.png" 
                alt="Portrait of Soma Mukherjee, Lead Clinical Architect" 
                className="relative w-full aspect-[4/5] object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <h2 className="text-3xl font-headline font-bold text-slate-900 tracking-tight mb-2">Soma Mukherjee</h2>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-8 font-inter">Lead Clinical Architect</h3>
            
            <div className="border-l-4 border-emerald-600 pl-8 mb-10 text-slate-700 italic text-xl leading-relaxed bg-slate-50/50 p-6 rounded-r-2xl hover:bg-slate-50 transition-colors font-headline font-bold">
              "Recovery is not an accident; it is an engineered outcome. We combine two decades of corporate leadership logic with cutting-edge medical science."
            </div>
            
            <p className="text-slate-500 leading-relaxed mb-10 font-inter font-light">
              With a distinguished 22-year tenure at Tata Consultancy Services (TCS), Soma Mukherjee brings a high-authority perspective to medical recovery. Her methodology integrates systemic efficiency with clinical precision to address the unique physiological stresses of high-performance professionals.
            </p>
            
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-emerald-700 transition-colors font-inter group">
              <span className="material-symbols-outlined text-emerald-600 group-hover:scale-110 transition-transform font-bold">verified</span>
              TCS Veteran / 22+ Years Leadership
            </div>
          </FadeIn>

          {/* Right Column - Intake Form Container */}
          <FadeIn className="w-full lg:w-7/12 mt-10 lg:mt-0 font-inter" direction="up" delay={0.2}>
            <div className="bg-soma-champagne/40 rounded-[40px] p-10 lg:p-16 relative overflow-hidden backdrop-blur-sm border border-soma-gold/20 shadow-xl group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-soma-gold/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-opacity group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 font-inter">
                <h3 className="text-3xl font-headline font-bold tracking-tight mb-2 text-slate-900">Diagnostic Intake</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-soma-gold mb-12 font-inter">Confidential Assessment Protocol</p>
                
                <form className="space-y-8 font-inter">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-inter">
                    <div className="font-inter">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800/60 mb-3 font-inter">Full Name & Professional Title</label>
                      <input 
                        type="text" 
                        placeholder="Dr. Jane Smith | Senior Executive" 
                        className="w-full bg-white border border-soma-gold/20 rounded-xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-soma-gold focus:bg-white hover:border-soma-gold/40 transition-all shadow-sm font-inter"
                      />
                    </div>
                    <div className="font-inter">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800/60 mb-3 font-inter">Inquiry Type</label>
                      <div className="relative font-inter">
                        <select className="w-full bg-white border border-soma-gold/20 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-soma-gold focus:bg-white hover:border-soma-gold/40 transition-all appearance-none cursor-pointer font-inter h-[54px]">
                          <option className="bg-white">Clinical Assessment</option>
                          <option className="bg-white">Workplace Audit</option>
                          <option className="bg-white">Media Inquiry</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-soma-gold pointer-events-none text-xl font-bold">expand_more</span>
                      </div>
                    </div>
                  </div>

                  <div className="font-inter">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800/60 mb-3 font-inter">Primary Diagnostic / Challenge</label>
                    <textarea 
                      rows="4" 
                      placeholder="Describe the physiological or cognitive symptoms requiring intervention..."
                      className="w-full bg-white border border-soma-gold/20 rounded-xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-soma-gold focus:bg-white hover:border-soma-gold/40 transition-all resize-none shadow-sm font-inter"
                    ></textarea>
                  </div>

                  <div className="pt-2 font-inter">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800/60 mb-4 font-inter">Deployment Mode</label>
                    <div className="flex flex-col sm:flex-row gap-6 font-inter text-center">
                      <label className="flex-1 bg-white border border-soma-gold/20 rounded-xl p-5 flex items-center justify-center gap-3 cursor-pointer hover:bg-white hover:border-soma-gold/50 transition-all group font-inter">
                        <input type="radio" name="deploymentMode" defaultChecked className="hidden peer text-center" />
                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 peer-checked:border-soma-gold flex items-center justify-center transition-colors font-bold text-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-soma-gold opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors font-inter text-center">Pune (In-Clinic)</span>
                      </label>
                      
                      <label className="flex-1 bg-white border border-soma-gold/20 rounded-xl p-5 flex items-center justify-center gap-3 cursor-pointer hover:bg-white hover:border-soma-gold/50 transition-all group font-inter text-center">
                        <input type="radio" name="deploymentMode" className="hidden peer text-center" />
                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 peer-checked:border-soma-gold flex items-center justify-center transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-soma-gold opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors font-inter text-center">Global (Virtual)</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-8 font-inter">
                    <button type="button" className="group w-full signature-gradient text-white font-bold tracking-[0.2em] uppercase text-sm py-5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-3 shadow-xl font-inter">
                      Initiate Assessment
                      <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform font-bold">arrow_forward</span>
                    </button>
                    <div className="flex items-center justify-center gap-3 mt-6 opacity-40 font-inter">
                      <span className="w-8 h-px bg-soma-gold"></span>
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-soma-gold font-inter text-center">Encrypted Protocol Server</span>
                      <span className="w-8 h-px bg-soma-gold"></span>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </FadeIn>
          
        </div>
      </section>

      {/* Footer Location Section */}
      <section className="py-32 px-8 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <FadeIn className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center font-inter">
          
          <div className="w-full md:w-5/12 font-inter">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-soma-gold mb-6 block font-inter">Clinical Infrastructure</span>
            <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight mb-8">Pune Headquarters.</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-12 font-inter font-light">
              Our physical laboratory and assessment center are located in the heart of Pune's technology corridor, serving as the hub for both local clinical work and global digital transformation strategies.
            </p>
            
            <div className="space-y-6 font-inter">
              <HoverCard className="flex gap-6 items-center p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-xl transition-all font-inter">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-emerald-800 text-2xl font-bold">location_on</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1 font-inter">Viman Nagar</div>
                  <div className="text-xs text-slate-400 font-inter">Pune, Maharashtra 411014, India</div>
                </div>
              </HoverCard>
              
              <HoverCard className="flex gap-6 items-center p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-xl transition-all group cursor-pointer font-inter">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-800 transition-colors duration-500">
                  <span className="material-symbols-outlined text-emerald-800 text-2xl group-hover:text-white transition-colors duration-500 font-bold">mail</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors font-inter">Secure Channel</div>
                  <div className="text-xs text-slate-400 font-inter">clinical@soma-recovery.com</div>
                </div>
              </HoverCard>
            </div>
          </div>

          <div className="w-full md:w-7/12 font-inter">
            <div className="relative group rounded-[40px] overflow-hidden border border-slate-200 p-2 bg-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop&grayscale" 
                alt="Pune Headquarters Building - Strategic Hub" 
                className="w-full aspect-[16/10] object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.01] hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
          
        </FadeIn>
      </section>
      
    </main>
  );
}
