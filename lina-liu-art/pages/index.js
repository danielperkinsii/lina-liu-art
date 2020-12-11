import React, { useEffect, useState } from 'react'
import Post from '../components/post'
import Layout from '../components/layout'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

//get static props should be on this page as an exported function

export async function getStaticProps() {
  const posts = await fetchEntries()
  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting entries for ${contentType.name}.`)
}

export async function getAllPostIds() {
  const posts = await fetchEntries()
  return posts.map(post => {
    return { 
      params: {
        id: post.sys.id 
      }
    }
  })
}

export async function getPostById(id) {
  const entries = await fetchEntries()
  const painting = entries.find(entry => entry.sys.id === id) 
  return painting
}

export default function HomePage({ posts }) {
  const breakpointColumnsObj = {
    default: 5,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 2
  };

  return (
    <>
    <Layout>
      <div className='w-full'>
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className='flex w-full mx-auto'
        columnClassName='mx-auto'>
          
        {posts.length > 0
          ? posts.map((p, index) => (
              <Post 
                key={index}
                id={p.sys.id}
                alt={p.fields.alt}
                title={p.fields.title}
                medium={p.fields.medium}
                size={p.fields.size}
                url={p.fields.image.fields.file.url}
              />
            ))
          : <div> Loading ... </div>}     
          </Masonry>           
        </div>
    </Layout>
    </>
  )
}

