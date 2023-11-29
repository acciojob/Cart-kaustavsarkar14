import { useEffect, useReducer, useState } from "react"
import cartContext from "./cartContext"
import React from 'react'

const initialCartItems = [
    {
        id: 1,
        name: "Item 1",
        price: 1200,
        qty: 1
    },
    {
        id: 2,
        name: "Item 2",
        price: 1500,
        qty: 1
    },
    {
        id: 3,
        name: "Item 3k",
        price: 2000,
        qty: 1
    },
]
function reducer(state, action) {
    switch (action.type) {
        case "remove":
            return state.filter(el => el.id != action.id)
        case "increment":
            return state.map(item => item.id == action.id ? { ...item, qty: item.qty + 1 } : item)
        case "decrement":
            return state.map(item => item.id == action.id ? { ...item, qty: item.qty>0? item.qty - 1:item.qty } : item)
        case "clearcart" :
            return []
        default:
            return state
    }
}
const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, initialCartItems)
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice , setTotalPrice] = useState(0)
    useEffect(()=>{
        setTotalQty(cart.reduce((a,item)=>a+item.qty,0))
        setTotalPrice(cart.reduce((a,item)=>a+item.price*item.qty,0))
    },[cart])
    return <cartContext.Provider value={{ cart, dispatch, totalQty,totalPrice }} >
        {children}
    </cartContext.Provider>
}

export default CartProvider