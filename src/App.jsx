import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';
import SobreNos from './pages/sobreNos/SobreNos';
import Contato from './pages/contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='background'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/produtos" element={<Produtos />}/>
            <Route path="/sobrenos" element={<SobreNos />}/>
            <Route path="/contato" element={<Contato />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>   
    </div>
  )
}

export default App
