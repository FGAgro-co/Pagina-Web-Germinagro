import { useState } from "react";
import logoGerminagro from "./imports/LOGO_GERMINAGRO.jpg";
import fondoReunion from "./imports/FONDO_REUNI_N__1_.jpeg";
import trabajoCampo from "./imports/WhatsApp_Image_2026-07-08_at_14.06.50__2_.jpeg";
import imgEquipo from "./imports/image.png";
import imgFeria from "./imports/image-1.png";
import imgSemillas from "./imports/image-2.png";
import imgMaiz from "./imports/image-3.png";
import imgBolsas from "./imports/image-4.png";
import imgStand from "./imports/image-5.png";

const LINES = [
  {
    num: "01",
    emoji: "🌿",
    title: "Innovación agroecológica",
    color: "#2e7d40",
    photo: imgSemillas,
    photoAlt: "Semillas nativas biodiversas en bolsas de distribución Germinagro",
    objetivo: "Reducir la dependencia de insumos de síntesis química mediante tecnologías agroecológicas y producción local de insumos biológicos.",
    publico: "Productores en todas sus escalas y formas asociativas.",
    items: [
      "Manejo integrado de plagas con enfoque agroecológico",
      "Biofábricas para biofertilizantes y caldos minerales",
      "Viveros bajo estándares ICA (Res. 0780006/2022)",
      "Transición hacia producción orgánica certificable",
      "Diagnóstico y recuperación de fertilidad biológica",
      "Acompañamiento en sistemas agroforestales",
    ],
  },
  {
    num: "02",
    emoji: "🤝",
    title: "Asociatividad y agronegocios",
    color: "#7a4e2d",
    photo: imgFeria,
    photoAlt: "Mesa con productos nativos y bioinsumos Germinagro en feria agroecológica",
    objetivo: "Fortalecer estructuras asociativas sólidas que permitan a los productores negociar en condiciones equitativas y acceder a mercados formales.",
    publico: "Asociaciones, cooperativas, juntas de acción comunal y gremios productivos.",
    items: [
      "Gobernanza interna de asociaciones de productores",
      "Cadenas de valor y modelos de agronegocio",
      "Conexión con grandes superficies y exportadores",
      "Educación financiera para juntas directivas",
      "Marca colectiva de origen y estrategias de comercialización",
    ],
  },
  {
    num: "03",
    emoji: "📋",
    title: "Certificaciones y mercados",
    color: "#1a5c28",
    photo: imgBolsas,
    photoAlt: "Bolsas de germoplasma con material de Fundación Germinagro y formularios de diagnóstico",
    objetivo: "Preparar a productores y asociaciones para cumplir estándares técnico-legales que exige la exportación.",
    publico: "Actores agropecuarios orientados a la producción formal, empacadoras y entes territoriales.",
    items: [
      "Resolución ICA 824/2022 y normativa fitosanitaria",
      "BPA, Global G.A.P. y certificación orgánica (NOP-USDA)",
      "Auditorías internas previas a certificación externa",
    ],
  },
  {
    num: "04",
    emoji: "📚",
    title: "Formación y transferencia",
    color: "#5a9e3a",
    photo: imgEquipo,
    photoAlt: "Equipo Germinagro trabajando en campo en Supía Caldas con herramientas y bambú",
    objetivo: "Instalar capacidades técnicas duraderas en las comunidades rurales más allá del ciclo de financiación.",
    publico: "Productores, líderes comunitarios, jóvenes rurales y funcionarios territoriales.",
    items: [
      "Escuelas de campo (ECA) de tecnología agropecuaria",
      "Formación para réplica territorial del conocimiento",
      "Talleres de educación financiera para productores",
    ],
  },
  {
    num: "05",
    emoji: "🌍",
    title: "Gestión ambiental tropical",
    color: "#4a7c2e",
    photo: imgMaiz,
    photoAlt: "Mazorcas nativas de maíz morado y rojo — custodia de semillas criollas del trópico",
    objetivo: "Identificar y mitigar riesgos ambientales en agroecosistemas, impulsando la transición a modelos sostenibles adaptados al trópico.",
    publico: "Productores de todas las escalas, comunidades étnicas y organizaciones ambientales.",
    items: [
      "Caracterización de riesgos: deforestación, erosión, biodiversidad",
      "Planes de transición agroecológica tropical",
      "Bioprocesos: bioinsumos, compostaje y economía circular",
      "Recuperación de coberturas vegetales e hídricas",
      "Saberes tradicionales con enfoque diferencial étnico",
    ],
  },
];

