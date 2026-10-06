import { FormEvent, useState } from "react";

const services = [
  ["01", "Webs para negocios", "Una presencia online profesional para que tus clientes te encuentren y contacten contigo."],
  ["02", "Diseño responsive", "Tu web se adapta perfectamente a móvil, tablet y ordenador."],
  ["03", "Web rápida y moderna", "Tecnología actual para ofrecer una experiencia fluida y profesional."],
  ["04", "Formularios de contacto", "Recibe solicitudes y consultas directamente de tus clientes."],
  ["05", "SEO básico", "Estructura y contenidos preparados para que Google pueda entender tu negocio."],
  ["06", "Publicación y mantenimiento", "Te ayudo a poner tu web online y a mantenerla actualizada."],
];

const types = ["Restaurante", "Comercio", "Profesional / autónomo", "Peluquería / estética", "Empresa", "Otro"];

const demos = [
  { type: "RESTAURANTE · PROYECTO DEMO", title: "Brasa & Olivo", text: "Carta, reservas y una imagen cuidada para un restaurante local.", className: "demo-restaurant" },
  { type: "PELUQUERÍA · PROYECTO DEMO", title: "Studio Hair", text: "Servicios, galería y contacto directo por WhatsApp.", className: "demo-hair" },
  { type: "PROFESIONAL · PROYECTO DEMO", title: "Martín Consultoría", text: "Una web clara para explicar servicios y generar consultas.", className: "demo-pro" },
];

const prices = [
  { name: "Web Esencial", price: "399 €", text: "Para tener una presencia profesional en Internet.", items: ["Página responsive", "Diseño personalizado", "Formulario de contacto", "SEO básico", "Publicación online"] },
  { name: "Web Negocio", price: "699 €", text: "Para negocios que necesitan una web más completa.", items: ["Hasta 5 secciones/páginas", "Diseño personalizado", "Formulario + WhatsApp", "SEO básico", "Publicación online", "1 ronda de ajustes"] },
  { name: "Web a medida", price: "999 €", text: "Para proyectos con necesidades específicas.", items: ["Estructura a medida", "Funcionalidades personalizadas", "Formulario + WhatsApp", "SEO técnico inicial", "Publicación online", "Acompañamiento"] },
];

