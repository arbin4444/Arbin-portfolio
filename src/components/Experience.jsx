import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career Path" title="Work Experience">
      <div className="relative">
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

        <div className="space-y-14">
          {experience.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={item.role} className="relative md:grid md:grid-cols-2 md:gap-10">
                <div
                  className="absolute left-0 md:left-1/2 top-1 w-10 h-10 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10"
                  style={{ backgroundColor: item.color + '22', border: `1px solid ${item.color}55` }}
                >
                  <item.icon style={{ color: item.color }} className="text-base" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`pl-16 md:pl-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}
                >
                  <div className="glass-card p-6 hover:-translate-y-1 hover:border-secondary/30 transition-all duration-300">
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">{item.org}</p>
                    <h3 className="font-display font-semibold text-lg text-text mb-3">{item.role}</h3>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-sm text-slate-300 flex gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