const VINCULACION = [
  { emoji: "🌾", title: "Productor o asociación", color: "#2e7d40", cta: "Pedir acompañamiento", desc: "Asistencia técnica, certificaciones y acceso a mercados directamente en su finca o asociación." },
  { emoji: "🏛️", title: "Entidad pública", color: "#0f3a19", cta: "Explorar alianza", desc: "Operación técnica con trazabilidad para alcaldías, gobernaciones, ADR y Agrosavia." },
  { emoji: "🌐", title: "Cooperación internacional", color: "#7a4e2d", cta: "Proponer proyecto", desc: "Implementación territorial con enfoque diferencial alineada a los ODS." },
  { emoji: "🏢", title: "Empresa privada", color: "#1a5c28", cta: "Conectar", desc: "Cadenas de abastecimiento sostenibles con proveedores rurales certificados." },
  { emoji: "🔬", title: "Investigadores", color: "#5a9e3a", cta: "Colaborar", desc: "Acceso a fincas y comunidades para validación de tecnologías agroecológicas." },
  { emoji: "💚", title: "Voluntario o donante", color: "#8dc56a", cta: "Apoyar", desc: "Voluntariado técnico, donación dirigida o apadrinamiento de familias productoras." },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const line = LINES[activeTab];

  return (
    <div className="min-h-full overflow-x-hidden" style={{ fontFamily: "var(--font-body)", background: "#f7f4ee" }}>

      {/* ──────── NAV ──────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c3016]/94 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#">
            <div className="bg-[#f5f0e4] rounded-lg px-1.5 py-1 shadow shadow-black/20">
              <img src={logoGerminagro} alt="Fundación Germinagro" className="h-8 w-auto block" />
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/75">
            {[["#nosotros", "Nosotros"], ["#servicios", "Servicios"], ["#campo", "En campo"], ["#vinculacion", "Vinculación"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#8dc56a] transition-colors">{label}</a>
            ))}
            <a href="#contacto" className="bg-[#5a9e3a] hover:bg-[#3a7a28] text-white px-4 py-1.5 rounded-full font-semibold transition-colors text-xs">
              Contáctenos
            </a>
          </div>
          <button className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0c3016] px-5 pb-4 flex flex-col gap-2.5 text-sm text-white/80 border-t border-white/10">
            {[["#nosotros", "Nosotros"], ["#servicios", "Servicios"], ["#campo", "En campo"], ["#vinculacion", "Vinculación"], ["#contacto", "Contáctenos"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-[#8dc56a]">{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-screen flex items-end pb-0 pt-14 overflow-hidden">
        {/* Foto de fondo a sangre */}
        <img src={fondoReunion} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Gradiente dramático */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(10,28,12,0.55) 0%, rgba(10,28,12,0.25) 40%, rgba(10,28,12,0.90) 80%, #0c3016 100%)"
        }} />

        {/* Foto flotante equipo — esquina superior derecha */}
        <div className="absolute top-24 right-8 md:right-16 hidden md:block" style={{ transform: "rotate(2deg)" }}>
          <div className="w-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img src={imgEquipo} alt="Equipo Germinagro en campo" className="w-full h-56 object-cover object-top" />
          </div>
          <div className="mt-2 text-center text-white/60 text-xs">📍 Supía, Caldas</div>
        </div>

        {/* Foto flotante semillas — superior izquierda */}
        <div className="absolute top-28 left-6 hidden lg:block" style={{ transform: "rotate(-1.5deg)" }}>
          <div className="w-32 rounded-xl overflow-hidden shadow-xl border-3 border-white/15 opacity-80">
            <img src={imgSemillas} alt="Semillas nativas" className="w-full h-36 object-cover" />
          </div>
        </div>

        {/* Contenido */}
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#5a9e3a]/25 border border-[#5a9e3a]/40 text-[#a8d880] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8dc56a] animate-pulse" />
              Caldas, Colombia · Entidad sin ánimo de lucro
            </div>
            <h1 style={{ fontFamily: "Fredoka One, var(--font-display)", lineHeight: 1.1 }}
              className="text-6xl md:text-7xl font-bold text-white mb-5">
              Sembrando<br />
              <span style={{ color: "#8dc56a" }}>oportunidades,</span><br />
              cosechando<br />bienestar.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Impulsamos el desarrollo rural integral en Colombia articulando asistencia técnica agropecuaria y fortalecimiento comunitario.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#servicios" className="bg-[#5a9e3a] hover:bg-[#3a7a28] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-[#5a9e3a]/30 hover:shadow-[#5a9e3a]/50">
                Ver servicios →
              </a>
              <a href="#nosotros" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3 rounded-full transition-colors backdrop-blur-sm">
                Quiénes somos
              </a>
            </div>
          </div>

          {/* Strip de fotos en la parte inferior del hero */}
          <div className="flex gap-3 mt-12 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {[
              { src: imgStand, label: "Ferias agroecológicas" },
              { src: imgFeria, label: "Productos nativos" },
              { src: imgMaiz, label: "Maíz criollo" },
              { src: imgBolsas, label: "Germoplasma" },
            ].map((p) => (
              <div key={p.label} className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg" style={{ width: 120, height: 80 }}>
                <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                  <span className="text-white text-[10px] font-medium leading-tight">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── NOSOTROS ──────── */}
      <section id="nosotros" style={{ background: "#0c3016" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Foto con decoración */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img src={trabajoCampo} alt="Equipo construyendo invernadero en Supía, Caldas" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3016]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start gap-3 bg-[#7a4e2d] rounded-2xl px-4 py-3 shadow-xl">
                  <span className="text-xl mt-0.5">🤝</span>
                  <div>
                    <div className="text-[#f0d5b8] text-xs font-semibold uppercase tracking-wider">Enfoque diferencial</div>
                    <div className="text-white text-sm font-medium leading-snug">Articulamos con comunidades indígenas, afrodescendientes y campesinas.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Foto secundaria superpuesta */}
            <div className="absolute -top-5 -right-5 w-32 rounded-2xl overflow-hidden shadow-xl border-4 border-[#0c3016] hidden md:block" style={{ transform: "rotate(3deg)" }}>
              <img src={imgStand} alt="Stand Germinagro en feria" className="w-full h-36 object-cover" />
            </div>
          </div>

          {/* Texto */}
          <div>
            <div className="text-[#8dc56a] text-xs font-semibold uppercase tracking-widest mb-3">Quiénes somos</div>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Desarrollo rural<br />
              <span className="italic" style={{ color: "#b07d52" }}>desde adentro</span>
            </h2>
            <p className="text-white/75 leading-relaxed mb-4 text-[15px]">
              La <strong className="text-white">Fundación Germinagro</strong> es una entidad sin ánimo de lucro constituida para impulsar el desarrollo rural integral en Colombia, articulando asistencia técnica agropecuaria y fortalecimiento comunitario.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              Nuestro origen responde a una necesidad real: los pequeños y medianos productores de Caldas enfrentan simultáneamente barreras técnicas, organizativas y normativas que ninguna intervención sectorial aislada logra resolver por completo.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl p-4" style={{ background: "rgba(90,158,58,0.15)", border: "1px solid rgba(90,158,58,0.3)" }}>
                <div className="text-[#8dc56a] text-xs font-bold uppercase tracking-wide mb-1">🌱 Misión</div>
                <div className="text-white/75 text-sm leading-snug">Conectar actores, oportunidades y recursos para el desarrollo agropecuario sostenible en la Colombia rural.</div>
              </div>
              <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="text-[#a8d880] text-xs font-bold uppercase tracking-wide mb-1">🔭 Visión</div>
                <div className="text-white/75 text-sm leading-snug">Ser la fundación líder que facilita la sostenibilidad agropecuaria y el bienestar integral de los territorios rurales.</div>
              </div>
            </div>

            {/* Pilares compactos */}
            <div className="flex gap-2 flex-wrap">
              {[
                { icon: "🌱", label: "Suelos vivos" },
                { icon: "💧", label: "Agua protegida" },
                { icon: "🌿", label: "Biodiversidad" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-sm text-white/80">
                  <span>{p.icon}</span> {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SERVICIOS — TABS ──────── */}
      <section id="servicios" className="py-0" style={{ background: "#f7f4ee" }}>
        {/* Cabecera */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[#5a9e3a] text-xs font-semibold uppercase tracking-widest mb-2">Portafolio de servicios</div>
              <h2 className="text-4xl font-bold text-[#0c3016]" style={{ fontFamily: "var(--font-display)" }}>
                5 líneas estratégicas,<br />
                <span className="italic" style={{ color: "#7a4e2d" }}>un solo territorio.</span>
              </h2>
            </div>
            <p className="text-[#666] text-sm max-w-xs leading-relaxed">
              Cada línea puede contratarse de forma independiente o articulada. Toda intervención parte de una <strong>Caracterización In Situ</strong>.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {LINES.map((l, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeTab === i ? l.color : "transparent",
                  color: activeTab === i ? "#ffffff" : "#555",
                  border: activeTab === i ? `2px solid ${l.color}` : "2px solid #d4d4c8",
                }}
              >
                <span>{l.emoji}</span>
                <span className="hidden sm:inline">{l.title}</span>
                <span className="sm:hidden">{l.num}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Panel activo */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-xl" style={{ background: "#fff", minHeight: 360 }}>
            {/* Foto */}
            <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
              <img
                key={activeTab}
                src={line.photo}
                alt={line.photoAlt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow"
                  style={{ background: line.color }}>
                  <span>{line.emoji}</span> Línea {line.num}
                </div>
              </div>
              {/* Cita visual */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3">
                  <div className="text-white/80 text-xs mb-1 font-semibold uppercase tracking-wider">Población objetivo</div>
                  <div className="text-white text-sm font-medium leading-snug">{line.publico}</div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: line.color }}>
                  {line.title}
                </h3>
                <p className="text-[#444] text-sm leading-relaxed mb-5">{line.objetivo}</p>
                <ul className="space-y-2">
                  {line.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#333]">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ background: line.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all self-start shadow hover:shadow-lg"
                style={{ background: line.color }}>
                Solicitar esta línea →
              </a>
            </div>
          </div>

          {/* Dots de navegación */}
          <div className="flex justify-center gap-2 mt-5">
            {LINES.map((l, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: activeTab === i ? l.color : "#ccc", width: activeTab === i ? 24 : 8 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──────── EN CAMPO — franja de fotos ──────── */}
      <section id="campo" className="py-20" style={{ background: "#0c3016" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[#8dc56a] text-xs font-semibold uppercase tracking-widest mb-2">Trabajo real en campo</div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Así se ve Germinagro<br />
                <span className="italic text-[#b07d52]">sobre el territorio</span>
              </h2>
            </div>
            <p className="text-white/55 text-sm max-w-xs leading-relaxed">
              Ferias agroecológicas, custodia de semillas nativas y construcción de infraestructura rural en Caldas y municipios vecinos.
            </p>
          </div>

          {/* Collage asimétrico */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3" style={{ height: 380 }}>
            {/* Grande izquierda */}
            <div className="col-span-5 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src={imgEquipo} alt="Equipo Germinagro en campo abierto" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white font-bold text-sm">Equipo en campo</div>
                <div className="text-white/60 text-xs">Supía, Caldas</div>
              </div>
            </div>
            {/* Arriba centro */}
            <div className="col-span-4 rounded-2xl overflow-hidden relative group">
              <img src={imgFeria} alt="Productos nativos en feria agroecológica" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Productos nativos</div>
            </div>
            {/* Arriba derecha */}
            <div className="col-span-3 rounded-2xl overflow-hidden relative group">
              <img src={imgMaiz} alt="Maíz criollo morado y rojo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Maíz criollo</div>
            </div>
            {/* Abajo centro */}
            <div className="col-span-3 rounded-2xl overflow-hidden relative group">
              <img src={imgSemillas} alt="Semillas nativas y recomendaciones" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Semillas nativas</div>
            </div>
            {/* Abajo derecha grande */}
            <div className="col-span-4 rounded-2xl overflow-hidden relative group">
              <img src={imgBolsas} alt="Germoplasma Germinagro con materiales de diagnóstico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Germoplasma Germinagro</div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── PROPUESTA DE VALOR — strip diagonal ──────── */}
      <section style={{ background: "linear-gradient(170deg, #f7f4ee 0%, #eaf0e2 100%)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#5a9e3a] text-xs font-semibold uppercase tracking-widest mb-2">Propuesta de valor</div>
            <h2 className="text-3xl font-bold text-[#0c3016]" style={{ fontFamily: "var(--font-display)" }}>
              ¿Por qué <span className="italic text-[#7a4e2d]">Germinagro?</span>
            </h2>
          </div>
          {/* 5 tarjetas horizontales con foto de fondo sutil */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: "🔗", title: "Enfoque integral", desc: "Asistencia técnica, gestión asociativa y sostenibilidad en un solo aliado.", photo: imgStand },
              { icon: "👥", title: "Equipo inter­disciplinario", desc: "Técnicos especializados para cada área de intervención.", photo: imgEquipo },
              { icon: "📊", title: "Ejecución trazable", desc: "Recursos públicos y privados con la trazabilidad que exigen los co-financiadores.", photo: imgBolsas },
              { icon: "🗺️", title: "Conocimiento local", desc: "Dominio de ICA, ADR, Agrosavia, CMDR y normativa nacional.", photo: imgFeria },
              { icon: "🔍", title: "Diagnóstico In Situ", desc: "Ningún programa se diseña desde escritorio.", photo: imgSemillas },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group" style={{ minHeight: 200 }}>
                <img src={v.photo} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3016]/90 via-[#0c3016]/50 to-[#0c3016]/20" />
                <div className="relative p-4 flex flex-col justify-end h-full" style={{ minHeight: 200 }}>
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="text-[#8dc56a] font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>{v.title}</div>
                  <div className="text-white/70 text-xs leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── VINCULACIÓN ──────── */}
      <section id="vinculacion" className="py-20" style={{ background: "#0c3016" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
            <div className="flex-1">
              <div className="text-[#8dc56a] text-xs font-semibold uppercase tracking-widest mb-2">Únase a la red</div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Hay un lugar para<br />
                <span className="italic text-[#b07d52]">cada aliado.</span>
              </h2>
            </div>
            <p className="text-white/55 text-sm max-w-xs leading-relaxed">
              Germinagro opera como nodo articulador. Identifíquese con su rol y escríbanos.
            </p>
          </div>

          {/* Tarjetas compactas en scroll horizontal en móvil, grid en desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {VINCULACION.map((v) => (
              <a key={v.title} href="#contacto"
                className="group relative rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <div className="text-white font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{v.title}</div>
                <div className="text-white/55 text-xs leading-relaxed mb-4">{v.desc}</div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                  style={{ background: v.color, color: "#fff" }}>
                  {v.cta} →
                </div>
              </a>
            ))}
          </div>

          {/* Banner con logo integrado */}
          <div className="relative mt-10 rounded-3xl overflow-hidden shadow-2xl">
            <img src={fondoReunion} alt="" aria-hidden className="w-full h-44 object-cover object-center" />
            <div className="absolute inset-0 flex items-center"
              style={{ background: "linear-gradient(90deg, rgba(12,48,22,0.93) 0%, rgba(12,48,22,0.70) 55%, rgba(12,48,22,0.2) 100%)" }}>
              <div className="px-8 flex items-center gap-6">
                <div className="bg-[#f5f0e4] rounded-xl p-1.5 flex-shrink-0">
                  <img src={logoGerminagro} alt="Logo Germinagro" className="h-14 w-auto" />
                </div>
                <div>
                  <div className="text-white text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Una fundación, múltiples aliados,
                    <span className="italic text-[#8dc56a]"> un solo propósito.</span>
                  </div>
                  <div className="text-white/60 text-sm italic">Sembrando oportunidades, Cosechando bienestar — Caldas, Colombia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CONTACTO ──────── */}
      <section id="contacto" className="py-20 relative overflow-hidden" style={{ background: "#f7f4ee" }}>
        {/* Foto decorativa al fondo */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block opacity-15">
          <img src={imgStand} alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #f7f4ee, transparent 40%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Izquierda */}
            <div>
              <div className="text-[#5a9e3a] text-xs font-semibold uppercase tracking-widest mb-3">Contáctenos</div>
              <h2 className="text-4xl font-bold text-[#0c3016] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                ¿Listo para<br />
                <span className="italic text-[#7a4e2d]">trabajar juntos?</span>
              </h2>
              <p className="text-[#555] leading-relaxed mb-8 text-sm">
                Cada intervención parte de una Caracterización In Situ. Cuéntenos sobre su territorio y diseñamos juntos la propuesta pertinente.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📍", label: "Ubicación", val: "Caldas, Colombia" },
                  { icon: "📧", label: "Correo", val: "germinagro@gmail.com" },
                  { icon: "📱", label: "Redes", val: "@germinagro" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4e8c2] flex items-center justify-center text-lg flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[#888] text-xs uppercase tracking-wider">{c.label}</div>
                      <div className="text-[#0c3016] font-semibold text-sm">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Foto pequeña del equipo */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg" style={{ transform: "rotate(-1deg)" }}>
                <img src={imgEquipo} alt="Equipo Germinagro" className="w-full h-36 object-cover object-top" />
                <div className="bg-[#0c3016] px-4 py-2 text-white/70 text-xs italic">
                  "Ningún programa se diseña desde un escritorio."
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form className="bg-white rounded-3xl shadow-xl p-7" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Nombre</label>
                  <input type="text" placeholder="Su nombre"
                    className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
                </div>
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Organización</label>
                  <input type="text" placeholder="Entidad o asociación"
                    className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Correo electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com"
                  className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
              </div>
              <div className="mb-4">
                <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Soy un/a</label>
                <select className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#5a9e3a] transition-all appearance-none">
                  <option value="">Seleccione su perfil…</option>
                  <option>Productor o asociación</option>
                  <option>Entidad pública</option>
                  <option>Cooperación internacional</option>
                  <option>Empresa privada</option>
                  <option>Investigador o técnico</option>
                  <option>Voluntario o donante</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Mensaje</label>
                <textarea rows={3} placeholder="Cuéntenos sobre su territorio y necesidades…"
                  className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-[#5a9e3a] hover:bg-[#3a7a28] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#5a9e3a]/30">
                Enviar mensaje →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ──────── FOOTER ──────── */}
      <footer className="bg-[#0a2410] border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#f5f0e4] rounded-lg px-1.5 py-1">
              <img src={logoGerminagro} alt="Fundación Germinagro" className="h-8 w-auto" />
            </div>
            <div className="text-[#8dc56a] text-xs italic leading-tight">
              Sembrando oportunidades,<br />Cosechando bienestar
            </div>
          </div>
          <div className="text-white/30 text-xs text-center">
            © 2026 Fundación Germinagro · Caldas, Colombia · Entidad sin ánimo de lucro
          </div>
        </div>
      </footer>
    </div>
  );
}
