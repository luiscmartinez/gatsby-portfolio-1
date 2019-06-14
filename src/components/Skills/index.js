import React from 'react'
import { StyledSkills } from './StyledSkills'
import node from '../../svg/nodejs.svg'
import react from '../../svg/react.svg'
import sql from '../../svg/sql.svg'
import js from '../../svg/javascript.svg'
import git from '../../svg/git.svg'
import css from '../../svg/css.svg'

export default function index() {
  return (
    <StyledSkills id="test">
      <h2>My Skills</h2>
      <hr className="styled-line" />
      <div className="cards">
        <div className="card">
          <h1>Node.js</h1>
          <img src={node} alt="" />
        </div>
        <div className="card">
          <h1>React.js</h1>
          <img src={react} alt="" />
        </div>
        <div className="card">
          <h1>JavaScript</h1>
          <img src={js} alt="" />
        </div>
        <div className="card">
          <h1>SQL</h1>
          <img src={sql} alt="" />
        </div>
        <div className="card">
          <h1>git</h1>
          <img src={git} alt="" />
        </div>
        <div className="card">
          <h1>CSS</h1>
          <img src={css} alt="" />
        </div>
      </div>
    </StyledSkills>
  )
}
