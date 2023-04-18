import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({});
  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <div
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Sign up</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='First Name'
            onChange={(event)=>{
              let obj = user;
              obj['firstName'] = event.target.value;
              setUser(obj)
            }}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Last Name'
            onChange={(event)=>{
              let obj = user;
              obj['lastName'] = event.target.value;
              setUser(obj)
            }}
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Username'
            onChange={(event)=>{
              let obj = user;
              obj['username'] = event.target.value;
              setUser(obj)
            }}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Email'
            onChange={(event)=>{
              let obj = user;
              obj['email'] = event.target.value;
              setUser(obj)
            }}
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Password'
            onChange={(event)=>{
              let obj = user;
              obj['password'] = event.target.value;
              setUser(obj)
            }}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Confirm Password'
            onChange={(event)=>{
              let obj = user;
              obj['cPassword'] = event.target.value;
              setUser(obj)
            }}
          />
        </div>

        <p className='mb-4 '>
          By Creating an accounct I consent to the processing of my personal
          data in accordance with the &nbsp;
          <a href='' className='uppercase font-bold'>
            Privacy policy
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2' onClick={async ()=>{
          console.log("user", user);
          try{
            let {data, status} = await axios.post('http://localhost:5000/api/auth/register', user);
          }catch(err){
            throw err;
          }
        }}>Create</button>
        <Link to='/login' className='capitalize underline mb-4'>
          Already have an account
        </Link>
      </div>
    </div>
  );
};

export default Signup;
