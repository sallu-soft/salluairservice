

import Image from 'next/image'
import React from 'react'

import Slider from 'react-slick'

const Countries = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  const country=[
    {
        name:"Saudia Arabia",
        url:"/ksa1.png"
    },
    {
        name:"Dubai",
        url:"/dubai1.jpg"
    },
    {
        name:"Qatar",
        url:"/qatar.png"
    },
    {
        name:"Oman",
        url:"/oman1.jpg"
    },
    {
        name:"Kuwait",
        url:"/kuwait.jpg"
    },
    {
        name:"Bahrain",
        url:"/bahrain.jpg"
    },
    {
        name:"Malaysia",
        url:"/malaysia1.png"
    },
  ]
  return (
    <div className="w-[90%] mx-auto">
    <Slider {...settings}>
        {
            country.map((country ,ind)=>{
                return <>
                    <div className="p-5 cursor-pointer flex justify-center items-center flex-col h-fit">
                    <Image src={country.url} width={200} height={100} alt="breakfast" className="card-image h-[200px] w-[200px] rounded-full bg-green-600 flex justify-center items-center"/> 
                    <span className="pt-2 font-bold text-lg">{country.name}</span>
                    </div>
                </>
            })
        }


    </Slider>
    </div>
  )
}

export default Countries