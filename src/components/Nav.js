import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="NavBar">
      <div className="logo">
        <h4 className="g">Green</h4>
        <img src="/images/leaf.svg" alt="leaf" className="leaf"></img>
        <h4>House</h4>
      </div>

      <ul className="NavLinks">
        <Link to="/">
          {" "}
          <li className="c-link">Home</li>
        </Link>
        <Link to="/About">
          <li className="c-link">About</li>
        </Link>
        <Link to="/services">
          <li className="c-link">services</li>
        </Link>
        <Link to="/Contact">
          <li className="c-link">Contact</li>
        </Link>
      </ul>
      <div className="log-in-icon">
        {" "}
        <Link to="/SignUp">
          <img src="/images/person.svg" alt="person" className="person"></img>
        </Link>
        <img src="/images/cart.svg" alt="cart" className="cart"></img>
      </div>
    </div>
  )
}

export default Nav
