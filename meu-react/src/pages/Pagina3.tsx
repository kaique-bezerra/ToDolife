import { Link } from "react-router-dom";
import './Pagina3.css';

function Pagina3() {
  return (
    <div className="pagina3" >
      <h1 className="titulo">Página 3</h1>
      <p className="titulo">Você está na terceira página.</p>

      <Link to="/">Ir para Página 2</Link>
    </div>
  );
}

export default Pagina3;
