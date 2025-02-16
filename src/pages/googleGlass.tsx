import { BodyOfPagesStyled } from "@/components/BodyOfPages/styles"
import { IframeGoogleGlassStyled } from "@/components/IframeGoogleGlass/styles"

const GoogleGlass = () => {
  return (
    <BodyOfPagesStyled>
      <IframeGoogleGlassStyled id="mao">
        <header>
          <h2> Clique sobre as áreas destacadas em vermelho </h2>
          <img src="/images/mao.webp" alt="Mão apontando para a esquerda"  />
        </header>
      </IframeGoogleGlassStyled>

      <IframeGoogleGlassStyled id="tela">
        <header>
          <h1> Tela </h1>
          <h2> Como o mundo vai aparecer </h2>
        </header>
        <p>
          De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça.
        </p>
        <img src="/images/det-tela.webp" alt="Tela google glass"  />
      </IframeGoogleGlassStyled>

      <IframeGoogleGlassStyled id="camera">
        <header>
          <h1> Câmera </h1>
          <h2> Filme e fotografe a qualquer momento </h2>
        </header>
        <img className="img-dir" src="/images/det-camera.webp" alt="Câmera google glass"  />
        <p>
          Com o Google Glass será possível tirar fotos com até 5 megapixels e gravar vídeos com 720 linhas de resolução. Os primeiros vídeos e fotos capturados com o aparelho já começaram a circular pela rede, mas até agora ninguém tem muitas informações técnicas.
        </p>
      </IframeGoogleGlassStyled>

      <IframeGoogleGlassStyled id="sensores">
      <header>
            <h1> Sensores </h1>
            <h2> A sensibilidade de um simples óculos </h2>
        </header>   
        <p>
            Quem pensa que para comandar o Google Glass vai precisar de teclado e mouse, se engana redondamente. O dispositivo vem com vários tipos de sensores e microfones embutidos. Assim, para dar um comando, basta falar ou passar o dedo na lateral do óculos.
        </p>
        <img src="/images/det-touch.webp" alt="Sensores google glass"  />
      </IframeGoogleGlassStyled>

      <IframeGoogleGlassStyled id="bateria">
      <header>
            <h1> Bateria e Gadgets </h1>
            <h2> Quais são os dispositivos que complementam o Glass </h2>
        </header>
            <img className="img-dir" src="/images/det-bateria.webp" alt="Bateria google glass"  />
            <p>
                Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para durar um dia inteiro. Apenas algumas atividades como videoconferências e longas filmagens vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.
            </p>
      </IframeGoogleGlassStyled>

    </BodyOfPagesStyled>
  )
}

export default GoogleGlass