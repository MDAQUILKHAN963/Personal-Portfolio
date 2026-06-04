import { useEffect, useRef, useState } from 'react'
import {
  profile,
  social,
  about,
  skills,
  projects,
  experience,
  achievements,
  certifications,
  contact,
} from './data'

/* ---------- small hooks ---------- */

// Adds .visible to elements with .reveal when they scroll into view
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Typewriter effect for the rotating hero titles
function useTypingEffect(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[i % words.length]
    let delay = deleting ? speed / 2 : speed
    if (!deleting && text === current) delay = pause
    if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((p) => p + 1)
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

/* ---------- sections ---------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo gradient-text">
          {profile.name.split(' ')[0]}.
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const role = useTypingEffect(profile.titles)
  return (
    <header className="hero" id="home">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <span className="hero-badge">
            <span className="dot" /> Available for opportunities
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <div className="hero-role gradient-text">
            {role}
            <span aria-hidden>|</span>
          </div>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-rocket" /> View Projects
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <i className="fa-solid fa-download" /> Resume
              </a>
            )}
            <a href="#contact" className="btn btn-secondary">
              <i className="fa-solid fa-paper-plane" /> Contact
            </a>
          </div>
          <div className="hero-socials">
            {social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal">
          {profile.photo ? (
            <img
              src={
                profile.photo.startsWith('http')
                  ? profile.photo
                  : import.meta.env.BASE_URL + profile.photo.replace(/^\//, '')
              }
              alt={profile.name}
              className="hero-photo"
            />
          ) : (
            <div className="hero-monogram">{profile.name.charAt(0)}</div>
          )}
        </div>
      </div>
    </header>
  )
}

function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head reveal">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <SectionHead eyebrow="Get to know me" title="About Me" />
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <div className="about-stats">
              {about.stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-value gradient-text">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="edu-card reveal">
            <div className="edu-icon">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <h4>{about.education.degree}</h4>
            <div className="edu-school">{about.education.school}</div>
            <div className="edu-meta">{about.education.year}</div>
            {about.education.detail && <div className="edu-meta">{about.education.detail}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow="What I work with" title="Skills & Expertise" />
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <div className="skill-icon">
                <i className={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.items.map((it) => (
                  <span className="tag" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHead eyebrow="Things I've built" title="Featured Projects" />
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`project-card reveal ${p.featured ? 'featured' : ''}`} key={p.title}>
              <div className="project-icon">
                <i className={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead eyebrow="My journey" title="Experience" />
        <div className="timeline">
          {experience.map((e, idx) => (
            <div className="timeline-item reveal" key={idx}>
              <div className="timeline-period">{e.period}</div>
              <h3>{e.role}</h3>
              <div className="timeline-org">{e.org}</div>
              <ul>
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="section section--alt" id="achievements">
      <div className="container">
        <SectionHead eyebrow="Milestones" title="Achievements" />
        <div className="achieve-grid">
          {achievements.map((a) => (
            <div className="achieve-card reveal" key={a.title}>
              <div className="achieve-icon gradient-text">
                <i className={a.icon} />
              </div>
              <h4>{a.title}</h4>
              <p>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHead eyebrow="Credentials" title="Certifications" />
        <div className="cert-grid">
          {certifications.map((c) => (
            <a
              className="cert-card reveal"
              key={c.name}
              href={c.url || undefined}
              target={c.url ? '_blank' : undefined}
              rel="noreferrer"
            >
              <i className="fa-solid fa-certificate cert-icon" />
              <div>
                <h4>{c.name}</h4>
                <span>{c.issuer}</span>
              </div>
              {c.url && <i className="fa-solid fa-arrow-up-right-from-square cert-link" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    if (contact.web3formsAccessKey) {
      // Real submissions emailed to you via Web3Forms (no backend needed)
      setSending(true)
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: contact.web3formsAccessKey,
            subject: `Portfolio message from ${data.name}`,
            from_name: data.name,
            ...data,
          }),
        })
        const result = await res.json()
        if (result.success) {
          setSent(true)
          form.reset()
        } else {
          alert('Something went wrong — please email me directly.')
        }
      } catch {
        alert('Something went wrong — please email me directly.')
      } finally {
        setSending(false)
      }
    } else {
      // No key yet: open the visitor's email client pre-filled
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    }
  }

  const items = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: profile.location },
  ]

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Let's talk"
          title="Get In Touch"
          subtitle="Have a project, role, or idea in mind? I'd love to hear from you."
        />
        <div className="contact-grid">
          <div className="reveal">
            {items.map((it) => {
              const inner = (
                <>
                  <div className="ci-icon">
                    <i className={it.icon} />
                  </div>
                  <div>
                    <div className="ci-label">{it.label}</div>
                    <div className="ci-value">{it.value}</div>
                  </div>
                </>
              )
              return it.href ? (
                <a className="contact-info-item" href={it.href} key={it.label}>
                  {inner}
                </a>
              ) : (
                <div className="contact-info-item" key={it.label}>
                  {inner}
                </div>
              )
            })}
            <div className="hero-socials" style={{ marginTop: '1.5rem' }}>
              {social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Your message..." />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={sending}
            >
              <i className={`fa-solid ${sending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} />{' '}
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            {sent && (
              <p style={{ marginTop: '1rem', color: '#22c55e', fontWeight: 600 }}>
                Thanks! Your message was sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo gradient-text">{profile.name}</div>
        <ul className="footer-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="footer-socials">
          {social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Built with React & ❤️.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
