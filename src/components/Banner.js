import React from 'react'

const Banner = ({title,}) => {
  return (
    <div className={`bg-hero relative  h-[300px] bg-cover bg-no-repeat w-full  flex justify-center text-white md:text-5xl text-3xl  font-bold items-center` }>
        <div className="absolute h-[100%] w-[100%] opacity-75 top-0 left-0  bg-gray-800"><div className='flex justify-center items-center w-[100%] h-[100%] text-white opacity-100'><h2 className="text-white font-bold sm:text-4xl text-2xl"> {title}</h2></div></div>
       
    </div>
  )
}

export default Banner