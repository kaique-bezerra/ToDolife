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

  const [index, setIndex] = useState(0); // Índice do texto atual //setIndex → função para atualizar o índice 
  // // useState(0) → valor inicial do índice
  // Função para lidar com o clique no botão

  function handleClick() {
    // Se for o último clique → redireciona
    tocarClique();
    if (index === textos.length - 1) { // textos.length - 1 → índice do último texto
      navigate("/"); // ← Mude aqui para a página que você quiser
      return;
    }

    // Senão → apenas troca os textos
    setIndex(index + 1); // Atualiza o índice para o próximo texto
  }

  return (
    <div className="pagina3">
      <div className="logo-container">
        {/*  imagem  */}
        <img src={textos[index].imagem} alt="Logo" className="logo" />
      </div>

      {/* PRIMEIRO TEXTO */}
      <p className="titulo">
        <b>{textos[index].titulo}</b>
      </p>

      {/* SEGUNDO TEXTO */}
      <p className="titulo">
        <b>{textos[index].subtitulo}</b>
      </p>

      <div className="buttons">
        <button  className="btn primary" onClick={handleClick}>
          Continuar
        </button>
      </div>

      <Link className="link" to="/">Pular</Link>
    </div>
  );
}

export default Pagina3;
