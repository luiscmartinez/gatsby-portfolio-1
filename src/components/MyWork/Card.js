import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Card({ img, activeModalImg, index }) {
  const key = Math.random()
  return (
    <Fade key={key}>
      <div className="card">
        <img
          src={img}
          alt="my super cool projects... very cool... cool stuff"
          onClick={() => activeModalImg(index)}
        />
      </div>
    </Fade>
  )
}
