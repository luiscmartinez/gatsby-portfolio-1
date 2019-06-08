import styled from 'styled-components'

export const StyledNavbar = styled.div`
  background: #333;
  padding: 20px 0;
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    width: 90%;
    list-style: none;
    align-items: center;
    font-size: 1.7rem;
    li {
      color: #fff;
      margin-right: 20px;
      a {
        color: #fff;
        text-decoration: none;
        transition: 200ms ease-out;
        &:hover {
          color: #34b3a0;
          transition: 200ms ease-in;
        }
      }
    }
    div {
      display: flex;
    }
  }
  .site-title {
    font-weight: bold;
    font-size: 2.3rem;
  }
`
