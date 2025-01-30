import Image from 'next/image'
import React from 'react'

const RecentCard = ({memberData}) => {
  return (
     <>
   
  <div class="relative overflow-x-auto hover:shadow-lg sm:rounded-lg w-full rounded-lg">
    <table class="w-full text-sm text-left text-blue-800 dark:text-blue-100">
        <thead class="text-xs text-blue-700 uppercase bg-white dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                   NO
                </th>
                <th scope="col" class="px-6 py-3">
                    Project Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
                <th scope="col" class="px-6 py-3">
                    Client
                </th>
               
            </tr>
        </thead>
        <tbody>
        {memberData.map((menu)=>{
         return(<>
            <tr class="bg-blue-500 text-white border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {menu.id}
                </th>
                <td class="px-6 py-4">
                    {menu.project}
                </td>
                <td class="px-6 py-4 font-semibold">
                    {menu.location}
                </td>
                <td class="px-6 py-4">
                    {menu.client}
                </td>
               
            </tr>
           </>)
        })}
        </tbody>
    </table>
</div>
</>
  )
}

export default RecentCard