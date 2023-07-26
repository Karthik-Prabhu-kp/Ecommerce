import axios from 'axios';
import { ACTION_TYPE } from "./constants";


export const isProductInWishlist = (wishlisted,id) => {
    return wishlisted?.find((wishlistedItem) => wishlistedItem?._id === id) ? true : false
}

export const getWishlistProduct = async (encodedToken) => {
    try {
      const res = await axios.post("/api/user/wishlist",
      {
        headers: { authorization: encodedToken }
      });
    } catch (err) {
      console.log(err);
    }
  };

export const addToWishlist = async(wishedProduct,encodedToken,dataDispatch) => {
    try {
      const data = await axios.post('/api/user/wishlist',
        {product: wishedProduct},
        {
        headers: {
          authorization: encodedToken,
        }});
        console.log("wishlist  response",data.data.wishlist)
        dataDispatch({
          type:ACTION_TYPE.ADD_TO_WISHLIST,
          payload: data.data.wishList,
        })
    } catch (error) {
      console.error(error);
    }

  };

export const removeFromWishList = async(encodedToken,dataDispatch,productId) => {
    try {
        const data = await axios.delete(`/api/user/wishlist/${productId}`,
          {
          headers: {
            authorization: encodedToken,
          }});
          console.log("wishlist del response",data);
          
          dataDispatch({
            type:ACTION_TYPE.ADD_TO_WISHLIST,
            payload: data.data.wishList
          })
      } catch (error) {
        console.error(error);
      }
};