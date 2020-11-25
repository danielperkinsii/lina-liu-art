import React from 'react'
import Link from 'next/link'

function Post({ alt, date, title, url }) {
    return (
      <div className='p-1'>
        <Link href={`/${encodeURIComponent(title)}`}>
            <a>
                <img className='w-96 h-72 object-cover z-0 rounded-md'
                alt={alt} 
                src={`https:${url}`} 
                />
            </a>
        </Link>
        <div className="w-80 h-24 opacity-75 bg-gray-200 -mt-16 mx-auto relative hover:z-10 rounded-md py-2 px-3">
          <h2 className="text-blue-500 text-xl">{title}</h2>
          <h2 className="text-blue-500 text-xl">{title}</h2>
          <h2 className="text-blue-500 text-xl">{title}</h2>
        </div>
      </div>
    )
  }
  
  export default Post