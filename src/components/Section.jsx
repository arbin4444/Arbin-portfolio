import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Section({ id, eyebrow, title, note, children, className = '' }) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="section-container">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
              {title && <h2 className="section-heading">{title}</h2>}
            </div>
            {note && <p className="text-slate-400 text-sm max-w-xs">{note}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
