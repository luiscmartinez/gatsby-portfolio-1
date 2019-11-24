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
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  background-attachment: fixed;
  @media (max-width: 800px) {
    background-attachment: initial;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    padding: 70px 0;
    @media (max-height: 450px) {
      padding: 90px 0;
    }
    @media (max-width: 1100px) {
      justify-content: center;
    }
    h1 {
      color: #fff;
      font-size: 4rem;
      text-align: center;
      @media (max-width: 900px) {
        font-size: 3.2rem;
      }
      @media (max-width: 500px) {
        font-size: 2.5rem;
      }
    }
    p {
      color: #b9c7cf;
      font-size: 2rem;
      max-width: 510px;
      margin: auto;
      text-align: center;
      line-height: 1.4;
      @media (max-width: 1280px) {
        max-width: 500px;
      }
      @media (max-width: 900px) {
        font-size: 1.9rem;
      }
      @media (max-width: 500px) {
        font-size: 1.7rem;
        line-height: 1.5;
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
      @media (max-width: 900px) {
        margin-top: 10px;
      }
    }
    .carousel-wrapper {
      position: relative;
      flex: 0 0 50%;
      height: 395px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 12px,
        rgba(0, 0, 0, 0.23) 0px 6px 12px;
      @media (max-width: 1230px) {
        height: 340px;
      }

      @media (max-width: 1100px) {
        flex: 0 0 70%;
      }
      @media (max-width: 900px) {
        height: 250px;
      }
      @media (max-width: 600px) {
        flex: 0 0 90%;
      }
      @media (max-width: 500px) {
        flex: 0 0 100%;
        display: none;
      }

      img {
        width: 100%;
        margin-bottom: -7px;
      }
    }
    .landing-info {
      flex: 0 0 45%;
      @media (max-width: 1100px) {
        flex: 0 0 70%;
        order: -1;
        margin-bottom: 20px;
      }
      @media (max-width: 768px) {
        flex: 0 0 90%;
      }
      @media (max-width: 600px) {
        flex: 0 0 100%;
      }
    }
  }
`
