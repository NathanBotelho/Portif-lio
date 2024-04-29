import { Link } from "react-router-dom";
import * as S from "./styled"

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <img src="Minhafoto" alt="Minha-foto" />
        <S.Title>Nathan Botelho</S.Title>
        <S.Text>Front-end Developer</S.Text>
      </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/routs">Projetos</Link></S.Lista>
                <S.Lista><Link to="/contato">Contatos</Link></S.Lista>
            </ul>
        </S.BoxMenu>
    </S.Header>
  )
}
