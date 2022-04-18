import React from "react";
import bannerImage from "../../assets/images/dentiest.png";
const Banner = () => {
  return (
    <div className='bg-blue-50'>
      <div className='container mx-auto flex justify-center items-center'>
        <img style={{height:"550px"}} className=" md:h-auto object-cover md:object-none" src={bannerImage} alt='dentiest' />
      </div>
    </div>
  );
};

export default Banner;
