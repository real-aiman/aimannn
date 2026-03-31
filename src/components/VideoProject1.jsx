import React from "react";
import "./VideoProject1.css";
import ShoppingImage from "../assets/shopping.png";

function VideoProject1() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FashionWear</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dresses</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section 
        className="hero"
        style={{ backgroundImage: `url(${ShoppingImage})` }}
      >
        <div className="overlay"></div>

        <div className="content">
          <h1>Elegant & Stylish Dresses</h1>
          <p>Discover the latest fashion for every occasion</p>

          <div className="buttons">
            <a href="#" className="btn">Shop Now</a>
            <a href="#" className="btn outline">View Collection</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoProject1;