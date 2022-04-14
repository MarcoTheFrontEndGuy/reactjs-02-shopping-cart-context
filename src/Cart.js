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
       <br />
       <br />
       <br />
       <br />
       <div className="listSelectedArticles">
         {cart.map((eachArticle) => (
           <div className="articleWithDetails" >
             <h2>{eachArticle.name}</h2>
             <p>{eachArticle.price}</p>
           </div>
         ))}
       </div>
    </div>
  )
}
