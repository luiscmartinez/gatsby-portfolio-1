import styled from 'styled-components'
import landing from '../../images/landing.jpg'

export const StyledLanding = styled.div`
  background-image: linear-gradient(
      rgba(34, 84, 112, 0.85),
      rgba(34, 84, 112, 0.85)
    ),
    url(${landing});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  .container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin: 30vh auto 0;
    h1 {
      color: #fff;
      font-size: 4rem;
      text-align: center;
    }
    p {
      color: #fff;
      font-size: 2rem;
      opacity: 0.7;
      max-width: 550px;
      margin: auto;
      text-align: center;
      line-height: 1.4;
    }
    button {
      text-align: center;
      display: block;
      margin: auto;
      font-size: 2.1rem;
      color: #fff;
      background: #34b3a0;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    }
  }
`
