import React from 'react'
import Head from 'next/head'

export default function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>{ title ? `Lina Liu Art :: ${title}` : 'Lina Liu Art'}</title>
                <script ></script>
            </Head>
            <div>{ children }</div>
        </div>
    )
}