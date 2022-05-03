import Link from 'next/link'
import { Blog } from '../../lib/types'
import { getMonthDateStringInFrench } from '../../lib/utils'
import Text from '../Typography/Text'
import StyledCard from './StyledCard'
import StyledDate from './StyledDate'
import StyledDescription from './StyledDescription'
import StyledImage from './StyledImage'

type Props = {
  blog: Blog
}

const Card = ({ blog }: Props) => (
  <Link href={`/article/${blog.slug}`} passHref>
    <StyledCard>
      <StyledImage
        src={`${blog.thumbnail}`}
        alt="thumbnail"
        width="360px"
        height="190px"
      />
      <StyledDate>
        <Text fontFamily="Gotham Medium" fontSize="20px">
          {new Date(blog.publishedAt).getUTCDate()}
        </Text>
        <Text fontFamily="Gotham Book" fontSize="14px">
          {getMonthDateStringInFrench(blog.publishedAt)}
        </Text>
      </StyledDate>
      <StyledDescription>
        <Text fontFamily="Gotham Medium" fontSize="16px">
          {blog.title}
        </Text>
      </StyledDescription>
    </StyledCard>
  </Link>
)

export default Card
