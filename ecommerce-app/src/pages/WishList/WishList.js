import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useData } from '../../context/dataContext';



function WishList() {
const {wishList} = useData();
const encodedToken = localStorage.getItem("token");

//add to cart again
  const moveToCart = async (wishItem) => {
    // console.log(id)
    // try {
    //   const data  = await axios.delete(`/api/user/cart/${id}`, {
    //     headers: {
    //       authorization: encodedToken
    //     }
    //   });
    //   console.log(data,"after removd")
    // } catch (error) {
    //   console.error(error); // Handle any errors
    // }
  };


  return (
    <div>
      {wishList.map(wishItem => {
        return(
          <div>
            <p>{wishItem.Title}</p>
            <p>{wishItem.Price}</p>
            <button onClick={() => moveToCart(wishItem)}>Move from Cart</button>
          </div>
        )
      })}
      
    </div>
  )
}

export default WishList