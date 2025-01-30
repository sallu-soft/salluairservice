
import Image from 'next/image'
import React from 'react'

const FeaturesCard = ({features}) => {
 
    const cardStyle = {
        width: '350px',
        height: '500px',
        backgroundSize:"cover",
        
        
        transition: 'background-image 0.3s ease-in-out',
      };
   
    
      const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundImage = 'none';
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.backgroundColor = "transparent";
      };
    
  return (
    <>
    {features.map((menu , )=>{
      return(
            

<div key={menu.description}
      className="flex justify-center items-center h-screen darkened-background "
      onMouseEnter={(e)=>{e.currentTarget.style.backgroundImage = `url('${menu.imageUrl}')`;e.currentTarget.style.filter = "brightness(1)";}}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div className="card bg-white w-full h-[500px] hover:bg-transparent hover:shadow-xl hover:shadow-black transition duration-500 rounded-lg p-4 flex justify-center items-center flex-col hover:text-white">
        <p className="text-3xl text-yellow-600 font-bold pb-4">{menu.id}</p>
        <h2 className="text-3xl font-bold mb-2 ">{menu.title}</h2>
        <p className=" leading-8">{menu.description}</p>
      </div>
    </div>


)
  })}
</>
  )
}

export default FeaturesCard