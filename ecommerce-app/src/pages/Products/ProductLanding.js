import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import "../Products/Product.css"
import ProductCard from './ProductCard';
import Filters from '../Filters.js/Filters';



function ProductLanding() {

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
            <div>
                <Filters />
            </div>
            <h2>Avilable Products</h2>
            <div className='card-container'>
                { productList.map((product) => (<ProductCard key={product._id} product={product} />)
                    // return(
                    //     <div className='temp-card'>
                    //         <p>{product.title }</p> 
                    //         <p>Author: {product.author}</p>
                    //         <button>Add to Cart</button>
                    //     </div>
                    // )
                )}
            </div>
        </div>
    </div>
  )
}

export default ProductLanding