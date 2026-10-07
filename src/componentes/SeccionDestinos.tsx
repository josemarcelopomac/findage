import type { EmpresaTuristica } from "../tipos/EmpresaTuristica";
import BuscadorFiltros from "./BuscadorFiltros";
import ListaEmpresas from "./ListaEmpresas";

interface SeccionDestinosProps {
  empresas: EmpresaTuristica[];
  busqueda: string;
  setBusqueda: (valor: string) => void;
  paqueteFiltro: string;
  setPaqueteFiltro: (valor: string) => void;
  precioFiltro: string;
  setPrecioFiltro: (valor: string) => void;
  limpiarFiltros: () => void;
}

function SeccionDestinos({
  empresas,
  busqueda,
  setBusqueda,
  paqueteFiltro,
  setPaqueteFiltro,
  precioFiltro,
  setPrecioFiltro,
  limpiarFiltros,
}: SeccionDestinosProps) {
  return (
    <section className="companies-section" id="destinos">
      <div className="container">
        <BuscadorFiltros
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          paqueteFiltro={paqueteFiltro}
          setPaqueteFiltro={setPaqueteFiltro}
          precioFiltro={precioFiltro}
          setPrecioFiltro={setPrecioFiltro}
          limpiarFiltros={limpiarFiltros}
        />

        <div className="section-heading">
          <div>
            <span className="section-kicker">
              EXPERIENCIAS EN BOLIVIA
            </span>

            <h2>Empieza a explorar.</h2>
          </div>

          <p>
            Conoce algunas de las experiencias y empresas
            que iremos construyendo dentro de Findagen.
          </p>
        </div>

        <ListaEmpresas
          empresas={empresas}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />
      </div>
    </section>
  );
}

export default SeccionDestinos;
