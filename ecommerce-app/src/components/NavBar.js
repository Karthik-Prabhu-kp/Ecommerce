import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

    const navigate = useNavigate();

  return (
    <div className='nav-main'>
        <NavLink to="/">appHomePage</NavLink>
        <input className='search-container' type='search' placeholder='Search'/>
        <ul className='nav-links'>
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
            <li className='icon' onClick={() => navigate("/UserLogin")}>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default NavBar