import React from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import BrandLogo from './BrandLogo';

const Login = () => {

    const {setShowUserLogin, setUser, axios, navigate} = useAppContext()

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (event)=>{
        try {
            event.preventDefault();

            const {data} = await axios.post(`/api/user/${state}`,{
                name, email, password
            });
            if (data.success){
                navigate('/')
                setUser(data.user)
                setShowUserLogin(false)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
        
       
        
    }

  return (
    <div onClick={()=> setShowUserLogin(false)} className='fixed inset-0 z-30 overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm'>
      <div className='flex min-h-full items-center justify-center py-6'>
        <div onClick={(e)=>e.stopPropagation()} className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className='relative hidden min-h-full overflow-hidden bg-[linear-gradient(145deg,#0f172a_0%,#134e4a_48%,#4fbf8b_100%)] p-8 text-white lg:flex lg:flex-col'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_26%)]'></div>
            <div className='relative z-10 flex h-full flex-col'>
              <BrandLogo light />
              <div className='mt-16 max-w-sm'>
                <p className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85'>
                  DesiBasket account
                </p>
                <h2 className='mt-6 text-4xl font-semibold leading-tight'>
                  {state === "login" ? "Welcome back to smarter grocery shopping." : "Create your account in a few quick steps."}
                </h2>
                <p className='mt-5 text-sm leading-7 text-white/75'>
                  Save your cart, track deliveries, manage addresses, and enjoy a cleaner checkout experience every time you shop.
                </p>
              </div>

              <div className='mt-10 space-y-4'>
                {[
                  { icon: assets.delivery_truck_icon, title: 'Quick doorstep delivery', text: 'Track orders and keep your essentials moving without hassle.' },
                  { icon: assets.leaf_icon, title: 'Fresh picks every day', text: 'Browse curated produce, pantry picks, and local favorites.' },
                  { icon: assets.coin_icon, title: 'Better value on repeat', text: 'Keep your account ready for faster reorders and easier savings.' },
                ].map((item) => (
                  <div key={item.title} className='flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm'>
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
          </div>

          <form onSubmit={onSubmitHandler} className="relative flex flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <button
              type="button"
              onClick={() => setShowUserLogin(false)}
              className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 transition hover:border-slate-300 hover:text-slate-800'
            >
              ×
            </button>

            <div className='pr-14 lg:hidden'>
              <BrandLogo compact />
            </div>

            <div className='mt-6 lg:mt-2'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary'>
                {state === "login" ? "Login" : "Register"}
              </p>
              <h1 className='mt-3 text-3xl font-semibold text-slate-900'>
                {state === "login" ? "Access your DesiBasket account" : "Join DesiBasket today"}
              </h1>
              <p className='mt-3 max-w-md text-sm leading-7 text-slate-500'>
                {state === "login"
                  ? "Continue where you left off with saved cart items, quick checkout, and easy order tracking."
                  : "Start shopping faster with your own saved profile, delivery details, and order history."}
              </p>
            </div>

            <div className='mt-8 inline-flex w-full rounded-full bg-slate-100 p-1 sm:w-fit'>
              <button
                type="button"
                onClick={() => setState("login")}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${state === "login" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setState("register")}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${state === "register" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
              >
                Register
              </button>
            </div>

            <div className='mt-8 grid gap-5'>
              {state === "register" && (
                <label className="block">
                  <span className='text-sm font-medium text-slate-700'>Full name</span>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your full name"
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-primary focus:bg-white"
                    type="text"
                    required
                  />
                </label>
              )}

              <label className="block">
                <span className='text-sm font-medium text-slate-700'>Email address</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email"
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-primary focus:bg-white"
                  type="email"
                  required
                />
              </label>

              <label className="block">
                <span className='text-sm font-medium text-slate-700'>Password</span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder={state === "login" ? "Enter your password" : "Create a strong password"}
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-primary focus:bg-white"
                  type="password"
                  required
                />
              </label>
            </div>

            <div className='mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm leading-6 text-slate-600'>
              {state === "login"
                ? "Use your saved account to manage orders, addresses, and cart items in one place."
                : "Your account helps you save time at checkout and keep your delivery details ready."}
            </div>

            <button className="mt-6 flex h-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-medium text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 cursor-pointer">
              {state === "register" ? "Create account" : "Login"}
            </button>

            <p className='mt-5 text-sm text-slate-500'>
              {state === "register" ? (
                <>
                  Already have an account?{" "}
                  <button type="button" onClick={() => setState("login")} className='font-medium text-primary transition hover:text-primary-dull cursor-pointer'>
                    Login here
                  </button>
                </>
              ) : (
                <>
                  New to DesiBasket?{" "}
                  <button type="button" onClick={() => setState("register")} className='font-medium text-primary transition hover:text-primary-dull cursor-pointer'>
                    Create an account
                  </button>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
