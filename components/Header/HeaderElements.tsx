import styled from 'styled-components'
import Text from '../Typography/Text'

export const Wrapper = styled.header`
  height: 85px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`

export const CursorText = styled(Text)`
  cursor: pointer;
`
