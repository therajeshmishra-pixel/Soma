// components/ui/gradient-card.jsx
// Adapted from the shadcn/TS design prompt — uses plain JSX + Tailwind + framer-motion + lucide-react

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Gradient lookup — maps variant name to Tailwind classes
const GRADIENTS = {
  amber:   'bg-gradient-to-br from-amber-50   to-amber-100/80',
  emerald: 'bg-gradient-to-br from-emerald-50 to-teal-100/70',
  slate:   'bg-gradient-to-br from-slate-100  to-slate-200/60',
  rose:    'bg-gradient-to-br from-rose-50    to-pink-100/70',
  indigo:  'bg-gradient-to-br from-indigo-50  to-violet-100/70',
  stone:   'bg-gradient-to-br from-stone-100  to-amber-50/80',
};

/**
 * GradientCard
 *
 * Props:
 *  - badgeText   string      — small label shown top-left
 *  - badgeColor  string      — hex colour for the badge dot
 *  - title       string      — main heading
 *  - description string      — body copy
 *  - ctaText     string      — link label
 *  - ctaHref     string      — link target (use "/" prefix for internal routes)
 *  - Icon        component   — lucide-react icon component (not a string)
 *  - gradient    string      — one of: amber | emerald | slate | rose | indigo | stone
 *  - className   string      — optional extra classes
 */
export function GradientCard({
  badgeText,
  badgeColor = '#c8a96e',
  title,
  description,
  ctaText = 'Learn more',
  ctaHref = '#',
  Icon,
  gradient = 'amber',
  className = '',
}) {
  const gradientClass = GRADIENTS[gradient] ?? GRADIENTS.amber;
  const isInternal = ctaHref.startsWith('/');

  const cardVariants = {
    rest:  { scale: 1,    y: 0  },
    hover: { scale: 1.02, y: -4 },
  };

  const iconVariants = {
    rest:  { rotate: 0,  scale: 1    },
    hover: { rotate: 6,  scale: 1.12 },
  };

  const content = (
    <div
      className={`relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-7
        border border-white/60
        shadow-[0_4px_24px_rgba(0,0,0,0.06)]
        backdrop-blur-md
        transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]
        soma-glass-light
        ${gradientClass} ${className}`}
      style={{ "--badge-color": badgeColor }}
    >

      {/* Decorative blurred orb */}
      <div
        className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: 'var(--badge-color)' }}
      />

      {/* Badge */}
      <div className="flex items-center gap-2 mb-6 w-fit">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'var(--badge-color)' }}
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">
          {badgeText}
        </span>
      </div>

      {/* Icon */}
      {Icon && (
        <motion.div
          variants={iconVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'color-mix(in srgb, var(--badge-color), transparent 86%)' }}
        >
          <Icon size={22} style={{ color: 'var(--badge-color)' }} strokeWidth={1.8} />
        </motion.div>
      )}

      {/* Title + description */}
      <div className="flex-grow">
        <h3 className="text-xl font-headline font-extrabold text-slate-900 tracking-tight mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-slate-800 font-medium leading-relaxed">{description}</p>
      </div>


    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="h-full"
    >
      {isInternal
        ? <Link to={ctaHref} className="block h-full">{content}</Link>
        : <a href={ctaHref} className="block h-full">{content}</a>
      }
    </motion.div>
  );
}
