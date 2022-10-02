import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  }
  ul {
    list-style: none;
  }
  li {
    list-style: none;
  }
  a,
  a:visited,
  a:link {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
