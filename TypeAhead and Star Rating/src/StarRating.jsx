import React, { useState } from "react";
import "./StarRating.css"; // Optional: Create a CSS file for styling

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={`star ${
                num <= ((rating && hover) | hover) ? "on" : "off"
              }`}
            >
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
