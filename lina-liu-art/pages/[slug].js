import React from 'react'
import fs from 'fs'
import path from 'path'
import Layout from '../components/Layout'

const Post = ({ contents }) => {
    return (
        <div> 
            <Layout>
                <pre>
                    {contents}
                </pre>
            </Layout>
        </div>
    )
}

export const getStaticPaths = async () => {
    
    const files = fs.readdirSync('posts')
    console.log('files: ', files)
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    console.log('paths: ', paths)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const contents = fs.readFileSync(path.join('posts', slug + '.md')).toString()


    return {
        props: {
            contents
        }
    }

}

export default Post