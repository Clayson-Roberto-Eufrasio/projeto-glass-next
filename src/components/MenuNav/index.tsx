import Link from "next/link"
import { useAppContext } from "@/context/AuthContext"
import { MenuNavStyled } from "./styles"

const MenuNav = () => {
  const { iconeAtual, setIconeTemporario, handleClick } = useAppContext()

  return (
    <MenuNavStyled id="menuPrincipal">
      
      <h1> Menu Principal </h1>
      <ul>
        <li 
          onMouseEnter={() => setIconeTemporario("/images/home.webp")} 
          onMouseLeave={() => setIconeTemporario(iconeAtual)}>
          <Link 
            href="/"
            onClick={() => handleClick("/images/glass-oculos-preto-peq.webp")}> Home </Link>
        </li>
        <li 
          onMouseEnter={() => setIconeTemporario("/images/especificacoes.webp")} 
          onMouseLeave={() => setIconeTemporario(iconeAtual)}>
          <Link 
            href="/specs"
            onClick={() => handleClick("/images/especificacoes.webp")}> Especificações </Link>
        </li>
        <li 
          onMouseEnter={() => setIconeTemporario("/images/fotos.webp")} 
          onMouseLeave={() => setIconeTemporario(iconeAtual)}>
          <Link 
            href="/fotos"
            onClick={() => handleClick("/images/fotos.webp")}> Fotos </Link>
        </li>
        <li 
          onMouseEnter={() => setIconeTemporario("/images/multimidia.webp")} 
          onMouseLeave={() => setIconeTemporario(iconeAtual)}>
          <Link
            href="/multimidia"
            onClick={() => handleClick("/images/multimidia.webp")}> Multimídia </Link>
        </li>
        <li 
          onMouseEnter={() => setIconeTemporario("/images/contato.webp")} 
          onMouseLeave={() => setIconeTemporario(iconeAtual)}>
          <Link 
            href="/faleConosco"
            onClick={() => handleClick("/images/contato.webp")}> Fale conosco </Link>
        </li>

      </ul>
    </MenuNavStyled>
  )
}

export default MenuNav