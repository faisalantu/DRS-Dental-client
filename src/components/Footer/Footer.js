import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-gray-700 text-white'>
      <div className='container mx-auto py-20 flex justify-evenly'>
          <div className="flex flex-col">
            <Link className="mx-1 px-1" to='/'>Home</Link>
            <Link className="mx-1 px-1" to='/checkout'>Checkout</Link>
            <Link className="mx-1 px-1" to='/blogs'>Blogs</Link>
            <Link className="mx-1 px-1" to='/about'>About</Link>
          </div>
        <div>
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
