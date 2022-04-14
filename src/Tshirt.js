import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'


export default function Tshirt(props) {
   const [cart, setCart] = useContext(CartContext);
   const tshirt = {name: props.name, price: props.price}
   const addToCart = () => {
    
      setCart(previousState => [...previousState, tshirt]);
      
   }

  return (
    <div>
       <h2>{props.name}</h2>
       <h4>{props.price}</h4>
       <button onClick={addToCart} >Add to cart</button>
       <hr />
    </div>
  )
}
