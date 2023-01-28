import React from 'react'
import Link from 'next/link'

const BackLink = () => (
  <Link href="/notes">
    Back
  </Link>
)

export default ({note}) => {

  return (
    <div>
      <h1>Note: {note.title} </h1>
      <BackLink />
    </div>
  )
}

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
