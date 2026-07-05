import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();
  return (
    <div id="best-sellers">
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div className='section-heading'>
          <p>Customer favorites</p>
          <h2>Best sellers this week</h2>
          <p>Fast-moving essentials and fresh picks people keep coming back for.</p>
        </div>
        <div className='glass-panel w-fit rounded-full px-4 py-2 text-sm font-medium text-slate-600'>
          {products.filter((product)=> product.inStock).length} items in stock
        </div>
      </div>

      <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
            <ProductCard key={index} product={product}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSeller
