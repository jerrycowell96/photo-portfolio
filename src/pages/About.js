import React from 'react';
//import images
import WomanImg from '../img/about/woman.png';
// import link 
import { Link } from 'react-router-dom';


const About = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center lg:flex-row
      h-full items-center jsutify-center gap-x-24
      text-center lg:text-left lg:pt-16'>
        {/* image */}
      <div className='flex-1 max-h-96 lg:max-h-max 
      order-2 lg:order-none overflow-hidden'>
        <img src={WomanImg} alt=''/>
      </div>
      { /* text */}

      <div className='flex-1 pt-36 pb-14 lg:pt-0
      lg:w-auto z-10 flex flex-col justify-center
      items-center lg:items-start'>
        <h1 className='h1'> 
        About me 
        </h1>
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
        <Link to={'/portfolio'} className='btn flex'>View my Work</Link>
      </div>
      </div>
    </div>        
  </section>;
};

export default About;
