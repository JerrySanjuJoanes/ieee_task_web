// carousel 


import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../assets/Slide1.jpg'
import '../assets/Slide2.jpg'
import '../assets/Slide3.jpg'
import '../assets/Slide4.jpg'
import '../assets/Slide5.jpeg'

 



const Carousel = () => {

        Aos.init()

    useEffect(()=>{
        const intervalid=setInterval(nextSlide,2000);
        return ()=>clearInterval(intervalid)
    })

    const slides = [
        {
            url:'https://ceconline.edu/wp-content/uploads/2022/07/1-IMG-20200819-WA0045.jpg'
        },
        {
            url:'https://cecieee.org/_next/static/image/public/images/carousal-images/level-1.d2ed50b51f3fc1c95938af46a4400708.jpg?imwidth=3840'
        },
        {
            url:'https://sight.ieee.org/wp-content/uploads/2022/03/2021-IEEE-SIGHT_Group_Photo-Frame-675x324.png'
        },
        {
            url:'https://scontent.fcok4-1.fna.fbcdn.net/v/t1.6435-9/53229658_2231750530216292_2791694408431435776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=8ITxrCFHoNwAX-428nR&_nc_ht=scontent.fcok4-1.fna&oh=00_AfAZh_Ut-q1PkQOPtbO-bHQ2Cr4WudHJltUom7-yqQWcDw&oe=649036B4'
        },
        {
            url:'https://ceconline.edu/wp-content/uploads/2022/07/1-pic1-01-scaled.jpeg'
        },
    ];

const [currentIndex,setCurrentIndex]=useState(0)

const prevSlide = () =>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
}
const nextSlide = () =>{
    const isLastSlide = currentIndex ===slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };





  return (
   
    
    <div className='h-screen w-full  bg-gradient-to-r from-transparent from-70% to-black  z-30  overflow-x-hidden    '>
        
       
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='h-full   bg-cover bg-bottom group transform transition-all duration-1000  -z-20 relative  flex justify-start ' >
            <div className='absolute inset-x-5 z-50 flex flex-col gap-3'>
            <div className='flex items-end' data-aos ='fade-left'>

                <p className=' text-white text-9xl  z-50  font-bold'>IEEE </p>
            </div>
            <div className='flex items-end'data-aos ='fade-right'>

                <p className=' text-white text-8xl  z-50  font-bold'>STUDENT BRANCH  </p>
            </div>
            <div className='flex items-end'data-aos ='fade-left'>

                <p className=' text-white text-9xl  z-50  font-bold'>CEC </p>
            </div>
            </div>
    
      </div>
        
            <div  className='transform hover:scale-110 transition ease-in-out duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='transform hover:scale-110 transition ease-in-out duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer '>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='' />
          </div>
        ))}
      </div>
   </div>
        
  )
}

export default Carousel