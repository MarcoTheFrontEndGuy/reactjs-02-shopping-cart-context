import React from 'react'
import Cart from './Cart'
import { CartProvider } from './CartContext'
import './style.css'
import {TshirtList} from './TshirtList'


const App = () => {
   return (
      <CartProvider>
        <div>
          <Cart />
          <TshirtList /> 
        </div>
      </CartProvider>
    
   )
}

export default App 