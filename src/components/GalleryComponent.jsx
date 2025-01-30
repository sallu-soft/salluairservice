'use client'
import React, { useState } from 'react'
import Banner from './Banner'
import Image from 'next/image'
import GalleryMenu from './GalleryMenu'
import GalleryCard from './GalleryCard'
import { BsChatRight } from 'react-icons/bs'

const GalleryComponent = ({gallery}) => {
    const [countryData, setCountryData] = useState(gallery);
    console.log(gallery);
    const imgArray = gallery.map((item,i)=>item.imageUrl);
    console.log(imgArray)
    const [data , setData] = useState({img:"",i:0});
    
    const imgAction = (action)=>{
      let i =  data.i;
      if(action === "next-img"){
        setData({img:imgArray[i+1],i:i+1});
      }
      if(action === "prev-img"){
        setData({img:imgArray[i-1],i:i-1});
      }
    }
  return (
<>
{data.img && 
      <div className="w-[100%] h-[100vh] bg-black fixed flex justify-center items-center">
        <span onClick={()=>setData({img:"",i:0})} className="absolute text-white font-semibold text-4xl top-10 cursor-pointer right-10">x</span>
        <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold mr-3" onClick={()=> imgAction("prev-img")} > Prev</button>
          <Image src={data.img} className="w-[70%] sm:w-[70%] md:max-w-[90%] md:max-h-[80%]  " alt="gallery Image" width={500} height={500} />
          <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold ml-3" onClick={()=> imgAction("next-img")}>Next</button>
        </div>} 

  {!data.img &&  <section className="">
    
    <Banner title="Photo Gallery" />
    <div className="flex  bg-white shadow-[30px_35px_60px_15px_rgba(0,0,0,0.2)] my-2 mx-16 rounded justify-center p-4 md-m flex-wrap">
    <GalleryMenu gallery={gallery} countryData={countryData} setCountryData={setCountryData} />
    
    </div>
    <div className="flex md:mx-[0px] justify-center flex-wrap py-2">
    <GalleryCard countryData={countryData} setData={setData} data={data} />
    </div>
  </section>} </>
  )
}

export default GalleryComponent