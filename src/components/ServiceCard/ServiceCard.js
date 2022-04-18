import React from "react";
import { Link } from 'react-router-dom';
const ServiceCard = ({ data }) => {
  const { title, description, img,price,id } = data;
  return (
    <div className='rounded bg-slate-50 text-center shadow overflow-hidden flex justify-between flex-col p-5 md:mx-7'>
      <div className='p-3 '>
        <div className=' w-full flex justify-center'>
          <img
            className='rounded-full h-40 w-40 object-cover'
            src={img}
            alt={title}
          />
        </div>
        <h2 className='font-semibold text-2xl pt-3 px-5'>{title}</h2>
        <p className="my-3 font-semibold text-lg">Price: {price}</p>
        <p>{description}</p>
        
      </div>
      <Link to={`/checkout/${id}`}
          className='bg-blue-300 p-3 flex justify-center items-center gap-3 font-semibold w-full'>
          <span>Get The Service </span>
        </Link>
    </div>
  );
};

export default ServiceCard;
