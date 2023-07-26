import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return authState.token ? (
    children
  ) : (
    <Navigate to="/UserLogin" state={{ from: location }} />
  );
};

