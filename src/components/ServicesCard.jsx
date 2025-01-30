import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Link from 'next/link'

const ServicesCard = ({services}) => {
  return (
    <>
    
    {services?.map((menu)=>{
      return(
  <div key={menu.title} className="dark:bg-white rounded-t-lg shadow-md  border-b-4 border-[rgb(241,214,8)] m-3 relative flex justify-center flex-col items-center overflow-hidden text-center md:h-fit xs:w-[300px] md:w-[400px] shadow-black">
    <div className="relative ">
  <Image src={menu.imageUrl}  width={300} height={400} alt={menu.title} className="card-image w-fit object-cover sm:h-[350px] h-[250px] rounded-t-lg "/>
  <p className="text-md tracking-widest font-semibold text-center absolute bottom-0 bg-white p-3 shadow-lg border-yellow-400 border-2 dark:text-green-700">{menu.category}</p></div>
          <div className="max-w-xs transition duration-300  ease-in-out hover:scale-110 flex justify-center py-3">

         
       </div>
       <div className="px-5 pb-5 text">

           
           <span className="text-2xl font-semibold tracking-wider dark:text-black">{menu.title}</span>
           <h2 className="pt-3 text-gray-500 text-start md:tracking-wider">{menu.description.slice(0, 120)}</h2>
          
           </div>
      
   </div>)
  })}
</>
  )
}

export default ServicesCard