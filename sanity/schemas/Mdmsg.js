/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'mdprofile',
    type: 'document',
      title: 'MD Profile',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
    {
        name: 'position',
        type: 'string',
        title: 'Position'
      },
    {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'image',
        options: {
            hotspot: true,
          },
        type: 'image',
        title: 'Profile Picture'
      },
    ]
  }