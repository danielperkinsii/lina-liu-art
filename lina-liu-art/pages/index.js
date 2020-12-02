import React, { useEffect, useState } from 'react'
import Post from '../components/post.js'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) {
      
      console.log(entries.items)
      return entries.items
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
        <div className='flex flex-wrap content-start justify-center'>
      {posts.length > 0
        ? posts.map((p, index) => (
            <Post key={index}
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              title={p.fields.title}
              url={p.fields.image.fields.file.url}
            />
          ))
        : null}
        </div>
    </>
  )
}

export default HomePage