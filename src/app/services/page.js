
import Banner from '@/components/Banner';
import ServicesCard from '@/components/ServicesCard'
import ServicesMain from '@/components/ServicesMain';
import Services from '@/components/services';
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';


async function getServiceData() {
  const query = groq`*[_type == "services"]{
   "imageUrl": image.asset->url,
   title,
   category,
   description,
   slug
   }`;
  return client.fetch(query);
  } 
  export const revalidate = 60;
const ServicesPage = async () => {
    const servicesData = await getServiceData();
    console.log(servicesData)
  return (
    <section className="services min-h-[70vh]">
   <Banner title="Services"/>
    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
        <ServicesMain serviceData={servicesData}/>
      </div>
      
    </section>
  
  )
}

export default ServicesPage