import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { CursorContext } from './CursorContext'
import { usePathname } from 'next/navigation'

const links  =[
    {href:'/',name:"home"},
    {href:'/about',name:"about"},
    {href:'/treatments',name:"treatments"},
    {href:'/contact',name:"contact"},
]

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav>
        <div className="container mx-auto flex gap-8  ">
            {links.map((link,index)=>(
                <Link className={`uppercase ${pathname === link.href && 'border-b-2 border-accent'}`} href={link.href} key={index}>
                {link.name}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Nav