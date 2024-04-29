import Header from '../../components/Header/Header'
import * as S from "./styled"
import link from "../../assets/link.png"
import git from "../../assets/git.png"
import insta from "../../assets/insta.png"

export default function Inicio() {
    return (
        <S.Main>
            <Header/>
                <S.BoxIcon>
                    <a href="https://www.linkedin.com/in/nathan-botelho-9a4681255/"><img src={link} alt="" /></a>
                    <a href="https://github.com/NathanBotelho"><img src={git} alt="" /></a>
                    <a href="https://www.instagram.com/qr/"><img src={insta} alt="" /></a>
                </S.BoxIcon>
        </S.Main>
    )
}