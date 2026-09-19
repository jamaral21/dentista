import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [hero, app, modal, header, contact] = await Promise.all([
  readFile("src/components/sections/Hero.tsx", "utf8"),
  readFile("src/App.tsx", "utf8"),
  readFile("src/components/ui/DemoNotice.tsx", "utf8"),
  readFile("src/components/layout/Header.tsx", "utf8"),
  readFile("src/components/sections/Contacto.tsx", "utf8"),
]);

assert.equal((hero.match(/<h1\b/g) ?? []).length, 1, "Hero debe contener un solo h1");
assert.match(app, /<DemoNotice action=\{demoAction\}/, "App debe montar el modal");
assert.match(modal, /role="dialog"/);
assert.match(modal, /aria-modal="true"/);
assert.match(modal, /event\.key === "Escape"/);
assert.match(modal, /event\.key !== "Tab"/);
assert.match(header, /aria-expanded=\{menuOpen\}/);
assert.match(header, /aria-controls="mobile-menu"/);
assert.match(header, /firstLinkRef\.current\?\.focus\(\)/);
assert.match(contact, /event\.preventDefault\(\)/);
assert.match(contact, /setSent\(true\)/);
assert.doesNotMatch(contact, /fetch\(|axios|localStorage|sessionStorage/);

