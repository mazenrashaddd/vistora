import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar from './Components/Navbar'
import {Routes, Route, useNavigate} from 'react-router-dom'
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
import axios from 'axios'
import ProductDetails from "./Pages/ProductDetails/index";

export default function App() {
  const [cartContent, setCartContent] = useState([]);
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  function getUserData(){
    let data = {
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    }

    axios.get(`https://muhammadnruno.pythonanywhere.com/api/users/${localStorage.getItem("id")}`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then((res) => {
      data["first_name"] = res.data.first_name;
      data["last_name"] = res.data.last_name;
      data["email"] = res.data.email;
      data["phone"] = res.data.phone;
      localStorage.setItem("role", res.data.role)
    })

    axios.get(`https://muhammadnruno.pythonanywhere.com/api/cart/${localStorage.getItem("id")}`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then((res) => {
      setCartContent(res.data.items);
    })

    setUserData(data);
  }

  function logOut(){
    setUserData(null);
    localStorage.clear();
    navigate("/home")
  }

  function ProtectedRoute(props){
    if (localStorage.getItem("id") === null)
      return navigate("/login");
    else
      return props.children;
  }

  useEffect(() => {
    return(
      logOut()
    )
  }, [])

  return (
    <>
        {localStorage.getItem("id") == null ?
          <SignupDiscount/>
          :
          <></>
        }
        <Navbar cartContent = {cartContent} logOut = {logOut}/>
        <Routes>
          <Route path = "" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/cart" element = {<ProtectedRoute> <Cart cartContent = {cartContent}/> </ProtectedRoute>}/>
          <Route path = "/profile" element = {<ProtectedRoute> <Profile userData = {userData}/> </ProtectedRoute>}/>
          <Route path = "/shop" element = {<Shop/>}/>
          <Route path = "/product" element = {<ProductDetails}/>
          <Route path = "/login" element = {<Login getUserData={getUserData}/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
        <Contact/>
        <Footer/>
    </>
  )
}
