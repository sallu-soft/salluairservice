import Banner from '@/components/Banner';
import ServicesCard from '@/components/ServicesCard'
import ServicesMain from '@/components/ServicesMain';
import Services from '@/components/services';
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../sanity/lib/client';
import JobsOpening from '@/components/JobsOpening';
import Title from '@/components/Title';


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
const JobsPage = async () => {
    const jobsData = await getJobsData();
    const reversedJobs = jobsData.reverse()
    console.log(jobsData)
  return (
    <section className="jobs min-h-[70vh]">
  
   <Banner title="Jobs Opening"/>
   <Title title="Jobs"/>
   <div className="flex flex-wrap py-8 mx-auto w-[90%] justify-center">
   <JobsOpening jobs={reversedJobs}/>
    
   </div>
     
    </section>
  
  )
}

export default JobsPage