import styled from 'styled-components'
export const StyledMobileNavbar = styled.div`
  color: #222;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 60px;
  background: rgba(255, 255, 255, 0.93);
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow-y: auto;
  ul {
    width: 100%;
    margin: 50px 0;
    li {
      display: block;
      transition: 200ms ease-in;
      padding: 10px 0;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        transition: 200ms ease-out;
        a {
          color: var(--primary);
        }
      }
    }
    a {
      font-size: 4rem;
      width: 100%;
      display: block;
      cursor: pointer;
      color: #222;
      text-decoration: none;
      transition: 200ms ease-in;
    }
  }
  span {
    position: absolute;
    font-size: 6rem;
    right: 20%;
    cursor: pointer;
    color: red;
    top: -20px;
  }
`
