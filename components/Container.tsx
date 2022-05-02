import styled from 'styled-components'

const Container = styled.main`
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.padding};
`

export default Container
