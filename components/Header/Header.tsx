import Link from 'next/link'
import Text from '../Typography/Text'
import Wrapper from './HeaderElements'

const Header = () => (
  <Wrapper>
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
  </Wrapper>
)

export default Header
