import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
`
export default Wrapper
