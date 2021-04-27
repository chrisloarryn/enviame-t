import React from 'react'
import ListOfHeroes from 'components/ListOfHeroes'
import { useHeroes } from 'hooks/useHeroes'
// import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

const Home = () => {
  const { heroes } = useHeroes()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className='o-header'>
        <SearchForm />
      </header>
      <div className='App-wrapper'>
        <div className='App-main'>
          <div className='App-results'>
            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfHeroes heroes={heroes} />
          </div>
          {/* <div className='App-category'>
            <TrendingSearches />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home