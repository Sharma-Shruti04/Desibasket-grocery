import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-8 md:mt-10 space-y-18 md:space-y-24'>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner/>
      <NewsLetter />
    </div>
  )
}

export default Home
