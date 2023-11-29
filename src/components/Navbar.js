import React, { useContext } from 'react'
import cartContext from '../context/cartContext'

const Navbar = () => {
  const {totalQty,totalPrice} = useContext(cartContext)
  return (
    <div>Navbar
        <h2 id='nav-cart-item-count' >{totalQty}</h2>
        <h2 id='cart-total-amount' >{totalPrice}</h2>
    </div>
  )
}

export default Navbar