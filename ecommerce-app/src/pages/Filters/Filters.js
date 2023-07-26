import React from 'react'
import { useState,useEffect } from 'react';
import { useData } from '../../context/dataContext'
import { ACTION_TYPE } from '../../utils/constants';

import "./Filters.css"

function Filters() {
    
    const rates = [1,2,3,4,5];
    const filteredData = [];
    const {category,products,dataDispatch} = useData()
    const [priceFilter, setPriceFilter] = useState(100);
    const [selectedRating, setSelectedRating] = useState('');

    const priceFilterHandler = (event) => {
        const newPriceFilter = event.target.value
        setPriceFilter(newPriceFilter);
        console.log(newPriceFilter)

        localStorage.setItem('priceFilter', newPriceFilter.toString());
        console.log(newPriceFilter)
        dataDispatch({
            type: ACTION_TYPE.SORT_BY_PRICE,
            payload: newPriceFilter
          });
        
    };

    const categoryFilterHandler = (categoryName,isChecked) => {
        console.log(categoryName,isChecked)
        dataDispatch({
            type: ACTION_TYPE.SORT_BY_CATEGORY,
            payload: {
              categoryName: categoryName,
              isChecked: isChecked,
            },
          });
    };
    // const categoryFilterHandler = (categoryName, isChecked) => {
    //     const updatedCategory = category.map((categoryItem) => {
    //       if (categoryItem.categoryName === categoryName) {
    //         return {
    //           ...categoryItem,
    //           isChecked,
    //         };
    //       }
    //       return categoryItem;
    //     });
    
    //     dataDispatch({
    //       type: ACTION_TYPE.SORT_BY_CATEGORY,
    //       payload: updatedCategory,
    //     });
    //   };
    
    const ratingFilterHandler = (rate) => {
        const newRating = rate.toString();
        setSelectedRating(newRating);

        localStorage.setItem('selectedRating', newRating);   
        dataDispatch({
          type: ACTION_TYPE.SORT_BY_RATING,
          payload: newRating,
        });
      };

    const clearFiltersHandler = () => {
        setPriceFilter(100);
        setSelectedRating('');
    
        localStorage.removeItem('priceFilter');
        localStorage.removeItem('selectedRating');
        const updatedCategory = category.map((categoryItem) => ({
            ...categoryItem,
            isChecked: false,
          }));
      
    
        dataDispatch({ type: ACTION_TYPE.CLEAR_FILTERS, payload: products,updatedCategory,});
      };

    useEffect(() => {
        // Retrieve and set the saved filter values when the component mounts
        const savedPriceFilter = localStorage.getItem('priceFilter');
        const savedRating = localStorage.getItem('selectedRating');
    
        if (savedPriceFilter) {
          setPriceFilter(savedPriceFilter);
        }
    
        if (savedRating) {
          setSelectedRating(savedRating);
        }
      }, []);
    
     
  return (
    <div className="filters-container">
      <div className="filter-heading">
        <h2>Filters</h2>
        <span onClick={clearFiltersHandler}>Clear filters</span>
      </div>
      <div className="filter-section">
        <h3>Price</h3>
        <div className="price-tags">
          <p>500</p>
          <p>2,500</p>
          <p>5000</p>
        </div>
        <div className="price-range">
          <input
            type='range'
            min="500"
            max="5000"
            step="100"
            name="range"
            value={priceFilter}
            onChange={(e) => priceFilterHandler(e)}
          />
        </div>
      </div>
      <div className="filter-section">
        <h3>Categories</h3>
        <div className="category-list">
          {category.map((categoryItem, index) => (
            <div key={index}>
              <p>{categoryItem.categoryName}</p>
              <input
                type="checkbox"
                name={categoryItem.categoryName}
                checked={categoryItem.isChecked}
                onChange={(event) =>
                  categoryFilterHandler(categoryItem.categoryName, event.target.checked)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="filter-section">
        <h3>Ratings</h3>
        <div className="rating-list">
          {rates.map(rate => (
            <div key={rate}>
              <p>Ratings {rate} and above</p>
              <input
                type='radio'
                name='rating'
                value={rate}
                checked={selectedRating === rate.toString()}
                onChange={(e) => ratingFilterHandler(e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>);
}


export default Filters