'use client'
import React, {useEffect, useState,createContext} from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'


//create context
export const CursorContext= createContext();


//provider
const CursorProvider = ({children}) => {
    const [cursor, setCursor] = useState({size:30, background:'#473936'});
    const [isHovering, setIsHovering] = useState(false);
    const smallViewPortIsActive = useMediaQuery({
        query:'(max-width: 1200px)'
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const springConfig = {damping:20, stifness:290, mass:0.45}
    const springX = useSpring(mouseX,springConfig);
    const springy = useSpring(mouseY,springConfig);

    const handleMouseMove = (e)=>{
        if (!smallViewPortIsActive) {
            mouseX.set(e.clientX - cursor.size/2);
            mouseY.set(e.clientY - cursor.size/2);
        }else{
            setCursor({size:0, background:"none"})
        }
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);
        return ()=> window.removeEventListener('mousemove',handleMouseMove)
    },[cursor])


    const mouseEnterHandler = ()=>{
        setCursor({size:90, background:'#00423a'});
        setIsHovering(true)
    }

    const mouseLeaveHandler = ()=>{
        setCursor({size:30, background:'#473936'});
        setIsHovering(false)
    }

    return (
    <CursorContext.Provider value={{mouseEnterHandler,mouseLeaveHandler}}>
        <motion.div className='fixed z-[99] transition-all duration-300 rounded-full pointer-events-none'
        style={{
            left:springX,
            top:springy,
            width:cursor.size,
            height:cursor.size,
            backgroundColor:cursor.background,
            mixBlendMode: isHovering? 'difference' : 'normal',
            transition:'width 0.2s ease-in-out, height 0.2s ease-in-out'
        }}
        />
        {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider;