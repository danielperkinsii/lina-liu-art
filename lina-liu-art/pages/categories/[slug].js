// import Layout from '../../components/layout'

// import { getStaticProps } from ".."
import { getPaintingsByCategory, getCategories } from '../../lib/api'

export default function Categories({ category, paintings}) {
    return (
        <>
          <div>{category}</div>
          <div>{paintings}</div>
          <div>test div</div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getCategories()
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const paintings = await getPaintingsByCategory(params.category)

    return {
        props: {
            category,
            paintings
        }
    }
}

