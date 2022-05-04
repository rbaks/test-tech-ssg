import styled from 'styled-components'

type Props = {
  size: 'large' | 'bold' | 'medium' | 'small' | 'tiny'
  font:
    | 'gothamBook'
    | 'gothamMedium'
    | 'gothamBold'
    | 'gothamLightItalic'
    | 'helvetica'
}

const Text = styled.span<Props>`
  font-family: ${(props) =>
    props.font
      ? props.theme.fonts[props.font]
      : props.theme.fonts.gothamMedium};
  font-size: ${(props) =>
    props.size ? props.theme.sizes[props.size] : props.theme.sizes.medium};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
`
export default Text
