import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  min-width: 800px;
}

a {
  color: inherit;
  text-decoration: none;
}

@font-face {
 font-family: "Gotham Bold";
 src: url("/assets/fonts/Gotham/Gotham-Bold.woff") format("woff")
}

@font-face {
 font-family: "Gotham Medium";
 src: url("/assets/fonts/Gotham/Gotham-Medium.woff") format("woff") 
      /* url("/assets/fonts/Gotham/Gotham-Medium.woff2") format("woff2"), */
}

@font-face {
 font-family: "Gotham Book";
 src: url("/assets/fonts/Gotham/Gotham-Book.woff") format("woff")
      /* url("/assets/fonts/Gotham/Gotham-Book.woff2") format("woff2"), */
}

@font-face {
 font-family: "Gotham Light Italic";
 src: url("/assets/fonts/Gotham/Gotham-Light-Italic.ttf") format("truetype")
}

@font-face {
 font-family: "Helvetica Regular";
 src: url("/assets/fonts/Helvetica/Helvetica.ttf") format("truetype")
}
`
export default GlobalStyles
