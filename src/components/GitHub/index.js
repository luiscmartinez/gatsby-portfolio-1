import React, { useState, useEffect } from 'react'
import { StyledGitHub } from './StyledGitHub'
import axios from 'axios'

export default function GitHub() {
  const [latestRepos, setLatestRepos] = useState([])

  useEffect(() => {
    // setLatestRepos(repos)
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
          <div className="card">
            <h2>{repo.name}</h2>
            {repo.description && <p>{repo.description}</p>}
          </div>
        ))}
      </div>
    </StyledGitHub>
  )
}
