import React, { useState } from 'react';
import CustomLink from "../CustomLink/CustomLink";
import { FaTooth } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  return ( 
    <nav className="bg-blue-50 text-blue-900 ">
      {/*💻 for pc device  */}
      <div className='justify-between p-4 hidden md:flex'>
        <div className="font-semibold text-xl flex items-center">
          <span className="mx-2"><FaTooth/></span> <span>DRS Dental</span>
        </div>
        <div className="flex justify-center items-center">
          <CustomLink className="mx-1 px-1" to='/'>Home</CustomLink>
          <CustomLink className="mx-1 px-1" to='/blogs'>Blogs</CustomLink>
          <CustomLink className="mx-1 px-1" to='/about'>About</CustomLink>
        </div>
        <div className="flex justify-center items-center">
          {user?
          <button onClick={()=>{signOut(auth)}} className="mx-1 px-1">logout </button>
          :
          <CustomLink className="mx-1 px-1" to='/signin'>Sign in</CustomLink>
          }
          
          
        </div>
      </div>

      {/* 📱 for mobile device */}
      <div className='p-4 md:hidden'>
        <div className='flex justify-between'>
          <div className="font-semibold text-xl flex items-center">
            <span className="mx-2"><FaTooth/></span> <span>DRS Dental</span>
          </div>
            <button onClick={()=>{
              setMenuOpen(!menuOpen)
            }} className='text-xl'>
             <GiHamburgerMenu/>  
            </button>
        </div>
          {menuOpen?
          <div className="flex justify-center flex-col items-center mt-4">
            <CustomLink className="mx-1 px-1" to='/'>Home</CustomLink>
            <CustomLink className="mx-1 px-1" to='/blogs'>Blogs</CustomLink>
            <CustomLink className="mx-1 px-1" to='/about'>About</CustomLink>
            <CustomLink className="mx-1 px-1" to='/signin'>Sign in</CustomLink>
          </div>
          : ""}
      </div>
    </nav>
  );
};

export default Header;