import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import LadoEsquerdo from "./componentes/Lado_Esquerdo/LadoEsquerdo";
import Principal from "./componentes/Principal/Princopal";
import Rodape from "./componentes/Rodape/Rodape";

function App() {

    console.log("app render..")


  return (
    <>
    <Cabecalho></Cabecalho>
    <LadoEsquerdo></LadoEsquerdo>
    <Principal></Principal>
    <Rodape></Rodape>
    </>
  );
}

export default App
