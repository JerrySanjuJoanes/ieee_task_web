import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram,BsLinkedin,BsFacebook,BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div>
         <div className='w-full h-fit flex flex-col bg-blue-500  mt-2 p-11 max-[290px]:p-4 text-white'>
      <div className=' w-full h-fit flex flex-wrap gap-3'>
        <div className='flex flex-col h-fit'>
          <img src="/Icons/IEEE-SB-logo-web.png" alt=""  className='w-[300px]'/>
          <p className='py-3'>
          IEEE Student Branch,<br/>
          College of Engineering,<br/> 
          Chengannur Alapuzha, Kerala <br />
          Pin:689121
          </p>
          <span className='flex flex-row items-center gap-2'><AiOutlineMail/>chairman_ieee@ceconline.edu</span>
        </div>
        <div className='h-full flex flex-col justify-center px-10 pt-3 max-[650px]:px-0 '>
          <p>Become an IEEE member now.</p>
          <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" className='underline transition-all duration-100'>Join us</a>
        </div>
        <div className='flex flex-col px-10 grow pt-3 items-end relative max-[1000px]:gap-6  max-[450px]:items-start max-[450px]:px-0 '>
          <span className='text-4xl relative pb-3 '>Follow Us</span>
          <div className='flex flex-row flex-wrap h-fit mb-3 gap-5 pt-3 pl-3 max-[1000px]:pt-0 max-[450px]:pl-0'>
            <a href="https://www.instagram.com/ieee_sb_cec/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsInstagram size={25} /></a>
            <a href="https://www.linkedin.com/company/cecieee/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsLinkedin size={25} /></a>
            <a href="https://www.facebook.com/IEEECEC/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsFacebook size={25} /></a>
            <a href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsYoutube size={25}  href='www.youtube.com'/></a>
          </div>
          <br>
          <br>
          <span className='absolute bottom-1 mt- max-[1000px]:relative max-[1000px]:bottom-0 '>Developed by J_S_J.Code <br /> <a href="https://github.com/JerrySanjuJoanes" className='underline hover:text-blue-700'>Github</a></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
