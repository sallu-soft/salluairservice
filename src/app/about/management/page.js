
import Banner from '@/components/Banner'
import Management from '@/components/GalleryComponent'
import Teams from '@/components/team/Teams'
import { groq } from 'next-sanity'

import React from 'react'
import { client } from '../../../../sanity/lib/client'
async function getTeams() {
  const query = groq`*[_type == "teams"]{
    "imageUrl": image.asset->url,
    name,
    position,
    description
  }`;
  return client.fetch(query);

  
}
const ManagementPage = async () => {
  const teamsData = await getTeams();
  return (
    <div className="min-h-[70vh] ">
        <Banner title="Management Team" img="bg-hero"/>
        
        <Teams teamsData={teamsData}/>
    </div>
  )
}

export default ManagementPage