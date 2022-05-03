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
