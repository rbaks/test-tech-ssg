import { NestedBlog } from './types'

export const getFullDateStringInFrench = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export const getMonthDateStringInFrench = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', {
    month: 'short',
  })

export const sortMostRecent = (a: NestedBlog, b: NestedBlog) =>
  new Date(b.blog.first_publication_date).getTime() -
  new Date(a.blog.first_publication_date).getTime()
