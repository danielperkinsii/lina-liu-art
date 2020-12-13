import React, { useState } from 'react'
import Painting from '../components/painting'
import Layout from '../components/layout'
import Masonry from 'react-masonry-css'
import { fetchEntries } from '../lib/api'

export default function HomePage({ paintings }) {
  const [query, setQuery] = useState('')
  const breakpointColumnsObj = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 2
  }

  return (
    <>
    <Layout>
      <div className='w-full'>
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className='flex w-full mx-auto'
        columnClassName='mx-auto'>
        {paintings.length > 0
          ? paintings.map((p, index) => (
              <Painting 
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

// gets painting object and sets it to props
export async function getStaticProps() {
  const paintings = await fetchEntries()
  return {
    props: {
      paintings
    }
  }
}