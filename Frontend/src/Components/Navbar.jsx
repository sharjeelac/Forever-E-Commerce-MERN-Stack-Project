import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import NavButton from './NavButton.jsx';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
  let [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    showSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
  };

  return (
    <div className='flex w-full items-center py-5 justify-between font-medium'>
      <Link to='/'>
        {' '}
        <img src={assets.logo} className='w-36' alt='' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavButton btnName='HOME' btnPath='/' />
        <NavButton btnName='COLLECTION' btnPath='/collection' />
        <NavButton btnName='ABOUT' btnPath='/about' />
        <NavButton btnName='CONTACT' btnPath='/contact' />
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt=''
        />

        <div className='group relative'>
          <img
            onClick={() => (token ? null : navigate('/login'))}
            src={assets.profile_icon}
            className='w-5 cursor-pointer'
            alt=''
          />

          {/* ----------Drop Down */}
          {token && (
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col items-center gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p
                  onClick={() => logout()}
                  className='cursor-pointer hover:text-black'
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to='cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-white bg-black rounded-full aspect-square leading-4 text-center text-[8px] '>
            {getCartCount()}
          </p>
        </Link>

        <div>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt='menu_icon'
          />
        </div>
      </div>

      {/* sidebar for small screen */}

      <div
        className={`absolute top-0 bottom-0 overflow-hidden right-0 transition-all bg-white text-black ${
          visible ? 'w-full' : 'w-0'
        } `}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            className='group flex items-center gap-4 p-3 cursor-pointer'
            onClick={() => setVisible(false)}
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className='border py-2 pl-6'
            to='/'
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='border py-2 pl-6'
            to='/collection'
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='border py-2 pl-6'
            to='/about'
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='border py-2 pl-6'
            to='/contact'
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
