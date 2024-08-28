'use client'
import React from 'react'
import {IoMdClose} from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Socials from './Socials'



const links  =[
    {href:'/',name:"home"},
    {href:'/about',name:"about"},
    {href:'/treatments',name:"treatments"},
    {href:'/contact',name:"contact"},
]


const MobileNav = ({setMobileNav}) => {
    const pathname = usePathname();
    return (
    <nav className='relative flex flex-col justify-between h-full p-8'>
        <div className='cursor-pointer text-accent ' onClick={()=>setMobileNav(false)}>
            <IoMdClose className='text-4xl'/>
        </div>
            <div className="container items-center text-white mx-auto flex flex-col gap-10  ">
            {links.map((link,index)=>(
                <Link className={`uppercase ${pathname === link.href && 'border-b-2 border-accent'}`} href={link.href} key={index}>
                {link.name}
                </Link>
            ))}
        </div>
        <Socials containerStyles='text-white flex text-lg gap-6 justify-center'/>
    </nav>
  )
}

export default MobileNav