import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrders from './pages/PlaceOrders';
import Product from './pages/Product';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer  />
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/place-orders' element={<PlaceOrders />}></Route>
        <Route path='/product/:productId' element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
