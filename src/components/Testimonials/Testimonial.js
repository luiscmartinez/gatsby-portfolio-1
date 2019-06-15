import React from 'react'
import rightAngle from '../../svg/right.svg'
import leftAngle from '../../svg/left.svg'

export default function Testimonial(props) {
  return (
    <div className="testimonial">
      <h2>{props.title}</h2>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <p>
        <span className="quote">&#10077;</span>
        {props.body}
      </p>

      <span className="carousel-left">
        <img src={leftAngle} />
      </span>
      <span className="carousel-right">
        <img src={rightAngle} />
      </span>
    </div>
  )
}
