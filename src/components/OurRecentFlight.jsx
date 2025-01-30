// import Image from 'next/image';
// import React, { useEffect, useState } from 'react'

// const OurRecentFlight = () => {
// const imageSlide = [
//   {
//     url:"/qatar.jpg",
//     title:"Explore the world togather",
//     body:"Find awesome flights, Hotel, Tour, and Packages"
//   },
//   {
//     url:"/hero2.jpg",
//     title:"Hello Whorld",
//     body:"lorem ipsum dolor sit amet"
//   },
//   {
//     url:"/hero3.jpg",
//     title:"Hello Whorld",
//     body:"lorem ipsum dolor sit amet"
//   },
// ]
//   const [currentState,setCurrentState] = useState(0);
//   useEffect(() =>{
//     const timer = setTimeout(() =>{
//       if(currentState ===2){
//         setCurrentState(0);
//       }else{
//         setCurrentState(currentState+1);
//       }
//     }
//   ,5000)
//   return () => clearTimeout(timer)},[currentState]);
//   const bgImageStyle = {
//     backgroundImage: ` url(${imageSlide[currentState].url})`,
//     backgroundPosition:"center",
//     backgroundSize:"cover",
//     height:"70vh"
//   }
//   const goToNext = (currentState) => {
//     setCurrentState(currentState);
//   }
//   return (
//     <div style={bgImageStyle} className="relative ">
//       <div className="flex flex-col justify-center items-center min-h-[70vh]">
//     <h2 className="text-white text-3xl md:text-5xl  lg:text-8xl font-bold text-shadow pb-5 brightness-200 ">{imageSlide[0].title}</h2>
//     <h3 className="text-white  md:text-2xl lg:text-4xl font-semibold">{imageSlide[0].body}</h3>
//     <div className='carousel-boult flex justify-center items-center absolute bottom-1
//     '>
//         {
//           imageSlide.map((imgSlide,currentState) =>{
//           return  <Image src={imgSlide.url} height={100} width={100} alt={imgSlide.title} key={currentState} className="w-[150px] cursor-pointer h-[100px] bg-red-800 ml-[10px] rounded-lg" onClick={()=>goToNext(currentState)}/>
//           })
//         }
//     </div>
//     </div>
   
//     </div>
//   )
// }

// export default OurRecentFlight