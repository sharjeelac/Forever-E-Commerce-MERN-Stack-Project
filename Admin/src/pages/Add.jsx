import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));
      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        {
          headers: {
            token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setPrice('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const imageInput = (id, image, setImage) => (
    <label htmlFor={id}>
      <img
        className='cursor-pointer w-20 h-20 object-cover rounded border hover:scale-105 transition-transform duration-200'
        src={!image ? assets.upload_area : URL.createObjectURL(image)}
        alt=''
      />
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type='file'
        id={id}
        hidden
      />
    </label>
  );

  const sizeBtn = (label) => (
    <div key={label}
      onClick={() =>
        setSizes((prev) =>
          prev.includes(label)
            ? prev.filter((item) => item !== label)
            : [...prev, label]
        )
      }
    >
      <p
        className={`px-4 py-2 rounded-md border cursor-pointer transition-all duration-200 ${
          sizes.includes(label)
            ? 'bg-black text-white border-black'
            : 'bg-white text-black border-gray-300'
        }`}
      >
        {label}
      </p>
    </div>
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-4'
    >
      <div>
        <p className='mb-2 font-medium'>Upload Images</p>
        <div className='flex gap-3'>
          {imageInput('image1', image1, setImage1)}
          {imageInput('image2', image2, setImage2)}
          {imageInput('image3', image3, setImage3)}
          {imageInput('image4', image4, setImage4)}
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-1'>Product Name</p>
        <input
          type='text'
          className='w-full max-w-[500px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/50'
          placeholder='Type Here'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='w-full'>
        <p className='mb-1'>Product Description</p>
        <textarea
          className='w-full max-w-[500px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/50'
          placeholder='Write Description Here'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <div>
          <p className='mb-1'>Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='w-full px-4 py-2 border rounded-md focus:outline-none'
          >
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-1'>Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className='w-full px-4 py-2 border rounded-md focus:outline-none'
          >
            <option value='Topwear'>Top Wear</option>
            <option value='Bottomwear'>Bottom Wear</option>
            <option value='Winterwear'>Winter Wear</option>
          </select>
        </div>

        <div>
          <p className='mb-1'>Price</p>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none sm:w-[120px]'
            type='number'
            placeholder='100'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div>
        <p className='mb-1'>Select Sizes</p>
        <div className='flex gap-3 flex-wrap'>{['S', 'M', 'L', 'XL', 'XXL'].map(sizeBtn)}</div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type='checkbox'
          id='bestseller'
        />
        <label className='cursor-pointer' htmlFor='bestseller'>
          Add to Bestseller
        </label>
      </div>

      <button
        disabled={loading}
        className={`w-32 py-2 rounded-md font-medium transition-all duration-200 ${
          loading
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {loading ? 'Uploading...' : '➕ Add Product'}
      </button>
    </form>
  );
};

export default Add;
