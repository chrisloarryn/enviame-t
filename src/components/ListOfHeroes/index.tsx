import React, { FC } from 'react'
import { HeroI } from 'types/globals'

import Hero from '../Hero'

import './ListOfHeroes.css'
interface ListOfHeroesProps {
  heroes: HeroI[]
}

const ListOfHeroes: FC<ListOfHeroesProps> = ({ heroes }) => (
  <div className='ListOfHeroes'>
    {heroes.map(({ id, title, url, name, description, modified }) => (
      <Hero
        id={id}
        key={id}
        title={title}
        url={url}
        name={name}
        description={description}
        modified={modified}
      />
    ))}
  </div>
)

export default ListOfHeroes
