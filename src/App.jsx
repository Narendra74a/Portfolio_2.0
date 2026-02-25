import React from 'react'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    
    <BrowserRouter>
      {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={ <Contact/> }/>
    </Routes>
    
    {/* <Footer/> */}
    </BrowserRouter>
   
    </>
  )
}

export default App