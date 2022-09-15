import {AiOutlineInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import { Container } from "./style"

export const Footer = () => {
  return (
    <Container>
      <div>
        <AiOutlineInstagram size={20}/>
        <a href="https://www.instagram.com/trancas.13/?igshid=YmMyMTA2M2Y%3D" target={"_blank"}>Trancas.13</a>
      </div>
      <div>
        <BsWhatsapp size={20}/>
        <a href="https://api.whatsapp.com/send?phone=5581981512166" target={"_blank"}>(81) 98151-2166</a>
      </div>
    </Container>
  )
}