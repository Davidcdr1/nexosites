
import { FormEvent, useState } from "react";

const services = [
  ["01", "Webs para negocios", "Una presencia online profesional para que tus clientes te encuentren y contacten contigo."],
  ["02", "Diseño responsive", "Tu web se adapta perfectamente a móvil, tablet y ordenador."],
  ["03", "Web rápida y moderna", "Tecnología actual para ofrecer una experiencia fluida y profesional."],
  ["04", "Formularios de contacto", "Recibe solicitudes y consultas directamente de tus clientes."],
  ["05", "SEO básico", "Estructura y contenidos preparados para que Google pueda entender tu negocio."],
  ["06", "Publicación y mantenimiento", "Te ayudo a poner tu web online y a mantenerla actualizada."],
];

const types = [
  "Restaurante",
  "Comercio",
  "Profesional / autónomo",
  "Peluquería / estética",
  "Empresa",
  "Otro",
];

const demos = [
  {
    type: "RESTAURACIÓN",
    title: "Brasa & Olivo",
    text: "Carta, reservas y una imagen cuidada para un restaurante local.",
    className: "demo-restaurant",
    url: "https://brasa-olivo.vercel.app/",
    image:
      "/demos/brasa-olivo.jpg",
  },
  {
    type: "PELUQUERÍA Y ESTÉTICA",
    title: "MÍA Studio",
    text: "Diseño elegante para un salón de peluquería, con servicios y reservas.",
    className: "demo-hair",
    url: "https://mia-studio-fawn.vercel.app/",
    image:
      "/demos/mia-studio.jpg",
  },
  {
    type: "ENTRENAMIENTO PERSONAL",
    title: "PULSE Personal Training",
    text: "Una web deportiva y moderna para presentar servicios y captar clientes.",
    className: "demo-pulse",
    url: "https://pulse-training-navy.vercel.app/",
    image:
      "/demos/pulse-training.jpg",
  },
];

const prices = [
  {
    name: "Web Esencial",
    price: "399 €",
    text: "Para tener una presencia profesional en Internet.",
    items: [
      "Página responsive",
      "Diseño personalizado",
      "Formulario de contacto",
      "SEO básico",
      "Publicación online",
    ],
  },
  {
    name: "Web Negocio",
    price: "699 €",
    text: "Para negocios que necesitan una web más completa.",
    items: [
      "Hasta 5 secciones/páginas",
      "Diseño personalizado",
      "Formulario + WhatsApp",
      "SEO básico",
      "Publicación online",
      "1 ronda de ajustes",
    ],
  },
  {
    name: "Web a medida",
    price: "999 €",
    text: "Para proyectos con necesidades específicas.",
    items: [
      "Estructura a medida",
      "Funcionalidades personalizadas",
      "Formulario + WhatsApp",
      "SEO técnico inicial",
      "Publicación online",
      "Acompañamiento",
    ],
  },
];

