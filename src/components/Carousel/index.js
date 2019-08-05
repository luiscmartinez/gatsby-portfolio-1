import React, { Component, useState, useEffect, useRef } from 'react'
import bayshells from '../../images/bayshells-landing.jpg'
import caseStudy from '../../images/upwork-10-case-study.jpg'
import learnLocker from '../../images/learn-locker.jpg'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledCarousel } from './StyledCarousel'
import { useCarousel } from '../../hooks/useCarousel'

export default function Carousel() {
  const [images, setImages] = useState([bayshells, caseStudy, learnLocker])
  const carouselContainer = useRef()
  const [index] = useCarousel({
    data: images,
    timeout: 2000,
    element: carouselContainer,
    defaultVisible: true,
  })

  return (
    <StyledCarousel ref={carouselContainer}>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames="fade"
          key={index}
          appear={true}
        >
          <img src={images[index]} alt="" className="carousel-img" />
        </CSSTransition>
      </TransitionGroup>
    </StyledCarousel>
  )
}
