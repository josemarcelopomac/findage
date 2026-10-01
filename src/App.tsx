import { useState } from "react";
import "./index.css";

/* =========================================================
   TIPOS Y DATOS
========================================================= */

interface EmpresaTuristica {
  id: number;
  destino: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  etiqueta: string;
  Precio: number;
  Paquete: string;
}

/* =========================================================
   INFORMACIÓN DE EMPRESAS
========================================================= */

const empresas: EmpresaTuristica[] = [
  
  {
    id: 1,
    destino: "Uyuni",
    nombre: "Uyuni Expeditions",
    descripcion: "Descubre el Salar de Uyuni, sus paisajes únicos y experiencias diseñadas para conocer uno de los destinos más representativos de Bolivia.",
    imagen: "https://www.lorenzoexpeditions.com/wp-content/uploads/2025/01/Salar-de-Uyuni-11-1.jpg",
    etiqueta: "Naturaleza · Aventura",
    Precio: 200,
    Paquete: "Parejas",
  },
  {
    id: 2,
    destino: "Copacabana",
    nombre: "Titikaka Tours",
    descripcion: "Explora las orillas del Lago Titicaca, sus paisajes y la cultura de una de las regiones turísticas más conocidas del país.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy7vOWDrY_-eWaRo_6NwJDIjL2GOOfvUy_-ng4d8cgrKyacrH5bHYkEBj&s=10",
    etiqueta: "Lago · Cultura",
    Precio: 300,
    Paquete: "Amigos",
  },
  {
    id: 3,
    destino: "Rurrenabaque",
    nombre: "Amazonia Travel Bolivia",
    descripcion: "Conoce la biodiversidad y los paisajes de la Amazonía boliviana a través de experiencias pensadas para descubrir un entorno completamente diferente.",
    imagen: "https://boliviamia.net/Images/Attractionphotos/rurrenabaque-02.jpg",
    etiqueta: "Amazonía · Naturaleza",
    Precio: 400,
    Paquete: "Familiar",
  },
  {
    id: 4,
    destino: "Alaxpacha",
    nombre: "Andes Sky Agency",
    descripcion: "Una experiencia diferente para contemplar el cielo, desconectarte de la rutina y descubrir los paisajes nocturnos de Bolivia.",
    imagen: "https://s2.wklcdn.com/image_154/4641857/110097154/70963670Master.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 400,
    Paquete: "Parejas",
  },
  {
    id: 5,
    destino: "Muela del Diablo",
    nombre: "Pacha Trekking Turístico",
    descripcion: "Una experiencia diferente para compartir con amigos, desconectarte de la rutina y descubrir los paisajes nocturnos",
    imagen: "https://www.laregion.bo/wp-content/uploads/2015/10/MUELA-DEL-DIABLO-1024x680.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 600,
    Paquete: "Amigos",
  },
  {
    id: 6,
    destino: "Tiwanaku",
    nombre: "Rutas Milenarias Tours",
    descripcion: "Explora las ruinas de una de las civilizaciones más antiguas de América y descubre sus templos milenarios.",
    imagen: "https://boliviamia.net/Images/Tourpics/tiwanakum7-1.jpg",
    etiqueta: "Cultura · Historia",
    Precio: 150,
    Paquete: "Familiar"
  },
  {
    id: 7,
    destino: "Valle de la Luna",
    nombre: "La Paz City Tours",
    descripcion: "Recorre formaciones geológicas únicas que te harán sentir como si estuvieras caminando en otro planeta.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VCZdYhiz1z-I7vh0hxu06R8nDwcUFbNQBevifsk_rwXrdGr20yPwXhri&s=10",
    etiqueta: "Naturaleza · Caminata",
    Precio: 80,
    Paquete: "Individual"
  },
  {
    id: 8,
    destino: "Coroico",
    nombre: "Yungas Paraíso Travel",
    descripcion: "Disfruta del clima cálido, vegetación exuberante y cascadas naturales en la entrada a la Amazonía.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiZTG0BnxIZ8dauM6SrVSuZrUw4tcUjM25IrJl0rVUQ&s=10",
    etiqueta: "Naturaleza · Relajación",
    Precio: 350,
    Paquete: "Parejas"
  },
  {
    id: 9,
    destino: "Cañón de Palca",
    nombre: "Illimani Adventures",
    descripcion: "Un recorrido impresionante entre enormes obeliscos de tierra con una vista majestuosa del nevado Illimani.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNcCHqJrVTlztaE9S5jnLKC446zUiAlepQuyEVG_CAQ&s=10",
    etiqueta: "Aventura · Trekking",
    Precio: 120,
    Paquete: "Amigos"
  },
  {
    id: 10,
    destino: "Huayna Potosí",
    nombre: "Cumbre Extrema Operadora",
    descripcion: "Desafía tus límites escalando un nevado de 6.088 metros. Una experiencia extrema con vistas inolvidables.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkT68_NHwVYqzqgNuiUXGeWpr2FJ4IjYwJ-PlGW6VrQ&s=10",
    etiqueta: "Aventura · Extremo",
    Precio: 850,
    Paquete: "Experto"
  },
  
  {
    id: 11,
    destino: "Uyuni",
    nombre: "Salar Explorer Agency",
    descripcion: "Descubre el Salar de Uyuni, sus paisajes únicos y experiencias diseñadas para conocer uno de los destinos más representativos de Bolivia.",
    imagen: "https://www.lorenzoexpeditions.com/wp-content/uploads/2025/01/Salar-de-Uyuni-11-1.jpg",
    etiqueta: "Naturaleza · Aventura",
    Precio: 250,
    Paquete: "Familiar"
  },
  {
    id: 12,
    destino: "Copacabana",
    nombre: "Místicos del Lago Tours",
    descripcion: "Explora las orillas del Lago Titicaca, sus paisajes y la cultura de una de las regiones turísticas más conocidas del país.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy7vOWDrY_-eWaRo_6NwJDIjL2GOOfvUy_-ng4d8cgrKyacrH5bHYkEBj&s=10",
    etiqueta: "Lago · Cultura",
    Precio: 180,
    Paquete: "Parejas"
  },
  {
    id: 13,
    destino: "Rurrenabaque",
    nombre: "Verde Amazonía Travel",
    descripcion: "Conoce la biodiversidad y los paisajes de la Amazonía boliviana a través de experiencias pensadas para descubrir un entorno completamente diferente.",
    imagen: "https://boliviamia.net/Images/Attractionphotos/rurrenabaque-02.jpg",
    etiqueta: "Amazonía · Naturaleza",
    Precio: 450,
    Paquete: "Amigos"
  },
  {
    id: 14,
    destino: "Alaxpacha",
    nombre: "Cielo Andino Expeditions",
    descripcion: "Una experiencia diferente para contemplar el cielo, desconectarte de la rutina y descubrir los paisajes nocturnos de Bolivia.",
    imagen: "https://s2.wklcdn.com/image_154/4641857/110097154/70963670Master.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 350,
    Paquete: "Familiar"
  },
  {
    id: 15,
    destino: "Muela del Diablo",
    nombre: "Ruta del Diablo Trekking",
    descripcion: "Una experiencia diferente para compartir con amigos, desconectarte de la rutina y descubrir los paisajes nocturnos",
    imagen: "https://www.laregion.bo/wp-content/uploads/2015/10/MUELA-DEL-DIABLO-1024x680.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 450,
    Paquete: "Parejas"
  },
  {
    id: 16,
    destino: "Uyuni",
    nombre: "Bolivia Salar Tours",
    descripcion: "Descubre el Salar de Uyuni, sus paisajes únicos y experiencias diseñadas para conocer uno de los destinos más representativos de Bolivia.",
    imagen: "https://www.lorenzoexpeditions.com/wp-content/uploads/2025/01/Salar-de-Uyuni-11-1.jpg",
    etiqueta: "Naturaleza · Aventura",
    Precio: 280,
    Paquete: "Amigos"
  },
  {
    id: 17,
    destino: "Muela del Diablo",
    nombre: "Nocturno Andino Expeditions",
    descripcion: "Una experiencia diferente para compartir con amigos, desconectarte de la rutina y descubrir los paisajes nocturnos",
    imagen: "https://www.laregion.bo/wp-content/uploads/2015/10/MUELA-DEL-DIABLO-1024x680.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 500,
    Paquete: "Familiar"
  },
  {
    id: 18,
    destino: "Muela del Diablo",
    nombre: "Cumbres Místicas La Paz",
    descripcion: "Una experiencia diferente para compartir con amigos, desconectarte de la rutina y descubrir los paisajes nocturnos",
    imagen: "https://www.laregion.bo/wp-content/uploads/2015/10/MUELA-DEL-DIABLO-1024x680.jpg",
    etiqueta: "Naturaleza · Experiencia",
    Precio: 550,
    Paquete: "Individual"
  }


];

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

