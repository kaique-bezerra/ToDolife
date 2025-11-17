import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import minhaImagem from "../assets/ChatGPT Image 17 de nov. de 2025, 19_12_16.png";
import "./Pagina3.css";

function Pagina3() {

  const navigate = useNavigate();

  const textos = [
    {
      titulo: "Bem-vindo ao ToDolife",
      subtitulo: "Transforme sua rotina em uma aventura épica."
    },
    {
      titulo: "Seu dia, seu jogo!",
      subtitulo: "Cada tarefa concluída te dá mais XP."
    },
    {
      titulo: "Pronto para começar?",
      subtitulo: "Você está a um clique de evoluir sua rotina."
    }
  ];

  const [index, setIndex] = useState(0);

  function handleClick() {
    // Se for o último clique → redireciona
    if (index === textos.length - 1) {
      navigate("/"); // ← Mude aqui para a página que você quiser
      return;
    }

    // Senão → apenas troca os textos
    setIndex(index + 1);
  }

  return (
    <div className="pagina3">
      <div className="logo-container">
        <img src={minhaImagem} alt="Logo" className="logo" />
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
        <button className="btn primary" onClick={handleClick}>
          Continuar
        </button>
      </div>

      <Link to="/">Ir para Página 2</Link>
    </div>
  );
}

export default Pagina3;
