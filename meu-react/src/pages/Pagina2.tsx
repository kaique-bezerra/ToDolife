import { Link } from "react-router-dom";
import './Pagina2.css';
import click from "../assets/keyboard-click-327728.mp3";

function Pagina2() {

   function tocarClick() {
    const audio = new Audio(click);
    audio.play();
  }

  return (
    <div className="pagina2">
      


      <h1 className="titulo2">ToDoLife </h1>
      <p className="texto">Transforme sua Rotina em Jogo </p>
      <p className="textoP">
        <b>
          Crie seu personagem, complete missões da vida real e evolua sua <br />
          propria história
        </b>  
      </p>

      <div className="buttons">
        <Link onClick={tocarClick} to="/pagina3" className="btn primary">Começar</Link>
        <a href="#" className="btn secondary"onClick={tocarClick}>Entrar</a>
      </div>

    </div>
  );
}

export default Pagina2;
