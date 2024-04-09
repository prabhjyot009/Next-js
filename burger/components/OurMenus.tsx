"use client"
import React, { useEffect } from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { menus } from '@/export';

const OurMenus = () => {
  useEffect(()=>{
    AOS.init({
      duration:500,
      offset:200,
      easing:'ease-in-sine',
    })
  },[])
  return (
    <section id='menu' className='w-full bg-cover bg-center h-fit flex-col flex justify-start items-center gap-10 py-20 lg:px-20 px-10' style={{backgroundImage:`url('/banner10.jpg')`}}>
      <h1 data-aos='fade-up' className='text-[55px] text-white font-semibold text-center'>Our Fresh Menus</h1>
      <div data-aos="zoom-in" data-aos-display="200" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4'>
        {
          menus.map((item, index) => (
            <div key={index} className='flex flex-col bg-black bg-opacity-50 opacity-75 justify-start items-start gap-4 p-10 rounded-xl h-60'>
              <h1 className='text-2xl text-white font-semibold'>{item.title}</h1>
              <p className='text-lg text-slate-200'>{item.about}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default OurMenus