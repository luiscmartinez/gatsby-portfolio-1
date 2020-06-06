import styled from 'styled-components'
import { transitionClasses } from '../../helpers/transitionClasses'

export const StyledMyWork = styled.div`
  ${transitionClasses('modal', 300)};
  .cards {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    width: 360px;
    height: 220px;
    margin: auto;
    margin-bottom: 40px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 6px rgba(0, 0, 0, 0.23);
    border-radius: 12px;
    @media (max-width: 1300px) {
      width: 45%;
      height: 270px;
    }
    @media (max-width: 900px) {
      width: 100%;
      height: auto;
    }
    img {
      width: 100%;
      object-fit: fill;
      height: 220px;
      border-radius: 12px;
      cursor: pointer;
      display: block;
      transition: 150ms ease-out;
      &:hover {
        transform: scale(1.02);
        transition: 150ms ease-in;
      }
      @media (max-width: 1300px) {
        height: 270px;
      }
      @media (max-width: 900px) {
        height: 100%;
      }
    }
  }
  .LazyLoad {
    height: 220px;
    @media (max-width: 1300px) {
      height: 270px;
    }
    @media (max-width: 900px) {
      height: auto;
    }
    @media (max-width: 500px) {
      height: 200px;
    }
  }
`
