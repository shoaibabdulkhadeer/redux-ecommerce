import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

    return (
        <div className='container-fluid' style={{minHeight: "100vh"}}>

            <div class="row align-items-start">
                 
                 {data.map((x) => {
                    return (
                        <div class="col-xl-3 col-md-5 col-sm-9">
                        <div className="card my-2 mx-2" style={{ width: "18rem",alignSelf:"center" }}>
                            <img src={x.image} height={250} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
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