import React from 'react'
import Head from 'next/head'

export default function Layout() {
    return (
        <div>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div>This is the layout</div>
        </div>
    )
}