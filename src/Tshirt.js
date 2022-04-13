import React from 'react'

const Tshirt = (props) => {

  const addToCart = () => {
    console.log("clicked..");
  }

  return (
   <div>
      <h2>{props.name}</h2>
      <h4>{props.name}</h4>
      <button onClick={addToCart}>Add to cart</button>
      <hr />
   </div>
  )
}

export default Tshirt