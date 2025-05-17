import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(backendUrl + '/api/user/admin', {
        email,
        password,
      });
      if (response.data.success) {
        toast.success('Login successful');
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-sm'>
        <h1 className='text-3xl font-bold text-center mb-6 text-black'>
          🛡️ Admin Login
        </h1>
        <form onSubmit={onSubmitHandler} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              placeholder='admin@example.com'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/50 outline-none transition-all'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='••••••••'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/50 outline-none transition-all'
              required
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium transition-all ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:bg-gray-800 text-white'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
