import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';
import Loading from './components/Loading';

const App = () => {

  const location = useLocation();
  const isSellerPath = location.pathname.includes("seller");
  const {showUserLogin, isSeller} = useAppContext()

  useEffect(() => {
    if (!location.hash) return;

    const elementId = location.hash.replace("#", "");
    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <div className='text-default min-h-screen text-slate-700'>

     {!isSellerPath && (
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute left-[-5rem] top-28 h-52 w-52 rounded-full bg-primary/12 blur-3xl'></div>
        <div className='absolute right-[-6rem] top-16 h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl'></div>
        <div className='absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-lime-100/60 blur-3xl'></div>
      </div>
     )}

     {isSellerPath ? null : <Navbar/>} 
     {showUserLogin ? <Login/> : null}

     <Toaster />

      <div className={`${isSellerPath ? "" : "relative px-6 md:px-16 lg:px-24 xl:px-32 pb-16"}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/add-address' element={<AddAddress/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/loader' element={<Loading/>} />
          <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>}>
            <Route index element={isSeller ? <AddProduct/> : null} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path='orders' element={<Orders/>} />
          </Route>
        </Routes>
      </div>
     {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
