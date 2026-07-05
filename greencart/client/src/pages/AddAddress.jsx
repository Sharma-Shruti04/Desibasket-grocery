import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

// Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address })=>(
    <input className='w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none text-slate-600 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
     />
)

const AddAddress = () => {

    const {axios, user, navigate} = useAppContext();

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;

        setAddress((prevAddress)=>({
            ...prevAddress,
            [name]: value,
        }))
    }



    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/address/add', {address});

            if (data.success){
                toast.success(data.message)
                navigate('/cart')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(!user){
            navigate('/cart')
        }
    },[])

  return (
    <div className='mt-12 pb-16'>
      <div className='soft-card rounded-[2rem] p-6 md:p-8'>
        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary'>Delivery details</p>
        <p className='mt-3 text-3xl font-semibold text-slate-900 md:text-4xl'>Add shipping address</p>
        <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-500 md:text-base'>Save your preferred delivery details in a cleaner, easier-to-read form layout.</p>
      </div>
      <div className='mt-8 flex flex-col-reverse justify-between gap-8 md:flex-row md:items-start'>
            <div className='soft-card flex-1 max-w-xl rounded-[2rem] p-6 md:p-8'>
             <form onSubmit={onSubmitHandler} className='mt-2 space-y-4 text-sm'>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='firstName' type="text" placeholder="First Name"/>
                    <InputField handleChange={handleChange} address={address} name='lastName' type="text" placeholder="Last Name"/>
                </div>

                <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder="Email address" />
                <InputField handleChange={handleChange} address={address} name='street' type="text" placeholder="Street" />

                <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='city' type="text" placeholder="City" />
                    <InputField handleChange={handleChange} address={address} name='state' type="text" placeholder="State" />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='zipcode' type="number" placeholder="Zip code" />
                    <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder="Country" />
                </div>

                <InputField handleChange={handleChange} address={address} name='phone' type="text" placeholder="Phone" />

                <button className='mt-6 w-full cursor-pointer rounded-full bg-primary py-3.5 text-white font-semibold uppercase tracking-[0.18em] shadow-lg shadow-primary/20 transition hover:bg-primary-dull'>
                    Save address
                </button>


             </form>
            </div>
            <div className='soft-card flex w-full max-w-lg items-center justify-center rounded-[2rem] p-6'>
              <img className='max-h-[420px] w-full object-contain' src={assets.add_address_iamge} alt="Add Address" />
            </div>
      </div>
    </div>
  )
}

export default AddAddress
