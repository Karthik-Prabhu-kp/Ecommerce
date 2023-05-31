import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import "../Products/Product.css"

function ProductCard(props) {
    let product = props.product

    const navigate = useNavigate();
    const {id} = useParams();

  return (
    <section key={product._id} className='card'>
         <span
          role="button"
          className="card-wish-list"
          >
            <i class="fa-solid fa-heart"></i>
          </span>
          <img
            className='card-img'
            src='https://loremflickr.com/640/360'
            alt="put name"
            onClick={() => navigate(`/ProductLanding/${product.id}`)}
          />
          <div className='card-info'>
              <p>{product.title }</p>
              <p>Author: {product.author}</p>
              <p>Price: {product.price}</p>
              <button>Add to Cart</button>
          </div>
    </section>
  )
}

export default ProductCard

// author
// : 
// "Shiv Khera"
// categoryName
// : 
// "non-fiction"
// id
// : 
// "1"
// price
// : 
// "5000"
// title
// : 
// "You Can WIN"
// _id
// : 
// "e104f088-b6f9-445d-bb23-f9fe607a8394"