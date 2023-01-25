import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BackLink = () => (
  <Link href="/notes">
    Notes
  </Link>
)

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div>
      <h1>Note: {id} </h1>
      <BackLink />
    </div>
  )
}
