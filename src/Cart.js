import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
   const [cart, setCart] = useContext(CartContext);
  return (
    <div>
       <span>items in cart: {cart}</span>
       <br />
       <span>total price: 0</span>
    </div>
  )
}
