const data = [
  {
    name: 'Aménagement',
    slug: 'amenagement',
    blogs: [
      {
        title: 'amenagement 1',
        slug: 'amen1',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: '2022-03-22',
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
        publishedAt: '2022-03-20',
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
        publishedAt: '2022-03-22',
      },
      {
        title: 'urbanisme 2',
        slug: 'urban2',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: '2022-03-21',
      },
      {
        title: 'urbanisme 3',
        slug: 'urban3',
        thumbnail: '/assets/images/thumbnail.webp',
        publishedAt: '2022-03-20',
      },
    ],
  },
]

console.log(data[0].blogs[0].publishedAt)
