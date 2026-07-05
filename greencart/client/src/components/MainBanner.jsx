import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div id="home" className='relative overflow-hidden rounded-[2rem] min-h-[470px] md:min-h-[520px] shadow-[0_30px_80px_rgba(15,23,42,0.14)]'>
      <img src={assets.main_banner_bg} alt="banner" className='absolute inset-0 hidden h-full w-full object-cover md:block'/>
      <img src={assets.main_banner_bg_sm} alt="banner" className='absolute inset-0 h-full w-full object-cover md:hidden'/>
      <div className='absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/22 md:to-transparent'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,191,139,0.22),transparent_28%)]'></div>

      <div className='relative z-10 flex h-full flex-col justify-center px-5 py-12 md:px-12 lg:px-16'>
        <div className='glass-panel inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700'>
          Farm fresh delivery
        </div>

        <h1 className='mt-6 max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl lg:leading-[1.05]'>
          Freshness you can trust, savings you will love.
        </h1>

        <p className='mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg'>
          Discover handpicked groceries, fast doorstep delivery, and daily deals wrapped in a cleaner, brighter shopping experience.
        </p>

        <div className='mt-8 flex flex-wrap items-center gap-4 font-medium'>
          <Link to={"/products"} className='group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dull cursor-pointer'>
            Shop now
            <img className='transition group-hover:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>

          <Link to={"/products"} className='glass-panel group hidden items-center gap-2 rounded-full px-7 py-3 text-slate-700 md:inline-flex cursor-pointer'>
            Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </div>

        <div className='mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3'>
          <div className='glass-panel rounded-2xl px-5 py-4'>
            <p className='text-2xl font-semibold text-slate-900'>30 min</p>
            <p className='mt-1 text-sm text-slate-600'>Average delivery window</p>
          </div>
          <div className='glass-panel rounded-2xl px-5 py-4'>
            <p className='text-2xl font-semibold text-slate-900'>10k+</p>
            <p className='mt-1 text-sm text-slate-600'>Happy households served</p>
          </div>
          <div className='glass-panel rounded-2xl px-5 py-4'>
            <p className='text-2xl font-semibold text-slate-900'>Fresh daily</p>
            <p className='mt-1 text-sm text-slate-600'>Curated produce and pantry picks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
