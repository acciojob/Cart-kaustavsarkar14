import React, { useContext } from 'react'
import cartContext from '../context/cartContext'

const Navbar = () => {
  const {totalQty,totalPrice} = useContext(cartContext)
  return (
    <nav>useReducer
        <h2 id='nav-cart-item-count' >Total items : {totalQty}</h2>
        <h2 id='cart-total-amount' >Total amount : {totalPrice}</h2>
    </nav>
  )
}

export default Navbar