import React from 'react'
import { useSelector } from 'react-redux'
import {remove} from "../features/cart"
import { useDispatch } from 'react-redux'

const Cart = () => {
 
  const cart = useSelector(state => state.cart)

 
 
  const dispatch = useDispatch()

  const remBtn = (id) => {
    dispatch(remove(id))
  }

//total price reduce array method
  const totalPrice = cart.reduce((sum,x) => {
    return sum = sum + x.price
  },0)

  

  
  return (
    <div style={{minHeight: "100vh",marginTop:"80px" , display:"flex",justifyContent:"center"}} className='container-fluid '>
     <div class="container text-center">
 
     

        <h3 className='font-monospace mt-3'>All Products</h3>


        {cart.map((x) => {
          return (
       
            <div class="row align-items-center justify-content-center my-3 " >
              <div class="col-12 col-sm-3 col-lg-2 py-3">
                   <img src={x.image} alt='' width={70}/>
              </div>
              <div class="col-12 col-sm-3 col-lg-2">
                <p>{x.title} </p>
              </div>

              <div class="col-12 col-sm-3 col-lg-2">
                 <b>{x.category}</b>
              </div>

              <div class="col-6 col-sm-3 col-lg-2">
                 <b>Price: ${x.price}</b>
              </div>
            
          
              <div class="col-6 col-sm-3 col-lg-2">
                 <button onClick={() => remBtn(x.id)} className='btn btn-warning'>Remove</button>
              </div>
              <hr className='mt-2'/>
            </div>
           
          )
        })}
                
            
                <div class="row align-items-center justify-content-center my-3 " >
              <div class="col-12 col-sm-3 col-lg-2 py-3">
                   <p style={{fontFamily:"cursive"}}>All Products</p>
              </div>
              <div class="col-12 col-sm-3 col-lg-2">
                <p>{""}</p>
              </div>

              <div class="col-12 col-sm-3 col-lg-2">
                 <b>{""}</b>
              </div>

              <div class="col-6 col-sm-3 col-lg-2">
                 <b>Total Price:${totalPrice}</b>
              </div>
            
          
              <div class="col-6 col-sm-3 col-lg-2">
                 <button className='btn btn-info'>Order</button>
              </div>
              <hr className='mt-2'/>
            </div>


 


           </div>



        
        </div>
  )
}

export default Cart