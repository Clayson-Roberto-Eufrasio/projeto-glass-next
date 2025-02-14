import { BodyOfPagesStyled } from "@/components/BodyOfPages/styles";
import FooterContainer from "@/components/Footer";
import HeaderContainer from "@/components/Header";
import LeftBodyHomePage from "@/components/LeftBodyHomePage";
import RigthBodyHomePage from "@/components/RigthBodyHomePage";

const Home = () => {
  return (
    <BodyOfPagesStyled>
      <HeaderContainer />
      <LeftBodyHomePage />
      <RigthBodyHomePage />
      <FooterContainer />
    </BodyOfPagesStyled>
  )
}

export default Home
