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
import NotFound from './Components/NotFound'
import Shop from './Pages/Shop'
import Contact from './Components/Contact'
import Login from "./Components/Authentication/Login"
import Register from "./Components/Authentication/Register"

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
          <Route path = "/shop" element = {<Shop/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
        <Contact/>
        <Footer/>
    </>
  )
}
