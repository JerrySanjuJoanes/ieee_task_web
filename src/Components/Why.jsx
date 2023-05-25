import React from 'react';
import {VscLibrary,VscMail,} from 'react-icons/vsc';
import {SlGraduation,SlPlane} from 'react-icons/sl';
import {BiLineChart} from 'react-icons/bi';
import {CgGirl} from 'react-icons/cg';
import puzzled from '../assets/Puzzled.mp4'
// import './Why.css'

function Why() {
  return (
    <div className='mt-5 overflow-x-hidden'>
        <div className='flex flex-col items-center text-center  mt-2'>
            <div className='text-3xl text-center h-fit w-fit'>
                <div className='h-fit w-fit'>
                    <video src={puzzled} autoPlay loop muted className='h-80 w-80' data-aos='fade up '></video>
                   
                </div >
                <div className='z-50 mb-20' data-aos='slide-right'>
                    <p className='text-5xl'>Why IEEE?!</p>
                {/* <div className='h-1 w-48 bg-black'></div> */}
                </div>
            </div>
            <div className='flex flex-col   w-screen  h-fit mt-5  gap-3'>
                <div className='h-fit w-full flex flex-wrap justify-between gap-3'  >
                    <div className=' cardbody  h-fit lg:w-[48%] sm:w-screen   rounded-e-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl' data-aos='slide-right'>
                        <div className='h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white'>
                            <VscLibrary className='h-14 w-14 ml-1' />
                            <span className='pl-3 pr-2 text-2xl'>IEEE eLearning Library</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-[76px]'>
                            A vast digital library with numerous in- demand courses and research papers.
                            </p>
                        </div>
                        
                    </div>
                    <div className='cardbody h-fit lg:w-[48%] sm:w-screen  rounded-s-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl' data-aos='slide-left'>
                        <div className='h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white'>
                            <VscMail className='h-14 w-14 ml-1' />
                            <span className='pl-3 pr-2 text-2xl'>Free @ieee.org Email</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-[76px]'>
                                With GoogleApps@IEEE, members gain a robust capability for messaging with access to email, calendar, and contact services from any Internet-connected computer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-full flex flex-wrap justify-between gap-3' >
                    <div className='cardbody h-fit lg:w-[48%] sm:w-screen   rounded-e-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl' data-aos='slide-right'>
                        <div className='h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white'>
                            <SlGraduation className='h-14 w-14 ml-1 mt-1' />
                            <span className='pl-3 pr-2 text-2xl'>Scholarships, Grants & Fellowship</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-[76px]'>
                            IEEE offers a variety of scholarships, grants, and fellowships for IEEE Student members.
                            </p>
                        </div>
                        
                    </div>
                    <div className='cardbody h-fit lg:w-[48%] sm:w-screen  rounded-s-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl'>
                        <div className='h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white' data-aos='slide-left'>
                            <SlPlane className='h-14 w-14 ml-2 mt-2 mb-2' />
                            <span className='pl-3 pr-2 text-2xl'>Student Travel Grant</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-[76px]'>
                            IEEE offers a number of student travel grants to assist student members in attending conferences and paper presentations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-full flex flex-wrap justify-between gap-3' >
                    <div className='cardbody h-fit lg:w-[48%]  sm:w-screen rounded-e-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl' data-aos='slide-right'>
                        <div className='h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white'>
                            <BiLineChart className='h-14 w-14 ml-1' />
                            <span className='pl-3 pr-2 text-2xl'>IEEE Standards</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-[76px]'>
                            With an active portfolio of nearly 1,300 standards and projects under development, IEEE is a leading developer of industry standards in a broad range of technologies.
                            </p>
                        </div>
                        
                    </div>
                    <div className='h-fit lg:w-[48%] sm:w-screen  rounded-s-2xl bg-blue-00 ml-2 flex flex-col  gap-3 shadow-xl ' data-aos='slide-left'>
                        <div className='cardbody h-fit w-fit bg-[#0f5196] rounded-r-full  flex flex-wrap justify-center items-center ml-3 mt-3 text-white'>
                            <CgGirl className='h-14 w-14 ml-1' />
                            <span className='pl-3 pr-2 text-2xl'>Celebrating Women in Science</span>
                        </div>
                        <div className='h-fit w-fit '>
                            <p className='m-2 h-fit w-fit'>
                            IEEE Women in Engineering is one of the largest professional organizations dedicated to promoting women in STEM, inspiring women across the world to pursue their interests in the field of science and technology.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why