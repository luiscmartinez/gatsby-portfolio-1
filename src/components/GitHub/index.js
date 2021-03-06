import React, { useState, useEffect } from 'react'
import { StyledGitHub } from './StyledGitHub'
import axios from 'axios'
import Fade from 'react-reveal/Fade'

export default function GitHub() {
  const [latestRepos, setLatestRepos] = useState([])

  useEffect(() => {
    const repos = async () => {
      try {
        const { data } = await axios.get('https://invent-mcs.begin.app/repos')
        setLatestRepos(data.reposJson)
      } catch (err) {
        console.log(err)
      }
    }
    repos()
  }, [])

  return (
    latestRepos.length > 0 && (
      <StyledGitHub>
        <h2 className="title">My Latest Repos</h2>
        <hr />
        <div className="cards">
          {latestRepos.map(repo => (
            <Fade cascade key={repo.id}>
              <div className="card">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{repo.name}</h2>
                  {repo.description && <p>{repo.description}</p>}
                  <span style={{ background: 'var(--primary)' }}>
                    Stars: {repo.stargazers_count}
                  </span>
                  <span style={{ background: '#6c757d' }}>
                    Watchers: {repo.watchers_count}
                  </span>
                  <span style={{ background: '#007bff' }}>
                    Forks: {repo.forks}
                  </span>
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </StyledGitHub>
    )
  )
}
