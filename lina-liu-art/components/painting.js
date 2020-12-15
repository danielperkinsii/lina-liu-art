import React, { useState } from 'react'
import Link from 'next/link'

export default function Painting({ alt, medium, size, title, url, id, query }) {
  const [showElements, setShowElements] = useState(false)


  return (
    
    <div 
    className='pl-1 pt-1'
    onMouseEnter={() => setShowElements(true)}
    onMouseLeave={() => setShowElements(false)}>
      <Link href={`category/${id}`}>
        <a>
          <img 
          className='w-72 h-full'
          alt={alt} 
          src={`https://${url}`} 
          />
        </a>
      </Link>

      {showElements ? // displays info on mouseEnter

      <div className='sm:flex flex-col hidden sm:w-60 h-28 -mt-32 mb-4 bg-gray-700 opacity-75 hover:opacity-100 rounded-md shadow-lg mx-auto relative py-2 px-3 shadow-lg text-white'>
        <h2 className='text-xl truncate bg-yellow-300'>{title}</h2>
        <h2 className='truncate'>{medium}{size ? `, ${size}` : null}</h2>
        <Link href={`category/${id}`}>
          <a className='hidden sm:contents text-right p-2 text-blue-400 text-2xl font-bold'>Click to enlarge</a>
        </Link>
      </div>

      : null}

    </div>
  )
}