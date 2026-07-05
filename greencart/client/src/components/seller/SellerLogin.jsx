import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import BrandLogo from '../BrandLogo';
import { assets } from '../../assets/assets';

const SellerLogin = () => {
    const {isSeller, setIsSeller, navigate, axios} = useAppContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event)=>{
        try {
            event.preventDefault();
            const {data} = await axios.post('/api/seller/login', {email, password})
            if(data.success){
                setIsSeller(true)
                navigate('/seller')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        
    }

    useEffect(()=>{
        if(isSeller){
            navigate("/seller")
        }
    },[isSeller])

  return !isSeller && (
    <div className='relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7fff9_0%,#ffffff_35%,#effcf4_100%)] text-sm text-slate-600'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
            <div className='absolute left-[-4rem] top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl'></div>
            <div className='absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl'></div>
            <div className='absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-lime-100/55 blur-3xl'></div>
        </div>

        <div className='relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8'>
            <div className='grid w-full items-stretch overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm lg:grid-cols-[1fr_0.95fr]'>
                <div className='bg-[linear-gradient(150deg,#0f172a_0%,#14532d_42%,#4fbf8b_100%)] p-8 text-white sm:p-10 lg:p-12'>
                    <BrandLogo light />

                    <div className='mt-12 max-w-xl'>
                        <p className='inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85'>
                            Seller dashboard
                        </p>
                        <h1 className='mt-6 text-4xl font-semibold leading-tight'>
                            Run your DesiBasket store with a cleaner admin workspace.
                        </h1>
                        <p className='mt-5 max-w-lg text-sm leading-7 text-white/75'>
                            Sign in to manage products, track orders, and keep inventory updated from one polished seller panel.
                        </p>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
                        {[
                            { icon: assets.product_list_icon, title: 'Manage listings', text: 'Add products, refresh stock, and update pricing in minutes.' },
                            { icon: assets.order_icon, title: 'Track orders', text: 'Stay on top of incoming purchases and delivery progress.' },
                            { icon: assets.trust_icon, title: 'Operate with confidence', text: 'Keep your storefront organized with a simple daily workflow.' },
                        ].map((item) => (
                            <div key={item.title} className='flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12'>
                                    <img src={item.icon} alt={item.title} className='h-6 w-6 brightness-0 invert' />
                                </div>
                                <div>
                                    <p className='font-semibold text-white'>{item.title}</p>
                                    <p className='mt-1 text-sm leading-6 text-white/75'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className='flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10'>
                    <div className='flex items-center justify-between gap-4'>
                        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary'>Seller login</p>
                        <Link to="/" className='rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900'>
                            Back to home
                        </Link>
                    </div>

                    <div className='mt-6'>
                        <h2 className='text-3xl font-semibold text-slate-900'>Welcome back</h2>
                        <p className='mt-3 max-w-md text-sm leading-7 text-slate-500'>
                            Access your seller dashboard to manage inventory, orders, and store activity with less friction.
                        </p>
                    </div>

                    <div className='mt-8 grid gap-5'>
                        <label className='block'>
                            <span className='text-sm font-medium text-slate-700'>Email address</span>
                            <input
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Enter your seller email"
                                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-primary focus:bg-white"
                                required
                            />
                        </label>

                        <label className='block'>
                            <span className='text-sm font-medium text-slate-700'>Password</span>
                            <input
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-primary focus:bg-white"
                                required
                            />
                        </label>
                    </div>

                    <div className='mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm leading-6 text-slate-600'>
                        Keep your catalog fresh, review orders faster, and stay ready for the next rush.
                    </div>

                    <button className="mt-6 flex h-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-medium text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 cursor-pointer">
                        Login to seller panel
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SellerLogin
