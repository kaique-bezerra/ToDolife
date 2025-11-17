import { Link } from "react-router-dom";
import './Pagina2.css';

function Pagina2() {
  return (
    <div className="pagina2">
      <h1 className="titulo2">ToDoLife </h1>
      <p className="texto">Transforme sua Rotina em Jogo </p>
      <p className="textoP"><b>Crie seu personagem,complete missões da vida real e evolua sua <br></br>  propria história</b></p>
  
      <div className="buttons">
        <Link to="/pagina3" className="btn primary">Começar</Link>

            <a href="#" className="btn secondary">Entrar</a>
          </div>

    </div>
  );
}

export default Pagina2;
