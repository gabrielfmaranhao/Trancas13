import { Button, Container } from "./styles"
import {AiOutlineMenu} from "react-icons/ai"
import { Modal } from "../ModalSliderBar"
import { useState } from "react"

interface IHeader {
  name: string
}
export const Header = ({name}:IHeader) => {
  const [openModal, setOpenModal] = useState(false);
  function openModals() {
    setOpenModal(!openModal)
  }
return(
  <>
    <Container>
      <Button onClick={()=> openModals()}>
        <AiOutlineMenu size={20} color={"black"}/>
      </Button>
      <h2>{name}</h2>
    </Container>
    {openModal && <Modal/>}
  </>
  
  
)
}