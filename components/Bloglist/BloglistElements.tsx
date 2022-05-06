import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1208px;
  margin: 0 auto;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 3rem 3rem;
  padding: 3rem 0;
`
export const CategoryList = styled.a`
  cursor: pointer;
  max-width: 1208px;
`
