import { useState, useEffect } from 'react';
import '../styles/Products.css'

export function StarRating ({ rate }) {
  const [filledStars, setFilledStars] = useState([]);

  useEffect(() => {
    const starsArray = Array.from({ length: 5 }, (_, i) => i < Math.round(rate));
    setFilledStars(starsArray);
  }, [rate]);

  return (
    <div className="rating">
      {filledStars.map((filled, index) => (
        <span key={index} className={filled ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  )
}