function QuienesSomos() {
  return (
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
            No queremos que solo <span>visites Bolivia.</span>
          </h2>

          <p>Queremos ayudarte a descubrirla.</p>

          <div className="final-text">
            <p>
              Findagen es un espacio creado para conectar
              viajeros con lugares, empresas y experiencias
              turísticas que hacen especial a Bolivia.
            </p>

            <p>
              Creemos que cada destino tiene una historia,
              una cultura y una experiencia diferente esperando
              ser descubierta.
            </p>
          </div>

          <a href="#destinos" className="button-final">
            Descubre Findagen
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
  );
}

export default QuienesSomos;
