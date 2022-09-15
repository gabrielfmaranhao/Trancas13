import styled from "styled-components";

export const Container = styled.div`
height: 80px;
width: 100%;
background: var(--preto2);
display: flex;
flex-direction: column;
color: var(--branco2);
justify-content: center;
gap: 5px;
border-radius: 4px 4px 0px 0px;
div {
  margin-left: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
}
div a {
  text-decoration: none;
  color: var(--branco2);
}
`