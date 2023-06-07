import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import "../Products/Product.css"
import ProductCard from './ProductCard';
import Filters from '../Filters.js/Filters';
import { useData } from '../../context/dataContext';
import { categorySort,getFilteredProducts } from '../../utils/dataHelper';



function ProductLanding() {

    const {filterByPrice,filterByRating,products,category} = useData();

    const categoryFiltered = categorySort(products,category);
    const filteredProducts = getFilteredProducts(categoryFiltered, filterByPrice, filterByRating)
    const isProductLength = filteredProducts && filteredProducts.length > 0


  return (
    <div> 
        <div>
            <div>
                <Filters />
            </div>
            <h2>Avilable Products</h2>
            <div className='card-container'>
                {!isProductLength  ? products && products.map((product) => (<ProductCard key={product._id} product={product} />)) :
                filteredProducts.map((product) => (<ProductCard key={product._id} product={product} />)) }
                
            </div>
        </div>
    </div>
  )
}

export default ProductLanding