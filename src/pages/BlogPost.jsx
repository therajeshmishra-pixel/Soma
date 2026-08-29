"use client"
import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogs } from '../data/blogs'
import SEO from '../components/SEO'

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center">
      <SEO 
        title="BlogPost | SOMA" 
        description="Discover BlogPost programs and therapies at Soma Mukherjee Wellness." 
        canonical="https://www.somamukherjee.com/blogpost" 
      />
        <h1 className="text-2xl font-bold">Insight Not Found</h1>
        <Link to="/blog" className="text-emerald-700 underline mt-4 inline-block">Back to Journal</Link>
      </div>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      
      {/* Article Header */}
      <header className="relative">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-soma-gold mb-8">
              <span className="px-3 py-1 bg-soma-gold/5 rounded-full border border-soma-gold/10">{blog.category}</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>{blog.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/Photos/SomaN2.png" className="w-full h-full object-cover object-top" alt="Soma Mukherjee" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">{blog.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{blog.readTime}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img src={blog.image} className="w-full h-full object-cover" alt={blog.title} />
          </motion.div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-10 md:py-16 lg:py-24">
        <div 
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tight prose-headings:break-after-avoid
            prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600 prose-p:mb-6 prose-p:break-inside-avoid
            prose-blockquote:border-l-soma-gold prose-blockquote:text-slate-900 prose-blockquote:font-headline prose-blockquote:italic prose-blockquote:break-inside-avoid
            prose-strong:text-slate-900 prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Author Bio Footer */}
        <div className="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
            <img src="/Photos/SomaN2.png" className="w-full h-full object-cover object-top" alt="Soma Mukherjee" />
          </div>
          <div>
            <h4 className="text-xl font-headline font-bold text-slate-900 mb-2">About Soma Mukherjee</h4>
            <p className="text-slate-500 font-light leading-relaxed mb-4">
              All-India Yoga Champion and Ayush Ministry Level 3–certified yoga therapist with 25 years of experience. With an M.A. in Yoga from Jain Vishva Bharati University and advanced training from Harvard Medical School, Soma has guided thousands — from Jamshedpur to Tokyo — back to themselves.
            </p>
            <Link to="/about" className="text-soma-gold font-bold text-sm uppercase tracking-widest hover:underline">Learn More about Soma</Link>
          </div>
        </div>
      </article>

      {/* Recommended Posts */}
      <section className="bg-slate-50 py-10 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-soma-gold">Deepen Your Knowledge</span>
              <h2 className="text-3xl font-headline font-bold text-slate-900 mt-2">Related Insights</h2>
            </div>
            <Link to="/blog" className="text-slate-400 hover:text-slate-900 font-bold text-sm transition-colors">See all posts →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter(b => b.id !== id).slice(0, 3).map((related) => (
              <Link 
                to={`/blog/${related.id}`} 
                key={related.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={related.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={related.title} />
                </div>
                <div className="p-6">
                  <h4 className="font-headline font-bold text-slate-900 group-hover:text-soma-gold transition-colors">{related.title}</h4>
                  <p className="mt-2 text-slate-500 text-sm font-light line-clamp-2">{related.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[48px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-soma-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-8 leading-tight">
              Ready to Design Your <br />
              <span className="text-soma-gold italic">Personal Sanctuary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="signature-gradient text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl hover:opacity-90 transition-opacity">
                Book a Consultation
              </Link>
              <Link to="/journey" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all border border-white/10">
                Explore Soma's Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
