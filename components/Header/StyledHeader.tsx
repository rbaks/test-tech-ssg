import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 85px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`
export default StyledHeader
