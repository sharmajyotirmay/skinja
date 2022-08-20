import React from 'react'
import './home.css'
import { NavLink } from "react-router-dom";
import Pastevents from './Pastevents';
import Review from './Review';
import Hire from './Hire';
import Footer from './Footer';
export default function Home() {
  return (
    <>
    <div className='home-container'>
        <div className="text-container">
        <h1 className='home-title'>We at Skinja provide services for your company and help you grow your employes</h1>
        <NavLink
                exact
                to="/hire"
                activeClassName="active"
                className="nav-links-home"
                style={{
                  color: "black"
                }}
                >
                Hire us
              </NavLink>
        </div>
        <div className="image">
          <img className='homepage' src="/homepage.jpg" alt="" />
        </div>
    </div>
    <Pastevents/>
    <Review/>
    <Hire/>
    <Footer/>
    </>
  )
}

