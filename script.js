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
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <h3>Murli Cafe</h3>

        </div>
    )

}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
