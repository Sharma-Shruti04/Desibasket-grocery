import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()

  return (
    <div id="categories">
      <div className='section-heading'>
        <p>Browse easily</p>
        <h2>Shop by category</h2>
        <p>Jump straight to the section you need with cleaner cards, softer colors, and quicker visual scanning.</p>
      </div>

      <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>

        {categories.map((category, index)=>(
            <div key={index} className='group cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/80 p-4 flex flex-col justify-center items-center text-center shadow-[0_18px_45px_rgba(148,163,184,0.16)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_rgba(79,191,139,0.22)]'
            style={{background: `linear-gradient(180deg, ${category.bgColor}, #ffffff)`}}
            onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0)
            }}
            >
                <div className='glass-panel flex h-24 w-24 items-center justify-center rounded-full'>
                  <img src={category.image} alt={category.text} className='max-w-16 transition duration-300 group-hover:scale-110'/>
                </div>
                <p className='mt-4 text-sm font-semibold text-slate-800 md:text-[15px]'>{category.text}</p>
                <span className='mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500'>Explore</span>
            </div>
                    
        ))}

        
      </div>
    </div>
  )
}

export default Categories
