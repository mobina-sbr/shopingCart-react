import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './../src/components/pages/Products'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Basket from './../src/components/pages/Basket'
// import Login from './components/pages/Login'
import { CartProvider } from './context/CardContext'
import { ApiContextProvider } from './context/DataContext'
import Success from './components/pages/Success'

export default function App() {
  return (
    <>
      <ApiContextProvider>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path='/' Component={Products} />
            <Route path='/basket' Component={Basket} />
            <Route path='/success' Component={Success}/>
            {/* <Route path='/login' Component={Login} /> */}
          </Routes>
        </CartProvider>
      </ApiContextProvider>
    </>
  )
}
