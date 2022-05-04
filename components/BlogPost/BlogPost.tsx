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
    <Text style={{ marginBottom: '20px' }} font="gothamMedium" size="large">
      {blog.data.title[0].text}
    </Text>
    <Text font="gothamLightItalic" size="tiny" style={{ marginBottom: '40px' }}>
      Publié le {getFullDateStringInFrench(blog.first_publication_date)}
    </Text>
    <Image
      width="602.16px"
      height="317.81px"
      src={`${blog.data.thumbnail.url}`}
      alt="thumbnail"
    />
    <Text
      style={{
        marginTop: '80px',
        marginBottom: '196px',
        fontWeight: 'lighter',
        lineHeight: '24px',
      }}
      font="helvetica"
      size="bold"
      dangerouslySetInnerHTML={{ __html: `${blog.data.content[0].text}` }}
    />
  </Wrapper>
)

export default BlogPost
