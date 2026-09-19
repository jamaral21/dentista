import { navigationLinks } from "@/content/site-content";

export function Footer() {
  return <footer className="py-12" style={{ background: "#081D2C", borderTop: "1px solid rgba(120,191,234,0.1)" }} aria-label="Pie de página">
    <div className="max-w-6xl mx-auto px-5">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
        <div><a href="#inicio" className="flex items-center gap-2.5 mb-3" aria-label="Áurea Clínica Dental — subir al inicio"><span className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: "linear-gradient(135deg,#55D6A9,#78BFEA)" }} aria-hidden="true"><svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M9 2C5.69 2 3 4.69 3 8c0 2.48 1.43 4.64 3.5 5.72L7.5 16h3l1-2.28C13.57 12.64 15 10.48 15 8c0-3.31-2.69-6-6-6z" fill="white" opacity="0.9"/></svg></span><span className="font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>Áurea<span style={{ color: "#55D6A9" }}>.</span></span></a><p className="text-xs" style={{ color: "rgba(245,248,250,0.38)", fontFamily: "Inter, sans-serif" }}>Proyecto conceptual creado por PEPE LABS.</p></div>
        <nav aria-label="Navegación del pie de página"><ul className="flex flex-wrap gap-x-6 gap-y-2">{navigationLinks.map((link) => <li key={link.href}><a href={link.href} className="text-xs transition-colors" style={{ color: "rgba(245,248,250,0.5)", fontFamily: "Inter, sans-serif" }}>{link.label}</a></li>)}</ul></nav>
      </div>
      <div className="pt-6 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(120,191,234,0.08)" }}><p className="text-xs" style={{ color: "rgba(245,248,250,0.3)", fontFamily: "Inter, sans-serif" }}>Aviso de privacidad: Este sitio es una demostración ficticia. No se recopilan datos reales.</p><p className="text-xs" style={{ color: "rgba(245,248,250,0.25)", fontFamily: "Inter, sans-serif" }}>Todos los nombres, datos, imágenes y testimonios son ficticios y forman parte de esta demostración de PEPE LABS.</p></div>
    </div>
  </footer>;
}
