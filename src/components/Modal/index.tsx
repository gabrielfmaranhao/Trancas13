import { Box, Container } from "./styles"
import { Link } from "react-router-dom"




export const Modal = () => {
  return(
    <Container>
      <Box>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/trabalhos"}>Trabalhos</Link></li>
          <li><Link to={"/comentarios"}>Comentários</Link></li>
        </ul>
      </Box>
    </Container>
  )
}