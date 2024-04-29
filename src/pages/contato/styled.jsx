import styled, { css } from "styled-components";


const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
background: linear-gradient(black, #0fc3e8, black);
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const BoxIcon = styled.div`
/* border: solid 1px yellow; */
margin-top: 250px;
height: 23.5vh;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
img{
    width: 3vw;
}
`