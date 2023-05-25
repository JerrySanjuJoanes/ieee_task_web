import React from 'react'
import rocket from '../assets/Rocket.mp4'
import target from '../assets/Target.mp4'
import question from '../assets/Question.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Wmv() {
    Aos.init()
  return (
    <div className='h-fit  w-full  flex flex-wrap  gap-20 pt-16 justify-center items-start bg-white overflow-x-hidden' data-aos="fade-up" id='aboutus'>
        <div className='h-fit w-fit max-[1000]:w-auto rounded-lg hover:scale-105 shadow-2xl  '>
            <div className='h-[445px] w-80  bg-white '>
                <div className=' h-fit w-full  rounded-3xl overflow-hidden '>
                <video src={question} autoPlay loop muted className='h-44 w-full p-4 bg-white'  />   
                </div>
                <div className='text-3xl pt-3 underline pb-4 text-center'>
                    <p>What is IEEE</p>
                </div>
                <div className='flex flex-wrap h-fit w-full max-[1000px]:w-auto py-2 px-4 '>
                IEEE is a global association and organization of professionals working toward the development, implementation and maintenance of technology-centered products and services.
                </div>
            </div>
        </div>
        <div className='w-fit flex flex-wrap gap-20 justify-center'>
        <div className='h-fit w-80 rounded-lg hover:scale-110 shadow-2xl '>
            <div className='h-[445px] w-80 '>
                <div className=' h-fit w-full  rounded-3xl overflow-hidden'>
                <video src={rocket} autoPlay loop muted className='h-48 w-full p-4' />
                </div>
                <div className='text-3xl pt-3 underline pb-4 text-center' >Our Mission</div>
                <div className='flex flex-wrap h-auto w-full max-[1000px]:w-auto py-2 px-4 '>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</div>
            </div>
        </div>
        <div className='h-fit w-80 rounded-lg hover:scale-110 shadow-2xl '>
            <div  className='h-[445px] w-80'>
                <div className=' h-fit w-full  rounded-3xl  p-4 bg-white'>
                    <video src={target} autoPlay loop muted className='h-36 w-full p-4 bg-black ' />
                </div>
                <div className='text-3xl pt-3 underline pb-4 text-center' >Vision</div>
                <div className='flex flex-wrap h-auto w-full max-[1000px]:w-auto py-2 px-4 '>IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.</div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Wmv