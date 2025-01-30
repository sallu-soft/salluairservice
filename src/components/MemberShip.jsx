import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MemberShip = ({memberData}) => {
  return (<>
    {memberData.map((item, index)=>{
       return <Link key={item.title} href={item.link} target="_blank"><Image src={item.imageUrl} alt={item.title} width={200} height={200} className="w-[150px] md:w-[200px]" /> </Link>
    })}
    </>
  )
}

export default MemberShip