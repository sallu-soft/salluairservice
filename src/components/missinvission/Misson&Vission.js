
import Team from './missiionData'
import TeamCard from './MissionVissionCard'
import Image from 'next/image'
import MissionData from './missiionData'
import MissionVissionCard from './MissionVissionCard'

const MissionVission = ({data}) => {
    
  return (
    <div className="flex lg:mx-[80px]  md:mx-[20px] mx-[14px] flex-col justify-center flex-wrap ">
  <MissionVissionCard Data={data}/>
  </div>

)
}

export default MissionVission