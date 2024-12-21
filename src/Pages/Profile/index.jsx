import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';

export default function Profile() {
  return (
    <div className='profile container my-5'>
      <div className="bg-light p-3 rounded-4">
        <h1 className='heading profileHeader mb-4'>Profile</h1>
        <div className="d-flex align-items-center mb-5">
          <div className="profileImageContainer rounded-circle border border-black border-2 position-relative">
            <div className="profileImageIconContainer rounded-circle position-absolute" role = "button">
              <i className="fa-solid fa-camera fa-2xs"></i>
            </div>
          </div>
          <div>
            <p className='m-0 ms-3 pt-4'>Mohamed Tarek</p>
            <h4 className='ms-3'>Your account is ready and going</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 border-end border-3">
            <div>
              <ul>
                  <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                    let selected = document.querySelector(".editProfile");
                    let unselected = document.querySelector(".passwordAndSecurity");
                    
                    selected.style.display = 'block';
                    unselected.style.display = 'none';
                  }}>
                    <div>
                      Edit Profile
                    </div>
                  </li>
                  <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                    let selected = document.querySelector(".passwordAndSecurity");
                    let unselected = document.querySelector(".editProfile");
                    
                    selected.style.display = 'block';
                    unselected.style.display = 'none';
                  }}>
                    <div>
                      Password & Security
                    </div>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div>
                <div className="editProfile ms-4">
                  <form>
                    <div className="row">
                      <div className="col-6">
                        <p className='mb-4'>Personal</p>
                        <label htmlFor='firstName' className='form-label'>First Name</label>
                        <div className="position-relative">
                          <input id = "firstName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" placeholder='Enter your first name'/>
                          <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                        </div>
                        <label htmlFor='lastName' className='form-label'>Last Name</label>
                        <div className="position-relative">
                          <input id = "lastName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" placeholder='Enter your last name'/>
                          <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                        </div>
                      </div>
                      <div className="col-6">
                      <p className='mb-4'>Contact</p>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <div className="position-relative">
                          <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "email" placeholder='Enter your email address'/>
                          <i className="profileInputIcon fa-solid fa-envelope fa-2xs"></i>
                        </div>
                        <label htmlFor='phone' className='form-label'>Phone Number</label>
                        <div className="position-relative">
                          <input id = "phone" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "tel" placeholder='Enter your phone number'/>
                          <i className="profileInputIcon fa-solid fa-phone fa-2xs"></i>
                        </div>
                      </div>
                    </div>
                    <button type = "submit" className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"> Save </button>
                  </form>
                </div>
                <div className="passwordAndSecurity ms-4">
                  <form>
                    <p className='mb-4'>Change Password</p>
                    <label htmlFor='current' className='form-label'>Current Password</label>
                    <div className="position-relative">
                      <input id = "current" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your current password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <label htmlFor='new' className='form-label'>New Password</label>
                    <div className="position-relative">
                      <input id = "new" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your new password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <label htmlFor='confirmNew' className='form-label'>Confirm Password</label>
                    <div className="position-relative">
                      <input id = "confirmNew" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Confirm your new password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <button type = "submit" className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"> Save </button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
