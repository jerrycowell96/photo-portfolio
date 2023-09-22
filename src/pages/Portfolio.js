import React from 'react';
//import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';

//import links 
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start gap-x-24 text-center
      lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */} 
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>

          <p className='mb-12 max-w-sm'>
          Lorem Veniam occaecat laboris ullamco incididunt ipsum nostrud cillum  
        <b>nostrud dolor</b> mollit sit ut nulla. Officia qui sint do aute ullamco dolor 
          qui exercitation mollit cupidatat. Mollit ullamco nisi sit ullamco minim nulla. 
          Duis eu cupidatat anim mollit commodo id laboris.
        <br />
        <br />
          Reprehenderit sunt labore aute elit. 
          Deserunt culpa officia esse culpa officia non reprehenderit nostrud. 
          Labore magna commodo sunt ullamco fugiat do nostrud deserunt. 
          Quis est ullamco deserunt in et ea. 
        </p>
        <Link to={'/portfolio'} className='btn mb-[30px] 
        mx-auto lg:mx-0'>Hire me</Link>
        </div>

        {/* image grid */}
        <div className='grid grid-cols-2 lg:gap-2'>
          {/* images */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image1} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image2} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image3} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image4} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image5} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration 500' src= {Image6} alt='' />
          </div>
          </div>
      </div>

    </div>

  </section>;
};

export default Portfolio;
