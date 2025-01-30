import Image from 'next/image'
import React from 'react'
import Title from './Title'

const AboutUs = ({data}) => {
  return (
    <section className="about-us py-[40px] lg:h-[90vh] h-fit flex items-center flex-col justify-center ">
    <Title title="About Us"/>
    <div className="flex gap-y-8 md:gap-x-10 lg:w-[1100px] md:w-[600px] sm:w-fit w-fit justify-center lg:flex-row flex-col md:mx-auto flex-wrap py-8 lg:justify-between mx-10">
      <div className="lg:w-[47%] w-[100%] ">
        <h3 className="text-4xl font-semibold py-4 tracking-widest">{data[0]?.title}</h3>
        <p className="text-gray-700 font-semibold text-justify text-md leading-6">{data[0]?.description}</p>
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
      <div className="lg:w-[47%] flex items-center justify-center md:justify-start w-[100%] h-fit">
        <Image className="rounded-xl" src={data[0]?.imageUrl} alt="about hero" width={500} height={400}/>    
        </div>
        </div>
    </section>
  )
}

export default AboutUs