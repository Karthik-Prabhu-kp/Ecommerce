import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ACTION_TYPE } from '../../utils/constants';
import { Navigate } from 'react-router-dom'

import "../Products/Product.css"
import { useData } from '../../context/dataContext'

function ProductCard(props) {

    let products = props.product
    const [btnClicked,setBtnClicked] = useState(false);
    const [wishClicked,setWishClicked] = useState(false)
    const {token,dataDispatch} = useData();

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      // Check if the button was previously clicked and update the state accordingly
      const storedBtnClicked = localStorage.getItem(`btnClicked_${products._id}`);
      const storedWishClicked = localStorage.getItem(`wishClicked_${products._id}`);
      if (storedBtnClicked) {
        setBtnClicked(true);
      }
      if (storedWishClicked) {
        setWishClicked(true);
      }
    }, [])
    const encodedToken = localStorage.getItem("token");

    const addToCart = async () => { 
      try {
        const product = {
          Id: `${products._id}`,
          Title: `${products.title}`,
          Author: `${products.author}`,
          Category: `${products.categoryName}`,
          Price: `${products.price}`,
        };
        const requestBody = {
          product: product
        };

        const {data: cart} = await axios.post('/api/user/cart', requestBody, {
          headers: {
            authorization: encodedToken,
          }
        });
        console.log(cart)
        setBtnClicked(true)
        dataDispatch({
          type:ACTION_TYPE.ADD_TO_CART,
          payload: cart
        })
        localStorage.setItem(`btnClicked_${products._id}`, true);
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    const wishClickHandler = async() => {
      try {
        const product = {
          Id: `${products._id}`,
          Title: `${products.title}`,
          Author: `${products.author}`,
          Category: `${products.categoryName}`,
          Price: `${products.price}`,
        };
        const requestBody = {
          product: product
        };

        const data = await axios.post('/api/user/wishlist', requestBody, {
          headers: {
            authorization: encodedToken,
          }
        });
        setWishClicked(true)
        dataDispatch({
          type:ACTION_TYPE.ADD_TO_CART,
          payload: data.wishList
        })
        localStorage.setItem(`wishClicked_${products._id}`, true);
      } catch (error) {
        console.error(error); // Handle any errors
      }

    };
    
  return (
    <section key={products._id} className='card'>
         <span
          role="button"
          className="card-wish-list"
          onClick={wishClickHandler}
          disabled={wishClicked}
          >
            <i class="fa-solid fa-heart"></i>
          </span>
          <img
            className='card-img'
            src='https://loremflickr.com/640/360'
            alt="name"
            onClick={() => navigate(`/ProductLanding/${products._id}`)}
          />
          <div className='card-info'>
              <p>{products.title }</p>
              <p>Author: {products.author}</p>
              <p>Price: {products.price}</p>
              <button onClick={addToCart} disabled={btnClicked}>Add to Cart</button>
          </div>
    </section>
  )
}

export default ProductCard
