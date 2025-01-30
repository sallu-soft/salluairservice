/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'countries',
    type: 'document',
      title: 'Countries',
    fields: [
      {
        name: 'country_name',
        type: 'string',
        title: 'Country Name'
      },
      

      {
        name: 'image',
        type: 'image',
        title: 'Country Image'
      },
    ]
  }