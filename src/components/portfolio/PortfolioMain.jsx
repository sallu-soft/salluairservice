'use client'
import React, { useState } from 'react'

import PortfolioMenu from './PortfolioMenu'
import PortfolioCard from './PortfolioCard'

const PortfolioComponent = ({portfolio}) => {
    const [countryData, setCountryData] = useState(portfolio);
    
    
  return (
<>
 <section className="">
    
    
    <div className="flex  bg-white shadow-[30px_35px_60px_15px_rgba(0,0,0,0.2)] my-2 mx-16 rounded justify-center p-4 md-m flex-wrap">
    <PortfolioMenu portfolio={portfolio} countryData={countryData} setCountryData={setCountryData} />
    
    </div>
    <div className="flex md:mx-[0px] justify-center flex-wrap py-2">
    <PortfolioCard countryData={countryData}/>
    </div>
  </section> </>
  )
}

export default PortfolioComponent