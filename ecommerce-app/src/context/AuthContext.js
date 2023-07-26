import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ACTION_TYPE } from "../utils/constants";
import { AuthReducer, initialAuthState} from "../reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";


export const AuthContext = createContext();
export function AuthProvider({children}) {
    
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
    const location = useLocation();
    const navigate = useNavigate();

    const loginClicked = async (userEmail,userPassword) => { 
      try {
        const {data: response} = await axios.post('/api/auth/login', {
          email: `${userEmail}`,
          password: `${userPassword}`,
        });
        console.log("login response",response)
        localStorage.setItem("token",  JSON.stringify(response.encodedToken));
        localStorage.setItem("user",  JSON.stringify(response.foundUser));
        authDispatch({
          type:ACTION_TYPE.GET_AUTH_TOKEN,
          payload: response.encodedToken
        });
        authDispatch({
          type:ACTION_TYPE.SET_LOGIN_USER,
          payload: response.foundUser
        });
        navigate(location?.state?.from?.pathname ? location?.state?.from?.pathname : "/");
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    const logoutClicked = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // localStorage.removeItem("address");
      authDispatch({ type: ACTION_TYPE.SET_LOGIN_USER, payload: {} });
      authDispatch({ type: ACTION_TYPE.GET_AUTH_TOKEN, payload: "" });
      // authDispatch({ type: "setAddress", payload: [] });
      
    };

    const signupClicked = async (userFirstName,userLastName,userEmail,userPassword) => {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstName: `${userFirstName}`,
          lastName: `${userLastName}`,
          email: `${userEmail}`,
          password: `${userPassword}`,
        });
        // saving the encodedToken in the localStorage
        console.log("signIn response",response.data.createdUser)
        localStorage.setItem("token",  JSON.stringify(response.data.encodedToken));
        localStorage.setItem("user",  JSON.stringify(response.data.createdUser));
        authDispatch({
          type:ACTION_TYPE.GET_AUTH_TOKEN,
          payload: response.data.encodedToken
        });
        authDispatch({
          type:ACTION_TYPE.SET_LOGIN_USER,
          payload: response.data.createdUser
        });
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    };

    const getUserAddress = () => {

    };


    return(
        <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            loginClicked,
            logoutClicked,
            signupClicked,
            user: authState.user,
            token: authState.token,
            address: authState.address
         }}>
            { children } 
        </AuthContext.Provider>
    )
}
