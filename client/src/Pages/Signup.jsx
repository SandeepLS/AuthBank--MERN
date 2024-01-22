// import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='p-2 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-3'>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='bankName' id='bankName' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='bankAccountNo' id='bankAccountNo' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='address' id='address' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='city' id='city' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='country' id='country' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='zipcode' id='zipcode' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled-opacity-30'>Signup</button>
      </form>
      <div className='flex gap-2 mt-2'>
        <p>Have an account?</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
