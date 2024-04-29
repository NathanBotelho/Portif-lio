import Header from "../../components/Header/Header";
import * as S from "./styled";
import css from "../../assets/css.png";
import figma from "../../assets/figma.png";
import git_icon from "../../assets/git_icon.png";
import github_Icon from "../../assets/github_Icon.png";
import html from "../../assets/html.png";
import node_js from "../../assets/node_js.png";
import react from "../../assets/react.png";
import Vercel from "../../assets/Vercel.png";

export default function Sobre() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <div>
          <h2>Quem sou eu</h2>
          <p>
            Meu nome é Nathan Botelho sou estudante de Analises e
            desenvolvimento de Sistemas na Unilavras e formando do Vai na Web
            2024 na turma de FRONT-END.{" "}
          </p>
          <p>
            Professor de Analises e desenvolvimento de Sistemas em escola
            publica desbravando a area da tecnologia.
          </p>
        </div>
        <S.BoxImg>
          <h2>HABILIDADES</h2>
          <img src={css} alt="css" />
          <img src={html} alt="" />
          <img src={git_icon} alt="" />
          <img src={github_Icon} alt="" />
          <img src={figma} alt="" />
          <img src={node_js} alt="" />
          <img src={Vercel} alt="" />
          <img src={react} alt="" />
        </S.BoxImg>
      </S.Container>
    </S.Main>
  );
}
