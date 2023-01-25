import React from 'react'
import Link from 'next/link'
import '../src/components/styles.module.css'


export default () => (
  <div>
    <h1>Index page</h1>

    <Link href="/notes">
      Notes
    </Link>
  </div> 
)