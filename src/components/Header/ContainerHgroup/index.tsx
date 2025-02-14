import { ContainerHgroupStyled } from "./styles"
import glass from "../../../../public/images/glass-logo-peq.webp"
import Image from "next/image"

const ContainerHgroup = () => {
  return (
    <ContainerHgroupStyled>
      <hgroup>
        <h1> Google Glass </h1>
        <h2> A revolução do Google está chegando </h2>
      </hgroup>
      <Image src={glass} alt="glass"/>
    </ContainerHgroupStyled>
  )
}

export default ContainerHgroup