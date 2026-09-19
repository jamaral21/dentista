import type { ReactNode } from "react";

export type DemoAction = "whatsapp" | "phone" | "email";

export type NavigationLink = { href: string; label: string };
export type Treatment = { icon: ReactNode; title: string; desc: string };
export type Profile = { name: string; role: string; spec: string; img: string; alt: string; accent: string };
export type Benefit = { icon: string; text: string };
export type Testimonial = { quote: string; name: string; detail: string };
export type ContactItem = { icon: string; label: string; value: string; action?: DemoAction };
