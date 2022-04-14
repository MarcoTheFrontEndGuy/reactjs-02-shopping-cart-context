import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
   const [cart, setCart] = useContext(CartContext);
   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
       <span>items in cart: {cart.length}</span>
       <br />
       <span>total price: {totalPrice.toFixed(2)}</span>
    </div>
  )
}
