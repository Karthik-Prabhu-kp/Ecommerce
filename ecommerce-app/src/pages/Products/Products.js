import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import "../Products/Product.css"



function Products() {

    const [productList,SetproductList] = useState([]);
    const getProductsData = async() => {
        try{
            const response = await axios ("/api/products");
            SetproductList(response.data.products)
        }
        catch(e) {
            console.error()
        }
    }

    useEffect(e => {
        getProductsData()
    },[])

  return (
    <div>
        <div>
            { productList.map(e => {
                return(
                    <div className='temp-card'>
                        <p>{e.title }</p> 
                        <p>Author: {e.author}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Products