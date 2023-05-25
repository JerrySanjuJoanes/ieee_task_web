import React from 'react'




const Navigator = () => {
  return (
    <div className='  bg-gradient-to-r from-slate-800 to-black flex justify-end w-full h-16 text-white  bg-blend-screen static ' >

      <div className='flex  gap-5  pt-8 pb-2 justify-center w-fit pr-4  '>
        
        <a href="" className='' >
          <button className='bg-slate-200 hover:bg-white hover:scale-105 text-black rounded-full  text-center' data-aos='slide-down'><span className=' rounded-full pr-2 pl-2'>Home</span></button>
        </a>
        <a href="https://cecieee.org/about" className='' >
          <button className='bg-slate-200 hover:bg-white hover:scale-105 text-black rounded-full  text-center' data-aos='slide-down'><span className=' pr-2 pl-2'>About Us</span></button>
        </a>
        <a href="https://cecieee.org/event-list" className='' >
        <button className='bg-slate-200 hover:bg-white hover:scale-105 text-black rounded-full text-center' data-aos='slide-down' ><span className=' pr-2 pl-2'>Eevents</span></button>
        </a>
        <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" className='' >
        <button className='bg-blue-500 hover:bg-blue-300 hover:scale-110 text-white rounded-full text-center' data-aos='slide-down'><span className=' pr-2 pl-2'>Join Us</span></button>
        </a>
        
        
        
      </div>
    </div>
  )
}

export default Navigator