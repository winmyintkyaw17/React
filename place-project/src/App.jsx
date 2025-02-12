import { useState } from 'react'

import './App.css'
import Title from './components/Title'
import Button from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'
import PlaceList from './pages/PlaceList'
import PlaceDetail from './pages/PlaceDetail'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<PlaceList/>}></Route>
        <Route path='/:id' element={<PlaceDetail/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
