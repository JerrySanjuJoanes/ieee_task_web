import React from 'react'

function Midcontainer() {
  return (
    <div style={{backgroundImage:`url('https://ceconline.edu/wp-content/uploads/2018/11/cec_1-1-1024x681.jpg')`}} className='h-fit  w-full  flex flex-wrap  gap-20 mt-20 justify-center items-center bg-cover overflow-x-hidden ' data-aos="" >
        <div className='flex flex-wrap h-full w-full backdrop-blur-md flex-col gap-14 '>
            <div className='flex justify-start mx-2 mt-5 flex-wrap flex-row bg-white w-fit h-fit mr-7 ml-7  rounded-md items-center ' data-aos="fade-right">
                <div style={{backgroundImage:`url('https://ceconline.edu/wp-content/uploads/2022/07/1-pic1-01-scaled.jpeg')`}} className='h-48 w-80 bg-cover mt-4 mx-4 rounded-md shadow-lg'  ></div>
                <span className='text-9xl '>CEC</span>
                <div className='w-full ml-5 mt-5 mb-4 m-5'>
                    
                    <p className='pr-8'>
                    The Government College of Engineering Chengannur (established in 1993), commonly known as CEC, is an engineering institute in the state of Kerala, India. The college was set up under the auspices of the Institute of Human Resources Development (IHRD) and is affiliated with the APJ Abdul Kalam Technological University (KTU). It currently offers undergraduate degrees in four engineering streams and two postgraduate programs.
                    </p>
                </div>
            </div>
            <div className='flex justify-end  mx-2 mt-5 mb-5 flex-wrap flex-row bg-white w-fit h-fit mr-7 ml-7 rounded-md items-center' data-aos='fade-left'>
            <div className='flex justify-end'>
                        <span className='text-9xl text-end w-full'>IEEE SB CEC</span>
                    </div> 
                <div style={{backgroundImage:`url('https://sight.ieee.org/wp-content/uploads/2020/05/IEEE-Student-Branch-College-of-Engineering-Chengannur-675x324.jpg')`}} className='h-48 w-80 bg-cover mx-4 rounded-md shadow-lg mt-4' ></div>
                <div className='w-full m-5 mb-4'>
                    <p>IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Midcontainer