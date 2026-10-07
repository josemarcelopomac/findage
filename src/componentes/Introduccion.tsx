function Introduccion() {
  return (
    <section className="intro-section">
      <div className="container intro-container">
        <div className="intro-heading">
          <span className="section-kicker">FINDAGEN</span>

          <h2>
            Descubre lugares que <span>valen la pena conocer.</span>
          </h2>

          <div className="intro-description">
            <p>
              Findagen nace como un espacio para conectar a las
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
  );
}

export default Introduccion;
