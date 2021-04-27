import { Temporal } from 'proposal-temporal'
import React, { FC } from 'react'
import { HeroI } from 'types/globals'
import { Link } from 'wouter'
import './Hero.css'

interface HeroProps extends HeroI {}

const getDateInFormat = (date: Date): string => {
  const today = new Date(date)
  const year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDate()
  const paddedMonth = `${month}`.padStart(2, '0'),
    paddedDay = `${day}`.padStart(2, '0')
  return `${year}-${paddedMonth}-${paddedDay}`
}

const Hero: FC<HeroProps> = ({ title, id, url, description, modified }) => {
  const cleanText = description.replace(/<\/?[^>]+(>|$)/g, '')
  const date = getDateInFormat(modified)
  return (
    <div className='Hero'>
      <Link to={`/hero/${id}`} className='Hero-link'>
        <h3>
          {title} <hr /> <span>{date}</span>
        </h3>
        <img loading='lazy' alt={title} src={url} />
        <h4>{cleanText}</h4>
      </Link>
    </div>
  )
}

export default Hero
