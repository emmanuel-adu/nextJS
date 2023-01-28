import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({notes}) => {
  const router = useRouter()

  return (
    <div>
      <h1> Notes </h1>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                <strong>{note.title}</strong>
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={e => router.push('/')}>
        Home
      </button>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}
