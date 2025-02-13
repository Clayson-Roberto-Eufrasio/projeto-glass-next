import { HeaderStyled } from "./styles"
import ContainerHgroup from "./ContainerHgroup"
import ContainerNav from "./ContainerNav"

const HeaderContainer = () => {

  return (
    <HeaderStyled>
      <ContainerHgroup />
      <ContainerNav />
    </HeaderStyled>
  )
}

export default HeaderContainer