import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hire from "./components/Hire";
import Product from "./components/Product";
import Employe from "./components/Employe";
import Contact from "./components/Contact"
export default function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="employe" element={<Employe />} />
          <Route path="hire" element = {<Hire/>}/>
          <Route path="contactus" element = {<Contact/>}/>
          <Route path="*" element={<NoMatch />} />
      </Routes>
      </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}