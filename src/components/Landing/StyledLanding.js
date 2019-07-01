import styled from 'styled-components'
import landing from '../../images/landing.jpg'
import { transitionClasses } from '../../helpers/transitionClasses'

export const StyledLanding = styled.div`
  ${transitionClasses('fade', 1000)};
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
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: auto;
    h1 {
      color: #fff;
      font-size: 4rem;
      text-align: center;
    }
    p {
      color: #b9c7cf;
      font-size: 2rem;
      max-width: 550px;
      margin: auto;
      text-align: center;
      line-height: 1.4;
      @media (max-width: 1280px) {
        max-width: 500px;
      }
    }
    button {
      text-align: center;
      display: block;
      margin: auto;
      font-size: 2rem;
      color: #fff;
      background: var(--primary);
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    }
    .carousel-wrapper {
      position: relative;
      flex: 0 0 50%;
      height: 395px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 12px,
        rgba(0, 0, 0, 0.23) 0px 6px 12px;

      img {
        width: 100%;
        margin-bottom: -7px;
      }
    }
    .landing-info {
      flex: 0 0 45%;
    }
  }
`
