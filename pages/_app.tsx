import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Container from '../components/Container'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'

export const theme = {
  colors: {
    darkGreen: '#29B394',
    lightGreen: '#7DD8BE',
    black: '#3F3F3F',
    grey: '#707070',
    lightGrey: '#00000029',
    white: '#FFFFFF',
    darkWhite: '#F9F9F9',
    red: '#F2495E',
  },
  sizes: {
    large: '24px',
    bold: '20px',
    medium: '16px',
    small: '14px',
    tiny: '12px',
  },
  fonts: {
    gothamBold: 'Gotham Bold',
    gothamMedium: 'Gotham Medium',
    gothamBook: 'Gotham Book',
    gothamLightItalic: 'Gotham Light Italic',
    helvetica: 'Helvetica Regular',
  },
  padding: '200px',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
