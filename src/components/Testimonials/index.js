import React, { useState, useEffect, useRef } from 'react'
import { StyledTestimonials } from './StyledTestimonials'
import Testimonial from './Testimonial'
import rightAngle from '../../svg/right.svg'
import leftAngle from '../../svg/left.svg'
import { useCarousel } from '../../hooks/useCarousel'

export default function Testimonials() {
  const testimonials = [
    {
      title: 'Build personal website',
      body:
        'Great experience overall working with Riley. Very professional and quality of work exceeded my expectation. Will surely use again.',
    },
    {
      title:
        'Help dialing-in the JS/CSS/Responsiveness of a simple one-page website.',
      body:
        'Riley was easy to work with, had great communication skills, and excelled at thinking of creative solutions to coding problems that ensured the finished product was perfect.',
    },
    {
      title: 'One Page website in one Day',
      body:
        'Completed a rush one day development job fast and with a great overall design.',
    },
    {
      title: 'Customize a Bootstrap Template',
      body: 'Riley is great to work with. Prompt and easy to communicate with.',
    },
  ]

  const testimonialRef = useRef()
  const [height, setHeight] = useState(null)
  const [index, next, previous, indexClick, pause, resume] = useCarousel({
    data: testimonials,
    element: testimonialRef,
    timeout: 4000,
    defaultVisible: false,
    arrowKeysCycle: true,
  })

  useEffect(() => {
    let height = document.querySelector('.testimonial').clientHeight
    setHeight(height)
  }, [index])

  let indexControls = []

  for (let i = 0; i < testimonials.length; i++) {
    indexControls.push(
      <div key={i} onClick={() => indexClick(i)}>
        <button
          className="index-control"
          data-index={`${i}`}
          data-active={i === index ? 'true' : null}
        />
      </div>
    )
  }

  return (
    <StyledTestimonials
      style={{ height: `${height + 40}px`, transition: '200ms ease-in' }}
      onMouseEnter={() => pause()}
      onMouseLeave={() => resume()}
      ref={testimonialRef}
      id="my-work"
    >
      <Testimonial
        title={testimonials[index].title}
        body={testimonials[index].body}
        index={index}
      />

      {/* carousel controls */}
      <span className="carousel-left" onClick={previous}>
        <img src={leftAngle} />
      </span>
      <span className="carousel-right" onClick={next}>
        <img src={rightAngle} />
      </span>
      <div className="index-container">{indexControls}</div>
    </StyledTestimonials>
  )
}
