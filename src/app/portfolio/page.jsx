
import Banner from '@/components/Banner'
import PortfolioMain from '@/components/portfolio/PortfolioMain';
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../sanity/lib/client';



async function getJobsData() {
  const query = groq`*[_type == "jobs"]{
   "imageUrl": image.asset->url,
   "fileUrl": file.asset->url,
   company_name,
   country_name,
   status,
   published_date,
   slug
   }`;
  return client.fetch(query);
  }
const PortfolioPage = async () => {
  const portfolioData = await getJobsData();
  return (
    <div className='pb-[20px]'>
      <Banner title="Portfolio"/>
    <PortfolioMain portfolio={portfolioData}/>
    </div>
  )
}

export default PortfolioPage