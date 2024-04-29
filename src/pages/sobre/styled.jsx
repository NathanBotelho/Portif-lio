import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background: linear-gradient(black, #0fc3e8, black);
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

div{
    border: solid 3px black;
    width: 50%;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 4px 4px 10px 4px black;
}
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const BoxImg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 10vw;
}

@media (max-width: 500px) {
    flex-direction: column;
}
`