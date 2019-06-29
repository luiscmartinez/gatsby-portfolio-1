import React, { useState, useEffect } from 'react'
import { StyledGitHub } from './StyledGitHub'
import axios from 'axios'
import Fade from 'react-reveal/Fade'

export default function GitHub() {
  const [latestRepos, setLatestRepos] = useState([])

  useEffect(() => {
    const repos = async () => {
      const data = await axios.get(
        'https://supersystem-mailchimp-api.herokuapp.com/github'
      )
      console.log(data)
      setLatestRepos(data.data)
    }
    repos()
  }, [])

  return (
    <StyledGitHub>
      <h2 className="title">My Latest Repos</h2>
      <hr />
      <div className="cards">
        {latestRepos.map(repo => (
          <Fade cascade>
            <div className="card">
              <h2>{repo.name}</h2>
              {repo.description && <p>{repo.description}</p>}
            </div>
          </Fade>
        ))}
      </div>
    </StyledGitHub>
  )
}
