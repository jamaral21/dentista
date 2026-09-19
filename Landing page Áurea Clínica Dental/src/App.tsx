import { useState, useEffect, useRef } from "react";

type DemoAction = "whatsapp" | "phone" | "email";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clinica", label: "Clínica" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const TREATMENTS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 4C9.58 4 6 7.58 6 12c0 3.31 1.9 6.18 4.67 7.63L12 24h4l1.33-4.37C20.1 18.18 22 15.31 22 12c0-4.42-3.58-8-8-8z" stroke="#55D6A9" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M11 12h6M14 9v6" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Odontología general",
    desc: "Valoración, prevención y tratamiento de problemas comunes.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <ellipse cx="14" cy="14" rx="9" ry="6" stroke="#55D6A9" strokeWidth="1.7"/>
        <path d="M8 11c1.5-2 3.5-3 6-3s4.5 1 6 3" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="#55D6A9" opacity="0.5"/>
      </svg>
    ),
    title: "Limpieza dental",
    desc: "Eliminación profesional de placa y sarro.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M6 14c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M10 14l2.5 2.5L18 11" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Blanqueamiento",
    desc: "Alternativas profesionales controladas.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M7 21l3-8 4 5 3-8 4 7" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="8" r="3" stroke="#78BFEA" strokeWidth="1.7"/>
      </svg>
    ),
    title: "Ortodoncia",
    desc: "Mejorar posición y mordida.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="6" y="13" width="16" height="8" rx="2" stroke="#55D6A9" strokeWidth="1.7"/>
        <path d="M10 13V11a4 4 0 0 1 8 0v2" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M14 17v2" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Implantes y rehabilitación",
    desc: "Recuperar piezas y funcionalidad.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 6v3M14 19v3M6 14h3M19 14h3" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="6" stroke="#55D6A9" strokeWidth="1.7"/>
        <path d="M11 14l2 2 4-4" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Atención de urgencias",
    desc: "Valoración oportuna para dolor o lesiones.",
  },
];

const BENEFITS = [
  { icon: "💬", text: "Explicaciones claras antes de comenzar" },
  { icon: "🤝", text: "Atención respetuosa y sin prisas" },
  { icon: "✨", text: "Espacios cómodos y limpios" },
  { icon: "📋", text: "Seguimiento después del tratamiento" },
];

