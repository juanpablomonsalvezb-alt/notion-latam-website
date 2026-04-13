/* ═══════════════════════════════════════════════════════
   ORBBI TEMPLATE ENGINE — Renderer
   Assembles sections → full HTML with CSS vars injected
   Like Squarespace's region/stylesheet compilation
═══════════════════════════════════════════════════════ */

import type { TemplateManifest, RenderedTemplate } from "./types";

export function buildCssVars(
  template: TemplateManifest,
  tweakValues: Record<string, string>
): string {
  const lines: string[] = [];

  // Inject each tweak as CSS custom property
  for (const tweak of template.tweaks) {
    const val = tweakValues[tweak.id] ?? String(tweak.default);

    if (tweak.type === "range") {
      lines.push(`  ${tweak.cssVar}: ${val}${tweak.unit ?? "px"};`);
    } else {
      lines.push(`  ${tweak.cssVar}: ${val};`);
    }
  }

  // Computed vars from tweaks
  lines.push(`  --section-pad: ${tweakValues["sectionPad"] ?? "100"}px 24px;`);
  lines.push(`  --border: color-mix(in srgb, var(--text) 12%, transparent);`);
  lines.push(`  --shadow: 0 4px 24px rgba(0,0,0,.18);`);
  lines.push(`  --shadow-lg: 0 16px 60px rgba(0,0,0,.3);`);
  lines.push(`  --transition: .25s cubic-bezier(.4,0,.2,1);`);

  return `:root {\n${lines.join("\n")}\n}`;
}

export function buildFontLink(
  template: TemplateManifest,
  tweakValues: Record<string, string>
): string {
  const headFont = tweakValues["fontHead"] ?? (template.tweaks.find(t => t.id === "fontHead")?.default as string) ?? "Poppins";
  const bodyFont = tweakValues["fontBody"] ?? (template.tweaks.find(t => t.id === "fontBody")?.default as string) ?? "Inter";

  const fonts = [...new Set([headFont, bodyFont])];
  const query = fonts
    .map(f => `family=${encodeURIComponent(f)}:wght@400;500;600;700`)
    .join("&");

  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
}

export function renderTemplate(
  template: TemplateManifest,
  tweakValues: Record<string, string>,
  enabledSections: string[],
  contentValues: Record<string, Record<string, string>>,
  sectionOrder?: string[]
): RenderedTemplate {
  const order = sectionOrder ?? template.sections.map(s => s.id);
  const enabledSet = new Set(enabledSections);

  // Build sections HTML — each wrapped with data-orbbi-section for builder interaction
  const sectionsHtml = order
    .map(id => template.sections.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => !!s && (enabledSet.has(s.id) || !!s.required))
    .map(s => `<div data-orbbi-section="${s.id}">${s.render(contentValues[s.id] ?? {}, tweakValues)}</div>`)
    .join("\n");

  const fontUrl = buildFontLink(template, tweakValues);
  const cssVars = buildCssVars(template, tweakValues);

  const headFont = tweakValues["fontHead"] ?? "Poppins";
  const bodyFont = tweakValues["fontBody"] ?? "Inter";

  const css = `
${cssVars}

/* ── Reset & base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: '${bodyFont}', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; opacity: .6; }
::selection { background: color-mix(in srgb, var(--accent) 35%, transparent); color: var(--text); }

/* ── Nav mobile ── */
@media (max-width: 768px) {
  .orbbi-nav-links { display: none !important; }
}

/* ── Grid responsive ── */
@media (max-width: 900px) {
  section div[style*="grid-template-columns:repeat(3"] {
    grid-template-columns: repeat(2,1fr) !important;
  }
}
@media (max-width: 640px) {
  section div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
  }
  section div[style*="grid-template-columns:1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
  section div[style*="grid-template-columns:2fr 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}

/* ── Animations ── */
@keyframes orbbi-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: .6; }
}
@keyframes orbbi-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
@keyframes orbbi-wa-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

/* ── Counter animation ── */
.orbbi-counter { transition: all .3s; }

/* ── Grain overlay ── */
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 9999;
  pointer-events: none; opacity: .018;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}`;

  const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${fontUrl}" rel="stylesheet">`;

  return { html: sectionsHtml, css, fonts };
}

export function renderFullHtml(
  template: TemplateManifest,
  tweakValues: Record<string, string>,
  enabledSections: string[],
  contentValues: Record<string, Record<string, string>>,
  sectionOrder?: string[],
  siteName = "Mi Negocio"
): string {
  const { html, css, fonts } = renderTemplate(
    template, tweakValues, enabledSections, contentValues, sectionOrder
  );

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${siteName}</title>
  <meta name="description" content="${siteName} — sitio web profesional generado por Orbbi LATAM" />
  ${fonts}
  <style>${css}</style>
</head>
<body>
${html}

<script>
/* ── Orbbi Builder — Click-to-edit (sin overlays visuales) ── */
(function(){
  if (window.self === window.top) return;
  document.querySelectorAll('[data-orbbi-section]').forEach(function(el){
    el.style.cursor = 'pointer';
    el.addEventListener('click', function(){
      window.parent.postMessage({type:'orbbi-edit', sectionId: el.getAttribute('data-orbbi-section')}, '*');
    });
  });
})();

/* ── Counter animation ── */
(function(){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el = e.target;
      var target = parseFloat(el.dataset.target);
      var suffix = el.dataset.suffix||'';
      var isFloat = target%1!==0;
      var start = performance.now();
      var dur = 1800;
      function step(now){
        var p = Math.min((now-start)/dur,1);
        var ease = 1-Math.pow(1-p,3);
        var cur = isFloat?(target*ease).toFixed(1):Math.round(target*ease);
        el.textContent = cur+suffix;
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('.orbbi-counter').forEach(function(el){ obs.observe(el); });
})();
</script>
</body>
</html>`;
}
