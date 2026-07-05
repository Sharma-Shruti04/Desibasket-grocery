import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])
    const {currency, axios, user} = useAppContext()

    const fetchMyOrders = async ()=>{
        try {
            const { data } = await axios.get('/api/order/user')
            if(data.success){
                setMyOrders(data.orders)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user){
            fetchMyOrders()
        }
    },[user])

  return (
    <div className='mt-12 pb-16'>
        <div className='soft-card mb-8 rounded-[2rem] p-6 md:p-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary'>Order history</p>
            <p className='mt-3 text-3xl font-semibold text-slate-900 md:text-4xl'>My orders</p>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-500 md:text-base'>Track every purchase in a clearer timeline with more readable cards and order summaries.</p>
        </div>
        {myOrders.map((order, index)=>(
            <div key={index} className='soft-card mb-10 max-w-5xl rounded-[2rem] p-5 md:p-6'>
                <p className='flex justify-between md:items-center text-slate-400 md:font-medium max-md:flex-col'>
                    <span>OrderId : {order._id}</span>
                    <span>Payment : {order.paymentType}</span>
                    <span>Total Amount : {currency}{order.amount}</span>
                </p>
                {order.items.map((item, index)=>(
                    <div key={index}
                    className={`relative text-slate-500/80 ${
                order.items.length !== index + 1 && "border-b"
              } border-slate-200 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>

                      <div className='flex items-center mb-4 md:mb-0'>
                        <div className='bg-primary/10 p-4 rounded-2xl'>
                         <img src={item.product.image[0]} alt="" className='w-16 h-16' />
                         </div>
                         <div className='ml-4'>
                            <h2 className='text-xl font-medium text-slate-800'>{item.product.name}</h2>
                            <p>Category: {item.product.category}</p>
                         </div>
                       </div>

                    <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                        <p>Quantity: {item.quantity || "1"}</p>
                        <p>Status: {order.status}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <p className='text-lg font-medium text-primary'>
                        Amount: {currency}{item.product.offerPrice * item.quantity}
                    </p>
                        
                    </div>
                ))}
            </div>
        ))}
      
    </div>
  )
}

export default MyOrders
