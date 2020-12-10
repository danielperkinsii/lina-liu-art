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

    const [showFlowersList, setShowFlowersList] = useState(false)
    const [showLandscapesList, setShowLandscapesList] = useState(false)

    return (
        <>
            <nav className={`${className} 'h-full p-1 text-gray-800 px-4 sm:text-xl`}>
                <div className='w-40 h-48 p-3 bg-red-600 rounded-lg'>
                    <Link href='/'>
                        <h1 className='text-3xl font-bold tracking-widest text-white bg-red-600'>
                            <a>Lina Liu Art.</a>
                        </h1>
                    </Link>
                </div>
                <div className='flex flex-col content-start content-around my-10'>
                    {links.map((link, index) => (
                        <NavLink 
                        href={link.path} 
                        key={index}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    )
}