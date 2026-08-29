import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsEditorial({ testimonials }) {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Fallback to defaults if no testimonials are provided
  const data = testimonials && testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      quote: "The attention to detail and creative vision transformed our brand identity completely.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Studio Forma",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      quote: "Working with them felt like a true creative partnership from day one.",
      author: "Marcus Webb",
      role: "Head of Design",
      company: "Minimal Co",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      quote: "They understand that great design is invisible yet unforgettable.",
      author: "Elena Voss",
      role: "Art Director",
      company: "Pixel & Co",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60",
    },
  ]

  const handleChange = (index) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? data.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === data.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  // Autoplay functionality: scrolls every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        const newIndex = active === data.length - 1 ? 0 : active + 1
        handleChange(newIndex)
      }
    }, 8000)
    
    return () => clearInterval(timer)
  }, [active, isTransitioning, data.length])

  const current = data[active]

  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-16 py-8 md:py-16">
      {/* Editorial Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 lg:gap-16">
        <span
          className="text-[64px] md:text-[120px] font-light leading-none text-amber-100 select-none transition-all duration-500 md:translate-y-[-8px]"
          className="tnum"
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 w-full text-center md:text-left">
          {/* Quote */}
          <blockquote
            className={`text-lg md:text-2xl font-normal italic leading-relaxed text-stone-700 tracking-tight transition-all duration-300 min-h-[140px] md:min-h-0 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            "{current.quote}"
          </blockquote>

          {/* Author info with hover reveal */}
          <div
            className={`mt-4 md:mt-10 group cursor-default transition-all duration-300 delay-100 flex justify-center md:justify-start ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-4">

              <div className="text-left">
                <p className="font-bold text-soma-forest text-sm md:text-base">{current.author}</p>
                <p className="text-[11px] md:text-sm text-stone-500">
                  {current.role}
                  <span className="mx-2 text-stone-300">/</span>
                  <span className="group-hover:text-rose-500 transition-colors duration-300 font-medium">{current.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="mt-8 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full lg:w-auto">
          <div className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1.5">
            {data.map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleChange(index)} 
                className="group relative py-2 px-0.5 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-md"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-500 ease-out ${
                    index === active
                      ? "w-4 md:w-6 bg-amber-500"
                      : "w-1.5 md:w-3 bg-stone-200 group-hover:w-2 group-hover:md:w-4 group-hover:bg-amber-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-stone-400 tracking-widest uppercase font-bold whitespace-nowrap">
            {String(active + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-11 h-11 flex items-center justify-center rounded-full text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 flex items-center justify-center rounded-full text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
