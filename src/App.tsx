import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  ClipboardCheck,
  Droplets,
  Globe2,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Link2,
  LockKeyhole,
  LogOut,
  Monitor,
  Palette,
  RefreshCw,
  Save,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Users,
  MapPinned,
  Mail,
  Microscope,
  Search,
  MapPin,
  Phone,
  Sprout,
  UsersRound,
  Wheat,
} from "lucide-react";
import { isSupabaseConfigured, supabase } from "./lib/supabase";
import logoGerminagro from "./imports/LOGO_GERMINAGRO.jpg";
import fondoReunion from "./imports/FONDO_REUNI_N__1_.jpeg";
import trabajoCampo from "./imports/WhatsApp_Image_2026-07-08_at_14.06.50__2_.jpeg";
import imgEquipo from "./imports/image.png";
import imgFeria from "./imports/image-1.png";
import imgSemillas from "./imports/image-2.png";
import imgMaiz from "./imports/image-3.png";
import imgBolsas from "./imports/image-4.png";
import imgStand from "./imports/image-5.png";
import cultivoPlatano from "./imports/cultivo-platano.jpeg";
import cultivoPlatanoCosecha from "./imports/cultivo-platano-cosecha.jpeg";
import equipoProcesos from "./imports/equipo-procesos.jpeg";
import productoresAnserma from "./imports/productores-anserma.jpeg";
import trabajoCampoNuevo from "./imports/trabajo-campo-nuevo.jpeg";
import viveroPlantula from "./imports/vivero-plantula-3.jpeg";

const LINES = [
  {
    num: "01",
    icon: Sprout,
    title: "Innovación agroecológica",
    color: "#2e7d40",
    photo: viveroPlantula,
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
    icon: Handshake,
    title: "Asociatividad y agronegocios",
    color: "#7a4e2d",
    photo: cultivoPlatano,
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
    icon: ClipboardCheck,
    title: "Certificaciones y mercados",
    color: "#1a5c28",
    photo: cultivoPlatanoCosecha,
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
    icon: BookOpen,
    title: "Formación y transferencia",
    color: "#5a9e3a",
    photo: equipoProcesos,
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
    icon: Globe2,
    title: "Gestión ambiental tropical",
    color: "#4a7c2e",
    photo: trabajoCampoNuevo,
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
  { icon: Wheat, title: "Productor o asociación", color: "#2e7d40", cta: "Pedir acompañamiento", desc: "Asistencia técnica, certificaciones y acceso a mercados directamente en su finca o asociación." },
  { icon: Landmark, title: "Entidad pública", color: "#0f3a19", cta: "Explorar alianza", desc: "Operación técnica con trazabilidad para alcaldías, gobernaciones, ADR y Agrosavia." },
  { icon: Globe2, title: "Cooperación internacional", color: "#7a4e2d", cta: "Proponer proyecto", desc: "Implementación territorial con enfoque diferencial alineada a los ODS." },
  { icon: Building2, title: "Empresa privada", color: "#1a5c28", cta: "Conectar", desc: "Cadenas de abastecimiento sostenibles con proveedores rurales certificados." },
  { icon: Microscope, title: "Investigadores", color: "#5a9e3a", cta: "Colaborar", desc: "Acceso a fincas y comunidades para validación de tecnologías agroecológicas." },
  { icon: HeartHandshake, title: "Voluntario o donante", color: "#8dc56a", cta: "Apoyar", desc: "Voluntariado técnico, donación dirigida o apadrinamiento de familias productoras." },
];

const ANALYTICS_KEY = "germinagro-analytics";
const ADMIN_SESSION_KEY = "germinagro-admin-session";
const USERS_KEY = "germinagro-admin-users";
const SITE_CONFIG_KEY = "germinagro-site-config";

type Analytics = {
  visits: number;
  contactClicks: number;
  contactForms: number;
  pageViews: number;
  mobileVisits: number;
  desktopVisits: number;
  profileClicks: Record<string, number>;
  events: { label: string; date: string }[];
  lastVisit: string;
};

type SiteConfig = {
  brandName: string;
  navAbout: string;
  navServices: string;
  navField: string;
  navPartners: string;
  navContact: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  contactTitle: string;
  contactSubtitle: string;
  footerTagline: string;
  heroImage: string;
  floatingImage: string;
  fieldImage: string;
  galleryImage: string;
  contactImage: string;
  accentColor: string;
  darkColor: string;
};

const EMPTY_ANALYTICS: Analytics = {
  visits: 0,
  contactClicks: 0,
  contactForms: 0,
  pageViews: 0,
  mobileVisits: 0,
  desktopVisits: 0,
  profileClicks: {},
  events: [],
  lastVisit: "",
};

const DEFAULT_SITE_CONFIG: SiteConfig = {
  brandName: "GERMINAGRO",
  navAbout: "Nosotros",
  navServices: "Servicios",
  navField: "En campo",
  navPartners: "Vinculación",
  navContact: "Contáctenos",
  heroEyebrow: "Manizales, Caldas · Eje Cafetero · Tolima · Valle del Cauca",
  heroTitle: "Sembrando oportunidades, cosechando bienestar.",
  heroSubtitle: "Impulsamos el desarrollo rural integral desde Manizales hacia el Eje Cafetero, Tolima y Valle del Cauca, articulando asistencia técnica agropecuaria y fortalecimiento comunitario.",
  heroPrimaryCta: "Ver servicios",
  heroSecondaryCta: "Quiénes somos",
  contactTitle: "¿Listo para trabajar juntos?",
  contactSubtitle: "Cada intervención parte de una Caracterización In Situ. Cuéntenos sobre su territorio y diseñamos juntos la propuesta pertinente.",
  footerTagline: "Sembrando oportunidades, Cosechando bienestar",
  heroImage: "productores",
  floatingImage: "equipo",
  fieldImage: "procesos",
  galleryImage: "vivero",
  contactImage: "feria",
  accentColor: "#5a9e3a",
  darkColor: "#0c3016",
};

function purgeLegacySensitiveStorage() {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem("germinagro-public-users");
  localStorage.removeItem("germinagro-contact-drafts");
}

const SITE_IMAGES = {
  productores: { label: "Productores en campo", src: productoresAnserma },
  equipo: { label: "Equipo Germinagro", src: imgEquipo },
  feria: { label: "Feria agroecológica", src: imgStand },
  vivero: { label: "Vivero y plántulas", src: viveroPlantula },
  procesos: { label: "Procesos de campo", src: equipoProcesos },
  reunion: { label: "Reunión de aliados", src: fondoReunion },
} as const;

function readAnalytics(): Analytics {
  try {
    return { ...EMPTY_ANALYTICS, ...JSON.parse(localStorage.getItem(ANALYTICS_KEY) || "{}") };
  } catch {
    return EMPTY_ANALYTICS;
  }
}

function updateAnalytics(change: Partial<Analytics>) {
  const next = { ...readAnalytics(), ...change };
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(next));
  return next;
}

