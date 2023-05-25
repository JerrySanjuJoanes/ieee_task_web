import CountUp from 'react-countup';
import React from 'react'
import { FaTrophy,FaHandsHelping } from 'react-icons/fa';
import { MdEventAvailable,MdCelebration} from 'react-icons/Md';
import { BsPersonFill} from 'react-icons/bs';
import ConfettiExplosion from 'react-confetti-explosion';
import "./Mask.css"
import Aos from 'aos'
import 'aos/dist/aos.css'









function Counter() {
    const [isExploding, setIsExploding] = React.useState(false);
    Aos.init()



    return (
    <div className='mt-20 overflow-x-hidden '>
        <div className='mt-8 flex flex-col justify-start items-center gap-6 h-fit'>
            <div className='h-fit w-screen flex flex-wrap items-center justify-center gap-6' >
                <div className='h-fit w-80 flex flex-col justify-center items-center shadow-xl rounded-lg ' data-aos='slide-right'>
                    <BsPersonFill className='h-20 w-72 mt-2'/>
                    <span className='text-xl'>Total Members</span>
                    <div className='bg-black h-1 w-full my-3 rounded-xl px-2'></div>
                    <CountUp end={447} duration={10} className='text-8xl mb-2'/>
                </div>
                <div className='h-fit w-80 flex flex-col justify-center items-center shadow-xl rounded-lg  ' data-aos='slide-up'>
                    <MdEventAvailable className='h-20 w-72 mt-2'/>
                    <span className='text-xl'>Events per year</span>
                    <div className='bg-black h-1 w-full my-3'></div>
                    <CountUp end={120} duration={10} className='text-8xl'/>
                </div>
                <div className='h-fit w-80 flex flex-col justify-center items-center shadow-xl rounded-lg ' data-aos='slide-left'>
                <FaTrophy className='h-20 w-72 mt-2'/>
                <span className='text-xl'>Awards Won</span>
                <div className='bg-black h-1 w-full my-3'></div>
                <CountUp end={27} duration={10} className='text-8xl'/>
                </div>
            </div>
            <div>
                <div className='h-fit w-screen flex flex-row justify-center items-center flex-wrap   rounded-lg '  >
                    
                    <span className='text-6xl mt-3' data-aos='slide-right'>Successfully Completed </span>
                    <CountUp end={25} duration={10} className='trns-text 'data-aos='slide-up' ></CountUp>
                    <span className='text-6xl' data-aos='slide-left'>Years!!</span>
                    {isExploding &&<ConfettiExplosion width={3000} height={1500} particleCount={500} duration={4000} force={.9} onComplete={()=>{setIsExploding(false)}} />}
                    
                </div>
                <div className='w-full flex justify-center'>
                    <button className='bg-orange-500 animate-bounce rounded-full' onClick={()=>{setIsExploding(!isExploding)}}>
                        <MdCelebration className='h-20 w-40 ml-2 mt-2 mb-2'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter