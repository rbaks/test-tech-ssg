import styled from 'styled-components'
import Text from '../Typography/Text'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
`

export const Title = styled(Text)`
  margin-bottom: 20px;
`

export const Date = styled(Text)`
  margin-bottom: 40px;
`
export const Content = styled(Text)`
  max-width: 1214px;
  margin-top: 80px;
  margin-bottom: 196px;
  font-weight: lighter;
  line-height: 24px;
`
