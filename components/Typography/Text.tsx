import styled from 'styled-components'

type Props = {
  fontSize: string
  fontFamily: 'Gotham Book' | 'Gotham Medium' | 'Gotham Bold'
}

const Text = styled.span<Props>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${(props) => (props.color ? props.theme.colors.white : props.color)};
`
export default Text
