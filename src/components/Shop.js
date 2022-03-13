import React from "react"

import RatingStars from "./RatingStars"
export default function Shop(props) {
  let output
  if (props.Products === null) {
    output = <h3>Loading..</h3>
  } else {
    output = props.Products.map(Products => (
      <div key={Products.id} className="card">
        <div className="card-c">
          <div className="card-t">
            <h3>{Products.title}</h3>
            <p> {Products.description} </p>
            <RatingStars />
            <p>{Products.price}</p>
          </div>
          <div className="card-image">
            <img src={Products.image} alt="" />
          </div>
          <div className="card-b">
            <button>Add</button>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <div className="Card-p">
      <div>
        <h1>THE SHOP</h1>
        <div className="position">
          <div className="Products-cards"> {output} </div>
        </div>
      </div>
    </div>
  )
}
