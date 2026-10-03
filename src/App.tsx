import { useState } from "react";

type Demo = "restaurant" | "hair" | "consulting";

const whatsapp = "https://wa.me/34610995594";

const demos: Record<Demo, {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
}> = {
  restaurant: {
    title: "Brasa & Olivo",
    eyebrow: "Restaurante mediterráneo",
    description: "Una demo de web para restaurante, pensada para enseñar carta, ambiente y reservas de forma rápida.",
    accent: "restaurant",
  },
  hair: {
    title: "Studio Hair",
    eyebrow: "Peluquería & belleza",
    description: "Una demo orientada a mostrar servicios, precios y facilitar la reserva de una cita desde el móvil.",
    accent: "hair",
  },
  consulting: {
    title: "Martín Consultoría",
    eyebrow: "Consultoría profesional",
    description: "Una demo limpia y profesional para presentar servicios, experiencia y facilitar el contacto.",
    accent: "consulting",
  },
};

function DemoSite({ type, onBack }: { type: Demo; onBack: () => void }) {
  const d = demos[type];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`demo-site demo-${d.accent}`}>
      <header className="demo-header">
        <button className="demo-back" onClick={onBack}>← Volver a NexoSites</button>
        <div className="demo-brand">{d.title}</div>
        <button className="demo-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">☰</button>
        <nav className={menuOpen ? "demo-nav open" : "demo-nav"}>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nosotros</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      </header>

      {type === "restaurant" && (
        <>
          <section className="demo-hero">
            <span>{d.eyebrow}</span>
            <h1>Sabores mediterráneos<br />hechos para compartir.</h1>
            <p>Cocina de producto, brasas y una carta pensada para disfrutar sin prisas.</p>
            <div className="demo-actions">
              <a href="#reservas" className="demo-button">Reservar mesa</a>
              <a href="#carta" className="demo-button secondary">Ver carta</a>
            </div>
          </section>
          <section id="carta" className="demo-section">
            <span className="demo-kicker">Nuestra carta</span>
            <h2>Platos que hablan por sí solos</h2>
            <div className="demo-grid three">
              <article><strong>Brasa</strong><p>Entrecot, verduras de temporada y pescado del día.</p><b>Desde 14 €</b></article>
              <article><strong>Para compartir</strong><p>Hummus, croquetas caseras, burrata y más.</p><b>Desde 8 €</b></article>
              <article><strong>Dulce final</strong><p>Tarta de queso, chocolate y postres de temporada.</p><b>Desde 6 €</b></article>
            </div>
          </section>
          <section id="reservas" className="demo-highlight">
            <div><span className="demo-kicker">Reservas</span><h2>¿Nos vemos esta semana?</h2><p>Reserva tu mesa en unos segundos.</p><a className="demo-button" href={whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a></div>
          </section>
        </>
      )}

      {type === "hair" && (
        <>
          <section className="demo-hero">
            <span>{d.eyebrow}</span>
            <h1>Tu estilo.<br />Tu momento.</h1>
            <p>Corte, color y cuidado personalizado en un espacio pensado para ti.</p>
            <div className="demo-actions"><a href="#servicios" className="demo-button">Ver servicios</a><a href={whatsapp} target="_blank" rel="noreferrer" className="demo-button secondary">Pedir cita</a></div>
          </section>
          <section id="servicios" className="demo-section">
            <span className="demo-kicker">Servicios</span><h2>Todo para sentirte bien</h2>
            <div className="demo-grid three">
              <article><strong>Corte & styling</strong><p>Asesoramiento, corte y acabado adaptado a tu estilo.</p><b>Desde 25 €</b></article>
              <article><strong>Color</strong><p>Coloración, mechas y técnicas personalizadas.</p><b>Desde 45 €</b></article>
              <article><strong>Tratamientos</strong><p>Cuidados intensivos para recuperar brillo y suavidad.</p><b>Desde 30 €</b></article>
            </div>
          </section>
          <section id="sobre" className="demo-highlight"><div><span className="demo-kicker">Studio Hair</span><h2>Un espacio para ti</h2><p>Trabajamos con cita previa y dedicamos tiempo a entender lo que buscas.</p><a className="demo-button" href={whatsapp} target="_blank" rel="noreferrer">Reservar cita</a></div></section>
        </>
      )}

      {type === "consulting" && (
        <>
          <section className="demo-hero">
            <span>{d.eyebrow}</span>
            <h1>Decisiones claras.<br />Negocios que avanzan.</h1>
            <p>Ayudamos a pequeñas empresas a ordenar procesos, estrategia y crecimiento.</p>
            <div className="demo-actions"><a href="#servicios" className="demo-button">Cómo podemos ayudarte</a><a href="#contacto" className="demo-button secondary">Contactar</a></div>
          </section>
          <section id="servicios" className="demo-section"><span className="demo-kicker">Servicios</span><h2>Experiencia práctica para tu negocio</h2>
            <div className="demo-grid three">
              <article><strong>Estrategia</strong><p>Objetivos, prioridades y un plan de acción realista.</p></article>
              <article><strong>Procesos</strong><p>Organización y mejora de procesos para trabajar mejor.</p></article>
              <article><strong>Digitalización</strong><p>Herramientas y soluciones digitales adaptadas a tu empresa.</p></article>
            </div>
          </section>
          <section id="sobre" className="demo-highlight"><div><span className="demo-kicker">Experiencia</span><h2>Una visión sencilla y orientada a resultados</h2><p>Un ejemplo de cómo una web profesional puede transmitir confianza y explicar servicios de forma clara.</p></div></section>
        </>
      )}

      <section id="contacto" className="demo-contact">
        <span className="demo-kicker">Contacto</span>
        <h2>Hablemos de tu proyecto</h2>
        <p>Esta es una demo ficticia creada por NexoSites.</p>
        <a className="demo-button" href={whatsapp} target="_blank" rel="noreferrer">Contactar por WhatsApp</a>
      </section>
      <footer className="demo-footer">Proyecto demo creado por <button onClick={onBack}>NexoSites</button></footer>
    </div>
  );
}

