
'use client'
import React, { useState } from 'react'
import Destinations from './destination'

const GalleryMenu = ({countryData,gallery,setCountryData}) => {
  console.log(countryData)
    // const [click, setClick] = useState(false);
    const uniqueCategory = [
      ...new Set(gallery.map((country)=>{
        return country.category
      }))
    ]
    const [menuButton] = useState(uniqueCategory);
  
    const filterCountry = (country)=>{
        const updatedCategory = gallery.filter((curCountry)=>{

            return curCountry.category === country
        })
        
        setCountryData(updatedCategory)
    }
  return (
    <>
    <button className="transition-all hover:shadow-xl hover:shadow-gray-700 cursor-pointer duration-300 p-4 text-lg md:text-xl border-2 border-yellow-400 w-fit lg:text-2xl tracking-widest bg-white" onClick={()=> setCountryData(gallery)}>All</button>
    {
        menuButton.map((curelm)=>{
        return (<button className=" transition-all hover:shadow-xl hover:shadow-gray-700 cursor-pointer duration-300 p-4 text-lg md:text-xl border-2 border-yellow-400 w-fit lg:text-2xl  tracking-widest bg-white" key={curelm} onClick={()=> filterCountry(curelm)}>{curelm}</button>
        )
        })
    }
    
    </>
  )
}

export default GalleryMenu