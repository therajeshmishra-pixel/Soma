import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, AnimatedBadge } from '../components/ui/motion-wrappers';
import AboutHero from '../components/ui/about-hero';
import { ShieldCheck, GraduationCap, Award, ArrowRight, Building2, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-transparent min-h-screen font-inter selection:bg-emerald-200 selection:text-emerald-950 overflow-x-hidden relative text-stone-900">
      <SEO
        title="About Soma Mukherjee | SOMA"
        description="Soma Mukherjee is a yoga therapist and corporate wellness practitioner with three post-graduate qualifications, Ayush Level 3 certification, and 22 years embedded at TCS Pune."
        canonical="https://www.somamukherjee.com/about"
      />

      {/* Ambient Canvas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#faf9f6]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,1)_0%,rgba(247,242,232,0.82)_42%,rgba(246,249,244,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,transparent_0%,rgba(166,138,86,0.18)_32%,transparent_64%),linear-gradient(240deg,transparent_10%,rgba(26,51,41,0.12)_48%,transparent_80%)]" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/50">
        <AboutHero />
      </section>

      {/* Who she is — one paragraph */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-amber-600">About Soma</div>
              <h2 className="text-3xl md:text-5xl font-headline text-stone-900 leading-tight mb-0">
                Soma Mukherjee
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-stone-700 text-lg md:text-xl leading-relaxed font-light">
                Soma Mukherjee is a yoga therapist and corporate wellness practitioner based in Pune. She works with organisations and individuals dealing with the physical and psychological effects of sustained work pressure — back pain, sleep disruption, chronic fatigue, RSI, and burnout.
              </p>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed font-light">
                She does not describe what she does as teaching yoga. The work is somatic — using the body's own regulatory systems to undo what overwork and stress have done to it. She assesses each person or team individually, designs a structured protocol, and tracks progress across every session.
              </p>
              <p className="text-stone-500 text-base leading-relaxed font-light">
                She is based in Pune. She works on-site and online. She responds to every enquiry personally.
              </p>
              <div className="pt-2">
                <Link
                  to="/journey"
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-amber-700 transition-colors group"
                >
                  Read the full story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCS Tenure — stated as fact */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/84 backdrop-blur-xl border border-white rounded-[28px] p-8 md:p-10 shadow-xl shadow-amber-100/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-300/15 to-orange-300/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.06em] text-amber-600 flex items-center gap-2">
                  <Building2 size={14} /> Corporate track record
                </div>
                <h2 className="text-3xl md:text-4xl font-headline text-stone-900 leading-tight mb-6">
                  22 years embedded at TCS Pune.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 italic">2001 to 2023.</span>
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed font-light max-w-3xl">
                  Full-time wellness practitioner across Tata Consultancy Services Pune delivery centres. Five days per week. Not as an external vendor or a quarterly speaker — as a practitioner embedded inside one of India's largest technology workplaces, working directly with the people carrying the pressure of it.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-4 lg:min-w-[180px]">
                {[
                  { val: '22', label: 'Years at TCS' },
                  { val: '5×', label: 'Sessions per week' },
                  { val: '1,000+', label: 'Professionals' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-[18px] border border-stone-100 bg-white p-5 text-center shadow-sm">
                    <div className="text-2xl md:text-3xl font-headline text-stone-900 mb-1">{stat.val}</div>
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-amber-600">Academic qualifications</div>
            <h2 className="text-3xl md:text-4xl font-headline text-stone-900 leading-tight max-w-2xl">
              Three post-graduate programmes.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 italic">Each two years.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                degree: 'M.A. in Yoga & Science of Living',
                institution: 'Jain Vishva Bharati University',
                duration: 'Two-year post-graduate degree',
                note: 'The academic foundation of the therapeutic practice — bridging classical yogic science with applied health and lifestyle science.',
                accent: 'border-l-amber-400',
              },
              {
                degree: 'Masters Diploma in Personnel Management & Industrial Relations',
                institution: 'Symbiosis, Pune',
                duration: 'Two-year post-graduate programme',
                note: 'Provides direct fluency in HR priorities, workforce dynamics, and organisational constraints — essential for effective corporate practice.',
                accent: 'border-l-teal-400',
              },
              {
                degree: 'Post Graduate Diploma in Fitness Management',
                institution: 'Symbiosis, Pune',
                duration: 'Two-year post-graduate programme',
                note: 'Bridges yoga therapy with mainstream fitness and health science, grounding the practice in evidence-based physical wellness.',
                accent: 'border-l-rose-400',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`group flex flex-col rounded-[22px] border border-white/80 border-l-[4px] ${item.accent} bg-white/78 py-7 pl-7 pr-6 shadow-[0_8px_30px_rgba(120,113,108,0.06)] backdrop-blur-xl transition-all duration-500 hover:bg-white hover:shadow-[0_16px_50px_rgba(120,113,108,0.1)] hover:-translate-y-1`}
              >
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">{item.duration}</div>
                <h3 className="text-stone-900 font-headline text-xl md:text-2xl mb-2 leading-tight">{item.degree}</h3>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-amber-700 mb-4">{item.institution}</div>
                <p className="text-stone-500 text-sm leading-relaxed font-light mt-auto">{item.note}</p>
              </motion.div>
            ))}
          </div>

          {/* Ayush + Additional training */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Ayush — given its own card, it's government-recognised */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group flex items-start gap-6 rounded-[22px] border border-white/80 border-l-[4px] border-l-violet-400 bg-white/78 py-7 pl-7 pr-6 shadow-[0_8px_30px_rgba(120,113,108,0.06)] backdrop-blur-xl transition-all duration-500 hover:bg-white hover:shadow-[0_16px_50px_rgba(120,113,108,0.1)] hover:-translate-y-1"
            >
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 border border-violet-100 text-violet-600 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">Government certification</div>
                <h3 className="text-stone-900 font-headline text-xl mb-1">Evaluator — Yoga Certification Board</h3>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-violet-700 mb-3">Ayush Level 3 · Ministry of Ayush, Govt. of India</div>
                <p className="text-stone-500 text-sm leading-relaxed font-light">Senior-level national certification in therapeutic yoga practice and assessment. Directly relevant to clinical and corporate wellness work.</p>
              </div>
            </motion.div>

            {/* Additional training — plain, no elevation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="flex items-start gap-6 rounded-[22px] border border-white/80 border-l-[4px] border-l-stone-300 bg-white/60 py-7 pl-7 pr-6 shadow-[0_4px_20px_rgba(120,113,108,0.04)] backdrop-blur-xl"
            >
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-50 border border-stone-100 text-stone-400">
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">Additional training</div>
                <p className="text-stone-600 text-base font-light leading-relaxed">
                  Certificate in Stress Management, Harvard Medical School
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-India Championship — stated once, factually */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-amber-600 flex items-center gap-2">
                <Award size={14} /> Competitive mastery
              </div>
              <h2 className="text-3xl md:text-4xl font-headline text-stone-900 leading-tight mb-4">
                Two-time All-India Yoga Champion.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                National titles in 1985 and 1986. The competitive foundation that preceded the teaching career and established the discipline her corporate work is built on.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-7 md:p-8 shadow-sm">
              <div className="text-stone-700 text-base md:text-lg leading-relaxed italic font-light">
                "Growing up in Jamshedpur, her father — a Santosh Trophy football player and Ranji Trophy cricketer — instilled a standard of consistent, unyielding dedication that preceded the yoga practice and shaped everything that followed."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage and Recognition - Editorial Flow */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-12 border-b border-white/50 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-100/30 to-orange-50/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/4" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-16 md:mb-24">
            <div className="mb-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 flex justify-center items-center gap-3">
              <span className="w-8 md:w-12 h-[1px] bg-amber-600/40" />
              Lineage & Early Recognition
              <span className="w-8 md:w-12 h-[1px] bg-amber-600/40" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-headline text-stone-900 leading-[1.05] tracking-tight">
              Rooted in classical lineage.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 italic">Recognized by industry.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-20 md:gap-32">
            
            {/* Story Block 1: Lineage */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center max-w-2xl mx-auto lg:mx-0 w-full group">
                {/* Photo 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20, rotate: -6 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-0 top-4 md:top-8 w-[75%] md:w-[70%] z-10"
                >
                  <div className="p-2 pb-10 md:p-3 md:pb-12 bg-white rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:rotate-[-2deg] transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/Photos/Soma%20Journey/Biswanath%20Ghosh%20%20nephew%20Paramjansa%20Yogananda%20with%20Soma.jpeg" 
                        alt="Soma with Biswanath Ghosh"
                        className="w-full h-full object-cover grayscale-[20%]"
                      />
                    </div>
                    <div className="absolute bottom-3 md:bottom-4 left-4 md:left-5 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400">c. 1980s · Archival</div>
                  </div>
                </motion.div>

                {/* Photo 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20, y: 20, rotate: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute right-0 bottom-4 md:bottom-8 w-[65%] md:w-[60%] z-20"
                >
                  <div className="p-2 pb-8 md:p-3 md:pb-10 bg-white rounded-[4px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:rotate-2 transition-all duration-500">
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src="/Photos/Soma%20Journey/Biswanath%20Ghosh%20with%20Soma.png" 
                        alt="Biswanath Ghosh teaching Soma"
                        className="w-full h-full object-cover object-top grayscale-[20%]"
                      />
                    </div>
                    <div className="absolute bottom-2 md:bottom-3 left-3 md:left-4 text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-stone-400">Classical Lineage</div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Award size={32} strokeWidth={1} className="text-amber-300 mb-6" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-6 leading-tight">
                  The Direct Lineage
                </h3>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light mb-6">
                  Her foundation was shaped directly by Biswanath Ghosh, nephew of Paramahansa Yogananda.
                </p>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                  This was not a modern commercial training—it was a deep, classical immersion where the practice was treated as a fundamental science of living, instilling a discipline that would last decades.
                </p>
              </motion.div>
            </div>

            {/* Story Block 2: Russi Mody & J.J. Irani */}
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <Building2 size={32} strokeWidth={1} className="text-stone-300 mb-6" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-6 leading-tight">
                  Early Corporate Honours
                </h3>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light mb-6">
                  Growing up in Jamshedpur, her consecutive All-India Championship victories captured institutional attention.
                </p>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                  Long before "corporate wellness" was an industry term, she was being personally honoured by titans like Russi Mody and Tata Steel Managing Director J.J. Irani—early acknowledgments of the seriousness she brought to her craft.
                </p>
              </motion.div>

              <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center max-w-2xl mx-auto lg:mx-0 w-full">
                {/* J J Irani Photo */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -10, y: 40 }}
                  whileInView={{ opacity: 1, rotate: -6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-4 md:left-10 top-4 md:top-10 w-[70%] sm:w-[65%] z-10"
                >
                  <div className="p-3 md:p-4 pb-12 md:pb-16 bg-white rounded-[6px] md:rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] group hover:z-30 hover:-rotate-2 transition-all duration-500">
                    <img 
                      src="/Photos/Soma%20Journey/With%20Managing%20Director%20J%20J%20Irani%20Tata%20Steel.png" 
                      alt="With J. J. Irani"
                      className="w-full h-auto object-cover rounded-[2px]"
                    />
                    <div className="absolute bottom-4 left-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">With J.J. Irani</div>
                  </div>
                </motion.div>

                {/* Russi Mody Photo */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 10, y: -20 }}
                  whileInView={{ opacity: 1, rotate: 4, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute right-4 md:right-10 bottom-4 md:bottom-10 w-[75%] sm:w-[70%] z-20"
                >
                  <div className="p-3 md:p-4 pb-12 md:pb-16 bg-white rounded-[6px] md:rounded-[8px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] group hover:z-30 hover:-translate-y-4 hover:rotate-2 transition-all duration-500">
                    <img 
                      src="/Photos/Soma%20Journey/Soma%20with%20famous%20Russi%20Modi%20receiving%20prize.png" 
                      alt="Receiving prize from Russi Mody"
                      className="w-full h-auto object-cover rounded-[2px]"
                    />
                    <div className="absolute bottom-4 left-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">Honoured by Russi Mody</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Story Block 3: The Magazine */}
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <BookOpen size={32} strokeWidth={1} className="text-stone-300 mb-6" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-6 leading-tight">
                  Institutional Spotlight
                </h3>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light mb-6">
                  A full-page feature in the official Tata Steel magazine, cementing her discipline and mastery at a national level early in her career.
                </p>
                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                  This public recognition was a testament to the fact that her approach to wellness was already being valued by leading institutions, long before it became an industry standard.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative group order-1 lg:order-2 w-full flex justify-center lg:justify-end"
              >
                {/* Photo frame styling */}
                <div className="p-3 md:p-4 pb-12 md:pb-16 bg-white rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 w-full max-w-sm">
                  <div className="relative overflow-hidden rounded-[4px] border border-stone-100 bg-stone-50 p-1 md:p-2">
                    <img 
                      src="/Photos/Soma%20Journey/Tata%20Steel%20back%20page%20Magazine%20published%20Soma%20full%20page.png" 
                      alt="Featured in Tata Steel Magazine"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="absolute bottom-4 right-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">Tata Steel Publication</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Three testimonials — specific, outcome-led */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 border-b border-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-cyan-600">What clients say</div>
          <h2 className="text-3xl md:text-4xl font-headline text-stone-900 mb-12 max-w-2xl leading-tight">
            Not what they thought of the sessions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 italic">What changed after.</span>
          </h2>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                quote: "It has been a privilege to be Soma's student for more than a decade. She helped me and many of my friends achieve things we never imagined — completing a half marathon in our late fifties, having never run a day in our lives.",
                author: 'Arun Bahulkar',
                role: 'Ex TCS, TRDDC',
                outcome: 'Long-term TCS associate · strength and stamina',
                initials: 'AB',
                color: 'bg-cyan-50 text-cyan-700 border-cyan-100',
              },
              {
                quote: "Soma's presence went a long way in establishing our wellbeing — and her gentle, unhurried demeanour was something everyone responded to. We are still grateful for the part she played in our professional and personal lives.",
                author: 'Shanth Mannige',
                role: 'Co-Founder & Executive Director, AccelTree Software',
                outcome: 'Senior organisational leader · workplace wellbeing',
                initials: 'SM',
                color: 'bg-blue-50 text-blue-700 border-blue-100',
              },
            ].map((item, i) => (
              <StaggerItem key={i} className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-7 md:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-100/30 hover:-translate-y-1 transition-all duration-500">
                <p className="text-stone-700 text-lg leading-relaxed italic mb-8 font-light">"{item.quote}"</p>
                <div className="flex items-center gap-4 border-t border-stone-100 pt-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-xs ${item.color}`}>{item.initials}</div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">{item.author}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{item.role}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700 mt-1.5">{item.outcome}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="bg-gradient-to-br from-amber-500 to-rose-500 rounded-[32px] p-7 md:p-9 shadow-xl shadow-amber-500/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none" />
            <p className="text-white text-xl md:text-2xl leading-relaxed italic mb-8 max-w-4xl relative z-10 font-light">
              "Soma is an exceptional yoga guide and wellness expert. She tailors her practice to each person's unique needs and gently holds you accountable. Her thoughtful stretching programme helped me significantly reduce chronic knee pain I'd been dealing with for years."
            </p>
            <div className="flex items-center gap-4 relative z-10 border-t border-white/20 pt-6">
              <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center font-bold text-xs text-white backdrop-blur-md">SB</div>
              <div>
                <div className="font-bold text-white text-sm">Souvik Barat, PhD</div>
                <div className="text-white/80 text-xs mt-0.5">Distinguished Principal Scientist, TCS Research</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 mt-1.5">Individual client · chronic knee pain relief</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-3 bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md group"
            >
              Read all 20 client testimonials
              <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section className="py-12 md:py-16 px-5 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/40 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white rounded-[40px] lg:rounded-[64px] p-8 md:p-10 lg:p-12 shadow-2xl shadow-rose-100/40 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-amber-300/15 to-rose-300/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <AnimatedBadge className="mb-6 bg-white border border-rose-100 text-rose-500 shadow-sm inline-flex px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.3em]">
              Start here
            </AnimatedBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-stone-900 mb-5 leading-[1.1]">
              The first conversation costs nothing.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light">
              Write to Soma directly. She responds to every enquiry personally, within one business day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-stone-900 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-colors shadow-md group"
            >
              Write to Soma
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="h-12 md:h-16 bg-transparent" />
    </main>
  );
}
