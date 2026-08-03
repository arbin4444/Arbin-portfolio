import { motion } from 'framer-motion'
import { FaCertificate, FaPlus } from 'react-icons/fa'
import Section from './Section'

/**
 * Add certificates here as they're earned:
 * { title: 'Certificate Name', issuer: 'Issuing Org', date: 'Month Year', link: 'https://...' }
 */
export const certificates = [
  {
    title: 'Microsoft Excel Beginners To Advance',
    issuer: 'Skill Course',
    date: 'July 2026',
    link: '/certificates/msexcel.png',
  },
]

export default function Certificates() {
  return (
    <Section id="certificates" eyebrow="Credentials" title="Certificates">
      {certificates.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 flex flex-col items-center text-center gap-3 border-dashed"
        >
          <FaPlus className="text-2xl text-secondary" />
          <p className="text-slate-300 font-medium">Certificates coming soon</p>
          <p className="text-sm text-slate-500 max-w-sm">
            This section is ready to showcase certifications as they're completed —
            just add an entry to the certificates array in this file.
          </p>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link || '#'}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300"
            >
              <FaCertificate className="text-2xl text-secondary mb-4" />
              <h3 className="font-display font-semibold text-text mb-1">{cert.title}</h3>
              <p className="text-sm text-slate-400">{cert.issuer} — {cert.date}</p>
            </motion.a>
          ))}
        </div>
      )}
    </Section>
  )
}
