import { RigthBodyHomePageStyled } from "./styles"

const RigthBodyHomePage = () => {
  return (
    <RigthBodyHomePageStyled>
      <h1> Outras Notícias </h1>
      <h2> Vídeo mais recente </h2>
      <video id="video2" poster="/images/video-mini02.webp" controls>
        <source src="/media/one-day.mp4" type="video/mp4"/>
      </video>
      <h2> Novidades no Glass </h2>
      <p>
        O Google enfim revelou as especificações completas do Google Glass, e com ele uma surpresa ainda inédita
        no mercado: a gigante das buscas usará um sistema de áudio baseado na transdução por condução.
        Através das hastes dos óculos, o som será transmitido para o ouvido do usuário por meio de
        microvibrações em determinados ossos de sua cabeça, sem usar nenhum tipo de alto-falante.
      </p>
      <p>
        Além da surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção. Serão 640 x
        360 pixels de resolução que, em proporção, equivaleria a um monitor de 25 polegadas de alta
        definição colocado a 2,5 metros de distância do espectador.
      </p>
    </RigthBodyHomePageStyled>
  )
}

export default RigthBodyHomePage