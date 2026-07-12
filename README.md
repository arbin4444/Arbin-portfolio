# Arbin Choudhary — Portfolio

A premium, animated, fully responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. Build for production with:

```bash
npm run build
npm run preview
```

## Before you deploy — things to customize

1. **Profile photo** — add a photo at `public/profile-photo.jpg` (used in the hero section). If the file is missing the image simply hides gracefully.
2. **CV / Resume** — add your PDF at `public/Arbin_Choudhary_CV.pdf` so the "Download CV" button works.
3. **Contact details** — update the email, phone, GitHub, and LinkedIn placeholders in:
   - `src/components/Hero.jsx`
   - `src/components/About.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
4. **EmailJS** — the contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.
   - Create a free account, add an email service and a template with `name`, `email`, and `message` variables.
   - Open `src/components/Contact.jsx` and replace:
     ```js
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
     ```
     with the values from your EmailJS dashboard.
5. **Projects & GitHub links** — edit `src/data/projects.js` to point at your real repositories and live demo URLs.
6. **Certificates** — add entries to the `certificates` array at the top of `src/components/Certificates.jsx` as you earn them.
7. **Open Graph image** — add `public/og-image.png` (1200×630 recommended) for rich link previews on social/LinkedIn shares.
8. **Domain** — update the `og:url` in `index.html` once you have a live domain.

## Project structure

```
src/
  components/     UI sections (Hero, About, Skills, Experience, Projects, Education, Certificates, Contact, Footer, Navbar, Section)
  data/           Reusable content arrays (skills, experience, projects, education)
  hooks/          useTypewriter — the hero's cycling-role animation
  index.css       Tailwind layers + shared utility classes (.glass-card, .badge, .section-heading...)
  App.jsx         Assembles all sections
  main.jsx        React entry point
```

## Notes

- All animations are built with Framer Motion's `whileInView` for scroll-triggered reveals, plus `prefers-reduced-motion` support in `index.css`.
- The navbar highlights the active section using an `IntersectionObserver` and collapses into a hamburger menu below the `md` breakpoint.
- Colors, fonts, shadows, and the background grid pattern are defined once in `tailwind.config.js` — change them there to re-theme the whole site.
