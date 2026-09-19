import type { ReactNode } from "react";
import type { Benefit, ContactItem, NavigationLink, Profile, Testimonial, Treatment } from "@/types/site";

export const navigationLinks: NavigationLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clinica", label: "Clínica" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const icon = (paths: ReactNode) => <svg width="28" height="28" fill="none" viewBox="0 0 28 28" aria-hidden="true">{paths}</svg>;

export const treatments: Treatment[] = [
  { icon: icon(<><path d="M14 4C9.58 4 6 7.58 6 12c0 3.31 1.9 6.18 4.67 7.63L12 24h4l1.33-4.37C20.1 18.18 22 15.31 22 12c0-4.42-3.58-8-8-8z" stroke="#55D6A9" strokeWidth="1.7" strokeLinejoin="round"/><path d="M11 12h6M14 9v6" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/></>), title: "Odontología general", desc: "Valoración, prevención y tratamiento de problemas comunes." },
  { icon: icon(<><ellipse cx="14" cy="14" rx="9" ry="6" stroke="#55D6A9" strokeWidth="1.7"/><path d="M8 11c1.5-2 3.5-3 6-3s4.5 1 6 3" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/><circle cx="14" cy="14" r="2" fill="#55D6A9" opacity="0.5"/></>), title: "Limpieza dental", desc: "Eliminación profesional de placa y sarro." },
  { icon: icon(<><path d="M6 14c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/><path d="M10 14l2.5 2.5L18 11" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>), title: "Blanqueamiento", desc: "Alternativas profesionales controladas." },
  { icon: icon(<><path d="M7 21l3-8 4 5 3-8 4 7" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="8" r="3" stroke="#78BFEA" strokeWidth="1.7"/></>), title: "Ortodoncia", desc: "Mejorar posición y mordida." },
  { icon: icon(<><rect x="6" y="13" width="16" height="8" rx="2" stroke="#55D6A9" strokeWidth="1.7"/><path d="M10 13V11a4 4 0 0 1 8 0v2" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/><path d="M14 17v2" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round"/></>), title: "Implantes y rehabilitación", desc: "Recuperar piezas y funcionalidad." },
  { icon: icon(<><path d="M14 6v3M14 19v3M6 14h3M19 14h3" stroke="#78BFEA" strokeWidth="1.7" strokeLinecap="round"/><circle cx="14" cy="14" r="6" stroke="#55D6A9" strokeWidth="1.7"/><path d="M11 14l2 2 4-4" stroke="#55D6A9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>), title: "Atención de urgencias", desc: "Valoración oportuna para dolor o lesiones." },
];

export const benefits: Benefit[] = [
  { icon: "💬", text: "Explicaciones claras antes de comenzar" },
  { icon: "🤝", text: "Atención respetuosa y sin prisas" },
  { icon: "✨", text: "Espacios cómodos y limpios" },
  { icon: "📋", text: "Seguimiento después del tratamiento" },
];

export const testimonials: Testimonial[] = [
  { quote: "Por fin una clínica que me explicó todo antes de empezar. Me fui con mis dudas resueltas y sin sorpresas.", name: "Mariana G.", detail: "Querétaro" },
  { quote: "Me contactaron por WhatsApp y me respondieron el mismo día. Muy cómodo para agendar sin tanto trámite.", name: "Roberto A.", detail: "Querétaro" },
  { quote: "El consultorio se siente moderno y limpio. Desde que llegué me sentí en buenas manos.", name: "Sofía T.", detail: "Querétaro" },
];

export const profiles: Profile[] = [
  { name: "Dra. Elena Torres", role: "Cirujana dentista", spec: "Odontología preventiva, restaurativa y atención integral", img: "/images/elena-torres.jpg", alt: "Imagen ilustrativa de una dentista profesional — personaje ficticio de demostración", accent: "#55D6A9" },
  { name: "Dr. Daniel Vega", role: "Ortodoncia", spec: "Función, alineación y confianza en tu sonrisa", img: "/images/daniel-vega.jpg", alt: "Imagen ilustrativa de un odontólogo especialista — personaje ficticio de demostración", accent: "#78BFEA" },
];

export const contactItems: ContactItem[] = [
  { icon: "📍", label: "Dirección", value: "Av. Ejemplo 120, Querétaro, Qro." },
  { icon: "📞", label: "Teléfono", value: "442 000 0000" },
  { icon: "✉️", label: "Correo", value: "hola@aureadental.demo", action: "email" },
  { icon: "🕘", label: "Horario", value: "Lun–Vie 9:00–19:00 · Sáb 9:00–14:00" },
];
