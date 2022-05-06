import styled from 'styled-components'

const Wrapper = styled.header`
  height: 85px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`
export default Wrapper
