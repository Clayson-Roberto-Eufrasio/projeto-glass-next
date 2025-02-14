import ImageWithCaption from "./ImageWithCaption"
import LeftBodyTable from "./LeftBodyTable"
import SectionHeader from "./SectionHeader"
import { LeftBodyHomePageStyled } from "./styles"

const LeftBodyHomePage = () => {
  return (
    <LeftBodyHomePageStyled>
      <article>
        <SectionHeader />
        <h2> O que é </h2>
        <p>
          O <span /* style="font-weight: 900;" */> Google Glass </span> é um acessório em forma de óculos que
          possibilita a interação dos usuários com diversos conteúdos em realidade
          aumentada. Também chamado de <a href="https://www.google.com/glass/start/"
            target="_blank"> Project Glass </a>, o eletrônico é capaz de tirar fotos a partir
          de comandos de voz, enviar mensagens instantâneas e realizar vídeo&shy;con&shy;ferên&shy;cias. Seu lançamento está
          previsto para 2014, e seu preço deve ser de US$ 1,5 mil. Atualmente o <em>
            Google Glass </em> encontra-se em fase de testes e já possui um vídeo totalmente
          gravado com o dispositivo. Além disso, a companhia de buscas registrou novas patentes anti-furto e de desbloqueio
          de tela para o acessório.
        </p>
        <ImageWithCaption />
        <h2> Data de lançamento </h2>
        <p>
          Não há uma data específica e oficial para o dispositivo ser lançado, ainda. Pode ser que ele esteja disponível
          em demonstrações a partir de 2013, mas seu lançamento para as lojas fica para, pelo menos, 2014.
        </p>
        <h2> Especificações Técnicas </h2>
        <LeftBodyTable />
        <h2> Como funciona </h2>
        <p>
          De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED
          na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS,
          você pode se situar, assim como selecionar opções com o movimento da cabeça
        </p>
        <h2> O que você pode fazer com o Google Glasses </h2>
        <p>
          O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de “super-humanos”,
            já que o aparelho pode indicar a quantos metros você está de seu destino, se o metrô está aberto
            ou fechado, mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas com comandos de voz.
        </p>
        <video id="video1" poster="/images/video-mini01.webp" controls>
          <source src="/media/how-it-feels.mp4" type="video/mp4"/>
        </video>
      </article>
    </LeftBodyHomePageStyled>
  )
}

export default LeftBodyHomePage