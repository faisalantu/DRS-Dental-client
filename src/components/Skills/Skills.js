import React from "react";
import {GiHospitalCross, GiToothbrush} from "react-icons/gi"
import {RiServiceFill,RiCustomerService2Fill} from "react-icons/ri"
const Skills = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center pt-5 font-semibold text-3xl mt-10 px-5'>
        <span>My Skills Depends On Work</span>
      </div>
      <div className='md:grid md:grid-cols-4 md:gap-5 my-16 px-3 md:px-0 '>
        <div
          style={{ height: "350px" }}
          className='w-60 bg-red-50 rounded-lg flex flex-col items-center text-center gap-4 px-2 mx-auto mb-5 md:mb-0'
        >
          <div className='w-44 h-44 rounded-full bg-red-200 mt-7 flex justify-center items-center text-6xl'>
            <GiHospitalCross/>
          </div>
          <h1 className='text-xl font-semibold'>Patient Safety</h1>
          <p>I always care about my patient sefty first.</p>
        </div>
        <div
          style={{ height: "350px" }}
          className='w-60 bg-orange-50 rounded-lg flex flex-col items-center text-center gap-4 px-2 mx-auto mb-5 md:mb-0'
        >
          <div className='w-44 h-44 rounded-full bg-orange-200 mt-7 flex justify-center items-center text-6xl'>
            <GiToothbrush/>
          </div>
          <h1 className='text-xl font-semibold'>Well Cared</h1>
          <p>I always care about my patient sefty first.</p>
        </div>
        <div
          style={{ height: "350px" }}
          className='w-60 bg-teal-50 rounded-lg flex flex-col items-center text-center gap-4 px-2 mx-auto mb-5 md:mb-0'
        >
          <div className='w-44 h-44 rounded-full bg-teal-200 mt-7 flex justify-center items-center text-6xl'>
            <RiCustomerService2Fill/>
          </div>
          <h1 className='text-xl font-semibold'>24/7 Service</h1>
          <p>I am 24/7 available for my paitent.</p>
        </div>
        <div
          style={{ height: "350px" }}
          className='w-60 bg-blue-50 rounded-lg flex flex-col items-center text-center gap-4 px-2 mx-auto mb-5 md:mb-0'
        >
          <div className='w-44 h-44 rounded-full bg-blue-200 mt-7 flex justify-center items-center text-6xl'>
            <RiServiceFill/>
          </div>
          <h1 className='text-xl font-semibold'>Online Support</h1>
          <p>I always provide online support for my paitent.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
