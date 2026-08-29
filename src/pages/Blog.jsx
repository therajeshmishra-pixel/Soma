"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MeshGradient } from "@paper-design/shaders-react"
import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/motion-wrappers'
import SEO from '../components/SEO'

const CATEGORIES = ["All", "Science", "Workplace", "Mind", "Body"]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <SEO 
        title="Blog | SOMA" 
        description="Discover Blog programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/blog" 
      />
      
      {/* Collage Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-white">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0">
          <MeshGradient
            className="w-full h-full opacity-40"
            colors={["#ffffff", "#f8f9fa", "#e8d5b7", "#b29267", "#ffffff"]}
            speed={0.1}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-7 pt-20 lg:pt-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-soma-gold/5 text-soma-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-8 border border-soma-gold/10">
                The Wellness Journal
              </span>
              
              <h1 className="font-headline text-5xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[1] tracking-tight">
                Insights on <br />
                <span className="text-soma-gold italic">Stillness.</span>
              </h1>
              
              <p className="text-lg text-slate-500 font-inter leading-relaxed max-w-xl mb-8 font-light">
                A curated collection of thoughts on neuroscience, somatic intelligence, and the architecture of human performance.
              </p>
            </motion.div>
          </div>

          {/* Right Side: The Collage */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-full flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
              
              {/* Main Center Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 z-20 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src="/Photos/Soma_sr11.png" 
                  className="w-full h-full object-cover object-top" 
                  alt="Soma Mukherjee"
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [5, 8, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 w-40 h-48 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl z-30 border border-white/20 p-4 hidden md:block"
              >
                <div className="w-full h-24 bg-slate-100 rounded-xl overflow-hidden mb-3">
                  <img src="/Photos/blog_vagus.png" className="w-full h-full object-cover" alt="Vagus Nerve" />
                </div>
                <p className="text-[9px] font-bold text-soma-gold uppercase tracking-widest mb-1">Science</p>
                <p className="text-[11px] font-headline font-bold text-slate-800 leading-tight">Biological Calm</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [-5, -10, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-12 w-48 h-32 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl z-10 border border-white/20 p-4 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trending</span>
                </div>
                <p className="text-xs font-inter text-slate-600 leading-relaxed italic">"Rest is the foundation of strategy."</p>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute -inset-20 bg-soma-gold/10 rounded-full blur-[100px] z-0 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16 lg:py-24">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-10 lg:mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-xl scale-105" 
                  : "bg-white text-slate-400 hover:text-slate-600 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog, index) => (
              <Link 
                to={`/blog/${blog.id}`} 
                key={blog.id}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-soma-gold/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-soma-gold uppercase tracking-wider shadow-sm">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-4">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-headline font-bold text-slate-900 mb-4 leading-snug group-hover:text-soma-gold transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3 mb-8">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Read Full Insight
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                        <img src="/Photos/SomaN2.png" className="w-full h-full object-cover object-top" alt="Soma Mukherjee" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredBlogs.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-400 font-light italic">More insights coming soon to this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter Placeholder */}
      <section className="bg-slate-900 py-10 md:py-16 lg:py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-white mb-6">Sustainable Performance in Your Inbox.</h2>
          <p className="text-slate-400 font-light mb-8">Join our monthly brief on the science of stillness and corporate vitality.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-soma-gold transition-colors"
            />
            <button className="signature-gradient text-white px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
