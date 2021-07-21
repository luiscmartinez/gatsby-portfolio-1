import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Fade from 'react-reveal/Fade'

export default function Testimonial(props) {
  return (
    <Fade>
      <TransitionGroup>
        <CSSTransition timeout={400} classNames="testimonial" key={props.index}>
          <div className="testimonial">
            <h2>{props.title}</h2>
            {Array(5)
              .fill(null)
              .map((ele, i) => (
                <span className="star" key={i}>&#9733;</span>
              ))}
            <div className="body">
              <span className="quote">&#10077;</span>
              <p>{props.body}</p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fade>
  )
}
