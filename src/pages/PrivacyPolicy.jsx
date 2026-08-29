import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <main className="bg-soma-cream min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest pb-32">
      <SEO 
        title="Privacy Policy | Soma Mukherjee Wellness" 
        description="Privacy Policy for Soma Mukherjee Wellness. Learn how we collect, use, and protect your personal and health information." 
        canonical="https://www.somamukherjee.com/privacy" 
      />
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 lg:py-24">

        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-16">
          <Link to="/" className="hover:text-soma-forest transition-colors">Home</Link>
          <span className="text-stone-200">·</span>
          <span className="text-soma-forest">Privacy Policy</span>
        </nav>

        <header className="mb-12 md:mb-20">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline text-soma-forest tracking-tighter leading-[0.9] mb-8">
            Privacy <br /><span className="italic text-stone-400">Policy.</span>
          </h1>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Effective: 1 April 2025 · Last reviewed: 26 April 2026</p>
        </header>

        <div className="space-y-6 text-stone-600 font-light leading-relaxed">

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">01. Overview</h2>
            <p className="!text-[13px]">Soma Mukherjee ("we", "us") operates this website and associated wellness programmes. We are committed to protecting the personal information you share with us. This policy explains how that information is collected, used, and stored. By using our services, you agree to the practices described here.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">02. Information We Collect</h2>
            <div className="space-y-3">
              <p className="!text-[13px]">We collect information you provide directly, including your name, email address, phone number, responses to our wellness assessment, and general health context shared during consultations.</p>
              <p className="p-4 bg-stone-50 rounded-[16px] italic !text-[12px] text-stone-400">
                We also collect limited technical data automatically - such as browser type, device type, and general geographic region - for analytics purposes. We do not collect payment card details.
              </p>
            </div>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">03. How We Use Your Information</h2>
            <p className="!text-[13px]">Your information is used to respond to enquiries, deliver wellness programmes and assessments, send session reminders, improve our website, and comply with legal obligations. We do not use your data for advertising, profiling, or automated decision-making.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">04. Storage and Security</h2>
            <p className="!text-[13px]">Data is stored on encrypted servers within India or the EEA. We use TLS/SSL encryption for data in transit and limit access to authorised personnel only. Assessment data is retained for a maximum of 24 months unless you are an active programme participant.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">05. Sharing</h2>
            <p className="!text-[13px]">We do not sell, rent, or trade your personal information. We may share limited data with trusted service providers who process data on our behalf under strict confidentiality agreements. Your health information remains strictly confidential.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">06. Your Rights</h2>
            <p className="!text-[13px]">Under the Digital Personal Data Protection Act, 2023 and other applicable law, you have the right to access, correct, or request deletion of your personal data. To exercise any right, email <a href="mailto:contact@somamukherjee.com" className="text-soma-forest underline underline-offset-4">contact@somamukherjee.com</a>.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">07. Cookies</h2>
            <p className="!text-[13px]">We use minimal, privacy-respecting cookies for session management and anonymous aggregate analytics. We do not use advertising or tracking cookies. You may disable cookies in your browser settings.</p>
          </section>

          <section className="bg-soma-forest text-stone-300 p-5 lg:p-8 rounded-[24px]">
            <h2 className="!text-base font-headline text-white mb-2 italic">08. Contact</h2>
            <p className="!text-[13px] mb-3">Soma Mukherjee, Pune, Maharashtra, India. Email: <a href="mailto:contact@somamukherjee.com" className="text-white underline underline-offset-4">contact@somamukherjee.com</a></p>
            <div className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/standards" className="hover:text-white transition-colors">Professional Standards</Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
