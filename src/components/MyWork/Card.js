import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Card({ img, activeModalImg, index, title }) {
  return (
    <Fade>
      <button
        className="card"
        aria-label={`View ${title} image`}
        onClick={() => activeModalImg(index)}
      >
          <img src={img} alt={title} />
      </button>
    </Fade>
  )
}
