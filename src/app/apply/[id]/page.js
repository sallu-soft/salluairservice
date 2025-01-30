
import Banner from '@/components/Banner';

import { groq } from 'next-sanity';
import React from 'react';

import ApplyMain from '@/components/ApplyMain';
import { client } from '../../../../sanity/lib/client';

async function getJobsData(id) {
    const query = groq`*[_type == "jobs" && slug.current=="${id}"]{
     country_name,
    company_name,
    published_date,
     }`;
    return client.fetch(query);
    } 



const ApplyPage = async (context) => {
    const id = context.params.id;
    
    const jobData = await getJobsData(id);
   console.log(jobData)
  return (
    <section className="services min-h-[70vh]">
   <Banner title="Apply For Job"/>
    
        <ApplyMain job={jobData}/>
    
      
    </section>
  
  )
}

export default ApplyPage