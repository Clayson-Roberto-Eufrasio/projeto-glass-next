import Image from "next/image"
import { ContainerNavStyled } from "./styles"
import MenuNav from "@/components/MenuNav"
import { useAppContext } from "@/context/AuthContext"

const ContainerNav = () => {
  const { iconeTemporario } = useAppContext()

  return (
    <ContainerNavStyled>
      <MenuNav />
      <Image
        id="icone"
        src={iconeTemporario}
        alt="ôculos Glass"
        width={227}
        height={131}
      />
    </ContainerNavStyled>
  )
}

export default ContainerNav