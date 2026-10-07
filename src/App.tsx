import "./index.css";
import Encabezado from "./componentes/Encabezado";
import Hero from "./componentes/Hero";
import Introduccion from "./componentes/Introduccion";
import SeccionDestinos from "./componentes/SeccionDestinos";
import QuienesSomos from "./componentes/QuienesSomos";
import PiePagina from "./componentes/PiePagina";
import { empresas } from "./datos/empresas";
import { useFiltrosEmpresas } from "./hooks/useFiltrosEmpresas";

function App() {
  const {
    busqueda,
    setBusqueda,
    paqueteFiltro,
    setPaqueteFiltro,
    precioFiltro,
    setPrecioFiltro,
    empresasFiltradas,
    limpiarFiltros,
  } = useFiltrosEmpresas(empresas);

  return (
    <div className="app">
      <Encabezado />

      <main>
        <Hero />
        <Introduccion />

        <SeccionDestinos
          empresas={empresasFiltradas}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          paqueteFiltro={paqueteFiltro}
          setPaqueteFiltro={setPaqueteFiltro}
          precioFiltro={precioFiltro}
          setPrecioFiltro={setPrecioFiltro}
          limpiarFiltros={limpiarFiltros}
        />

        <QuienesSomos />
      </main>

      <PiePagina />
    </div>
  );
}

export default App;
