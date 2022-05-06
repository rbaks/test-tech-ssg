// @ts-nocheck
// PrismicRichText does not support typescript :(
import Image from 'next/image'
import { PrismicRichText } from '@prismicio/react'
import { Blog } from '../../lib/types'
import { getFullDateStringInFrench } from '../../lib/utils'
import { Content, Date, Title, Wrapper } from './BlogPostElements'

type Props = {
  blog: Blog
}

const BlogPost = ({ blog }: Props) => (
  <Wrapper>
    <Title font="gothamMedium" size="large">
      {blog.data.title[0].text}
    </Title>
    <Date font="gothamLightItalic" size="tiny">
      Publié le {getFullDateStringInFrench(blog.first_publication_date)}
    </Date>
    <Image
      width="602.16px"
      height="317.81px"
      src={`${blog.data.thumbnail.url}`}
      alt="thumbnail"
    />
    <Content font="helvetica" size="bold">
      <PrismicRichText field={blog.data.content} />
    </Content>
  </Wrapper>
)

export default BlogPost
