import Image from 'next/image'
import React, { useState } from 'react'

const DestinationCard = ({countryData ,setData, data}) => {
 
 
  const viewImage = (img,i)=>{
    setData({img,i});
    console.log(data.img)
  }
  return (
    <>

   
          {countryData.map((menu , i)=>{
            return(<>
        <div className="rounded-lg shadow-xl xl:w-[500px] md:w-[400] bg-white w-[350px] xl:h-[500px] md:h-[400px] h-[350px] m-1 relative  overflow-hidden">
            
                <div className=" transition duration-300 ease-in-out hover:scale-110" >  
             <Image src={menu.images} width={300} height={100} alt="breakfast" onClick={()=> viewImage(menu.images , i )} className="card-image h-[400px] md:h-[500px] w-[350px] md:w-[500px] rounded-t-lg"/></div>
             {/* <div className="p-5">
                 <span className="text-2xl font-semibold">{menu.country}</span>
                 <h2 className="card-title">{menu.description}</h2>
                
                 </div> */}
            
         </div></>)
        })}
    </>
  )
}

export default DestinationCard