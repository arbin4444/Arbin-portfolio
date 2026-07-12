import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'


export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* background grid + blobs */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:3s]" />

      <div className="section-container relative grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-4">
            Arbin <span className="gradient-text">Choudhary</span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-lg mb-8">
            Frontend Developer with a background in technical education and media production. I build responsive web applications with React and JavaScript, and bring the same clarity and adaptability from teaching and live production into every project I take on.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Arbin_Choudhary_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-text hover:border-secondary hover:text-secondary hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-text hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-2xl" />
            <div className="relative w-full h-full rounded-3xl glass-card overflow-hidden">
              <img
                src="/arbin.jpg"
                alt="Arbin Choudhary"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
