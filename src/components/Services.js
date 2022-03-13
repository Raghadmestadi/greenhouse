import React from "react"

function services() {
  return (
    <div className="services">
      <div className="s-heading">
        <h1>Our Services </h1>
      </div>
      <div className="s-box-containor">
        <div className="s-box">
          <img src="/images/shopping-bag.svg" alt="sh-bag" className="bag"></img>
          <h2>PICK UP SERVICE</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <a href="#" className="s-btn">
            more
          </a>
        </div>

        <div className="s-box">
          <img src="/images/Truck.svg" alt="truck" className="truck"></img>
          <h2>FREE DELIVERY</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <a href="#" className="s-btn">
            more
          </a>
        </div>
        <div className="s-box">
          <img src="/images/gift.svg" alt="gift" className="gift"></img>
          <h2>GIFT WRAPS</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <a href="#" className="s-btn">
            more
          </a>
        </div>
      </div>
    </div>
  )
}

export default services