function readSiteConfig(): SiteConfig {
  try {
    return { ...DEFAULT_SITE_CONFIG, ...JSON.parse(localStorage.getItem(SITE_CONFIG_KEY) || "{}") };
  } catch {
    return DEFAULT_SITE_CONFIG;
  }
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]") as { name: string; email: string; createdAt: string }[];
  } catch {
    return [];
  }
}

function recordEvent(label: string, extra: Partial<Analytics> = {}) {
  const current = readAnalytics();
  updateAnalytics({
    ...extra,
    events: [{ label, date: new Date().toISOString() }, ...current.events].slice(0, 20),
  });
}

function PublicRegistration({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", profile: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    if (supabase) {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { name: form.name, profile: form.profile },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Registro recibido. Revisa tu correo para confirmar la cuenta.");
        recordEvent("Nuevo registro público");
      }
    } else {
      setStatus("El registro está temporalmente no disponible. Configura Supabase para proteger y guardar tus datos.");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0c3016]/70 px-5 py-8 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <form onSubmit={submit} className="max-h-full w-full max-w-md overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5a9e3a]">Comunidad Germinagro</p><h2 className="text-3xl font-bold text-[#0c3016]" style={{ fontFamily: "var(--font-display)" }}>Regístrate</h2><p className="mt-2 text-sm text-[#777]">Recibe novedades, convocatorias y oportunidades de colaboración.</p></div><button type="button" onClick={onClose} aria-label="Cerrar registro" className="text-2xl text-[#999] hover:text-[#0c3016]">×</button></div>
        <label className="mb-1 block text-xs font-semibold text-[#555]">Nombre completo</label><input required maxLength={120} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mb-4 w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm" />
        <label className="mb-1 block text-xs font-semibold text-[#555]">Correo electrónico</label><input required maxLength={254} type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mb-4 w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm" />
        <label className="mb-1 block text-xs font-semibold text-[#555]">Contraseña</label><input required minLength={6} type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} className="mb-4 w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm" />
        <label className="mb-1 block text-xs font-semibold text-[#555]">Me registro como</label><select required value={form.profile} onChange={(event) => setForm({ ...form, profile: event.target.value })} className="mb-5 w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm"><option value="">Selecciona un perfil</option>{VINCULACION.map((item) => <option key={item.title}>{item.title}</option>)}</select>
        {status && <p className="mb-4 rounded-lg bg-[#d4e8c2] px-3 py-2 text-sm text-[#1a5c28]">{status}</p>}
        <button disabled={loading} className="w-full rounded-lg bg-[#1a5c28] py-3 font-semibold text-white transition-colors hover:bg-[#0f3a19] disabled:opacity-50">{loading ? "Registrando..." : "Crear mi registro"}</button>
        <p className="mt-4 text-center text-xs text-[#999]">Al registrarte aceptas recibir comunicaciones relacionadas con Germinagro.</p>
      </form>
    </div>
  );
}

function SiteEditor({ config, setConfig, saveConfig }: { config: SiteConfig; setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>; saveConfig: (event: React.FormEvent) => void }) {
  const update = (key: keyof SiteConfig, value: string) => setConfig((current) => ({ ...current, [key]: value }));
  const field = (key: keyof SiteConfig, label: string, multiline = false) => <label className="block"><span className="mb-1 block text-xs font-semibold text-[#555]">{label}</span>{multiline ? <textarea rows={3} value={config[key]} onChange={(event) => update(key, event.target.value)} className="w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm resize-y" /> : <input value={config[key]} onChange={(event) => update(key, event.target.value)} className="w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm" />}</label>;

  return (
    <form onSubmit={saveConfig} className="space-y-6">
      <div><h2 className="text-xl font-bold text-[#0c3016]">Editor visual del frontend</h2><p className="mt-1 text-sm text-[#777]">Configura el contenido visible de la página sin tocar código.</p></div>
      <section className="rounded-2xl border border-black/5 bg-white p-6"><h3 className="mb-4 font-bold text-[#0c3016]">Identidad y navegación</h3><div className="grid gap-4 md:grid-cols-2">{field("brandName", "Nombre de marca")}{field("navContact", "Botón de contacto")}{field("navAbout", "Enlace Nosotros")}{field("navServices", "Enlace Servicios")}{field("navField", "Enlace En campo")}{field("navPartners", "Enlace Vinculación")}</div></section>
      <section className="rounded-2xl border border-black/5 bg-white p-6"><h3 className="mb-4 font-bold text-[#0c3016]">Hero principal</h3><div className="space-y-4">{field("heroEyebrow", "Texto superior")}{field("heroTitle", "Título principal", true)}{field("heroSubtitle", "Descripción", true)}<div className="grid gap-4 md:grid-cols-2">{field("heroPrimaryCta", "Botón principal")}{field("heroSecondaryCta", "Botón secundario")}</div></div></section>
      <section className="rounded-2xl border border-black/5 bg-white p-6"><h3 className="mb-4 font-bold text-[#0c3016]">Contacto y pie de página</h3><div className="space-y-4">{field("contactTitle", "Título de contacto")}{field("contactSubtitle", "Descripción de contacto", true)}{field("footerTagline", "Frase del pie de página", true)}</div></section>
      <section className="rounded-2xl border border-black/5 bg-white p-6"><h3 className="mb-4 font-bold text-[#0c3016]">Imágenes y paleta</h3><div className="grid gap-4 md:grid-cols-2">{([["heroImage", "Imagen principal"], ["floatingImage", "Foto flotante"], ["fieldImage", "Imagen de campo"], ["galleryImage", "Imagen del collage"], ["contactImage", "Imagen de contacto"]] as [keyof SiteConfig, string][]).map(([key, label]) => <label key={key} className="block"><span className="mb-1 block text-xs font-semibold text-[#555]">{label}</span><select value={config[key]} onChange={(event) => update(key, event.target.value)} className="w-full rounded-lg border border-[#ddd] bg-[#f7f4ee] px-3 py-2.5 text-sm">{Object.entries(SITE_IMAGES).map(([imageKey, image]) => <option key={imageKey} value={imageKey}>{image.label}</option>)}</select></label>)}<label className="flex items-center gap-2 text-sm"><input type="color" value={config.accentColor} onChange={(event) => update("accentColor", event.target.value)} /> Color de acento</label><label className="flex items-center gap-2 text-sm"><input type="color" value={config.darkColor} onChange={(event) => update("darkColor", event.target.value)} /> Color oscuro</label></div><div className="mt-5 grid gap-4 md:grid-cols-3"><img src={SITE_IMAGES[config.heroImage as keyof typeof SITE_IMAGES]?.src || SITE_IMAGES.productores.src} alt="Vista previa hero" className="h-32 w-full rounded-xl object-cover" /><img src={SITE_IMAGES[config.fieldImage as keyof typeof SITE_IMAGES]?.src || SITE_IMAGES.procesos.src} alt="Vista previa campo" className="h-32 w-full rounded-xl object-cover" /><img src={SITE_IMAGES[config.contactImage as keyof typeof SITE_IMAGES]?.src || SITE_IMAGES.feria.src} alt="Vista previa contacto" className="h-32 w-full rounded-xl object-cover" /></div></section>
      <button className="inline-flex items-center gap-2 rounded-lg bg-[#1a5c28] px-5 py-3 text-sm font-semibold text-white"><Save size={16} /> Publicar cambios</button>
    </form>
  );
}

