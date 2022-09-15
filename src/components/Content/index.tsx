import { ReactNode } from "react"
import { Container } from "./styles"


interface IContent {
  children: ReactNode
}

export const Content = ({children}:IContent )=> {
  return( 
    <Container>
      <img className="logo" src="Logo-Trancas13.png" alt="Logo-Trancas13"/>
      <p className="stylesBraids">Box braid | Nagô | Twist</p>
      {children}
    </Container>
  )
}