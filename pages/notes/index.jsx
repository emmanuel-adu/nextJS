import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const notes = Array.from({length: 15}, (_, i) => ({ id: i, title: `Note: ${i}` }))

  return (
    <div>
      <h1>
        Notes

      </h1>

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
