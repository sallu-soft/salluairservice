import Image from 'next/image'
import React from 'react'

const TeamCard = ({memberData}) => {
  return (
     <>
    {memberData.map((menu)=>{
      return(<>
  <div className="rounded-lg shadow-xl md:w-[350px] bg-white w-[400px] m-3 relative overflow-hidden flex flex-col">
      
          <div className=" transition duration-300  ease-in-out hover:scale-110">
       <Image src={menu.imageUrl} width={300} height={100} alt="breakfast" className="card-image h-[350px] md:h-[300px] w-[400px] md:w-[350px] rounded-t-lg"/></div>
         
       <div className="p-5 text-center space-y-2">
           <span className="text-2xl font-semibold">{menu.name}</span>
           <h2 className="card-title text-xl text-green-800">{menu.position}</h2>
           <p className="py-1 px-3 text-lg font-semibol text-gray-500">{menu.description}</p>
          
           </div>
      
   </div></>)
  })}
</>
  )
}

export default TeamCard