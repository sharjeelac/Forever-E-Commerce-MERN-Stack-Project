import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const BestSeller = () => {
  let [bestProducts, setBestProducts] = useState([]);

  const { products } = useContext(ShopContext);

  useEffect(() => {
    let bestPro = products.filter((item) => item.bestseller);
    setBestProducts(bestPro.slice(0,5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1='BEST' text2='SELLERS' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sitz amet, consectetur adipisicing elit. Explicabo,
          ad.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
        {bestProducts.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
