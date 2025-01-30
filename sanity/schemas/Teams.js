/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'teams',
    type: 'document',
      title: 'Teams',
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
        type: 'image',
        title: 'Image'
      },
    ]
  }