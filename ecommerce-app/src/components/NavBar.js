import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

    const navigate = useNavigate();

  return (
    <div>
        <NavLink to="/">Home Name</NavLink>
        <input className='search-container' type='search' name='search'/>
        <ul>
            <li className='icon' onClick={() => navigate("/WishList")}>
                <div>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </li>
            <li className='icon' onClick={() => navigate("/Cart")}>
                <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </li>
            <li className='icon' onClick={() => navigate("/WishList")}>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default NavBar