import './App.css';
import Context from './Context'
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Registro from "./views/Registro"
import Login from "./views/Login"
import Perfil from "./views/Perfil"

function App() {
  const [usuario, setUsuario] = useState(null)
  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario, token, setToken }} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}

export default App;
