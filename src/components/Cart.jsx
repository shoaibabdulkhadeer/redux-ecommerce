import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
 
  const cart = useSelector(state => state.cart)

  return (
    <div style={{minHeight: "100vh",marginTop:"80px"}}>
         {cart.map((x) => {
          return (
            <div>
              <h1>{x.title}</h1>
            </div>
          )
         })}
        </div>
  )
}

export default Cart