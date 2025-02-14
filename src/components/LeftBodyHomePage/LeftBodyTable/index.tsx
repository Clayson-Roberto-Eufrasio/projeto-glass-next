import { LeftBodyTableStyled } from "./styles"

const LeftBodyTable = () => {
  return (
    <LeftBodyTableStyled>
      <caption> Tabela Técnica do Google Glass <span> Mar/2013 </span> </caption>
      <tbody>
        <tr>
          <td className="esquerda"> Tela </td>
          <td className="direita"> Resolução equivalente a tela de 25" </td>
        </tr>
        <tr>
          <td className="esquerda" rowSpan={2} > Camera </td>
          <td className="direita"> 5MP para fotos </td>
        </tr>
        <tr>
          <td className="direita"> 720p para vídeos </td>
        </tr>
        <tr>
          <td className="esquerda" rowSpan={2}> Conectividade </td>
          <td className="direita"> Wi-Fi </td>
        </tr>
        <tr>
          <td className="direita"> Bluetooth </td>
        </tr>
        <tr>
          <td className="esquerda"> Memória Interna </td>
          <td className="direita"> 12GB </td>
        </tr>
      </tbody>
    </LeftBodyTableStyled>
  )
}

export default LeftBodyTable