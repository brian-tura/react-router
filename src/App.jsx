import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WhoAmI from './pages/WhoAmI'
import Products from './pages/Products'
import Homepage from './pages/Homepage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/me' Component={WhoAmI}></Route>
          <Route path='/products' Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
