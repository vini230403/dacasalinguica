import "./App.css"
import "./index.css"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

import Home from "./Pages/Home/Home"
import Produto from "./Pages/Produtos/Produto"
import SobreNos from "./Pages/SobreNos/SobreNos"
import Contato from "./Pages/Contato/Contato"

function App() {

  return (
    <>
      <Navbar />
      <main className="mt-35 md:mt-45 mb-15 mr-6 ml-6 lg:mr-60 lg:ml-60 bg-[var(--base-color)] rounded-lg shadow-lg">
        <Home />
        <div className="divider-1"></div>  
        <Produto />
        <div className="divider-2"></div>
        <SobreNos />
        <div className="divider-1"></div>
        <Contato />  
      </main>
      <Footer />
    </>
  )
}

export default App
