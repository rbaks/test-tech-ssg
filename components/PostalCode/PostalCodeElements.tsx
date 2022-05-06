import styled from 'styled-components'

export const Card = styled.div`
  width: 720px;
  height: 250px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};
  border-radius: 8px;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.lightGrey};
`

export const StyledForm = styled.form`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`

export const Input = styled.input`
  width: 305px;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 8px;
  margin: 10px 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.gothamMedium};

  &:focus {
    outline: none !important;
    border: 2px solid ${({ theme }) => theme.colors.darkGreen};
  }
`

export const Button = styled.button`
  width: 152px;
  height: 38px;
  margin: 0 auto;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`
