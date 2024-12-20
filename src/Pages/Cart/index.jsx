import React from 'react'
import "./style.css"
import Items from './Components/Items'
import Summary from './Components/Summary'

export default function Cart() {
  return (
    <div className='container my-5'>
      <div className="row g-2">
        <div className="col-6">
          <Items/>
        </div>
        <div className="col-6">
          <Summary/>
        </div>
      </div>
    </div>
  )
}
