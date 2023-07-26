import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { useData } from '../../context/DataContext';
import { ACTION_TYPE } from '../../utils/constants';
import { categorySort } from '../../utils/dataHelper';
import NavBar from '../../components/NavBar';
import { bannerImage } from '../../utils/constants';

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
   //transform: translate(-50%, -50%);
  return (
    <div className='home-container'>
      <NavBar />
      <div className='banner'>
        <img src={bannerImage} alt="banner_img" />
        <div className='banner-content' >
          <h2>Welcome to Fit-Kart,</h2>
          <h1>Your one stop fitness shop</h1>
          <button className='banner-btn' onClick={() => navigate("/ProductLanding")}>Shop Now</button>
          {/* <h1>fitness shop</h1> */}
        </div>
      </div>

        <div className='categories-container'>
            <div>
                {category && 
                 category.map(({_id,categoryName,description,image}) => {
                  console.log(category)
                    return(
                        <div className='categories-list' onClick={() => categoryHandler(categoryName) }>
                            <div id={_id}>
                                <img src={image} alt="category_img" />
                                <h3>{categoryName}</h3>
                                {/* <p>{description}</p> */}
                            </div>
                        </div>
                    )
                 })}
            </div>
        </div>
    </div>
  )
};
