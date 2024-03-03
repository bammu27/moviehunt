import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home.jsx'    
import Info from './pages/info.jsx'

const App = () => {


  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    
  )




  
}

export default App
