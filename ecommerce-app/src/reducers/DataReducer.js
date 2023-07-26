import { ACTION_TYPE} from "../utils/constants"

export const initialState = {
  category:[],
  products:[],
  filteredPrice:[],
  cart:[],
  wishList:[],
  filteredByRating: "",
  categoryFilter:"",
  //shuld i filter here or have a util
  
};//all my states for data related stuff 

export function DataReducer(state,action) {
    console.log(action.payload,"inreducer action");
    switch(action.type){
        case ACTION_TYPE.SET_INITIAL_PRODUCTS:
          return { 
              ...state,
              products: action.payload //??
          };
        case ACTION_TYPE.SET_INITIAL_CATEGORIES:
          const categoryArr = action.payload.map((category) => ({
            // categoryName: category.categoryName,
            // image: category.image,
            ...category,
            isChecked: false,
          }));
          return {
            ...state,
            category: categoryArr,
          };          
        case ACTION_TYPE.SORT_BY_PRICE:
              return { 
                  ...state,
                  filterByPrice: action.payload
            };
        case ACTION_TYPE.SORT_BY_RATING:
              return { 
                  ...state,
                  filterByRating: action.payload
            };
        case ACTION_TYPE.SORT_BY_CATEGORY:
              const { categoryName, isChecked } = action.payload;
              return {
                ...state,
                category: state.category.map((categoryItem) => {
                  if (categoryItem.categoryName === categoryName) {
                    return {
                      ...categoryItem,
                      isChecked: isChecked,
                    };
                  }
                  return categoryItem;
                }),
              };        
        case ACTION_TYPE.CLEAR_FILTERS:
                const updatedCategory = state.category.map((categoryItem) => ({
                  ...categoryItem,
                  isChecked: false,
                }));
              
                return {
                  products: action.payload,
                  filteredPrice: "",
                  cart: state.cart,
                  filteredByRating: "",
                  category: updatedCategory,
                  // Reset any other filter-related state properties to their default values
                };
        case ACTION_TYPE.ADD_TO_CART:
                return { 
                    ...state,
                    cart: action.payload
                    
              };
        case ACTION_TYPE.REMOVE_FROM_CART:
                return { 
                    ...state,
                    cart: action.payload
                    
              };
        case ACTION_TYPE.ADD_TO_WISHLIST:
                return { 
                    ...state,
                    wishList: action.payload
                    
              };
        default:
            return state;
        }
       
}