
import Banner from '@/components/Banner';

import React from 'react';


import SingleService from '@/components/SingleService';
import { client } from '../../../../sanity/lib/client';
import { groq } from 'next-sanity';

async function getSingleServicesData(id) {
    const query = groq`*[_type == "services" && slug.current=="${id}"]{
     title,
    description,
    "imageUrl": image.asset->url,
     }`;
    return client.fetch(query);
    } 



const SingleServicesPage = async (context) => {
    const id = context.params.id;
    console.log(id)
    const jobData = await getSingleServicesData(id);
   console.log(jobData)
  return (
    <section className="services min-h-[70vh]">
   <Banner title={jobData[0]?.title}/>
    
        <SingleService job={jobData}/>
    
      
    </section>
  
  )
}

export default SingleServicesPage