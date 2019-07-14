import styled from 'styled-components'
import { transitionClasses } from '../../helpers/transitionClasses'

export const StyledNavbar = styled.div`
  ${transitionClasses('modal', 300)};
  background: #343a40;
  padding: 16px 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  ul.navbar-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    width: 90%;
    list-style: none;
    align-items: center;
    font-size: 1.6rem;
    li {
      color: #fff;
      margin-right: 20px;
      h1 {
        font-size: 2.2rem;
        font-weight: bold;
        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }
      a,
      h1 {
        color: #fff;
        text-decoration: none;
        transition: 200ms ease-out;
        cursor: pointer;
        &:hover {
          color: var(--primary);
          transition: 200ms ease-in;
          opacity: 1;
        }
      }
      a {
        opacity: 0.8;
      }
    }
    div {
      display: flex;
      img {
        display: none;
      }
      @media (max-width: 768px) {
        li {
          display: none;
        }
        img {
          display: block;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
  }
  .mobile-menu-icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`
