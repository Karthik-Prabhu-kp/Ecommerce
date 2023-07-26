import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import "../Products/Product.css";
import ProductCard from './ProductCard';
import Filters from '../Filters/Filters';
import { useData } from '../../context/dataContext';
import { categorySort, getFilteredProducts } from '../../utils/dataHelper';
import NavBar from '../../components/NavBar';

function ProductLanding() {
  const { filterByPrice, filterByRating, products, category } = useData();

  const categoryFiltered = categorySort(products, category);
  const filteredProducts = getFilteredProducts(categoryFiltered, filterByPrice, filterByRating);
  const isProductLength = filteredProducts && filteredProducts.length > 0;

  return (
    <div> 
      <NavBar />
      <div className="main-container">
        <div className="filter-container">
          <Filters />
        </div>
        <div className="product-container">
          <h2>Available Products</h2>
          <div className='card-container'>
            {!isProductLength ? products && products.map((product) => (<ProductCard key={product._id} product={product} />)) :
              filteredProducts.map((product) => (<ProductCard key={product._id} product={product} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLanding;
