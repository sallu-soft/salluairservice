/* eslint-disable import/no-anonymous-default-export */
export const STATUS = [
    {title: 'Open', value: 'open'},
    {title: 'Closed', value: 'closed'},
    
  ]


export default {
    name: 'jobs',
    type: 'document',
      title: 'Jobs',
    fields: [
      {
        name: 'company_name',
        type: 'string',
        title: 'Company Name'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'company_name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'country_name',
        type: 'string',
        title: 'Country Name'
      },
      {
        name: 'published_date',
        type: 'date',
        title: 'Publish Date'
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: STATUS.map(({title, value}) => ({title, value})),
          layout: 'radio',
        },
      },
      {
        name: 'file',
        title: 'Upload File',
        type: 'file',
        options: {
            accept: '.pdf', // Limit to PDF files
          },
      },
      
      {
        name: 'image',
        type: 'image',
        options: {
            hotspot: true,
          },
        title: 'Thumbnail Image'
      },
     
    ]
  }