export interface Blog {
  title: string
  slug: string
  thumbnail: string
  publishedAt: string
  content: string
}

export interface Category {
  name: string
  slug: string
  blogs: Blog[]
}
