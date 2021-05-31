import React from "react";
import Cards from './cards';
import testiData from '../../data/testiData';

const Testimonials = () => {
  return (
<div className="testimonials">
<h2>Lo Que Dise la Gente</h2>
    <div className="testi-card-con">

    {testiData.map((data, i) => (
       <Cards img={data.img} name={data.name} testimony={data.testimony} />
   ))}
    </div>
 
</div>
  );
};

export default Testimonials;
