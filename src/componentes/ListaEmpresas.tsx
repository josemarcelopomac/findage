import type { EmpresaTuristica } from "../tipos/EmpresaTuristica";
import TarjetaEmpresa from "./TarjetaEmpresa";

interface ListaEmpresasProps {
  empresas: EmpresaTuristica[];
  busqueda: string;
  setBusqueda: (valor: string) => void;
}

function ListaEmpresas({
  empresas,
  busqueda,
  setBusqueda,
}: ListaEmpresasProps) {
  return (
    <div className="companies-list" id="empresas">
      {empresas.length > 0 ? (
        empresas.map((empresa, index) => (
          <TarjetaEmpresa
            key={empresa.id}
            empresa={empresa}
            indice={index}
          />
        ))
      ) : (
        <div className="no-results">
          <span className="no-results-icon">🔎</span>

          <h3>No encontramos resultados</h3>

          <p>
            No encontramos experiencias relacionadas
            con "{busqueda}".
          </p>

          <button onClick={() => setBusqueda("")}>
            Mostrar todas
          </button>
        </div>
      )}
    </div>
  );
}

export default ListaEmpresas;
