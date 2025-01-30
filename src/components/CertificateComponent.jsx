'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Title from './Title'
import CertificateCard from './certificate/CertificateCard';
import CertificateMenu from './certificate/CertificateMenu';

const CertificateComponent = ({certificateData}) => {
    const [countryData, setCountryData] = useState(certificateData);
    
    const imgArray = certificateData.map((item,i)=>item.imageUrl);
    console.log(imgArray)
    const [data , setData] = useState({img:"",i:0});
    
    // const imgAction = (action)=>{
    //   let i =  data.i;
    //   if(action === "next-img"){
    //     setData({img:imgArray[i+1],i:i+1});
    //   }
    //   if(action === "prev-img"){
    //     setData({img:imgArray[i-1],i:i-1});
    //   }
    // }
  return (
<>
{data.img && 
      <div className="w-[100%] h-[100vh] bg-black 
      flex justify-center items-center  relative">
        <span onClick={()=>setData({img:"",i:0})} className=" text-white font-semibold text-4xl absolute sm:top-20 top-5 sm:right-20 right-7 border-2 border-white rounded-full p-2 cursor-pointer ">x</span>
        {/* <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold mr-3" onClick={()=> imgAction("prev-img")} > Prev</button> */}
          <Image src={data.img} className="w-fit md:max-h-[75%]  " alt="gallery Image" width={500} height={500} />
          {/* <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold ml-3" onClick={()=> imgAction("next-img")}>Next</button> */}
        </div>} 

  {!data.img &&  <section className="">
    
    
    <div className="flex  bg-white shadow-[30px_35px_60px_15px_rgba(0,0,0,0.2)] my-2 mx-16 rounded justify-center p-4 md-m flex-wrap">
    <CertificateMenu certificate={certificateData} countryData={countryData} setCountryData={setCountryData} />
    
    </div>
    <div className="flex md:mx-[0px] justify-center flex-wrap py-2">
    <CertificateCard countryData={countryData} setData={setData} data={data} />
    </div>
  </section>} </>)
}

export default CertificateComponent