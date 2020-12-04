import React, { useEffect, useState } from 'react'
import Post from '../components/post'
import Layout from '../components/layout'

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
  const [category, setCategory] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
    <Layout>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4">

      
        <div className='w-full flex items-center justify-center col-span-1 shadow-lg rounded-md'>
          <h1 className=''>some content here</h1>
        </div>
        <div className='col-span-2 flex flex-wrap content-start justify-start mx-auto'>
      {posts.length > 0
        ? posts.map((p, index) => (
            <Post 
              key={index}
              alt={p.fields.alt}
              title={p.fields.title}
              medium={p.fields.medium}
              size={p.fields.size}
              url={p.fields.image.fields.file.url}
            />
          ))
        : <div> Loading ... </div>}
        </div>
        </div>
    </Layout>
    </>
  )
}

export default HomePage