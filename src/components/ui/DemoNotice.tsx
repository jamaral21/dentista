import { useEffect, useRef } from "react";
import type { DemoAction } from "@/types/site";

const messages: Record<DemoAction, { title: string; message: string }> = {
  whatsapp: { title: "WhatsApp de demostración", message: "Este botón es visual y no abre WhatsApp ni transmite información." },
  phone: { title: "Teléfono de demostración", message: "Este botón es visual y no realiza llamadas." },
  email: { title: "Correo de demostración", message: "Este botón es visual y no abre un cliente de correo ni envía mensajes." },
};

export function DemoNotice({ action, onClose }: { action: DemoAction | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!action) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [action, onClose]);

  if (!action) return null;
  const content = messages[action];
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div ref={dialogRef} className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="demo-notice-title">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#0E8A67" }}>Demostración</p>
      <h2 id="demo-notice-title" className="mb-3 text-xl font-semibold" style={{ color: "#081D2C", fontFamily: "Sora, sans-serif" }}>{content.title}</h2>
      <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(8,29,44,0.7)" }}>{content.message}</p>
      <button ref={closeButtonRef} type="button" className="btn-primary w-full px-5 py-3 text-sm" onClick={onClose}>Entendido</button>
    </div>
  </div>;
}
