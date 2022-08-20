import React from 'react'
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import './product.css'
export default function Product() {
  return (
    <div className='product-launch'>
      <div className="product-top-bar">
        <div className="product-text">
          <h1>Creating Digital Product should be easy</h1>
          <h3>Confused! Book a free meeting with our experts</h3>
        </div>
        <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="product-launch-nav-links"
              >
                Book Now
              </NavLink>
      </div>
      <div className="about-employe-product">
        <div className="image-part">
            <img src="./p2.jpg" alt="" />
          </div>
          <div className="text-part">
            <h1>UX Design</h1>
            <p>UX drives UI. Our team of UX designers at Acodez have ample of years of experience in the core areas of user experience, which helps them collaborate the finer modules of usability and functionality in-line with business goals and end-user needs</p>
          </div>
        </div>
        <div className="about-employe-product">
          <div className="text-part">
            <h1>Mobile</h1>
            <p>Intuitive designs combined with compelling user experience are what makes our apps stand ahead in the digital age. Seamless experience driven by international standards in collaboration with out-of-the-box ideas is the specialty of Acodez’s apps helping your business accomplish its goals.</p>
          </div>
          <div className="image-part">
            <img src="./p3.jpg" alt="" />
          </div>
        </div>
        <div className="about-employe-product">
        <div className="image-part">
            <img src="./p3.jpg" alt="" />
          </div>
          <div className="text-part">
            <h1>Web Development</h1>
            <p>Cross-browser and cross-device compatibility driven by mobile responsiveness all under one roof
Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions, we will customize the best of web development solutions for you.</p>
          </div>
        </div>
        <div className="about-employe-product">
          <div className="text-part">
            <h1>Digital marketing</h1>
            <p>Developing a long-term and reliable marketing strategy that will flourish and live a longer life, while ensuring your customers stay with you and tell the world the tales of your business’s awesomeness transforming our custom-made business strategies into real time success.</p>
          </div>
          <div className="image-part">
            <img src="./p3.jpg" alt="" />
          </div>
        </div>
        <div className="level-services-product">
        <div className="pricing"><h1>Standard</h1></div>
        <div className="pricing"><h1>Basic</h1></div>
        <div className="pricing"><h1>Everything</h1></div>
      </div>
      <div className="product-work-contact">
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
      <Footer/>
    </div>
  )
}
