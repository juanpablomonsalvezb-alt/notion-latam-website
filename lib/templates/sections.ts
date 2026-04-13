/* ═══════════════════════════════════════════════════════
   ORBBI TEMPLATE ENGINE — Section Library
   Each section = HTML block with {{placeholder}} syntax
   + CSS variables from tweaks
═══════════════════════════════════════════════════════ */

import type { SectionDef } from "./types";

const p = (values: Record<string, string>, id: string, fallback = "") =>
  values[id] || fallback;

// ── Helper: escape HTML ──────────────────────────────────
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── Helper: split list field ─────────────────────────────
const list = (values: Record<string, string>, id: string, fallback: string[]) => {
  const raw = values[id];
  return raw ? raw.split("|").map(s => s.trim()).filter(Boolean) : fallback;
};

// ════════════════════════════════════════════════════════
//  NAVBAR
// ════════════════════════════════════════════════════════
export const navbarSection: SectionDef = {
  id: "navbar",
  label: "Navegación",
  icon: "☰",
  required: true,
  defaultEnabled: true,
  fields: [
    { id: "logo_text", label: "Nombre / Logo", type: "text", placeholder: "Mi Negocio", default: "Mi Negocio" },
    { id: "nav_links", label: "Links (separados por |)", type: "text", placeholder: "Servicios|Nosotros|Contacto", default: "Servicios|Nosotros|Contacto" },
    { id: "cta_text", label: "Botón CTA", type: "text", placeholder: "Contáctanos", default: "Contáctanos" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", placeholder: "56912345678", default: "56912345678" },
  ],
  render(v) {
    const links = list(v, "nav_links", ["Servicios", "Nosotros", "Contacto"]);
    const wa = `https://wa.me/${p(v, "whatsapp", "56912345678")}?text=${encodeURIComponent("Hola, vi su sitio y quiero más información.")}`;
    return `
<!-- NAVBAR -->
<nav id="orbbi-nav" style="position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;transition:all .3s">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between">
    <a href="#" style="font-family:var(--font-head);font-size:20px;font-weight:700;color:var(--text);text-decoration:none;display:flex;align-items:center;gap:8px">
      <span style="width:8px;height:8px;border-radius:50%;background:var(--accent);display:inline-block"></span>
      ${esc(p(v, "logo_text", "Mi Negocio"))}
    </a>
    <nav style="display:flex;gap:28px" class="orbbi-nav-links">
      ${links.map(l => `<a href="#${l.toLowerCase().replace(/\s+/g,'-')}" style="font-size:14px;font-weight:500;color:var(--text-muted);text-decoration:none;transition:color .2s" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">${esc(l)}</a>`).join("")}
    </nav>
    <a href="${wa}" target="_blank" rel="noopener" style="background:var(--accent);color:var(--accent-text);padding:10px 22px;border-radius:var(--radius);font-size:13px;font-weight:700;text-decoration:none;transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
      ${esc(p(v, "cta_text", "Contáctanos"))}
    </a>
  </div>
</nav>
<script>
  window.addEventListener('scroll',function(){
    var nav=document.getElementById('orbbi-nav');
    if(nav){nav.style.background=window.scrollY>40?'color-mix(in srgb,var(--bg) 94%,transparent)':'transparent';nav.style.backdropFilter=window.scrollY>40?'blur(20px)':'none';nav.style.borderBottom=window.scrollY>40?'1px solid var(--border)':'none';}
  });
</script>`;
  },
};

// ════════════════════════════════════════════════════════
//  HERO
// ════════════════════════════════════════════════════════
export const heroSection: SectionDef = {
  id: "hero",
  label: "Hero",
  icon: "⚡",
  required: true,
  defaultEnabled: true,
  fields: [
    { id: "badge", label: "Badge (sobre el título)", type: "text", placeholder: "Nuevo · Powered by IA", default: "Nuevo · El mejor del sector" },
    { id: "headline", label: "Título principal", type: "text", placeholder: "Tu servicio profesional", default: "Tu servicio profesional en tu ciudad" },
    { id: "subheadline", label: "Subtítulo", type: "textarea", placeholder: "Descripción...", default: "Atendemos con calidad, compromiso y rapidez. Contactanos hoy y recibí tu consulta gratuita sin compromiso." },
    { id: "cta1", label: "Botón primario", type: "text", placeholder: "Contáctanos ahora", default: "Contáctanos ahora" },
    { id: "cta2", label: "Botón secundario", type: "text", placeholder: "Ver servicios", default: "Ver servicios" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", placeholder: "56912345678", default: "56912345678" },
    { id: "bg_image", label: "Imagen de fondo (URL)", type: "image", placeholder: "https://...", default: "" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v, "whatsapp", "56912345678")}?text=${encodeURIComponent("Hola, quiero más información.")}`;
    const bgStyle = p(v, "bg_image")
      ? `background-image:url('${p(v, "bg_image")}');background-size:cover;background-position:center;`
      : `background:var(--bg);`;
    const overlay = p(v, "bg_image") ? `<div style="position:absolute;inset:0;background:rgba(0,0,0,.55)"></div>` : "";
    return `
<!-- HERO -->
<section id="hero" style="min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:120px 24px 80px;${bgStyle}">
  <div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 60% at 50% 20%,color-mix(in srgb,var(--accent) 14%,transparent),transparent 70%)"></div>
  ${overlay}
  <div style="position:relative;z-index:1;max-width:800px;text-align:center;margin:0 auto">
    ${p(v,"badge") ? `<div style="display:inline-flex;align-items:center;gap:8px;padding:6px 18px;border-radius:999px;background:color-mix(in srgb,var(--accent) 14%,transparent);border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);font-size:12px;font-weight:600;color:var(--accent);letter-spacing:.06em;text-transform:uppercase;margin-bottom:24px">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--accent);animation:orbbi-pulse 2s infinite"></span>
      ${esc(p(v,"badge"))}
    </div>` : ""}
    <h1 style="font-family:var(--font-head);font-size:clamp(38px,7vw,80px);font-weight:700;line-height:1.1;color:var(--text);margin:0 0 20px;text-shadow:0 2px 40px rgba(0,0,0,.3)">
      ${esc(p(v, "headline", "Tu servicio profesional"))}
    </h1>
    <p style="font-size:clamp(16px,2.2vw,20px);color:var(--text-muted);max-width:54ch;margin:0 auto 36px;line-height:1.7">
      ${esc(p(v, "subheadline", "Contactanos hoy."))}
    </p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="${wa}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:var(--radius);background:var(--accent);color:var(--accent-text);font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 24px color-mix(in srgb,var(--accent) 40%,transparent);transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        ⚡ ${esc(p(v, "cta1", "Contáctanos ahora"))}
      </a>
      <a href="#servicios" style="display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:var(--radius);background:transparent;color:var(--text);font-size:15px;font-weight:600;text-decoration:none;border:1.5px solid var(--border);transition:border-color .2s,color .2s" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text)'">
        ${esc(p(v, "cta2", "Ver servicios"))}
      </a>
    </div>
  </div>
  <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;color:var(--text-muted);letter-spacing:.12em;text-transform:uppercase;animation:orbbi-bounce 2.4s infinite">
    Scroll<span style="width:1.5px;height:40px;background:var(--border);display:block"></span>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  TRUST / STATS
// ════════════════════════════════════════════════════════
export const trustSection: SectionDef = {
  id: "trust",
  label: "Confianza / Stats",
  icon: "📊",
  defaultEnabled: true,
  fields: [
    { id: "stat1_val", label: "Stat 1 — Valor", type: "text", default: "500+" },
    { id: "stat1_label", label: "Stat 1 — Label", type: "text", default: "Clientes atendidos" },
    { id: "stat2_val", label: "Stat 2 — Valor", type: "text", default: "10+" },
    { id: "stat2_label", label: "Stat 2 — Label", type: "text", default: "Años de experiencia" },
    { id: "stat3_val", label: "Stat 3 — Valor", type: "text", default: "98%" },
    { id: "stat3_label", label: "Stat 3 — Label", type: "text", default: "Satisfacción garantizada" },
    { id: "stat4_val", label: "Stat 4 — Valor", type: "text", default: "4.9★" },
    { id: "stat4_label", label: "Stat 4 — Label", type: "text", default: "Calificación Google" },
  ],
  render(v) {
    const stats = [1,2,3,4].map(i => ({ val: p(v,`stat${i}_val`), label: p(v,`stat${i}_label`) }));
    return `
<!-- TRUST -->
<section id="confianza" style="background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
  <div style="max-width:var(--max-w);margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr)">
    ${stats.map((s,i) => `
    <div style="text-align:center;padding:36px 16px;${i>0?'border-left:1px solid var(--border)':''}">
      <div class="orbbi-counter" data-target="${s.val.replace(/[^0-9.]/g,"")}" data-suffix="${s.val.replace(/[0-9.]/g,"")}" style="font-family:var(--font-head);font-size:clamp(28px,4vw,48px);font-weight:700;color:var(--accent);line-height:1">${s.val}</div>
      <div style="font-size:13px;color:var(--text-muted);margin-top:6px;font-weight:500">${esc(s.label)}</div>
    </div>`).join("")}
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  SERVICES
// ════════════════════════════════════════════════════════
export const servicesSection: SectionDef = {
  id: "servicios",
  label: "Servicios",
  icon: "🔧",
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título de sección", type: "text", default: "Nuestros servicios" },
    { id: "subtitulo", label: "Subtítulo", type: "textarea", default: "Todo lo que necesitás en un solo lugar, con la calidad y atención que merecés." },
    { id: "s1_icon", label: "Servicio 1 — Icono", type: "text", default: "⚡" },
    { id: "s1_title", label: "Servicio 1 — Título", type: "text", default: "Servicio Principal" },
    { id: "s1_desc", label: "Servicio 1 — Descripción", type: "textarea", default: "Descripción breve del servicio principal que ofrecemos con calidad garantizada." },
    { id: "s2_icon", label: "Servicio 2 — Icono", type: "text", default: "🛡️" },
    { id: "s2_title", label: "Servicio 2 — Título", type: "text", default: "Garantía Total" },
    { id: "s2_desc", label: "Servicio 2 — Descripción", type: "textarea", default: "Respaldo y garantía en cada trabajo. Tu satisfacción es nuestra prioridad." },
    { id: "s3_icon", label: "Servicio 3 — Icono", type: "text", default: "📋" },
    { id: "s3_title", label: "Servicio 3 — Título", type: "text", default: "Consulta Gratis" },
    { id: "s3_desc", label: "Servicio 3 — Descripción", type: "textarea", default: "Evaluamos tu caso sin costo. Te damos un presupuesto claro y transparente." },
    { id: "s4_icon", label: "Servicio 4 — Icono", type: "text", default: "🚀" },
    { id: "s4_title", label: "Servicio 4 — Título", type: "text", default: "Respuesta Rápida" },
    { id: "s4_desc", label: "Servicio 4 — Descripción", type: "textarea", default: "Atendemos tu solicitud en menos de 2 horas. Sin esperas innecesarias." },
    { id: "s5_icon", label: "Servicio 5 — Icono", type: "text", default: "💬" },
    { id: "s5_title", label: "Servicio 5 — Título", type: "text", default: "Soporte Continuo" },
    { id: "s5_desc", label: "Servicio 5 — Descripción", type: "textarea", default: "Acompañamiento antes, durante y después del servicio para tu tranquilidad." },
    { id: "s6_icon", label: "Servicio 6 — Icono", type: "text", default: "✅" },
    { id: "s6_title", label: "Servicio 6 — Título", type: "text", default: "Resultados Reales" },
    { id: "s6_desc", label: "Servicio 6 — Descripción", type: "textarea", default: "Más de 500 clientes satisfechos avalan nuestro trabajo. Resultados concretos." },
  ],
  render(v) {
    const services = [1,2,3,4,5,6].map(i => ({
      icon: p(v,`s${i}_icon`), title: p(v,`s${i}_title`), desc: p(v,`s${i}_desc`)
    })).filter(s => s.title);
    return `
<!-- SERVICIOS -->
<section id="servicios" style="padding:var(--section-pad);background:var(--bg)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:56px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Lo que hacemos</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0;line-height:1.15">${esc(p(v,"titulo","Nuestros servicios"))}</h2>
      <p style="font-size:clamp(15px,2vw,17px);color:var(--text-muted);max-width:54ch;margin:0 auto;line-height:1.7">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
      ${services.map(s => `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px;transition:transform .25s,box-shadow .25s,border-color .25s;cursor:default" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 60px rgba(0,0,0,.25)';this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='none';this.style.boxShadow='none';this.style.borderColor='var(--border)'">
        <div style="width:52px;height:52px;border-radius:var(--radius);background:color-mix(in srgb,var(--accent) 14%,transparent);border:1px solid color-mix(in srgb,var(--accent) 28%,transparent);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px">${s.icon}</div>
        <h3 style="font-family:var(--font-head);font-size:18px;font-weight:700;color:var(--text);margin:0 0 10px">${esc(s.title)}</h3>
        <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin:0">${esc(s.desc)}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  GALLERY
// ════════════════════════════════════════════════════════
export const gallerySection: SectionDef = {
  id: "galeria",
  label: "Galería",
  icon: "🖼️",
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Nuestro trabajo" },
    { id: "subtitulo", label: "Subtítulo", type: "text", default: "Resultados que hablan por sí solos." },
    { id: "img1", label: "Foto 1 (URL)", type: "image", default: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&q=80" },
    { id: "img2", label: "Foto 2 (URL)", type: "image", default: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&q=80" },
    { id: "img3", label: "Foto 3 (URL)", type: "image", default: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop&q=80" },
    { id: "img4", label: "Foto 4 (URL)", type: "image", default: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop&q=80" },
    { id: "img5", label: "Foto 5 (URL)", type: "image", default: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop&q=80" },
    { id: "img6", label: "Foto 6 (URL)", type: "image", default: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&q=80" },
  ],
  render(v) {
    const GALLERY_DEFAULTS = [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&q=80",
    ];
    const imgs = [1,2,3,4,5,6].map((i,idx) => p(v,`img${i}`, GALLERY_DEFAULTS[idx]));
    return `
<!-- GALERÍA -->
<section id="galeria" style="padding:var(--section-pad);background:var(--bg2)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:48px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Portafolio</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","Nuestro trabajo"))}</h2>
      <p style="font-size:15px;color:var(--text-muted)">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
      ${imgs.map((img,i) => `
      <div style="aspect-ratio:1;overflow:hidden;border-radius:var(--radius);cursor:pointer;position:relative" onclick="this.querySelector('img').style.transform='scale(1)'">
        <img src="${img}" alt="Trabajo ${i+1}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseover="this.style.transform='scale(1.07)'" onmouseout="this.style.transform='scale(1)'" />
        <div style="position:absolute;inset:0;background:rgba(0,0,0,.45);opacity:0;transition:opacity .3s;display:flex;align-items:center;justify-content:center;font-size:28px" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">🔍</div>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  ABOUT
// ════════════════════════════════════════════════════════
export const aboutSection: SectionDef = {
  id: "nosotros",
  label: "Sobre nosotros",
  icon: "👥",
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Quiénes somos" },
    { id: "subtitulo", label: "Subtítulo / Badge", type: "text", default: "Nuestra historia" },
    { id: "texto", label: "Texto principal", type: "textarea", default: "Somos un equipo apasionado por lo que hacemos. Desde nuestros inicios hemos trabajado con dedicación para brindar el mejor servicio a cada uno de nuestros clientes.\n\nNuestra filosofía es simple: calidad, honestidad y resultados reales. Cada proyecto es único y lo tratamos con la atención que merece." },
    { id: "cta", label: "Botón CTA", type: "text", default: "Conoce más" },
    { id: "imagen", label: "Imagen (URL)", type: "image", default: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", default: "56912345678" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v,"whatsapp","56912345678")}?text=${encodeURIComponent("Hola, quiero más información.")}`;
    return `
<!-- NOSOTROS -->
<section id="nosotros" style="padding:var(--section-pad);background:var(--bg)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
    <div style="border-radius:var(--radius-lg);overflow:hidden">
      <img src="${p(v,"imagen","https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80")}" alt="Nosotros" style="width:100%;aspect-ratio:4/3;object-fit:cover" loading="lazy" />
    </div>
    <div>
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">${esc(p(v,"subtitulo","Nuestra historia"))}</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,48px);font-weight:700;color:var(--text);margin:12px 0 8px;line-height:1.15">${esc(p(v,"titulo","Quiénes somos"))}</h2>
      <div style="width:48px;height:3px;background:var(--accent);border-radius:2px;margin-bottom:24px"></div>
      <p style="color:var(--text-muted);line-height:1.8;font-size:15px;margin-bottom:28px;white-space:pre-line">${esc(p(v,"texto",""))}</p>
      <a href="${wa}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:var(--radius);background:var(--accent);color:var(--accent-text);font-size:14px;font-weight:700;text-decoration:none;transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        ${esc(p(v,"cta","Conoce más"))} →
      </a>
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  PROCESS
// ════════════════════════════════════════════════════════
export const processSection: SectionDef = {
  id: "proceso",
  label: "Cómo funciona",
  icon: "📋",
  defaultEnabled: false,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "¿Cómo trabajamos?" },
    { id: "subtitulo", label: "Subtítulo", type: "text", default: "Un proceso simple y transparente." },
    { id: "p1_title", label: "Paso 1 — Título", type: "text", default: "Consulta inicial" },
    { id: "p1_desc", label: "Paso 1 — Descripción", type: "textarea", default: "Analizamos tus necesidades sin compromiso ni costo." },
    { id: "p2_title", label: "Paso 2 — Título", type: "text", default: "Propuesta clara" },
    { id: "p2_desc", label: "Paso 2 — Descripción", type: "textarea", default: "Te presentamos la solución ideal con precio transparente." },
    { id: "p3_title", label: "Paso 3 — Título", type: "text", default: "Ejecución" },
    { id: "p3_desc", label: "Paso 3 — Descripción", type: "textarea", default: "Trabajamos con precisión y comunicación constante." },
    { id: "p4_title", label: "Paso 4 — Título", type: "text", default: "Entrega y soporte" },
    { id: "p4_desc", label: "Paso 4 — Descripción", type: "textarea", default: "Resultado garantizado con seguimiento post-servicio." },
  ],
  render(v) {
    const steps = [1,2,3,4].map((i,idx) => ({ num: `0${i}`, title: p(v,`p${i}_title`), desc: p(v,`p${i}_desc`), delay: idx*100 }));
    return `
<!-- PROCESO -->
<section id="proceso" style="padding:var(--section-pad);background:var(--bg2)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:56px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Proceso</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","¿Cómo trabajamos?"))}</h2>
      <p style="font-size:15px;color:var(--text-muted)">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative">
      <div style="position:absolute;top:36px;left:12%;right:12%;height:1px;background:var(--border)"></div>
      ${steps.map(s => `
      <div style="text-align:center;padding:24px 16px;position:relative;z-index:1">
        <div style="width:72px;height:72px;border-radius:50%;background:var(--bg2);border:1.5px solid var(--accent);display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-size:20px;font-weight:700;color:var(--accent);margin:0 auto 16px">${s.num}</div>
        <h3 style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:8px">${esc(s.title)}</h3>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.6">${esc(s.desc)}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  TESTIMONIALS
// ════════════════════════════════════════════════════════
export const testimonialsSection: SectionDef = {
  id: "testimonios",
  label: "Testimonios",
  icon: "💬",
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Lo que dicen nuestros clientes" },
    { id: "subtitulo", label: "Subtítulo", type: "text", default: "Miles de clientes satisfechos en toda LATAM." },
    { id: "t1_nombre", label: "Testimonio 1 — Nombre", type: "text", default: "Carlos R." },
    { id: "t1_ciudad", label: "Testimonio 1 — Ciudad", type: "text", default: "Santiago" },
    { id: "t1_texto", label: "Testimonio 1 — Texto", type: "textarea", default: "Excelente servicio, muy profesionales y puntuales. Totalmente recomendados. La mejor decisión que tomé." },
    { id: "t2_nombre", label: "Testimonio 2 — Nombre", type: "text", default: "María G." },
    { id: "t2_ciudad", label: "Testimonio 2 — Ciudad", type: "text", default: "Buenos Aires" },
    { id: "t2_texto", label: "Testimonio 2 — Texto", type: "textarea", default: "La mejor decisión que tomé. Resultados increíbles y atención de primera desde el primer contacto." },
    { id: "t3_nombre", label: "Testimonio 3 — Nombre", type: "text", default: "Pedro L." },
    { id: "t3_ciudad", label: "Testimonio 3 — Ciudad", type: "text", default: "Lima" },
    { id: "t3_texto", label: "Testimonio 3 — Texto", type: "textarea", default: "Superaron mis expectativas. Equipo muy dedicado y trabajo impecable. Volvería a contratarlos." },
  ],
  render(v) {
    const tests = [1,2,3].map(i => ({ nombre: p(v,`t${i}_nombre`), ciudad: p(v,`t${i}_ciudad`), texto: p(v,`t${i}_texto`) })).filter(t => t.nombre);
    return `
<!-- TESTIMONIOS -->
<section id="testimonios" style="padding:var(--section-pad);background:var(--bg)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:48px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Opiniones</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","Lo que dicen nuestros clientes"))}</h2>
      <p style="font-size:15px;color:var(--text-muted)">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(${Math.min(tests.length,3)},1fr);gap:24px">
      ${tests.map(t => `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px">
        <div style="color:#FFC107;font-size:16px;margin-bottom:14px">★★★★★</div>
        <p style="font-size:15px;color:var(--text);line-height:1.7;margin-bottom:20px;font-style:italic">"${esc(t.texto)}"</p>
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:44px;height:44px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:var(--accent-text);flex-shrink:0">${t.nombre[0]}</div>
          <div>
            <div style="font-weight:700;font-size:14px;color:var(--text)">${esc(t.nombre)}</div>
            <div style="font-size:12px;color:var(--text-muted)">${esc(t.ciudad)}</div>
          </div>
        </div>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  PRICING
// ════════════════════════════════════════════════════════
export const pricingSection: SectionDef = {
  id: "precios",
  label: "Precios",
  icon: "💰",
  defaultEnabled: false,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Planes y precios" },
    { id: "subtitulo", label: "Subtítulo", type: "text", default: "Transparencia total, sin costos ocultos." },
    { id: "p1_name", label: "Plan 1 — Nombre", type: "text", default: "Básico" },
    { id: "p1_price", label: "Plan 1 — Precio", type: "text", default: "$29.990" },
    { id: "p1_features", label: "Plan 1 — Features (separados por |)", type: "text", default: "Servicio A|Servicio B|Soporte por email" },
    { id: "p2_name", label: "Plan 2 — Nombre (popular)", type: "text", default: "Pro" },
    { id: "p2_price", label: "Plan 2 — Precio", type: "text", default: "$59.990" },
    { id: "p2_features", label: "Plan 2 — Features", type: "text", default: "Todo lo del Básico|Servicio C|Soporte prioritario|Reportes mensuales" },
    { id: "p3_name", label: "Plan 3 — Nombre", type: "text", default: "Premium" },
    { id: "p3_price", label: "Plan 3 — Precio", type: "text", default: "$99.990" },
    { id: "p3_features", label: "Plan 3 — Features", type: "text", default: "Todo lo del Pro|Servicio D|Account manager|SLA garantizado" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", default: "56912345678" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v,"whatsapp","56912345678")}?text=${encodeURIComponent("Hola, quiero información sobre los planes.")}`;
    const plans = [
      { name: p(v,"p1_name","Básico"), price: p(v,"p1_price","$29.990"), features: list(v,"p1_features",["Servicio A","Servicio B"]), popular: false },
      { name: p(v,"p2_name","Pro"), price: p(v,"p2_price","$59.990"), features: list(v,"p2_features",["Todo lo básico","Servicio C"]), popular: true },
      { name: p(v,"p3_name","Premium"), price: p(v,"p3_price","$99.990"), features: list(v,"p3_features",["Todo lo Pro","Manager"]), popular: false },
    ];
    return `
<!-- PRECIOS -->
<section id="precios" style="padding:var(--section-pad);background:var(--bg2)">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:48px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Planes</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","Planes y precios"))}</h2>
      <p style="font-size:15px;color:var(--text-muted)">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:960px;margin:0 auto">
      ${plans.map(plan => `
      <div style="background:var(--surface);border:${plan.popular ? '2px solid var(--accent)' : '1.5px solid var(--border)'};border-radius:var(--radius-lg);padding:36px;text-align:center;position:relative">
        ${plan.popular ? `<div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--accent);color:var(--accent-text);font-size:11px;font-weight:700;padding:4px 16px;border-radius:999px;white-space:nowrap">⭐ Más popular</div>` : ""}
        <div style="font-weight:700;font-size:13px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px">${esc(plan.name)}</div>
        <div style="font-family:var(--font-head);font-size:44px;font-weight:700;color:var(--text);line-height:1">${esc(plan.price)}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:28px">/mes</div>
        <ul style="list-style:none;margin-bottom:28px;text-align:left">
          ${plan.features.map(f => `<li style="padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-muted);display:flex;align-items:center;gap:8px"><span style="color:var(--accent);font-weight:700">✓</span>${esc(f)}</li>`).join("")}
        </ul>
        <a href="${wa}" target="_blank" rel="noopener" style="display:block;padding:13px;border-radius:var(--radius);background:${plan.popular ? 'var(--accent)' : 'transparent'};color:${plan.popular ? 'var(--accent-text)' : 'var(--text)'};font-weight:700;font-size:14px;text-decoration:none;border:1.5px solid ${plan.popular ? 'transparent' : 'var(--border)'}">
          Empezar ahora →
        </a>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  FAQ
// ════════════════════════════════════════════════════════
export const faqSection: SectionDef = {
  id: "faq",
  label: "Preguntas frecuentes",
  icon: "❓",
  defaultEnabled: false,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Preguntas frecuentes" },
    { id: "q1", label: "Pregunta 1", type: "text", default: "¿Cuánto tiempo demora el servicio?" },
    { id: "a1", label: "Respuesta 1", type: "textarea", default: "El tiempo varía según el tipo de servicio. En promedio, entre 1 y 3 días hábiles." },
    { id: "q2", label: "Pregunta 2", type: "text", default: "¿Ofrecen garantía?" },
    { id: "a2", label: "Respuesta 2", type: "textarea", default: "Sí, todos nuestros servicios tienen garantía de satisfacción." },
    { id: "q3", label: "Pregunta 3", type: "text", default: "¿Cuáles son los métodos de pago?" },
    { id: "a3", label: "Respuesta 3", type: "textarea", default: "Aceptamos transferencia, tarjetas de crédito/débito y efectivo." },
    { id: "q4", label: "Pregunta 4", type: "text", default: "¿Trabajan en toda LATAM?" },
    { id: "a4", label: "Respuesta 4", type: "textarea", default: "Sí, atendemos clientes en toda la región, presencialmente y de forma remota." },
  ],
  render(v) {
    const faqs = [1,2,3,4].map(i => ({ q: p(v,`q${i}`), a: p(v,`a${i}`) })).filter(f => f.q);
    return `
<!-- FAQ -->
<section id="faq" style="padding:var(--section-pad);background:var(--bg)">
  <div style="max-width:720px;margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:48px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">FAQ</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","Preguntas frecuentes"))}</h2>
    </div>
    ${faqs.map((f,i) => `
    <div style="border-bottom:1px solid var(--border)" id="faq-item-${i}">
      <button onclick="(function(btn){var ans=btn.parentElement.querySelector('.faq-ans');var icon=btn.querySelector('.faq-icon');var open=ans.style.maxHeight!=='0px'&&ans.style.maxHeight!=='';ans.style.maxHeight=open?'0px':'300px';ans.style.paddingBottom=open?'0':'20px';icon.textContent=open?'+':'×';})(this)" style="width:100%;text-align:left;padding:22px 0;display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:600;color:var(--text);cursor:pointer;background:none;border:none;font-family:var(--font-body)">
        <span>${esc(f.q)}</span>
        <span class="faq-icon" style="width:24px;height:24px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:300;flex-shrink:0;transition:transform .3s">+</span>
      </button>
      <div class="faq-ans" style="max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s"><p style="font-size:15px;color:var(--text-muted);line-height:1.7">${esc(f.a)}</p></div>
    </div>`).join("")}
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  CONTACT FORM
// ════════════════════════════════════════════════════════
export const contactSection: SectionDef = {
  id: "contacto",
  label: "Formulario de contacto",
  icon: "📨",
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "Contáctanos" },
    { id: "subtitulo", label: "Subtítulo", type: "text", default: "Responderemos en menos de 24 horas." },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", default: "56912345678" },
    { id: "formspree", label: "Formspree ID (opcional)", type: "text", default: "" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v,"whatsapp","56912345678")}?text=`;
    const formAction = p(v,"formspree") ? `https://formspree.io/f/${p(v,"formspree")}` : "";
    return `
<!-- CONTACTO -->
<section id="contacto" style="padding:var(--section-pad);background:var(--bg2)">
  <div style="max-width:640px;margin:0 auto;padding:0 24px">
    <div style="text-align:center;margin-bottom:40px">
      <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Contacto</span>
      <h2 style="font-family:var(--font-head);font-size:clamp(28px,5vw,52px);font-weight:700;color:var(--text);margin:12px 0">${esc(p(v,"titulo","Contáctanos"))}</h2>
      <p style="font-size:15px;color:var(--text-muted)">${esc(p(v,"subtitulo",""))}</p>
    </div>
    <form id="orbbi-form" ${formAction ? `action="${formAction}" method="POST"` : 'onsubmit="return false"'} style="display:flex;flex-direction:column;gap:16px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div style="display:flex;flex-direction:column;gap:6px">
          <label style="font-size:13px;font-weight:600;color:var(--text-muted)">Nombre *</label>
          <input name="nombre" type="text" placeholder="Tu nombre" required style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:12px 16px;font-size:15px;color:var(--text);outline:none;font-family:var(--font-body)" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'" />
        </div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <label style="font-size:13px;font-weight:600;color:var(--text-muted)">Email *</label>
          <input name="email" type="email" placeholder="tu@email.com" required style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:12px 16px;font-size:15px;color:var(--text);outline:none;font-family:var(--font-body)" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'" />
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <label style="font-size:13px;font-weight:600;color:var(--text-muted)">Mensaje *</label>
        <textarea name="mensaje" placeholder="Cuéntanos cómo podemos ayudarte..." required rows="4" style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:12px 16px;font-size:15px;color:var(--text);outline:none;resize:vertical;font-family:var(--font-body)" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'"></textarea>
      </div>
      <button type="submit" onclick="(function(btn){var form=btn.closest('form');var nombre=form.querySelector('[name=nombre]').value;var msg=form.querySelector('[name=mensaje]').value;if(!nombre||!msg){return;}if('${formAction}'){fetch('${formAction}',{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}}).then(()=>{form.innerHTML='<p style=\\'text-align:center;color:var(--accent);font-weight:700;padding:20px\\'>✓ Mensaje enviado. Te respondemos pronto.</p>';});}else{window.open('${wa}'+encodeURIComponent('Hola, soy '+nombre+'. '+msg),'_blank');form.innerHTML='<p style=\\'text-align:center;color:var(--accent);font-weight:700;padding:20px\\'>✓ Redirigiendo a WhatsApp...</p>';};})(this)" style="background:var(--accent);color:var(--accent-text);padding:15px;border-radius:var(--radius);font-size:15px;font-weight:700;cursor:pointer;border:none;font-family:var(--font-body);transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        Enviar mensaje →
      </button>
    </form>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  CTA FINAL
// ════════════════════════════════════════════════════════
export const ctaSection: SectionDef = {
  id: "cta",
  label: "CTA Final",
  icon: "🎯",
  required: true,
  defaultEnabled: true,
  fields: [
    { id: "titulo", label: "Título", type: "text", default: "¿Listo para comenzar?" },
    { id: "texto", label: "Texto", type: "textarea", default: "Contactanos hoy y recibí tu consulta gratuita sin compromiso." },
    { id: "boton1", label: "Botón WhatsApp", type: "text", default: "Escribir por WhatsApp" },
    { id: "boton2", label: "Botón Llamar", type: "text", default: "Llamar ahora" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", default: "56912345678" },
    { id: "telefono", label: "Teléfono", type: "text", default: "+56 9 1234 5678" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v,"whatsapp","56912345678")}?text=${encodeURIComponent("Hola, quiero comenzar.")}`;
    const tel = p(v,"telefono","+56 9 1234 5678").replace(/\s/g,"");
    return `
<!-- CTA FINAL -->
<section id="cta" style="padding:100px 24px;text-align:center;position:relative;overflow:hidden;background:color-mix(in srgb,var(--accent) 8%,var(--bg))">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,color-mix(in srgb,var(--accent) 12%,transparent),transparent 70%)"></div>
  <div style="max-width:640px;margin:0 auto;position:relative;z-index:1">
    <span style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">Empezá hoy</span>
    <h2 style="font-family:var(--font-head);font-size:clamp(30px,5.5vw,60px);font-weight:700;color:var(--text);margin:12px 0 16px;line-height:1.1">${esc(p(v,"titulo","¿Listo para comenzar?"))}</h2>
    <p style="font-size:17px;color:var(--text-muted);margin-bottom:36px;line-height:1.7">${esc(p(v,"texto","Contactanos hoy."))}</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="${wa}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:var(--radius);background:#25D366;color:#fff;font-size:15px;font-weight:700;text-decoration:none;transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        💬 ${esc(p(v,"boton1","Escribir por WhatsApp"))}
      </a>
      <a href="tel:${tel}" style="display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:var(--radius);background:transparent;color:var(--text);font-size:15px;font-weight:600;text-decoration:none;border:1.5px solid var(--border);transition:border-color .2s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
        📞 ${esc(p(v,"boton2","Llamar ahora"))}
      </a>
    </div>
  </div>
</section>`;
  },
};

// ════════════════════════════════════════════════════════
//  FOOTER
// ════════════════════════════════════════════════════════
export const footerSection: SectionDef = {
  id: "footer",
  label: "Footer",
  icon: "🔻",
  required: true,
  defaultEnabled: true,
  fields: [
    { id: "nombre", label: "Nombre del negocio", type: "text", default: "Mi Negocio" },
    { id: "slogan", label: "Slogan", type: "text", default: "Calidad y profesionalismo en cada detalle." },
    { id: "telefono", label: "Teléfono", type: "text", default: "+56 9 1234 5678" },
    { id: "email", label: "Email", type: "text", default: "hola@minegocio.cl" },
    { id: "direccion", label: "Dirección", type: "text", default: "Av. Principal 123, Santiago" },
    { id: "whatsapp", label: "WhatsApp (solo número)", type: "text", default: "56912345678" },
    { id: "instagram", label: "Instagram URL", type: "text", default: "" },
    { id: "facebook", label: "Facebook URL", type: "text", default: "" },
  ],
  render(v) {
    const wa = `https://wa.me/${p(v,"whatsapp","56912345678")}`;
    const tel = p(v,"telefono","+56 9 1234 5678").replace(/\s/g,"");
    const year = new Date().getFullYear();
    const socials = [
      { url: p(v,"instagram"), icon: "📸", label: "Instagram" },
      { url: p(v,"facebook"), icon: "👍", label: "Facebook" },
    ].filter(s => s.url);
    return `
<!-- FOOTER -->
<footer id="footer" style="background:color-mix(in srgb,var(--bg) 97%,#000);border-top:1px solid var(--border);padding:60px 0 32px">
  <div style="max-width:var(--max-w);margin:0 auto;padding:0 24px">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:48px">
      <div>
        <div style="font-family:var(--font-head);font-size:20px;font-weight:700;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:8px">
          <span style="width:8px;height:8px;border-radius:50%;background:var(--accent)"></span>
          ${esc(p(v,"nombre","Mi Negocio"))}
        </div>
        <p style="font-size:14px;color:var(--text-muted);line-height:1.7;max-width:36ch;margin-bottom:20px">${esc(p(v,"slogan",""))}</p>
        ${socials.length ? `<div style="display:flex;gap:12px">${socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener" style="width:38px;height:38px;border-radius:var(--radius);background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:16px;text-decoration:none;transition:background .2s,border-color .2s" onmouseover="this.style.background='var(--accent)';this.style.borderColor='var(--accent)'" onmouseout="this.style.background='var(--surface)';this.style.borderColor='var(--border)'">${s.icon}</a>`).join("")}</div>` : ""}
      </div>
      <div>
        <h4 style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:16px;text-transform:uppercase;letter-spacing:.08em">Navegación</h4>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${["Servicios","Nosotros","Galería","FAQ","Contacto"].map(l => `<a href="#${l.toLowerCase()}" style="font-size:14px;color:var(--text-muted);text-decoration:none;transition:color .2s" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">${l}</a>`).join("")}
        </div>
      </div>
      <div>
        <h4 style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:16px;text-transform:uppercase;letter-spacing:.08em">Contacto</h4>
        <div style="display:flex;flex-direction:column;gap:10px">
          <a href="tel:${tel}" style="font-size:14px;color:var(--text-muted);text-decoration:none">📞 ${esc(p(v,"telefono",""))}</a>
          <a href="mailto:${esc(p(v,"email",""))}" style="font-size:14px;color:var(--text-muted);text-decoration:none">✉️ ${esc(p(v,"email",""))}</a>
          <a href="${wa}" target="_blank" rel="noopener" style="font-size:14px;color:var(--text-muted);text-decoration:none">💬 WhatsApp</a>
          <span style="font-size:13px;color:var(--text-muted)">📍 ${esc(p(v,"direccion",""))}</span>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;color:var(--text-muted)">
      <span>© ${year} ${esc(p(v,"nombre","Mi Negocio"))}. Todos los derechos reservados.</span>
      <span>Sitio web por <a href="https://orbbi.com" target="_blank" rel="noopener" style="color:var(--accent)">ORBBI LATAM</a></span>
    </div>
  </div>
</footer>
<!-- WhatsApp Bubble -->
<a href="${wa}?text=${encodeURIComponent("Hola, quiero más información.")}" target="_blank" rel="noopener" style="position:fixed;bottom:24px;right:24px;z-index:800;width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(37,211,102,.45);text-decoration:none;animation:orbbi-wa-bounce 3s ease infinite" aria-label="WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;
  },
};

// ── Export all sections ───────────────────────────────────
export const ALL_SECTIONS: SectionDef[] = [
  navbarSection,
  heroSection,
  trustSection,
  servicesSection,
  gallerySection,
  aboutSection,
  processSection,
  testimonialsSection,
  pricingSection,
  faqSection,
  contactSection,
  ctaSection,
  footerSection,
];
