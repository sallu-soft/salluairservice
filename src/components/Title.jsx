import React from 'react'

const Title = ({title}) => {
  return (
    <div className="text-center transition-all hover:shadow-xl hover:shadow-gray-700 cursor-pointer duration-300 p-4 text-lg md:text-xl border-2 border-yellow-400 w-fit mx-auto lg:text-2xl my-5 tracking-widest bg-white">{title}</div>
  )
}

export default Title