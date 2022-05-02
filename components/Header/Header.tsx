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
          fontFamily="Gotham Bold"
          fontSize="24px"
        >
          Le Blog
        </Text>
      </h1>
    </Link>
    <Link href="/" passHref>
      <Text
        style={{ cursor: 'pointer' }}
        color="white"
        fontFamily="Gotham Medium"
        fontSize="16px"
      >
        Voir les catégories
      </Text>
    </Link>
  </StyledHeader>
)

export default Header
