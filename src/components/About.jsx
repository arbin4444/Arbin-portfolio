import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa'
import Section from './Section'

const infoCards = [
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Kathmandu, Nepal' },
  { icon: FaEnvelope, label: 'Email', value: 'arbin.choudhary789@gmail.com' },
  { icon: FaPhoneAlt, label: 'Phone', value: '+977 9842574444' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/arbin4444' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="The person behind the code">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-slate-300 leading-relaxed"
        >
          <p>
            I am a Frontend Developer with practical experience in React, JavaScript, REST
            APIs, and modern web development. Along with software development, I have
            experience working as a Computer Teacher and News Producer, which helped me
            develop excellent communication, leadership, teamwork, and problem-solving skills.
          </p>
          <p>
            I enjoy learning new technologies, building user-friendly applications,
            collaborating with teams, and helping others through education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass-card p-5 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <card.icon className="text-secondary text-xl mb-3" />
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">{card.label}</p>
              <p className="font-medium text-text break-words">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
