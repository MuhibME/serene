'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';
import Image from 'next/image';
import StatsItem from '@/components/StatsItem';
import Link from 'next/link';



const About = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2}}}
    className='min-h-screen flex items-center overflow-x-hidden '
    >
      <div className="container mx-auto flex items-center pt-60 pb-12 xl:pt-32 xl:pb-0">
         <div className='w-full h-full flex flex-col xl:flex-row items-center justify-between'>
          {/* image */}
          <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0, x:-60}} animate={{opacity:1, x:0, transition:{delay:2.0,duration:0.8, ease:'easeInOut' }}}
          className='relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] xl:mx-0 mb-8'>
            <Image src={'/assets/about/img.jpg'}  quality={100} fill priority alt='about' className='object-contain'/>
          </motion.div>
          {/* text */}
          <motion.div 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0, x:60}} animate={{opacity:1, x:0, transition:{delay:2.3,duration:0.8, ease:'easeInOut' }}}
          className='flex flex-col items-start text-center xl:max-w-[650px] xl:text-left mx-auto xl:mx-0'>
            <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>
              Commited to Your Skin's Health and Beauty
            </h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates in eum repellat labore.</p>
            {/* items */}
            <div className='grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0'>
              <div><StatsItem countNum={13} text={'Years On Market'}/></div>
              <div><StatsItem countNum={35} countText={'k+'} text={'Happy Clients'}/></div>
              <div><StatsItem countNum={97} countText={'%'} text={'Natural Ingredients'}/></div>
            </div>
            {/* btn */}
            <Link href={'/contact'} className=' mx-auto xl:mx-0'>
               <button  className='btn mx-auto xl:mx-0'>Contact Us</button>
            </Link>
          </motion.div>
         </div>
      </div>
    </motion.section>
  )
}

export default About;