import "./App.css"
import "./index.css"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

import Home from "./Pages/Home/Home"
import Produto from "./Pages/Produtos/Produto"
import SobreNos from "./Pages/SobreNos/Sobrenos"
import Contato from "./Pages/Contato/Contato"

function App() {

  return (
    <>
      <Navbar />
      <main className="main-content mb-15">
        <div className="section-container">
          <Home />
        </div>
        
        <div className="section-divider"></div>
        
        <div className="section-container bg-[var(--base-color)]">
          <Produto />
        </div>
        
        <div className="section-divider"></div>
        
        <div className="section-container">
          <SobreNos />
        </div>
        
        <div className="section-divider"></div>
        
        <div className="section-container bg-[var(--base-color)]">
          <Contato />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App