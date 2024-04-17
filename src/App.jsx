import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Idev2 from './AlunosIdev2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/alunosIdev2' element={<Idev2/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
