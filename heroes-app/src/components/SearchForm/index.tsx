import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'
import css from './SearchForm.module.css'
import Button from 'components/Button'

interface SearchFormProps {
  initialKeyword?: string
}

const SearchForm: React.FC<SearchFormProps> = ({ initialKeyword = '' }) => {
  const [_, pushLocation] = useLocation()

  const { keyword, changeKeyword } = useForm({
    initialKeyword
  })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navigate to other route
      pushLocation(`/search/${keyword}`)
    }
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  return (
    <form onSubmit={handleSubmit} className={css['c-search']}>
      <Button>Buscar</Button>
      <input
        className={css['c-search-input']}
        placeholder='Search a hero here...'
        onChange={handleChange}
        type='text'
        value={keyword}
      />
    </form>
  )
}

export default SearchForm
