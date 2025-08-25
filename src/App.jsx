import "./App.css"
import "./index.css"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

import Home from "./Pages/Home/Home"
import Produto from "./Pages/Produtos/Produto"

function App() {

  return (
    <>
      <Navbar />
      <main className="mt-15 mb-15 mr-6 ml-6 md:mr-60 md:ml-60 bg-[var(--base-color)] rounded-lg shadow-lg">
        <Home />
        <Produto />
      </main>
      <Footer />
    </>
  )
}

export default App
