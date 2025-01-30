import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortfolioCard = ({countryData }) => {
 
 
  
  return (
    <>

   
{countryData?.map((menu)=>{
      return(
  <div key={"menu.title"} className="rounded-t-lg bg-white shadow-md  border-b-4 border-[rgb(241,214,8)] m-3 relative flex justify-center flex-col items-center overflow-hidden text-center md:h-fit xs:w-[300px] md:w-[400px] shadow-black">
    <div className="">
  <Image src={menu.imageUrl}  width={300} height={400} alt={"menu.title"} className="card-image w-fit h-[250px] rounded-t-lg "/>
  </div>
          {/* <div className="max-w-xs transition duration-300  ease-in-out hover:scale-110 flex justify-center py-3">

         
       </div> */}
       <div className="px-5 pb-5 flex justify-center flex-col items-center">

           
           <span className="text-xl py-2 font-semibold tracking-wider text-center">{menu.country_name}</span>
           <span className="text-2xl font-semibold tracking-wider text-center">{menu.company_name}</span>
          
           <h2 className="pt-3 text-red-900 text-center text-lg tracking-wider">Publish Date: {menu.published_date}</h2>
           <div className="flex gap-4">
           <Link href={menu.fileUrl} target="_blank" className="mt-3 bg-[#232318] w-fit  rounded-lg p-3 text-white text-center font-bold text-xl tracking-wider cursor-pointer transition-all duration-200 hover:bg-[#26266b]">Circuler</Link>
           </div>
           </div>
      
   </div>
   )
  })} 
    </>
  )
}

export default PortfolioCard