import React from 'react'

export default function Testimonial(props) {
  return (
    <div className="testimonial">
      <h2>{props.title}</h2>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <div className="body">
        <span className="quote">&#10077;</span>
        <p>{props.body}</p>
      </div>
    </div>
  )
}
