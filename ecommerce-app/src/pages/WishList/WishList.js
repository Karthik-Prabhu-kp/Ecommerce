import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useData } from '../../context/dataContext';

import NavBar from "../../components/NavBar";
import { getWishlistProduct } from '../../utils/wishlistHelper';



function WishList() {
const { wishList } = useData();
const encodedToken = localStorage.getItem("token");
console.log("wish",wishList)
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

  useEffect(() => {
    getWishlistProduct();
  }, [])

  return (
    <div>
      <NavBar />
      <h2>Wishlist Items</h2>
      {wishList.length > 1  ?  [ ].map(wishItem => {
        return(
          <div>
            <p>{wishItem.Title}</p>
            <p>{wishItem.Price}</p>
            <button onClick={() => moveToCart(wishItem)}>Move from Cart</button>
          </div>
        )
      }): <p>No products wishlisted</p>}
      
    </div>
  )
}

export default WishList