// import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.id]: e.target.value});
  }
  // console.log(formData);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin', {
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
      alert('Successfully login');
      navigate('/');
    } catch(error){
      setLoading(false);
      setError(true);

    }
  };

  return (
    <div className='p-2 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <input type='email' placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled-opacity-30'>{loading ? 'Loading...': 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-2'>
        <p>Don't have an account?</p>
        <Link to='/signup'>
          <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && alert('Somrthing went wrong!')}</p>
    </div>
  )
}
