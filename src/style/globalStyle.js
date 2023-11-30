import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
:root {
  font-size: 62.5%;
}

body {
  scroll-behavior: smooth;
  background-color: #EFEFF7;

  color: #333;
  font-weight: normal;
}

body, input,button{
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
}
img {
  max-width: 100%;
  display: block;
}
a {
  text-decoration: none;
}
li{
  list-style: none;
}
`;
