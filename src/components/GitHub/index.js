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
      {latestRepos.map(repo => (
        <h1>{repo.name}</h1>
      ))}
    </StyledGitHub>
  )
}
