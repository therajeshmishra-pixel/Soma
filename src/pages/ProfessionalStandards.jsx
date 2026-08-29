import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Award, Scale, Lock, Info, FileText } from 'lucide-react';
import { AnimatedBadge } from '../components/ui/motion-wrappers';

export default function ProfessionalStandards() {
  return (
    <main className="bg-soma-cream min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest pb-32">
      <SEO 
        title="Professional Standards | Soma Mukherjee Wellness" 
        description="The ethical and professional framework governing all Soma Mukherjee wellness services, ensuring safety, integrity, and depth in every interaction." 
        canonical="https://www.somamukherjee.com/standards" 
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        
        {/* Navigation */}
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-10 md:mb-20">
          <Link to="/" className="hover:text-soma-forest transition-colors">Home</Link>
          <ChevronRight size={10} className="text-stone-200" />
          <span className="text-soma-forest">Professional Standards</span>
        </nav>

        {/* Header */}
        <header className="mb-12 md:mb-24">
          <AnimatedBadge className="mb-10">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em] pl-4">Governance & Ethics</span>
          </AnimatedBadge>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline text-soma-forest tracking-tighter leading-[0.9] mb-8 md:mb-12">
            Professional <br /><span className="italic text-stone-400">Standards.</span>
          </h1>
          <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-2xl italic">
            The ethical and professional framework governing all Soma Mukherjee wellness services - ensuring safety, integrity, and depth in every interaction.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8">
          
          <section className="bg-white p-6 lg:p-8 rounded-[24px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full blur-[40px] -mr-16 -mt-16 transition-colors group-hover:bg-stone-100" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-soma-forest rounded-[10px] flex items-center justify-center text-stone-400">
                  <Info size={14} strokeWidth={1.2} />
                </div>
                <h2 className="!text-base font-headline text-soma-forest tracking-tight italic">01. Overview</h2>
              </div>
              <p className="!text-[13px] text-stone-500 font-light leading-relaxed">
                Soma Mukherjee is a certified yoga therapist and wellness educator with over 25 years of professional experience. This document outlines the standards governing all services. All practitioners associated with this platform are required to uphold these principles without exception.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 lg:p-8 rounded-[24px] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-soma-forest rounded-[10px] flex items-center justify-center text-stone-400">
                  <Award size={14} strokeWidth={1.2} />
                </div>
                <h2 className="!text-base font-headline text-soma-forest tracking-tight italic">02. Accreditation</h2>
              </div>
              <ul className="space-y-2">
                {[
                  'Certified Yoga Professional - Ministry of AYUSH, Govt of India',
                  'Corporate Wellness Partnership Certificate - TCS',
                  'Masters Degree in Yoga and Science of Living - JVB University',
                  'PG Diploma in Fitness Management (Symbiosis) – Resistance Training, Aerobics, and Yoga & Meditation for Personal Training',
                  'Masters Diploma in Personnel Management - Symbiosis Institute'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-500">
                    <div className="w-1 h-1 rounded-full bg-stone-200 group-hover:bg-soma-forest transition-colors" />
                    <span className="!text-[13px] font-light italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white p-6 lg:p-8 rounded-[24px] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-soma-forest rounded-[10px] flex items-center justify-center text-stone-400">
                  <Scale size={14} strokeWidth={1.2} />
                </div>
                <h2 className="!text-base font-headline text-soma-forest tracking-tight italic">03. Scope of Practice</h2>
              </div>
              <div className="space-y-4">
                <p className="!text-[13px] text-stone-500 font-light leading-relaxed">
                  Our services are wellness-oriented and complementary in nature. They include yoga therapy, mindful movement, breathwork, stress management, sleep hygiene, and corporate wellness facilitation.
                </p>
                <div className="p-5 bg-stone-50 rounded-[16px]">
                   <p className="!text-[12px] text-stone-400 font-light italic leading-relaxed">
                    Services do not include medical diagnosis, prescription of medication, medical psychotherapy, or emergency mental health intervention. Participants are encouraged to consult their GP for medical concerns.
                   </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 lg:p-8 rounded-[24px] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-soma-forest rounded-[10px] flex items-center justify-center text-stone-400">
                  <Lock size={14} strokeWidth={1.2} />
                </div>
                <h2 className="!text-base font-headline text-soma-forest tracking-tight italic">04. Confidentiality</h2>
              </div>
              <p className="!text-[13px] text-stone-500 font-light leading-relaxed">
                All client information - health disclosures, session content, and assessment responses - is treated as strictly confidential. Session notes are stored securely and are accessible only to Soma Mukherjee.
              </p>
            </div>
          </section>

          <section className="bg-soma-forest text-white p-6 lg:p-8 rounded-[24px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -mr-16 -mt-16" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-[10px] flex items-center justify-center text-stone-400">
                  <FileText size={14} strokeWidth={1.2} />
                </div>
                <h2 className="!text-base font-headline text-white tracking-tight italic">05. Complaints & Contact</h2>
              </div>
              <p className="!text-[13px] text-stone-400 font-light leading-relaxed mb-4">
                Concerns may be raised by emailing <a href="mailto:contact@somamukherjee.com" className="text-white underline">contact@somamukherjee.com</a>. We aim to acknowledge within 5 working days and provide a formal written response within 21 working days.
              </p>
              <div className="flex gap-6 text-[9px] font-bold text-stone-500 uppercase tracking-[0.4em]">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
