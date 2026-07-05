import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets, dummyAddress } from "../assets/assets";
import toast from "react-hot-toast";

const Cart = () => {
    const {products, currency, cartItems, removeFromCart, getCartCount, updateCartItem, navigate, getCartAmount, axios, user, setCartItems} = useAppContext()
    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState([])
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [paymentOption, setPaymentOption] = useState("COD")

    const getCart = ()=>{
        let tempArray = []
        for(const key in cartItems){
            const product = products.find((item)=>item._id === key)
            product.quantity = cartItems[key]
            tempArray.push(product)
        }
        setCartArray(tempArray)
    }

    const getUserAddress = async ()=>{
        try {
            const {data} = await axios.get('/api/address/get');
            if (data.success){
                setAddresses(data.addresses)
                if(data.addresses.length > 0){
                    setSelectedAddress(data.addresses[0])
                }
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const placeOrder = async ()=>{
        try {
            if(!selectedAddress){
                return toast.error("Please select an address")
            }

            // Place Order with COD
            if(paymentOption === "COD"){
                const {data} = await axios.post('/api/order/cod', {
                    userId: user._id,
                    items: cartArray.map(item=> ({product: item._id, quantity: item.quantity})),
                    address: selectedAddress._id
                })

                if(data.success){
                    toast.success(data.message)
                    setCartItems({})
                    navigate('/my-orders')
                }else{
                    toast.error(data.message)
                }
            }else{
                // Place Order with Stripe
                const {data} = await axios.post('/api/order/stripe', {
                    userId: user._id,
                    items: cartArray.map(item=> ({product: item._id, quantity: item.quantity})),
                    address: selectedAddress._id
                })

                if(data.success){
                    window.location.replace(data.url)
                }else{
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(products.length > 0 && cartItems){
            getCart()
        }
    },[products, cartItems])


    useEffect(()=>{
        if(user){
            getUserAddress()
        }
    },[user])
    
    return products.length > 0 && cartItems ? (
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
            <div className='flex-1 max-w-4xl'>
                <div className='soft-card rounded-[2rem] p-6 md:p-8'>
                  <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary'>Checkout</p>
                      <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                          Shopping cart
                      </h1>
                      <p className='mt-2 text-sm text-slate-500 md:text-base'>Review items, update quantities, and confirm your delivery details.</p>
                    </div>
                    <div className='glass-panel w-fit rounded-full px-4 py-2 text-sm font-medium text-slate-600'>
                      {getCartCount()} items
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-[2fr_1fr_1fr] pb-3 text-base font-medium text-slate-500">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="soft-card mb-4 grid grid-cols-[2fr_1fr_1fr] items-center rounded-[1.75rem] p-4 text-sm font-medium text-slate-500 md:text-base">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={()=>{
                                navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)
                            }} className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-2xl bg-white border border-slate-200">
                                <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold text-slate-800">{product.name}</p>
                                <div className="font-normal text-slate-500/80">
                                    <p>Weight: <span>{product.weight || "N/A"}</span></p>
                                    <div className='flex items-center'>
                                        <p>Qty:</p>
                                        <select onChange={e => updateCartItem(product._id, Number(e.target.value))}  value={cartItems[product._id]} className='ml-2 rounded-full border border-slate-200 bg-white px-2 py-1 outline-none'>
                                            {Array(cartItems[product._id] > 9 ? cartItems[product._id] : 9).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>
                        <button onClick={()=> removeFromCart(product._id)} className="cursor-pointer mx-auto">
                            <img src={assets.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>)
                )}

                <button onClick={()=> {navigate("/products"); scrollTo(0,0)}} className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium">
                    <img className="group-hover:-translate-x-1 transition" src={assets.arrow_right_icon_colored} alt="arrow" />
                    Continue Shopping
                </button>

            </div>

            <div className="soft-card h-fit max-w-[380px] w-full rounded-[2rem] p-6 md:sticky md:top-24">
                <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Order summary</h2>
                <hr className="my-5 border-slate-200" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Delivery address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-slate-500">{selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="cursor-pointer text-primary hover:underline">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 z-10 w-full rounded-2xl border border-slate-200 bg-white p-2 text-sm shadow-xl">
                               {addresses.map((address, index)=>(
                                <p key={index} onClick={() => {setSelectedAddress(address); setShowAddress(false)}} className="cursor-pointer rounded-xl p-2 text-slate-500 hover:bg-slate-100">
                                    {address.street}, {address.city}, {address.state}, {address.country}
                                </p>
                            )) }
                                <p onClick={() => navigate("/add-address")} className="cursor-pointer rounded-xl p-2 text-center text-primary hover:bg-primary/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Payment method</p>

                    <select onChange={e => setPaymentOption(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-slate-200" />

                <div className="mt-4 space-y-3 text-slate-500">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{getCartAmount() * 2 / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>
                            {currency}{getCartAmount() + getCartAmount() * 2 / 100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="mt-6 w-full cursor-pointer rounded-full bg-primary py-3.5 text-white font-semibold shadow-lg shadow-primary/20 transition hover:bg-primary-dull">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : null
}

export default Cart;
