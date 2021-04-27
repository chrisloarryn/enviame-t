import React, { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import SearchForm from 'components/SearchForm'

import { useHeroes } from 'hooks/useHeroes'
import useNearScreen from 'hooks/useNearScreen'

import debounce from 'just-debounce-it'

import { Helmet } from 'react-helmet'
import ListOfHeroes from 'components/ListOfHeroes'

export default function SearchResults({ params }: any) {
  const { keyword } = params
  const { loading, heroes, setPage } = useHeroes({ keyword })

  const externalRef = useRef<any>()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = heroes ? `${heroes.length} resultados de ${keyword}` : ''

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage: any) => prevPage + 1), 100),
    [setPage]
  )

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    },
    [debounceHandleNextPage, isNearScreen]
  )

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name='description' content={title} />
            <meta name='rating' content='General' />
          </Helmet>
          <header className='o-header'>
            <SearchForm initialKeyword={keyword} />
          </header>
          <div className='App-wrapper'>
            <h3 className='App-title'>{decodeURI(keyword)}</h3>
            <ListOfHeroes heroes={heroes} />
            <div id='visor' ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  )
}
