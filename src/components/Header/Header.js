import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return ( 
    <nav className="flex bg-blue-50 text-blue-900 justify-between p-4">
        <div className="font-semibold text-xl">
            <span>DRS Dental</span>
        </div>
      <div className="flex justify-center items-center">
        <CustomLink className="mx-1 px-1" to='/'>Home</CustomLink>
        <CustomLink className="mx-1 px-1" to='/checkout'>Checkout</CustomLink>
        <CustomLink className="mx-1 px-1" to='/blogs'>Blogs</CustomLink>
        <CustomLink className="mx-1 px-1" to='/about'>About</CustomLink>
      </div>
      <div className="flex justify-center items-center">
        <CustomLink className="mx-1 px-1" to='/signin'>Sign in</CustomLink>
      </div>
    </nav>
  );
};

export default Header;