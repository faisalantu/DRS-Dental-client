import React from "react";
import bannerImage from "../../assets/images/dentiest.png";
const Banner = () => {
  return (
    <div className='bg-blue-50'>
      <div className='container mx-auto flex justify-center items-center'>
        <img src={bannerImage} alt='dentiest' />
      </div>
    </div>
  );
};

export default Banner;
