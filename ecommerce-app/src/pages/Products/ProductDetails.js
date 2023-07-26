import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext';

function ProductDetails() {

  const {products} = useData();
  const {id} = useParams();
  
  return (
    <div>
      {products.map(e => e.id === id ? 
      <div>
        <h2>{e.title}</h2>
        <p>Author: {e.author}</p>
        <p>price: {e.price}</p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div> : null)}
    </div>
  )
}

export default ProductDetails