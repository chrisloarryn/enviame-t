import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { HeroI } from 'types/globals'

// interface ContextType {
//   heroes: HeroI[]
//   setHeroes: unknown | Dispatch<SetStateAction<HeroI[]>>
// }

export const HeroesContext = createContext({
  heroes: [],
  setHeroes: (_value: HeroI[]) => console.log()
})

export const HeroesContextProvider: FC = ({ children }) => {
  const [heroes, setHeroes] = useState<HeroI[]>([])
  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}> {children}</HeroesContext.Provider>
  )
}

