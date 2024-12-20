import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='formContainer container pt-4 pb-1 my-5 rounded-3 bg-white'>
        <h1 className='heading registerHeader text-center'>REGISTER</h1>
        <form className='my-4'>
          <div className="position-relative d-flex justify-content-center">
            <input id = "name" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" placeholder='Enter your name'/>
            <i className="inputIcon fa-solid fa-user fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "email" placeholder='Enter your email address'/>
            <i className="inputIcon fa-solid fa-envelope fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "password" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your password'/>
            <i className="inputIcon fa-solid fa-lock fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "confirm-password" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Confirm your password'/>
            <i className="inputIcon fa-solid fa-lock fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center mb-2">
            <input id = "date" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "date"/>
            <i class="inputIcon fa-solid fa-calendar-days fa-2xs"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className='d-flex align-items-center'>
              <input id = "terms" type="checkbox" className="form-check-input mb-1"/>
              <label htmlFor = "terms" className="form-check-label ms-2"> I agree to the terms & conditions </label>
            </div>
            <div className="loginLink text-center"> Already have an account? <Link to = "/login" className='fw-bold'> <u>Login</u> </Link> </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type = "submit" className="authenticationButton my-3 btn btn-light rounded-4 shadow"> Register </button>
          </div>
        </form>
    </div>
  )
}
