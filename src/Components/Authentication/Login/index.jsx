import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='formContainer container pt-4 pb-1 my-5 rounded-3 bg-white'>
        <h1 className='heading authenticationHeader text-center'>LOGIN</h1>
        <form className='my-4'>
          <div className="position-relative d-flex justify-content-center">
            <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "email" placeholder='Enter your email address'/>
            <i className="inputIcon fa-solid fa-envelope fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center mb-2">
            <input id = "password" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your password'/>
            <i className="inputIcon fa-solid fa-lock fa-2xs"></i>
          </div>
          <div className="loginLink text-center mb-2"> Don't have an account? <Link to = "/register" className='fw-bold'> <u>Register</u> </Link> </div>
          <div className="loginLink text-center mb-3"> Forgot your password? <Link to = "/login" className='fw-bold'> <u>Reset your password</u> </Link> </div>
          <div className="d-flex justify-content-center">
            <button type = "submit" className="authenticationButton my-3 btn btn-light rounded-4 shadow"> Login </button>
          </div>
        </form>
    </div>
  )
}
