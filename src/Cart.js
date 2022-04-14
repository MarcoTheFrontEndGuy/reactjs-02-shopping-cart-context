import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
   const [cart, setCart] = useContext(CartContext);
  return (
    <div>
       <span>items in cart: {cart.length}</span>
       <br />
       <span>total price: {cart.length}</span>
    </div>
  )
}
