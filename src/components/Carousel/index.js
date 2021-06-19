import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledCarousel } from './StyledCarousel'
import { useCarousel } from 'hooks/useCarousel'

export default function Carousel() {
  const imageData = useStaticQuery(graphql`
    query LandingCarouselQuery {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(placeholder: BLURRED, height: 330)
            fluid {
              ...GatsbyImageSharpFluid
              originalName
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
          <div className="img-wrapper">
            <GatsbyImage image={images[index].node.gatsbyImageData} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </StyledCarousel>
  )
}
