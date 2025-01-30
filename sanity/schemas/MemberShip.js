/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'membership',
    type: 'document',
      title: 'MemberShip',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
    ]
  }