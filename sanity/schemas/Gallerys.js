/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'gallerys',
    type: 'document',
      title: 'Gallerys',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
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