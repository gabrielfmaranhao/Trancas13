import styled from "styled-components";

export const Container = styled.div`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0, 0.5);
`
export const Box = styled.div`
width: 100%;
height: 25%;
background: var(--roxo2);
color: var(--branco);
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    
  }
  li {
    display: flex;
    border-bottom: 1px solid var(--branco);
    height: 33%;
    align-items: center;
  }
  li div {
    margin-left: 20px;
    display: flex;
    gap: 10px;
  }
  li div a {
    text-decoration: none;
    color: var(--preto);
  }
`