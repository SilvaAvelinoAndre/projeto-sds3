import GraficoBarras from "componentes/GraficoBarras";
import TabelaDados from "componentes/TabelaDados";
import BarraInical from "componentes/BarraInicial";
import GraficoRosca from "componentes/GraficoRosca";
import Rodape from "componentes/Rodape";


function App() {
  return (
    <>
      <BarraInical />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <GraficoBarras />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas Vendas</h5>
            <GraficoRosca />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <TabelaDados />
      </div>
      <Rodape />
    </>
        );
}

        export default App;
