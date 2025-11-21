import { Link } from "react-router-dom";
import "./Pagina4.css";
import { useState } from "react";

//import { useClickSound } from '../hookes/useClickSound';
import imagem from "../assets/personagem/homem/clara/cabeloH1B.jpg";
import imagem1 from "../assets/personagem/homem/clara/cabeloH2B.jpg";
import imagem2 from "../assets/personagem/homem/escura/cabeloH2N.jpg";
import imagem3 from "../assets/personagem/homem/clara/cabeloH3B.jpg";
import imagem4 from "../assets/personagem/homem/escura/cabeloH3N.jpg";
import imagem5 from "../assets/personagem/homem/clara/cabeloH4B.jpg";
import imagem6 from "../assets/personagem/homem/escura/cabeloH4N.jpg";
import imagem7 from "../assets/personagem/homem/clara/cabeloH1B.jpg";
import imagem8 from "../assets/personagem/homem/escura/cabeloH1N.jpg";

import feminino from "../assets/feminino.png";
import masculino from "../assets/masculino.png";

function Pagina5() {

  // 👉 Estado da imagem principal
  const [imagemPrincipal, setImagemPrincipal] = useState(imagem);

  //const tocarClique = useClickSound();

  return (
    <div className="pagina4">

      <p className="titulo">Crie Seu Avatar</p>
      <p className="texto">Este personagem representa você e sua jornada de evolução</p>

      <div className="imagem-principal">
        {/* 👉 Agora mostra a imagem principal do estado */}
        <img src={imagemPrincipal} alt="Avatar" className="avatar-imagem" />
      </div>

      <div className="opcoes-avatar">

        <div className="opcao">
          <p className="legenda-opcao">Cabelo longo</p>
          <img
            src={imagem1}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem1)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao">Cabelo curto</p>
          <img
            src={imagem3}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem3)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao">Cabelo franja</p>
          <img
            src={imagem5}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem5)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao">Cabelo ondulado</p>
          <img
            src={imagem7}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem7)}
          />
        </div>

      </div>

      <div className="inputs-user">
        <div className="opcoes-avatar">

          <div className="opcao2">
            <p className="legenda-opcao">Cabelo longo</p>
            <img
              src={imagem2}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem2)}
            />
          </div>

          <div className="opcao2">
            <p className="legenda-opcao">Cabelo curto</p>
            <img
              src={imagem4}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem4)}
            />
          </div>

          <div className="opcao2">
            <p className="legenda-opcao">Cabelo franja</p>
            <img
              src={imagem6}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem6)}
            />
          </div>

          <div className="opcao">
            <p className="legenda-opcao">Cabelo ondulado</p>
            <img
              src={imagem8}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem8)}
            />
          </div>

        </div>

        <div className="imputs">
          <Link to="/pagina4">
            <img src={feminino} alt="Feminino" className="genero-icon" />
          </Link>
          <img src={masculino} alt="Masculino" className="genero-icon" />
        </div>
      </div>

    </div>
  );
}

export default Pagina5;
