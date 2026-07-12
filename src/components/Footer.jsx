import { FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg">Arbin Choudhary</p>
          <p className="text-sm text-slate-500">Frontend Developer</p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/arbin4444" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2 text-sm">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:arbin.choudhary789@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-2 text-sm">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-slate-600 mt-8">
        © {new Date().getFullYear()} Arbin Choudhary. All rights reserved.
      </p>
    </footer>
  )
}
