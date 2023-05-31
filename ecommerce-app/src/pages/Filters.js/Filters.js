import React from 'react'
import { useData } from '../../context/dataContext'

function Filters() {
    const filteredData = [];
    const {category,products} = useData()

    const priceFilterHandler = (event) => {
        const priceFiltered = products.filter(e => e.price >= +event.target.value)
        dispatch({
            type: ACTION_TYPE.SORT_BY_PRICE,
            payload: priceFiltered,
          });
        
    };
     
  return (
    <section>
        <h2>Filters</h2>
        <span>Clear filters</span>
        <div>
            <h3>Price</h3>
            <div>
            <p>100</p>
            <p>500</p>
            <p>1000</p>
          </div>
            <div>
            <input 
                type='range'
                min="500"
                max="3000"
                name="range"
                onChange={(e) => priceFilterHandler(e)}
            />
            </div>
        </div>
        <div>
            <h3>Categories</h3>
            <div>
            {category.map(e => {
                return(
                <div>
                    <p>{e.categoryName}</p>
                    <input
                        type="checkbox" 
                    />
                </div>
                );
            })}
            </div>
        </div>
        <div>
            <h3></h3>
            <div>
            ratings 1-4 map here from arry?
            <input 
                type='radio'
            />
            </div>
        </div>

    </section>
)
}

export default Filters