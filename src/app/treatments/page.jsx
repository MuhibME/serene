'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';
import Link from 'next/link';
import Image from 'next/image';



const Treatments = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2}}}
    className='min-h-screen flex items-center overflow-x-hidden '
    >
      <div className="mx-auto container pt-72">
        <div className='w-full h-full flex items-center justify-center'>
          {/* text */}
          <motion.div
          initial={{opacity:0, x:-60}}
          animate={{
            opacity:1,
            x:0,
            transition:{delay:2, duration:0.8, ease:'easeInOut'}
          }}
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto'> 
            <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>Indulge in our Luxurious Treatments</h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente blanditiis hic accusantium.</p>
           
            {/* items */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0'>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className="flex items-center gap-[12px] mb-12">
                  <div className='w-[14px] h-[14px] bg-accent rounded-full'></div>
                  <h3 className='text-2xl'>Clasic Facial</h3>
                </div>
                  <p className='pl-6 text-[15px]'>Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
              </div>
            
            </div>
            
            {/* end Items */}
            <Link href={'/'} clas>
               <button className='btn mx-auto xl:mx-0'>Discover More</button>
            </Link>
          </motion.div>
          {/* loimagego */}
          <motion.div 
          initial={{opacity:0, x:60}}
          animate={{
            opacity:1,
            x:0,
            transition:{delay:2.2, duration:0.8, ease:'easeInOut'}
          }}
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex w-[384px] h-[534px] relative'>
            <Image src={'/assets/treatments/img.jpg'} fill quality={100} alt='' className='object-contain'/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Treatments