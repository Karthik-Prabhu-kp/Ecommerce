import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {

    const navigate = useNavigate();
    const [categories,setCategories] = useState();

    const getCategoryData = async() => {
        try{
            const response = await axios ("/api/categories");
            setCategories(response.data.categories)
        }
        catch(e) {
            console.error()
        }
    }

    useEffect(e => {
        getCategoryData()
    },[])


  return (
    <div className='home-container'>
        <div className='banner'>
            <div className='banner-content' onClick={() => navigate("/Products")}>
            <h4>Welcome to Fitwear</h4>
            <h1>Your one stop</h1>
            <h1>fitness shop</h1>
            </div>
        </div>

        <div className='categories-container'>
            <div className='categories-list'>
                {categories && 
                 categories.map(({_id,categoryName,description}) => {
                    return(
                        <div>
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
