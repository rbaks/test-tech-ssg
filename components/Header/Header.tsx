import Link from 'next/link'
import StyledHeader from './StyledHeader'
import Text from '../Typography/Text'

const Header = () => (
  <StyledHeader>
    <Link href="/" passHref>
      <h1>
        <Text
          style={{ cursor: 'pointer' }}
          color="white"
          font="gothamBold"
          size="large"
        >
          Le Blog
        </Text>
      </h1>
    </Link>
    <Link href="/" passHref>
      <Text
        style={{ cursor: 'pointer' }}
        color="white"
        font="gothamMedium"
        size="medium"
      >
        Voir les catégories
      </Text>
    </Link>
  </StyledHeader>
)

export default Header