export default function App() {
  const [demo, setDemo] = useState<Demo | null>(null);
  if (demo) return <DemoSite type={demo} onBack={() => setDemo(null)} />;

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#inicio"><span className="brand-mark">N</span><span>NexoSites</span></a>
        <nav><a href="#servicios">Servicios</a><a href="#portfolio">Portfolio</a><a href="#precios">Precios</a><a href="#contacto">Contacto</a></nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Diseño web para pequeños negocios</span>
            <h1>Una web profesional para que tu negocio <em>crezca.</em></h1>
            <p>Creo páginas web rápidas, modernas y adaptadas a móvil para autónomos y pequeñas empresas.</p>
            <div className="hero-actions"><a className="button" href="#contacto">Pedir presupuesto</a><a className="text-link" href="#portfolio">Ver demos →</a></div>
          </div>
          <div className="hero-card"><div className="browser"><span></span><span></span><span></span></div><div className="hero-card-content"><div className="mock-line wide"></div><div className="mock-line"></div><div className="mock-grid"><div></div><div></div><div></div></div></div></div>
        </section>

        <section id="servicios" className="section"><div className="section-heading"><span className="eyebrow">Qué hago</span><h2>Todo lo que necesitas para tener presencia online.</h2></div><div className="cards three"><article><b>01</b><h3>Web corporativa</h3><p>Una web clara y profesional para presentar tu negocio y generar confianza.</p></article><article><b>02</b><h3>Web para negocio</h3><p>Servicios, horarios, contacto, WhatsApp y todo lo necesario para captar clientes.</p></article><article><b>03</b><h3>Web a medida</h3><p>Funcionalidades específicas cuando tu proyecto necesita algo más.</p></article></div></section>

        <section id="portfolio" className="section portfolio-section"><div className="section-heading"><span className="eyebrow">Portfolio</span><h2>Ejemplos de webs que puedo crear.</h2><p className="section-lead">Son proyectos ficticios para que puedas ver distintos estilos y posibilidades.</p></div>
          <div className="portfolio-grid">
            <article className="portfolio-card restaurant"><div className="portfolio-preview"><small>PROYECTO DEMO</small><strong>Brasa<br />& Olivo</strong><span>Restaurante mediterráneo</span></div><div className="portfolio-info"><h3>Brasa & Olivo</h3><p>Restaurante · Carta · Reservas</p><button onClick={() => setDemo("restaurant")}>Ver demo →</button></div></article>
            <article className="portfolio-card hair"><div className="portfolio-preview"><small>PROYECTO DEMO</small><strong>Studio<br />Hair</strong><span>Peluquería & belleza</span></div><div className="portfolio-info"><h3>Studio Hair</h3><p>Peluquería · Servicios · Citas</p><button onClick={() => setDemo("hair")}>Ver demo →</button></div></article>
            <article className="portfolio-card consulting"><div className="portfolio-preview"><small>PROYECTO DEMO</small><strong>Martín<br />Consultoría</strong><span>Servicios profesionales</span></div><div className="portfolio-info"><h3>Martín Consultoría</h3><p>Consultoría · Servicios · Contacto</p><button onClick={() => setDemo("consulting")}>Ver demo →</button></div></article>
          </div>
        </section>

        <section id="precios" className="section pricing"><div className="section-heading"><span className="eyebrow">Precios</span><h2>Planes sencillos, sin complicaciones.</h2></div><div className="pricing-grid"><article><h3>Web Esencial</h3><strong>399 €</strong><p>Landing profesional, responsive, contacto y puesta en marcha.</p><a href="#contacto">Solicitar →</a></article><article className="featured"><span>Más solicitado</span><h3>Web Negocio</h3><strong>699 €</strong><p>Web completa con varias secciones, WhatsApp, portfolio y optimización básica.</p><a href="#contacto">Solicitar →</a></article><article><h3>Web a medida</h3><strong>999 €</strong><p>Proyecto personalizado con funcionalidades específicas.</p><a href="#contacto">Solicitar →</a></article></div><p className="price-note">Precios orientativos. El precio final depende de las funcionalidades y contenidos necesarios.</p></section>

        <section id="contacto" className="contact-section"><div><span className="eyebrow">Hablemos</span><h2>Cuéntame qué necesitas.</h2><p>Explícame tu idea y te respondo con una propuesta sin compromiso.</p><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div><form onSubmit={(e) => { e.preventDefault(); alert("El formulario de presupuesto sigue conectado a tu API de Resend."); }}><input placeholder="Nombre" required /><input type="email" placeholder="Email" required /><input placeholder="Negocio" /><textarea placeholder="Cuéntame tu proyecto" rows={5}></textarea><button className="button" type="submit">Solicitar presupuesto</button></form></section>
      </main>
      <footer className="footer"><span>© 2026 NexoSites · David Cuenca del Río</span><span><a href="/aviso-legal.html">Aviso legal</a> · <a href="/privacidad.html">Privacidad</a> · <a href="/cookies.html">Cookies</a></span></footer>
    </div>
  );
}
