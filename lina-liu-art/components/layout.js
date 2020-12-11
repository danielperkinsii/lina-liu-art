import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>{ title ? `Lina Liu Art :: ${title}` : 'Lina Liu Art'}</title>
                
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <div className='mx-4 px-4 pb-8 w-full'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                    <div className='h-full col-span-1'>
                        <Header />
                    </div>
                    <div className='col-span-2'>
                        { children }
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
