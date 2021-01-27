import React from 'react'
import Link from 'next/link'
import NavLink from './navbar/navlink'
import SearchBar from './searchbar'

export default function Header( { className, query, setQuery }) {

    const links = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about'
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
                <div className='p-3 bg-white w-full sm:w-40 sm:h-56 sm:bg-red-600 rounded-lg cursor-pointer'>
                    <Link href='/'>
                        <h1 className='text-6xl font- text-red-600 sm:text-white'>
                            <a>Lina <br/>Liu <br/>Art.</a>
                        </h1>
                    </Link>
                </div>
                <div className='hidden sm:flex text-gray-500 text-base w-1/2 sm:w-full'>
                    <p className='px-1 py-4'>Search Lina's Gallery for a flower species like "Tulip" or a medium like "Oil on Canvas" or "Watercolor".</p>
                </div>
                <SearchBar
                query={query}
                setQuery={setQuery}/>
                <div className='flex flex-col content-start content-around justify-evenly w-full my-0 my-4 pl-1'>
                    {links.map((link, index) => (
                        <NavLink 
                        href={link.path} 
                        key={index}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
              </div>
              <div className='text-sm hidden sm:flex flex-col py-6'>
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