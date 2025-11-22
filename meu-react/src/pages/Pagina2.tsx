import { Link } from "react-router-dom";
import './Pagina2.css';
import { useClickSound } from '../hookes/useClickSound';
import musica from "../assets/Sunshine Hustle.mp3";  // ⬅️ Import da música


function Pagina2() {

  const tocarClique = useClickSound();
 

  return (
    
    <div className="pagina2">
       {/* 🎵 Música de fundo (invisível) */}
      <audio src={musica} autoPlay loop />
      


      <h1 className="titulo2">ToDoLife </h1>
      <p className="texto">Transforme sua Rotina em Jogo </p>
      <p className="textoP">
        <b>
          Crie seu personagem, complete missões da vida real e evolua sua <br />
          propria história
        </b>  
      </p>

      <div className="buttons">
        <Link onClick={tocarClique} to="/pagina3" className="btn primary">Começar</Link>
        <a href="#" className="btn secondary"onClick={tocarClique}>Entrar</a>
      </div>

    </div>
  );
}

export default Pagina2;
