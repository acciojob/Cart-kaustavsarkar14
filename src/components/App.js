import React, { useContext } from 'react'
import cartContext from '../context/cartContext'
import Navbar from './Navbar'

const App = () => {
    const { cart, dispatch } = useContext(cartContext)

    return (
        <div id='main'>
            <Navbar />
            <button id='clear-all-cart' onClick={() => dispatch({ type: "clearcart" })} >Clear Cart</button>
            <div>
                {
                    cart.length == 0 ?
                        <p>Cart is currently empty</p>
                        :
                        <div id="cart-items-list">
                            {cart.map(item => {
                                return (
                                    <div key={item.id} style={{ border: "1px solid black" }} >
                                        <h3>{item.name}</h3>
                                        <p id={"cart-item-price-" + item.id} >${item.price}</p>
                                        <button id={`increment-btn-${item.id}`} onClick={() => dispatch({ type: "increment", id: item.id })}>+</button>
                                        <p id={"cart-amount-" + item.id} >{item.qty}</p>
                                        <button id={`decrement-btn-${item.id}`} onClick={() => dispatch({ type: "decrement", id: item.id })}>-</button>
                                        <button id={"cart-item-remove-" + item.id} onClick={() => dispatch({ type: "remove", id: item.id })} >Remove</button>
                                    </div>
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    )
}

export default App