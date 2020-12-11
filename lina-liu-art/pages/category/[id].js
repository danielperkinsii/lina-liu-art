import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import { getAllPostIds, getPostById } from '../index'

// getstaticprops should be imported on this page

//getstaticpaths should be on this page
    //you can use `npm run start` to see the static pages that this function will generate on build time
export default function Example({ postData }) {

    return (
        <>
        <Layout>
            <div className='my-24 mx-auto'>
                <img src={`https://${postData.fields.image.fields.file.url}`} />
                <h1 className='text-2xl'>{ postData.fields.title }</h1>
                <p>{ postData.fields.medium }</p>
                <p>{ postData.fields.size }</p>
            </div>
        </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps( {params} ) {
    const postData = await getPostById(params.id)
    console.log(postData)
    return {
      props: {
        postData
      } // will be passed to the page component as props
    }
  }