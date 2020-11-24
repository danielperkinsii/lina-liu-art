import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'

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

  
  // client.getAssets()
  //   .then((assets) => { assets.items.map((asset) => {
  //     let imageURL = `https: ${asset.fields.url}`
  //     setAssets([...imageURL])
  //   })
  // })
  //   .catch((error) => console.log(error))
  
  

  const [posts, setPosts] = useState([])
  const [assets, setAssets] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])



  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map((p) => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              title={p.fields.title}
              url={p.fields.image.fields.file.url}
            />
          ))
        : null}
        
    </>
  )
}

export default HomePage