import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>   
    </div>
  )
}

export default App
