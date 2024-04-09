"use client"
import React, { use, useEffect } from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { menus } from '@/export';

const Banner = () => {
  useEffect(()=>{
    AOS.init({
      duration:500,
      offset:200,
      easing:'ease-in-sine',
    })
  },[])
  return (
    <section className='w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10'>
      <h1 data-aos="zoom-in" className='text-[50px] text-black text-center loading-[60px]'>Our Freshly Baked bread is the <br />hero of our breakfast menu</h1>
      <p data-aos="zoom-in" data-aos-display="200" className='text-center text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi nihil porro corrupti delectus, nobis hic esse consequuntur rerum excepturi ab magnam autem voluptatum rem saepe, reprehenderit, velit aliquam id?</p>
      <button data-aos="zoom-in" data-aos-display="400" className='border-2 border-black rounded-full px-14 py-4 font-bold'>READ MORE</button>
      <div className='w-full bg-cover bg-center flex flex-col justify-center items-center'>
        <Image data-aos="zoom-in" data-aos-display="600" src="/banner3.jpg" alt="banner image" width={800} height={600}/>
      </div>

    </section>
  )
}

export default Banner