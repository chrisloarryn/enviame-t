import React, { Suspense } from 'react'
import { Link, Route, Switch } from 'wouter'

// import Header from "components/Header";

// import Register from 'pages/Register'
// import Login from "pages/Login";
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import ErrorPage from 'pages/ErrorPage'

import { HeroesContextProvider } from 'context/HeroesContext'

import logo from './assets/logo.png'

import './App.css'

const HomePage = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <section className='App-content'>
          {/* <Header /> */}
          <Link to='/'>
            <figure className='App-logo'>
              <img alt='Hero logo' src={logo} />
            </figure>
          </Link>
          <HeroesContextProvider>
            <Switch>
              <Route component={HomePage} path='/' />
              <Route
                component={SearchResults}
                path='/search/:keyword/:rating?'
              />
              <Route component={Detail} path='/hero/:id' />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </HeroesContextProvider>
        </section>
      </Suspense>
    </div>
  )
}
