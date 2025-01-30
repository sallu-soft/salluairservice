

import React, { useState } from 'react'
import Destinations from './destination'
const uniqueCountry = [
    ...new Set(Destinations.map((country)=>{
      return country.country
    }))
  ]
const DestinationCountry = ({setCountryData}) => {
    const [click, setClick] = useState(false);
    const [menuButton] = useState(uniqueCountry);
    const filterCountry = (country)=>{
        const updatedCountry = Destinations.filter((curCountry)=>{

            return curCountry.country === country
        })
        setCountryData(updatedCountry)
    }
  return (
    <>
    <button className="transition-all hover:shadow-xl hover:shadow-gray-700 cursor-pointer duration-300 p-4 text-lg md:text-xl border-2 border-yellow-400 w-fit lg:text-2xl tracking-widest bg-white" onClick={()=> setCountryData(Destinations)}>All</button>
    {
        menuButton.map((curelm)=>{
        return (<button className=" transition-all hover:shadow-xl hover:shadow-gray-700 cursor-pointer duration-300 p-4 text-lg md:text-xl border-2 border-yellow-400 w-fit lg:text-2xl  tracking-widest bg-white" key={curelm} onClick={()=> filterCountry(curelm)}>{curelm}</button>
        )
        })
    }
    
    </>
  )
}

export default DestinationCountry