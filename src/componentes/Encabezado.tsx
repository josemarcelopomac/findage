function Encabezado() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#inicio" className="brand">
          <div className="brand-mark">F</div>
          <span className="brand-name">findagen</span>
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
  );
}

export default Encabezado;
