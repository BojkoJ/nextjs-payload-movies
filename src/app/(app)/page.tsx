import React from 'react'
import MovieCards from './MovieCards'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })

  return (
    <>
      <main>
        <MovieCards movies={movies.docs} />
      </main>
    </>
  )
}

export default Page
