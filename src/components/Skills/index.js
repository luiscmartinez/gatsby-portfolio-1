import React from 'react'
import { StyledSkills } from './StyledSkills'

import node from 'svg/nodejs.svg'
import react from 'svg/react.svg'
import sql from 'svg/sql.svg'
import js from 'svg/javascript.svg'
import css from 'svg/css.svg'
import typescript from 'svg/typescript.svg'

import Card from './Card'

export default function Skills() {
  return (
    <StyledSkills id="test">
      <h2>My Skills</h2>
      <hr className="styled-line" />
      <div className="cards">
        <Card title="React.js" img={react} />
        <Card title="TypeScript" img={typescript} />
        <Card title="Node.js" img={node} />
        <Card title="JavaScript" img={js} />
        <Card title="SQL" img={sql} />
        <Card title="CSS" img={css} />
      </div>
    </StyledSkills>
  )
}
