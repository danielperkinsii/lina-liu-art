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
            name: 'Flowers',
            path: '/flowers',
          },
          {
            name: 'Landscapes',
            path: '/landscapes',
          },
    ]

    const [showFlowersList, setShowFlowersList] = useState(false)
    const [showLandscapesList, setShowLandscapesList] = useState(false)

    return (
    <>
        <nav className={`${className} 'w-full h-40 mb-10 text-gray-800 bg-gray-300 flex justify-between px-4 sm:text-xl'`}>
            <div className='w-40 h-48 -mb-24 mt-2 p-3 bg-red-600 rounded-lg'>
                <Link href='/'>
                    <h1 className='text-3xl font-bold tracking-widest text-white bg-red-600'>
                        <a>Lina Liu Art.</a>
                    </h1>
                </Link>
            </div>
           
            <div className='flex'>
              {links.map((link, index) => (
                <NavLink href={link.path} key={index}>
                  {link.name}
                </NavLink>
              ))}
            
                </div>
            {/* <div className='w-1/4 flex justify-around items-center'>
            <div className='flex items-start justify-start'>
                <div 
                className='flex items-center'
                onClick={() => setShowFlowersList(!showFlowersList)}>
                <h3 className='px-1'>Flowers</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                height='16'
                width='16'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
                {showFlowersList ? 
            <ul className='w-full flex flex-row flex-wrap py-4'>
                
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>Iris</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>Spring</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href={{ pathname: '/category', query: 'tulip' }} >
                        <a>Tulips</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>Daisies</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>Summer</a>    
                    </Link>
                </li>
                
            </ul>
            : null}
            </div>
            <div>
            <div className='flex items-center'
            onClick={() => setShowLandscapesList(!showLandscapesList)}>
                <h3 className='px-1'>Landscapes</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                height='16'
                width='16'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
                {showLandscapesList ? 
            <ul className='flex flex-col py-4'>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a className='whitespace-nowrap'>Plein Air</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>WaterTown</a>    
                    </Link>
                </li>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#' >
                        <a>Garden</a>    
                    </Link>
                </li>
            </ul>
            : null}
            </div>
            </div> */}
        </nav>
        {/* <NavBar /> */}
    </>
    )
}