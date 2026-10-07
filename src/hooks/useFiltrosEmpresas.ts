import { useMemo, useState } from "react";
import type { EmpresaTuristica } from "../tipos/EmpresaTuristica";

export function useFiltrosEmpresas(empresas: EmpresaTuristica[]) {
  const [busqueda, setBusqueda] = useState<string>("");
  const [paqueteFiltro, setPaqueteFiltro] = useState<string>("");
  const [precioFiltro, setPrecioFiltro] = useState<string>("");

  const empresasFiltradas = useMemo(() => {
    return empresas.filter((empresa) => {
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
  }, [empresas, busqueda, paqueteFiltro, precioFiltro]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setPaqueteFiltro("");
    setPrecioFiltro("");
  };

  return {
    busqueda,
    setBusqueda,
    paqueteFiltro,
    setPaqueteFiltro,
    precioFiltro,
    setPrecioFiltro,
    empresasFiltradas,
    limpiarFiltros,
  };
}
