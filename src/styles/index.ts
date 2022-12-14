import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --roxo1:   #C77DFF;
    --roxo2:   #E0AAFF;
    --branco:  #ffffff;
    --branco2: rgba(255, 255, 255, 0.7);
    --preto:   #000000;
    --preto2:  rgba(30, 30, 30, 0.8);
    --gradiente: linear-gradient(180deg, #E0AAFF 19.42%, #AA2CBF 62.42%);
  }
  html,body, #root{
    width: 100%;
    height: 100%;
    background: var(--gradiente);
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
}
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
	  display: block;
}
ol, ul {
	list-style: none;
}
  html {
    font-family: 'Poppins';
  }
`;
