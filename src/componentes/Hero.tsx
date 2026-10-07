function Hero() {
  return (
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
  );
}

export default Hero;
