'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HeroSection1 = ({data}) => {
 

  const [currentState,setCurrentState] = useState(0);
  // const [dataset,setDataSet] = useState(data);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      if(currentState ===0){
        setCurrentState(0);
      }
      else if(currentState ===1){
        setCurrentState(0);
      }
      else if(currentState ===2){
        setCurrentState(0);
      }
      else{
        setCurrentState(currentState+1);
      }
    }
  ,5000)
  return () => clearTimeout(timer)},[currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${data[currentState]?.imageUrl})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:"80vh",
    transition:" 1s all",
  }
 
  
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  }
  return (
    <div  className="relative container1  w-screen " style={bgImageStyle}>
     
      <div className="flex  flex-col justify-center items-center min-h-[80vh]">
    <h2 className="text-white text-5xl md:text-5xl  lg:text-6xl xl:text-8xl font-bold text-shadow pb-5 brightness-500 text-center drop-shadow-xl shadow-black">{data[currentState]?.title}</h2>
    <h3 className="text-white md:px-20 px-6 text-center md:text-2xl lg:text-4xl font-semibold">{data[currentState]?.description}</h3>
    <div className='carousel-boult flex justify-center items-center absolute bottom-5
    '>
         {
          data.map((ind,currentState) =>{
          return  <span key={currentState} className="w-[100px] cursor-pointer h-[70px] flex justify-center items-center text-white border-white border ml-[10px] rounded-lg" onClick={()=>goToNext(currentState)}><Image src={ind.imageUrl} width={100} height={100} className="h-full w-fit rounded-lg " alt={"Background Image"} /></span>
          })
        }
    </div>
    </div>
    
    </div>
  )
}

export default HeroSection1;
