
import Banner from '@/components/Banner'
import Management from '@/components/GalleryComponent'
import Teams from '@/components/team/Teams'
import { groq } from 'next-sanity'

import React from 'react'
import { client } from '../../../../sanity/lib/client'
import CertificateComponent from '@/components/CertificateComponent'
async function getCertificate() {
  const query = groq`*[_type == "certificates"]{
    "imageUrl": image.asset->url,
   title
  }`;
  return client.fetch(query);

  
}
const CertificatePage = async () => {
  const certificateData = await getCertificate();
  console.log(certificateData)
  return (
    <div className="min-h-[70vh]">
        <Banner title="Certifications" img="bg-hero"/>
        <div className="">
        <CertificateComponent certificateData={certificateData}/>
        </div>
    </div>
  )
}

export default CertificatePage;