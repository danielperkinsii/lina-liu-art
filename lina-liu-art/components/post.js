import React from 'react'
import Link from 'next/link'

function Post({ alt, medium, size, title, url, id }) {
    return (
      <div className='p-1'>
        <Link href={`category/${id}`}>
            <a>
                <img className='w-72 h-60 object-cover z-20 hover:z-20 rounded-md shadow-md'
                alt={alt} 
                src={`https:${url}`} 
                />
            </a>
        </Link>
        <div className="flex flex-col w-5/6 h-24 opacity-75 bg-gray-200 -mt-16 mx-auto relative z-10 rounded-md py-2 px-3 shadow-lg">
          <h2 className="text-xl">{title}</h2>
          <h2 className="">{medium}, {size}</h2>
          <Link href={id}>
            <a className='text-right p-1'>Click to enlarge</a>
          </Link>
        </div>
      </div>
    )
  }
  
  export default Post