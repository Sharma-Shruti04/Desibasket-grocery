import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const ProductCard = ({product}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()
    const savings = product.price - product.offerPrice

   
    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="group relative w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/85 p-3 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_55px_rgba(79,191,139,0.22)]">
            <div className="absolute left-3 top-3 z-10 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Save {currency}{savings}
            </div>
            <div className="relative flex min-h-52 items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-2 pt-8">
                <img className="max-w-28 transition duration-300 group-hover:scale-108 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="pt-4 text-sm">
                <p className="font-medium uppercase tracking-[0.2em] text-slate-400">{product.category}</p>
                <p className="mt-1 truncate text-lg font-semibold text-slate-800">{product.name}</p>
                <div className="mt-2 flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                           <img key={i} className="md:w-3.5 w3" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt=""/>
                    ))}
                    <p className="ml-1 text-xs font-medium text-slate-500">(4.0)</p>
                </div>
                <div className="mt-3 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xl font-semibold text-slate-900 md:text-[1.4rem]">
                          {currency}{product.offerPrice}{" "}
                          <span className="ml-1 text-xs font-medium text-slate-400 line-through md:text-sm">{currency}{product.price}</span>
                      </p>
                      <p className="mt-1 text-xs font-medium text-emerald-600">In stock</p>
                    </div>
                    
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex h-[40px] w-[88px] items-center justify-center gap-1 rounded-full bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dull cursor-pointer" onClick={() => addToCart(product._id)} >
                                <img src={assets.cart_icon} alt="cart_icon"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex h-[40px] w-[96px] items-center justify-center gap-2 rounded-full bg-primary/12 px-1 text-slate-700 select-none">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer rounded-full px-2 h-full text-lg" >
                                    -
                                </button>
                                <span className="w-5 text-center font-semibold">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer rounded-full px-2 h-full text-lg" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
