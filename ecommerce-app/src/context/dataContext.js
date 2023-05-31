import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ACTION_TYPE } from "../utils/constants";
import { initialState,DataReducer } from "../reducers/DataReducer"


const DataContext = createContext();
function DataProvider({children}){
  
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const {data: response } = await axios.get("/api/categories");
        dispatch({
          type: ACTION_TYPE.SET_INITIAL_CATEGORIES,
          payload: response.categories,
        });

        const {data: products} = await axios.get("/api/products");
        console.log(products.products,"api for products")
        dispatch({
          type: ACTION_TYPE.SET_INITIAL_PRODUCTS,
          payload: products.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <DataContext.Provider
    value={{
      category: state.category,
      products: state.products,
      filteredProducts: state.filteredProducts,
      
    }}
  >
    {children}
  </DataContext.Provider>
  )
}
const useData = () => useContext(DataContext);

export  {DataProvider,useData}