import type { EmpresaTuristica } from "../tipos/EmpresaTuristica";

interface TarjetaEmpresaProps {
  empresa: EmpresaTuristica;
  indice: number;
}

function TarjetaEmpresa({ empresa, indice }: TarjetaEmpresaProps) {
  return (
    <article
      className={`company-card ${
        indice % 2 !== 0 ? "company-card-reverse" : ""
      }`}
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

        <h3>{empresa.nombre}</h3>

        <p>{empresa.descripcion}</p>

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
  );
}

export default TarjetaEmpresa;
