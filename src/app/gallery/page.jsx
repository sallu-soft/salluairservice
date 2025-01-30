


import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../sanity/lib/client';
import GalleryComponent from '@/components/GalleryComponent';


async function getServiceData() {
  const query = groq`*[_type == "gallerys"]{
   "imageUrl": image.asset->url,
   
   category,
   name,
   }`;
  return client.fetch(query);
  }
const GalleryPage = async () => {
    const servicesData = await getServiceData();
    console.log(servicesData)
  return (
    <section className="services min-h-[70vh]">
  
    
   
   <GalleryComponent gallery={servicesData}/>
    
 
    </section>
  
  )
}

export default GalleryPage