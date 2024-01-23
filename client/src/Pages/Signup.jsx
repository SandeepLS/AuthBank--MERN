// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.id]: e.target.value});
  }
  // console.log(formData);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      if(data.success === false){
        setError(true);
        return;
      }
    } catch(error){
      setLoading(false);
      setError(true);

    }
  };

  return (
    <div className='p-2 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='bankName' id='bankName' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='bankAccountNo' id='bankAccountNo' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='address' id='address' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='city' id='city' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='country' id='country' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='zipcode' id='zipcode' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='email' placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled-opacity-30'>{loading ? 'Loading...': 'Sign UP'}</button>
      </form>
      <div className='flex gap-2 mt-2'>
        <p>Have an account?</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && alert('Somrthing went wrong!')}</p>
    </div>
  )
}