function LegalPage({ type }: { type: "seguridad" | "privacidad" | "terminos" }) {
  const content = type === "seguridad" ? {
    eyebrow: "Centro de confianza",
    title: "Seguridad de la plataforma",
    sections: [
      ["Autenticación protegida", "Las cuentas utilizan Supabase Auth. Las contraseñas no se guardan en localStorage ni se envían a la base de datos de la aplicación; Supabase las procesa con su sistema de autenticación y hash seguro. La sesión se cierra localmente y existe bloqueo tras intentos fallidos repetidos."],
      ["Protección de datos", "Las tablas usan Row Level Security (RLS). Los contactos solo se pueden crear desde el formulario público y la lectura, configuración y administración requieren una sesión autenticada. Nunca se incluye una service_role key en el navegador."],
      ["Entrada y base de datos", "Los formularios aplican tipos, límites y validación HTML. Las consultas usan el cliente parametrizado de Supabase, no concatenan SQL y por tanto reducen el riesgo de inyección SQL. La validación definitiva debe mantenerse también en Postgres y en un endpoint de servidor."],
      ["Operación segura", "Configura HTTPS, confirma el dominio en Supabase, activa confirmación de correo, CAPTCHA y SMTP propio para producción. Revisa periódicamente sesiones, políticas RLS, dependencias y registros de acceso."],
    ],
  } : type === "privacidad" ? {
    eyebrow: "Información legal",
    title: "Política de privacidad",
    sections: [
      ["Responsable y marco aplicable", "Fundación Germinagro, con operación en Manizales, Caldas. Esta política se formula teniendo en cuenta la Ley 1581 de 2012, el Decreto 1377 de 2013 y las orientaciones de la Superintendencia de Industria y Comercio de Colombia. Para consultas sobre datos personales puedes usar fundaciongerminagro@gmail.com."],
      ["Datos que recopilamos", "Podemos recibir nombre, correo, organización, perfil, mensaje y datos técnicos agregados de navegación. No solicitamos datos sensibles para el registro general."],
      ["Finalidad y conservación", "Usamos la información para responder solicitudes, gestionar comunicaciones autorizadas, mejorar el sitio y generar estadísticas agregadas. Conservamos los datos solo durante el tiempo necesario para esas finalidades o para cumplir obligaciones legales."],
      ["Derechos y reclamos", "Puedes solicitar acceso, corrección, actualización, eliminación o retiro de autorización escribiendo al correo indicado. También puedes presentar consultas o reclamos sobre el tratamiento de tus datos. No vendemos información personal ni la usamos para fines incompatibles con esta política."],
    ],
  } : {
    eyebrow: "Condiciones de uso",
    title: "Términos del sitio",
    sections: [
      ["Uso permitido", "El sitio ofrece información institucional y canales de contacto de Germinagro. El usuario se compromete a entregar información veraz y a no intentar acceder a áreas administrativas o alterar el servicio."],
      ["Contenido", "Los textos, imágenes, marca y materiales del sitio pertenecen a sus respectivos titulares. Su uso fuera de los fines autorizados requiere permiso previo."],
      ["Comunicaciones", "Al registrarte o enviar un formulario aceptas que podamos responder a tu solicitud y enviarte comunicaciones relacionadas con la actividad de la fundación. Puedes retirar esa autorización en cualquier momento."],
      ["Actualizaciones", "Podemos actualizar estos términos y esta política cuando cambien el servicio, la normativa o nuestras prácticas. La versión vigente se publicará en esta sección."],
    ],
  };

  return <main className="min-h-screen bg-[#f7f4ee] text-[#1a1a1a]"><header className="bg-[#0c3016] px-6 py-10 text-white"><div className="mx-auto max-w-4xl"><a href="/" className="text-sm text-[#c5e6a5] hover:underline">← Volver a Germinagro</a><p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#8dc56a]">{content.eyebrow}</p><h1 className="mt-2 text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{content.title}</h1></div></header><div className="mx-auto max-w-4xl px-6 py-10"><div className="mb-8 flex items-center gap-3 rounded-2xl border border-[#b9d69d] bg-[#eaf3e0] p-5 text-sm text-[#1a5c28]"><ShieldCheck size={24} /><span>Protección activa: autenticación, RLS y validación de entradas.</span></div><div className="space-y-5">{content.sections.map(([heading, body]) => <section key={heading} className="rounded-2xl border border-black/5 bg-white p-6"><h2 className="text-lg font-bold text-[#0c3016]">{heading}</h2><p className="mt-2 leading-relaxed text-[#555]">{body}</p></section>)}</div><p className="mt-8 text-xs text-[#888]">Última actualización: 23 de septiembre de 2026.</p></div></main>;
}

