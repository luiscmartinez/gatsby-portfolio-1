import styled from 'styled-components'
import { transitionClasses } from '../../helpers/transitionClasses'

export const StyledTestimonials = styled.div`
  ${transitionClasses('testimonial', 400)};
  max-width: 700px;
  margin: auto;
  text-align: center;
  width: 90%;
  position: relative;
  .react-reveal {
    position: relative;
  }
  .testimonial {
    position: absolute;
    width: 100%;
    will-change: contents;
    h2 {
      font-size: 3rem;
      font-weight: normal;
      @media (max-width: 600px) {
        font-size: 2.7rem;
      }
    }
    .quote {
      font-size: 5rem;
      color: #333;
      top: -5px;
      left: 10px;
      display: inline-block;
      height: 0;
      @media (max-width: 600px) {
        font-size: 4rem;
      }
    }
    p {
      font-size: 2.1rem;
      padding: 10px 20px;
      line-height: 1.4;
      position: relative;
      opacity: 0.75;
      @media (max-width: 600px) {
        font-size: 1.9rem;
      }
    }
    .star {
      color: var(--primary);
      font-size: 3rem;
    }
    .body {
      display: flex;
    }
  }
  .carousel-left,
  .carousel-right {
    color: var(--primary);
    position: absolute;
    opacity: 0.6;
    transition: 200ms ease-out;
    cursor: pointer;
    padding: 10px;
    height: 150px;
    display: flex;
    align-items: center;
    &:hover {
      opacity: 1;
      transition: 200ms ease-in;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  .carousel-left img,
  .carousel-right img {
    width: 3.5rem;
    height: 3.5rem;
  }
  .carousel-left {
    left: -120px;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1050px) {
      left: -80px;
    }
    @media (max-width: 900px) {
      left: 0px;
      top: 30%;
    }
  }
  .carousel-right {
    right: -120px;
    top: 50%;
    transform: translate(50%, -50%);
    @media (max-width: 1050px) {
      right: -80px;
      top: 30%;
    }
    @media (max-width: 900px) {
      right: 0px;
    }

    img {
      animation: bounce 2s infinite;
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(0);
    }

    40% {
      transform: translateX(30px);
    }

    60% {
      transform: translateX(15px);
    }
  }
  .index-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    div {
      padding: 15px 0;
      opacity: 0.8;
      transition: 200ms;
      cursor: pointer;
      &:hover {
        opacity: 1;
        .index-control {
          transform: translateY(-2px);
        }
      }
    }
    .index-control {
      cursor: pointer;
      margin: 0 7px;
      background: var(--primary);
      border: none;
      width: 40px;
      height: 5px;
      outline: none;
      transition: 200ms;
    }
    [data-active='true'] {
      background: #444;
    }
  }
`
