/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'whatwedo',
    type: 'document',
      title: 'WhatWeDo',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
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