import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Nav() {
  const [isMobile, setisMobile] = useState(false)
  return (
    <div className="NavBar">
      <div className="logo">
        <h4 className="g">Green</h4>
        <img src="/images/leaf.svg" alt="leaf" className="leaf"></img>
        <h4>House</h4>
      </div>

      <div className="mobile-menu-icon" onClick={() => setisMobile(!isMobile)}>
        {isMobile ? (
          <li>
            <img src="/images/close.svg" alt="close" className="close"></img>
          </li>
        ) : (
          <img src="/images/menu.svg" alt="menu" className="menu" />
        )}
      </div>
      <ul className={isMobile ? "NavLinks-mobile" : "NavLinks"} onClick={() => setisMobile(false)}>
        <li>
          <img src="/images/close.svg" alt="close" className="close"></img>
        </li>
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
