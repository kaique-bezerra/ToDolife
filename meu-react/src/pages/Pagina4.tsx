import { Link } from "react-router-dom";
import "./Pagina4.css";
import { useState } from "react";

//import { useClickSound } from '../hookes/useClickSound';

import imagem from "../assets/personagem/mulher/clara/cabeloM1B.jpg";
import imagem1 from "../assets/personagem/mulher/clara/cabeloM2B.jpg";
import imagem2 from "../assets/personagem/mulher/escura/cabeloM2N.jpg";
import imagem3 from "../assets/personagem/mulher/clara/cabeloM3B.jpg";
import imagem4 from "../assets/personagem/mulher/escura/cabeloM3N.jpg";
import imagem5 from "../assets/personagem/mulher/clara/cabeloM4B.jpg";
import imagem6 from "../assets/personagem/mulher/escura/cabeloM4N.jpg";
import imagem7 from "../assets/personagem/mulher/clara/cabeloM1B.jpg";
import imagem8 from "../assets/personagem/mulher/escura/cabeloM1N.jpg";

import feminino from "../assets/feminino.jpg"
import masculino from "../assets/masculino.jpg";

function Pagina4() {


  // 👉 Estado da imagem principal
  const [imagemPrincipal, setImagemPrincipal] = useState(imagem);

  //const tocarClique = useClickSound();

  return (
    <div className="pagina4">

      <p className="titulo">Crie Seu Avatar</p>
      <p className="texto">Este personagem representa você e sua jornada de evolução</p>

      {/* IMAGEM PRINCIPAL */}
      <div className="imagem-principal">
        <img src={imagemPrincipal} alt="Avatar" className="avatar-imagem" />
      </div>

        <div className="imputs">
          <img src={feminino} alt="Feminino" className="genero-icon" />

          <Link to="/pagina5">
            <img src={masculino} alt="Masculino" className="genero-icon" />
          </Link>
        </div>
                  <p className="texto">Escolha o que mais combina com você</p>

      <div className="opcoes-avatar">

        <div className="opcao">
          <p className="legenda-opcao"> Longo</p>
          <img
            src={imagem1}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem1)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao"> Curto</p>
          <img
            src={imagem3}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem3)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao"> Franja</p>
          <img
            src={imagem5}
            alt="Opção1"
            className="avatar-opcao"
            onClick={() => setImagemPrincipal(imagem5)}
          />
        </div>

        <div className="opcao">
          <p className="legenda-opcao"> Ondulado</p>
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
            <p className="legenda-opcao"> Longo</p>
            <img
              src={imagem2}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem2)}
            />
          </div>

          <div className="opcao2">
            <p className="legenda-opcao"> Curto</p>
            <img
              src={imagem4}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem4)}
            />
          </div>

          <div className="opcao2">
            <p className="legenda-opcao"> Franja</p>
            <img
              src={imagem6}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem6)}
            />
          </div>

          <div className="opcao">
            <p className="legenda-opcao"> Ondulado</p>
            <img
              src={imagem8}
              alt="Opção1"
              className="avatar-opcao"
              onClick={() => setImagemPrincipal(imagem8)}
            />
          </div>

        </div>


      </div>
      <div className="botao-avancar-div">
      <Link to="/paginas">
        <button className="botao-avancar">Avançar</button>
      </Link>
      </div>
    </div>
  );
}

export default Pagina4;

