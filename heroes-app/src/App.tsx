import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Temporal } from 'proposal-temporal'

const App = () => {
  // const d = new Date().toISOString()
  const dd = Temporal.now.instant().toZonedDateTimeISO('America/Santiago')
  const day = `${dd.day}`.padStart(2, '0')
  const month = `${dd.month}`.padStart(2, '0')
  console.log(`${day}-${month}-${dd.year}`)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
