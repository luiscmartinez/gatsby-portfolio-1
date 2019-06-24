import React from 'react'
import { StyledSkills } from './StyledSkills'
import node from '../../svg/nodejs.svg'
import react from '../../svg/react.svg'
import sql from '../../svg/sql.svg'
import js from '../../svg/javascript.svg'
import git from '../../svg/git.svg'
import css from '../../svg/css.svg'
import Card from './Card'
import Fade from 'react-reveal/Fade'

export default function index() {
  return (
    <StyledSkills id="test">
      <h2>My Skills</h2>
      <hr className="styled-line" />
      <div className="cards">
        <Card title="Node.js" img={node} />
        <Card title="React.js" img={react} />
        <Card title="JavaScript" img={js} />
        <Card title="SQL" img={sql} />
        <Card title="git" img={git} />
        <Card title="CSS" img={css} />
      </div>
    </StyledSkills>
  )
}
