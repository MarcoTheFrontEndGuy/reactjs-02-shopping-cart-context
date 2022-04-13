import React from 'react'

export default function Tshirt(props) {
   const addToCart = () => {
      // console.log("clicked");
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
