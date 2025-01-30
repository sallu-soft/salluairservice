import HeroSection1 from '@/components/HeroSection1';
import { client } from '../../sanity/lib/client';
import { Titillium_Web } from 'next/font/google';
import Title from '@/components/Title';
import WhatWeAre from '@/components/WhatWeAre';
import { groq } from 'next-sanity';
import ServicesCard from '@/components/ServicesCard';
import AboutUs from '@/components/AboutUs';
import MissionVission from '@/components/missinvission/Misson&Vission';
import Counter from '@/components/Counter';
import Image from 'next/image';
import Link from 'next/link';
import MemberShip from '@/components/MemberShip';
import CountriesComp from '@/components/CountriesComp';
import ServicesMain from '@/components/ServicesMain';
import Contact from '@/components/Contact';
import Teams from '@/components/team/Teams';


const tw = Titillium_Web({ subsets: ['latin'] ,weight: '700' });
// const uniqueCountry = [
//   ...new Set(Destinations.map((country)=>{
//     return country.country
//   }))
// ]



async function getData() {
  const query = `*[_type == "herosection"]{
    "imageUrl": image.asset->url,
    title,
    description,
    }`;
 return client.fetch(query)
};
export const revalidate = 60;
async function getWwdData() {
  const query = groq`*[_type == "whatwedo"]{
    "imageUrl": image.asset->url,
    title,
    description,
    }`;
 return client.fetch(query);


 
}
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
async function getAbout() {
  const query = groq`*[_type == "homeabout"]{
    "imageUrl": image.asset->url,
    title,
    description
  }`;
  return client.fetch(query);

}
async function getMV() {
  const query = groq`*[_type == "missionvission"]{
    "imageUrl": image.asset->url,
    title,
    description
  }`;
  return client.fetch(query);

  
}

async function getMemberShip() {
  const query = groq`*[_type == "membership"]{
    "imageUrl": image.asset->url,
    title,
    link
  }`;
  return client.fetch(query);

  
}
async function getCountries() {
  const query = groq`*[_type == "countries"]{
    "imageUrl": image.asset->url,
    country_name
  }`;
  return client.fetch(query);

  
}
async function getCounters() {
  const query = groq`*[_type == "counters"]{
    title,
    number
  }`;
  return client.fetch(query);

  
}
async function getTeams() {
  const query = groq`*[_type == "teams"]{
    "imageUrl": image.asset->url,
    name,
    position,
    description
  }`;
  return client.fetch(query);

  
}
const Home  = async () =>{
  const [heroData, wwdData,  serviceData, homeAboutData,missionvisionData,memberShipData,countriesData,counterData,teamsData] = await Promise.all([getData(),getWwdData(),getServiceData(),getAbout(),getMV(),getMemberShip(),getCountries(),getCounters(),getTeams()])
  // console.log(wwdData)
  return (
    <div className="bg-white">
    
    
    <HeroSection1 data={heroData}/>
    {/* <div className="py-7 md:w-[85%] w-[95%] mx-auto">
    <Title title={"What We Do?"}/> 
    <h2 className={`${tw.className} font-bold md:text-5xl text-3xl tracking-widest py-4 w-fit px-4 md:px-0`}>Why Work With Sallu Air Service?</h2>
    <p className="text-gray-600 text-justify w-fit px-4 md:px-0">hello With in-depth knowledge of the global job market and unparalleled recruiting expertise, we place specialists into their matching fields. Our staffing services cater to jobs and man-power supply in the fields of Construction, Engineering, Production & Packaging, Textiles, Transportation & Taxi Services, Pharmaceuticals, Warehouse Management, Accounts, HR, Healthcare and Cabin Crew recruitment.</p>
  
    </div>
    <div className="w-[95%] mx-auto">
    <WhatWeAre data={wwdData} />
    </div> */}
     {serviceData && <ServicesMain serviceData={serviceData}/>}
     {homeAboutData && <AboutUs data={homeAboutData} />}
        {missionvisionData && <div className="min-h-[70vh] ">
    <Title  title="Mission & Vission"/>
    
    <div className="py-8"><MissionVission data={missionvisionData}/></div>
 </div>}
 <div className="h-fit bg-orange-600  py-10 mx-auto w-full">
    
    
   {counterData && <Counter counter={counterData}/>} 
  </div>
  {teamsData && <section className="team mt-1 ">
    <Title title="Our Team"/>

    <div className="flex lg:mx-[80px] mx-[20px] justify-center gap-8 flex-wrap py-7">
    <Teams teamsData={teamsData}/>
 
    </div>
    </section>}
  {memberShipData && <section className="membership mt-1 ">
    <Title title="Our Membership"/>

    <div className="flex lg:mx-[80px] mx-[20px] justify-center gap-8 flex-wrap py-7">
      <MemberShip memberData={memberShipData}/>
 
    </div>
    </section>}
    {/* {countriesData && <div className='py-[50px]'>
    <Title title="Our Source Of Countries"/>
    <CountriesComp countries={countriesData}/>
    </div>} */}
   <Contact/>
    </div>
    

  )
}
export default Home;

