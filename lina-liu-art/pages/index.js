import React, { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return (
    <div>
      <Layout>
        <Link href='/faq'>
          <a>
            go to faq
          </a>
        </Link>
      </Layout>
    </div>
  )

}
