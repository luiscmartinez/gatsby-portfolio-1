import React from 'react'
import Fade from 'react-reveal/Fade'
import LazyLoad from 'react-lazy-load'

export default function Card({ img, activeModalImg, index }) {
  const key = Math.random()
  return (
    <Fade>
      <div className="card">
        <LazyLoad offsetVertical={500} debounce={false}>
          <img
            src={img}
            alt="my super cool projects... very cool... cool stuff"
            onClick={() => activeModalImg(index)}
          />
        </LazyLoad>
      </div>
    </Fade>
  )
}
