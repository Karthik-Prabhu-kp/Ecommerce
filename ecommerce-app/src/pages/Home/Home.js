import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { useData } from '../../context/dataContext';
import { ACTION_TYPE } from '../../utils/constants';
import { categorySort } from '../../utils/dataHelper';

//useData
export default function Home() {

    const {category,cart,dataDispatch,getCategoryData,products} = useData()
    console.log(cart)
    const navigate = useNavigate();

    const categoryHandler = (categoryName,isChecked) => {
        dataDispatch({
          type: ACTION_TYPE.SORT_BY_CATEGORY,
          payload: {
            categoryName: categoryName,
            isChecked: isChecked,
          }
        });

        const filteredProducts = categorySort(products, category);
        navigate("/productLanding");
      };
   
  return (
    <div className='home-container'>
        <div className='banner'>
            <div className='banner-content' onClick={() => navigate("/ProductLanding")}>
            <h4>Welcome to Fitwear</h4>
            <h1>Your one stop</h1>
            <h1>fitness shop</h1>
            </div>
        </div>

        <div className='categories-container'>
            <div>
                {category && 
                 category.map(({_id,categoryName,description}) => {
                    return(
                        <div className='categories-list' onClick={() => categoryHandler(categoryName) }>
                            <div id={_id}>
                                <h4>{categoryName}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                    )
                 })}
            </div>
        </div>
    </div>
  )
};
