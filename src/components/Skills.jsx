import { motion } from 'framer-motion'
import Section from './Section'
import { skillGroups } from '../data/skills'

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.04, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      note="A blend of technical, practical, and interpersonal skills shaped by both classrooms and codebases."
    >
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={badgeVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 glass-card px-4 py-2.5 hover:border-secondary/40 transition-colors"
                >
                  <skill.icon className="text-secondary text-base" />
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
