import styled from 'styled-components'

const StyledDate = styled.div`
  position: absolute;
  margin-top: 9px;
  margin-left: 9px;

  width: 43px;
  height: 49px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
`

export default StyledDate
