import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import BlogPost from '../../components/BlogPost/BlogPost'
import { getByUID, getUIDs } from '../../lib/prismic'
import { Blog } from '../../lib/types'

const ArticlePage = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{(blog as Blog).data.title[0].text}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BlogPost blog={blog} />
  </>
)

export const getStaticPaths = async () => ({
  paths: (await getUIDs('article')).map((uid) => ({
    params: { slug: uid },
  })),
  fallback: false,
})

type Props = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Props) => {
  const blog = (await getByUID('article', params.slug)) as unknown as Blog
  return { props: { blog } }
}

export default ArticlePage
