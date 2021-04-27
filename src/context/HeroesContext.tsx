import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { HeroI } from 'types/globals'

interface ContextType {
  heroes: HeroI[],
  setHeroes: Dispatch<SetStateAction<HeroI[]>>
}

export const HeroesContext = createContext<ContextType>({
  heroes: [],
  setHeroes: () => {}
})

export const HeroesContextProvider: FC = ({ children }) => {
  const [heroes, setHeroes] = useState<HeroI[]>([])
  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}> {children}</HeroesContext.Provider>
  )
}

