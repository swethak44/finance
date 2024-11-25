import React from 'react'
import Menu from './Menu'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Home from './pages/Home'
import Loans from './pages/Loans'
import Shares from './pages/Shares'
import Mutualfunds from './pages/Mutualfunds'
import MFinance from './pages/MFinance'


export default function App() {
  return (
    <BrowserRouter>
    <Menu />
    <div>
      <Routes>
       <Route path='/mfinance' element={<MFinance />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/mutualfunds' element={<Mutualfunds />}></Route>
        <Route path='/shares' element={<Shares />}></Route>
        <Route path='/loans' element={<Loans />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}
