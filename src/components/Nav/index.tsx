import Link from "next/link"
import { useAppContext } from "@/context/AuthContext"

const NavContainer = () => {
  const { setIcone } = useAppContext()

  return (
    <nav id="menuPrincipal">
      <h1> Menu Principal </h1>
      <ul>
        <li 
          onMouseEnter={() => setIcone("/images/home.webp")} 
          onMouseLeave={() => setIcone("/images/glass-oculos-preto-peq.webp")}>
          <Link href="/index"> Home </Link>
        </li>
        <li 
          onMouseEnter={() => setIcone("/images/especificacoes.webp")} 
          onMouseLeave={() => setIcone("/images/glass-oculos-preto-peq.webp")}>
          <Link href="/specs"> Especificações </Link>
        </li>
        <li 
          onMouseEnter={() => setIcone("/images/fotos.webp")} 
          onMouseLeave={() => setIcone("/images/glass-oculos-preto-peq.webp")}>
          <Link href="/fotos"> Fotos </Link>
        </li>
        <li 
          onMouseEnter={() => setIcone("/images/multimidia.webp")} 
          onMouseLeave={() => setIcone("/images/glass-oculos-preto-peq.webp")}>
          <Link href="/multimidia"> Multimídia </Link>
        </li>
        <li 
          onMouseEnter={() => setIcone("/images/contato.webp")} 
          onMouseLeave={() => setIcone("/images/glass-oculos-preto-peq.webp")}>
          <Link href="/faleConosco"> Fale conosco </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavContainer