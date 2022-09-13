import { Box, Container } from "./styles"
import { Link } from "react-router-dom"
import {AiOutlineHome, AiOutlineContacts} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"




export const Modal = () => {
  return(
    <Container>
      <Box>
        <ul>
          <li>
            <div>
              <AiOutlineHome size={22} color={"black"}/>
              <Link to={"/"}>Home</Link>
            </div>
          </li>
          <li>
            <div>
              <MdWorkOutline size={22}/>
              <Link to={"/trabalhos"}>Trabalhos</Link>
            </div>
          </li>
          <li>
            <div>
              <AiOutlineContacts size={22}/>
              <Link to={"/comentarios"}>Contato</Link>
            </div>
          </li>
        </ul>
      </Box>
    </Container>
  )
}