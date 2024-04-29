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
export const Container = styled.section`
width: 100%;
${center}
/* border: solid 2px red; */
`

export const BoxInicio = styled.div`
/* border: solid 2px red; */
${center}
h1{
    font-size: 3rem;
    /* border: solid 1px white; */
    width: 40vw;
    color: white;
    margin-bottom: 10px;
    text-shadow: 2px 2px black;
}
p{
   font-size: 2rem; 
   /* border: solid 1px black; */
   width: 45vw;
   color: white;
   text-shadow: 1px 1px black;
}
img{
    width: 20vw;
    border-radius: 20px;
}
`