import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import Section from './Section'
import { projects } from '../data/projects'

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 4) * 0.08, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected Projects"
      note="A mix of applied React work and fundamentals — each one built to sharpen a specific skill."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group glass-card overflow-hidden flex flex-col hover:border-secondary/40 hover:shadow-glow transition-all duration-300"
          >
            <div
              className="h-36 bg-cover bg-center flex items-center justify-center bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20"
              style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
            >
              {!project.image && (
                <FaCode className="text-4xl text-secondary/60 group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-semibold text-lg text-text mb-2">{project.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>


              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 py-2 text-sm font-medium text-slate-200 hover:border-secondary hover:text-secondary transition-colors"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary/90 py-2 text-sm font-medium text-white hover:bg-primary transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
