import Link from 'next/link'
import { NestedBlog } from '../../lib/types'
import { getMonthDateStringInFrench } from '../../lib/utils'
import Text from '../Typography/Text'
import StyledCard from './StyledCard'
import StyledDate from './StyledDate'
import StyledDescription from './StyledDescription'
import StyledImage from './StyledImage'

type Props = {
  blog: NestedBlog
}

const Card = ({ blog }: Props) => (
  <Link href={`/article/${blog.blog.uid}`} passHref>
    <StyledCard>
      <StyledImage
        src={`${blog.blog.data.thumbnail.url}`}
        alt="thumbnail"
        width="360px"
        height="190px"
      />
      <StyledDate>
        <Text font="gothamMedium" size="bold" color="white">
          {new Date(blog.blog.first_publication_date).getUTCDate()}
        </Text>
        <Text font="gothamBook" size="small" color="white">
          {getMonthDateStringInFrench(blog.blog.first_publication_date)}
        </Text>
      </StyledDate>
      <StyledDescription>
        <Text font="gothamMedium" size="medium">
          {blog.blog.data.title[0].text}
        </Text>
      </StyledDescription>
    </StyledCard>
  </Link>
)

export default Card
