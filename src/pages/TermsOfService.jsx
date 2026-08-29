import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <main className="bg-soma-cream min-h-screen font-inter selection:bg-stone-200 selection:text-soma-forest pb-32">
      <SEO 
        title="Terms of Service | Soma Mukherjee Wellness" 
        description="Terms of Service for Soma Mukherjee Wellness. Read our agreement, policies, and terms for participating in our wellness programs." 
        canonical="https://www.somamukherjee.com/terms" 
      />
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 lg:py-24">

        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-16">
          <Link to="/" className="hover:text-soma-forest transition-colors">Home</Link>
          <span className="text-stone-200">·</span>
          <span className="text-soma-forest">Terms of Service</span>
        </nav>

        <header className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline text-soma-forest tracking-tighter leading-[0.9] mb-8">
            Terms of <br /><span className="italic text-stone-400">Service.</span>
          </h1>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Effective: 1 April 2025 · Last reviewed: 26 April 2026</p>
        </header>

        <div className="space-y-6 text-stone-600 font-light leading-relaxed">

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">01. Agreement</h2>
            <p className="!text-[13px]">These Terms of Service constitute a legally binding agreement between you ("the Client") and Soma Mukherjee ("we", "us") governing your access to and use of this website, wellness assessments, and associated programmes. By accessing our website or enrolling in any programme, you confirm that you have read, understood, and agree to these Terms. These Terms should be read alongside our Privacy Policy and Professional Standards, which form part of the overall agreement.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">02. Services</h2>
            <p className="!text-[13px]">Soma Mukherjee provides individual wellness programmes (yoga therapy, breathwork, lifestyle guidance), corporate wellness facilitation, online wellness assessments, and educational content. All services are wellness-oriented and complementary in nature. They do not constitute medical advice, diagnosis, or treatment.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">03. Eligibility</h2>
            <p className="!text-[13px]">You must be at least 18 years of age (or have written parental consent), have the legal capacity to enter a binding agreement, and accurately represent your health status. You are responsible for disclosing any medical conditions, injuries, or medications that may affect your safe participation. We reserve the right to modify or decline services where health or safety concerns apply.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">04. Participation</h2>
            <p className="!text-[13px]">By enrolling, you agree to attend sessions as agreed and provide at least 24 hours' notice of cancellations. You agree to treat all practitioners with respect - harassment or inappropriate conduct will result in immediate termination of services. You accept responsibility for your own health decisions; our guidance is advisory. Sessions may only be recorded with prior written consent.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">05. Payment and Refunds</h2>
            <div className="space-y-3">
              <p className="!text-[13px]">Programme fees are quoted in Indian Rupees (INR) and are payable in full prior to commencement unless a payment plan is agreed in writing. We accept bank transfer, UPI, and major credit/debit cards.</p>
              <p className="p-4 bg-stone-50 rounded-[16px] italic !text-[12px] text-stone-400">
                Refund policy: 14+ days' notice - full refund less 5% administration fee. 7–13 days' notice - 50% refund. Less than 7 days' notice - no refund. Cancellation by us - full refund or rescheduled session.
              </p>
              <p className="!text-[13px]">Refund requests must be submitted in writing to <a href="mailto:contact@somamukherjee.com" className="text-soma-forest underline underline-offset-4">contact@somamukherjee.com</a>.</p>
            </div>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">06. Limitation of Liability</h2>
            <p className="!text-[13px]">Our total liability for any claim shall not exceed the total amount paid by you in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. Nothing in these Terms limits liability for death or personal injury caused by our negligence or fraud.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">07. Intellectual Property</h2>
            <p className="!text-[13px]">All content on this website - including text, imagery, programme materials, assessment tools, and brand identity - is the exclusive intellectual property of Soma Mukherjee. You may not reproduce, redistribute, or use any content for commercial purposes without prior written permission.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">08. Termination</h2>
            <p className="!text-[13px]">Either party may terminate a programme agreement by written notice. We reserve the right to suspend or terminate access immediately if you breach these Terms, provide false information, or engage in inappropriate conduct.</p>
          </section>

          <section className="bg-white p-5 lg:p-8 rounded-[24px] shadow-sm border border-stone-100">
            <h2 className="!text-base font-headline text-soma-forest mb-2 italic">09. Governing Law</h2>
            <p className="!text-[13px]">These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra. We reserve the right to amend these Terms at any time; changes will be posted on this page.</p>
          </section>

          <section className="bg-soma-forest text-stone-300 p-5 lg:p-8 rounded-[24px]">
            <h2 className="!text-base font-headline text-white mb-2 italic">10. Contact</h2>
            <p className="!text-[13px] mb-3">Soma Mukherjee, Pune, Maharashtra, India. Email: <a href="mailto:contact@somamukherjee.com" className="text-white underline underline-offset-4">contact@somamukherjee.com</a></p>
            <div className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/standards" className="hover:text-white transition-colors">Professional Standards</Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
