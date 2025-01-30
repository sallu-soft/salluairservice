/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'services',
    type: 'document',
      title: 'Services',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
    ]
  }