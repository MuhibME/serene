'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';
import Image from 'next/image';
import StatsItem from '@/components/StatsItem';
import Link from 'next/link'
import Form from '@/components/Form';


const Contact = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2}}}
    className='min-h-screen flex items-center overflow-x-hidden '
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full ">
          {/* text */}
          <motion.div 
          initial={{opacity:0, x:-60}}
          animate={{
            opacity:1,
            x:0,
            transition:{delay:2, duration:0.8, ease:'easeInOut'}
          }}
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          className='flex-1 flex-col items-center xl:items-start gap-12'>
            <h3 className='h3 mb-8 text-center xl:text-left'>Contact Info</h3>
            {/* items */}
            <div className='flex flex-col items-center xl:items-start gap-12'>
             
             {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src={'/assets/contact/pin.svg'} fill alt=''/>
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Address</h4>
                  <p className='leading-relaxed'>123/25 Elm st, Suite 800</p>
                </div>
              </div>
              {/* end item */}

              {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src={'/assets/contact/phone.svg'} fill alt=''/>
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Phone</h4>
                  <p className='leading-relaxed'>Phone: +31 545 564 854</p>
                </div>
              </div>
              {/* end item */}

              {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src={'/assets/contact/email.svg'} fill alt=''/>
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Email address</h4>
                  <p className='leading-relaxed'>support@gmail.com</p>
                </div>
              </div>
              {/* end item */}
            </div>
          </motion.div>
          <motion.div
           initial={{opacity:0, x:60}}
           animate={{
             opacity:1,
             x:0,
             transition:{delay:2.2, duration:0.8, ease:'easeInOut'}
           }}
           onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
           className='flex-1'>
            <div className='bg-accent-100 w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0'>
              <h3 className='h3 mb-8 text-center'>Get In touch</h3>
              <Form/>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;