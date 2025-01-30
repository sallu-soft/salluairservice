'use client'
import React, { useState } from 'react'
import Title from './Title'

const ApplyMain = ({job}) => {

    const [file , setFile] = useState(null);
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
          fullname:String(e.target.fullname.value),
          company:String(job[0].company_name),
          country:String(job[0].country_name),
          email:String(e.target.email.value),
          phone:String(e.target.phone.value),
        //   text:String(e.target.text.value),
          // attachment:String(file),
        }
      
       console.log(data)
       const response = await fetch("/api/apply",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
  
        },
        body:JSON.stringify(data),
       });
       
       if(response.ok) {
        alert("Your Appilication was successfully applied!! You will notify Very Soon")
        console.log("Massege Sent Successfully");
          e.target.fullname.value="";
          e.target.email.value="";
          e.target.phone.value="";
       }
       if(!response.ok){
        console.log("Error On Sending Massege" )
       }
      }
    
  return (
    <div>
       <Title title={job[0].company_name}/>
         <form 
         onSubmit={handleSubmit}
          className=" 
    gap-y-10 gap-2 mx-[80px] md:mx-[200px] lg:mx-[350px] pb-8">
      <div className="flex md:flex-row flex-col gap-3 w-[100%] mb-4 gap-y-6"><input className="w-full p-3  border-2 focus:border-dashed border-yellow-600" required name="fullname" type="text"  placeholder="Full name"/>
     
      </div>
      <div className="flex gap-6 w-[100%] mb-4 md:flex-row flex-col"><input className="md:w-[49%] w-full p-3 border-2 border-yellow-600" type="text" name="email" required placeholder="Email Address"/>
      <input className="md:w-[49%] w-full p-3 border-2 border-yellow-600" required type="text" name="phone" placeholder="Phone Number"/></div>
      {/* <div className="flex gap-3 w-[100%] mb-4 md:flex-row flex-col"> <input className=" w-full p-3  border-2 focus:border-dashed border-yellow-600"  type="file" name="attachment"
       onChange={handleFileChange} accept=".pdf"
       required /></div> */}
<div className="flex gap-3 w-[100%] mb-4 md:flex-row flex-col">
<textarea className=" w-full p-3  border-2 focus:border-dashed border-yellow-600" placeholder='Describe About Your Self' name="text" required />
</div>

      <div className="flex justify-center"><button type="submit" className="px-6 py-2 text-xl font-semibold border-[#baa204] duration-700 border-2 my-2 flex justify-center hover:bg-[#baa204] text-[#baa204] hover:text-white mt-5">Apply</button></div>
        
      
    </form></div>
  )
}

export default ApplyMain