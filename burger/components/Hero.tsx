"use client"
import React, { useEffect } from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

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
      <div id='image-section' className='lg:w-[100%] w-full'>
        <Image data-aos="zoom-in" src="/MainBanner.png" alt='hero-banner' 
        width={1100} height={500} className='bg-cover bg-center'/>
      </div>
      <div id='content-section' className='lg:w-[50%] w-full flex
      flex-col justify-center items-center gap-10 pl-10 pr-10 pt-10'>
      <Image src='/Logo.png' alt='logo' width={120} height={100} data-aos="zoom-in"
      data-aos-delay="200" className='rounded-full size-100'/>
      <h1 data-aos='zoom-in' data-aos-delay='400' className='text-[50px] text-black text-center leading-[55px]'>Fresh Buns<br></br> Handcrafted daily</h1>
      <p data-aos='zoom-in' data-aos-delay='600' className='text-xl text-slate-600 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button data-aos='zoom-in' data-aos-delay='800' className=' border-2 text-black text-lg rounded-full px-14 py-4'>READ MORE</button>
      </div>
    </section>
  )
}

export default Hero