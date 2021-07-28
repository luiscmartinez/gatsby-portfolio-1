import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledCarousel } from './StyledCarousel'
import { useCarousel } from 'hooks/useCarousel'

export default function Carousel() {
  
  const imageData = useStaticQuery(graphql`
    query LandingCarouselQuery {
      allFile(filter: { sourceInstanceName: { eq: "carouselImages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
                )
            }
          }
        }
      }
    }
  `)

  const imageNames = [
    'rawberri-categories.jpg',
    'rawberri-items.jpg',
    'doge-flip.jpg',
    'bayshells-landing.jpg',
    'upwork-10-case-study.jpg',
    'learn-locker.jpg',
    'learn-locker-logged-in.jpg',
  ]

  const images = imageData.allImageSharp.edges
    .filter(edge => {
      for (let i = 0; i < imageNames.length; i++) {
        if (edge.node.fluid.originalName === imageNames[i]) {
          return edge
        }
      }
    })
    .reverse()

  const carouselContainer = useRef()

  const [index] = useCarousel({
    data: carouselImages,
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
          <div className="img-wrapper">
            <GatsbyImage image={carouselImages[index]} alt="carousel site img" placeholder="blurred"/>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </StyledCarousel>
  )
}
