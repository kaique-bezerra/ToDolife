import { useState } from "react";
import avatar from "../assets/personagem/mulher/clara/cabeloM1B.jpg";
import barra from "../assets/barra.png";
import "./Pagina7.css";

export default function Pagina7() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="pagina7">
      <div className="folder">

        <div className="folder-header" onClick={() => setAberto(!aberto)}>
          <div className="avatar">
            <img src={avatar} alt="Avatar" className="avatar-imagem" />
                        <img src={barra} alt="Avatar" className="barra" />
          </div>
          <p className="status">Status</p>
          <span className={`seta ${aberto ? "girar" : ""}`}>▼</span>
        </div>

        <div className={`folder-content ${aberto ? "mostrar" : ""}`}>
          <table>
            <tr>
              <th>FORÇA</th>
              <th>20</th>
              <th>INTELIGÊNCIA</th>
              <td> 10</td>
              <th>VITALIDADE</th>
              <td>10</td >
               
            </tr>
           <tr>
            <th>AGILIDADE</th>
              <td>10</td >

               <th>DESTREZA</th>
              <td>10</td >

              <th>SORTE</th>
              <td>10</td >

                 

             

             

              

           </tr>
          </table>
          
        </div>

      </div>
    </div>
  );
}
