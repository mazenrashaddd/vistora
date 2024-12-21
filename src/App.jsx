import React, { useState } from 'react'
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
  const [cartCounter, setCartCounter] = useState(1);

  function ProtectedRoute(props){
    if (localStorage.getItem("token") === null)
      return <Login/>;
    else
      return props.children;
  }

  return (
    <>
        <SignupDiscount/>
        <Navbar cartCounter = {cartCounter}/>
        <Routes>
          <Route path = "" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/cart" element = {<ProtectedRoute> <Cart cartCounter = {cartCounter}/> </ProtectedRoute>}/>
          <Route path = "/profile" element = {<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
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
