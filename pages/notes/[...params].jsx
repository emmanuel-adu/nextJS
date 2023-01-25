import React from 'react'
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
        <h1>Catch all: {params} </h1>
    )
}