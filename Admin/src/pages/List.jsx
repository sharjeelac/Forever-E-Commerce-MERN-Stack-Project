import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import { currency } from '../App';

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      console.log('Fecthing ');
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        response.data.products;
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id)=>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers : {token}})
       if(response.data.success){
        await fetchList()
        toast.success(response.data.message)
       } else{
        toast.error(response.data.message)
       }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📦 All Products List</h2>
  
      <div className="flex flex-col gap-2">
  
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 py-3 px-4 rounded-md text-sm font-medium text-gray-700 shadow-sm">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>
  
        {/* Product Rows */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 text-sm"
          >
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <p className="text-gray-800">{item.name}</p>
            <p className="text-gray-500">{item.category}</p>
            <p className="font-semibold text-green-700">{currency}{item.price}</p>
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-500 text-lg font-bold text-center hover:text-red-700 transition-colors"
              title="Remove Product"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default List;
