import './App.css'
import { BrowserRouter, Routes , Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import musica from "./assets/musica.mp3.mp3";  // ⬅️ Import da música
import Pagina2 from "./pages/Pagina2.js";
import Pagina3 from "./pages/Pagina3.js";
import Pagina4 from "./pages/Pagina4.js";
import Pagina5 from "./pages/Pagina5.js";
import Pagina6 from "./pages/Pagina6.js";
import Pagina7 from "./pages/Pagina7.js";
import Pagina8 from "./pages/Pagina8.js";
import PaginasSwipe from "./pages/PaginasSwipe";



// ------------------------
// Componente controlador de música
// ------------------------
function MusicaGlobal() {
  const audioRef = useRef<HTMLAudioElement>(null);  // ⬅️ CORREÇÃO AQUI
  const location = useLocation();

  // Desmutar após primeiro clique (navegadores exigem)
  useEffect(() => {
    const unlock = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
      }
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("click", unlock);
  }, []);

  // Tocar música somente nas páginas 4 e 5
  useEffect(() => {
    const rota = location.pathname;

    if (rota === "/pagina4" || rota === "/pagina5") {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [location.pathname]);

  return (
    <audio ref={audioRef} src={musica} autoPlay muted loop />
  );
}


// ------------------------
// Seu App original + música
// ------------------------
function App() {

  return (
    <>
      <BrowserRouter>

        {/* Música global controlada por rota */}
        <MusicaGlobal />

        <Routes>
          <Route path="/" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
          <Route path="/pagina6" element={<Pagina6 />} />
          <Route path="/pagina7" element={<Pagina7 />} />
          <Route path="/pagina8" element={<Pagina8 />} />
          <Route path="/paginas" element={<PaginasSwipe />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App;
