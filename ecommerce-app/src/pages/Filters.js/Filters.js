import React from 'react'
import { useState,useEffect } from 'react';
import { useData } from '../../context/dataContext'
import { ACTION_TYPE } from '../../utils/constants';

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
    <section>
        <h2>Filters</h2>
        <span onClick={clearFiltersHandler}>Clear filters</span>
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
                min="100"
                max="1000"
                step="20"
                name="range"
                value={priceFilter}
                onChange={(e) => priceFilterHandler(e)}
            />
            </div>
        </div>
        <div>
            <h3>Categories</h3>
            <div>
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
        <div>
            <h3></h3>
            <div>
            {rates.map(rate => {
                return(
                    <div>
                    <p>Ratings {rate} and above</p>
                    <input 
                        type='radio'
                        name='rating'
                        value={rate}
                        checked={selectedRating === rate.toString()}
                        onChange={(e) => ratingFilterHandler(e.target.value)}                 
                    />
                    </div>
                );
            })}
            </div>
        </div>

    </section>);
}


export default Filters