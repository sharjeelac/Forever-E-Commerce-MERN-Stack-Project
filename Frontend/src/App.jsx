import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import PlaceOrders from './pages/PlaceOrders.jsx'
import Orders from './pages/Orders.jsx'
import Navbar from './Components/Navbar.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify.jsx'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]">
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/collection' element={<Collection/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/product/:productId' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/place-orders' element={<PlaceOrders/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/verify' element={<Verify/>}></Route>
        </Routes>
        {/* Toast Container (must be outside Routes) */}
      <ToastContainer position="top-center" autoClose={1000} />

    </div>
  )
}

export default App
