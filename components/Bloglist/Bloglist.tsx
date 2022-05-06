import Link from 'next/link'
import { Category } from '../../lib/types'
import Card from '../Card/Card'
import Text from '../Typography/Text'
import { CategoryList, List, Wrapper } from './BloglistElements'

type Props = {
  category: Category
}

const Bloglist = ({ category }: Props) => (
  <Wrapper>
    <Link href={`/category/${category.uid}`} passHref>
      <CategoryList>
        <Text font="gothamMedium" size="large">
          Catégorie : {category.data.name}
        </Text>
      </CategoryList>
    </Link>
    <List>
      {category.data.blogs.map((blog) => (
        <Card key={blog.blog.uid} blog={blog} />
      ))}
    </List>
  </Wrapper>
)
export default Bloglist
