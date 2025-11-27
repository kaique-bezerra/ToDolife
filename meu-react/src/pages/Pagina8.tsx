import "./Pagina8.css";

export default function Pagina8() {
  return (
    <div className="pagina8">
      <h1 className="titulo-missoes">Selecione sua missão</h1>

      <div className="container-missoes">

        <div className="missao-card">
          <h2>Ir para a Faculdade</h2>
          <p>Prepare-se, arrume sua mochila e parta para mais um dia de estudos.</p>
          <button>Escolher Missão</button>
        </div>

        <div className="missao-card">
          <h2>Palhetas e cordas</h2>
          <p> Treine por 1 hora violão</p>
          <button>Escolher Missão</button>
        </div>

        <div className="missao-card">
          <h2>Mestre dos livros</h2>
          <p>Estude por 1 hora</p>
          <button>Escolher Missão</button>
        </div>

        <div className="missao-card">
          <h2>Bons sonhos</h2>
          <p>Durma 8 horas.</p>
          <button>Escolher Missão</button>
        </div>

      <div className="missao-card">
          <h2></h2>
          <p>______________________</p>
          <button>Adicionar atividade</button>
        </div>

      </div>
    </div>
  );
}
