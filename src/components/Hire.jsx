import React from 'react'
import './hire.css'
import { NavLink } from "react-router-dom";
export default function Hire() {
  return (
    <div className='hire-container'>
        <div className="product-launching-service">
        <div className="hire-content">
            <h1>Product-launching</h1>
            <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links-hire"
              >
                Click
              </NavLink>
            </div>
        <div className="overlay"></div>
          <img className='product-launching' src="/product.jpg" alt="" />
        </div>
        <div className="events">
        <div className="overlay"></div>
        <img className='employe-launching' src="/employe.jpg" alt="" />
            <div className="hire-content-employe">
            <h1>Employe Events</h1>
            <NavLink
                exact
                to="/Employe"
                activeClassName="active"
                className="nav-links-events"
              >
                Click
              </NavLink>
            </div>
        </div>
    </div>
  )
}
