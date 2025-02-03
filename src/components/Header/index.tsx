import Image from "next/image"
import { HeaderStyled } from "./styles"
import NavContainer from "../Nav"
import { useAppContext } from "@/context/AuthContext"

const HeaderContainer = () => {
  const { icone } = useAppContext()

  return (
    <HeaderStyled>
      <hgroup>
        <h1> Google Glass </h1>
        <h2> A revolução do Google está chegando </h2>
      </hgroup>
      <Image 
        id="icone" 
        src={icone} 
        alt="ôculos Glass" 
        width={100} 
        height={100}
      />
      <NavContainer />
    </HeaderStyled>
  )
}

export default HeaderContainer