import React from 'react'
import Fade from 'react-reveal/Fade'
import LazyLoad from 'react-lazy-load'

export default function Card({ img, activeModalImg, index, title }) {
  return (
    <Fade>
      <button
        className="card"
        aria-label={`View ${title} image`}
        onClick={() => activeModalImg(index)}
      >
        <LazyLoad offsetVertical={500} debounce={false}>
          <img src={img} alt={title} />
        </LazyLoad>
      </button>
    </Fade>
  )
}
