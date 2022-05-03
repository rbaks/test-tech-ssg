// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const repoName = 'test-tesch-ssg'
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { fetch })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const article = await client.getByUID(
  //   'article',
  //   'quelles-sont-les-garanties-apres-travaux',
  //   {
  //     graphQuery: `
  //   {
  //     article {
  //       title
  //       content
  //     }
  //   }`,
  //   }
  // )
  const customType = 'article'

  const article = await client.getAllByType(customType)

  res.status(200).json(article)
}
