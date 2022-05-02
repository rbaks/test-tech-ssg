import StyledHeader from './StyledHeader'
import Text from '../Typography/Text'

const Header = () => (
  <StyledHeader>
    <h1>
      <Text color="white" fontFamily="Gotham Bold" fontSize="24px">
        Le Blog
      </Text>
    </h1>
    <Text color="white" fontFamily="Gotham Medium" fontSize="16px">
      Voir les catégories
    </Text>
  </StyledHeader>
)

export default Header
