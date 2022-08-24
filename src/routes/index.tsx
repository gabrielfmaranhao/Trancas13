import { Routes, Route } from "react-router-dom"
import { Comentarios } from "../pages/Comentarios"
import { Home } from "../pages/Home"
import { Trabalhos } from "../pages/Trabalhos"
export const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="trabalhos" element={<Trabalhos/>}/>
      <Route path="comentarios" element={<Comentarios/>}/>
    </Routes>
  )
}