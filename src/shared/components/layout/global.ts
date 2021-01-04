import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;

    @media(max-width: 800px) {
      flex: 1;
      margin: 0 !important;
    }
  }

  button {
    cursor: pointer;
  }
`;
