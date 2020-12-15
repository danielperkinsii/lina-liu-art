import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../lib/api'
import Painting from '../components/painting'
import Layout from '../components/layout'
import SearchBar from '../components/searchbar'
import Masonry from 'react-masonry-css'

export default function HomePage({ paintings }) {
  const [query, setQuery] = useState('')
  const [paintingsShown, setPaintingsShown] = useState([...paintings])
  const breakpointColumnsObj = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 2
  }
  let paintingsRegex = new RegExp(query, "i")

  
  function filterPaintings() {
    if (query.length > 0) {
      let newPaintings = [...paintings].filter(painting => paintingsRegex.test(painting.fields.title))
      setPaintingsShown(newPaintings) 
    } else if (query.length === 0) {
      setPaintingsShown([...paintings])
    }
  }

  useEffect(() => {
    filterPaintings()
  }, [query])

  return (
    <>
    <Layout
    query={query}
    setQuery={setQuery}>      
      <div className='w-full'>
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className='flex w-full mx-auto'
        columnClassName='mx-auto'>
        {paintingsShown.length > 0
          ? paintingsShown.map((p, index) => (
              <Painting 
                key={index}
                id={p.sys.id}
                title={p.fields.title}
                medium={p.fields.medium}
                size={p.fields.size}
                url={p.fields.image.fields.file.url}
                query={query}
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

