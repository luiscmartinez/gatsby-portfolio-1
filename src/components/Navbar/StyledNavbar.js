import styled from 'styled-components'

export const StyledNavbar = styled.div`
  background: #343a40;
  padding: 16px 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  ul {
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
    }
  }
  .site-title {
    font-weight: bold;
    font-size: 2.2rem;
    opacity: 1;
  }
`
