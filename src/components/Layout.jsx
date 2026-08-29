import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, Outlet } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  BookOpen, 
  Users, 
  Building, 
  Leaf, 
  Heart, 
  Wand2, 
  Video, 
  Moon, 
  BrainCircuit, 
  Monitor, 
  Activity, 
  ShieldCheck, 
  MessageSquare,
  Waves,
  Sparkles,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementBar from './AnnouncementBar';
import RegistrationModal from './RegistrationModal';

const BotanicalLeaf = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8">
      <path d="M20 180 Q 80 120 160 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M160 20 C 140 30 130 60 130 60 C 145 50 170 40 160 20 Z" fill="currentColor" opacity="0.85"/>
      <path d="M140 50 C 160 60 175 90 175 90 C 160 85 135 65 140 50 Z" fill="currentColor" opacity="0.6"/>
      <path d="M120 65 C 95 65 75 90 75 90 C 90 80 120 80 120 65 Z" fill="currentColor" opacity="0.75"/>
      <path d="M100 100 C 120 110 135 140 135 140 C 120 135 95 115 100 100 Z" fill="currentColor" opacity="0.5"/>
      <path d="M80 115 C 55 115 35 140 35 140 C 50 130 80 130 80 115 Z" fill="currentColor" opacity="0.65"/>
    </g>
  </svg>
);

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileCorporateOpen, setIsMobileCorporateOpen] = useState(false);
  
  const programsRef = useRef(null);
  const corporateRef = useRef(null);
  const closeTimerRef = useRef(null);
  const corpCloseTimerRef = useRef(null);
  const location = useLocation();

  const PROGRAMS = [
    { id: 'sleep', icon: Moon, label: 'Sleep Architecture', desc: 'Recalibrating your circadian rhythms', pillar: '01', colorClass: 'text-indigo-500', bgClass: 'bg-white border-stone-100/50' },
    { id: 'cognitive', icon: BrainCircuit, label: 'Cognitive Calm', desc: 'Restoring inner mental spaciousness', pillar: '02', colorClass: 'text-sky-500', bgClass: 'bg-white border-stone-100/50' },
    { id: 'digital', icon: Monitor, label: 'Ergonomics Wellness', desc: 'Relieving the aches of modern desk life', pillar: '03', colorClass: 'text-emerald-500', bgClass: 'bg-white border-stone-100/50' },
    { id: 'metabolic', icon: Activity, label: 'Metabolic Resilience', desc: 'Biological vitality and sustained energy', pillar: '04', colorClass: 'text-amber-500', bgClass: 'bg-white border-stone-100/50' },
    { id: 'sanctuary', icon: ShieldCheck, label: 'Executive Sanctuary', desc: 'Bespoke one-on-one wellness support', pillar: '05', colorClass: 'text-rose-500', bgClass: 'bg-white border-stone-100/50' },
    { id: 'counselling', icon: MessageSquare, label: 'Counselling & Care', desc: 'A compassionate space for what\'s hard', pillar: '06', isSpecial: true, colorClass: 'text-violet-500', bgClass: 'bg-white border-stone-100/50' },
  ];

  const CORPORATE_LINKS = [
    { id: 'workshops', icon: Users, label: 'Strategic Workshops', desc: 'Leadership resilience and team wellbeing', colorClass: 'text-amber-600', bgClass: 'bg-white border-stone-100/50' },
    { id: 'wellness', icon: Building, label: 'Workplace Systems', desc: 'Designing environments for human health', colorClass: 'text-teal-600', bgClass: 'bg-white border-stone-100/50' },
    { id: 'desktop', icon: Leaf, label: 'Desktop Interventions', desc: 'Micro-recovery tools for "always-on" teams', colorClass: 'text-rose-600', bgClass: 'bg-white border-stone-100/50' },
    { id: 'connection', icon: Heart, label: 'The Connection', desc: 'Facilitated safe-space dialogue', colorClass: 'text-indigo-600', bgClass: 'bg-white border-stone-100/50' },
    { id: 'architect', icon: Wand2, label: 'Wellness Architect', desc: 'Tailor-made institutional program design', colorClass: 'text-sky-600', bgClass: 'bg-white border-stone-100/50', isSpecial: true },
  ];

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setIsCorporateOpen(false);
    setIsMobileProgramsOpen(false);
    setIsMobileCorporateOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (programsRef.current && !programsRef.current.contains(e.target)) setIsProgramsOpen(false);
      if (corporateRef.current && !corporateRef.current.contains(e.target)) setIsCorporateOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navClass = ({ isActive }) => 
    `font-inter text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
      isActive 
        ? 'text-soma-forest border-b-2 border-amber-500 pb-1' 
        : 'text-stone-600 hover:text-amber-600'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block py-6 px-8 font-inter text-[14px] font-bold uppercase tracking-[0.2em] transition-all ${
      isActive 
        ? 'text-soma-forest bg-stone-50 border-l-4 border-soma-forest' 
        : 'text-stone-400 hover:text-soma-forest hover:bg-stone-50 border-l-4 border-transparent'
    }`;

  return (
    <div className="flex flex-col min-h-screen selection:bg-stone-200 selection:text-soma-forest">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-white focus:text-soma-forest font-bold shadow-lg">Skip to main content</a>
      <RegistrationModal />

      <div data-site-header className="sticky top-0 z-[1000] w-full">
        <AnnouncementBar />
      
      <header className="w-full bg-white/90 backdrop-blur-xl border-b border-stone-100 shadow-[0_8px_24px_rgba(26,51,41,0.04)]">
        <div className="flex justify-between items-center w-full px-5 md:px-8 lg:px-10 py-3 md:py-4 max-w-screen-2xl mx-auto relative z-[1002] bg-transparent">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src="/Photos/SomaLogo1.svg" alt="SOMA" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
          </Link>
          
          {/* Desktop/Tablet Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            <NavLink to="/" className={navClass}>Home</NavLink>

            {/* Practices Dropdown */}
            <div
              className="relative"
              ref={programsRef}
              onMouseEnter={() => {
                clearTimeout(closeTimerRef.current);
                setIsProgramsOpen(true);
              }}
              onMouseLeave={() => {
                closeTimerRef.current = setTimeout(() => setIsProgramsOpen(false), 150);
              }}
            >
              <Link
                to="/programs"
                className={`flex items-center gap-2 font-inter text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  location.pathname.startsWith('/programs') ? 'text-soma-forest underline underline-offset-8 decoration-amber-500' : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                Personal Therapy
                <ChevronDown size={14} className={`transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-[440px] bg-white rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-[#E5E0D8]/80 overflow-hidden z-[999]"
                  >
                    <div className="relative px-8 pt-8 pb-5">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8E4D9]/40 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none" />
                      <BotanicalLeaf className="absolute top-0 right-0 w-48 h-48 text-[#6A7F6C]/20 -mr-6 -mt-6 pointer-events-none transform -rotate-12" />
                      
                      <div className="relative z-10">
                        <p className="text-[9px] font-bold text-soma-gold uppercase tracking-[0.3em] mb-2">Wellness Pillars</p>
                        <p className="text-xl font-headline italic bg-gradient-to-br from-amber-600 to-emerald-600 bg-clip-text text-transparent mb-3">The architecture<br/>of return.</p>
                        <div className="w-6 h-0.5 bg-soma-gold/50 mb-3" />
                        <p className="text-[12px] text-stone-500 font-light max-w-[240px] leading-relaxed">
                          Science-backed practices for modern living, rooted in timeless wisdom.
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <div className="flex flex-col gap-1">
                        {PROGRAMS.map((prog) => (
                          <Link
                            key={prog.id}
                            to={`/programs/${prog.id}`}
                            onClick={() => setIsProgramsOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3 rounded-[20px] hover:bg-stone-50 transition-all group ${
                              prog.isSpecial ? 'bg-[#F8F7F4] mt-1' : ''
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-[14px] ${prog.bgClass || 'bg-white border border-stone-100'} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                              <prog.icon size={18} strokeWidth={1.2} className={`${prog.colorClass || 'text-stone-400'} group-hover:brightness-90 transition-colors`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-bold text-soma-forest tracking-tight">{prog.label}</div>
                              <div className="text-[10px] text-stone-500 font-light mt-0.5 truncate italic font-inter">{prog.desc}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-[9px] font-bold text-soma-gold/60 uppercase tracking-widest group-hover:text-soma-gold transition-colors">P{prog.pillar}</div>
                              <ArrowRight size={14} className="text-stone-400 group-hover:text-soma-forest group-hover:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8 flex items-center justify-end">
                      <Link
                        to="/programs"
                        onClick={() => setIsProgramsOpen(false)}
                        className="text-[9px] font-bold text-soma-forest hover:text-stone-600 flex items-center gap-2 transition-colors uppercase tracking-widest group"
                      >
                        Explore All Pillars
                        <div className="w-7 h-7 rounded-full bg-stone-200/50 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                          <ArrowRight size={12} />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              ref={corporateRef}
              onMouseEnter={() => {
                clearTimeout(corpCloseTimerRef.current);
                setIsCorporateOpen(true);
              }}
              onMouseLeave={() => {
                corpCloseTimerRef.current = setTimeout(() => setIsCorporateOpen(false), 150);
              }}
            >
              <Link
                to="/corporate"
                className={`flex items-center gap-2 font-inter text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  location.pathname.startsWith('/corporate') ? 'text-soma-forest underline underline-offset-8 decoration-amber-500' : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                For Organisations
                <ChevronDown size={14} className={`transition-transform duration-300 ${isCorporateOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {isCorporateOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-[440px] bg-white rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-[#E5E0D8]/80 overflow-hidden z-[999]"
                  >
                    <div className="relative px-8 pt-8 pb-5">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8E4D9]/40 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none" />
                      <BotanicalLeaf className="absolute top-0 right-0 w-48 h-48 text-[#6A7F6C]/20 -mr-6 -mt-6 pointer-events-none transform -rotate-12" />
                      
                      <div className="relative z-10">
                        <p className="text-[9px] font-bold text-soma-gold uppercase tracking-[0.3em] mb-2">Corporate Suite</p>
                        <p className="text-xl font-headline italic bg-gradient-to-br from-rose-600 to-orange-500 bg-clip-text text-transparent mb-3">Institutional<br/>resilience.</p>
                        <div className="w-6 h-0.5 bg-soma-gold/50 mb-3" />
                        <p className="text-[12px] text-stone-500 font-light max-w-[240px] leading-relaxed">
                          Designing environments and practices for human health at scale.
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <div className="flex flex-col gap-1">
                        {CORPORATE_LINKS.map((link) => (
                          <Link
                            key={link.id}
                            to={`/corporate/${link.id}`}
                            onClick={() => setIsCorporateOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3 rounded-[20px] transition-all group ${
                              link.isSpecial 
                                ? 'bg-amber-50/50 hover:bg-amber-50 mt-1 shadow-sm border border-amber-100/50' 
                                : 'hover:bg-stone-50'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-[14px] ${link.bgClass || 'bg-white border border-stone-100'} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${link.isSpecial ? 'bg-white' : ''}`}>
                              <link.icon size={18} strokeWidth={1.2} className={`${link.colorClass || 'text-stone-400'} group-hover:brightness-90 transition-colors`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-bold text-soma-forest tracking-tight flex items-center gap-2">
                                {link.label}
                                {link.isSpecial && (
                                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-amber-500 text-white rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.3)]">Bespoke</span>
                                )}
                              </div>
                              <div className="text-[10px] text-stone-500 font-light mt-0.5 truncate italic font-inter">{link.desc}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <ArrowRight size={14} className={`${link.isSpecial ? 'text-amber-500' : 'text-stone-400'} group-hover:text-soma-forest group-hover:translate-x-1 transition-all`} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8 flex items-center justify-end">
                      <Link
                        to="/corporate"
                        onClick={() => setIsCorporateOpen(false)}
                        className="text-[9px] font-bold text-soma-forest hover:text-stone-600 flex items-center gap-2 transition-colors uppercase tracking-widest group"
                      >
                        Explore Organisations
                        <div className="w-7 h-7 rounded-full bg-stone-200/50 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                          <ArrowRight size={12} />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Corporate Dropdown */}
            <NavLink to="/about" className={navClass}>About</NavLink>


            <NavLink to="/blog" className={navClass}>Journal</NavLink>
            <NavLink to="/assessment" className={navClass}>Assessment</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link to="/contact" className="soma-button-gold">
              Initiate Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden absolute right-5 top-1/2 z-[1001] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-100 bg-white text-soma-forest shadow-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.2} /> : <Menu size={28} strokeWidth={1.2} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden absolute inset-x-0 top-full w-full bg-white border-b border-stone-100 overflow-hidden z-[998] shadow-2xl"
            >
              <nav className="flex flex-col py-12 max-h-[calc(100vh-100px)] overflow-y-auto">
                <NavLink to="/" className={mobileNavClass}>Home</NavLink>

                {/* Mobile Accordions */}
                <button 
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className="flex items-center justify-between w-full text-left py-6 px-8 font-inter text-[14px] font-bold uppercase tracking-[0.2em] text-stone-400 border-l-4 border-transparent"
                >
                  Personal Therapy
                  <ChevronDown size={18} className={isMobileProgramsOpen ? 'rotate-180' : ''} />
                </button>
                {isMobileProgramsOpen && (
                  <div className="bg-stone-50 py-4 grid gap-2">
                    {PROGRAMS.map(prog => (
                      <Link key={prog.id} to={`/programs/${prog.id}`} className="block py-4 px-12 text-[12px] font-bold text-stone-500 uppercase tracking-widest hover:text-soma-forest">{prog.label}</Link>
                    ))}
                  </div>
                )}

                <button 
                  onClick={() => setIsMobileCorporateOpen(!isMobileCorporateOpen)}
                  className="flex items-center justify-between w-full text-left py-6 px-8 font-inter text-[14px] font-bold uppercase tracking-[0.2em] text-stone-400 border-l-4 border-transparent"
                >
                  For Organisations
                  <ChevronDown size={18} className={isMobileCorporateOpen ? 'rotate-180' : ''} />
                </button>
                {isMobileCorporateOpen && (
                  <div className="bg-stone-50 py-4 grid gap-2">
                    {CORPORATE_LINKS.map(link => (
                      <Link key={link.id} to={`/corporate/${link.id}`} className="block py-4 px-12 text-[12px] font-bold text-stone-500 uppercase tracking-widest hover:text-soma-forest">{link.label}</Link>
                    ))}
                  </div>
                )}

                <NavLink to="/about" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>

                <NavLink to="/blog" className={mobileNavClass}>Journal</NavLink>
                <NavLink to="/assessment" className={mobileNavClass}>Assessment</NavLink>
                
                <div className="px-8 pt-12 pb-6">
                   <Link to="/contact" className="soma-button-gold w-full justify-center py-6">
                     Initiate Contact
                   </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      </div>

      <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex="-1">
        <Outlet />
      </main>

      {location.pathname !== '/corporate/architect' && (
        <footer className="w-full py-16 lg:py-24 px-8 lg:px-16 bg-[#E8E4D9] border-t border-[#E8E4D9]/20 mt-auto relative overflow-hidden">
          {/* Rich Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[140px] -mr-96 -mt-96 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-[120px] -mb-96 pointer-events-none" />
          <BotanicalLeaf className="absolute -bottom-20 -right-20 w-[500px] h-[500px] text-soma-forest/5 pointer-events-none transform -rotate-12" />
          <BotanicalLeaf className="absolute -top-40 -left-40 w-[600px] h-[600px] text-soma-forest/5 pointer-events-none transform rotate-45 opacity-30" />

          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 items-start">
              {/* Column 1: Brand & Narrative */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-12"
              >
                <Link to="/" className="inline-block group">
                  <img src="/Photos/SomaLogo1.svg" alt="SOMA" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>
                <p className="text-[15px] text-soma-forest/80 font-headline italic leading-relaxed">
                  "Ancient insight. Modern understanding. A grounded approach to how humans truly rest."
                </p>
                <div className="space-y-6 pt-4">
                  <h5 className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Follow the Story</h5>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {[
                      { name: 'LinkedIn', url: 'https://in.linkedin.com/in/soma-mukherjee1' },
                      { name: 'Instagram', url: '#' },
                      { name: 'Medium', url: '#' }
                    ].map(s => (
                      <a 
                        key={s.name} 
                        href={s.url} 
                        target={s.url !== '#' ? "_blank" : undefined}
                        rel={s.url !== '#' ? "noopener noreferrer" : undefined}
                        className="text-soma-forest/40 hover:text-amber-600 transition-all text-[10px] font-bold uppercase tracking-[0.3em] relative group"
                      >
                        {s.name}
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Column 2: The Practice */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-10"
              >
                <h5 className="text-[10px] font-bold text-stone-700 uppercase tracking-[0.5em] flex items-center gap-4">
                  <span className="w-8 h-px bg-soma-gold/30" /> The Practice
                </h5>
                <div className="flex flex-col gap-5">
                  <Link to="/assessment" className="text-[13px] text-amber-600 font-bold hover:text-amber-700 hover:translate-x-2 transition-all uppercase tracking-widest flex items-center gap-3 group">
                    <Sparkles size={14} className="animate-pulse" />
                    Biological Assessment
                  </Link>
                  <Link to="/corporate/architect" className="text-[13px] text-amber-900 bg-white -mx-4 px-4 py-3 rounded-xl shadow-[0_4px_12px_-2px_rgba(120,53,15,0.1)] hover:shadow-[0_8px_20px_-4px_rgba(120,53,15,0.2)] hover:-translate-y-0.5 transition-all font-medium italic flex items-center gap-3 group relative">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse scale-125 transition-all" />
                    <span className="relative">
                      The Session Architect
                      <span className="ml-3 text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-amber-500 text-white rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.3)]">Bespoke</span>
                    </span>
                  </Link>
                  <Link to="/programs" className="text-[13px] text-soma-forest/60 hover:text-soma-forest hover:translate-x-2 transition-all font-medium italic flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    Personal Therapy
                  </Link>
                  <Link to="/corporate" className="text-[13px] text-soma-forest/60 hover:text-soma-forest hover:translate-x-2 transition-all font-medium italic flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    For Organisations
                  </Link>
                </div>
              </motion.div>

              {/* Column 3: Foundations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <h5 className="text-[10px] font-bold text-stone-700 uppercase tracking-[0.5em] flex items-center gap-4">
                  <span className="w-8 h-px bg-soma-gold/30" /> Foundations
                </h5>
                <div className="flex flex-col gap-5">
                  {[
                    { label: 'About', path: '/about' },
                    { label: 'Client testimonials', path: '/testimonials' },
                    { label: 'Professional Ethics', path: '/standards' },
                    { label: 'Data Privacy', path: '/privacy' },
                    { label: 'Terms of Engagement', path: '/terms' }
                  ].map((link, i) => (
                    <Link 
                      key={i} 
                      to={link.path} 
                      className="text-[13px] text-soma-forest/60 hover:text-soma-forest hover:translate-x-2 transition-all font-medium italic flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Column 4: Connect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-10"
              >
                <h5 className="text-[10px] font-bold text-stone-700 uppercase tracking-[0.5em] flex items-center gap-4">
                  <span className="w-8 h-px bg-soma-gold/30" /> Connect
                </h5>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Inquiries</p>
                    <a 
                      href="mailto:contact@somamukherjee.com" 
                      className="text-lg text-soma-forest font-headline italic hover:text-amber-700 transition-colors block border-b border-soma-forest/10 pb-2"
                    >
                      contact@<br className="hidden xl:block" />somamukherjee.com
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <div className="group cursor-pointer">
                      <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-4">Availability</p>
                      <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/60 border border-white/40 rounded-[24px] shadow-soft backdrop-blur-md hover:bg-white transition-all hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                          <Globe size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-soma-forest uppercase tracking-[0.2em]">Global Presence</span>
                          <span className="text-[9px] text-stone-400 font-medium italic">Available Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 lg:mt-16 pt-8 border-t border-soma-forest/10 flex flex-col md:flex-row justify-between items-center gap-10 relative">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-bold text-soma-forest/40 uppercase tracking-[0.5em]">
                    © {new Date().getFullYear()} Soma Mukherjee · <span className="italic">Wellness Architect</span>
                  </p>
                  <p className="text-[8px] font-bold text-emerald-800/40 uppercase tracking-[0.2em] flex items-center gap-2">
                    <ShieldCheck size={10} className="text-emerald-600/40" />
                    Proprietary Soma Methodology & Concepts Registered &copy;
                  </p>
                </div>
                <div className="hidden md:block w-px h-6 bg-soma-forest/10" />
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 group px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                    <ShieldCheck size={16} className="text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-bold text-soma-forest/60 uppercase tracking-widest">Verified Standards</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-end hidden lg:flex">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Status</span>
                  <span className="text-[10px] font-headline text-soma-forest italic">Practicing in Mumbai & London</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
                    <Waves size={18} className="text-amber-600/40 animate-pulse" />
                  </div>
                  <Sparkles size={16} className="text-amber-400/30" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
