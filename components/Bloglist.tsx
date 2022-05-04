import Link from 'next/link'
import styled from 'styled-components'
import { Category } from '../lib/types'
import Card from './Card/Card'
import Text from './Typography/Text'

const StyledBlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 3rem 3rem;
  padding: 3rem 0;
  margin-left: 70px;
`
const StyledCategoryList = styled.a`
  cursor: pointer;
  margin-left: 70px;
`

type Props = {
  category: Category
}

const Bloglist = ({ category }: Props) => (
  <>
    <Link href={`/category/${category.uid}`} passHref>
      <StyledCategoryList>
        <Text font="gothamMedium" size="large">
          Catégorie : {category.data.name}
        </Text>
      </StyledCategoryList>
    </Link>
    <StyledBlogList>
      {category.data.blogs.map((blog) => (
        <Card key={blog.blog.uid} blog={blog} />
      ))}
    </StyledBlogList>
  </>
)
export default Bloglist
