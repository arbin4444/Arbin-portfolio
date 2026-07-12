import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import Section from './Section'

// Replace these with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_xgh58qo'
const EMAILJS_TEMPLATE_ID = 'template_dqe3p52'
const EMAILJS_PUBLIC_KEY = '8VjIG6K8c_XbMjuTV'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'arbin.choudhary789@gmail.com', href: 'mailto:arbin.choudhary789@gmail.com' },
  { icon: FaPhoneAlt, label: 'Phone', value: '+977 9842574444', href: 'tel:+9779842574444' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Kathmandu, Nepal', href: null },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's build something together">
      <div className="grid md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-4"
        >
          <p className="text-slate-400 mb-6">
            Have an opportunity, project, or question? I'd love to hear from you —
            reach out directly or send a message.
          </p>
          {contactInfo.map((item) => {
            const Wrapper = item.href ? 'a' : 'div'
            return (
              <Wrapper
                key={item.label}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card p-4 flex items-center gap-4 hover:border-secondary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <item.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
                  <p className="text-sm font-medium text-text break-all">{item.value}</p>
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 glass-card p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              id="name" name="name" type="text" required
              placeholder="Your name"
              className="w-full rounded-lg bg-bg border border-white/10 px-4 py-3 text-sm text-text placeholder:text-slate-500 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              id="email" name="email" type="email" required
              placeholder="you@example.com"
              className="w-full rounded-lg bg-bg border border-white/10 px-4 py-3 text-sm text-text placeholder:text-slate-500 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              id="message" name="message" required rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full rounded-lg bg-bg border border-white/10 px-4 py-3 text-sm text-text placeholder:text-slate-500 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 disabled:opacity-60 transition-colors"
          >
            <FaPaperPlane />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-accent text-center">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}
