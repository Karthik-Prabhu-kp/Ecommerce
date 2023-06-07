import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useData } from '../../context/dataContext';



function Cart() {

  const {token,cart: contextCart } = useData();
  const isCartLength = contextCart && contextCart.cart && contextCart.cart.length > 0
  const encodedToken = localStorage.getItem("token");
  console.log(encodedToken)
  // console.log(cart,"in cart render")

  const removeFromCart = async (id) => {
    console.log(id)
    try {
      const data  = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: encodedToken
        }
      });
      console.log(data,"after removd")
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };


  return (
    <div>
        {
        isCartLength ?
         contextCart.cart.map(cartItems => {
            const { Id } = cartItems
            return(
              <div key={ Id }>
                <p>{cartItems.Title}</p>
                <p>{cartItems.Price}</p>
                <button onClick={() => removeFromCart(Id)}>Remove from Cart</button>
                <button>Move to WishList</button>
              </div>
            );
          }) 
          : <h2>No products in cart !</h2>
        }
    </div>
  )
}

export default Cart