export default function App() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error al enviar");

      setSent(true);
      form.reset();
    } catch {
      alert(
        "No se ha podido enviar. Escríbeme directamente por email o WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <style>{`
        .portfolio-demos {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .portfolio-demo-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 20px;
          background: #101827;
          transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
        }

        .portfolio-demo-card:hover {
          transform: translateY(-7px);
          border-color: #3984ff;
          box-shadow: 0 18px 45px rgba(0,0,0,.2);
        }

        .portfolio-demo-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }

        .portfolio-demo-image-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: #18243a;
        }

        .portfolio-demo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 400ms ease;
        }

        .portfolio-demo-card:hover .portfolio-demo-image {
          transform: scale(1.045);
        }

        .portfolio-demo-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: rgba(5,15,35,.68);
          color: #fff;
          font-weight: 700;
          opacity: 0;
          transition: opacity 250ms ease;
        }

        .portfolio-demo-card:hover .portfolio-demo-overlay,
        .portfolio-demo-link:focus-visible .portfolio-demo-overlay {
          opacity: 1;
        }

        .portfolio-demo-info {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-start;
          padding: 22px;
        }

        .portfolio-demo-type {
          color: #72a7ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .portfolio-demo-title-row {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
        }

        .portfolio-demo-title-row h3 {
          margin: 0;
          font-size: 23px;
          line-height: 1.25;
        }

        .portfolio-demo-arrow {
          display: grid;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 50%;
          transition: background 200ms ease, color 200ms ease;
        }

        .portfolio-demo-card:hover .portfolio-demo-arrow {
          color: #081326;
          background: #72a7ff;
        }

        .portfolio-demo-info p {
          margin: 12px 0 20px;
          color: #b7c1d2;
          font-size: 14px;
          line-height: 1.7;
        }

        .portfolio-demo-cta {
          margin-top: auto;
          color: #8bb5ff;
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .portfolio-demos {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .portfolio-demos {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }

          .portfolio-demo-info {
            padding: 20px;
          }

          .portfolio-demo-title-row h3 {
            font-size: 21px;
          }

          .portfolio-demo-overlay {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-demo-card,
          .portfolio-demo-image,
          .portfolio-demo-overlay,
          .portfolio-demo-arrow {
            transition: none;
          }
        }
      `}</style>

      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="NexoSites, inicio">
          <img src="/nexosites-logo.png" alt="NexoSites" />
        </a>

        <div className="navlinks">
          <a href="#servicios">Servicios</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#precios">Precios</a>
          <a href="#proceso">Cómo trabajo</a>
          <a href="#contacto" className="navcta">
            Pedir presupuesto
          </a>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div>
          <p className="eyebrow">DISEÑO WEB PARA NEGOCIOS</p>
          <h1>
            Tu negocio merece una web <em>que funcione.</em>
          </h1>
          <p className="lead">
            Creo páginas web modernas, rápidas y adaptadas a móviles para
            ayudarte a mostrar tu negocio y conseguir nuevos clientes.
          </p>

          <div className="actions">
            <a className="button primary" href="#contacto">
              Cuéntame tu idea <span>→</span>
            </a>
            <a className="button ghost" href="#portfolio">
              Ver demos
            </a>
          </div>

          <div className="trust">
            ✓ Diseño personalizado　✓ Responsive　✓ Sin permanencias
          </div>
        </div>

        <div className="hero-card hero-showcase">
          <a
            href="https://brasa-olivo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-showcase-link"
            aria-label="Visitar la demo de Brasa & Olivo"
          >
            <img
              src="/restaurante.jpeg"
              alt="Ejemplo de diseño web de Brasa & Olivo en ordenador y móvil"
              className="hero-showcase-image"
            />
          </a>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="section-head">
          <p className="eyebrow">LO QUE PUEDO HACER POR TI</p>
          <h2>Una web pensada para tu negocio.</h2>
          <p>
            No necesitas una web complicada. Necesitas una web clara,
            profesional y que facilite que tus clientes contacten contigo.
          </p>
        </div>

        <div className="service-grid">
          {services.map(([number, title, description]) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section portfolio">
        <div className="section-head">
          <p className="eyebrow">PORTFOLIO</p>
          <h2>Diseños que convierten ideas en webs.</h2>
          <p>
            Explora estos proyectos conceptuales y descubre diferentes estilos
            y posibilidades para tu negocio. No corresponden a clientes reales.
          </p>
        </div>

        <div className="portfolio-demos">
          {demos.map((demo) => (
            <article
              className={`portfolio-demo-card ${demo.className}`}
              key={demo.title}
            >
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-demo-link"
                aria-label={`Visitar la demo de ${demo.title}`}
              >
                <div className="portfolio-demo-image-wrap">
                  <img
                    className="portfolio-demo-image"
                    src={demo.image}
                    alt={`Vista previa de la web ${demo.title}`}
                    loading="lazy"
                  />
                  <span className="portfolio-demo-overlay">
                    Ver la web <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <div className="portfolio-demo-info">
                  <span className="portfolio-demo-type">{demo.type}</span>

                  <div className="portfolio-demo-title-row">
                    <h3>{demo.title}</h3>
                    <span
                      className="portfolio-demo-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <p>{demo.text}</p>
                  <span className="portfolio-demo-cta">
                    Explorar proyecto →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="precios" className="section pricing">
        <div className="section-head">
          <p className="eyebrow">PRECIOS ORIENTATIVOS</p>
          <h2>Una referencia clara para empezar.</h2>
          <p>
            El precio final depende de las funcionalidades, páginas y
            contenidos necesarios para cada proyecto.
          </p>
        </div>

        <div className="price-grid">
          {prices.map((price, index) => (
            <article
              className={`price-card ${index === 1 ? "featured" : ""}`}
              key={price.name}
            >
              {index === 1 && (
                <span className="popular">MÁS SOLICITADA</span>
              )}

              <h3>{price.name}</h3>
              <div className="price">
                desde <strong>{price.price}</strong>
              </div>
              <p>{price.text}</p>

              <ul>
                {price.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <a className="button ghost price-button" href="#contacto">
                Consultar
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="audience">
        <div>
          <p className="eyebrow">PARA QUIÉN</p>
          <h2>
            Si tienes un negocio,
            <br />
            podemos crear tu web.
          </h2>
        </div>

        <div className="pills">
          {types.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
      </section>

      <section id="proceso" className="section">
        <div className="section-head">
          <p className="eyebrow">EL PROCESO</p>
          <h2>De tu idea a Internet.</h2>
        </div>

        <div className="steps">
          {[
            [
              "01",
              "Me cuentas tu idea",
              "Rellenas el formulario y me explicas qué necesitas.",
            ],
            [
              "02",
              "Preparamos la propuesta",
              "Te explico qué haría, cuánto cuesta y los plazos.",
            ],
            [
              "03",
              "Creo tu web",
              "Diseño y desarrollo una web adaptada a tu negocio.",
            ],
            [
              "04",
              "La ponemos online",
              "Publicamos tu web y te dejo todo preparado.",
            ],
          ].map(([number, title, description]) => (
            <div key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="contact-copy">
          <p className="eyebrow">HABLEMOS</p>
          <h2>Cuéntame qué tienes en mente.</h2>
          <p>
            No necesitas tenerlo todo decidido. Explícame tu negocio y la idea
            que tienes para tu web. Te responderé con una propuesta.
          </p>

          <div className="contact-links">
            <a href="mailto:nexositeswebs@gmail.com">
              ✉ nexositeswebs@gmail.com
            </a>
            <a
              href="https://wa.me/34610995594"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp: 610 995 594
            </a>
          </div>
        </div>

        <div className="form-wrap">
          {sent ? (
            <div className="success">
              <div>✓</div>
              <h3>¡Solicitud enviada!</h3>
              <p>He recibido tu idea. Te contactaré lo antes posible.</p>
              <button
                className="button primary"
                onClick={() => setSent(false)}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <input
                name="website"
                className="honeypot"
                tabIndex={-1}
                autoComplete="off"
              />

              <label>
                Nombre
                <input required name="name" placeholder="Tu nombre" />
              </label>

              <div className="two">
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                  />
                </label>

                <label>
                  Teléfono
                  <input name="phone" placeholder="Opcional" />
                </label>
              </div>

              <label>
                Tipo de negocio
                <select name="business" defaultValue="">
                  <option value="">Selecciona una opción</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Presupuesto aproximado
                <select name="budget" defaultValue="Prefiero hablarlo">
                  <option>Prefiero hablarlo</option>
                  <option>Menos de 500 €</option>
                  <option>500 – 1.000 €</option>
                  <option>1.000 – 2.000 €</option>
                  <option>Más de 2.000 €</option>
                </select>
              </label>

              <label>
                Cuéntame tu idea
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="¿Qué tipo de web necesitas?"
                />
              </label>

              <label className="privacy-check">
                <input
                  required
                  type="checkbox"
                  name="privacy"
                  value="informado"
                />
                <span>
                  He leído la{" "}
                  <a
                    href="/privacidad.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    información sobre protección de datos
                  </a>
                  .
                </span>
              </label>

              <p className="form-note">
                Tus datos se utilizarán para responder a tu solicitud de
                presupuesto. No se usarán para enviarte publicidad sin una
                base legal adecuada.
              </p>

              <button
                disabled={loading}
                className="button primary submit"
                type="submit"
              >
                {loading ? "Enviando..." : "Solicitar presupuesto →"}
              </button>
            </form>
          )}
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/34610995594"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con NexoSites por WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M16 3.2A12.7 12.7 0 0 0 5.1 22.5L3.3 28.8l6.5-1.7A12.7 12.7 0 1 0 16 3.2Zm0 23.1c-2 0-3.9-.5-5.5-1.6l-.4-.2-3.8 1 1-3.7-.3-.4a10.5 10.5 0 1 1 9 4.9Zm5.8-7.9c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.6-1.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c0 0 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z"
            />
          </svg>
        </span>
        <span>WhatsApp</span>
      </a>

      <footer>
        <div className="brand">
          <a className="brand" href="#inicio">
            <img src="/nexosites-logo.png" alt="NexoSites" />
          </a>
        </div>

        <p>Webs modernas para negocios que quieren crecer.</p>

        <div className="footer-links">
          <a href="/aviso-legal.html">Aviso legal</a>
          <a href="/privacidad.html">Privacidad</a>
          <a href="/cookies.html">Cookies</a>
        </div>

        <small>© 2026 NexoSites</small>
      </footer>
    </main>
  );
}

