import { ACTION_TYPE} from "../utils/constants"

export const initialAuthState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
    token: localStorage.getItem("token"),
    address: localStorage.getItem("address")
}

export function AuthReducer(state,action) {
    switch(action.type){
        case ACTION_TYPE.GET_AUTH_TOKEN:
                return { 
                    ...state,
                    token: action.payload
                };
        case ACTION_TYPE.SET_LOGIN_USER:
                return { 
                    ...state,
                    user: action.payload
                };
            default:
                return state
    }
}