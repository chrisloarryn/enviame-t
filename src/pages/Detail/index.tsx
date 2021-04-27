import React from 'react'
import {Redirect} from 'wouter'
import Hero from 'components/Hero'
import useSingleHero from 'hooks/useSingleHero'
import Spinner from 'components/Spinner'
import {Helmet} from 'react-helmet'

export default function Detail ({ params }: { params: any }) {
  const {hero, isLoading, isError} = useSingleHero({id: params.id})
  const title = hero ? hero.title : ''

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!hero) return null

  return <>
      <Helmet>
        <title>{title} || Heroes</title>
      </Helmet>
      <h3 className="App-title">{hero.title}</h3>
      <Hero {...hero} />
    </>
}