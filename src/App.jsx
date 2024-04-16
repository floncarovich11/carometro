import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/alunosIdev2' element={<AlunosIdev2/>}/> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
