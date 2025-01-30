import Image from 'next/image'
import React from 'react'

const SingleService = ({job}) => {
  return (
    <div>
        <h2 className="text-center text-2xl text-yellow-800 font-extrabold py-5">{job[0]?.title}</h2>
        <Image src={job[0]?.imageUrl}  width={700} height={1000} alt={job[0]?.title} className="card-image w-fit mx-auto object-cover  rounded-t-lg pb-5"/>
        <p className="md:w-[600px] mx-auto py-4 leading-9 md:px-1 px-5">{job[0]?.description}</p>
        </div>
  )
}

export default SingleService