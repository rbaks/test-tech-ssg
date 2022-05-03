export interface NestedBlog {
  blog: {
    id: string
    type: string
    tags: []
    lang: string
    slug: string
    first_publication_date: string
    last_publication_date: string
    uid: string
    data: {
      thumbnail: {
        dimensions: {
          width: number
          height: number
        }
        alt: string | null
        copyright: string | null
        url: string
      }
      title: [
        {
          type: string
          text: string
          spans: []
        }
      ]
    }
    linkType: string
    isBroken: boolean
  }
}

export interface Category {
  id: string
  uid: string
  url: string | null
  type: string
  href: string
  tags: []
  first_publication_date: string
  last_publication_date: string
  slugs: string[]
  linkedDocuments: []
  lang: string
  alternateLanguages: []
  data: {
    name: string
    blogs: NestedBlog[]
  }
}

export interface Blog {
  id: string
  uid: string
  url: string | null
  type: string
  href: string
  tags: []
  first_publication_date: string
  last_publication_date: string
  slugs: string[]
  linked_documents: []
  lang: string
  alternate_languages: []
  data: {
    title: [
      {
        type: string
        text: string
        spans: []
      }
    ]
    thumbnail: {
      dimensions: {
        width: number
        height: number
      }
      alt: string | null
      copyright: string | null
      url: string
    }
    content: [
      {
        type: string
        text: string
        spans: [
          {
            start: number
            end: number
            type: string
          }
        ]
      }
    ]
  }
}
