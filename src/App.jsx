import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Idev2 from './AlunosIdev2'
import IleImec2 from './AlunosIlecImec2'
import Idev1 from './AlunosIdev1'
import IlecImec1 from './AlunosIlecImec1'
import Idev3 from './AlunosIdev3'
import IlecImec3 from './AlunosIlecImec3'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/alunosIdev2' element={<Idev2/>}/>
        <Route path='/alunosIlecImec2' element={<IleImec2/>}/>
        <Route path='/alunosIdev1' element={<Idev1/>}></Route> 
        <Route path='/alunosIlecImec1' element={<IlecImec1/>}></Route>  
        <Route path='/alunosIdev3' element={<Idev3/>}></Route>
        <Route path='/alunosIlecImec3' element={<IlecImec3/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
