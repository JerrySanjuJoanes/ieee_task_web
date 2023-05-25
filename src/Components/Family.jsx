import React from 'react'

function Family() {
  return (
    <div  className='h-fit w-screen pt-10 flex flex-wrap items-center flex-col overflow-x-hidden'>
        <div className='text-center text-5xl pt-5 pb-5 ' data-aos='slide-left'> <p>Our Family</p></div>
        <div className='flex flex-wrap justify-center items-center h-fit w-scren '>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/cs-logo.png)`}} className='h-48 w-80   hover:scale-110' data-aos='slide-left'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/ras-logo.png)`}} className='h-48 w-80  hover:scale-110 'data-aos='slide-left'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/ias-logo.png)`}} className='h-48 w-80  hover:scale-110 'data-aos='slide-left'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/wie-logo.png)`}} className='h-48 w-80  hover:scale-110 'data-aos='slide-left'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/pes-logo.png)`}} className='h-48 w-80  hover:scale-110 'data-aos='slide-right' ></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/ims-logo.png)`}} className='h-48 w-80  hover:scale-110 'data-aos='slide-right'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/sight-logo.png)`}}className='h-48 w-80 hover:scale-110 'data-aos='slide-right'></div>
            <div style={{backgroundImage:`url(https://cecieee.org/images/society/sscs-logo.png)`}} className='h-48 w-80 hover:scale-110 'data-aos='slide-right'></div>
            
        </div>
    </div>
  )
}

export default Family