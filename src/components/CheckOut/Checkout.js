import React from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  return (
    <div>
      <div className='my-11 md:my-32 flex flex-col justify-center items-center px-2 md:px-0'>
        <div className='bg-white border border-gray-100 shadow-lg rounded-lg w-full md:w-96 py-8 flex items-center flex-col mb-3'>
          <form onSubmit={(e)=>{
              e.preventDefault()
              toast.success("thanks for purchess")
            }} className='mt-8 w-72 flex flex-col'>
            <h1 className="text-center font-semibold text-xl my-5">Proceed checkout</h1>
            <label className='text-sm' htmlFor='email'>
              Input your Email
            </label>
            <input
              id='email'
              autoFocus
              required
              className=' w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Your email'
              type='email'
            />
            <label className='text-sm' htmlFor='fname'>
              Input your Full Name
            </label>
            <input
              id='fname'
              required
              className=' w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='Your full name'
              type='text'
            />
            <label className='text-sm' htmlFor='fname'>
              Input your phone number
            </label>
            <input
              id='fname'
              required
              className=' w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
              placeholder='+880 XXX XXX XXX'
              type='tel'
            />

            <button  className=' text-sm text-center bg-blue-400 text-white py-2 rounded font-medium'>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
