import React from 'react';
//import images
import WomanImg from '../img/contact/woman.png';
import ContactImg from '../img/contact/contact.jpg'; 

import RenewImg from '../img/contact/renew.jpg';


import { motion } from 'framer-motion';
//import transitions

import { transition1 } from '../transitions';


const Contact = () => {
  return( 
  <motion.section 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  tansition={transition1} 
  className='section'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col lg:flex-row h-full
                items-center justify-start pt-36 gap-x-8 text-center
                lg:text-left'>
                  {/* bg */}
                  <motion.div 
                  initial={{ opacity: 0, y: '-25%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: '-25%' }}
                  tansition={transition1} 
                  className='hidden lg:flex bg-[#8ab5b8] 
                  absolute bottom-0 left-0 right-0 top-72 -z-10'>

                  </motion.div>
                  {/* text & form*/}
                  <div className='lg:flex-1 lg:pt-32 px-4'>
                    <h1 className='h1'>
                      Contact me
                    </h1>
                    <p className='mb-12'>I would love you to get suggestions from you
                    <form className='flex flex-col gap-y-4'>
                      <div className='flex gap-x-10'>
                        <input className='outline-none border-b border-b-primary h-[60px] 
                        bg-transparent font-secondary w-full pl-3 placholder:text-[#757879]' 
                        type="text" placeholder='Your name' />
                        <input className='outline-none border-b border-b-primary h-[60px] 
                        bg-transparent font-secondary w-full pl-3 placholder:text-[#757879]' 
                        type="text" placeholder='Your Email Address' />

                      </div>
                      <input className='outline-none border-b border-b-primary h-[60px] 
                        bg-transparent font-secondary w-full pl-3 placholder:text-[#757879]' 
                        type="text" placeholder='Your Message' />
                        <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                          Send it
                        </button>
                      </form></p>
                  </div>
                  {/* images */}
                  <div className='sm-flex-2'>
                    <img src={WomanImg} alt='' />
                  </div>
                </div>
            </div>
  </motion.section>
);
  }

export default Contact;
