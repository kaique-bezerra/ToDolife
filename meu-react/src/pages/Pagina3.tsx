import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/ChatGPT Image 17 de nov. de 2025, 19_12_16.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import "./Pagina3.css";
import { useClickSound } from '../hookes/useClickSound';


function Pagina3() {

  const tocarClique = useClickSound();
  

  const navigate = useNavigate();

  const textos = [
    {
      titulo: "Bem-vindo ao ToDolife",
      subtitulo: "Transforme sua rotina em uma aventura épica.",
      imagem: logo1
    },
    {
      titulo: "Seu dia, seu jogo!",
      subtitulo: "Cada tarefa concluída te dá mais XP.",
      imagem: logo2
    },
    {
      titulo: "Pronto para começar?",
      subtitulo: ["Algumas missões só podem ser concluídas no local certo."," \nVá até lá e desbloqueie bônus especiais!"],
      imagem: logo3
    }
  ];

  const [index, setIndex] = useState(0); 

  function handleClick() {
    tocarClique();
    if (index === textos.length - 1) { 
      navigate("/pagina4");
      return;
    }

    setIndex(index + 1);
  }

  return (
    <div className="pagina3">
      <div className="logo-container">
        <img src={textos[index].imagem} alt="Logo" className="logo" />
      </div>

      <p className="titulo">
        <b>{textos[index].titulo}</b>
      </p>

      <p className="titulo">
        <b>{textos[index].subtitulo}</b>
      </p>

      <div className="buttons">
        <button  className="btn primary" onClick={handleClick}>
          Continuar
        </button>
      </div>

      <Link className="link" to="/pagina4">Pular</Link>
    </div>
  );
}

export default Pagina3;
