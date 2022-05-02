import Link from 'next/link'
import { Blog } from '../../data'
import Text from '../Typography/Text'
import StyledCard from './StyledCard'
import StyledDate from './StyledDate'
import StyledDescription from './StyledDescription'
import StyledImage from './StyledImage'

const Card = ({ blog }: { blog: Blog }) => (
  <Link href={`${blog.slug}`} passHref>
    <StyledCard>
      <StyledImage
        src={`${blog.thumbnail}`}
        alt="thumbnail"
        width="360px"
        height="190px"
      />
      <StyledDate>
        <Text fontFamily="Gotham Medium" fontSize="20px">
          {blog.publishedAt.day}
        </Text>
        <Text fontFamily="Gotham Book" fontSize="14px">
          {blog.publishedAt.month}
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
