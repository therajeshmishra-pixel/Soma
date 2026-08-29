import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/motion-wrappers';

export default function Portal() {
  const marqueeImages = [
    '/Photos/App Screens/Dashboard for therapist.png',
    '/Photos/App Screens/Mobile_Care Plan Builder.png',
    '/Photos/App Screens/Patient daily progress or report chart.png',
    '/Photos/App Screens/Mobile_Session Calendar.png',
    '/Photos/App Screens/Outcomes for Therapist.png',
    '/Photos/App Screens/Mobile_Nav items.png',
    '/Photos/App Screens/Counselling feedback for patient.png',
  ];

  return (
    <main className="overflow-x-hidden font-inter bg-white">
      {/* Minimalist Hero Section */}
      <section className="relative px-8 lg:px-24 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-soma-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn className="z-10 max-w-4xl mx-auto" delay={0.2}>
          <span className="inline-block text-soma-gold uppercase tracking-widest text-[10px] font-bold mb-6 bg-soma-gold/5 px-4 py-1.5 rounded-full shadow-sm">The SOMA Ecosystem</span>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            Continuous Care. <br/><span className="italic font-normal text-slate-500">Beyond the Clinic.</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto mb-8 font-inter">
            True therapeutic rehabilitation requires persistent support. The SOMA digital portal is an elegant, highly secure extension of our practice, wrapping around your daily life to ensure seamless communication, strict progress tracking, and professional oversight at every step.
          </p>
        </FadeIn>
      </section>

      {/* Floating Gallery Showcase */}
      <section className="relative px-4 pb-12 md:pb-24 lg:pb-32">
        <FadeIn delay={0.4} className="relative w-full max-w-6xl mx-auto h-[400px] lg:h-[600px] flex justify-center items-center perspective-1000">
           {/* Center Web Image */}
           <div className="absolute z-10 w-[75%] max-w-[900px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transform -translate-y-6 transition-transform duration-700 hover:scale-[1.02]">
             <img src="/Photos/App Screens/Patient Session calendar screen.png" alt="Clinical Interface" className="w-full h-auto object-cover"/>
             <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-slate-800 font-bold tracking-widest text-sm uppercase px-6 py-3 bg-white/90 rounded-full shadow-lg">Patient Portal Experience</span>
             </div>
           </div>
           
           {/* Left Mobile Image */}
           <div className="absolute z-20 left-4 lg:left-24 top-10 w-[160px] lg:w-[240px] rounded-[2.2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transform -rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-700">
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-900 rounded-b-xl z-20" />
             <img src="/Photos/App Screens/Mobile_Care Plan Builder.png" alt="Mobile Protocol" className="w-full h-auto object-cover"/>
           </div>
           
           {/* Right Mobile Image */}
           <div className="absolute z-20 right-4 lg:left-24 bottom-10 w-[160px] lg:w-[240px] rounded-[2.2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transform rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-700">
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-900 rounded-b-xl z-20" />
             <img src="/Photos/App Screens/Mobile_New meeting.png" alt="Telehealth" className="w-full h-auto object-cover"/>
           </div>
           
           <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-40 pointer-events-none" />
        </FadeIn>
      </section>

      {/* Elegant Infinite Marquee to Hint at Scale without Demanding Attention */}
      <section className="py-10 lg:py-12 bg-surface-container-lowest overflow-hidden relative shadow-sm">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10" />
        
        <div className="flex gap-8 px-4 opacity-50 hover:opacity-100 transition-opacity duration-700 w-max animate-carousel-slow">
          {[...marqueeImages, ...marqueeImages].map((img, idx) => (
            <div key={idx} className="w-[300px] lg:w-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm aspect-video">
              <img src={img} className="w-full h-full object-cover object-top transition-all duration-700" alt="Platform Capability" />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophical Value Section */}
      <section className="py-10 md:py-16 lg:py-24 px-8 lg:px-24">
        <StaggerContainer className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <StaggerItem className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-soma-gold/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img alt="Soma Wellness Touch" className="rounded-2xl shadow-xl relative z-10 w-full object-cover object-top" src="/Photos/SomaS.png"/>
            </div>
          </StaggerItem>
          <StaggerItem className="lg:w-1/2">
            <h2 className="font-headline text-4xl lg:text-5xl text-on-surface mb-8 leading-tight font-bold">
              Technology that <span className="text-soma-gold italic font-normal">cares.</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8 font-inter">
              The essence of therapeutic care is human connection. SOMA digital architecture isn't meant to replace the therapist-it's meant to empower the patient.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soma-gold/5 flex items-center justify-center text-soma-gold shadow-sm">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="font-inter">
                  <h4 className="font-headline font-bold text-lg mb-2">Empathetic Monitoring</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">No automated robotic feedback. Every metric you log is reviewed by expert eyes to safely titrate your recovery protocols.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soma-gold/5 flex items-center justify-center text-soma-gold shadow-sm">
                  <span className="material-symbols-outlined">shield_locked</span>
                </div>
                <div className="font-inter">
                  <h4 className="font-headline font-bold text-lg mb-2">Absolute Discretion</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Built with banking-level security gradients. Your physiological data, session notes, and treatment blueprints remain strictly confidential.</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Final Gentle CTA */}
      <section className="pb-12 md:pb-24 lg:pb-32 px-8 lg:px-24 text-center">
        <FadeIn className="max-w-4xl mx-auto rounded-[2rem] p-16 relative overflow-hidden font-inter shadow-xl bg-gradient-to-b from-white to-surface-container-lowest">
          <div className="absolute top-0 right-0 w-64 h-64 bg-soma-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="font-headline text-4xl mb-6 font-bold relative z-10 text-on-surface">Experience Elite Care Support</h2>
          <p className="text-secondary mb-8 text-lg relative z-10 max-w-xl mx-auto">Discover the peace of mind that comes from having your entire wellness strategy managed in one calm, sophisticated space.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg font-inter focus:ring-4 focus:ring-slate-900/20 hover:bg-slate-800 transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-white text-on-surface px-10 py-4 rounded-full font-bold text-lg font-inter focus:ring-4 focus:ring-slate-900/20 hover:bg-slate-50 transition-colors shadow-sm">
              Current Patient Login
            </button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
