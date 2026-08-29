import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function AnnouncementBar() {
  const location = useLocation();
  const handleOpenModal = () => {
    window.dispatchEvent(new CustomEvent('open-registration-modal'));
  };

  const showCommunityBar = location.pathname === '/' || location.pathname === '/contact';
  const showCorporateBar = location.pathname.startsWith('/corporate');

  if (!showCommunityBar && !showCorporateBar) {
    return null;
  }

  return (
    <div className="flex flex-col w-full z-[60] relative print:hidden">
      {/* Existing Community Yoga Bar */}
      {showCommunityBar && (
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full bg-soma-forest py-2 md:py-2.5 px-4 md:px-6"
        >
          <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
            <span className="text-white/70 text-[10px] md:text-[12px] font-medium font-inter tracking-normal uppercase leading-snug">
              Collective Stillness · <span className="font-bold text-white">FREE</span> Community Yoga · Thrice Weekly
            </span>
            <button 
              onClick={handleOpenModal}
              className="text-[#E8E4D9] text-[10px] md:text-[12px] font-medium font-inter tracking-normal uppercase underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/60 transition-all cursor-pointer italic leading-snug"
            >
              Reserve Sanctuary
            </button>
          </div>
        </motion.div>
      )}

      {/* Corporate HR Architect Bar */}
      {showCorporateBar && (
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full bg-amber-600 py-2 md:py-2.5 px-4 md:px-6 shadow-sm"
        >
          <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
            <span className="text-amber-50 text-[10px] md:text-[12px] font-medium font-inter tracking-wide uppercase leading-snug">
              For Corporate HR & Leaders · <span className="font-bold text-white">Custom Wellness Programs</span>
            </span>
            <Link 
              to="/corporate/architect"
              className="text-white text-[10px] md:text-[12px] font-bold font-inter tracking-wide uppercase underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white/80 transition-all cursor-pointer italic leading-snug flex items-center gap-1"
            >
              Explore Session Architect <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
