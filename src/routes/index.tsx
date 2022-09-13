import { Routes, Route } from "react-router-dom"
import { Contato } from "../pages/Contato"
import { Home } from "../pages/Home"
import { Trabalhos } from "../pages/Trabalhos"
export const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="trabalhos" element={<Trabalhos/>}/>
      <Route path="comentarios" element={<Contato/>}/>
    </Routes>
  )
}