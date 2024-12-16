import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import SignupDiscount from './Components/SignupDiscount'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
        <SignupDiscount/>
        <Navbar/>
        <Routes>
          <Route path = "" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
