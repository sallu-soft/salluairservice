import React from 'react'
import Title from './Title'
import ServicesCard from './ServicesCard'

const ServicesMain = ({serviceData}) => {
  return (
    <section className="services min-h-[70vh]">
 <Title title={"Services"}/>
   <div className="flex lg:mx-[40px] sm:mx-[20px] justify-center flex-wrap py-7">
    
      <ServicesCard services={serviceData}/>
    </div>   </section>
  )
}

export default ServicesMain