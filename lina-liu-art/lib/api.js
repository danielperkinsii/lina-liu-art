// api setup
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
  
// fetches paintings from contentful and returns an array
export async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting entries for ${contentType.name}.`)
}

// creates an array of painting id's for dynamic routing 
// for ./category/[id].js
export async function getAllPaintingIds() {
    const paintings = await fetchEntries()
    return paintings.map(painting => {
        return { 
            params: {
                id: painting.sys.id 
            }
        }
    })
}
  
// finds the painting with the accociated id
// to be rendered on ./category/[id].js 
export async function getPaintingById(id) {
    const entries = await fetchEntries()
    const painting = entries.find(entry => entry.sys.id === id) 
    return painting
}