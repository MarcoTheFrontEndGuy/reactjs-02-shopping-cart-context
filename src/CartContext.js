import React, { createContext, useState } from 'react'


export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider>
       {props.children}
    </CartContext.Provider>
  )
}
