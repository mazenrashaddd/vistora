import React from 'react'
import "./style.css"
import Items from './Components/Items'
import Summary from './Components/Summary'
import EmptyCart from './Components/EmptyCart'

export default function Cart({cartContent, setCartContent}) {
  return (
    <div className='container my-5'>
      {(cartContent.items.length == 0 ?
        <EmptyCart/>
        :
        <div className="row g-3">
          <div className="col-7">
            <Items cartContent={cartContent} setCartContent = {setCartContent}/>
          </div>
          <div className="col-5">
            <Summary cartContent={cartContent}/>
          </div>
        </div>
      )}
    </div>
  )
}
