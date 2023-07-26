import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import ProductLanding from "./pages/Products/ProductLanding";
import ProductDetails from "./pages/Products/ProductDetails";
import UserLogin from "./pages/User/UserLogin";
import { RequiresAuth } from "./components/auth/RequiresAuth";
import UserProfile from "./pages/User/UserProfile";
import UserSignup from "./pages/User/UserSignup";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/wishList" 
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>} />

        <Route path="/Cart" 
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>} />
        <Route path="/UserLogin" element={<UserLogin />} />

        <Route path="/UserProfile" 
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/ProductLanding" element={<ProductLanding />} />
        <Route path="/ProductLanding/:id" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
