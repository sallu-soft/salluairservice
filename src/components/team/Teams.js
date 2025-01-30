import React from 'react'
import Team from './teamMembers'
import TeamCard from './TeamCard'
import Image from 'next/image'

const Teams = ({teamsData}) => {
    
  return (
    <div className="flex lg:mx-[80px] sm:mx-[20px] justify-center flex-wrap ">
  <TeamCard memberData={teamsData}/>
  </div>

  )
}

export default Teams