export default function App() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f).entries());
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw Error();
      setSent(true);
      f.reset();
    } catch {
      alert("No se ha podido enviar. Escríbeme directamente por email o WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return <main>
    <nav className="nav">
      <a className="brand" href="#inicio">
        <img src="/nexosites-logo.png" alt="NexoSites" />
      </a>
      <div className="navlinks">
        <a href="#servicios">Servicios</a><a href="#portfolio">Portfolio</a><a href="#precios">Precios</a><a href="#proceso">Cómo trabajo</a>
        <a href="#contacto" className="navcta">Pedir presupuesto</a>
      </div>
    </nav>

    <section id="inicio" className="hero">
      <div>
        <p className="eyebrow">DISEÑO WEB PARA NEGOCIOS</p>
        <h1>Tu negocio merece una web <em>que funcione.</em></h1>
        <p className="lead">Creo páginas web modernas, rápidas y adaptadas a móviles para ayudarte a mostrar tu negocio y conseguir nuevos clientes.</p>
        <div className="actions"><a className="button primary" href="#contacto">Cuéntame tu idea <span>→</span></a><a className="button ghost" href="#portfolio">Ver demos</a></div>
        <div className="trust">✓ Diseño personalizado　✓ Responsive　✓ Sin permanencias</div>
      </div>
      <div className="hero-card"><div className="browser"><div className="dots"><i /><i /><i /></div><div className="screen"><div className="mini-logo">N</div><div className="screen-title">Tu negocio,<br /><strong>online.</strong></div><div className="screen-line" /><div className="screen-line short" /><div className="screen-button">Contactar</div></div></div><div className="phone"><div className="phone-top" /><div className="phone-content"><b>NexoSites</b><span>Tu web, en cualquier pantalla.</span></div></div></div>
    </section>

    <section id="servicios" className="section"><div className="section-head"><p className="eyebrow">LO QUE PUEDO HACER POR TI</p><h2>Una web pensada para tu negocio.</h2><p>No necesitas una web complicada. Necesitas una web clara, profesional y que facilite que tus clientes contacten contigo.</p></div><div className="service-grid">{services.map(([n, t, d]) => <article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section id="portfolio" className="section portfolio"><div className="section-head"><p className="eyebrow">PORTFOLIO</p><h2>Tres ejemplos de lo que podemos crear.</h2><p>Son proyectos conceptuales para mostrar estilos y posibilidades. No corresponden a clientes reales.</p></div><div className="demo-grid">{demos.map(d => <article className={`demo-card ${d.className}`} key={d.title}><div className="demo-browser"><div className="demo-top"><i /><i /><i /></div><div className="demo-screen"><small>{d.type}</small><h3>{d.title}</h3><p>{d.text}</p><span>Descubrir →</span></div></div><div className="demo-caption"><strong>{d.title}</strong><span>Proyecto demo</span></div></article>)}</div></section>

    <section id="precios" className="section pricing"><div className="section-head"><p className="eyebrow">PRECIOS ORIENTATIVOS</p><h2>Una referencia clara para empezar.</h2><p>El precio final depende de las funcionalidades, páginas y contenidos necesarios para cada proyecto.</p></div><div className="price-grid">{prices.map((p, i) => <article className={`price-card ${i === 1 ? "featured" : ""}`} key={p.name}>{i === 1 && <span className="popular">MÁS SOLICITADA</span>}<h3>{p.name}</h3><div className="price">desde <strong>{p.price}</strong></div><p>{p.text}</p><ul>{p.items.map(item => <li key={item}>✓ {item}</li>)}</ul><a className="button ghost price-button" href="#contacto">Consultar</a></article>)}</div></section>

    <section className="audience"><div><p className="eyebrow">PARA QUIÉN</p><h2>Si tienes un negocio,<br />podemos crear tu web.</h2></div><div className="pills">{types.map(t => <span key={t}>{t}</span>)}</div></section>

    <section id="proceso" className="section"><div className="section-head"><p className="eyebrow">EL PROCESO</p><h2>De tu idea a Internet.</h2></div><div className="steps">{[["01", "Me cuentas tu idea", "Rellenas el formulario y me explicas qué necesitas."], ["02", "Preparamos la propuesta", "Te explico qué haría, cuánto cuesta y los plazos."], ["03", "Creo tu web", "Diseño y desarrollo una web adaptada a tu negocio."], ["04", "La ponemos online", "Publicamos tu web y te dejo todo preparado."]].map(([n, t, d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></section>

    <section id="contacto" className="contact"><div className="contact-copy"><p className="eyebrow">HABLEMOS</p><h2>Cuéntame qué tienes en mente.</h2><p>No necesitas tenerlo todo decidido. Explícame tu negocio y la idea que tienes para tu web. Te responderé con una propuesta.</p><div className="contact-links"><a href="mailto:dcuencadelrio@gmail.com">✉ dcuencadelrio@gmail.com</a><a href="https://wa.me/34610995594" target="_blank" rel="noreferrer">💬 WhatsApp: 610 995 594</a></div></div><div className="form-wrap">{sent ? <div className="success"><div>✓</div><h3>¡Solicitud enviada!</h3><p>He recibido tu idea. Te contactaré lo antes posible.</p><button className="button primary" onClick={() => setSent(false)}>Enviar otra solicitud</button></div> : <form onSubmit={submit}><input name="website" className="honeypot" tabIndex={-1} autoComplete="off" /><label>Nombre<input required name="name" placeholder="Tu nombre" /></label><div className="two"><label>Email<input required type="email" name="email" placeholder="tu@email.com" /></label><label>Teléfono<input name="phone" placeholder="Opcional" /></label></div><label>Tipo de negocio<select name="business"><option value="">Selecciona una opción</option>{types.map(t => <option key={t}>{t}</option>)}</select></label><label>Presupuesto aproximado<select name="budget"><option>Prefiero hablarlo</option><option>Menos de 500 €</option><option>500 – 1.000 €</option><option>1.000 – 2.000 €</option><option>Más de 2.000 €</option></select></label><label>Cuéntame tu idea<textarea required name="message" rows={5} placeholder="¿Qué tipo de web necesitas? ¿Qué quieres que pueda hacer?" /></label><label className="privacy-check"><input required type="checkbox" name="privacy" value="informado" /> <span>He leído la <a href="/privacidad.html" target="_blank" rel="noreferrer">información sobre protección de datos</a>.</span></label><p className="form-note">Tus datos se utilizarán para responder a tu solicitud de presupuesto. No se usarán para enviarte publicidad sin una base legal adecuada.</p><button disabled={loading} className="button primary submit">{loading ? "Enviando..." : "Solicitar presupuesto →"}</button></form>}</div></section>

    <a
      className="whatsapp-float"
      href="https://wa.me/34610995594"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar con NexoSites por WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M16 3.2A12.7 12.7 0 0 0 5.1 22.5L3.3 28.8l6.5-1.7A12.7 12.7 0 1 0 16 3.2Zm0 23.1c-2 0-3.9-.5-5.5-1.6l-.4-.2-3.8 1 1-3.7-.3-.4a10.5 10.5 0 1 1 9 4.9Zm5.8-7.9c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.6-1.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z"
          />
        </svg>
      </span>
      <span>WhatsApp</span>
    </a>

    <footer><div className="brand"> <a className="brand" href="#inicio">
        <img src="/nexosites-logo.png" alt="NexoSites" />
      </a></div><p>Webs modernas para negocios que quieren crecer.</p><div className="footer-links"><a href="/aviso-legal.html">Aviso legal</a><a href="/privacidad.html">Privacidad</a><a href="/cookies.html">Cookies</a></div><small>© 2026 NexoSites</small></footer>
  </main>;
}
