import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

@font-face {
 font-family: "Gotham Bold";
 src: url("assets/fonts/Gotham/Gotham-Bold.woff") format("woff")
}

@font-face {
 font-family: "Gotham Medium";
 src: url("assets/fonts/Gotham/Gotham-Medium.woff") format("woff"), 
      url("assets/fonts/Gotham/Gotham-Medium.woff2") format("woff2"),
}

@font-face {
 font-family: "Gotham Book";
 src: url("assets/fonts/Gotham/Gotham-Book.woff") format("woff"), 
      url("assets/fonts/Gotham/Gotham-Book.woff2") format("woff2"),
}

* {
  box-sizing: border-box;
}
`
export default GlobalStyles
