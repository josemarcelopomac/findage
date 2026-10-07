interface BuscadorFiltrosProps {
  busqueda: string;
  setBusqueda: (valor: string) => void;
  paqueteFiltro: string;
  setPaqueteFiltro: (valor: string) => void;
  precioFiltro: string;
  setPrecioFiltro: (valor: string) => void;
  limpiarFiltros: () => void;
}

function BuscadorFiltros({
  busqueda,
  setBusqueda,
  paqueteFiltro,
  setPaqueteFiltro,
  precioFiltro,
  setPrecioFiltro,
  limpiarFiltros,
}: BuscadorFiltrosProps) {
  return (
    <div className="search-box">
      <div className="search-heading">
        

        <h2>
          ¿A dónde quieres <span>ir?</span>
        </h2>

        <p>
          Filtra destinos, paquetes y precios para encontrar
          la experiencia que más se adapte a ti.
        </p>
      </div>

      <div className="filters-container">
        <div className="filter-group filter-search">
          <label htmlFor="busqueda">Destino o empresa</label>

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

        <div className="filter-group">
          <label htmlFor="paquete">Tipo de paquete</label>

          <select
            id="paquete"
            value={paqueteFiltro}
            onChange={(e) => setPaqueteFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos los paquetes</option>
            <option value="Parejas">Parejas</option>
            <option value="Amigos">Amigos</option>
            <option value="Familiar">Familiar</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="precio">Precio máximo</label>

          <select
            id="precio"
            value={precioFiltro}
            onChange={(e) => setPrecioFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="">Cualquier precio</option>
            <option value="200">Hasta Bs 200</option>
            <option value="300">Hasta Bs 300</option>
            <option value="400">Hasta Bs 400</option>
            <option value="500">Hasta Bs 500</option>
          </select>
        </div>
      </div>

      <div className="active-filters">
        {(busqueda || paqueteFiltro || precioFiltro) && (
          <>
            <span className="active-filters-title">Filtros:</span>

            {busqueda && (
              <span className="filter-tag">
                {busqueda}
                <button onClick={() => setBusqueda("")}>×</button>
              </span>
            )}

            {paqueteFiltro && (
              <span className="filter-tag">
                {paqueteFiltro}
                <button onClick={() => setPaqueteFiltro("")}>×</button>
              </span>
            )}

            {precioFiltro && (
              <span className="filter-tag">
                Hasta Bs {precioFiltro}
                <button onClick={() => setPrecioFiltro("")}>×</button>
              </span>
            )}

            <button
              className="clear-all-filters"
              onClick={limpiarFiltros}
            >
              Limpiar filtros
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BuscadorFiltros;
