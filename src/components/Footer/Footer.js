import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-gray-700 text-white p-3 md:p-0'>
      <div className='container mx-auto py-20  flex flex-col-reverse md: md:flex-row-reverse justify-center items-center md:justify-evenly'>
        <div className="flex md:flex-col mt-5 md:mt-0">
          <Link className="mx-1 px-1" to='/'>Home</Link>
          <Link className="mx-1 px-1" to='/checkout'>Checkout</Link>
          <Link className="mx-1 px-1" to='/blogs'>Blogs</Link>
          <Link className="mx-1 px-1" to='/about'>About</Link>
        </div>
        <div className="flex flex-col items-center justify-center text-center mb-5 md:mb-0 md:block">
          <h2 className='font-semibold text-2xl flex items-center mb-3'><span className="pr-3"><FaTooth/></span><span>DRS Dental</span></h2>
          <p className="mb-3">
            Excellent Service by prioritizing your sefty and security
          </p>
          <div className='flex text-xl gap-2'>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <AiFillInstagram />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
