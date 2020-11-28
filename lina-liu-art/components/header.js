import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
    <>
        <nav className='w-full mb-16 text-gray-800 bg-gray-300 flex justify-between items-end px-4 sm:text-xl'>
            <div className='w-24 -mb-10 mt-2 px-3 bg-red-600 rounded-md'>
                <Link href='/'>
                    <h1 className='text-3xl font- tracking-widest text-white bg-red-600'>
                        <a>Lina Liu Art.</a>
                    </h1>
                </Link>
            </div>
            <ul className='flex px-8 space-x-3 py-4'>
                <li className='transition duration-500 ease-in-out hover:underline hover:text-white'>
                    <Link href='#'>
                        <a>Roses</a>    
                    </Link>
                </li>
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
                    <Link href='#' >
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
            <ul className='flex space-x-4 py-4'>
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
        </nav>
    </>
    )
}