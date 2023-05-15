import React, {useState} from 'react';
//import icons
import {IoMdClose} from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import Link, I am assuming
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//menu variants
const menuVariants = {
  hidden: {
    x:'100%'
  },
  show: {
    x: 0,
    transition:{
      ease: [0.6,0.01,-0.05,0.9],
    }
  }
};


const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return <nav className='text-primary x1:hidden'> 
    { /* nav open button*/}
    <div 
    onClick={() => setOpenMenu(true)} className='text-3x1 cursor-pointer'>
<CgMenuRight />

  </div>
{ /* this is the menu*/}

<motion.div
variants={menuVariants}
initial='hidden'
animate={openMenu ? 'show' : ''}
className='bg-white shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
{ /* icons */ }
<div
onClick={() => setOpenMenu(false)} className='text-4x1 absolute z-30 left-4 top-14 text-primary cursor-pointer'>
  <IoMdClose />
  </div>
<ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3x1'>
  <li>
    <Link to='/'>Home</Link>
  </li>


  <li>
    <Link to='/about'>About</Link>
  </li>


  <li>
    <Link to='/Portfolio'>Portfolio</Link>
  </li>


  <li>
    <Link to='/Contact'>Contact</Link>
  </li>
</ul>
</motion.div>

  </nav>
};

export default MobileNav;
