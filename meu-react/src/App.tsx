import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import musica from "./assets/musica.mp3.mp3";  // ⬅️ Import da música

import Pagina2 from "./pages/Pagina2.js";
import Pagina3 from "./pages/Pagina3.js";
function App() {
  
  return (
    
    <BrowserRouter>
    {/* 🎵 Música de fundo (invisível) */}
      <audio src={musica} autoPlay loop />
      <Routes>
        <Route path="/" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
      </Routes>
    </BrowserRouter>

    
  )
}


export default App
