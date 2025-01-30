

import Image from 'next/image';
import React from 'react';


const CountriesComp = ({countries}) => {
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

console.log(countries)
  return (
    
    <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center">
    
        {
            countries.map((country ,ind)=>{
                return <div key={country.name} className="p-5 cursor-pointer flex justify-center items-center flex-col h-fit">
                    <Image src={country.imageUrl} width={200} height={100} alt={country.name} className="card-image h-[150px] w-[150px] md:w-[200px] md:h-[200px] rounded-full bg-green-600 flex justify-center items-center"/> 
                    <span className="pt-2 font-bold text-lg">{country.country_name}</span>
                    </div>
                
            })
        }

    
    </div>

  )
}

export default CountriesComp