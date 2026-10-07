function PiePagina() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a
            href="#inicio"
            className="footer-brand-link"
          >
            <span className="brand-mark">F</span>
            <span className="brand-name">findagen</span>
          </a>

          <p>
            Descubre Bolivia.
            <br />
            Vive nuevas experiencias.
          </p>
        </div>

        <div className="footer-links">
          <strong>Explora</strong>

          <a href="#inicio">Inicio</a>
          <a href="#destinos">Destinos</a>
          <a href="#empresas">Empresas</a>
        </div>

        <div className="footer-links">
          <strong>Findagen</strong>

          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#destinos">Experiencias</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Findagen</span>
          <span>Descubre. Explora. Vive.</span>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
