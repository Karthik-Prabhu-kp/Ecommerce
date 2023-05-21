import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
