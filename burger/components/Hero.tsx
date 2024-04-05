"use client"
import React, { useEffect } from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Hero = () => {

  useEffect(()=>{
    AOS.init({
      duration:500,
      offset:200,
      easing:'ease-in-sine',
    })
  },[])
  return (
    <section id='hero' className='w-full flex lg:flex-row flex-col
    justify-between items-start'>
      <div id='image-section' className='lg:w-[50%] w-full'>
        <Image data-aos="zoom-out" src="/MainBanner.png" alt='hero-banner' 
        width={1200} height={500}/>
      </div>
    </section>
  )
}

export default Hero