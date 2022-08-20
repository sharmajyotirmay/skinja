import React from 'react'
import { NavLink } from "react-router-dom";
import './employe.css'
import Footer from './Footer'
export default function Employe() {
  return (
    <div className="employe-container">
      <div className="top-employe">
        <h1>Improve the productivity of your team through different events</h1>
        <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="employe-launch-nav-links"
              >
                Book Now
              </NavLink>
      </div>
      <div className="employe-events">
        <div className="events-employe-productivity service-employe-1">
          <h1>Team Building</h1>
        </div>
        <div className="events-employe-productivity service-employe-2">
        <h1>Hiring</h1>
        </div>
        <div className="events-employe-productivity service-employe-3">
        <h1>Fun-events</h1>
        </div>
        <div className="events-employe-productivity service-employe-4">
        <h1>skill development</h1>
        </div>
      </div>
      {/* <div className="work-contact">
        If you want to discuss any event contact us
      </div> */}
      <div className="services-employe">
        <div className="about-employe-product">
          <div className="text-part">
            <h1>Automate reminders and follow-ups</h1>
            <p>Calendly puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It’s like getting an assistant, even if you’re a business of one.</p>
          </div>
          <div className="image-part">
            <img src="./p2.jpg" alt="" />
          </div>
        </div>
        <div className="about-employe-product">
        <div className="image-part">
            <img src="./p3.jpg" alt="" />
          </div>
          <div className="text-part">
            <h1>Make more connections and reduce cancellations</h1>
            <p>Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
          </div>
        </div>
        <h1>schedule different meetings</h1>
        <div className="services-types">
          <div className="types">
            <h1>One on One</h1>
            <p>Let your clients and colleagues select open meeting types from your schedule</p>
            </div>
          <div className="types">
            <h1>Groups</h1>
            <p>Book events for multiple attendees such as webinars and training sessions</p>
            </div>
          <div className="types">
            <h1>Collective</h1>
            <p>Schedule across your team’s calendars for events you co-host with others</p>
            </div>
          <div className="types">
            <h1>Round robin</h1>
            <p>Balance hosting responsibilities for your team automatically</p>
            </div>
        </div>
        <div className="product-work-contact product-work-contact-employe">
        <h1>If you want to discuss a project contact us</h1>
        <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="product-launch-nav-links"
              >
                Book Now
              </NavLink>
      </div>
      </div>
    </div>
  )
}
