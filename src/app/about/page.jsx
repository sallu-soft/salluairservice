"use client"

import Banner from "@/components/Banner"
import Management from "@/components/GalleryComponent"
import Title from "@/components/Title"
import Image from "next/image"
import {Titillium_Web } from 'next/font/google';
import Counter from "@/components/Counter"
const tw = Titillium_Web({ subsets: ['latin'] ,weight: '400' });
export default function about() {
  
  return (
    <>
    <Banner title="About Us"/>
    <section className="about-us z-auto  py-4 md:py-8 flex justify-center  items-center flex-col md:h-fit h-fit max-h-full">
    
    <div className="flex gap-x-5 lg:mx-[80px] xl:mx-[180px] xl:ml-[120px] sm:mx-[30px] mx-[10px] flex-wrap py-5 justify-center">
    <div className="md:w-[40%] flex flex-col w-[100%]">
    <Image src="/construction2.jpg" className="w-full" alt="about hero" width={500} height={400}/>
        <Image src="/ship2.jpg" className="w-full h-[30%]" alt="about hero" width={500} height={200}/>    
        
        <div className="flex flex-col flex-wrap">
          <div className="flex bg-yellow-700  px-1 lg:px-5 md:px-0 w-[100%] p-4 md:p-0 justify-center md:justify-start"><span className="w-fit md:p-5 p-2 text-white lg:text-6xl md:text-4xl text-xl font-bold" >20 </span><span className="text-white flex justify-center items-center lg:text-xl md:text-lg text:sm leading-8 tracking-widest">Years Of Experience</span></div>
          <div className="flex flex-col bg-white  w-full justify-center items-center p-4 md:p-0"><span className="tracking-widest text-lg text-center text-gray-600 font-semibold">Get your FREE Consultation Today! </span><span className="text-xl">+88 01779652600,</span></div>
          </div>    
        </div>
        <div className="md:w-[47%]  w-[100%] p-5">
        <span className="text-start flex items-start justify-start w-fit"><Title  title="About Us"/></span>
      <div className="">
        
     
        <h3 className={`${tw.className} md:text-7xl text-4xl sm:tracking-widest font-semibold py-4 text-blue-800 leading-14`}>Welcome To
Hikma International</h3>
        <p className="text-gray-800 text-lg font-semibold sm:text-justify sm:leading-9 tracking-wide sm:p-4">Hikma International is a government certified global recruitment agency of Bangladesh. Our recruitment firm helps students, professionals, and skilled people in Bangladesh to fetch a relevant job. Our core aim is to deliver recruitment facilities to experienced and qualified habitats of Bangladesh. Our mission is to provide only the best manpower & staffing solutions according to the job specification to enhance the productivity that proves our credibility and promote prosperity in the country.</p>
        <h3 className={`${tw.className} md:text-5xl text-3xl sm:tracking-widest  font-semibold py-4 text-blue-800 leading-14 md:pt-5 pt-2`}>Licenses And Certifications:</h3>
        <p className="text-gray-800 text-lg font-semibold sm:text-justify leading-9 tracking-wide sm:p-4">We are a licensed organization and have always followed professional and moral ethics in our functioning. We have acquired Recruiting License No: RL-2355 from the government of Bangladesh to function as a legal entity.</p>
      {/* <div className="py-2 ">
        <span className="flex items-center gap-3"> <Image src="/about-3.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Explore top place over the world</h2></span>
      </div>
      <div className="py-2">
        <span className="flex items-center gap-3"> <Image src="/about-2.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Affordable tour packages</h2></span>
      
      </div>
      <div className="py-2">
        <span className="flex items-center gap-3"> <Image src="/about-2.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Experienced tour guide</h2></span>
      </div> */}
      </div>
      </div>
        </div>
    </section>


    {/* <div className="h-fit bg-blue-600  py-14 mx-auto w-full">
    
    
    <Counter />
  </div> */}
    {/* <section className="about-us py-9 text-white flex justify-center md:h-[80vh] h-[105vh] items-center flex-col bg-gray-800">
    <h2 className="text-center py-2 md:mt-0 text-2xl font-semibold md:text-3xl text-white lg:text-5xl pt-2 md:pt-10">Managing Directors Message</h2>
    <div className="flex gap-x-5 gap-y-7 lg:mx-[80px] bg-gray-800 xl:mx-[180px] xl:ml-[300px] mx-[30px]  flex-wrap py-0 md:py-5 justify-center items-center">
      <div className="md:w-[50%] w-[100%] h-[40vh]">
        <h3 className="text-4xl font-semibold py-4">Mr. Md. Mainul Islam</h3>
        <p className="text-2xl font-semibold ">Managing Partner</p>
        <p className="text-gray-00 font-semibold text-justify">Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat aliquip commodo ipsum officia in Lorem commodo aliquip dolore. Nisi domip excepteur commodo ea nostrud mollit.</p>
     
      </div>
      <div className="md:w-[47%] flex items-center h-fit  justify-center">
        <Image src="/hikmamp.jpg" alt="about hero" class="rounded-full w-[400px] h-[400px] " width={400} height={400}/>    
        </div>
        </div>
    </section>
    <Management/> */}
    </>
  )
}