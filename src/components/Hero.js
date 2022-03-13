import React from "react"
import { Link } from "react-router-dom"
function Hero() {
  return (
    <div className="Hero-bg">
      <div className="main-bg">
        <div className="main-text">
          <h2>
            <span className="g">Green</span> <span>House</span>
          </h2>
          <h3>
            Best <span>Plants</span> Under One Roof
          </h3>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

          <Link to="/Shop" className="Hero-btn">
            Shop Now
          </Link>
        </div>
        <div>
          <img src="/images/h-plant.png" alt="plant" className="h-plant"></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
