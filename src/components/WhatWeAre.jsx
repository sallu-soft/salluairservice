"use client"
import React, { useState } from 'react'
import whatwedoData from './whatwedoData';
import FeaturesCard from './FeaturesCard';


const WhatWeAre = ({data}) => {
   const [whatwedo,setWhatwedo] = useState(data);
   console.log(whatwedo)
  return (
    <div className="flex justify-center flex-wrap py-7 gap-4">
    <FeaturesCard features={data}/>
  </div>
  )
}

export default WhatWeAre;