const TESTIMONIALS = [
  {
    quote: "Por fin una clínica que me explicó todo antes de empezar. Me fui con mis dudas resueltas y sin sorpresas.",
    name: "Mariana G.",
    detail: "Querétaro",
  },
  {
    quote: "Me contactaron por WhatsApp y me respondieron el mismo día. Muy cómodo para agendar sin tanto trámite.",
    name: "Roberto A.",
    detail: "Querétaro",
  },
  {
    quote: "El consultorio se siente moderno y limpio. Desde que llegué me sentí en buenas manos.",
    name: "Sofía T.",
    detail: "Querétaro",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,29,44,0.97)"
          : "rgba(8,29,44,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(120,191,234,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg" aria-label="Áurea Clínica Dental — inicio">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: "linear-gradient(135deg,#55D6A9,#78BFEA)" }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C5.69 2 3 4.69 3 8c0 2.48 1.43 4.64 3.5 5.72L7.5 16h3l1-2.28C13.57 12.64 15 10.48 15 8c0-3.31-2.69-6-6-6z" fill="white" opacity="0.9"/>
            </svg>
          </span>
          <span className="font-sora font-700 text-white text-lg tracking-tight" style={{ fontFamily: "Sora, sans-serif", fontWeight: 700 }}>
            Áurea<span style={{ color: "#55D6A9" }}>.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "rgba(245,248,250,0.75)", fontFamily: "Inter, sans-serif" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#55D6A9")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,248,250,0.75)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="btn-primary px-5 py-2.5 text-sm inline-block"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Solicitar cita
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#F5F8FA" }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            {menuOpen ? (
              <>
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden px-5 pb-4 flex flex-col gap-3"
          style={{ background: "rgba(8,29,44,0.98)" }}
          aria-label="Menú móvil"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-2 border-b"
              style={{
                color: "rgba(245,248,250,0.8)",
                borderColor: "rgba(120,191,234,0.1)",
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary px-5 py-3 text-sm text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar cita
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #081D2C 0%, #0E2E46 55%, #0A2538 100%)",
      }}
      aria-label="Sección de inicio"
    >
      {/* Geometric accents */}
      <div
        className="geo-accent"
        style={{ width: 480, height: 480, background: "#55D6A9", top: -120, right: -80, opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        className="geo-accent"
        style={{ width: 260, height: 260, background: "#78BFEA", bottom: 80, left: -60, opacity: 0.08 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-px h-40 opacity-10"
        style={{ background: "linear-gradient(to bottom, transparent, #78BFEA, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-24 h-px opacity-10"
        style={{ background: "linear-gradient(to right, transparent, #55D6A9, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 pt-24 pb-16 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{
              color: "#55D6A9",
              background: "rgba(85,214,169,0.1)",
              border: "1px solid rgba(85,214,169,0.2)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#55D6A9" }}
              aria-hidden="true"
            />
            Odontología integral en Querétaro
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
          >
            Tu sonrisa,<br />
            <span style={{ color: "#55D6A9" }}>en buenas</span><br />
            manos.
          </h1>

          <p
            className="text-base md:text-lg mb-8 leading-relaxed max-w-lg"
            style={{ color: "rgba(245,248,250,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Cuidamos tu salud dental con atención profesional, explicaciones claras y tratamientos pensados para ti y tu familia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contacto"
              className="btn-primary px-7 py-3.5 text-sm text-center flex items-center justify-center gap-2"
              aria-label="Solicitar cita por WhatsApp"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.84L0 24l6.34-1.46A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.62-.5-5.14-1.36l-.37-.22-3.77.87.9-3.65-.24-.38A9.95 9.95 0 0 1 2 12c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10zm5.5-7.36c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07A8.16 8.16 0 0 1 9 12.78c-.4-.69-.07-1 .28-1.34.23-.23.5-.6.75-.9.25-.3.33-.52.5-.87.17-.35.08-.65-.04-.9s-.67-1.62-.92-2.22-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" fill="currentColor"/>
              </svg>
              Solicitar cita
            </a>
            <a
              href="#tratamientos"
              className="btn-outline px-7 py-3.5 text-sm text-center"
            >
              Conocer tratamientos
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            {[
              { icon: "👤", label: "Atención personalizada" },
              { icon: "⚡", label: "Tecnología moderna" },
              { icon: "👨‍👩‍👧", label: "Opciones para toda la familia" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-sm flex-shrink-0"
                  style={{ background: "rgba(85,214,169,0.12)", border: "1px solid rgba(85,214,169,0.2)" }}
                  aria-hidden="true"
                >
                  {t.icon}
                </span>
                <span className="text-sm" style={{ color: "rgba(245,248,250,0.75)", fontFamily: "Inter, sans-serif" }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            className="rounded-2xl overflow-hidden aspect-[4/5] relative"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
          >
            <img
              src="/images/hero-dental.jpg"
              alt="Equipo de odontólogos en atención profesional con paciente en clínica dental moderna"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,29,44,0.5) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
          </div>

          <div
            className="absolute -bottom-4 -left-6 rounded-xl px-4 py-3 flex items-center gap-3"
            style={{
              background: "rgba(14,46,70,0.95)",
              border: "1px solid rgba(120,191,234,0.2)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(85,214,169,0.15)" }}
              aria-hidden="true"
            >
              🦷
            </span>
            <div>
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "Sora, sans-serif" }}>Atención integral</p>
              <p className="text-xs" style={{ color: "rgba(245,248,250,0.55)", fontFamily: "Inter, sans-serif" }}>Adultos y niños · Querétaro</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <span className="text-xs text-white" style={{ fontFamily: "Inter, sans-serif" }}>Descubre más</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 1l7 7 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

function Clinica() {
  return (
    <section
      id="clinica"
      className="py-20 md:py-28"
      style={{ background: "#F5F8FA" }}
      aria-label="Sobre la clínica"
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: "0 12px 40px rgba(8,29,44,0.12)" }}
          >
            <img
              src="/images/clinic-interior.jpg"
              alt="Interior moderno de clínica dental Áurea con equipamiento profesional"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl overflow-hidden"
            style={{ border: "3px solid #F5F8FA", boxShadow: "0 8px 24px rgba(8,29,44,0.15)" }}
          >
            <img
              src="/images/clinic-detail.jpg"
              alt="Detalle de instalaciones modernas"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="geo-accent"
            style={{ width: 200, height: 200, background: "#55D6A9", bottom: -40, left: -40, opacity: 0.07 }}
            aria-hidden="true"
          />
        </div>

        <div>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "#55D6A9",
              background: "rgba(85,214,169,0.1)",
              border: "1px solid rgba(85,214,169,0.2)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            La clínica
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
            style={{ color: "#081D2C", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
          >
            Una experiencia dental más tranquila
          </h2>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(8,29,44,0.68)", fontFamily: "Inter, sans-serif" }}
          >
            En Áurea creemos que una buena atención comienza escuchándote. Por eso explicamos cada opción con claridad, resolvemos tus dudas y te acompañamos durante todo el tratamiento. Nuestro espacio está diseñado para ofrecerte comodidad, confianza y atención profesional desde tu primera visita.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "👨‍👩‍👧‍👦", label: "Atención para adultos y niños" },
              { icon: "📋", label: "Planes de tratamiento claros" },
              { icon: "🏥", label: "Instalaciones modernas" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: "rgba(8,29,44,0.06)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className="text-sm font-medium" style={{ color: "#081D2C", fontFamily: "Inter, sans-serif" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tratamientos() {
  return (
    <section
      id="tratamientos"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#081D2C" }}
      aria-label="Tratamientos"
    >
      <div
        className="geo-accent"
        style={{ width: 400, height: 400, background: "#55D6A9", top: -100, right: -100 }}
        aria-hidden="true"
      />
      <div
        className="geo-accent"
        style={{ width: 300, height: 300, background: "#78BFEA", bottom: -80, left: -80 }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "#55D6A9",
              background: "rgba(85,214,169,0.12)",
              border: "1px solid rgba(85,214,169,0.2)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Tratamientos
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
          >
            Cuidado completo para tu sonrisa
          </h2>
          <p
            className="text-base"
            style={{ color: "rgba(245,248,250,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Desde prevención hasta tratamientos especializados, te ayudamos a encontrar la atención adecuada para cada etapa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TREATMENTS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl p-6 transition-all duration-200"
              style={{
                background: "rgba(14,46,70,0.7)",
                border: "1px solid rgba(120,191,234,0.12)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(14,46,70,0.95)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(85,214,169,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(14,46,70,0.7)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(120,191,234,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(85,214,169,0.1)" }}
                aria-hidden="true"
              >
                {t.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif" }}
              >
                {t.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,248,250,0.58)", fontFamily: "Inter, sans-serif" }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Preguntar por un tratamiento
          </a>
        </div>

        <p
          className="text-center text-xs mt-5 mx-auto max-w-md"
          style={{ color: "rgba(245,248,250,0.4)", fontFamily: "Inter, sans-serif" }}
        >
          El contenido es informativo y no sustituye una valoración profesional.
        </p>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section
      id="equipo"
      className="py-20 md:py-28"
      style={{ background: "#F5F8FA" }}
      aria-label="Nuestro equipo"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "#55D6A9",
              background: "rgba(85,214,169,0.1)",
              border: "1px solid rgba(85,214,169,0.2)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Equipo
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#081D2C", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
          >
            Profesionales que te escuchan
          </h2>
          <p
            className="text-base"
            style={{ color: "rgba(8,29,44,0.62)", fontFamily: "Inter, sans-serif" }}
          >
            Un equipo comprometido con tu bienestar dental y con la claridad que mereces en cada consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
          {[
            {
              name: "Dra. Elena Torres",
              role: "Cirujana dentista",
              spec: "Odontología preventiva, restaurativa y atención integral",
              img: "/images/elena-torres.jpg",
              alt: "Imagen ilustrativa de una dentista profesional — personaje ficticio de demostración",
              accent: "#55D6A9",
            },
            {
              name: "Dr. Daniel Vega",
              role: "Ortodoncia",
              spec: "Función, alineación y confianza en tu sonrisa",
              img: "/images/daniel-vega.jpg",
              alt: "Imagen ilustrativa de un odontólogo especialista — personaje ficticio de demostración",
              accent: "#78BFEA",
            },
          ].map((doc) => (
            <div key={doc.name} className="card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={doc.img}
                  alt={doc.alt}
                  className={`w-full h-full object-cover ${doc.name === "Dra. Elena Torres" ? "object-[center_top]" : "object-top"}`}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(8,29,44,0.6) 0%, transparent 50%)` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl px-3 py-2"
                  style={{
                    background: "rgba(8,29,44,0.85)",
                    border: `1px solid ${doc.accent}33`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "Sora, sans-serif" }}>{doc.name}</p>
                  <p className="text-xs" style={{ color: doc.accent, fontFamily: "Inter, sans-serif" }}>{doc.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed" style={{ color: "rgba(8,29,44,0.7)", fontFamily: "Inter, sans-serif" }}>
                  {doc.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mx-auto max-w-lg rounded-xl px-5 py-3"
          style={{ background: "rgba(8,29,44,0.05)", border: "1px solid rgba(8,29,44,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(8,29,44,0.5)", fontFamily: "Inter, sans-serif" }}
          >
            ⚠️ Los nombres, retratos y perfiles son ficticios y forman parte de esta demostración.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section
      id="experiencia"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#0E2E46" }}
      aria-label="Experiencia del paciente"
    >
      <div
        className="geo-accent"
        style={{ width: 350, height: 350, background: "#78BFEA", top: -80, left: -80 }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{
                color: "#55D6A9",
                background: "rgba(85,214,169,0.12)",
                border: "1px solid rgba(85,214,169,0.2)",
                fontFamily: "Sora, sans-serif",
              }}
            >
              Experiencia
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
            >
              Queremos que te sientas bien desde la primera visita
            </h2>

            <div className="flex flex-col gap-5">
              {BENEFITS.map((b) => (
                <div key={b.text} className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "rgba(85,214,169,0.12)", border: "1px solid rgba(85,214,169,0.15)" }}
                    aria-hidden="true"
                  >
                    {b.icon}
                  </span>
                  <p
                    className="text-sm leading-relaxed pt-2"
                    style={{ color: "rgba(245,248,250,0.72)", fontFamily: "Inter, sans-serif" }}
                  >
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ boxShadow: "0 20px 48px rgba(0,0,0,0.35)" }}
            >
              <img
                src="/images/patient-experience.jpg"
                alt="Dentista en conversación atenta con paciente en clínica dental moderna"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div>
          <h3
            className="text-xl font-semibold mb-2 text-center"
            style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif" }}
          >
            Lo que dirían nuestros pacientes
          </h3>
          <p
            className="text-center text-xs mb-8"
            style={{ color: "rgba(245,248,250,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            Testimonios ilustrativos de esta demostración.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(8,29,44,0.5)",
                  border: "1px solid rgba(120,191,234,0.12)",
                }}
              >
                <p
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "rgba(245,248,250,0.78)", fontFamily: "Inter, sans-serif" }}
                >
                  "{t.quote}"
                </p>
                <footer className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: "rgba(85,214,169,0.15)" }}
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </span>
                  <div>
                    <cite className="text-sm font-medium not-italic" style={{ color: "#F5F8FA", fontFamily: "Sora, sans-serif" }}>{t.name}</cite>
                    <p className="text-xs" style={{ color: "rgba(245,248,250,0.45)", fontFamily: "Inter, sans-serif" }}>{t.detail}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto({ onDemoAction }: { onDemoAction: (action: DemoAction) => void }) {
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sent");
    setForm({ nombre: "", telefono: "", mensaje: "" });
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28"
      style={{ background: "#F5F8FA" }}
      aria-label="Contacto"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "#55D6A9",
              background: "rgba(85,214,169,0.1)",
              border: "1px solid rgba(85,214,169,0.2)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Contacto
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#081D2C", fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}
          >
            Da el primer paso para cuidar tu sonrisa
          </h2>
          <p
            className="text-base"
            style={{ color: "rgba(8,29,44,0.62)", fontFamily: "Inter, sans-serif" }}
          >
            Estamos para resolver tus dudas y ayudarte a encontrar el mejor momento para tu consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left column: info + map */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); onDemoAction("whatsapp"); }}
                className="btn-primary px-6 py-4 text-sm text-center flex items-center justify-center gap-2"
                aria-label="Solicitar cita por WhatsApp (demostración sin número real)"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.84L0 24l6.34-1.46A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="currentColor"/>
                </svg>
                Solicitar cita por WhatsApp
              </a>
              <button
                type="button"
                onClick={() => onDemoAction("phone")}
                className="btn-outline-dark px-6 py-4 text-sm flex items-center justify-center gap-2 w-full"
                aria-label="Llamar al consultorio (número de demostración)"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.74 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.65 2H6.7a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.04a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Llamar al consultorio
              </button>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "#fff", border: "1px solid rgba(8,29,44,0.08)", boxShadow: "0 2px 12px rgba(8,29,44,0.06)" }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>Datos de contacto</h3>
              <dl className="flex flex-col gap-3">
                {[
                  { icon: "📍", label: "Dirección", value: "Av. Ejemplo 120, Querétaro, Qro." },
                  { icon: "📞", label: "Teléfono", value: "442 000 0000" },
                  { icon: "✉️", label: "Correo", value: "hola@aureadental.demo", action: "email" as const },
                  { icon: "🕘", label: "Horario", value: "Lun–Vie 9:00–19:00 · Sáb 9:00–14:00" },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 flex-shrink-0" aria-hidden="true">{d.icon}</span>
                    <div>
                      <dt className="text-xs font-medium" style={{ color: "rgba(8,29,44,0.45)", fontFamily: "Inter, sans-serif" }}>{d.label}</dt>
                      {d.action ? (
                        <button
                          type="button"
                          className="text-sm text-left underline underline-offset-2"
                          style={{ color: "#081D2C", fontFamily: "Inter, sans-serif" }}
                          onClick={() => onDemoAction(d.action)}
                        >
                          {d.value}
                        </button>
                      ) : <dd className="text-sm" style={{ color: "#081D2C", fontFamily: "Inter, sans-serif" }}>{d.value}</dd>}
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Demo map */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ height: 180, background: "#E8F0F5", border: "1px solid rgba(8,29,44,0.08)" }}
              role="img"
              aria-label="Tarjeta de ubicación de demostración — no representa un mapa real"
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #E8F4FB 0%, #EEF7F2 100%)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#081D2C" }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                  </svg>
                </div>
                <p className="text-xs font-semibold" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>Av. Ejemplo 120, Querétaro</p>
                <p className="text-xs" style={{ color: "rgba(8,29,44,0.5)", fontFamily: "Inter, sans-serif" }}>Ubicación de demostración</p>
              </div>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{
                  backgroundImage: "linear-gradient(rgba(120,191,234,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(120,191,234,0.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
          </div>

          {/* Right column: form */}
          <div
            className="rounded-2xl p-7"
            style={{ background: "#fff", border: "1px solid rgba(8,29,44,0.08)", boxShadow: "0 4px 20px rgba(8,29,44,0.08)" }}
          >
            <h3 className="text-lg font-semibold mb-1" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>
              Escríbenos tu consulta
            </h3>
            <p
              className="text-xs mb-6 px-3 py-2 rounded-lg"
              style={{ color: "rgba(8,29,44,0.5)", background: "rgba(8,29,44,0.03)", fontFamily: "Inter, sans-serif", border: "1px solid rgba(8,29,44,0.06)" }}
            >
              ⚠️ Formulario simulado — no recopila ni transmite datos reales. Solo para demostración.
            </p>

            {formState === "sent" ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                role="status"
                aria-live="polite"
              >
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "rgba(85,214,169,0.12)", border: "2px solid rgba(85,214,169,0.3)" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-base" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>¡Mensaje simulado enviado!</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(8,29,44,0.55)", fontFamily: "Inter, sans-serif" }}>
                    No se transmitieron datos. En un escenario real, aquí se confirmaría el siguiente paso.
                  </p>
                </div>
                <button
                  onClick={() => { setFormState("idle"); setForm({ nombre: "", telefono: "", mensaje: "" }); }}
                  className="btn-outline-dark px-5 py-2.5 text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(8,29,44,0.65)", fontFamily: "Inter, sans-serif" }}>
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-150"
                      style={{
                        border: "1.5px solid rgba(8,29,44,0.12)",
                        color: "#081D2C",
                        background: "#F5F8FA",
                        fontFamily: "Inter, sans-serif",
                        outline: "none",
                      }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#55D6A9"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(85,214,169,0.12)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(8,29,44,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(8,29,44,0.65)", fontFamily: "Inter, sans-serif" }}>
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      placeholder="442 000 0000"
                      className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-150"
                      style={{
                        border: "1.5px solid rgba(8,29,44,0.12)",
                        color: "#081D2C",
                        background: "#F5F8FA",
                        fontFamily: "Inter, sans-serif",
                        outline: "none",
                      }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#55D6A9"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(85,214,169,0.12)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(8,29,44,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(8,29,44,0.65)", fontFamily: "Inter, sans-serif" }}>
                      Mensaje o consulta
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-3 text-sm rounded-xl resize-none transition-all duration-150"
                      style={{
                        border: "1.5px solid rgba(8,29,44,0.12)",
                        color: "#081D2C",
                        background: "#F5F8FA",
                        fontFamily: "Inter, sans-serif",
                        outline: "none",
                      }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#55D6A9"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(85,214,169,0.12)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(8,29,44,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary px-6 py-3.5 text-sm w-full flex items-center justify-center gap-2"
                    aria-busy="false"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-12"
      style={{ background: "#081D2C", borderTop: "1px solid rgba(120,191,234,0.1)" }}
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5 mb-3" aria-label="Áurea Clínica Dental — subir al inicio">
              <span
                className="flex items-center justify-center w-7 h-7 rounded-lg"
                style={{ background: "linear-gradient(135deg,#55D6A9,#78BFEA)" }}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C5.69 2 3 4.69 3 8c0 2.48 1.43 4.64 3.5 5.72L7.5 16h3l1-2.28C13.57 12.64 15 10.48 15 8c0-3.31-2.69-6-6-6z" fill="white" opacity="0.9"/>
                </svg>
              </span>
              <span className="font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                Áurea<span style={{ color: "#55D6A9" }}>.</span>
              </span>
            </a>
            <p className="text-xs" style={{ color: "rgba(245,248,250,0.38)", fontFamily: "Inter, sans-serif" }}>
              Proyecto conceptual creado por PEPE LABS.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs transition-colors"
                    style={{ color: "rgba(245,248,250,0.5)", fontFamily: "Inter, sans-serif" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#55D6A9")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,248,250,0.5)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="pt-6 flex flex-col gap-2"
          style={{ borderTop: "1px solid rgba(120,191,234,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,248,250,0.3)", fontFamily: "Inter, sans-serif" }}>
            Aviso de privacidad: Este sitio es una demostración ficticia. No se recopilan datos reales.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,248,250,0.25)", fontFamily: "Inter, sans-serif" }}>
            Todos los nombres, datos, imágenes y testimonios son ficticios y forman parte de esta demostración de PEPE LABS.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB({ onDemoAction }: { onDemoAction: (action: DemoAction) => void }) {
  return (
    <a
      href="#contacto"
      onClick={(e) => { e.preventDefault(); onDemoAction("whatsapp"); }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl px-4 py-3 transition-all duration-200"
      style={{
        background: "#25D366",
        boxShadow: "0 6px 20px rgba(37,211,102,0.4)",
        textDecoration: "none",
      }}
      aria-label="Abrir WhatsApp para solicitar cita (botón de demostración sin número real)"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,211,102,0.4)";
      }}
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.84L0 24l6.34-1.46A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.62-.5-5.14-1.36l-.37-.22-3.77.87.9-3.65-.24-.38A9.95 9.95 0 0 1 2 12c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10zm5.5-7.36c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07A8.16 8.16 0 0 1 9 12.78c-.4-.69-.07-1 .28-1.34.23-.23.5-.6.75-.9.25-.3.33-.52.5-.87.17-.35.08-.65-.04-.9s-.67-1.62-.92-2.22-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" fill="white"/>
      </svg>
      <span className="text-white text-sm font-semibold hidden sm:block" style={{ fontFamily: "Sora, sans-serif" }}>
        WhatsApp
      </span>
    </a>
  );
}

function DemoNotice({ action, onClose }: { action: DemoAction | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!action) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [action, onClose]);

  if (!action) return null;

  const messages: Record<DemoAction, { title: string; message: string }> = {
    whatsapp: { title: "WhatsApp de demostración", message: "Este botón es visual y no abre WhatsApp ni transmite información." },
    phone: { title: "Teléfono de demostración", message: "Este botón es visual y no realiza llamadas." },
    email: { title: "Correo de demostración", message: "Este botón es visual y no abre un cliente de correo ni envía mensajes." },
  };
  const content = messages[action];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="demo-notice-title">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#0E8A67" }}>Demostración</p>
        <h2 id="demo-notice-title" className="mb-3 text-xl font-semibold" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>{content.title}</h2>
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(8,29,44,0.7)" }}>{content.message}</p>
        <button ref={closeButtonRef} type="button" className="btn-primary w-full px-5 py-3 text-sm" onClick={onClose}>Entendido</button>
      </div>
    </div>
  );
}

export default function App() {
  const [demoAction, setDemoAction] = useState<DemoAction | null>(null);
  const closeDemoNotice = () => setDemoAction(null);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        style={{ background: "#55D6A9", color: "#081D2C", fontFamily: "Sora, sans-serif" }}
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Clinica />
        <Tratamientos />
        <Equipo />
        <Experiencia />
        <Contacto onDemoAction={setDemoAction} />
      </main>
      <Footer />
      <WhatsAppFAB onDemoAction={setDemoAction} />
      <DemoNotice action={demoAction} onClose={closeDemoNotice} />
    </>
  );
}
