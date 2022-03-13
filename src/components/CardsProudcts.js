import React, { useState } from "react"

import RatingStars from "./RatingStars"

function CardsProuducts() {
  return (
    <div className="Card-p">
      <h1> Best Selling Plants </h1>
      <div className="card">
        <div className="card-c">
          <div className="card-t">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <RatingStars />
          </div>
          <div className="card-image1"></div>
          <div className="card-b">
            <button>Add</button>
          </div>
        </div>
        <div className="card-c">
          <div className="card-t">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <RatingStars />
          </div>
          <div className="card-image2"></div>
          <div className="card-b">
            <button>Add</button>
          </div>
        </div>
        <div className="card-c">
          <div className="card-t">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <RatingStars />
          </div>
          <div className="card-image3"></div>
          <div className="card-b">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsProuducts
