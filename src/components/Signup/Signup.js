import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import auth from "./../../firebase.init";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const email = useRef("")
  const passowrd1 = useRef("")
  const passowrd2 = useRef("")
  //eslint-disable-next-line
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  //eslint-disable-next-line
  const [createUserWithEmailAndPassword, user1, loading1, error1] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  const navigate = useNavigate();
  const location = useLocation();

  const handleUserPasswordSignUp = (e)=>{
    e.preventDefault();
    const email1 = email.current.value;
    const passwordOne = passowrd1.current.value;
    const passwordTwo = passowrd2.current.value;
    if(passwordOne === passwordTwo){
      if(passwordOne.length<6){
        toast.error("passowrd should be more than 6 charecter")
      }else{
        createUserWithEmailAndPassword(email1,passwordOne)
      }
    } else{
      toast.error("passowrd are not same")
    }
  
  }
   //redirect
   let from = location.state?.from?.pathname || "/";
   if (user || user1) {
     navigate(from, { replace: true });
   }

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    } else if (error1) {
      toast.error(error1?.message);
    }
  }, [error, error1]);
  return (
    <div>
      <div className='my-11 md:my-32 flex flex-col justify-center items-center px-2 md:px-0'>
        <div className='bg-white border border-gray-300 w-full md:w-96 py-8 flex items-center flex-col mb-3'>
          <form onSubmit={handleUserPasswordSignUp} className='mt-8 w-72 flex flex-col'>
            <label className='text-sm' htmlFor='email'>
              Input your Email
            </label>
            <input
              id='email'
              name='email'
              ref={email}
              autoFocus
              required
              className=' w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Your email'
              type='email'
            />
            <label className='text-sm' htmlFor='password1'>
              Input your passowrd
            </label>
            <input
              id='password1'
              name='password1'
              ref={passowrd1}
              required
              autoFocus
              className=' w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Password'
              type='password'
            />
            <label className='text-sm' htmlFor='password2'>
              Input your passowrd again
            </label>
            <input
              autoFocus
              id='password2'
              name='password2'
              ref= {passowrd2}
              required
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
                  I agree with the{" "}
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
              Sign up
            </button>
          </form>
          <div className='flex justify-evenly space-x-2 w-72 mt-4'>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
            <span className='flex-none uppercase  text-gray-400 font-semibold'>
              or
            </span>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className=' flex items-center justify-center border rounded-lg bg-gray-50 px-4 py-2'
          >
            <FcGoogle />
            <span className=' text-blue-900 font-semibold ml-2'>
              Sign up using Google
            </span>
          </button>
        </div>
        <div className='bg-white border border-gray-300 text-center w-full md:w-96 py-4'>
          <span className='text-sm'>Already have an account?</span>
          <Link to='/signin' className='text-blue-500 text-sm font-semibold'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