function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(ADMIN_SESSION_KEY) === "true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [analytics, setAnalytics] = useState(EMPTY_ANALYTICS);
  const [users, setUsers] = useState(readUsers);
  const [config, setConfig] = useState(readSiteConfig);
  const [tab, setTab] = useState("resumen");
  const [notice, setNotice] = useState("");
  const [registering, setRegistering] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [loginAttempts, setLoginAttempts] = useState(0);

  useEffect(() => {
    purgeLegacySensitiveStorage();
    setAnalytics(readAnalytics());
    const refresh = () => setAnalytics(readAnalytics());
    window.addEventListener("storage", refresh);
    if (supabase) {
      const authClient = supabase;
      void authClient.auth.getSession().then(({ data }) => {
        if (!data.session) {
          sessionStorage.removeItem(ADMIN_SESSION_KEY);
          setAuthenticated(false);
        }
      });
    }
    return () => window.removeEventListener("storage", refresh);
  }, []);

  function signIn(event: React.FormEvent) {
    event.preventDefault();
    if (loginAttempts >= 5) { setError("Acceso bloqueado temporalmente. Intenta de nuevo más tarde."); return; }
    if (supabase) {
      const authClient = supabase;
      void authClient.auth.signInWithPassword({ email: username, password }).then(async ({ data, error: authError }) => {
        if (authError) { setLoginAttempts((value) => value + 1); setError("Credenciales no válidas."); return; }
        const { data: adminRole } = await authClient.from("admin_roles").select("user_id").eq("user_id", data.user.id).maybeSingle();
        if (!adminRole) { await authClient.auth.signOut({ scope: "local" }); setError("Esta cuenta no tiene permisos de administración."); return; }
        sessionStorage.setItem(ADMIN_SESSION_KEY, "true"); setAuthenticated(true); setError(""); setAnalytics(readAnalytics());
      });
      return;
    }
    setLoginAttempts((value) => value + 1);
    setError("El acceso administrativo requiere configurar Supabase Auth antes de publicar.");
  }

  async function registerUser(event: React.FormEvent) {
    event.preventDefault();
    setRegistering(true);
    setNotice("");
    if (supabase) {
      const { error: signUpError } = await supabase.auth.signUp({ email: newUser.email, password: newUser.password, options: { data: { name: newUser.name } } });
      if (signUpError) {
        setNotice(signUpError.message);
        setRegistering(false);
        return;
      }
    }
    if (!supabase) {
      setNotice("El registro de administradores requiere Supabase Auth; no se guardan contraseñas en este navegador.");
      setRegistering(false);
      return;
    }
    setNewUser({ name: "", email: "", password: "" });
    setNotice("Cuenta creada. Para otorgar permisos de administración, añade su UUID a admin_roles en Supabase.");
    setRegistering(false);
  }

  function saveConfig(event: React.FormEvent) {
    event.preventDefault();
    localStorage.setItem(SITE_CONFIG_KEY, JSON.stringify(config));
    if (supabase) {
      void supabase.from("site_config").upsert({ id: 1, config, updated_at: new Date().toISOString() });
    }
    setNotice("Cambios de apariencia guardados.");
  }

  function resetAnalytics() {
    updateAnalytics(EMPTY_ANALYTICS);
    setAnalytics(EMPTY_ANALYTICS);
    setNotice("Estadísticas reiniciadas.");
  }

  function signOut() {
    if (supabase) void supabase.auth.signOut({ scope: "local" });
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setAuthenticated(false);
    setUsername("");
    setPassword("");
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#f7f4ee] flex items-center justify-center px-5">
        <form onSubmit={signIn} className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
          <div className="w-12 h-12 rounded-xl bg-[#d4e8c2] text-[#1a5c28] flex items-center justify-center mb-5">
            <LockKeyhole size={24} />
          </div>
          <p className="text-[#5a9e3a] text-xs font-bold uppercase tracking-[0.18em] mb-2">Germinagro</p>
          <h1 className="text-3xl font-bold text-[#0c3016] mb-2" style={{ fontFamily: "var(--font-display)" }}>Administración</h1>
          <p className="text-sm text-[#777] mb-6">Acceso privado a las estadísticas de la página.</p>
          <label className="block text-xs font-semibold text-[#555] mb-1">Usuario</label>
          <input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required className="w-full mb-4 bg-[#f7f4ee] border border-[#ddd] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#5a9e3a]" />
          <label className="block text-xs font-semibold text-[#555] mb-1">Contraseña</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#5a9e3a]" />
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <button type="submit" className="w-full mt-6 bg-[#1a5c28] hover:bg-[#0f3a19] text-white font-semibold rounded-lg py-3 transition-colors">Entrar al panel</button>
        </form>
      </main>
    );
  }

  const cards = [
    { label: "Visitas", value: analytics.visits, detail: "Sesiones registradas", color: "bg-[#d4e8c2] text-[#1a5c28]" },
    { label: "Páginas vistas", value: analytics.pageViews, detail: "Cargas de la landing", color: "bg-[#e3e0f2] text-[#4d467d]" },
    { label: "Clics de contacto", value: analytics.contactClicks, detail: "Correo y teléfonos", color: "bg-[#f0d5b8] text-[#7a4e2d]" },
    { label: "Formularios", value: analytics.contactForms, detail: "Mensajes enviados", color: "bg-[#dce8f1] text-[#245477]" },
    { label: "Visitas móviles", value: analytics.mobileVisits, detail: "Teléfonos y tabletas", color: "bg-[#d8eadf] text-[#23603a]" },
    { label: "Visitas escritorio", value: analytics.desktopVisits, detail: "Ordenadores", color: "bg-[#f2e4c6] text-[#805c20]" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1a1a1a]">
      <header className="bg-[#0c3016] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[#8dc56a] text-xs font-bold uppercase tracking-[0.18em]">Germinagro</p>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Panel de administración</h1>
          </div>
          <button onClick={signOut} className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"><LogOut size={16} /> Salir</button>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex gap-2 overflow-x-auto border-b border-black/10 mb-8">
          {[["resumen", "Resumen", BarChart3], ["registro", "Registrar", UserPlus], ["apariencia", "Modificar frontend", Palette], ["conexion", "Supabase", RefreshCw]].map(([value, label, Icon]) => <button key={value as string} onClick={() => setTab(value as string)} className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${tab === value ? "border-[#5a9e3a] text-[#1a5c28]" : "border-transparent text-[#888] hover:text-[#1a5c28]"}`}><Icon size={16} />{label as string}</button>)}
        </div>
        {notice && <div className="mb-6 rounded-lg bg-[#d4e8c2] px-4 py-3 text-sm text-[#1a5c28]">{notice}</div>}
        {tab === "registro" && <section className="grid md:grid-cols-[1fr_1.2fr] gap-6">
          <form onSubmit={registerUser} className="bg-white rounded-2xl border border-black/5 p-6">
            <h2 className="text-xl font-bold text-[#0c3016] mb-1">Registrar administrador</h2>
            <p className="text-sm text-[#777] mb-6">Crea accesos adicionales al panel.</p>
            <label className="block text-xs font-semibold text-[#555] mb-1">Nombre</label><input required value={newUser.name} onChange={(event) => setNewUser({ ...newUser, name: event.target.value })} className="w-full mb-4 bg-[#f7f4ee] border border-[#ddd] rounded-lg px-3 py-2.5 text-sm" />
            <label className="block text-xs font-semibold text-[#555] mb-1">Correo</label><input required type="email" value={newUser.email} onChange={(event) => setNewUser({ ...newUser, email: event.target.value })} className="w-full mb-4 bg-[#f7f4ee] border border-[#ddd] rounded-lg px-3 py-2.5 text-sm" />
            <label className="block text-xs font-semibold text-[#555] mb-1">Contraseña</label><input required minLength={6} type="password" value={newUser.password} onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} className="w-full mb-5 bg-[#f7f4ee] border border-[#ddd] rounded-lg px-3 py-2.5 text-sm" />
            <button disabled={registering} className="inline-flex items-center gap-2 bg-[#1a5c28] text-white rounded-lg px-4 py-2.5 text-sm font-semibold disabled:opacity-50"><UserPlus size={16} />{registering ? "Registrando..." : "Registrar usuario"}</button>
          </form>
          <div className="bg-white rounded-2xl border border-black/5 p-6"><h2 className="text-xl font-bold text-[#0c3016] mb-4">Usuarios registrados</h2>{users.length === 0 ? <p className="text-sm text-[#888]">Aún no hay usuarios adicionales.</p> : <div className="space-y-3">{users.map((user) => <div key={user.email} className="flex items-center gap-3 border-b border-black/5 pb-3"><div className="w-9 h-9 rounded-full bg-[#d4e8c2] flex items-center justify-center text-[#1a5c28]"><Users size={17} /></div><div><p className="font-semibold text-sm">{user.name}</p><p className="text-xs text-[#888]">{user.email}</p></div></div>)}</div>}</div>
        </section>}
        {tab === "apariencia" && <SiteEditor config={config} setConfig={setConfig} saveConfig={saveConfig} />}
        {tab === "conexion" && <section className="bg-white rounded-2xl border border-black/5 p-6 max-w-3xl"><h2 className="text-xl font-bold text-[#0c3016] mb-2">Conexión con Supabase</h2><div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${isSupabaseConfigured ? "bg-[#d4e8c2] text-[#1a5c28]" : "bg-[#f0d5b8] text-[#7a4e2d]"}`}><span className="w-2 h-2 rounded-full bg-current" />{isSupabaseConfigured ? "Conectado" : "Modo local"}</div><p className="text-sm text-[#666] mt-5 leading-relaxed">El formulario de contactos y Supabase Auth usan la conexión segura cuando está configurada. Las métricas de este prototipo se muestran localmente; para analítica multiusuario en producción se recomienda una Edge Function o RPC con límites y rate limiting, nunca una escritura anónima directa sobre agregados.</p></section>}
        {tab === "resumen" && <>
        <div className="flex items-end justify-between mb-6">
          <div><h2 className="text-xl font-bold text-[#0c3016]">Resumen del sitio</h2><p className="text-sm text-[#777] mt-1">Datos guardados en este navegador.</p></div>
          <BarChart3 className="text-[#5a9e3a]" size={28} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => <div key={card.label} className="bg-white rounded-2xl shadow-sm border border-black/5 p-6"><div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-5 ${card.color}`}>{card.value}</div><p className="font-bold text-[#0c3016]">{card.label}</p><p className="text-sm text-[#888] mt-1">{card.detail}</p></div>)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6"><div className="bg-white rounded-2xl border border-black/5 p-6"><p className="text-xs uppercase tracking-wider text-[#888]">Última visita registrada</p><p className="mt-2 font-semibold text-[#0c3016]">{analytics.lastVisit ? new Date(analytics.lastVisit).toLocaleString("es-CO") : "Todavía no hay visitas"}</p><div className="flex gap-5 mt-5 text-sm text-[#666]"><span className="inline-flex items-center gap-1"><Smartphone size={15} /> {analytics.mobileVisits} móvil</span><span className="inline-flex items-center gap-1"><Monitor size={15} /> {analytics.desktopVisits} escritorio</span></div></div><div className="bg-white rounded-2xl border border-black/5 p-6"><p className="text-xs uppercase tracking-wider text-[#888] mb-3">Actividad reciente</p>{analytics.events.slice(0, 4).map((event) => <div key={event.date} className="flex justify-between gap-3 text-sm py-1.5"><span className="text-[#555]">{event.label}</span><span className="text-[#999] text-xs">{new Date(event.date).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}</span></div>)}</div></div>
        <button onClick={resetAnalytics} className="mt-6 text-xs text-[#a44] hover:underline">Reiniciar estadísticas</button><p className="mt-3 text-xs text-[#999]">Las métricas de esta vista se guardan únicamente en este navegador.</p>
        </>}
      </div>
    </main>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteConfig] = useState(readSiteConfig);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [contactSending, setContactSending] = useState(false);

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    purgeLegacySensitiveStorage();
    const analytics = readAnalytics();
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    updateAnalytics({
      pageViews: analytics.pageViews + 1,
      ...(sessionStorage.getItem("germinagro-visit") ? {} : {
        visits: analytics.visits + 1,
        lastVisit: new Date().toISOString(),
        mobileVisits: analytics.mobileVisits + (isMobile ? 1 : 0),
        desktopVisits: analytics.desktopVisits + (isMobile ? 0 : 1),
      }),
    });
    recordEvent("Página visitada");
    if (!sessionStorage.getItem("germinagro-visit")) {
      sessionStorage.setItem("germinagro-visit", "true");
    }
  }, []);

  if (window.location.pathname.startsWith("/admin")) return <AdminPanel />;
  if (window.location.pathname === "/seguridad") return <LegalPage type="seguridad" />;
  if (window.location.pathname === "/privacidad") return <LegalPage type="privacidad" />;
  if (window.location.pathname === "/terminos") return <LegalPage type="terminos" />;

  const line = LINES[activeTab];

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactSending(true);
    setContactStatus("Enviando...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = {
      name: String(formData.get("name") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      profile: String(formData.get("profile") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };
    if (supabase) {
      const { error } = await supabase.from("contacts").insert(contact);
      if (error) {
        setContactStatus("No pudimos enviar el mensaje. Inténtalo de nuevo.");
        setContactSending(false);
        return;
      }
    } else {
      setContactStatus("El formulario requiere conexión segura con Supabase. Inténtalo más tarde.");
      setContactSending(false);
      return;
    }
    const current = readAnalytics();
    recordEvent("Formulario enviado", { contactForms: current.contactForms + 1 });
    form.reset();
    setContactStatus(supabase ? "¡Mensaje enviado con éxito!" : "Mensaje guardado localmente. Configura Supabase para recibirlo en línea.");
    setContactSending(false);
  }

  return (
    <div className="min-h-full overflow-x-hidden" style={{ fontFamily: "var(--font-body)", background: "#f7f4ee", ["--site-accent" as string]: siteConfig.accentColor, ["--site-dark" as string]: siteConfig.darkColor }}>

      {/* ──────── NAV ──────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c3016]/94 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-[#f5f0e4] shadow shadow-black/20">
                <img src={logoGerminagro} alt="Fundación Germinagro" className="h-11 w-11 max-w-none object-cover" />
              </div>
              <div className="hidden leading-none sm:block">
                <span className="block text-sm font-bold tracking-[0.12em] text-white">{siteConfig.brandName}</span>
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.24em] text-[#a8d880]">FUNDACIÓN</span>
              </div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/75">
            {[["#nosotros", "Nosotros"], ["#servicios", "Servicios"], ["#campo", "En campo"], ["#vinculacion", "Vinculación"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#8dc56a] transition-colors">{label}</a>
            ))}
            <a href="#contacto" className="bg-[#5a9e3a] hover:bg-[#3a7a28] text-white px-4 py-1.5 rounded-full font-semibold transition-colors text-xs">
              {siteConfig.navContact}
            </a>
            <button onClick={() => setRegistrationOpen(true)} className="border border-[#8dc56a]/60 text-[#d4e8c2] hover:bg-[#8dc56a]/15 px-4 py-1.5 rounded-full font-semibold transition-colors text-xs">Regístrate</button>
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
            <button onClick={() => { setMenuOpen(false); setRegistrationOpen(true); }} className="self-start pt-1 text-left font-semibold text-[#c5e6a5]">Regístrate</button>
          </div>
        )}
      </nav>

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-screen flex items-end pb-0 pt-14 overflow-hidden">
        {/* Foto de campo a sangre */}
        <img src={SITE_IMAGES[siteConfig.heroImage as keyof typeof SITE_IMAGES]?.src || productoresAnserma} alt="Productores y equipo técnico en Anserma, Caldas" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Gradiente dramático */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(10,28,12,0.55) 0%, rgba(10,28,12,0.25) 40%, rgba(10,28,12,0.90) 80%, #0c3016 100%)"
        }} />

        {/* Foto flotante equipo — esquina superior derecha */}
        <div className="absolute top-24 right-8 md:right-16 hidden md:block" style={{ transform: "rotate(2deg)" }}>
          <div className="w-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img src={SITE_IMAGES[siteConfig.floatingImage as keyof typeof SITE_IMAGES]?.src || imgEquipo} alt="Equipo Germinagro en campo" className="w-full h-56 object-cover object-top" />
          </div>
          <div className="mt-2 text-center text-white/60 text-xs">📍 Supía, Caldas</div>
        </div>

        {/* Contenido */}
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#5a9e3a]/25 border border-[#5a9e3a]/40 text-[#a8d880] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8dc56a] animate-pulse" />
              {siteConfig.heroEyebrow}
            </div>
            <h1 style={{ fontFamily: "Fredoka One, var(--font-display)", lineHeight: 1.1, color: siteConfig.accentColor }}
              className="text-6xl md:text-7xl font-bold text-white mb-5">
              {siteConfig.heroTitle}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#servicios" className="bg-[#5a9e3a] hover:bg-[#3a7a28] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-[#5a9e3a]/30 hover:shadow-[#5a9e3a]/50">
                {siteConfig.heroPrimaryCta} →
              </a>
              <a href="#nosotros" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3 rounded-full transition-colors backdrop-blur-sm">
                {siteConfig.heroSecondaryCta}
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
              { src: cultivoPlatano, label: "Cultivo de plátano" },
              { src: viveroPlantula, label: "Viveros" },
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
      <section id="nosotros" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0c3016 0%, #174c26 55%, #2e6b3b 100%)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: `url(${trabajoCampoNuevo})`, backgroundPosition: "center", backgroundSize: "cover", mixBlendMode: "soft-light" }} />
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Foto con decoración */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img src={trabajoCampo} alt="Equipo construyendo invernadero en Supía, Caldas" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3016]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start gap-3 bg-[#7a4e2d] rounded-2xl px-4 py-3 shadow-xl">
                  <Handshake size={20} strokeWidth={1.8} className="mt-0.5 flex-shrink-0 text-[#f0d5b8]" />
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
              Nuestro origen responde a una necesidad real: los pequeños y medianos productores de Manizales, Caldas y otros territorios del Eje Cafetero, Tolima y Valle del Cauca enfrentan simultáneamente barreras técnicas, organizativas y normativas que ninguna intervención sectorial aislada logra resolver por completo.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl p-4" style={{ background: "rgba(90,158,58,0.15)", border: "1px solid rgba(90,158,58,0.3)" }}>
                <div className="flex items-center gap-2 text-[#8dc56a] text-xs font-bold uppercase tracking-wide mb-1"><Sprout size={14} /> Misión</div>
                <div className="text-white/75 text-sm leading-snug">Conectar actores, oportunidades y recursos para el desarrollo agropecuario sostenible en la Colombia rural.</div>
              </div>
              <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="flex items-center gap-2 text-[#a8d880] text-xs font-bold uppercase tracking-wide mb-1"><MapPinned size={14} /> Visión</div>
                <div className="text-white/75 text-sm leading-snug">Ser la fundación líder que facilita la sostenibilidad agropecuaria y el bienestar integral de los territorios rurales.</div>
              </div>
            </div>

            {/* Pilares compactos */}
            <div className="flex gap-2 flex-wrap">
              {[
                { icon: Leaf, label: "Suelos vivos" },
                { icon: Droplets, label: "Agua protegida" },
                { icon: Sprout, label: "Biodiversidad" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-sm text-white/80">
                  <p.icon size={15} strokeWidth={1.8} /> {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SERVICIOS — TABS ──────── */}
      <section id="servicios" className="relative overflow-hidden py-0" style={{ background: "linear-gradient(115deg, #f7f4ee 0%, #eef3e8 50%, #f4e9dc 100%)" }}>
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
                <l.icon size={17} strokeWidth={1.8} />
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
                  <line.icon size={15} strokeWidth={1.8} /> Línea {line.num}
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
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white"
                        style={{ background: line.color }}><Check size={10} strokeWidth={3} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all self-start shadow hover:shadow-lg"
                style={{ background: line.color }}>
                Solicitar esta línea <ArrowRight size={16} />
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
      <section id="campo" className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #0c3016 0%, #194d29 60%, #477b3b 100%)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: `url(${cultivoPlatanoCosecha})`, backgroundPosition: "center", backgroundSize: "cover", mixBlendMode: "screen" }} />
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
              Ferias agroecológicas, custodia de semillas nativas y construcción de infraestructura rural en Manizales, el Eje Cafetero, Tolima y Valle del Cauca.
            </p>
          </div>

          {/* Collage asimétrico */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3" style={{ height: 380 }}>
            {/* Grande izquierda */}
            <div className="col-span-5 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src={SITE_IMAGES[siteConfig.fieldImage as keyof typeof SITE_IMAGES]?.src || productoresAnserma} alt="Productores y equipo técnico en Anserma, Caldas" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white font-bold text-sm">Equipo en campo</div>
                <div className="text-white/60 text-xs">Anserma, Caldas</div>
              </div>
            </div>
            {/* Arriba centro */}
            <div className="col-span-4 rounded-2xl overflow-hidden relative group">
              <img src={cultivoPlatanoCosecha} alt="Cosecha de plátano en finca" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Cosecha de plátano</div>
            </div>
            {/* Arriba derecha */}
            <div className="col-span-3 rounded-2xl overflow-hidden relative group">
              <img src={equipoProcesos} alt="Equipo Germinagro desarrollando procesos agropecuarios" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Trabajo técnico</div>
            </div>
            {/* Abajo centro */}
            <div className="col-span-3 rounded-2xl overflow-hidden relative group">
              <img src={SITE_IMAGES[siteConfig.galleryImage as keyof typeof SITE_IMAGES]?.src || viveroPlantula} alt="Plántulas en vivero de Germinagro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Viveros</div>
            </div>
            {/* Abajo derecha grande */}
            <div className="col-span-4 rounded-2xl overflow-hidden relative group">
              <img src={trabajoCampoNuevo} alt="Trabajo de campo para infraestructura rural" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Infraestructura rural</div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── PROPUESTA DE VALOR — strip diagonal ──────── */}
      <section style={{ background: "linear-gradient(170deg, #f7f4ee 0%, #eaf0e2 52%, #f1dfcc 100%)" }} className="py-20">
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
              { icon: Link2, title: "Enfoque integral", desc: "Asistencia técnica, gestión asociativa y sostenibilidad en un solo aliado.", photo: cultivoPlatano },
              { icon: UsersRound, title: "Equipo interdisciplinario", desc: "Técnicos especializados para cada área de intervención.", photo: productoresAnserma },
              { icon: BarChart3, title: "Ejecución trazable", desc: "Recursos públicos y privados con la trazabilidad que exigen los co-financiadores.", photo: equipoProcesos },
              { icon: MapPinned, title: "Conocimiento local", desc: "Dominio de ICA, ADR, Agrosavia, CMDR y normativa nacional.", photo: trabajoCampoNuevo },
              { icon: Search, title: "Diagnóstico In Situ", desc: "Ningún programa se diseña desde escritorio.", photo: viveroPlantula },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group" style={{ minHeight: 200 }}>
                <img src={v.photo} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3016]/90 via-[#0c3016]/50 to-[#0c3016]/20" />
                <div className="relative p-4 flex flex-col justify-end h-full" style={{ minHeight: 200 }}>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#c5e6a5]"><v.icon size={18} strokeWidth={1.8} /></div>
                  <div className="text-[#8dc56a] font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>{v.title}</div>
                  <div className="text-white/70 text-xs leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── VINCULACIÓN ──────── */}
      <section id="vinculacion" className="relative overflow-hidden py-20" style={{ background: "linear-gradient(145deg, #0c3016 0%, #174c26 48%, #7a4e2d 150%)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: `url(${viveroPlantula})`, backgroundPosition: "center", backgroundSize: "cover", mixBlendMode: "screen" }} />
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
              <a key={v.title} href="#contacto" onClick={() => { const current = readAnalytics(); const profileClicks = { ...current.profileClicks, [v.title]: (current.profileClicks[v.title] || 0) + 1 }; recordEvent(`Interés: ${v.title}`, { profileClicks }); }}
                className="group relative rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#c5e6a5]"><v.icon size={21} strokeWidth={1.8} /></div>
                <div className="text-white font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{v.title}</div>
                <div className="text-white/55 text-xs leading-relaxed mb-4">{v.desc}</div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                  style={{ background: v.color, color: "#fff" }}>
                  {v.cta} <ArrowRight size={14} />
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
                  <div className="text-white/60 text-sm italic">Sembrando oportunidades, Cosechando bienestar — Manizales, Caldas y regiones vecinas</div>
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
          <img src={SITE_IMAGES[siteConfig.contactImage as keyof typeof SITE_IMAGES]?.src || imgStand} alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #f7f4ee, transparent 40%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Izquierda */}
            <div>
              <div className="text-[#5a9e3a] text-xs font-semibold uppercase tracking-widest mb-3">Contáctenos</div>
              <h2 className="text-4xl font-bold text-[#0c3016] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {siteConfig.contactTitle}
              </h2>
              <p className="text-[#555] leading-relaxed mb-8 text-sm">
                {siteConfig.contactSubtitle}
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Ubicación", val: "Manizales, Caldas" },
                  { icon: Mail, label: "Correo", val: "fundaciongerminagro@gmail.com", href: "mailto:fundaciongerminagro@gmail.com" },
                  { icon: Phone, label: "Teléfono 1", val: "300 716 9188", href: "tel:+573007169188" },
                  { icon: Phone, label: "Teléfono 2", val: "321 749 2254", href: "tel:+573217492254" },
                  { icon: Phone, label: "Teléfono 3", val: "300 487 3916", href: "tel:+573004873916" },
                  { icon: Link2, label: "Redes", val: "@germinagro" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4e8c2] flex items-center justify-center text-lg flex-shrink-0">
                      <c.icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-[#888] text-xs uppercase tracking-wider">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} onClick={() => { const current = readAnalytics(); recordEvent(`Clic: ${c.label}`, { contactClicks: current.contactClicks + 1 }); }} className="text-[#0c3016] font-semibold text-sm hover:text-[#5a9e3a] transition-colors">
                          {c.val}
                        </a>
                      ) : (
                        <div className="text-[#0c3016] font-semibold text-sm">{c.val}</div>
                      )}
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
            <form className="bg-white rounded-3xl shadow-xl p-7" onSubmit={submitContact}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Nombre</label>
                  <input name="name" maxLength={120} type="text" placeholder="Su nombre"
                    className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
                </div>
                <div>
                  <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Organización</label>
                  <input name="organization" maxLength={160} type="text" placeholder="Entidad o asociación"
                    className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Correo electrónico</label>
                <input name="email" maxLength={254} type="email" placeholder="fundaciongerminagro@gmail.com"
                  className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all" />
              </div>
              <div className="mb-4">
                <label className="text-[#888] text-xs uppercase tracking-wider block mb-1">Soy un/a</label>
                <select name="profile" className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#5a9e3a] transition-all appearance-none">
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
                <textarea name="message" maxLength={5000} rows={3} placeholder="Cuéntenos sobre su territorio y necesidades…"
                  className="w-full bg-[#f7f4ee] border border-[#ddd] rounded-xl px-4 py-3 text-[#333] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#5a9e3a] focus:ring-1 focus:ring-[#5a9e3a]/30 transition-all resize-none" />
              </div>
              <button type="submit"
                disabled={contactSending}
                className="w-full bg-[#5a9e3a] hover:bg-[#3a7a28] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#5a9e3a]/30 disabled:cursor-wait disabled:opacity-60">
                {contactSending ? "Enviando..." : "Enviar mensaje →"}
              </button>
              {contactStatus && <p role="status" className="mt-3 text-center text-sm text-[#1a5c28]">{contactStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* ──────── SEGURIDAD Y DATOS ──────── */}
      <section id="politicas-datos" className="border-t border-[#d8dfd0] bg-[#eaf3e0] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#5a9e3a]">Protección y confianza</div>
              <h2 className="text-3xl font-bold text-[#0c3016]" style={{ fontFamily: "var(--font-display)" }}>Políticas de seguridad de datos</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#536050]">Tratamos tus datos con finalidad clara, acceso restringido y controles técnicos. No guardamos contraseñas en este sitio ni almacenamos formularios personales en el navegador.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a href="/seguridad" className="rounded-full bg-[#1a5c28] px-4 py-2 text-white hover:bg-[#0f3a19]">Centro de seguridad</a>
              <a href="/privacidad" className="rounded-full border border-[#8aaa76] px-4 py-2 text-[#1a5c28] hover:bg-white">Privacidad</a>
              <a href="/terminos" className="rounded-full border border-[#8aaa76] px-4 py-2 text-[#1a5c28] hover:bg-white">Términos</a>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[ ["Acceso restringido", "Supabase Auth y roles administrativos verificados."], ["Datos protegidos", "RLS, validación de entradas y consultas parametrizadas."], ["Tus derechos", "Puedes solicitar consulta, corrección o eliminación de tus datos." ] ].map(([title, description]) => <div key={title} className="rounded-2xl border border-[#c9daba] bg-white/70 p-4"><p className="font-bold text-[#1a5c28]">{title}</p><p className="mt-1 text-sm leading-relaxed text-[#64705f]">{description}</p></div>)}
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
              {siteConfig.footerTagline}
            </div>
          </div>
          <div className="text-white/30 text-xs text-center">
            © 2026 Fundación Germinagro · Manizales, Caldas · Eje Cafetero, Tolima y Valle del Cauca
          </div>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/45" aria-label="Información legal">
            <a href="/seguridad" className="hover:text-white">Seguridad</a>
            <a href="/privacidad" className="hover:text-white">Privacidad</a>
            <a href="/terminos" className="hover:text-white">Términos</a>
          </nav>
        </div>
      </footer>
      {registrationOpen && <PublicRegistration onClose={() => setRegistrationOpen(false)} />}
    </div>
  );
}
