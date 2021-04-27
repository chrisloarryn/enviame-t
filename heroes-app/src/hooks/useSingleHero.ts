import { useState, useEffect } from 'react'
import { useHeroes } from 'hooks/useHeroes'
import getSingleHero from 'services/getSingleHero'

export default function useSingleGif({ id }) {
  const { heroes } = useHeroes()
  const heroFromCache = heroes.find((singleHero) => singleHero.id === id)

  const [hero, setHero] = useState(heroFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(
    function () {
      if (!hero) {
        setIsLoading(true)
        // llamar al servicio si no tenemos hero
        getSingleHero({ id })
          .then((hero) => {
            setHero(hero)
            setIsLoading(false)
            setIsError(false)
          })
          .catch((err) => {
            setIsLoading(false)
            setIsError(true)
          })
      }
    },
    [hero, id]
  )

  return { hero, isLoading, isError }
}