function App() {
  const [busqueda, setBusqueda] = useState<string>("");
  const [paqueteFiltro, setPaqueteFiltro] = useState<string>("");
  const [precioFiltro, setPrecioFiltro] = useState<string>("");

 const empresasFiltradas = empresas.filter((empresa) => {
  const termino = busqueda.toLowerCase().trim();

  const coincideBusqueda =
    !termino ||
    empresa.destino.toLowerCase().includes(termino) ||
    empresa.nombre.toLowerCase().includes(termino);

  const coincidePaquete =
    !paqueteFiltro ||
    empresa.Paquete === paqueteFiltro;

  const coincidePrecio =
    !precioFiltro ||
    (precioFiltro === "200" && empresa.Precio <= 200) ||
    (precioFiltro === "300" && empresa.Precio <= 300) ||
    (precioFiltro === "400" && empresa.Precio <= 400) ||
    (precioFiltro === "500" && empresa.Precio <= 500);

    return coincideBusqueda && coincidePaquete && coincidePrecio;
  });

  return (
    <div className="app">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <div className="container nav">

          <a href="#inicio" className="brand">
            <div className="brand-mark">F</div>
            <span className="brand-name">findage</span>
          </a>

          <nav className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#destinos">Destinos</a>
            <a href="#empresas">Empresas</a>
            <a href="#quienes-somos">Quiénes somos</a>
          </nav>

          <a href="#destinos" className="nav-button">
            Explorar
          </a>

        </div>
      </header>

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero" id="inicio">

          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>

          <div className="container hero-container">

            <div className="hero-content">

              <span className="hero-kicker">
                <span className="hero-kicker-dot"></span>
                DESCUBRE BOLIVIA
              </span>

              <h1 className="hero-title">
                Tu próximo viaje <span>empieza aquí.</span>
              </h1>

              <p className="hero-description">
                Encuentra destinos, experiencias y empresas turísticas
                para descubrir Bolivia de una manera diferente.
              </p>

              <a href="#destinos" className="hero-button">
                Explorar destinos
                <span>→</span>
              </a>

            </div>

          </div>
        </section>

        {/* =====================================================
            INTRO / PROPUESTA
        ===================================================== */}

        <section className="intro-section">

          <div className="container intro-container">

            <div className="intro-heading">

              <span className="section-kicker">
                FINDAGE
              </span>

              <h2>
                Descubre lugares que{" "}
                <span>valen la pena conocer.</span>
              </h2>

              <div className="intro-description">

                <p>
                  Findage nace como un espacio para conectar a las
                  personas con destinos y experiencias turísticas
                  dentro de Bolivia.
                </p>

                <p>
                  La idea es que descubrir un lugar no sea solamente
                  buscar un destino, sino encontrar una experiencia
                  que realmente quieras vivir.
                </p>

              </div>

            </div>

            <div className="imagen_propuesta">

              <div className="imagenes">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtLRizokiMH1yljiHFJV7crRr6u3ji-MCnYh1H5QanXF_OqVNBYvPM60&s=10"
                  alt="Paisaje turístico de Bolivia"
                />

                <div className="image-badge">
                  <strong>Bolivia</strong>
                  <span>Un país por descubrir</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EMPRESAS / DESTINOS
        ===================================================== */}

        <section className="companies-section" id="destinos">

          <div className="container">

            {/* BUSCADOR */}

            <div className="search-box">

              <div className="search-heading">
                <span className="section-kicker">
                  ENCUENTRA TU EXPERIENCIA
                </span>

                <h2>
                  ¿A dónde quieres <span>ir?</span>
                </h2>

                <p>
                  Filtra destinos, paquetes y precios para encontrar
                  la experiencia que más se adapte a ti.
                </p>
              </div>

              <div className="filters-container">

                {/* DESTINO / NOMBRE */}
                <div className="filter-group filter-search">

                  <label htmlFor="busqueda">
                    Destino o empresa
                  </label>

                  <div className="search-input-wrapper">
                    <span className="search-icon">⌕</span>

                    <input
                      id="busqueda"
                      type="text"
                      placeholder="Ej. Copacabana..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="search-input"
                    />

                    {busqueda && (
                      <button
                        className="search-clear"
                        onClick={() => setBusqueda("")}
                      >
                        ×
                      </button>
                    )}
                  </div>

                </div>


                {/* PAQUETE */}
                <div className="filter-group">

                  <label htmlFor="paquete">
                    Tipo de paquete
                  </label>

                  <select
                    id="paquete"
                    value={paqueteFiltro}
                    onChange={(e) => setPaqueteFiltro(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">
                      Todos los paquetes
                    </option>

                    <option value="Parejas">
                      Parejas
                    </option>

                    <option value="Amigos">
                      Amigos
                    </option>

                    <option value="Familiar">
                      Familiar
                    </option>
                  </select>

                </div>


                {/* PRECIO */}
                <div className="filter-group">

                  <label htmlFor="precio">
                    Precio máximo
                  </label>

                  <select
                    id="precio"
                    value={precioFiltro}
                    onChange={(e) => setPrecioFiltro(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">
                      Cualquier precio
                    </option>

                    <option value="200">
                      Hasta Bs 200
                    </option>

                    <option value="300">
                      Hasta Bs 300
                    </option>

                    <option value="400">
                      Hasta Bs 400
                    </option>

                    <option value="500">
                      Hasta Bs 500
                    </option>
                  </select>

                </div>

              </div>


              {/* FILTROS ACTIVOS */}

              <div className="active-filters">

                {(busqueda || paqueteFiltro || precioFiltro) && (
                  <>
                    <span className="active-filters-title">
                      Filtros:
                    </span>

                    {busqueda && (
                      <span className="filter-tag">
                        {busqueda}
                        <button onClick={() => setBusqueda("")}>
                          ×
                        </button>
                      </span>
                    )}

                    {paqueteFiltro && (
                      <span className="filter-tag">
                        {paqueteFiltro}
                        <button onClick={() => setPaqueteFiltro("")}>
                          ×
                        </button>
                      </span>
                    )}

                    {precioFiltro && (
                      <span className="filter-tag">
                        Hasta Bs {precioFiltro}
                        <button onClick={() => setPrecioFiltro("")}>
                          ×
                        </button>
                      </span>
                    )}

                    <button
                      className="clear-all-filters"
                      onClick={() => {
                        setBusqueda("");
                        setPaqueteFiltro("");
                        setPrecioFiltro("");
                      }}
                    >
                      Limpiar filtros
                    </button>
                  </>
                )}

              </div>

            </div>

            {/* ENCABEZADO */}

            <div className="section-heading">

              <div>

                <span className="section-kicker">
                  EXPERIENCIAS EN BOLIVIA
                </span>

                <h2>
                  Empieza a explorar.
                </h2>

              </div>

              <p>
                Conoce algunas de las experiencias y empresas
                que iremos construyendo dentro de Findage.
              </p>

            </div>

            {/* RESULTADOS */}

            <div className="companies-list" id="empresas">

              {empresasFiltradas.length > 0 ? (

                empresasFiltradas.map((empresa, index) => (

                  <article
                    className={`company-card ${
                      index % 2 !== 0
                        ? "company-card-reverse"
                        : ""
                    }`}
                    key={empresa.id}
                  >

                    <div className="company-image">

                      <img
                        src={empresa.imagen}
                        alt={`Destino ${empresa.destino}`}
                      />

                      <span className="company-number">
                        0{empresa.id}
                      </span>

                    </div>

                    <div className="company-content">

                      <span className="company-destination">
                        {empresa.destino}
                      </span>

                      <span className="company-category">
                        {empresa.etiqueta}
                      </span>

                      <h3>
                        {empresa.nombre}
                      </h3>

                      <p>
                        {empresa.descripcion}
                      </p>

                      <div className="company-details">

                        <span>
                          📦 <strong>Paquete</strong>
                          <small>{empresa.Paquete}</small>
                        </span>

                        <span>
                          💵 <strong>Precio</strong>
                          <small>${empresa.Precio}</small>
                        </span>

                      </div>

                      <button className="company-button">
                        Explorar experiencia
                        <span>→</span>
                      </button>

                    </div>

                  </article>

                ))

              ) : (

                <div className="no-results">

                  <span className="no-results-icon">
                    🔎
                  </span>

                  <h3>
                    No encontramos resultados
                  </h3>

                  <p>
                    No encontramos experiencias relacionadas
                    con "{busqueda}".
                  </p>

                  <button
                    onClick={() => setBusqueda("")}
                  >
                    Mostrar todas
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            QUIÉNES SOMOS
        ===================================================== */}

        <section
          className="final-section"
          id="quienes-somos"
        >

          <div className="container final-container">

            <div className="final-decoration"></div>

            <div className="final-content">

              <span className="section-kicker final-kicker">
                QUIÉNES SOMOS
              </span>

              <h2>
                No queremos que solo{" "}
                <span>visites Bolivia.</span>
              </h2>

              <p>
                Queremos ayudarte a descubrirla.
              </p>

              <div className="final-text">

                <p>
                  Findage es un espacio creado para conectar
                  viajeros con lugares, empresas y experiencias
                  turísticas que hacen especial a Bolivia.
                </p>

                <p>
                  Creemos que cada destino tiene una historia,
                  una cultura y una experiencia diferente esperando
                  ser descubierta.
                </p>

              </div>

              <a
                href="#destinos"
                className="button-final"
              >
                Descubre Findage
                <span>→</span>
              </a>

            </div>

            <div className="final-stats">

              <div>
                <strong>01</strong>
                <span>Descubre</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Explora</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Vive</span>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-brand">

            <a
              href="#inicio"
              className="footer-brand-link"
            >

              <span className="brand-mark">
                F
              </span>

              <span className="brand-name">
                findage
              </span>

            </a>

            <p>
              Descubre Bolivia.
              <br />
              Vive nuevas experiencias.
            </p>

          </div>

          <div className="footer-links">

            <strong>Explora</strong>

            <a href="#inicio">
              Inicio
            </a>

            <a href="#destinos">
              Destinos
            </a>

            <a href="#empresas">
              Empresas
            </a>

          </div>

          <div className="footer-links">

            <strong>Findage</strong>

            <a href="#quienes-somos">
              Quiénes somos
            </a>

            <a href="#destinos">
              Experiencias
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container">

            <span>
              © 2026 Findage
            </span>

            <span>
              Descubre. Explora. Vive.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;