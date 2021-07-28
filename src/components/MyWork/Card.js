import React from 'react'
import Fade from 'react-reveal/Fade'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Card({ image, activeModalImg, index, title }) {
  return (
    <Fade>
      <button
        className="card"
        aria-label={`View ${title} image`}
        onClick={() => activeModalImg(index)}
      >
        <GatsbyImage image={getImage(image)} alt={title} placeholder="tracedSVG" />
      </button>
    </Fade>
  )
}
