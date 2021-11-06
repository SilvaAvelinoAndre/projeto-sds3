import NavBar from "componentes/BarraInicial";
import BarChart from "componentes/GraficoBarras";
import GraficoRosca from "componentes/GraficoRosca";
import Footer from "componentes/Rodape";
import TabelaDados from "componentes/TabelaDados";

const Dashboard = () => { /* função anonima passada para a variavel export default Dashboard;
 */
    return (
        <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
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
      <Footer />
    </>
    );
}

export default Dashboard;