import React, { useEffect, useState } from "react";
import ServiceCard from './../ServiceCard/ServiceCard';

const Services = () => {
  const [allServices, setAllServices] = useState([])
  useEffect(() => {
    fetch('services.json')
        .then(res => res.json())
        .then(data => setAllServices(data));
  }, [])
  
  return (
    <div className='container mx-auto'>
      <div className="text-center pt-5 font-semibold text-2xl mt-10">
        <span className="border-b-2 border-blue-800">Our Services</span>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-10 my-16 px-3 md:px-0">
        {allServices.map((data)=>{
            return <ServiceCard key={data.id} data={data}></ServiceCard>
        })}
      </div>
    </div>
  );
};

export default Services;
