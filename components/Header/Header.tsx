import StyledHeader from './StyledHeader'
import GothamBold24 from '../Typography/GothamBold24'
import GothamMedium16 from '../Typography/GothamMedium16'

const Header = () => (
  <StyledHeader>
    <h1>
      <GothamBold24>Le Blog</GothamBold24>
    </h1>
    <GothamMedium16>Voir les catégories</GothamMedium16>
  </StyledHeader>
)

export default Header
