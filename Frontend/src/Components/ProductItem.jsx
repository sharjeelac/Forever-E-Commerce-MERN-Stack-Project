import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ image, id, price, name }) => {
  const { currency } = useContext(ShopContext);
  return (
    <>
      <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
          <img
            className='hover:scale-110 transition ease-in-out'
            src={image[0]}
            alt='producti_image'
          />
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>
            {currency} {price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
