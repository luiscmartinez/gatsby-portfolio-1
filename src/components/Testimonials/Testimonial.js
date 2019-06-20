import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Testimonial(props) {
  return (
    <TransitionGroup>
      <CSSTransition timeout={400} classNames="testimonial" key={props.index}>
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
      </CSSTransition>
    </TransitionGroup>
  )
}
