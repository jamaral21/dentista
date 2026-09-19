import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { Clinica } from "@/components/sections/Clinica";
import { Contacto } from "@/components/sections/Contacto";
import { Equipo } from "@/components/sections/Equipo";
import { Experiencia } from "@/components/sections/Experiencia";
import { Hero } from "@/components/sections/Hero";
import { Tratamientos } from "@/components/sections/Tratamientos";
import { DemoNotice } from "@/components/ui/DemoNotice";
import type { DemoAction } from "@/types/site";

export default function App() {
  const [demoAction, setDemoAction] = useState<DemoAction | null>(null);
  const closeDemoNotice = () => {
    document.getElementById("site-shell")?.removeAttribute("inert");
    setDemoAction(null);
  };

  useEffect(() => {
    document.getElementById("site-shell")?.toggleAttribute("inert", demoAction !== null);
  }, [demoAction]);

  return <>
    <div id="site-shell">
      <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium" style={{ background: "#55D6A9", color: "#081D2C", fontFamily: "Sora, sans-serif" }}>Saltar al contenido principal</a>
      <Header />
      <main id="main-content"><Hero /><Clinica /><Tratamientos /><Equipo /><Experiencia /><Contacto onDemoAction={setDemoAction} /></main>
      <Footer />
      <WhatsAppFAB onDemoAction={setDemoAction} />
    </div>
    <DemoNotice action={demoAction} onClose={closeDemoNotice} />
  </>;
}
