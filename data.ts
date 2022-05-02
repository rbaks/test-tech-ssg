export interface Blog {
  title: string
  slug: string
  thumbnail: string
  publishedAt: {
    day: number
    month: string
  }
}

export interface Category {
  name: string
  slug: string
  blogs: Blog[]
}

const data: Category[] = [
  {
    name: 'Aménagement',
    slug: 'amenagement',
    blogs: [
      {
        title: 'amenagement 1',
        slug: 'amen1',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 22,
          month: 'mar',
        },
      },
      {
        title: 'amenagement 2',
        slug: 'amen2',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 21,
          month: 'mar',
        },
      },
      {
        title: 'amenagement 3',
        slug: 'amen3',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 20,
          month: 'mar',
        },
      },
    ],
  },
  {
    name: 'Urbanisme',
    slug: 'urbanisme',
    blogs: [
      {
        title: 'urbanisme 1',
        slug: 'urban1',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 22,
          month: 'mar',
        },
      },
      {
        title: 'urbanisme 2',
        slug: 'urban2',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 21,
          month: 'mar',
        },
      },
      {
        title: 'urbanisme 3',
        slug: 'urban3',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: {
          day: 20,
          month: 'mar',
        },
      },
    ],
  },
]

export const getAllCategories = () => Promise.resolve(data)
