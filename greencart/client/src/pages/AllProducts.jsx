import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {

    const {products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}else{
                setFilteredProducts(products)
            }
    },[products, searchQuery])

  return (
    <div className='mt-12 flex flex-col'>
      <div className='soft-card flex flex-col gap-5 rounded-[2rem] p-6 md:flex-row md:items-end md:justify-between md:p-8'>
        <div className='section-heading'>
          <p>Discover more</p>
          <h2>All products</h2>
          <p>Browse every available item in one refined catalog view with clearer spacing and easier scanning.</p>
        </div>
        <div className='glass-panel w-fit rounded-full px-4 py-2 text-sm font-medium text-slate-600'>
          {filteredProducts.filter((product)=> product.inStock).length} available now
        </div>
      </div>

        <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
           {filteredProducts.filter((product)=> product.inStock).map((product, index)=>(
            <ProductCard key={index} product={product}/>
           ))}
        </div>

    </div>
  )
}

export default AllProducts
