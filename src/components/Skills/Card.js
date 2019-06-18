import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Card(props) {
  const key = Math.random()
  return (
    <Fade cascade key={key}>
      <div className="card">
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.title} />
      </div>
    </Fade>
  )
}
