
"use client"
import React, { useState } from 'react'
import Team from './RecentWork'
import TeamCard from './RecentCard'
import Image from 'next/image'
import RecentCard from './RecentCard'
import RecentWork from './RecentWork'

const Recent = () => {
    const [memberData, setMemberData] = useState(RecentWork)
  return (
    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap mt-10">
  <RecentCard memberData={memberData}/>
  </div>

  )
}

export default Recent