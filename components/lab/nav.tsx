"use client"

import { useEffect, useState } from "react"

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b-[3px] border-ink bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-ink">
          <span>hrushik</span>
          <span className="text-ink/60">.com</span>
          <span className="blink text-brut-pink">_</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden font-mono text-[0.78rem] font-bold text-ink hover:underline decoration-ink decoration-[2px] underline-offset-4 transition-colors sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Hrushik_resume.pdf"
            className="brut-btn bg-brut-yellow text-ink px-4 py-1.5 font-mono text-[0.75rem] font-bold"
            style={{ borderWidth: "2px", boxShadow: "3px 3px 0 0 var(--ink)" }}
          >
            Résumé ↓
          </a>
        </nav>
      </div>
    </header>
  )
}
