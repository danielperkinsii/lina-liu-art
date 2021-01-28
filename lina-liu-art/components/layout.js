import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children, title, query, setQuery }) {
    return (
        <div>
            <Head>
                <title>{ title ? `Lina Liu Art :: ${title}` : 'Lina Liu Art'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className='pb-8 w-full'>
                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/4'>
                        <Header query={query} setQuery={setQuery}/>
                    </div>
                    <div className='mx-auto relative'>
                        { children }
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    overflow-x: hidden;
                    font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.78;
                    color: #555;
                }
            `}</style>
        </div>
    )
}
