import Banner from '@/components/Banner'
import Client from '@/components/Client'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurBurgers from '@/components/OurBurgers'
import OurMenus from '@/components/OurMenus'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <OurBurgers />
    <WhyUs />
    <OurMenus/>
    <Banner />
    <Client />
    <Contact />
    </>
  )
}

export default page
