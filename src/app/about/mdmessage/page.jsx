
import Banner from '@/components/Banner'
import { groq } from 'next-sanity';
import Image from 'next/image'
import React from 'react'
import { client } from '../../../../sanity/lib/client';


async function getMdProfile() {
  const query = groq`*[_type == "mdprofile"]{
    "imageUrl": image.asset->url,
    name,
    position,
    description
  }`;
  return client.fetch(query);

  
}
const MdMessagePage = async () => {
  const mdData = await getMdProfile();
  return (
    <>
   {mdData &&  <div className="min-h-[70vh] bg-white">
    <Banner  title="Managing Director's Message"/>
    {/* <Management/> */}
    <section className="about-us py-20 md:py-9 flex justify-center md:h-[100vh] max-h-fit items-center flex-col text-gray">
    <div className="md:w-[47%] flex items-center h-full justify-center">
        <Image src={mdData[0]?.imageUrl} alt="about hero" class="rounded-full sm:w-[400px] sm:h-[400px] h-[300px] w-[300px]" width={400} height={400}/>    
        </div>
    <div className="flex gap-x-5 gap-y-7 lg:mx-[80px] xl:mx-[180px] xl:ml-[300px] mx-[30px]  flex-wrap py-0 md:py-5 justify-center items-center">
      <div className="md:w-[50%] w-[100%] h-[40vh]">
        
        <p className="text-gray-00 font-semibold text-justify">{mdData[0]?.description}</p>
        <h3 className="text-4xl font-semibold pt-4 ">{mdData[0]?.name}</h3>
        <p className="text-2xl py-1 font-semibold ">{mdData[0]?.position}</p>
      </div>


     
        </div>
    </section>
</div>}</>
  )
}

export default MdMessagePage