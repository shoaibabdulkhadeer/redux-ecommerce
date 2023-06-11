import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {add} from '../features/cart'
import { useDispatch } from 'react-redux'

const Products = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        try {
            axios.get("https://fakestoreapi.com/products").then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        } catch (err) {
            console.error(err)
        }
    }, [])
 
    const dispatch = useDispatch()
     
    const addbtn = (product) => {
       dispatch(add(product))
    }
 
    return (
        <div className='container-fluid' style={{marginTop:"70px"}}>

            <div class="row">
                 
                 {data.map((x) => {

                         let des = x.description
                    return (
                        <div class="col-xl-3 col-md-5 col-sm-12 ">
                        <div className="card mt-4 pt-5 " style={{ width:"14rem",alignSelf:"center",minHeight:"500px" }}>
                            <img src={x.image}  className="card-img-top " alt="" style={{width:"150px",alignSelf:"center"}}/>
                            <div className="card-body">
                                <h5 className="card-title"> {x.title} </h5>
                                <p className="card-text">{des.substring(0,135)}</p>
                                <button onClick={() => addbtn(x)} className="btn btn-primary">Add to cart</button>
                            </div>
                          </div>
                    </div>
    
                     
                    )
                 })}

               
                 
                </div>

      


        </div>
    )
}

export default Products