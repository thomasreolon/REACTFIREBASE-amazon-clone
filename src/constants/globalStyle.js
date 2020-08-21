import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background-color: rgb(234,237,237);
}

htlm, body, #root, .App {
  height:100%;
  width:100%;
}

* {
  margin: 0;
  box-sizing: border-box;
}
`;

export default GlobalStyle;
