import styled, {createGlobalStyle} from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin-bottom: 0;
  }

  html {
    overflow: hidden;
  }

  html, body, #root {
    min-height: 100vh;
    width: 100%;
    height: 100%;
  }

  #root {
    background: --var(primary);
  }

  *, button, input {
    border: 0;
    background: none;
  }

  p, span, strong {
    cursor: default;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #F8F8F8;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`;