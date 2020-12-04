import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>{ title ? `Lina Liu Art :: ${title}` : 'Lina Liu Art'}</title>
                
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <div className='mx-4 px-4 pb-8 w-full'>{ children }</div>
            <style jsx global>{`
                html,
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
