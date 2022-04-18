import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Signin = () => {
  const [agree, setAgree] = useState(false);
  return (
    <div>
      <div className='my-11 md:my-32 flex flex-col justify-center items-center px-2 md:px-0'>
        <div className='bg-white border border-gray-300 w-full md:w-96 py-8 flex items-center flex-col mb-3'>
          <form className='mt-8 w-72 flex flex-col'>
            <label className='text-sm' htmlFor='email'>
              Input your Email
            </label>
            <input
              id='email'
              autoFocus
              className=' w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Your email'
              type='email'
            />
            <label className='text-sm' htmlFor='password'>
              Input your passowrd
            </label>
            <input
              id='password'
              autoFocus
              className=' w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Password'
              type='password'
            />
            <div className='flex items-start mb-6'>
              <div className='flex items-center h-5'>
                <input
                  onClick={(e) => {
                    setAgree(e.target.checked);
                  }}
                  aria-describedby='terms'
                  type='checkbox'
                  className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                  required
                ></input>
              </div>
              <div className='ml-3 text-sm'>
                <label
                  htmlFor='terms'
                  className='font-medium text-gray-900 dark:text-gray-300'
                >
                  I agree with the
                  <span className='text-blue-600 hover:underline dark:text-blue-500'>
                    terms and conditions
                  </span>
                </label>
              </div>
            </div>

            <button
              disabled={!agree}
              className=' text-sm text-center bg-blue-400 text-white py-2 rounded font-medium'
            >
              Log In
            </button>
          </form>
          <div className='flex justify-evenly space-x-2 w-72 mt-4'>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
            <span className='flex-none uppercase  text-gray-400 font-semibold'>
              or
            </span>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
          </div>
          <button className=' flex items-center justify-center border rounded-lg bg-gray-50 px-4 py-2'>
            <FcGoogle />
            <span className=' text-blue-900 font-semibold ml-2'>
              Login with Google
            </span>
          </button>
          <button className=' text-blue-900 mt-4 cursor-pointer -mb-4'>
            Forgot password?
          </button>
        </div>
        <div className='bg-white border border-gray-300 text-center w-full md:w-96 py-4'>
          <span className='text-sm'>Don't have an account?</span>
          <Link to='/signup' className='text-blue-500 text-sm font-semibold'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;