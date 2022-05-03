import Image from 'next/image'
import styled from 'styled-components'
import { Blog } from '../../lib/types'
import { getFullDateStringInFrench } from '../../lib/utils'
import Text from '../Typography/Text'

type Props = {
  blog: Blog
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
`

const BlogPost = ({ blog }: Props) => (
  <Wrapper>
    <Text
      style={{ marginBottom: '20px' }}
      fontFamily="Gotham Medium"
      fontSize="24px"
    >
      {blog.title}
    </Text>
    <Text
      fontFamily="Gotham Light Italic"
      fontSize="12px"
      style={{ marginBottom: '40px' }}
    >
      Publié le {getFullDateStringInFrench(blog.publishedAt)}
    </Text>
    <Image
      width="602.16px"
      height="317.81px"
      src={`${blog.thumbnail}`}
      alt="thumbnail"
    />
    <Text
      style={{
        marginTop: '80px',
        marginBottom: '196px',
        fontWeight: 'lighter',
        lineHeight: '24px',
      }}
      fontFamily="Helvetica Regular"
      fontSize="20px"
      dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
    />
  </Wrapper>
)

export default BlogPost
