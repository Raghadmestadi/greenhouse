import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RatingStars() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        console.log(ratingValue)
        return (
          <label>
            <input
              type="radio"
              name="r-star"
              className="rb"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />{" "}
            <FontAwesomeIcon
              icon={["fas", "star"]}
              className="star"
              color={ratingValue <= hover || ratingValue <= rating ? "#F1C40F" : "#7B7D7D"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
    </>
  )
}

export default RatingStars
