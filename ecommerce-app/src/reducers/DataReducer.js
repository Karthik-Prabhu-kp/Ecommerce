import { ACTION_TYPE} from "../utils/constants"

export const initialState = {
  category:[],
  products:[],
  filteredProducts:[]
  
};//all my states for data related stuff 

export function DataReducer(state,action) {
    // console.log(state,"inreducer state");
    // console.log([...action.payload],"inreducer action");
  
    switch(action.type){
        case ACTION_TYPE.SET_INITIAL_PRODUCTS:
          return { 
              ...state,
              products: action.payload //??
          };
          
        case ACTION_TYPE.SET_INITIAL_CATEGORIES://this actin call with or near categories api call?
              return {
                ...state,
                category: action.payload
            };
        case ACTION_TYPE.SORT_BY_PRICE:
              return { 
                  ...state,
                  filteredProducts: ""
            };

        default:
            return state;
        }
       
}