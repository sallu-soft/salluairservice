
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import MissionVission from '@/components/missinvission/Misson&Vission'
import Teams from '@/components/missinvission/Misson&Vission'
import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../../sanity/lib/client'


async function getMV() {
  const query = groq`*[_type == "missionvission"]{
    "imageUrl": image.asset->url,
    title,
    description
  }`;
  return client.fetch(query);

  
}
const MissionVissionPage = async () => {
  const mvData = await getMV();
  return (
    <div className="min-h-[70vh] ">
    <Banner  title="Mission & Vission" img="bg-hero"/>
    {/* <Management/> */}
    {mvData && <div className="min-h-[70vh] ">
    <Title  title="Mission & Vission"/>
    
    <div className="py-8"><MissionVission data={mvData}/></div>
 </div>}
</div>
  )
}

export default MissionVissionPage