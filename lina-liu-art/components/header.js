import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './navbar/navlink'

export default function Header( { className }) {
    const links = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '#'
        },
        {
            name: 'Flowers',
            path: '/flowers',
        },
        {
            name: 'Landscapes',
            path: '/landscapes',
        },
        {
            name: 'Contact',
            path: '#'
        }
    ]
    
    return (
        <>
            <div className={`${className} flex flex-row sm:flex-col sm:justify-between sm:w-1/4 sm:h-screen p-1 text-gray-800 sm:pl-4 sm:text-xl sm:fixed`}>
              <div className='flex sm:flex-col w-full'>
                <div className='p-3 bg-white w-full sm:w-40 sm:h-56 sm:bg-red-600 rounded-lg'>
                    <Link href='/'>
                        <h1 className='text-6xl font- text-red-600 sm:text-white'>
                            <a>Lina <br/>Liu <br/>Art.</a>
                        </h1>
                    </Link>
                </div>
                <div className='text-gray-500 text-base hidden sm:contents'>
                    <p className='px-1 py-4'>Lina's art tagline here. This is where the tagline will be. The tagline will be here. Here.</p>
                </div>
                <div className='flex flex-col content-start content-around justify-evenly w-full sm:w-full my-0 sm:my-12 pl-1'>
                    {links.map((link, index) => (
                        <NavLink 
                        href={link.path} 
                        key={index}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
              </div>
              <div className='text-sm hidden sm:flex sm:flex-col py-6'>
                <p>www.linaliuart.com </p>
                <span className='tracking-tighter'>
                    <p>built by Brick Oven Web Design, LLC </p>
                    <p>in St. Louis, MO, USA</p>
                </span>
              </div>
            </div>
        </>
    )
}