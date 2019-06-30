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
    h2 {
      font-size: 3rem;
      font-weight: normal;
    }
    .quote {
      font-size: 5rem;
      color: #333;
      top: -5px;
      left: 10px;
      display: inline-block;
      height: 0;
    }
    p {
      font-size: 2.1rem;
      padding: 10px 20px;
      line-height: 1.4;
      position: relative;
      opacity: 0.75;
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
  }
  .carousel-right {
    right: -120px;
    top: 50%;
    transform: translate(-50%, -50%);
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
`
