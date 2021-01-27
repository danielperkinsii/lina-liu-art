import Layout from '../../components/layout'
import { getAllPaintingIds, getPaintingById } from '../../lib/api'

export default function ShowPainting({ paintingData }) {
    return (
        <>
            <Layout>
                <div className='my-24 mx-auto'>
                    <img src={`https://${paintingData.fields.image.fields.file.url}`} />
                    <h1 className='text-2xl'>{paintingData.fields.title}</h1>
                    <p>{paintingData.fields.medium}</p>
                    <p>{paintingData.fields.size}</p>
                </div>
            </Layout>
        </>
    )
}

// gets path for page
// path is the id of the painting object provided by contentful
export async function getStaticPaths() {
    const paths = await getAllPaintingIds()
    return {
        paths,
        fallback: false
    }
}

// gets painting object and sets it to props
export async function getStaticProps({ params }) {
    const paintingData = await getPaintingById(params.id)
    return {
      props: {
        paintingData
      }
    }
  }