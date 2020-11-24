import React from 'react'
import Image from 'next/image'

function Post({ alt, date, title, url }) {
    return (
      <div className="container">
        <a href={null}>
          <img 
          alt={alt} 
          src={`https:${url}`} 
          
          />
        </a>
        <div className="text">
          <h2 className="text-blue-500">{title}</h2>
          <h4>{date}</h4>
        </div>
        
      </div>
    )
  }
  
  export default Post