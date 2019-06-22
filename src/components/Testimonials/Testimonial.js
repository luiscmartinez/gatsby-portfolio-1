import React, { useRef, useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Testimonial(props) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    console.log(ref.current.clientHeight)
    console.log(height)
    // setHeight(ref.current.clientHeight)
  })

  return (
    <TransitionGroup>
      <CSSTransition timeout={400} classNames="testimonial" key={props.index}>
        <div className="testimonial" ref={ref}>
          <h2>{props.title}</h2>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <div
            className="body"
            style={{ transition: '300ms ease-out', height: `${height}px` }}
          >
            <span className="quote">&#10077;</span>
            <p>{props.body}</p>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
