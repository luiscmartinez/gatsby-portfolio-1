import React from 'react'

export default function Card({ img, activeModalImg }) {
  return (
    <div className="card">
      <img
        src={img}
        alt="my super cool projects... very cool... cool stuff"
        onClick={() => activeModalImg(img)}
      />
    </div>
  )
}
