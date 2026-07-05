import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {

    const {products, navigate, currency, addToCart} = useAppContext()
    const {id} = useParams()
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);

    const product = products.find((item)=> item._id === id);

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> product.category === item.category)
            setRelatedProducts(productsCopy.slice(0,5))
        }
    },[products])

    useEffect(()=>{
        setThumbnail(product?.image[0] ? product.image[0] : null)
    },[product])


    return product && (
        <div className="mt-10">
            <p className="glass-panel inline-flex flex-wrap rounded-full px-4 py-2 text-sm text-slate-600">
                <Link to={"/"} className="hover:text-primary">Home</Link>
                <span className="px-2">/</span>
                <Link to={"/products"} className="hover:text-primary">Products</Link>
                <span className="px-2">/</span>
                <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link>
                <span className="px-2">/</span>
                <span className="font-medium text-primary">{product.name}</span>
            </p>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row">
                <div className="soft-card rounded-[2rem] p-4 md:p-6 lg:w-[52%]">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="order-2 flex gap-3 md:order-1 md:flex-col">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-primary md:h-24 md:w-24" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="order-1 flex flex-1 items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 md:order-2">
                        <img src={thumbnail} alt="Selected product" className="max-h-[420px] object-contain" />
                    </div>
                  </div>
                </div>

                <div className="soft-card w-full rounded-[2rem] p-6 text-sm md:p-8 lg:w-[48%]">
                    <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        {product.category}
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">{product.name}</h1>

                    <div className="mt-3 flex items-center gap-0.5">
                        {Array(5).fill('').map((_, i) => (
                          <img src={i<4 ? assets.star_icon : assets.star_dull_icon} alt="" className="md:w-4 w-3.5"/>
                             
                        ))}
                        <p className="ml-2 text-base text-slate-500">(4.0 customer rating)</p>
                    </div>

                    <div className="mt-8 rounded-[1.5rem] bg-white p-5 shadow-[0_14px_35px_rgba(148,163,184,0.14)]">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Special price</p>
                        <div className="mt-3 flex items-end gap-3">
                          <p className="text-3xl font-semibold text-slate-900">MRP: {currency}{product.offerPrice}</p>
                          <p className="pb-1 text-base text-slate-400 line-through">{currency}{product.price}</p>
                        </div>
                        <span className="mt-2 inline-block text-sm text-emerald-600">(inclusive of all taxes)</span>
                    </div>

                    <p className="mt-8 text-base font-semibold text-slate-900">About product</p>
                    <ul className="ml-5 mt-3 list-disc space-y-2 text-base text-slate-500">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="mt-10 flex flex-col gap-4 text-base sm:flex-row">
                        <button onClick={()=> addToCart(product._id)} className="w-full cursor-pointer rounded-full bg-slate-100 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-200" >
                            Add to Cart
                        </button>
                        <button onClick={()=> {addToCart(product._id); navigate("/cart")}} className="w-full cursor-pointer rounded-full bg-primary py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dull" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            {/* ---------- related products -------------- */}
            <div className="mt-20 flex flex-col items-center">
                <div className="section-heading items-center text-center">
                    <p>You may also like</p>
                    <h2>Related products</h2>
                    <p>More picks from the same category, shown with the refreshed product card design.</p>
                </div>
                <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {relatedProducts.filter((product)=>product.inStock).map((product, index)=>(
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
                <button onClick={()=> {navigate('/products'); scrollTo(0,0)}} className="mx-auto my-16 cursor-pointer rounded-full border border-primary/30 px-12 py-3 font-medium text-primary transition hover:bg-primary/10">See more</button>
            </div>
        </div>
    );
};


export default ProductDetails
