import React, { useState } from 'react'
import Link from 'next/link'

function Post({ alt, medium, size, title, url, id }) {
  const [showElements, setShowElements] = useState(false)

  return (
    <div 
    className='pl-1 pt-1'
    onMouseEnter={() => setShowElements(true)}
    onMouseLeave={() => setShowElements(false)}
    >
      <Link href={`category/${id}`}>
          <a className=''>
              <img className='w-72 h-full'
              alt={alt} 
              src={`https://${url}`} 
              />
          </a>
      </Link>
      {showElements ? 
      <div className='flex flex-col w-5/6 h-28 -mt-32 mb-4 bg-gray-700 opacity-75 hover:opacity-100 transition duration-600 ease-in-out rounded-md shadow-lg mx-auto relative py-2 px-3 shadow-lg text-white'>
        <h2 className='text-xl'>{title}</h2>
        <h2 className=''>{medium}, {size}</h2>
        <Link href={`category/${id}`}>
          <a className='hidden sm:contents text-right p-2 text-blue-400 text-2xl font-bold'>Click to enlarge</a>
        </Link>
      </div>
      : null}
    </div>
  )
}
  
  export default Post