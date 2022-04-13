import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();


export const CartProvider = (props) => {
   const [cart, setCart] = useState([1,2,3]);
   return ( 
      <CartContext.Provider value={[cart, setCart]}>
         { props.children }
      </CartContext.Provider>
   )
}