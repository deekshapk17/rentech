// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RentechImage from 'C:/Users/ktgol/rentech/src/Rentech.png'; // Adjust the path based on your file structure
import Login from './login'; // Import the Login component
import Signup from './signup'; // Import the Signup component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar background">
          <ul className="nav-list">
            <div className="logo">
              <img src={RentechImage} alt="xyz" />
            </div>
            <li>
              <Link to="/">Home</Link> {/* Link to the home page */}
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link> {/* Link to the login page */}
            </li>
          </ul>

          <div className="rightNav">
            <input
              type="text"
              name="search"
              id="search"
            />
            <button className="btn btn-sm">
              Search
            </button>
          </div>
        </nav>

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Define the home page route */}
          <Route path="/login" element={<Login />} /> {/* Define the login page route */}
          <Route path="/signup" element={<Signup />} /> {/* Define the signup page route */}
        </Routes>
      </div>
    </Router>
  );
}

// The HomePage function is your main page content
function HomePage() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Rent the Latest Tech Gadgets</h1>
          <p>Affordable and convenient tech rentals for all your needs.</p>
          <a href="#rentals" className="cta-button">Browse Rentals</a>
        </div>
        <img src={RentechImage} alt="Tech Gadgets" className="hero-image" />
      </section>
      <section className="hero1">
        <div className="hero1-content">
          <img src="\hero.jpg" alt="Tech Gadgets" className="hero1-image" />
          <h2>Rent for All Your Needs</h2>
          <p>
            Whether you're looking for the latest gadgets, tech essentials, or professional equipment, we've got you covered. 
            Enjoy renting at very reasonable charges with the peace of mind that comes with our quality assurance. 
            We ensure all products are in top-notch condition, making your rental experience hassle-free!
          </p>
        </div>
      </section>

      <section id="categories" className="categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="\game.png" alt="Gaming Console" style={{ width: '150px', height: 'auto' }} />
            <h3>Gaming Consoles</h3>
            <p>Experience gaming with the latest consoles. Perfect for weekend fun!</p>
          </div>
          <div className="category-item">
            <img src="\speaker.png" alt="Speakers" />
            <h3>Speakers</h3>
            <p>High-quality audio equipment for every occasion.</p>
          </div>
          <div className="category-item">
            <img src="\camera.png" alt="Cameras" style={{ width: '150px', height: 'auto' }} />
            <h3>Cameras</h3>
            <p>Capture your moments with professional cameras.</p>
          </div>
          <div className="category-item">
            <img src="\vr.png" alt="VR Headset" style={{ width: '200px', height: 'auto' }} />
            <h3>VR Headsets</h3>
            <p>Immerse yourself in virtual reality with cutting-edge VR headsets. Perfect for weekend fun!</p>
          </div>
          <div className="category-item">
            <img src="\drone.png" alt="Drones" style={{ width: '500px', height: 'auto' }} />
            <h3>Drones</h3>
            <p>Experience aerial views with high-tech drones.</p>
          </div>
        </div>
      </section>
      <div className="foot">
        <p>BE TE sem 5 mini project</p>
      </div>
    </>
  );
}

export default App;
