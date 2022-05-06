import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.a`
  width: 360px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const SDate = styled.div`
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
export const Description = styled.span`
  margin-top: 22px;
  color: ${({ theme }) => theme.colors.black};
`
export const SImage = styled(Image)`
  position: relative;
  display: flex;
`
