import { Link } from "react-router-dom";
import './Pagina2.css';

function Pagina2() {
  return (
    <div className="pagina2">
      <h1 className="titulo2">ToDoLife </h1>
      <h1 className="texto">Transforme sua Rotina em Jogo </h1>
      <p className="texto">Você está na segunda página.</p>
      <p>teste</p>
  
      <body>
        
      </body>

      <Link to="/pagina3">Ir para Página 2</Link>
    </div>
  );
}

export default Pagina2;
