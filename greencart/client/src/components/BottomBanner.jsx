import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div id="offers" className='relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(15,23,42,0.14)]'>
      <img src={assets.bottom_banner_image} alt="banner" className='absolute inset-0 hidden h-full w-full object-cover md:block'/>
      <img src={assets.bottom_banner_image_sm} alt="banner" className='absolute inset-0 h-full w-full object-cover md:hidden'/>
      <div className='absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-950/35 to-white/95'></div>

      <div className='relative z-10 flex min-h-[520px] items-center justify-center px-5 py-8 md:justify-end md:px-10 lg:px-16'>
        <div className='glass-panel max-w-2xl rounded-[2rem] p-6 md:p-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-primary'>Why choose us</p>
            <h1 className='mt-3 text-3xl font-semibold text-slate-900 md:text-4xl'>A smoother grocery experience from browse to doorstep.</h1>
            <p className='mt-4 text-sm leading-6 text-slate-600 md:text-base'>
              From curated freshness checks to quick delivery and simple pricing, every part of the store now feels more premium and easier to use.
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {features.map((feature, index)=>(
                <div key={index} className='soft-card rounded-2xl p-4'>
                    <img src={feature.icon} alt={feature.title} className='h-10 w-10' />
                    <div className='mt-4'>
                       <h3 className='text-lg font-semibold text-slate-900'>{feature.title}</h3>
                        <p className='mt-1 text-sm leading-6 text-slate-600'>{feature.description}</p> 
                    </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
