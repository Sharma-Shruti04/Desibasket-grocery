import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const { products } =  useAppContext()
    const { category } = useParams()

    const searchCategory = categories.find((item)=> item.path.toLowerCase() === category)

    const filteredProducts = products.filter((product)=>product.category.toLowerCase() === category)

  return (
    <div className='mt-12'>
      {searchCategory && (
        <div className='soft-card rounded-[2rem] p-6 md:p-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary'>Category spotlight</p>
            <div className='mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-3xl font-semibold text-slate-900 md:text-4xl'>{searchCategory.text}</p>
                <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-500 md:text-base'>
                  A focused collection with the same refreshed card layout and polished spacing used across the store.
                </p>
              </div>
              <div className='glass-panel w-fit rounded-full px-4 py-2 text-sm font-medium text-slate-600'>
                {filteredProducts.length} products found
              </div>
            </div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {filteredProducts.map((product)=>(
                <ProductCard key={product._id} product={product}/>
            ))}
        </div>
      ): (
        <div className='soft-card mt-8 flex h-[40vh] items-center justify-center rounded-[2rem]'>
            <p className='text-center text-xl font-medium text-primary md:text-2xl'>No products found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default ProductCategory
