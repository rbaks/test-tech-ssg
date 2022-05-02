import Link from 'next/link'
import styled from 'styled-components'
import { Category } from '../data'
import Card from './Card/Card'
import Text from './Typography/Text'

const StyledBlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 3rem 3rem;
  padding: 3rem 0;
`
const Bloglist = ({ category }: { category: Category }) => (
  <>
    <Link href={category.slug} passHref>
      <Text fontFamily="Gotham Medium" fontSize="24px">
        Catégorie: {category.name}
      </Text>
    </Link>
    <StyledBlogList>
      {category.blogs.map((blog) => (
        <Card key={blog.slug} blog={blog} />
      ))}
    </StyledBlogList>
  </>
)
export default Bloglist
