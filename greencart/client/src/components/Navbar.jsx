import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import BrandLogo from './BrandLogo'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, axios} = useAppContext();

    const logout = async ()=>{
      try {
        const { data } = await axios.get('/api/user/logout')
        if(data.success){
          toast.success(data.message)
          setUser(null);
          navigate('/')
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
        
    }

    useEffect(()=>{
      if(searchQuery.length > 0){
        navigate("/products")
      }
    },[searchQuery])

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 md:px-10 lg:px-16 xl:px-24">
      <div className="glass-panel relative mx-auto flex max-w-[1500px] items-center justify-between rounded-[1.8rem] px-4 py-3 md:px-6">

      <BrandLogo onClick={()=> setOpen(false)} compact />

      <div className="hidden items-center gap-2 rounded-full bg-slate-100/80 p-1 sm:flex">
        <NavLink to='/' className={({isActive}) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>Home</NavLink>
        <NavLink to='/products' className={({isActive}) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>Shop</NavLink>
        <Link to='/#contact' className='rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-800'>Contact</Link>
      </div>

      <div className="hidden sm:flex items-center gap-3 lg:gap-4">
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm">
          <img src={assets.search_icon} alt='search' className='h-4 w-4'/>
          <input onChange={(e)=> setSearchQuery(e.target.value)} className="w-full bg-transparent outline-none placeholder:text-slate-400" type="text" placeholder="Search DesiBasket products" />
        </div>

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer rounded-full bg-slate-100 p-3 transition hover:bg-slate-200">
          <img src={assets.nav_cart_icon} alt='cart' className='w-5 opacity-80'/>
          <button className="absolute -right-1 -top-1 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-[11px] text-white">{getCartCount()}</button>
        </div>

      {!user ? ( <button onClick={()=> setShowUserLogin(true)} className="cursor-pointer rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
          Login
        </button>)
        :
        (
          <div className='relative group'>
            <div className='flex cursor-pointer items-center gap-2 rounded-full bg-slate-100 p-1 pr-3'>
              <img src={assets.profile_icon} className='w-9 rounded-full' alt="profile" />
              <span className='text-sm font-medium text-slate-700'>Account</span>
            </div>
            <ul className='absolute right-0 top-13 hidden min-w-36 rounded-2xl border border-slate-200 bg-white p-2 text-sm shadow-xl group-hover:block z-40'>
              <li onClick={()=> navigate("/my-orders")} className='cursor-pointer rounded-xl p-2.5 text-slate-600 hover:bg-primary/10'>My Orders</li>
              <li onClick={logout} className='cursor-pointer rounded-xl p-2.5 text-slate-600 hover:bg-primary/10'>Logout</li>
            </ul>
          </div>
        )}
      </div>

<div className='flex items-center gap-3 sm:hidden'>
      <div onClick={()=> navigate("/cart")} className="relative cursor-pointer rounded-full bg-slate-100 p-3">
          <img src={assets.nav_cart_icon} alt='cart' className='w-5 opacity-80'/>
          <button className="absolute -right-1 -top-1 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-[11px] text-white">{getCartCount()}</button>
        </div>
    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="rounded-full bg-slate-100 p-3">
        <img  src={assets.menu_icon} alt='menu'/>
      </button>
</div>
      

      { open && (
        <div className={`${open ? 'flex' : 'hidden'} absolute left-0 top-[calc(100%+12px)] w-full flex-col gap-2 rounded-[1.5rem] border border-slate-200 bg-white p-4 text-sm shadow-xl md:hidden`}>
        <NavLink to="/" onClick={()=> setOpen(false)} className='rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100'>Home</NavLink>
        <NavLink to="/products" onClick={()=> setOpen(false)} className='rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100'>Shop</NavLink>
        {user && 
        <NavLink to="/my-orders" onClick={()=> setOpen(false)} className='rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100'>My Orders</NavLink>
        }
        <Link to="/#contact" onClick={()=> setOpen(false)} className='rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100'>Contact</Link>

        {!user ? (
          <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
          }} className="mt-2 cursor-pointer rounded-full bg-slate-900 px-6 py-2.5 text-sm text-white transition hover:bg-slate-800">
          Login
        </button>
        ) : (
          <button onClick={logout} className="mt-2 cursor-pointer rounded-full bg-primary px-6 py-2.5 text-sm text-white transition hover:bg-primary-dull">
          Logout
        </button>
        )}
        
      </div>
      )}

      </div>
    </nav>
  )
}

export default Navbar
