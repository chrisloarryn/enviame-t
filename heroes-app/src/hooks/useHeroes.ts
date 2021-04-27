import {useContext, useEffect, useState} from 'react'
import getHeroes from '../services/getHeroes'
import { HeroesContext } from '../context/HeroesContext'
import { HeroI } from 'types/globals'

const INITIAL_PAGE = 0

export function useHeroes ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {heroes, setHeroes} = useContext(HeroesContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'avengers'

  useEffect(function () {
    setLoading(true)

    getHeroes({ keyword: keywordToUse })
      .then(heroes => {
        setHeroes(heroes)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setHeroes])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getHeroes({ keyword: keywordToUse, page })
      .then(nextHeroes => {
        setHeroes((prevHeroes: HeroI[]) => prevHeroes.concat(nextHeroes))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setHeroes])

  return {loading, loadingNextPage, heroes, setPage}
}