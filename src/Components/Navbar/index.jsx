import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-3">
      <div className="container">
        <Link className="navbar-brand me-4 heading" to = "home">VISTORA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-3 mb-2 mb-lg-0 fw-medium d-flex justify-content-between align-items-center">
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "home">Shop</Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "home">On Sale</Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "home">New Arrivals</Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "home">Brands</Link>
            </li>
          </ul>
          <div className="searchContainer">
              <input className="searchBar form-control rounded-5 px-5 py-2" type="search" placeholder="Search for products...." aria-label="Search"/>
              <i className="searchIcon fa-solid fa-magnifying-glass fa-sm px-1"></i>
          </div>
          <div className="userManage d-flex justify-content-between align-items-center">
            <div className='mx-4'>
              <Link to = "cart">
                <i className="fa-solid fa-cart-shopping fa-sm"></i>
              </Link>
            </div>
            <div>
              <Link to = "profile">
                <i className="fa-regular fa-user fa-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
