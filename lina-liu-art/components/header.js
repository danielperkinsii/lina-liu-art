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
            <nav className={`${className} flex flex-row sm:flex-col w-full h-full p-1 text-gray-800 sm:px-4 sm:text-xl`}>
                <div className='p-3 bg-white w-1/2 sm:w-full sm:bg-red-600 rounded-lg'>
                    <Link href='/'>
                        <h1 className='text-3xl sm:w-40 sm:h-48 font-bold tracking-widest text-red-600 sm:text-white'>
                            <a>Lina <br/>Liu <br/>Art.</a>
                        </h1>
                    </Link>
                </div>
                <div></div>
                <div className='flex flex-col content-start content-around w-1/2 sm:w-full my-0 sm:my-10'>
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