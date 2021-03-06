import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Bloglist from '../components/Bloglist'
import PostalCode from '../components/PostalCode'
import { getCategories } from '../lib/prismic'
import { Category } from '../lib/types'

const Home = ({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Algar - Blog</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {categories.map((category) => (
      <Bloglist key={category.uid} category={category} />
    ))}

    <PostalCode />
  </>
)

export const getStaticProps = async () => {
  const categories = (await getCategories()) as unknown as Category[]
  return { props: { categories } }
}

export default Home
