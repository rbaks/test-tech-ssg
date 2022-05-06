import Link from 'next/link'
import { CursorText, Wrapper } from './HeaderElements'

const Header = () => (
  <Wrapper>
    <Link href="/" passHref>
      <CursorText color="white" font="gothamBold" size="large">
        Le Blog
      </CursorText>
    </Link>
    <Link href="/" passHref>
      <CursorText color="white" font="gothamMedium" size="medium">
        Voir les catégories
      </CursorText>
    </Link>
  </Wrapper>
)

export default Header
