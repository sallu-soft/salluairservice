/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'certificates',
    type: 'document',
      title: 'Certificates',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      

      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
            hotspot: true,
          },
      },
    ]
  }