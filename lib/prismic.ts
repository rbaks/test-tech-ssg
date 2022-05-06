import * as prismic from '@prismicio/client'

const getClient = () => {
  const repoName = process.env.PRISMIC_REPOSITORY_NAME || ''
  const endpoint = prismic.getEndpoint(repoName)
  return prismic.createClient(endpoint)
}

export const getUIDs = async (customType: string) => {
  const uids = await getClient().getAllByType(customType, {
    graphQuery: `
    {
      ${customType} {
        uid
      }
    }`,
  })
  return uids.map((uid) => uid.uid)
}

export const getByUID = async (
  customType: string,
  uid: string,
  options = {}
) => {
  const data = await getClient().getByUID(customType, uid, options)
  return data
}

export const getCategories = async () => {
  const categories = await getClient().getAllByType('category', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    fetchLinks: 'article.thumbnail,article.title',
  })
  return categories
}
