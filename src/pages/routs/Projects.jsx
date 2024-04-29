import Header from "../../components/Header/Header";
import * as S from "./styled";
import mc from "../../assets/mc.png";
import nah from "../../assets/nah.png";
import ritimo from "../../assets/ritimo.png";
import self from "../../assets/self.png";
import Carrosel from "react-elastic-carousel";

export default function Projetos() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxImg>
          <Carrosel itensToShow={2}>
            <div>
              <h2>Projetos</h2>
              <img src={mc} alt="McDonald's" />
              <p>Sobre o projeto</p>
              <a target="_blank" href="">
                github
              </a>
            </div>
            <div>
              <h2>Projetos</h2>
              <img src={nah} alt="NahCroqueteria" />
              <p>Sobre o projeto</p>
              <a target="_blank" href="">
                github
              </a>
            </div>
            <div>
              <h2>Projetos</h2>
              <img src={ritimo} alt="RitimoDaBatida" />
              <p>Sobre o projeto</p>
              <a target="_blank" href="">
                github
              </a>
            </div>
            <div>
              <h2>Projetos</h2>
              <img src={self} alt="SelfCare" />
              <p>Sobre o projeto</p>
              <a target="_blank" href="">
                github
              </a>
            </div>
          </Carrosel>
        </S.BoxImg>
      </S.Container>
    </S.Main>
  );
}
