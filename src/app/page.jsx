'use client'
import React from 'react'
import { delay, motion } from 'framer-motion';
import Image from "next/image";
import { useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';
import ModalVideo from '@/components/ModalVideo';


export default function Home() {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2}}}
    className='min-h-screen flex items-center overflow-x-hidden '
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row items-center h-full'>
          {/* text */}
          <motion.div initial={{opacity:0,y: -100 }} animate={{opacity:1, y:0 , transition:{delay:2, duration:1, ease:'easeIn'}}} className='w-full text-center xl:text-left xl:w-[500px] pt-[120px] bg'>
            <motion.h1  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='h1 mb-6'>Natural Beauty <br /> Start Here</motion.h1>
            <motion.p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='lead max-w-xl mx-auto'>Tailoured skincare solutions for a healthy complexion, offer customized care for radiant skin</motion.p>
            <div className='flex flex-col xl:flex-row mx-auto xl:mx-0 items-center gap-6 max-w-max'>
              <motion.button onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='btn btn-lg'>Book an appointment</motion.button>
              <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ModalVideo/>
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          <div className='flex-1'>
          <motion.div 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0,bottom: '-100%' }} animate={{opacity:1, bottom:0 , transition:{delay:2.4, duration:1.2, ease:'easeIn'}}}
          className='hidden xl:flex fixed bottom-0'>
            <Image src={'/assets/home/img.png'} width={864} height={650} quality={100} alt='Hero'/>
          </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
