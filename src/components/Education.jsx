import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import Section from './Section'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid md:grid-cols-3 gap-6">
        {education.map((item, i) => (
          <motion.a
            key={item.degree}
            href={item.certificate}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300 block"
          >
            <FaGraduationCap className="text-2xl text-accent mb-4" />
            <h3 className="font-display font-semibold text-lg text-text mb-1">{item.degree}</h3>
            <p className="text-sm text-slate-400 mb-3">{item.institute}</p>
            <span className="badge">{item.status}</span>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
