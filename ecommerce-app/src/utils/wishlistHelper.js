import axios from 'axios';
import { ACTION_TYPE } from "./constants";


export const isProductInWishlist = (wishlisted,id) => {
    return wishlisted.find((wishlistedItem) => wishlistedItem._id === id) ? true : false
}

export const addToWishlist = async(wishedProduct,encodedToken,dataDispatch) => {
    try {
    //   const wishedProduct = {
    //     Id: `${products._id}`,
    //     Title: `${products.title}`,
    //     Author: `${products.author}`,
    //     Category: `${products.categoryName}`,
    //     Price: `${products.price}`,
    //   };
      const data = await axios.post('/api/user/wishlist',
        {product: wishedProduct},
        {
        headers: {
          authorization: encodedToken,
        }});
        console.log("wishlist response",data);
        setWishClicked(true)
        dataDispatch({
          type:ACTION_TYPE.ADD_TO_WISHLIST,
          payload: data.wishList
        })
    } catch (error) {
      console.error(error); // Handle any errors
    }

  };