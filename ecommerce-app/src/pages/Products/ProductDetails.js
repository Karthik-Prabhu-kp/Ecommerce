import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails(props) {

  const {id} = useParams();
  
  return (
    <div>
        more details da for card {id}
    </div>
  )
}

export default ProductDetails