import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Pagina2 from "./pages/Pagina2.js";
import Pagina3 from "./pages/Pagina3.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
