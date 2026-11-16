// layout.js
const $ = (id) => document.getElementById(id);
const IMG = "img/";
const rupiah = (n) => "Rp " + Number(n).toLocaleString("id-ID");

const I = {
  phone: `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"/></svg>`,
  pin: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>`,
  mail: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7.2L4.5 7v.1L12 12.3 19.5 7.1V7L12 12.2z"/></svg>`,
  check: `<svg class="h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4l-4-4 1.4-1.4 2.6 2.6 5-5 1.4 1.4-6.4 6.4z"/></svg>`,
  warn: `<svg class="h-5 w-5 shrink-0 text-ink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z"/></svg>`,
};

// Ilustrasi SVG cadangan jika foto belum ada
const person = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cy="-30" r="15" fill="${c}"/><path d="M-24 22C-24-10 24-10 24 22Z" fill="${c}"/></g>`;
const SVG = (inner) => `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block"><rect width="400" height="300" fill="#fff3e8"/>${inner}</svg>`;
const ILL = {
  kelompok: SVG(`<circle cx="200" cy="150" r="95" fill="none" stroke="#ee700d" stroke-width="2" stroke-dasharray="6 6"/><circle cx="200" cy="150" r="34" fill="#ee700d"/><text x="200" y="158" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="Poppins,sans-serif">Rp</text>${[0, 1, 2, 3, 4].map((i) => { const a = (i * 72 - 90) * Math.PI / 180; return person(200 + 95 * Math.cos(a), 158 + 95 * Math.sin(a), 1.1, i % 2 ? "#1e293b" : "#ee700d"); }).join("")}`),
  individu: SVG(`<g fill="#ee700d" opacity=".25"><rect x="250" y="150" width="28" height="80"/><rect x="288" y="120" width="28" height="110"/><rect x="326" y="80" width="28" height="150"/></g><path d="M240 80l30-20 30 15 40-35" stroke="#1e293b" fill="none" stroke-width="4" stroke-linecap="round"/>${person(120, 180, 2, "#ee700d")}${person(200, 195, 1.7, "#1e293b")}`),
  sitepat: SVG(`<rect x="140" y="20" width="120" height="260" rx="18" fill="#1e293b"/><rect x="148" y="34" width="104" height="232" rx="10" fill="#fff"/><rect x="148" y="34" width="104" height="44" rx="10" fill="#ee700d"/><rect x="158" y="48" width="50" height="8" rx="4" fill="#fff"/><rect x="158" y="62" width="30" height="6" rx="3" fill="#fff" opacity=".7"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${158 + (i % 3) * 30}" y="${92 + Math.floor(i / 3) * 34}" width="24" height="26" rx="6" fill="${i % 2 ? "#fff3e8" : "#fde0c8"}"/>`).join("")}<rect x="158" y="166" width="84" height="8" rx="4" fill="#e2e8f0"/><rect x="158" y="182" width="64" height="8" rx="4" fill="#e2e8f0"/><rect x="158" y="214" width="84" height="26" rx="8" fill="#ee700d"/>`),
};
function fb(el, name) {
  if (!name || !ILL[name]) { el.style.visibility = "hidden"; return; }
  const d = document.createElement("div"); d.className = el.className; d.innerHTML = ILL[name]; el.replaceWith(d);
}
function fbl(el) { const s = document.createElement("span"); s.textContent = el.alt; s.className = "text-xs font-bold text-ink"; el.replaceWith(s); }

// Gambar dan logo dengan cadangan otomatis
const pic = (file, alt, cls = "", ill = "") => `<img src="${IMG}${file}" alt="${alt}" loading="lazy" class="${cls}" onerror="fb(this,'${ill}')">`;
const logo = (file, alt, cls = "h-8") => `<img src="${IMG}${file}" alt="${alt}" class="${cls} w-auto" onerror="fbl(this)">`;

// Komponen kecil
const secHead = (eyebrow, title, desc = "", center = false) => `<div class="reveal ${center ? "mx-auto text-center" : ""} max-w-3xl"><p class="eyebrow">${eyebrow}</p><h2 class="h-sec">${title}</h2>${desc ? `<p class="lead ${center ? "mx-auto" : ""}">${desc}</p>` : ""}</div>`;
const notice = (t) => `<div class="flex gap-3 rounded-xl border border-brand/30 bg-brand-tint p-4 text-sm leading-relaxed">${I.warn}<p>${t}</p></div>`;
const checkList = (arr) => `<ul class="space-y-3">${arr.map((t) => `<li class="flex gap-3 text-[15px] leading-relaxed">${I.check}<span>${t}</span></li>`).join("")}</ul>`;

function pageBanner(title, sub) {
  $("banner").innerHTML = `<section class="border-b border-slate-200 bg-brand-tint"><div class="wrap py-12 md:py-16"><p class="eyebrow">${SITE.nama}</p><h1 class="font-display text-3xl font-bold text-brand md:text-5xl">${title}</h1><p class="lead">${sub}</p></div></section>`;
}

function renderLayout(active) {
  const links = (c) => NAV.map(([h, l]) => `<a href="${h}" class="${c} ${h === active ? "border-brand text-brand" : "border-transparent text-ink"}">${l}</a>`).join("");
  $("nav").innerHTML = `
  <header class="sticky top-0 z-50 border-t-4 border-brand bg-white shadow-md">
    <div class="wrap flex h-[72px] items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-4">
        ${logo("btpnlogo.png", "BTPN Syariah", "h-9")}
        <span class="hidden h-9 w-px bg-slate-300 sm:block"></span>
        <span class="leading-tight"><b class="block font-display text-[15px] text-brand md:text-base">${SITE.nama}</b><span class="hidden text-[11px] font-medium text-ink/70 sm:block">${SITE.wilayah.join(" · ")}</span></span>
      </a>
      <nav class="hidden items-center gap-6 text-[14px] font-semibold lg:flex">${links("border-b-2 py-1 transition hover:text-brand")}</nav>
      <a href="tel:${SITE.callTel}" class="btn hidden !py-2.5 lg:inline-flex">${I.phone} ${SITE.call}</a>
      <button id="burger" class="text-3xl text-ink lg:hidden" aria-label="Menu">☰</button>
    </div>
    <nav id="mnav" class="hidden flex-col border-t border-slate-200 px-5 pb-4 text-[15px] font-semibold lg:hidden">${NAV.map(([h, l]) => `<a href="${h}" class="border-b border-slate-100 py-3 ${h === active ? "text-brand" : "text-ink"}">${l}</a>`).join("")}</nav>
  </header>
  <a href="tel:${SITE.callTel}" aria-label="Hubungi ${SITE.call}" class="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-xl lg:hidden">${I.phone} ${SITE.call}</a>`;
  $("burger").onclick = () => { $("mnav").classList.toggle("hidden"); $("mnav").classList.toggle("flex"); };

  $("footer").innerHTML = `
  <footer class="mt-24 bg-brand text-white">
    <div class="wrap grid gap-10 py-14 md:grid-cols-4">
      <div class="md:col-span-2">
        <div class="inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl bg-white px-5 py-3">
          ${logo("btpnlogo.png", "BTPN Syariah", "h-8")}${logo("tepatlogo.png", "Tepat", "h-7")}${logo("ojk.png", "OJK", "h-7")}${logo("lps.png", "LPS", "h-7")}
        </div>
        <p class="mt-5 max-w-md text-[15px] font-medium leading-relaxed">${TENTANG.komitmen}</p>
      </div>
      <div><p class="mb-4 font-display font-bold">Menu</p><div class="flex flex-col gap-2.5 text-[15px] font-medium">${NAV.map(([h, l]) => `<a href="${h}" class="hover:underline">${l}</a>`).join("")}</div></div>
      <div class="text-[15px] font-medium"><p class="mb-4 font-display font-bold">Hubungi Kami</p>
        <p>Melayani wilayah Kecamatan ${SITE.wilayah.join(", ")}, Kota Tegal.</p><p class="mt-3">Layanan 24 jam: <a href="tel:${SITE.callTel}" class="font-bold underline">${SITE.call}</a></p><p class="mt-1"><a href="mailto:${SITE.email}" class="underline">${SITE.email}</a></p>
        <div class="mt-4 flex gap-4 text-sm font-bold">${SITE.sosial.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener" class="underline">${n}</a>`).join("")}</div></div>
    </div>
    <div class="border-t border-white/25"><div class="wrap space-y-2 py-6 text-xs font-medium leading-relaxed text-white"><p>${SITE.legal}</p><p>${SITE.disclaimer}</p><p class="pt-2">© ${new Date().getFullYear()} ${SITE.nama} – PT Bank BTPN Syariah Tbk.</p></div></div>
  </footer>`;
}

function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}