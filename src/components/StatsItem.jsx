import React from 'react'
import CountUp from 'react-countup';


const StatsItem = ({countNum, countText, text}) => {
  return (
    <div className='text-center font-primary'>
       <div className='text-[40px] text-accent mb-4'>
        <CountUp end={countNum} duration={6} delay={2.5}/>
        <span>{countText}</span>
       </div>
        <p className='text-lg'>
            {text}
        </p>
    </div>
  )
}

export default StatsItem;