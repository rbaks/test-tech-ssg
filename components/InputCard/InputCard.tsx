import styled, { DefaultTheme, useTheme } from 'styled-components'
import Text from '../Typography/Text'

const Card = styled.div`
  width: 720px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};
  border-radius: 8px;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.lightGrey};
`

const InputCard = () => (
  <Card>
    <Text font="gothamMedium" size="large" color="darkGreen">
      Recevez les règles d&apos;urbanisme pour votre ville
    </Text>
  </Card>
)

export default InputCard
