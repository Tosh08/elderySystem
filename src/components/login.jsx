// Login.js

import React from 'react';
import Button from '../layouts/Button';

const Login = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='popup-form absolute mt-12 text-black'>
        <form className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'>
          <h1 className='text-4xl font-semibold text-center text-backgroundColor'>Login</h1>
          <div className='flex flex-col'>
            <input type='text' name='username' id='username' placeholder='Username' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <input type='password' name='password' id='password' placeholder='Password' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
          </div>
          <div className='flex justify-center'>
            <Button title="Login" />
          </div>
          <div className='flex justify-center'>
            <button className='bg-backgroundColor text-white px-10 rounded-md active:bg-red-500'>
              Close
            </button>
          </div>
          <div className='flex justify-center'>
            <p>Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
