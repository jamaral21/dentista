import { useEffect, useRef, useState } from "react";
import { navigationLinks } from "@/content/site-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(8,29,44,0.97)" : "rgba(8,29,44,0.88)", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid rgba(120,191,234,0.15)" : "1px solid transparent" }}>
    <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
      <a href="#inicio" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg" aria-label="Áurea Clínica Dental — inicio">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: "linear-gradient(135deg,#55D6A9,#78BFEA)" }} aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C5.69 2 3 4.69 3 8c0 2.48 1.43 4.64 3.5 5.72L7.5 16h3l1-2.28C13.57 12.64 15 10.48 15 8c0-3.31-2.69-6-6-6z" fill="white" opacity="0.9"/></svg></span>
        <span className="font-sora font-700 text-white text-lg tracking-tight" style={{ fontFamily: "Sora, sans-serif", fontWeight: 700 }}>Áurea<span style={{ color: "#55D6A9" }}>.</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">{navigationLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium transition-colors duration-150" style={{ color: "rgba(245,248,250,0.75)", fontFamily: "Inter, sans-serif" }}>{link.label}</a>)}</nav>
      <div className="hidden md:block"><a href="#contacto" className="btn-primary px-5 py-2.5 text-sm inline-block" style={{ fontFamily: "Sora, sans-serif" }}>Solicitar cita</a></div>
      <button ref={menuButtonRef} type="button" className="md:hidden p-2 rounded-lg" style={{ color: "#F5F8FA" }} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">{menuOpen ? <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/> : <><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>}</svg>
      </button>
    </div>
    {menuOpen && <nav id="mobile-menu" className="md:hidden px-5 pb-4 flex flex-col gap-3" style={{ background: "rgba(8,29,44,0.98)" }} aria-label="Menú móvil">
      {navigationLinks.map((link, index) => <a ref={index === 0 ? firstLinkRef : undefined} key={link.href} href={link.href} className="text-sm font-medium py-2 border-b" style={{ color: "rgba(245,248,250,0.8)", borderColor: "rgba(120,191,234,0.1)", fontFamily: "Inter, sans-serif" }} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <a href="#contacto" className="btn-primary px-5 py-3 text-sm text-center mt-2" onClick={() => setMenuOpen(false)}>Solicitar cita</a>
    </nav>}
  </header>;
}
