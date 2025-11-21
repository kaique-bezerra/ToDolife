import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import musica from "./assets/Sunshine Hustle.mp3";  // ⬅️ Import da música

import Pagina2 from "./pages/Pagina2.js";
import Pagina3 from "./pages/Pagina3.js";
import Pagina4 from "./pages/Pagina4.js";
import Pagina5 from "./pages/Pagina5.js";



function App() {
  
  return (
    <>
    {/* 🎵 Música de fundo (invisível) */}
      <audio src={musica} autoPlay loop />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/pagina4" element={<Pagina4 />} />
        <Route path="/pagina5" element={<Pagina5 />} />
      </Routes>
    </BrowserRouter>

  </>
  )
}


export default App
