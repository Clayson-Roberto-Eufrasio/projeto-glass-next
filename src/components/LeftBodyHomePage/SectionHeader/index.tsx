import { SectionHeaderStyled } from "./styles"

const SectionHeader = () => {
  return (
    <SectionHeaderStyled>
      <hgroup>
        <h3> Tecnologia | Inovações </h3>
        <h1> Saiba tudo sobre o Google Glass </h1>
        <h2> por Clayson Roberto Eufrasio </h2>
        <h3 className="direita"> Atualizado em 14/Fevereiro/2025 </h3>
      </hgroup>
    </SectionHeaderStyled>
  )
}

export default SectionHeader