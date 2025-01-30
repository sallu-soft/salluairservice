import React from 'react'

const Counter = ({counter}) => {
  return (
    <div className="flex my-8 mx-auto w-[70%] md:flex-row flex-col justify-around items-center gap-y-4">
        {counter[0] && <div className="w-6/12 max-w-full px-3 text-center flex-0 lg:w-3/12">
  <div className="py-4  rounded-lg border-slate-400">
    <h6 className="text-white flex flex-col justify-center items-center gap-4"><span className="text-xl flex flex-col tracking-widest font-tighter leading-8"> {counter[0]?.title}</span><span className="text-6xl ">{counter[0]?.number}</span>  </h6>
    <h4 className="font-bold dark:text-white">
   
    </h4>
  </div>
</div>}
{counter[1] &&  <div className="w-6/12 max-w-full px-3 text-center flex-0 lg:w-3/12">
  <div className="py-4  rounded-lg border-slate-400">
    <h6 className="text-white flex flex-col justify-center items-center gap-4"><span className="text-xl flex flex-col tracking-widest font-tighter leading-8"> {counter[1]?.title}</span><span className="text-6xl ">{counter[1]?.number}</span>  </h6>
    <h4 className="font-bold dark:text-white">
   
    </h4>
  </div>
</div>}
     {counter[2] &&   <div className="w-6/12 max-w-full px-3 text-center flex-0 lg:w-3/12">
  <div className="py-4  rounded-lg border-slate-400">
    <h6 className="text-white flex flex-col justify-center items-center gap-4"><span className="text-xl flex flex-col tracking-widest font-tighter leading-8"> {counter[2]?.title}</span><span className="text-6xl ">{counter[2]?.number}</span>  </h6>
    <h4 className="font-bold dark:text-white">
   
    </h4>
  </div>
</div>}
 

    </div>
  )
}

export default Counter