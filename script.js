import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   --logo
 *   -- nav bar
 * Body
 *   --search
 *   --Restaurant container
 *     --Restaurant card
 * Footer
 *  --copyright
 *  --links
 *  --Address
 *  --Contact
 *  */

//Heading
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrP9DoaMR60JlpWXk3pPxsQ-TrGfqTTA1BsA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <h3>Murli Cafe</h3>
      <h4>Cakes,Burger,Chinese</h4>
      <h4>4.4 star</h4>
      <h4>30 min</h4>

    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
