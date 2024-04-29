import Header from '../../components/Header/Header'
import * as S from "./styled"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
          <div>
        <h1>Olá meu nome é Nathan sou dev front-end.</h1>
        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
        </div>
        <img src="" alt="" />
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
