import React from 'react'
import Link from 'next/link'
import '../src/components/styles.module.css'

export default ({content}) => (
  <div>
    <h1>{content.title}</h1>

    <Link href="/notes">
      Notes
    </Link>
  </div>
)

export function getStaticProps(params) {
  // get data from CMS
  console.log(params)
  console.log('server side rendering emmanule test')

  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  }
}

